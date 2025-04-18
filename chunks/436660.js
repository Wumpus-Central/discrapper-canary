n.d(t, { Q: () => c }), n(784620), n(973216), n(583741), n(388685), n(35282);
var r = n(327432),
    i = n(91313),
    a = n(887490),
    o = n(42530);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
let c = (function (e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
})(
    (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                )),
                r.forEach(function (t) {
                    s(e, t, n[t]);
                });
        }
        return e;
    })({}, r.YR),
    {
        resetSelectionToStart(e) {
            r.YR.select(e, a.bN.start(e, []));
        },
        resetSelectionToEnd(e) {
            r.YR.select(e, a.bN.end(e, []));
        },
        delete(e, t) {
            let { at: n, distance: i, unit: o, reverse: s = !1, select: l = !1, bounds: c, voids: u } = t;
            if (null == n) {
                if (null == e.selection) return;
                n = e.selection;
            }
            let [d, f] = a.M8.isRange(n) ? a.M8.edges(n) : a.bN.edges(e, n);
            if (null != i || null != o) {
                var _, p, h;
                if (s) {
                    let t =
                        null !=
                        (_ = a.bN.before(e, d, {
                            distance: i,
                            unit: o
                        }))
                            ? _
                            : a.bN.start(e, []);
                    if ('character' === o && (null != i ? i : 1) === 1 && a.C0.equals(d.path, f.path)) {
                        let n = a.bN.leaf(e, d.path),
                            r = null != n ? n[0].text : '';
                        r.length > 0 &&
                            null != r[r.length - 1].match(/[\u0E00-\u0E7F]/) &&
                            (t =
                                null !=
                                (p = a.bN.before(e, d, {
                                    distance: i,
                                    unit: 'offset'
                                }))
                                    ? p
                                    : a.bN.start(e, []));
                    }
                    d = t;
                } else
                    f =
                        null !=
                        (h = a.bN.after(e, f, {
                            distance: i,
                            unit: o
                        }))
                            ? h
                            : a.bN.end(e, []);
            }
            if (null != c) {
                let [e, t] = a.M8.edges(c);
                a.Jz.isBefore(d, e) && (d = e), a.Jz.isAfter(f, t) && (f = t);
            }
            !a.Jz.equals(d, f) &&
                (r.YR.delete(e, {
                    at: {
                        anchor: d,
                        focus: f
                    },
                    hanging: !0,
                    voids: u
                }),
                l && a.bN.hasPath(e, d.path) && r.YR.select(e, d));
        },
        textToText(e, t, n) {
            var i;
            let o = a.bN.getSelectionOverlap(e, n),
                [s, l] = a.M8.edges(n),
                c = null != (i = a.bN.before(e, s)) ? i : a.bN.start(e, []),
                u = a.bN.after(e, l);
            a.M8.isExpanded(n) &&
                r.YR.delete(e, {
                    at: n,
                    voids: !0
                }),
                r.YR.insertText(e, t, { at: c }),
                (c = null != c ? c : a.bN.start(e, [])),
                (u = null != u ? u : a.bN.end(e, [])),
                d(e, o, c, u, u);
        },
        textToVoid(e, t, n) {
            let i = a.bN.getSelectionOverlap(e, n),
                o = a.M8.start(n),
                s = a.C0.next(o.path),
                l = {
                    path: a.C0.next(s),
                    offset: 0
                };
            r.YR.delete(e, {
                at: n,
                voids: !0
            }),
                0 === o.offset && r.YR.insertNodes(e, [{ text: '' }], { at: o.path }),
                r.YR.insertNodes(e, [t], { at: o }),
                (a.bN.hasPath(e, l.path) && a.LC.isText(a.bN.node(e, l.path)[0])) || r.YR.insertNodes(e, [{ text: '' }], { at: l.path }),
                d(e, i, o, l, l);
        },
        textToInline(e, t, n) {
            let i = a.bN.getSelectionOverlap(e, n),
                o = t.children[t.children.length - 1],
                s = a.M8.start(n),
                l = a.C0.next(s.path),
                c = {
                    path: a.C0.child(l, t.children.length - 1),
                    offset: a.LC.isText(o) ? o.text.length : 0
                };
            r.YR.delete(e, {
                at: n,
                voids: !0
            }),
                0 === s.offset && r.YR.insertNodes(e, [{ text: '' }], { at: s.path }),
                r.YR.insertNodes(e, [t], { at: s }),
                d(e, i, s, c, c);
        },
        voidToText(e, t, n) {
            var i;
            let o = a.bN.getSelectionOverlap(e, n),
                s = null != (i = a.bN.before(e, n)) ? i : a.bN.start(e, []),
                l = {
                    path: s.path,
                    offset: s.offset + t.length
                };
            r.YR.delete(e, {
                at: n,
                voids: !0
            }),
                r.YR.insertText(e, t, { at: s }),
                d(e, o, s, s, l);
        },
        removeInline(e, t) {
            var n;
            let i = a.bN.getSelectionOverlap(e, t),
                o = null != (n = a.bN.before(e, t)) ? n : a.bN.start(e, []);
            r.YR.delete(e, {
                at: t,
                voids: !0
            }),
                d(e, i, o, o, o);
        },
        removeInlineChildren(e, t) {
            let [n, i] = t,
                o = a.bN.getSelectionOverlap(e, i),
                s = {
                    path: a.C0.child(i, 0),
                    offset: 0
                };
            a.bN.withoutNormalizing(e, () => {
                for (let t = n.children.length - 1; t >= 0; t--)
                    r.YR.removeNodes(e, {
                        at: a.C0.child(i, t),
                        voids: !0
                    });
            }),
                d(e, o, null, s, null);
        },
        selectCommandOption(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                o = i.cr(e);
            if (null != o)
                for (let i = 0; i < o[0].children.length; i++) {
                    let s = o[0].children[i];
                    if (a.aj.isType(s, 'applicationCommandOption') && s.optionName === t) return void (n ? r.YR.select(e, [0, i]) : r.YR.select(e, a.bN.end(e, [0, i])));
                }
        },
        selectPreviousCommandOption(e) {
            if (null == i.cr(e)) return;
            let t = null != e.selection ? e.selection.focus.path : a.bN.end(e, o.YD).path,
                n = i.HZ(e),
                s = a.bN.previous(e, {
                    at: t,
                    match: (e) => e !== (null == n ? void 0 : n[0]) && a.aj.isType(e, 'applicationCommandOption')
                });
            null != s ? r.YR.select(e, s[1]) : a.C0.isAfter(t, o.u9) && r.YR.select(e, a.bN.end(e, o.u9));
        },
        selectNextCommandOption(e) {
            if (null == i.cr(e)) return;
            let t = null != e.selection ? e.selection.focus.path : a.bN.start(e, o.YD).path,
                n = i.HZ(e),
                s = a.bN.next(e, {
                    at: t,
                    match: (e) => e !== (null == n ? void 0 : n[0]) && a.aj.isType(e, 'applicationCommandOption')
                });
            null != s ? r.YR.select(e, s[1]) : c.resetSelectionToEnd(e);
        },
        insertCommandOption(e, t) {
            c.resetSelectionToEnd(e),
                c.insertNodes(e, [
                    {
                        type: 'applicationCommandOption',
                        optionName: t.name,
                        optionDisplayName: t.displayName,
                        optionType: t.type,
                        children: [{ text: '' }]
                    }
                ]);
        },
        keyboardMove(e, t) {
            let { reverse: n = !1, unit: i = 'character', edge: o } = null != t ? t : {},
                s = e.selection;
            if (null == s) return;
            if (void 0 === o && a.M8.isExpanded(s)) return void r.YR.collapse(e, { edge: n ? 'start' : 'end' });
            let l = a.bN.leaf(e, s.anchor.path);
            if (null == l) return;
            let c = n ? a.bN.before : a.bN.after,
                u = s.focus;
            for (; null != u; ) {
                let t = i;
                n || s.focus.offset !== l[0].text.length ? n && 0 === s.focus.offset && (t = 'offset') : (t = 'offset');
                let r = c(e, u, { unit: t });
                if (null == r || a.Jz.equals(u, r)) {
                    u = void 0;
                    break;
                }
                if (((u = r), null == a.bN.getParentVoid(e, u))) break;
            }
            null != u &&
                ('focus' === o
                    ? r.YR.setSelection(e, { focus: u })
                    : r.YR.setSelection(e, {
                          focus: u,
                          anchor: u
                      }));
        }
    }
);
function u(e, t, n, r, i) {
    switch (t) {
        case 'start':
            return n;
        case 'inside':
            return r;
        case 'end':
            return i;
    }
    return e;
}
function d(e, t, n, r, i) {
    var a, o;
    if (null == t.anchor && null == t.focus) return;
    let s = u(null == (a = e.selection) ? void 0 : a.anchor, t.anchor, n, r, i),
        l = u(null == (o = e.selection) ? void 0 : o.focus, t.focus, n, r, i);
    if (null == s || null == l) return;
    let d = {
        anchor: s,
        focus: l
    };
    c.select(e, d);
}

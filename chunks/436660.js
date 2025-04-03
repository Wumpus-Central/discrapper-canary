n.d(t, { Q: () => c }), n(571269), n(298267), n(978209), n(47120), n(301563);
var r = n(327432),
    i = n(91313),
    o = n(887490),
    a = n(42530);
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
            r.YR.select(e, o.bN.start(e, []));
        },
        resetSelectionToEnd(e) {
            r.YR.select(e, o.bN.end(e, []));
        },
        delete(e, t) {
            let { at: n, distance: i, unit: a, reverse: s = !1, select: l = !1, bounds: c, voids: u } = t;
            if (null == n) {
                if (null == e.selection) return;
                n = e.selection;
            }
            let [d, f] = o.M8.isRange(n) ? o.M8.edges(n) : o.bN.edges(e, n);
            if (null != i || null != a) {
                var _, p, h;
                if (s) {
                    let t =
                        null !=
                        (_ = o.bN.before(e, d, {
                            distance: i,
                            unit: a
                        }))
                            ? _
                            : o.bN.start(e, []);
                    if ('character' === a && (null != i ? i : 1) === 1 && o.C0.equals(d.path, f.path)) {
                        let n = o.bN.leaf(e, d.path),
                            r = null != n ? n[0].text : '';
                        r.length > 0 &&
                            null != r[r.length - 1].match(/[\u0E00-\u0E7F]/) &&
                            (t =
                                null !=
                                (p = o.bN.before(e, d, {
                                    distance: i,
                                    unit: 'offset'
                                }))
                                    ? p
                                    : o.bN.start(e, []));
                    }
                    d = t;
                } else
                    f =
                        null !=
                        (h = o.bN.after(e, f, {
                            distance: i,
                            unit: a
                        }))
                            ? h
                            : o.bN.end(e, []);
            }
            if (null != c) {
                let [e, t] = o.M8.edges(c);
                o.Jz.isBefore(d, e) && (d = e), o.Jz.isAfter(f, t) && (f = t);
            }
            !o.Jz.equals(d, f) &&
                (r.YR.delete(e, {
                    at: {
                        anchor: d,
                        focus: f
                    },
                    hanging: !0,
                    voids: u
                }),
                l && o.bN.hasPath(e, d.path) && r.YR.select(e, d));
        },
        textToText(e, t, n) {
            var i;
            let a = o.bN.getSelectionOverlap(e, n),
                [s, l] = o.M8.edges(n),
                c = null != (i = o.bN.before(e, s)) ? i : o.bN.start(e, []),
                u = o.bN.after(e, l);
            o.M8.isExpanded(n) &&
                r.YR.delete(e, {
                    at: n,
                    voids: !0
                }),
                r.YR.insertText(e, t, { at: c }),
                (c = null != c ? c : o.bN.start(e, [])),
                (u = null != u ? u : o.bN.end(e, [])),
                d(e, a, c, u, u);
        },
        textToVoid(e, t, n) {
            let i = o.bN.getSelectionOverlap(e, n),
                a = o.M8.start(n),
                s = o.C0.next(a.path),
                l = {
                    path: o.C0.next(s),
                    offset: 0
                };
            r.YR.delete(e, {
                at: n,
                voids: !0
            }),
                0 === a.offset && r.YR.insertNodes(e, [{ text: '' }], { at: a.path }),
                r.YR.insertNodes(e, [t], { at: a }),
                (o.bN.hasPath(e, l.path) && o.LC.isText(o.bN.node(e, l.path)[0])) || r.YR.insertNodes(e, [{ text: '' }], { at: l.path }),
                d(e, i, a, l, l);
        },
        textToInline(e, t, n) {
            let i = o.bN.getSelectionOverlap(e, n),
                a = t.children[t.children.length - 1],
                s = o.M8.start(n),
                l = o.C0.next(s.path),
                c = {
                    path: o.C0.child(l, t.children.length - 1),
                    offset: o.LC.isText(a) ? a.text.length : 0
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
            let a = o.bN.getSelectionOverlap(e, n),
                s = null != (i = o.bN.before(e, n)) ? i : o.bN.start(e, []),
                l = {
                    path: s.path,
                    offset: s.offset + t.length
                };
            r.YR.delete(e, {
                at: n,
                voids: !0
            }),
                r.YR.insertText(e, t, { at: s }),
                d(e, a, s, s, l);
        },
        removeInline(e, t) {
            var n;
            let i = o.bN.getSelectionOverlap(e, t),
                a = null != (n = o.bN.before(e, t)) ? n : o.bN.start(e, []);
            r.YR.delete(e, {
                at: t,
                voids: !0
            }),
                d(e, i, a, a, a);
        },
        removeInlineChildren(e, t) {
            let [n, i] = t,
                a = o.bN.getSelectionOverlap(e, i),
                s = {
                    path: o.C0.child(i, 0),
                    offset: 0
                };
            o.bN.withoutNormalizing(e, () => {
                for (let t = n.children.length - 1; t >= 0; t--)
                    r.YR.removeNodes(e, {
                        at: o.C0.child(i, t),
                        voids: !0
                    });
            }),
                d(e, a, null, s, null);
        },
        selectCommandOption(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                a = i.cr(e);
            if (null != a)
                for (let i = 0; i < a[0].children.length; i++) {
                    let s = a[0].children[i];
                    if (o.aj.isType(s, 'applicationCommandOption') && s.optionName === t) return void (n ? r.YR.select(e, [0, i]) : r.YR.select(e, o.bN.end(e, [0, i])));
                }
        },
        selectPreviousCommandOption(e) {
            if (null == i.cr(e)) return;
            let t = null != e.selection ? e.selection.focus.path : o.bN.end(e, a.YD).path,
                n = i.HZ(e),
                s = o.bN.previous(e, {
                    at: t,
                    match: (e) => e !== (null == n ? void 0 : n[0]) && o.aj.isType(e, 'applicationCommandOption')
                });
            null != s ? r.YR.select(e, s[1]) : o.C0.isAfter(t, a.u9) && r.YR.select(e, o.bN.end(e, a.u9));
        },
        selectNextCommandOption(e) {
            if (null == i.cr(e)) return;
            let t = null != e.selection ? e.selection.focus.path : o.bN.start(e, a.YD).path,
                n = i.HZ(e),
                s = o.bN.next(e, {
                    at: t,
                    match: (e) => e !== (null == n ? void 0 : n[0]) && o.aj.isType(e, 'applicationCommandOption')
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
            let { reverse: n = !1, unit: i = 'character', edge: a } = null != t ? t : {},
                s = e.selection;
            if (null == s) return;
            if (void 0 === a && o.M8.isExpanded(s)) return void r.YR.collapse(e, { edge: n ? 'start' : 'end' });
            let l = o.bN.leaf(e, s.anchor.path);
            if (null == l) return;
            let c = n ? o.bN.before : o.bN.after,
                u = s.focus;
            for (; null != u; ) {
                let t = i;
                n || s.focus.offset !== l[0].text.length ? n && 0 === s.focus.offset && (t = 'offset') : (t = 'offset');
                let r = c(e, u, { unit: t });
                if (null == r || o.Jz.equals(u, r)) {
                    u = void 0;
                    break;
                }
                if (((u = r), null == o.bN.getParentVoid(e, u))) break;
            }
            null != u &&
                ('focus' === a
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
    var o, a;
    if (null == t.anchor && null == t.focus) return;
    let s = u(null == (o = e.selection) ? void 0 : o.anchor, t.anchor, n, r, i),
        l = u(null == (a = e.selection) ? void 0 : a.focus, t.focus, n, r, i);
    if (null == s || null == l) return;
    let d = {
        anchor: s,
        focus: l
    };
    c.select(e, d);
}

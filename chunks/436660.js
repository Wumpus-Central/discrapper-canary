n.d(t, { Q: () => o }), n(571269), n(298267), n(47120);
var i = n(327432),
    r = n(91313),
    a = n(887490),
    s = n(42530);
let o = {
    ...i.YR,
    resetSelectionToStart(e) {
        i.YR.select(e, a.bN.start(e, []));
    },
    resetSelectionToEnd(e) {
        i.YR.select(e, a.bN.end(e, []));
    },
    delete(e, t) {
        let { at: n, distance: r, unit: s, reverse: o = !1, select: l = !1, bounds: u, voids: c } = t;
        if (null == n) {
            if (null == e.selection) return;
            n = e.selection;
        }
        let [d, f] = a.M8.isRange(n) ? a.M8.edges(n) : a.bN.edges(e, n);
        if (null != r || null != s) {
            var _, p, h;
            if (o) {
                let t =
                    null !==
                        (_ = a.bN.before(e, d, {
                            distance: r,
                            unit: s
                        })) && void 0 !== _
                        ? _
                        : a.bN.start(e, []);
                if ('character' === s && (null != r ? r : 1) === 1 && a.C0.equals(d.path, f.path)) {
                    let n = a.bN.leaf(e, d.path),
                        i = null != n ? n[0].text : '';
                    i.length > 0 &&
                        null != i[i.length - 1].match(/[\u0E00-\u0E7F]/) &&
                        (t =
                            null !==
                                (p = a.bN.before(e, d, {
                                    distance: r,
                                    unit: 'offset'
                                })) && void 0 !== p
                                ? p
                                : a.bN.start(e, []));
                }
                d = t;
            } else
                f =
                    null !==
                        (h = a.bN.after(e, f, {
                            distance: r,
                            unit: s
                        })) && void 0 !== h
                        ? h
                        : a.bN.end(e, []);
        }
        if (null != u) {
            let [e, t] = a.M8.edges(u);
            a.Jz.isBefore(d, e) && (d = e), a.Jz.isAfter(f, t) && (f = t);
        }
        !a.Jz.equals(d, f) &&
            (i.YR.delete(e, {
                at: {
                    anchor: d,
                    focus: f
                },
                hanging: !0,
                voids: c
            }),
            l && a.bN.hasPath(e, d.path) && i.YR.select(e, d));
    },
    textToText(e, t, n) {
        var r;
        let s = a.bN.getSelectionOverlap(e, n),
            [o, l] = a.M8.edges(n),
            c = null !== (r = a.bN.before(e, o)) && void 0 !== r ? r : a.bN.start(e, []),
            d = a.bN.after(e, l);
        a.M8.isExpanded(n) &&
            i.YR.delete(e, {
                at: n,
                voids: !0
            }),
            i.YR.insertText(e, t, { at: c }),
            (c = null != c ? c : a.bN.start(e, [])),
            (d = null != d ? d : a.bN.end(e, [])),
            u(e, s, c, d, d);
    },
    textToVoid(e, t, n) {
        let r = a.bN.getSelectionOverlap(e, n),
            s = a.M8.start(n),
            o = a.C0.next(s.path),
            l = {
                path: a.C0.next(o),
                offset: 0
            };
        i.YR.delete(e, {
            at: n,
            voids: !0
        }),
            0 === s.offset && i.YR.insertNodes(e, [{ text: '' }], { at: s.path }),
            i.YR.insertNodes(e, [t], { at: s }),
            (a.bN.hasPath(e, l.path) && a.LC.isText(a.bN.node(e, l.path)[0])) || i.YR.insertNodes(e, [{ text: '' }], { at: l.path }),
            u(e, r, s, l, l);
    },
    textToInline(e, t, n) {
        let r = a.bN.getSelectionOverlap(e, n),
            s = t.children[t.children.length - 1],
            o = a.M8.start(n),
            l = a.C0.next(o.path),
            c = {
                path: a.C0.child(l, t.children.length - 1),
                offset: a.LC.isText(s) ? s.text.length : 0
            };
        i.YR.delete(e, {
            at: n,
            voids: !0
        }),
            0 === o.offset && i.YR.insertNodes(e, [{ text: '' }], { at: o.path }),
            i.YR.insertNodes(e, [t], { at: o }),
            u(e, r, o, c, c);
    },
    voidToText(e, t, n) {
        var r;
        let s = a.bN.getSelectionOverlap(e, n),
            o = null !== (r = a.bN.before(e, n)) && void 0 !== r ? r : a.bN.start(e, []),
            l = {
                path: o.path,
                offset: o.offset + t.length
            };
        i.YR.delete(e, {
            at: n,
            voids: !0
        }),
            i.YR.insertText(e, t, { at: o }),
            u(e, s, o, o, l);
    },
    removeInline(e, t) {
        var n;
        let r = a.bN.getSelectionOverlap(e, t),
            s = null !== (n = a.bN.before(e, t)) && void 0 !== n ? n : a.bN.start(e, []);
        i.YR.delete(e, {
            at: t,
            voids: !0
        }),
            u(e, r, s, s, s);
    },
    removeInlineChildren(e, t) {
        let [n, r] = t,
            s = a.bN.getSelectionOverlap(e, r),
            o = {
                path: a.C0.child(r, 0),
                offset: 0
            };
        a.bN.withoutNormalizing(e, () => {
            for (let t = n.children.length - 1; t >= 0; t--)
                i.YR.removeNodes(e, {
                    at: a.C0.child(r, t),
                    voids: !0
                });
        }),
            u(e, s, null, o, null);
    },
    selectCommandOption(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            s = r.cr(e);
        if (null != s)
            for (let r = 0; r < s[0].children.length; r++) {
                let o = s[0].children[r];
                if (a.aj.isType(o, 'applicationCommandOption') && o.optionName === t) {
                    n ? i.YR.select(e, [0, r]) : i.YR.select(e, a.bN.end(e, [0, r]));
                    return;
                }
            }
    },
    selectPreviousCommandOption(e) {
        if (null == r.cr(e)) return;
        let t = null != e.selection ? e.selection.focus.path : a.bN.end(e, s.YD).path,
            n = r.HZ(e),
            o = a.bN.previous(e, {
                at: t,
                match: (e) => e !== (null == n ? void 0 : n[0]) && a.aj.isType(e, 'applicationCommandOption')
            });
        null != o ? i.YR.select(e, o[1]) : a.C0.isAfter(t, s.u9) && i.YR.select(e, a.bN.end(e, s.u9));
    },
    selectNextCommandOption(e) {
        if (null == r.cr(e)) return;
        let t = null != e.selection ? e.selection.focus.path : a.bN.start(e, s.YD).path,
            n = r.HZ(e),
            l = a.bN.next(e, {
                at: t,
                match: (e) => e !== (null == n ? void 0 : n[0]) && a.aj.isType(e, 'applicationCommandOption')
            });
        null != l ? i.YR.select(e, l[1]) : o.resetSelectionToEnd(e);
    },
    insertCommandOption(e, t) {
        o.resetSelectionToEnd(e),
            o.insertNodes(e, [
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
        let { reverse: n = !1, unit: r = 'character', edge: s } = null != t ? t : {},
            o = e.selection;
        if (null == o) return;
        if (void 0 === s && a.M8.isExpanded(o)) {
            i.YR.collapse(e, { edge: n ? 'start' : 'end' });
            return;
        }
        let l = a.bN.leaf(e, o.anchor.path);
        if (null == l) return;
        let u = n ? a.bN.before : a.bN.after,
            c = o.focus;
        for (; null != c; ) {
            let t = r;
            n || o.focus.offset !== l[0].text.length ? n && 0 === o.focus.offset && (t = 'offset') : (t = 'offset');
            let i = u(e, c, { unit: t });
            if (null == i || a.Jz.equals(c, i)) {
                c = void 0;
                break;
            }
            if (((c = i), null == a.bN.getParentVoid(e, c))) break;
        }
        null != c &&
            ('focus' === s
                ? i.YR.setSelection(e, { focus: c })
                : i.YR.setSelection(e, {
                      focus: c,
                      anchor: c
                  }));
    }
};
function l(e, t, n, i, r) {
    switch (t) {
        case 'start':
            return n;
        case 'inside':
            return i;
        case 'end':
            return r;
    }
    return e;
}
function u(e, t, n, i, r) {
    var a, s;
    if (null == t.anchor && null == t.focus) return;
    let u = l(null === (a = e.selection) || void 0 === a ? void 0 : a.anchor, t.anchor, n, i, r),
        c = l(null === (s = e.selection) || void 0 === s ? void 0 : s.focus, t.focus, n, i, r);
    if (null == u || null == c) return;
    let d = {
        anchor: u,
        focus: c
    };
    o.select(e, d);
}

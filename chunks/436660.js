r.d(n, {
    Q: function () {
        return d;
    }
});
var i = r(571269);
var a = r(298267);
var o = r(47120);
var s = r(327432),
    l = r(91313),
    u = r(887490),
    c = r(42530);
let d = {
    ...s.YR,
    resetSelectionToStart(e) {
        s.YR.select(e, u.bN.start(e, []));
    },
    resetSelectionToEnd(e) {
        s.YR.select(e, u.bN.end(e, []));
    },
    delete(e, n) {
        let { at: r, distance: i, unit: a, reverse: o = !1, select: l = !1, bounds: c, voids: d } = n;
        if (null == r) {
            if (null == e.selection) return;
            r = e.selection;
        }
        let [f, p] = u.M8.isRange(r) ? u.M8.edges(r) : u.bN.edges(e, r);
        if (null != i || null != a) {
            var h, _, m;
            if (o) {
                let n =
                    null !==
                        (h = u.bN.before(e, f, {
                            distance: i,
                            unit: a
                        })) && void 0 !== h
                        ? h
                        : u.bN.start(e, []);
                if ('character' === a && (null != i ? i : 1) === 1 && u.C0.equals(f.path, p.path)) {
                    let r = u.bN.leaf(e, f.path),
                        a = null != r ? r[0].text : '';
                    a.length > 0 &&
                        null != a[a.length - 1].match(/[\u0E00-\u0E7F]/) &&
                        (n =
                            null !==
                                (_ = u.bN.before(e, f, {
                                    distance: i,
                                    unit: 'offset'
                                })) && void 0 !== _
                                ? _
                                : u.bN.start(e, []));
                }
                f = n;
            } else
                p =
                    null !==
                        (m = u.bN.after(e, p, {
                            distance: i,
                            unit: a
                        })) && void 0 !== m
                        ? m
                        : u.bN.end(e, []);
        }
        if (null != c) {
            let [e, n] = u.M8.edges(c);
            u.Jz.isBefore(f, e) && (f = e), u.Jz.isAfter(p, n) && (p = n);
        }
        !u.Jz.equals(f, p) &&
            (s.YR.delete(e, {
                at: {
                    anchor: f,
                    focus: p
                },
                hanging: !0,
                voids: d
            }),
            l && u.bN.hasPath(e, f.path) && s.YR.select(e, f));
    },
    textToText(e, n, r) {
        var i;
        let a = u.bN.getSelectionOverlap(e, r),
            [o, l] = u.M8.edges(r),
            c = null !== (i = u.bN.before(e, o)) && void 0 !== i ? i : u.bN.start(e, []),
            d = u.bN.after(e, l);
        u.M8.isExpanded(r) &&
            s.YR.delete(e, {
                at: r,
                voids: !0
            }),
            s.YR.insertText(e, n, { at: c }),
            (c = null != c ? c : u.bN.start(e, [])),
            (d = null != d ? d : u.bN.end(e, [])),
            p(e, a, c, d, d);
    },
    textToVoid(e, n, r) {
        let i = u.bN.getSelectionOverlap(e, r),
            a = u.M8.start(r),
            o = u.C0.next(a.path),
            l = {
                path: u.C0.next(o),
                offset: 0
            };
        s.YR.delete(e, {
            at: r,
            voids: !0
        }),
            0 === a.offset && s.YR.insertNodes(e, [{ text: '' }], { at: a.path }),
            s.YR.insertNodes(e, [n], { at: a }),
            (!u.bN.hasPath(e, l.path) || !u.LC.isText(u.bN.node(e, l.path)[0])) && s.YR.insertNodes(e, [{ text: '' }], { at: l.path }),
            p(e, i, a, l, l);
    },
    textToInline(e, n, r) {
        let i = u.bN.getSelectionOverlap(e, r),
            a = n.children[n.children.length - 1],
            o = u.M8.start(r),
            l = u.C0.next(o.path),
            c = {
                path: u.C0.child(l, n.children.length - 1),
                offset: u.LC.isText(a) ? a.text.length : 0
            };
        s.YR.delete(e, {
            at: r,
            voids: !0
        }),
            0 === o.offset && s.YR.insertNodes(e, [{ text: '' }], { at: o.path }),
            s.YR.insertNodes(e, [n], { at: o }),
            p(e, i, o, c, c);
    },
    voidToText(e, n, r) {
        var i;
        let a = u.bN.getSelectionOverlap(e, r),
            o = null !== (i = u.bN.before(e, r)) && void 0 !== i ? i : u.bN.start(e, []),
            l = {
                path: o.path,
                offset: o.offset + n.length
            };
        s.YR.delete(e, {
            at: r,
            voids: !0
        }),
            s.YR.insertText(e, n, { at: o }),
            p(e, a, o, o, l);
    },
    removeInline(e, n) {
        var r;
        let i = u.bN.getSelectionOverlap(e, n),
            a = null !== (r = u.bN.before(e, n)) && void 0 !== r ? r : u.bN.start(e, []);
        s.YR.delete(e, {
            at: n,
            voids: !0
        }),
            p(e, i, a, a, a);
    },
    removeInlineChildren(e, n) {
        let [r, i] = n,
            a = u.bN.getSelectionOverlap(e, i),
            o = {
                path: u.C0.child(i, 0),
                offset: 0
            };
        u.bN.withoutNormalizing(e, () => {
            for (let n = r.children.length - 1; n >= 0; n--)
                s.YR.removeNodes(e, {
                    at: u.C0.child(i, n),
                    voids: !0
                });
        }),
            p(e, a, null, o, null);
    },
    selectCommandOption(e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = l.cr(e);
        if (null != i)
            for (let a = 0; a < i[0].children.length; a++) {
                let o = i[0].children[a];
                if (u.aj.isType(o, 'applicationCommandOption') && o.optionName === n) {
                    r ? s.YR.select(e, [0, a]) : s.YR.select(e, u.bN.end(e, [0, a]));
                    return;
                }
            }
    },
    selectPreviousCommandOption(e) {
        if (null == l.cr(e)) return;
        let n = null != e.selection ? e.selection.focus.path : u.bN.end(e, c.YD).path,
            r = l.HZ(e),
            i = u.bN.previous(e, {
                at: n,
                match: (e) => e !== (null == r ? void 0 : r[0]) && u.aj.isType(e, 'applicationCommandOption')
            });
        null != i ? s.YR.select(e, i[1]) : u.C0.isAfter(n, c.u9) && s.YR.select(e, u.bN.end(e, c.u9));
    },
    selectNextCommandOption(e) {
        if (null == l.cr(e)) return;
        let n = null != e.selection ? e.selection.focus.path : u.bN.start(e, c.YD).path,
            r = l.HZ(e),
            i = u.bN.next(e, {
                at: n,
                match: (e) => e !== (null == r ? void 0 : r[0]) && u.aj.isType(e, 'applicationCommandOption')
            });
        null != i ? s.YR.select(e, i[1]) : d.resetSelectionToEnd(e);
    },
    insertCommandOption(e, n) {
        d.resetSelectionToEnd(e),
            d.insertNodes(e, [
                {
                    type: 'applicationCommandOption',
                    optionName: n.name,
                    optionDisplayName: n.displayName,
                    optionType: n.type,
                    children: [{ text: '' }]
                }
            ]);
    },
    keyboardMove(e, n) {
        let { reverse: r = !1, unit: i = 'character', edge: a } = null != n ? n : {},
            o = e.selection;
        if (null == o) return;
        if (void 0 === a && u.M8.isExpanded(o)) {
            s.YR.collapse(e, { edge: r ? 'start' : 'end' });
            return;
        }
        let l = u.bN.leaf(e, o.anchor.path);
        if (null == l) return;
        let c = r ? u.bN.before : u.bN.after,
            d = o.focus;
        for (; null != d; ) {
            let n = i;
            r || o.focus.offset !== l[0].text.length ? r && 0 === o.focus.offset && (n = 'offset') : (n = 'offset');
            let a = c(e, d, { unit: n });
            if (null == a || u.Jz.equals(d, a)) {
                d = void 0;
                break;
            }
            if (((d = a), null == u.bN.getParentVoid(e, d))) break;
        }
        null != d &&
            ('focus' === a
                ? s.YR.setSelection(e, { focus: d })
                : s.YR.setSelection(e, {
                      focus: d,
                      anchor: d
                  }));
    }
};
function f(e, n, r, i, a) {
    switch (n) {
        case 'start':
            return r;
        case 'inside':
            return i;
        case 'end':
            return a;
    }
    return e;
}
function p(e, n, r, i, a) {
    var o, s;
    if (null == n.anchor && null == n.focus) return;
    let l = f(null === (o = e.selection) || void 0 === o ? void 0 : o.anchor, n.anchor, r, i, a),
        u = f(null === (s = e.selection) || void 0 === s ? void 0 : s.focus, n.focus, r, i, a);
    if (null == l || null == u) return;
    let c = {
        anchor: l,
        focus: u
    };
    d.select(e, c);
}

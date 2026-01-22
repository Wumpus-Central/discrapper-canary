n.d(t, {
    b: () => c,
}),
    n(134528),
    n(947204),
    n(264879),
    n(896048),
    n(747238);
var r = n(719442),
    i = n(317681),
    a = n(711371),
    s = n(551483);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
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
            "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    }),
                )),
                r.forEach(function (t) {
                    o(e, t, n[t]);
                });
        }
        return e;
    })({}, r.gB),
    {
        resetSelectionToEditorStart(e) {
            r.gB.select(e, a.VW.start(e, []));
        },
        resetSelectionToEditorEnd(e) {
            r.gB.select(e, a.VW.end(e, []));
        },
        delete(e, t) {
            let { at: n, distance: i, unit: s, reverse: o = !1, select: l = !1, bounds: c, voids: u } = t;
            if (null == n) {
                if (null == e.selection) return;
                n = e.selection;
            }
            let [d, f] = a.ZF.isRange(n) ? a.ZF.edges(n) : a.VW.edges(e, n);
            if (null != i || null != s) {
                var p, _, h;
                if (o) {
                    let t =
                        null !=
                        (p = a.VW.before(e, d, {
                            distance: i,
                            unit: s,
                        }))
                            ? p
                            : a.VW.start(e, []);
                    if ("character" === s && (null != i ? i : 1) === 1 && a.PW.equals(d.path, f.path)) {
                        let n = a.VW.leaf(e, d.path),
                            r = null != n ? n[0].text : "";
                        r.length > 0 &&
                            null != r[r.length - 1].match(/[\u0E00-\u0E7F]/) &&
                            (t =
                                null !=
                                (_ = a.VW.before(e, d, {
                                    distance: i,
                                    unit: "offset",
                                }))
                                    ? _
                                    : a.VW.start(e, []));
                    }
                    d = t;
                } else
                    f =
                        null !=
                        (h = a.VW.after(e, f, {
                            distance: i,
                            unit: s,
                        }))
                            ? h
                            : a.VW.end(e, []);
            }
            if (null != c) {
                let [e, t] = a.ZF.edges(c);
                a.Kh.isBefore(d, e) && (d = e), a.Kh.isAfter(f, t) && (f = t);
            }
            !a.Kh.equals(d, f) &&
                (r.gB.delete(e, {
                    at: {
                        anchor: d,
                        focus: f,
                    },
                    hanging: !0,
                    voids: u,
                }),
                l && a.VW.hasPath(e, d.path) && r.gB.select(e, d));
        },
        textToText(e, t, n) {
            var i;
            let s = a.VW.getSelectionOverlap(e, n),
                [o, l] = a.ZF.edges(n),
                c = null != (i = a.VW.before(e, o)) ? i : a.VW.start(e, []),
                u = a.VW.after(e, l);
            a.ZF.isExpanded(n) &&
                r.gB.delete(e, {
                    at: n,
                    voids: !0,
                }),
                r.gB.insertText(e, t, {
                    at: c,
                }),
                (c = null != c ? c : a.VW.start(e, [])),
                (u = null != u ? u : a.VW.end(e, [])),
                d(e, s, c, u, u);
        },
        textToVoid(e, t, n) {
            let i = a.VW.getSelectionOverlap(e, n),
                s = a.ZF.start(n),
                o = a.PW.next(s.path),
                l = {
                    path: a.PW.next(o),
                    offset: 0,
                };
            r.gB.delete(e, {
                at: n,
                voids: !0,
            }),
                0 === s.offset &&
                    r.gB.insertNodes(
                        e,
                        [
                            {
                                text: "",
                            },
                        ],
                        {
                            at: s.path,
                        },
                    ),
                r.gB.insertNodes(e, [t], {
                    at: s,
                }),
                (a.VW.hasPath(e, l.path) && a.l5.isText(a.VW.node(e, l.path)[0])) ||
                    r.gB.insertNodes(
                        e,
                        [
                            {
                                text: "",
                            },
                        ],
                        {
                            at: l.path,
                        },
                    ),
                d(e, i, s, l, l);
        },
        textToInline(e, t, n) {
            let i = a.VW.getSelectionOverlap(e, n),
                s = t.children[t.children.length - 1],
                o = a.ZF.start(n),
                l = a.PW.next(o.path),
                c = {
                    path: a.PW.child(l, t.children.length - 1),
                    offset: a.l5.isText(s) ? s.text.length : 0,
                };
            r.gB.delete(e, {
                at: n,
                voids: !0,
            }),
                0 === o.offset &&
                    r.gB.insertNodes(
                        e,
                        [
                            {
                                text: "",
                            },
                        ],
                        {
                            at: o.path,
                        },
                    ),
                r.gB.insertNodes(e, [t], {
                    at: o,
                }),
                d(e, i, o, c, c);
        },
        voidToText(e, t, n) {
            var i;
            let s = a.VW.getSelectionOverlap(e, n),
                o = null != (i = a.VW.before(e, n)) ? i : a.VW.start(e, []),
                l = {
                    path: o.path,
                    offset: o.offset + t.length,
                };
            r.gB.delete(e, {
                at: n,
                voids: !0,
            }),
                r.gB.insertText(e, t, {
                    at: o,
                }),
                d(e, s, o, o, l);
        },
        removeInline(e, t) {
            var n;
            let i = a.VW.getSelectionOverlap(e, t),
                s = null != (n = a.VW.before(e, t)) ? n : a.VW.start(e, []);
            r.gB.delete(e, {
                at: t,
                voids: !0,
            }),
                d(e, i, s, s, s);
        },
        removeInlineChildren(e, t) {
            let [n, i] = t,
                s = a.VW.getSelectionOverlap(e, i),
                o = {
                    path: a.PW.child(i, 0),
                    offset: 0,
                };
            a.VW.withoutNormalizing(e, () => {
                for (let t = n.children.length - 1; t >= 0; t--)
                    r.gB.removeNodes(e, {
                        at: a.PW.child(i, t),
                        voids: !0,
                    });
            }),
                d(e, s, null, o, null);
        },
        selectCommandOption(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                s = i.n$(e);
            if (null != s)
                for (let i = 0; i < s[0].children.length; i++) {
                    let o = s[0].children[i];
                    if (a.AS.isType(o, "applicationCommandOption") && o.optionName === t)
                        return void (n ? r.gB.select(e, [0, i]) : r.gB.select(e, a.VW.end(e, [0, i])));
                }
        },
        selectPreviousCommandOption(e) {
            if (null == i.n$(e)) return;
            let t = null != e.selection ? e.selection.focus.path : a.VW.end(e, s.Xg).path,
                n = i.M3(e),
                o = a.VW.previous(e, {
                    at: t,
                    match: (e) => e !== (null == n ? void 0 : n[0]) && a.AS.isType(e, "applicationCommandOption"),
                });
            null != o ? r.gB.select(e, o[1]) : a.PW.isAfter(t, s.fP) && r.gB.select(e, a.VW.end(e, s.fP));
        },
        selectNextCommandOption(e) {
            if (null == i.n$(e)) return;
            let t = null != e.selection ? e.selection.focus.path : a.VW.start(e, s.Xg).path,
                n = i.M3(e),
                o = a.VW.next(e, {
                    at: t,
                    match: (e) => e !== (null == n ? void 0 : n[0]) && a.AS.isType(e, "applicationCommandOption"),
                });
            null != o ? r.gB.select(e, o[1]) : c.resetSelectionToEditorEnd(e);
        },
        insertCommandOption(e, t) {
            c.resetSelectionToEditorEnd(e),
                c.insertNodes(e, [
                    {
                        type: "applicationCommandOption",
                        optionName: t.name,
                        optionDisplayName: t.displayName,
                        optionType: t.type,
                        children: [
                            {
                                text: "",
                            },
                        ],
                    },
                ]);
        },
        keyboardMove(e, t) {
            let { distance: n = 1, unit: i = "character", reverse: s = !1, edge: o } = null != t ? t : {},
                l = e.selection;
            if (null == l) return;
            let c = l.focus;
            if (a.ZF.isExpanded(l)) {
                if (void 0 === o && "character" === i)
                    return void r.gB.collapse(e, {
                        edge: s ? "start" : "end",
                    });
                "focus" !== o && (c = "line" === i || s ? a.ZF.start(l) : a.ZF.end(l));
            }
            let u = (s ? a.VW.before : a.VW.after)(e, c, {
                unit: i,
                distance: n,
            });
            null != u &&
                r.gB.setSelection(
                    e,
                    "focus" === o
                        ? {
                              focus: u,
                          }
                        : {
                              anchor: u,
                              focus: u,
                          },
                );
        },
    },
);

function u(e, t, n, r, i) {
    switch (t) {
        case "start":
            return n;
        case "inside":
            return r;
        case "end":
            return i;
    }
    return e;
}

function d(e, t, n, r, i) {
    var a, s;
    if (null == t.anchor && null == t.focus) return;
    let o = u(null == (a = e.selection) ? void 0 : a.anchor, t.anchor, n, r, i),
        l = u(null == (s = e.selection) ? void 0 : s.focus, t.focus, n, r, i);
    if (null == o || null == l) return;
    let d = {
        anchor: o,
        focus: l,
    };
    c.select(e, d);
}

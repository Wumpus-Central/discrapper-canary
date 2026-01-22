n.d(t, {
    AS: () => _,
    Kh: () => E,
    Ot: () => y,
    PW: () => g,
    VW: () => p,
    ZF: () => b,
    cv: () => h,
    e0: () => S,
    l5: () => m,
}),
    n(134528),
    n(947204),
    n(264879),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(719442),
    s = n(253018),
    o = n(184034),
    l = n(551483);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
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

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
if ((n(654821), !a.KE._addedDiscordOverrides)) {
    let e = a.KE.positions;
    a.KE.positions = function* (t) {
        var n, r;
        let i,
            s,
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { at: l = t.selection, unit: c = "offset", reverse: d = !1, voids: _ = !1 } = null != o ? o : {};
        if (null == l) return;
        if (("block" === c && (c = "line"), "offset" === c)) {
            for (let n of e(t, o)) yield n;
            return;
        }
        i = E.isPoint(l)
            ? d
                ? {
                      anchor: l,
                      focus: p.start(t, []),
                  }
                : {
                      anchor: l,
                      focus: p.end(t, []),
                  }
            : p.range(t, l);
        let [y, O] = b.edges(i),
            A = p.blocks(t),
            v = d ? -1 : 1,
            S = null != (n = y.path[0]) ? n : 0,
            I = null != (r = O.path[0]) ? r : A.length - 1,
            T = d ? I : S,
            C = d ? S : I,
            N = !1;

        function* R(n) {
            let [r, i] = n,
                l = i.length,
                p = g.isAncestor(i, y.path),
                E = g.isAncestor(i, O.path),
                b = p ? y.path[l] : 0,
                A = E ? O.path[l] : r.children.length - 1,
                S = d ? A : b,
                I = d ? b : A;
            for (let n = S; !N && (!d ? n <= I : n >= I); n += v) {
                let l = r.children[n],
                    p = g.child(i, n);
                if (h.isElement(l)) {
                    let e = d ? O.path : y.path;
                    if (!(g.equals(p, e) || g.isAncestor(p, e))) {
                        let e = t.isVoid(l);
                        if ("line" === c && h.isElement(l) && !e) {
                            null != s && (yield s, (s = void 0)), (N = !0);
                            return;
                        }
                        if (!_ && e) continue;
                    }
                    for (let e of R([l, p])) yield e;
                } else if (m.isText(l))
                    if ("line" === c)
                        s = {
                            path: p,
                            offset: d ? 0 : l.text.length,
                        };
                    else if (0 === l.text.length)
                        yield {
                            path: p,
                            offset: 0,
                        };
                    else {
                        let n = a.KE.range(t, p);
                        for (let r of (g.equals(p, y.path) && (n.anchor = y),
                        g.equals(p, O.path) && (n.focus = O),
                        e(
                            t,
                            f(u({}, o), {
                                at: n,
                            }),
                        )))
                            yield r;
                    }
            }
            "line" === c && h.isElement(r) && !t.isVoid(r) && (null != s && (yield s, (s = void 0)), (N = !0));
        }
        "line" === c && (yield d ? O : y);
        for (let e = T; !N && (!d ? e <= C : e >= C); e += v) for (let t of R(A[e])) yield t;
    };
    let t = s.rL.findDocumentOrShadowRoot;
    (s.rL.findDocumentOrShadowRoot = (e) => {
        var n, r;
        return null != (n = null == (r = e.windowContext) ? void 0 : r.renderWindow.document) ? n : t(e);
    }),
        (a.KE._addedDiscordOverrides = !0);
}
let p = f(u({}, a.KE, s.rL), {
        richValue: (e) => e.children,
        blocks: (e) => p.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => h.isElement(t) && a.KE.isBlock(e, t),
        isInline: (e, t) => h.isElement(t) && a.KE.isInline(e, t),
        isVoid: (e, t) => h.isElement(t) && a.KE.isVoid(e, t),
        isEditorEmpty(e) {
            let t = p.richValue(e);
            return !(t.length > 1) && (0 === t.length || ("line" === t[0].type && h.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = p.node(e, l.fP);
            return m.isText(t[0]) ? t[0] : null;
        },
        getCurrentBlock(e) {
            return null == e.selection ? null : this.getParentBlock(e, e.selection);
        },
        getCurrentElement(e) {
            return null == e.selection ? null : this.getParentElement(e, e.selection);
        },
        getCurrentInline(e) {
            return null == e.selection ? null : this.getParentInline(e, e.selection);
        },
        getCurrentVoid(e) {
            return null == e.selection ? null : this.getParentVoid(e, e.selection);
        },
        getCurrentText(e) {
            let t = null != e.selection ? b.toPoint(e.selection) : null;
            return null == t ? null : p.node(e, t.path);
        },
        getParentBlock(e, t) {
            var n;
            return null !=
                (n = p.above(e, {
                    at: t,
                    match: (t) => h.isElement(t) && p.isBlock(e, t),
                    mode: "lowest",
                }))
                ? n
                : null;
        },
        getParentElement(e, t) {
            var n;
            return null !=
                (n = p.above(e, {
                    at: t,
                    match: (e) => h.isElement(e),
                    mode: "lowest",
                }))
                ? n
                : null;
        },
        getParentInline(e, t) {
            var n;
            return null !=
                (n = p.above(e, {
                    at: t,
                    match: (t) => p.isInline(e, t),
                    mode: "lowest",
                }))
                ? n
                : null;
        },
        getParentVoid(e, t) {
            var n;
            return null !=
                (n = p.above(e, {
                    at: t,
                    match: (t) => p.isVoid(e, t),
                    mode: "lowest",
                }))
                ? n
                : null;
        },
        getParentOfType(e, t, n) {
            var r;
            return null !=
                (r = p.above(e, {
                    at: t,
                    match: (e) => h.isElement(e) && n.includes(e.type),
                    mode: "lowest",
                }))
                ? r
                : null;
        },
        getSelectedParentOfType(e, t) {
            if (null == e.selection) return null;
            let n = b.toPoint(e.selection);
            return null == n ? null : p.getParentOfType(e, n, t);
        },
        getNodesOfType: (e, t) =>
            p.nodes(e, {
                at: l.Dl,
                match: (e) => h.isElement(e) && t.includes(e.type),
                mode: "highest",
            }),
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (b.isExpanded(e.selection)) {
                let [n, r] = b.edges(e.selection),
                    i = p.after(e, n, {
                        unit: "offset",
                    }),
                    a = p.before(e, r, {
                        unit: "offset",
                    });
                if (null == i || null == a || !E.equals(i, a)) return null;
                t = i;
            } else t = e.selection.anchor;
            return null == t ? null : p.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = s.rL.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let r = t.getRangeAt(0);
                    null != r &&
                        (n = s.rL.toSlateRange(e, r, {
                            exactMatch: !0,
                            suppressThrow: !0,
                        }));
                }
            } else n = e.selection;
            return null == n ? "" : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, r] = b.edges(t),
                i = p.nodes(e, {
                    at: t,
                    mode: "lowest",
                    match: (e) => m.isText(e),
                }),
                a = "";
            for (let [e, t] of i) {
                let i = g.equals(t, n.path) ? n.offset : 0,
                    s = g.equals(t, r.path) ? r.offset : 0;
                a += e.text.substring(i, s);
            }
            return a;
        },
        withoutNormalizing(e, t) {
            let n = p.isNormalizing(e);
            p.setNormalizing(e, !1);
            try {
                t();
            } finally {
                p.setNormalizing(e, n);
            }
            !1 !== n && p.normalize(e);
        },
        areStylesDisabled(e) {
            var t;
            if (!e.previewMarkdown) return !0;
            let n = p.richValue(e),
                r = n[0],
                i = (null == r ? void 0 : r.type) === "line" ? r.children[0] : null;
            if (null == i || !m.isText(i)) return !1;
            let a = e.chatInputType,
                s = i.text;
            return (
                1 === n.length &&
                1 === r.children.length &&
                ((!0 === a.sedReplace && s.startsWith("s/")) ||
                    ((null == (t = a.autocomplete) ? void 0 : t.reactions) === !0 && s.startsWith("+")))
            );
        },
        focus(e) {
            s.rL.isFocused(e) || (s.rL.focus(e), s.rL.deselect(e));
        },
        getSelectionOverlap(e, t) {
            if (null == e.selection)
                return {
                    anchor: null,
                    focus: null,
                };
            if (g.isPath(t)) {
                let n = p.range(e, t),
                    [r] = p.node(e, t);
                if (h.isElement(r)) {
                    let r = p.before(e, t),
                        i = p.after(e, t);
                    t = {
                        anchor: null != r ? r : n.anchor,
                        focus: null != i ? i : n.focus,
                    };
                } else t = n;
            }
            let [n, r] = b.edges(t),
                i = null,
                a = null;
            return (
                E.equals(e.selection.anchor, n)
                    ? (i = "start")
                    : E.equals(e.selection.anchor, r)
                      ? (i = "end")
                      : b.includes(t, e.selection.anchor) && (i = "inside"),
                E.equals(e.selection.focus, n)
                    ? (a = "start")
                    : E.equals(e.selection.focus, r)
                      ? (a = "end")
                      : b.includes(t, e.selection.focus) && (a = "inside"),
                {
                    anchor: i,
                    focus: a,
                }
            );
        },
    }),
    _ = f(u({}, a.bP), {
        isType: (e, t) => a.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => a.Hg.isElement(e) && t.has(e.type),
    }),
    h = f(u({}, a.Hg), {
        updateElement(e, t) {
            let n = p.node(e, t[1]);
            return (
                i()(!p.isEditor(t[0]), "Element is the root node"),
                i()(null != n, "Failed to find element"),
                i()(h.isElement(n[0]), "Node at this path is no longer an element"),
                i()(n[0].type === t[0].type, "Node at this path is a different type"),
                n
            );
        },
        markdown(e, t, n) {
            var r;
            let i = "line" === e.type && (null == (r = e.codeBlockState) ? void 0 : r.wasInCodeBlock) === !0,
                a = e.children.map((e) => (m.isText(e) ? e.text : "?")),
                s = a.join("");
            return {
                entries: o.q(s, null != t ? t : null, i, n),
                serializedChildren: a,
            };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return m.isText(t) && 0 === t.text.length;
        },
    }),
    m = u({}, a.EY),
    g = f(u({}, a.wA), {
        isFirstEditorBlock: (e) => g.equals(e, l.Xg),
        isFirstEditorText: (e) => g.equals(e, l.fP),
        isFirstChild: (e, t) => g.equals(t, g.child(e, 0)),
        child: (e, t) => [...e, t],
    }),
    E = f(u({}, a.bR), {
        start(e) {
            let [, t] = e;
            return {
                path: g.child(t, 0),
                offset: 0,
            };
        },
        end(e) {
            let [t, n] = e,
                r = t.children[t.children.length - 1];
            return {
                path: g.child(n, t.children.length - 1),
                offset: m.isText(r) ? r.text.length : 0,
            };
        },
        isAtStart(e, t) {
            return E.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return E.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, r] = b.edges(t);
            return E.isBefore(e, n) && (e = n), E.isAfter(e, r) && (e = r), e;
        },
    }),
    b = f(u({}, a.Q6), {
        toPoint: (e) => (null == e || b.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                r = t.children[t.children.length - 1];
            return {
                anchor: {
                    path: g.child(n, 0),
                    offset: 0,
                },
                focus: {
                    path: g.child(n, t.children.length - 1),
                    offset: m.isText(r) ? r.text.length : 0,
                },
            };
        },
        clamp(e, t) {
            let [n, r] = b.edges(e),
                [i, a] = b.edges(t);
            return (E.isBefore(n, i) && (n = i), E.isAfter(r, a) && (r = a), b.isForward(e))
                ? {
                      anchor: n,
                      focus: r,
                  }
                : {
                      anchor: r,
                      focus: n,
                  };
        },
    }),
    y = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && b.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: r } = t;
            if (!p.hasPath(e, n.path) || !p.hasPath(e, r.path)) return !1;
            let [i] = p.node(e, n.path),
                [a] = p.node(e, r.path);
            return m.isText(i) && m.isText(a) && n.offset <= i.text.length && r.offset <= a.text.length;
        },
    },
    O = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    A = (e, t, n) => {
        let r = p.toDOMRange(e, t).getBoundingClientRect(),
            i = p.toDOMRange(e, n).getBoundingClientRect();
        return O(r, i) && O(i, r);
    },
    v = (e, t, n, r) => {
        let i = {
                anchor: t,
                focus: t,
            },
            a = 0,
            s = n.length,
            o = Math.floor((a + s) / 2);
        for (; o !== a; )
            if (
                (A(
                    e,
                    {
                        anchor: n[o],
                        focus: n[o],
                    },
                    i,
                )
                    ? r
                        ? (s = o)
                        : (a = o)
                    : r
                      ? (a = o)
                      : (s = o),
                (o = Math.floor((a + s) / 2)),
                !r && o === n.length - 2 && s === n.length - 1)
            ) {
                let t = n[n.length - 1];
                A(
                    e,
                    {
                        anchor: t,
                        focus: t,
                    },
                    i,
                ) && (o = s);
            }
        return n[o];
    },
    S = {
        getLineStart(e, t, n) {
            let r = p.getParentElement(e, t);
            if (null == r) return null;
            let i = {
                    anchor: p.start(e, r[1]),
                    focus: t,
                },
                a = Array.from(
                    p.positions(e, {
                        at: i,
                    }),
                ),
                s = v(e, t, a, !0);
            if (n && E.equals(t, s) && !E.isAtEnd(t, r)) {
                let n = p.after(e, t);
                if (null == n) return s;
                s = v(e, n, a, !0);
            }
            return s;
        },
        getLineEnd(e, t, n) {
            let r = p.getParentElement(e, t);
            if (null == r) return null;
            let i = {
                    anchor: t,
                    focus: p.end(e, r[1]),
                },
                a = Array.from(
                    p.positions(e, {
                        at: i,
                    }),
                ),
                s = v(e, t, a, !1);
            if (n && E.equals(t, s) && !E.isAtEnd(t, r)) {
                let n = p.after(e, t);
                if (null == n) return s;
                s = v(e, n, a, !1);
            }
            return s;
        },
    };

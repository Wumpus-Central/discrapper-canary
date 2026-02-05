"use strict";
n.d(t, { M: () => o, d: () => d }), n(321073), n(142703);
var i = n(64700),
    s = n(812729),
    l = n.n(s),
    r = n(340287),
    a = n(530552);
function o(e) {
    let [t, n] = i.useState([e]),
        [s, r] = i.useState(0),
        a = i.useMemo(() => t[s], [t, s]),
        o = i.useCallback(
            (e) => {
                let i = e(a);
                if (l()(a, i)) return;
                let o = t.slice(0, s + 1);
                o.push(i), n(o), r(o.length - 1);
            },
            [s, a, t],
        );
    return {
        state: a,
        setState: o,
        goBack: i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.max(0, s - e);
                return r(n), t[n];
            },
            [s, t],
        ),
        goForward: i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.min(t.length - 1, s + e);
                return r(n), t[n];
            },
            [s, t],
        ),
    };
}
function d(e, t) {
    let { scrollerRef: n, mainInputRef: s, mainContainerRef: l } = t,
        {
            state: { value: o, tags: d, selections: c },
            setState: u,
            goBack: m,
            goForward: g,
        } = e;
    i.useLayoutEffect(() => {
        let e = (e) => (t) => {
                ("Meta" === t.key || "Control" === t.key) && u((t) => ({ ...t, isSelecting: e }));
            },
            t = e(!0),
            n = e(!1);
        return (
            document.addEventListener("keydown", t),
            document.addEventListener("keyup", n),
            () => {
                document.removeEventListener("keydown", t), document.removeEventListener("keyup", n);
            }
        );
    }, [u]);
    let x = i.useCallback(
            (e) => {
                let t = (e.clipboardData.getData("text") ?? "")
                    .split(a.ay)
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0);
                t.length <= 1 ||
                    ((0, r.flushSync)(() => {
                        u((e) => {
                            let { tags: n, value: i } = e;
                            return { value: i, tags: [...n, ...t], selections: [], isSelecting: !1 };
                        });
                    }),
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.current?.scrollToBottom());
            },
            [u, n],
        ),
        h = i.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n, value: i } = t;
                    return { value: i, tags: [...n.filter((t, n) => n !== e)], selections: [], isSelecting: !1 };
                });
            },
            [u],
        ),
        _ = i.useCallback(
            (e) => (t) => {
                u((n) => {
                    let { tags: i, value: s } = n,
                        l = [...i];
                    return (l[e] = t), { value: s, tags: l, selections: [], isSelecting: !1 };
                });
            },
            [u],
        ),
        A = i.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n, value: i, selections: s, isSelecting: l } = t;
                    return { value: i, tags: n, selections: [...s, n[e]], isSelecting: l };
                });
            },
            [u],
        ),
        p = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                u((n) => {
                    let { tags: i, value: s, selections: l, isSelecting: r } = n;
                    return { value: s, tags: i, selections: t ? [] : l.filter((t) => t !== i[e]), isSelecting: r };
                });
            },
            [u],
        ),
        f = i.useCallback(
            (e) => {
                u((e) => {
                    let { tags: t, value: n } = e;
                    return { value: n, tags: t, selections: [], isSelecting: !1 };
                }),
                    null != e && (e.preventDefault(), e.stopPropagation()),
                    s.current?.focus();
            },
            [s, u],
        ),
        j = i.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n } = t;
                    return { value: e.target.value, tags: n, selections: [], isSelecting: !1 };
                });
            },
            [u],
        ),
        N = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                !(o.trim().length <= 0) &&
                    ((0, r.flushSync)(() => {
                        u((e) => {
                            let { tags: t } = e;
                            return { value: "", tags: [...t, o], selections: [], isSelecting: !1 };
                        });
                    }),
                    i && null != n.current && n.current.scrollToBottom(),
                    t && (e.preventDefault(), e.stopPropagation()));
            },
            [n, u, o],
        ),
        E = i.useCallback(
            (e) => {
                let t = o.trim().length <= 0;
                c.length > 0
                    ? ((0, r.flushSync)(() => {
                          u((e) => {
                              let { tags: t, value: n, selections: i } = e;
                              return {
                                  value: n,
                                  tags: t.filter((e) => !i.includes(e)),
                                  selections: [],
                                  isSelecting: !1,
                              };
                          });
                      }),
                      s.current?.focus(),
                      e.preventDefault(),
                      e.stopPropagation())
                    : t &&
                      ((0, r.flushSync)(() => {
                          u((e) => {
                              let { tags: t } = e,
                                  n = [...t];
                              return { value: n.pop() ?? "", tags: [...n], selections: [], isSelecting: !1 };
                          });
                      }),
                      e.preventDefault(),
                      e.stopPropagation());
            },
            [s, c.length, u, o],
        ),
        b = i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                "z" === e.key && t
                    ? (m().selections.length > 0 ? s.current?.blur() : s.current?.focus(),
                      e.preventDefault(),
                      e.stopPropagation())
                    : "y" === e.key &&
                      t &&
                      (g().selections.length > 0 ? s.current?.blur() : s.current?.focus(),
                      e.preventDefault(),
                      e.stopPropagation());
            },
            [m, g, s],
        ),
        T = i.useCallback(
            (e) => {
                let t = o.trim().length > 0,
                    { selectionStart: n = 0, selectionEnd: i = 0 } = s.current ?? {};
                0 === d.length ||
                    (t && n === i) ||
                    ((0, r.flushSync)(() => {
                        u((e) => {
                            let { tags: t, value: n } = e;
                            return { value: n, tags: t, selections: [...t], isSelecting: !1 };
                        });
                    }),
                    setImmediate(() => {
                        s.current?.blur(),
                            setTimeout(() => {
                                l.current?.focus();
                            }, 16);
                    }),
                    e.preventDefault(),
                    e.stopPropagation());
            },
            [l, s, u, d.length, o],
        ),
        C = i.useCallback(
            (e) => {
                e.relatedTarget !== e.currentTarget && N(e, !1, !1);
            },
            [N],
        );
    return {
        handlePasteEvent: x,
        handleInputChange: j,
        handleKeyDown: i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                "Meta" !== e.key &&
                    (a.Wu.has(e.key)
                        ? N(e)
                        : "Backspace" === e.key
                          ? E(e)
                          : "Escape" === e.key
                            ? f(e)
                            : "a" === e.key && t
                              ? T(e)
                              : a.A_.has(e.key) && t && b(e));
            },
            [N, E, f, T, b],
        ),
        handleContainerKeyUp: i.useCallback(
            (e) => {
                if (document.activeElement !== l.current) return;
                let t = e.metaKey || e.ctrlKey;
                "Backspace" === e.key
                    ? E(e)
                    : "a" === e.key && t
                      ? T(e)
                      : "Escape" === e.key
                        ? f(e)
                        : a.A_.has(e.key) && t
                          ? b(e)
                          : "Meta" !== e.key && f(e);
            },
            [b, E, T, f, l],
        ),
        handleRemoveTag: h,
        handleTagChangeEvent: _,
        handleSelectTag: A,
        handleUnselectTag: p,
        handleResetTagSelections: f,
        handleInputBlurEvent: C,
    };
}

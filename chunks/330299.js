n.d(t, { M: () => o, d: () => d }), n(321073), n(142703);
var i = n(64700),
    l = n(812729),
    s = n.n(l),
    r = n(340287),
    a = n(530552);
function o(e) {
    let [t, n] = i.useState([e]),
        [l, r] = i.useState(0),
        a = i.useMemo(() => t[l], [t, l]),
        o = i.useCallback(
            (e) => {
                let i = e(a);
                if (s()(a, i)) return;
                let o = t.slice(0, l + 1);
                o.push(i), n(o), r(o.length - 1);
            },
            [l, a, t],
        );
    return {
        state: a,
        setState: o,
        goBack: i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.max(0, l - e);
                return r(n), t[n];
            },
            [l, t],
        ),
        goForward: i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.min(t.length - 1, l + e);
                return r(n), t[n];
            },
            [l, t],
        ),
    };
}
function d(e, t) {
    let { scrollerRef: n, mainInputRef: l, mainContainerRef: s } = t,
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
    let h = i.useCallback(
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
        x = i.useCallback(
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
                    let { tags: i, value: l } = n,
                        s = [...i];
                    return (s[e] = t), { value: l, tags: s, selections: [], isSelecting: !1 };
                });
            },
            [u],
        ),
        p = i.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n, value: i, selections: l, isSelecting: s } = t;
                    return { value: i, tags: n, selections: [...l, n[e]], isSelecting: s };
                });
            },
            [u],
        ),
        A = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                u((n) => {
                    let { tags: i, value: l, selections: s, isSelecting: r } = n;
                    return { value: l, tags: i, selections: t ? [] : s.filter((t) => t !== i[e]), isSelecting: r };
                });
            },
            [u],
        ),
        E = i.useCallback(
            (e) => {
                u((e) => {
                    let { tags: t, value: n } = e;
                    return { value: n, tags: t, selections: [], isSelecting: !1 };
                }),
                    null != e && (e.preventDefault(), e.stopPropagation()),
                    l.current?.focus();
            },
            [l, u],
        ),
        f = i.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n } = t;
                    return { value: e.target.value, tags: n, selections: [], isSelecting: !1 };
                });
            },
            [u],
        ),
        j = i.useCallback(
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
        N = i.useCallback(
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
                      l.current?.focus(),
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
            [l, c.length, u, o],
        ),
        I = i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                "z" === e.key && t
                    ? (m().selections.length > 0 ? l.current?.blur() : l.current?.focus(),
                      e.preventDefault(),
                      e.stopPropagation())
                    : "y" === e.key &&
                      t &&
                      (g().selections.length > 0 ? l.current?.blur() : l.current?.focus(),
                      e.preventDefault(),
                      e.stopPropagation());
            },
            [m, g, l],
        ),
        C = i.useCallback(
            (e) => {
                let t = o.trim().length > 0,
                    { selectionStart: n = 0, selectionEnd: i = 0 } = l.current ?? {};
                0 === d.length ||
                    (t && n === i) ||
                    ((0, r.flushSync)(() => {
                        u((e) => {
                            let { tags: t, value: n } = e;
                            return { value: n, tags: t, selections: [...t], isSelecting: !1 };
                        });
                    }),
                    setImmediate(() => {
                        l.current?.blur(),
                            setTimeout(() => {
                                s.current?.focus();
                            }, 16);
                    }),
                    e.preventDefault(),
                    e.stopPropagation());
            },
            [s, l, u, d.length, o],
        ),
        b = i.useCallback(
            (e) => {
                e.relatedTarget !== e.currentTarget && j(e, !1, !1);
            },
            [j],
        );
    return {
        handlePasteEvent: h,
        handleInputChange: f,
        handleKeyDown: i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                "Meta" !== e.key &&
                    (a.Wu.has(e.key)
                        ? j(e)
                        : "Backspace" === e.key
                          ? N(e)
                          : "Escape" === e.key
                            ? E(e)
                            : "a" === e.key && t
                              ? C(e)
                              : a.A_.has(e.key) && t && I(e));
            },
            [j, N, E, C, I],
        ),
        handleContainerKeyUp: i.useCallback(
            (e) => {
                if (document.activeElement !== s.current) return;
                let t = e.metaKey || e.ctrlKey;
                "Backspace" === e.key
                    ? N(e)
                    : "a" === e.key && t
                      ? C(e)
                      : "Escape" === e.key
                        ? E(e)
                        : a.A_.has(e.key) && t
                          ? I(e)
                          : "Meta" !== e.key && E(e);
            },
            [I, N, C, E, s],
        ),
        handleRemoveTag: x,
        handleTagChangeEvent: _,
        handleSelectTag: p,
        handleUnselectTag: A,
        handleResetTagSelections: E,
        handleInputBlurEvent: b,
    };
}

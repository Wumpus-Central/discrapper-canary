n.d(t, {
    q: () => T,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(884362),
    l = n(602034),
    c = n(837381),
    u = n(827734),
    d = n(658675),
    f = n(820081),
    p = n(475825),
    _ = n(289873),
    h = n(834730),
    m = n(992251),
    g = n(801461),
    E = n(336389);

function b(e, t, n) {
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

function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
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

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = S(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let I = u.A.modules.select.OPTION_HEIGHT.resolve();

function T(e) {
    let t,
        {
            id: n,
            tabIndex: a = 0,
            required: u = !1,
            disabled: d = !1,
            selectionMode: f = "single",
            items: b,
            defaultSelectedItems: O,
            selectedItems: S,
            onSelectionChange: T,
            activeDescendantIndex: R,
            shouldFocusWrap: w = !1,
            renderListItem: P,
            renderEmptyState: D,
            maxVisibleItems: x = 5,
            loading: L = !1,
            onBlur: j,
            onFocus: M,
            typeahead: k = !1,
        } = e,
        U = i.useId(),
        G = null != n ? n : U,
        V = i.useRef(null),
        F = i.useMemo(
            () =>
                b.map((e, t) =>
                    A(y({}, e), {
                        index: t,
                    }),
                ),
            [b],
        ),
        [B, H] = i.useState(null != O ? O : []),
        Y = null != S,
        W = Y ? S : B,
        K = (0, o.Ay)({
            id: G,
            defaultFocused: null != R ? (0, g.ZN)(G, R) : void 0,
            async scrollToEnd() {},
            async scrollToStart() {},
            isEnabled: !d,
            wrap: w,
            preserveFocusPosition: !1,
        });
    i.useEffect(() => {
        requestAnimationFrame(() => {
            if (null != R) {
                var e;
                null == (e = V.current) ||
                    e.scrollToIndex({
                        section: 0,
                        row: R,
                    });
            }
        });
    }, [G, R]);
    let { activeIndex: z, handleKeyDown: q } = N(k, F);
    i.useEffect(() => {
        if (null != z && k) {
            let e = (0, l.t$)(G, (0, g.ZN)(G, z)),
                t = document.querySelector((0, l.Mz)(e));
            null == t || t.focus();
        }
    }, [z, F, k, G]);
    let X = i.useCallback(
            (e) => {
                if (!0 === u && 1 === W.length && W.includes(e)) return;
                let t = (0, g.qH)(f, W, e);
                Y || H(t), null == T || T(t);
            },
            [u, W, T, Y, f],
        ),
        Z = i.useCallback(
            (e) =>
                (0, r.jsx)("div", {
                    className: E.uN,
                    children: (0, r.jsx)(h.E, {
                        variant: "text-md/medium",
                        color: "currentColor",
                        className: E.vF,
                        children: e.label,
                    }),
                }),
            [],
        );
    if (L)
        t = (0, r.jsx)("div", {
            className: E.vG,
            "aria-busy": !0,
            children: (0, r.jsx)(_.y, {
                type: _.t.PULSING_ELLIPSIS,
                className: E.S,
                itemClassName: E.Ci,
            }),
        });
    else if (F.length > 0)
        t = (0, r.jsx)(p.Ei, {
            ref: V,
            style: {
                height: null != x ? "".concat(Math.min(F.length, x) * I, "px") : "100%",
            },
            role: void 0,
            tabIndex: a,
            rowHeight: I,
            sections: [F.length],
            sectionHeight: 0,
            renderSection: () => null,
            renderRow: (e) => {
                var t;
                let { row: n } = e,
                    i = F[n],
                    s = (0, g.ZN)(G, n),
                    o = 0 !== W.length && null != W.find((e) => e.id === i.id);
                return (0, r.jsx)(
                    C,
                    A(y({}, i), {
                        id: s,
                        tabIndex: a,
                        selectionMode: f,
                        selected: o,
                        disabled: d || i.disabled,
                        focused: n === R,
                        onClick: () => {
                            d || i.disabled || X(i);
                        },
                        children: null != (t = null == P ? void 0 : P(i)) ? t : Z(i),
                    }),
                    i.index,
                );
            },
        });
    else {
        var Q;
        t = null != (Q = null == D ? void 0 : D()) ? Q : (0, r.jsx)(m.o, {});
    }
    return (0, r.jsx)(c.hD, {
        navigator: K,
        children: (0, r.jsx)(c.PR, {
            children: (e) => {
                let { ref: n, onKeyDown: i } = e,
                    o = v(e, ["ref", "onKeyDown"]);
                return (0, r.jsx)(
                    "div",
                    A(
                        y(
                            {
                                onBlur: j,
                                onFocus: M,
                                "aria-busy": L,
                                ref: n,
                                onKeyDown: (e) => {
                                    null == i || i(e), q(e);
                                },
                            },
                            o,
                        ),
                        {
                            role: "listbox",
                            tabIndex: a,
                            "aria-multiselectable": "multiple" === f,
                            className: s()(E.cu, {
                                [E.E1]: F.length > x,
                            }),
                            "data-mana-component": "listbox",
                            children: t,
                        },
                    ),
                );
            },
        }),
    });
}

function C(e) {
    let { children: t, id: n, tabIndex: i, selected: a, disabled: s, focused: o, selectionMode: l, onClick: u } = e,
        p = (0, c.rm)(n);

    function _() {
        return "multiple" === l
            ? (0, r.jsx)(d.P, {
                  checked: a,
              })
            : a
              ? (0, r.jsx)(f.B, {
                    color: "currentColor",
                    size: "refresh_sm",
                })
              : null;
    }
    return (0, r.jsxs)(
        "div",
        A(y({}, p), {
            id: n,
            className: E.Vu,
            role: "option",
            tabIndex: -1 === i ? -1 : p.tabIndex,
            onClick: u,
            "aria-disabled": s,
            "aria-selected": a,
            "data-focus-visible": o,
            children: [
                t,
                (0, r.jsx)("div", {
                    className: E.Dt,
                    "aria-hidden": !0,
                    children: _(),
                }),
            ],
        }),
    );
}

function N(e, t) {
    let [n, r] = i.useState(""),
        a = i.useMemo(
            () =>
                e
                    ? t.map((e) =>
                          null != e.label && "function" == typeof e.label.toLowerCase ? e.label.toLowerCase() : "",
                      )
                    : [],
            [t, e],
        ),
        s = i.useCallback((e) => {
            e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.key.length > 1 || r((t) => t + e.key);
        }, []),
        o = i.useRef(null);
    return (
        i.useEffect(
            () => (
                (o.current = setTimeout(() => {
                    r("");
                }, 750)),
                () => {
                    clearTimeout(o.current);
                }
            ),
            [n],
        ),
        {
            activeIndex: i.useMemo(() => {
                if ("" === n || !e) return null;
                let t = a.findIndex((e) => e.startsWith(n.toLowerCase()));
                return t >= 0 ? t : null;
            }, [a, n, e]),
            handleKeyDown: s,
        }
    );
}

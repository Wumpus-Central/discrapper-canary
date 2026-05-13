i.d(t, { kS: () => m, EN: () => E });
var s = i(197867),
    l = i(825913),
    n = i(340287),
    a = i(64700),
    r = i(985620),
    d = i(248215),
    o = i(3388),
    u = i(341221),
    p = i(498430),
    c = i(492313),
    h = i(290424),
    x = i(318473),
    f = i(561514);
let y = (0, a.createContext)(null),
    b = (0, a.createContext)(null),
    g = (0, a.createContext)(null),
    P = (0, a.createContext)(null),
    E = (0, a.forwardRef)(function (e, t) {
        [e, t] = (0, l.JT)(e, t, b);
        let i = (0, a.useContext)(y),
            { id: f, ...E } = e,
            m = (0, r.Bi)();
        f || (f = m);
        let v = i ? i.expandedKeys.has(f) : e.isExpanded,
            C = (function (e) {
                let [t, i] = (0, c.P)(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange),
                    s = (0, a.useCallback)(() => {
                        i(!0);
                    }, [i]),
                    l = (0, a.useCallback)(() => {
                        i(!1);
                    }, [i]),
                    n = (0, a.useCallback)(() => {
                        i(!t);
                    }, [i, t]);
                return { isExpanded: t, setExpanded: i, expand: s, collapse: l, toggle: n };
            })({
                ...e,
                isExpanded: v,
                onExpandedChange(t) {
                    var s;
                    i && i.toggleKey(f), null == (s = e.onExpandedChange) || s.call(e, t);
                },
            }),
            w = a.useRef(null),
            k = e.isDisabled || (null == i ? void 0 : i.isDisabled) || !1,
            { buttonProps: A, panelProps: D } = (function (e, t, i) {
                let { isDisabled: s } = e,
                    l = (0, r.Bi)(),
                    p = (0, r.Bi)(),
                    c = (0, u.wR)(),
                    h = (0, a.useRef)(null),
                    x = (0, a.useCallback)(() => {
                        (h.current = requestAnimationFrame(() => {
                            i.current && i.current.setAttribute("hidden", "until-found");
                        })),
                            (0, n.flushSync)(() => {
                                t.toggle();
                            });
                    }, [i, t]);
                (0, d._)(i, "beforematch", x);
                let f = (0, a.useRef)(null);
                return (
                    (0, o.N)(() => {
                        if ((h.current && cancelAnimationFrame(h.current), i.current && !s && !c)) {
                            let e = i.current;
                            null == f.current || "function" != typeof e.getAnimations
                                ? t.isExpanded
                                    ? (e.removeAttribute("hidden"),
                                      e.style.setProperty("--disclosure-panel-width", "auto"),
                                      e.style.setProperty("--disclosure-panel-height", "auto"))
                                    : (e.setAttribute("hidden", "until-found"),
                                      e.style.setProperty("--disclosure-panel-width", "0px"),
                                      e.style.setProperty("--disclosure-panel-height", "0px"))
                                : t.isExpanded !== f.current &&
                                  (t.isExpanded
                                      ? (e.removeAttribute("hidden"),
                                        e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"),
                                        e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"),
                                        Promise.all(e.getAnimations().map((e) => e.finished))
                                            .then(() => {
                                                e.style.setProperty("--disclosure-panel-width", "auto"),
                                                    e.style.setProperty("--disclosure-panel-height", "auto");
                                            })
                                            .catch(() => {}))
                                      : (e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"),
                                        e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"),
                                        window.getComputedStyle(e).height,
                                        e.style.setProperty("--disclosure-panel-width", "0px"),
                                        e.style.setProperty("--disclosure-panel-height", "0px"),
                                        Promise.all(e.getAnimations().map((e) => e.finished))
                                            .then(() => e.setAttribute("hidden", "until-found"))
                                            .catch(() => {}))),
                                (f.current = t.isExpanded);
                        }
                    }, [s, i, t.isExpanded, c]),
                    (0, a.useEffect)(
                        () => () => {
                            h.current && cancelAnimationFrame(h.current);
                        },
                        [],
                    ),
                    {
                        buttonProps: {
                            id: l,
                            "aria-expanded": t.isExpanded,
                            "aria-controls": p,
                            onPress: (e) => {
                                s || "keyboard" === e.pointerType || t.toggle();
                            },
                            isDisabled: s,
                            onPressStart(e) {
                                "keyboard" !== e.pointerType || s || t.toggle();
                            },
                        },
                        panelProps: {
                            id: p,
                            role: "group",
                            "aria-labelledby": l,
                            "aria-hidden": !t.isExpanded,
                            hidden: c || s ? s || !t.isExpanded : void 0,
                        },
                    }
                );
            })({ ...e, isExpanded: v, isDisabled: k }, C, w),
            { isFocusVisible: R, focusProps: F } = (0, p.o)({ within: !0 }),
            S = (0, l.Sl)({
                ...e,
                id: void 0,
                defaultClassName: "react-aria-Disclosure",
                values: { isExpanded: C.isExpanded, isDisabled: k, isFocusVisibleWithin: R, state: C },
            }),
            K = (0, h.$)(E, { global: !0 });
        return a.createElement(
            l.Kq,
            {
                values: [
                    [s.k, { slots: { [l.P_]: {}, trigger: A } }],
                    [P, { panelProps: D, panelRef: w }],
                    [g, C],
                ],
            },
            a.createElement(
                "div",
                {
                    ...(0, x.v)(K, S, F),
                    ref: t,
                    "data-expanded": C.isExpanded || void 0,
                    "data-disabled": k || void 0,
                    "data-focus-visible-within": R || void 0,
                },
                S.children,
            ),
        );
    }),
    m = (0, a.forwardRef)(function (e, t) {
        let { role: i = "group" } = e,
            { panelProps: n, panelRef: r } = (0, a.useContext)(P),
            { isFocusVisible: d, focusProps: o } = (0, p.o)({ within: !0 }),
            u = (0, l.Sl)({
                ...e,
                defaultClassName: "react-aria-DisclosurePanel",
                values: { isFocusVisibleWithin: d },
            }),
            c = (0, h.$)(e, { global: !0 });
        return a.createElement(
            "div",
            { ...(0, x.v)(c, u, n, o), ref: (0, f.P)(t, r), role: i, "data-focus-visible-within": d || void 0 },
            a.createElement(l.Kq, { values: [[s.k, null]] }, e.children),
        );
    });

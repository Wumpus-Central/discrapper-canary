"use strict";
s.d(t, { kS: () => m, EN: () => x });
var i = s(197867),
    l = s(825913),
    r = s(340287),
    a = s(64700),
    o = s(985620),
    n = s(248215),
    d = s(3388),
    u = s(341221),
    c = s(498430),
    p = s(492313),
    f = s(290424),
    h = s(318473),
    b = s(561514);
let v = (0, a.createContext)(null),
    g = (0, a.createContext)(null),
    y = (0, a.createContext)(null),
    P = (0, a.createContext)(null),
    x = (0, a.forwardRef)(function (e, t) {
        [e, t] = (0, l.JT)(e, t, g);
        let s = (0, a.useContext)(v),
            { id: b, ...x } = e,
            m = (0, o.Bi)();
        b || (b = m);
        let S = s ? s.expandedKeys.has(b) : e.isExpanded,
            E = (function (e) {
                let [t, s] = (0, p.P)(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange),
                    i = (0, a.useCallback)(() => {
                        s(!0);
                    }, [s]),
                    l = (0, a.useCallback)(() => {
                        s(!1);
                    }, [s]),
                    r = (0, a.useCallback)(() => {
                        s(!t);
                    }, [s, t]);
                return { isExpanded: t, setExpanded: s, expand: i, collapse: l, toggle: r };
            })({
                ...e,
                isExpanded: S,
                onExpandedChange(t) {
                    var i;
                    s && s.toggleKey(b), null == (i = e.onExpandedChange) || i.call(e, t);
                },
            }),
            w = a.useRef(null),
            C = e.isDisabled || (null == s ? void 0 : s.isDisabled) || !1,
            { buttonProps: D, panelProps: k } = (function (e, t, s) {
                let { isDisabled: i } = e,
                    l = (0, o.Bi)(),
                    c = (0, o.Bi)(),
                    p = (0, u.wR)(),
                    f = (0, a.useRef)(null),
                    h = (0, a.useCallback)(() => {
                        (f.current = requestAnimationFrame(() => {
                            s.current && s.current.setAttribute("hidden", "until-found");
                        })),
                            (0, r.flushSync)(() => {
                                t.toggle();
                            });
                    }, [s, t]);
                (0, n._)(s, "beforematch", h);
                let b = (0, a.useRef)(null);
                return (
                    (0, d.N)(() => {
                        if ((f.current && cancelAnimationFrame(f.current), s.current && !i && !p)) {
                            let e = s.current;
                            null == b.current || "function" != typeof e.getAnimations
                                ? t.isExpanded
                                    ? (e.removeAttribute("hidden"),
                                      e.style.setProperty("--disclosure-panel-width", "auto"),
                                      e.style.setProperty("--disclosure-panel-height", "auto"))
                                    : (e.setAttribute("hidden", "until-found"),
                                      e.style.setProperty("--disclosure-panel-width", "0px"),
                                      e.style.setProperty("--disclosure-panel-height", "0px"))
                                : t.isExpanded !== b.current &&
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
                                (b.current = t.isExpanded);
                        }
                    }, [i, s, t.isExpanded, p]),
                    (0, a.useEffect)(
                        () => () => {
                            f.current && cancelAnimationFrame(f.current);
                        },
                        [],
                    ),
                    {
                        buttonProps: {
                            id: l,
                            "aria-expanded": t.isExpanded,
                            "aria-controls": c,
                            onPress: (e) => {
                                i || "keyboard" === e.pointerType || t.toggle();
                            },
                            isDisabled: i,
                            onPressStart(e) {
                                "keyboard" !== e.pointerType || i || t.toggle();
                            },
                        },
                        panelProps: {
                            id: c,
                            role: "group",
                            "aria-labelledby": l,
                            "aria-hidden": !t.isExpanded,
                            hidden: p || i ? i || !t.isExpanded : void 0,
                        },
                    }
                );
            })({ ...e, isExpanded: S, isDisabled: C }, E, w),
            { isFocusVisible: K, focusProps: A } = (0, c.o)({ within: !0 }),
            F = (0, l.Sl)({
                ...e,
                id: void 0,
                defaultClassName: "react-aria-Disclosure",
                values: { isExpanded: E.isExpanded, isDisabled: C, isFocusVisibleWithin: K, state: E },
            }),
            T = (0, f.$)(x, { global: !0 });
        return a.createElement(
            l.Kq,
            {
                values: [
                    [i.k, { slots: { [l.P_]: {}, trigger: D } }],
                    [P, { panelProps: k, panelRef: w }],
                    [y, E],
                ],
            },
            a.createElement(
                "div",
                {
                    ...(0, h.v)(T, F, A),
                    ref: t,
                    "data-expanded": E.isExpanded || void 0,
                    "data-disabled": C || void 0,
                    "data-focus-visible-within": K || void 0,
                },
                F.children,
            ),
        );
    }),
    m = (0, a.forwardRef)(function (e, t) {
        let { role: s = "group" } = e,
            { panelProps: r, panelRef: o } = (0, a.useContext)(P),
            { isFocusVisible: n, focusProps: d } = (0, c.o)({ within: !0 }),
            u = (0, l.Sl)({
                ...e,
                defaultClassName: "react-aria-DisclosurePanel",
                values: { isFocusVisibleWithin: n },
            }),
            p = (0, f.$)(e, { global: !0 });
        return a.createElement(
            "div",
            { ...(0, h.v)(p, u, r, d), ref: (0, b.P)(t, o), role: s, "data-focus-visible-within": n || void 0 },
            a.createElement(l.Kq, { values: [[i.k, null]] }, e.children),
        );
    });

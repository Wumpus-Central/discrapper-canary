"use strict";
r.d(t, { kS: () => E, EN: () => y });
var n = r(197867),
    a = r(825913),
    s = r(340287),
    i = r(64700),
    o = r(985620),
    l = r(248215),
    u = r(3388),
    c = r(341221),
    d = r(498430),
    f = r(492313),
    p = r(290424),
    h = r(318473),
    m = r(561514);
let _ = (0, i.createContext)(null),
    g = (0, i.createContext)(null),
    v = (0, i.createContext)(null),
    b = (0, i.createContext)(null),
    y = (0, i.forwardRef)(function (e, t) {
        [e, t] = (0, a.JT)(e, t, g);
        let r = (0, i.useContext)(_),
            { id: m, ...y } = e,
            E = (0, o.Bi)();
        m || (m = E);
        let S = r ? r.expandedKeys.has(m) : e.isExpanded,
            T = (function (e) {
                let [t, r] = (0, f.P)(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange),
                    n = (0, i.useCallback)(() => {
                        r(!0);
                    }, [r]),
                    a = (0, i.useCallback)(() => {
                        r(!1);
                    }, [r]),
                    s = (0, i.useCallback)(() => {
                        r(!t);
                    }, [r, t]);
                return { isExpanded: t, setExpanded: r, expand: n, collapse: a, toggle: s };
            })({
                ...e,
                isExpanded: S,
                onExpandedChange(t) {
                    var n;
                    r && r.toggleKey(m), null == (n = e.onExpandedChange) || n.call(e, t);
                },
            }),
            x = i.useRef(null),
            w = e.isDisabled || (null == r ? void 0 : r.isDisabled) || !1,
            { buttonProps: C, panelProps: D } = (function (e, t, r) {
                let { isDisabled: n } = e,
                    a = (0, o.Bi)(),
                    d = (0, o.Bi)(),
                    f = (0, c.wR)(),
                    p = (0, i.useRef)(null),
                    h = (0, i.useCallback)(() => {
                        (p.current = requestAnimationFrame(() => {
                            r.current && r.current.setAttribute("hidden", "until-found");
                        })),
                            (0, s.flushSync)(() => {
                                t.toggle();
                            });
                    }, [r, t]);
                (0, l._)(r, "beforematch", h);
                let m = (0, i.useRef)(null);
                return (
                    (0, u.N)(() => {
                        if ((p.current && cancelAnimationFrame(p.current), r.current && !n && !f)) {
                            let e = r.current;
                            null == m.current || "function" != typeof e.getAnimations
                                ? t.isExpanded
                                    ? (e.removeAttribute("hidden"),
                                      e.style.setProperty("--disclosure-panel-width", "auto"),
                                      e.style.setProperty("--disclosure-panel-height", "auto"))
                                    : (e.setAttribute("hidden", "until-found"),
                                      e.style.setProperty("--disclosure-panel-width", "0px"),
                                      e.style.setProperty("--disclosure-panel-height", "0px"))
                                : t.isExpanded !== m.current &&
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
                                (m.current = t.isExpanded);
                        }
                    }, [n, r, t.isExpanded, f]),
                    (0, i.useEffect)(
                        () => () => {
                            p.current && cancelAnimationFrame(p.current);
                        },
                        [],
                    ),
                    {
                        buttonProps: {
                            id: a,
                            "aria-expanded": t.isExpanded,
                            "aria-controls": d,
                            onPress: (e) => {
                                n || "keyboard" === e.pointerType || t.toggle();
                            },
                            isDisabled: n,
                            onPressStart(e) {
                                "keyboard" !== e.pointerType || n || t.toggle();
                            },
                        },
                        panelProps: {
                            id: d,
                            role: "group",
                            "aria-labelledby": a,
                            "aria-hidden": !t.isExpanded,
                            hidden: f || n ? n || !t.isExpanded : void 0,
                        },
                    }
                );
            })({ ...e, isExpanded: S, isDisabled: w }, T, x),
            { isFocusVisible: O, focusProps: A } = (0, d.o)({ within: !0 }),
            M = (0, a.Sl)({
                ...e,
                id: void 0,
                defaultClassName: "react-aria-Disclosure",
                values: { isExpanded: T.isExpanded, isDisabled: w, isFocusVisibleWithin: O, state: T },
            }),
            R = (0, p.$)(y, { global: !0 });
        return i.createElement(
            a.Kq,
            {
                values: [
                    [n.k, { slots: { [a.P_]: {}, trigger: C } }],
                    [b, { panelProps: D, panelRef: x }],
                    [v, T],
                ],
            },
            i.createElement(
                "div",
                {
                    ...(0, h.v)(R, M, A),
                    ref: t,
                    "data-expanded": T.isExpanded || void 0,
                    "data-disabled": w || void 0,
                    "data-focus-visible-within": O || void 0,
                },
                M.children,
            ),
        );
    }),
    E = (0, i.forwardRef)(function (e, t) {
        let { role: r = "group" } = e,
            { panelProps: s, panelRef: o } = (0, i.useContext)(b),
            { isFocusVisible: l, focusProps: u } = (0, d.o)({ within: !0 }),
            c = (0, a.Sl)({
                ...e,
                defaultClassName: "react-aria-DisclosurePanel",
                values: { isFocusVisibleWithin: l },
            }),
            f = (0, p.$)(e, { global: !0 });
        return i.createElement(
            "div",
            { ...(0, h.v)(f, c, s, u), ref: (0, m.P)(t, o), role: r, "data-focus-visible-within": l || void 0 },
            i.createElement(a.Kq, { values: [[n.k, null]] }, e.children),
        );
    });

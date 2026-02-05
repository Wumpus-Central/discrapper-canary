"use strict";
n.d(t, { S: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(366010),
    l = n(765178),
    u = n(844222),
    c = n(977067),
    d = n(426333),
    _ = n(27989),
    f = n(460890),
    p = n(145188),
    h = n(289873),
    m = n(834730),
    g = n(165180);
let E = { xs: "text-xs/medium", sm: "text-sm/medium", md: "text-md/medium" },
    A = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    I = { xs: "sm", sm: "sm", md: "md" };
function T(e) {
    let {
            role: t = "button",
            variant: n = "primary",
            size: a = "md",
            text: _,
            icon: p,
            iconPosition: h = "start",
            iconOpticalOffsetMargin: A = 0,
            fullWidth: I = !1,
            focusProps: T,
            loading: C,
            loadingStartedLabel: b,
            loadingFinishedLabel: N,
            rounded: R = !1,
            type: O = "button",
            rel: D,
            onClick: L,
            onDoubleClick: w,
            onMouseEnter: x,
            onMouseLeave: P,
            onMouseUp: M,
            onMouseDown: k,
            onKeyDown: U,
            disabled: G,
            minWidth: V,
            className: F,
            style: B,
            buttonRef: j,
            ...H
        } = e,
        Y = (0, c.C)(),
        W = Y?.size ?? a,
        K = Y?.fullWidth ?? I,
        z = null != _,
        $ = i.useRef(null),
        q = j ?? $,
        Z = (0, r.jsx)(v, { icon: p, iconOpticalOffsetMargin: A, iconPosition: h, size: W, ref: q, disabled: G }),
        Q = "expressive" === n,
        X = i.useContext(u.C),
        { theme: J, i18n: ee } = (0, f.G9)(),
        et = (0, o.q)(J),
        en = i.useRef(!1);
    i.useEffect(() => {
        !0 === C && ((en.current = !0), l.O.announce(b ?? ee.BUTTON_LOADING_STARTED_LABEL)),
            !1 === C && !0 === en.current && (l.O.announce(N ?? ee.BUTTON_LOADING_FINISHED_LABEL), (en.current = !1));
    }, [C, b, N, ee.BUTTON_LOADING_STARTED_LABEL, ee.BUTTON_LOADING_FINISHED_LABEL]);
    let er = (0, r.jsxs)("div", {
            className: s()(g.buttonChildren, { [g.loading]: C }),
            children: [
                null != Z && "start" === h && Z,
                z && (0, r.jsx)(m.E, { tag: "span", variant: E[W], color: "none", lineClamp: 1, children: _ }),
                null != Z && "end" === h && Z,
            ],
        }),
        ei = G || C,
        ea = V;
    null != ea && "number" == typeof ea && (ea = `${ea}px`);
    let es = (0, r.jsx)(d.vN, {
        ...T,
        children: (0, r.jsxs)("button", {
            "data-mana-component": "button",
            role: t,
            "aria-busy": C,
            className: s()(g.button, g[W], g[n], { [g.hasText]: z, [g.fullWidth]: K, [g.rounded]: R }),
            ref: q,
            rel: D,
            type: O,
            onClick: ei ? (e) => e.preventDefault() : L,
            onDoubleClick: ei ? (e) => e.preventDefault() : w,
            onMouseUp: ei ? void 0 : M,
            onMouseDown: ei ? void 0 : k,
            onKeyDown: ei ? void 0 : U,
            onMouseEnter: ei ? void 0 : x,
            onMouseLeave: ei ? void 0 : P,
            disabled: G,
            style: { "--__button-min-width": ea },
            ...H,
            children: [
                Q &&
                    (0, r.jsx)(S, {
                        hasReducedMotion: X.reducedMotion.enabled,
                        buttonRef: q,
                        isLightMode: et,
                        disabled: G,
                    }),
                null == C
                    ? (0, r.jsx)("div", { className: g.buttonChildrenWrapper, children: er })
                    : (0, r.jsx)(y, { loading: C, size: W, children: er }),
            ],
        }),
    });
    return Q
        ? (0, r.jsx)("div", { className: s()(g.expressiveWrapper, { [g.fullWidth]: K, [g.hasText]: z }), children: es })
        : es;
}
function y(e) {
    let { children: t, loading: n, size: a } = e,
        o = i.useRef(null),
        [l, u] = i.useState(n);
    return (
        i.useEffect(
            () => (
                null != o.current && clearTimeout(o.current),
                n
                    ? u(!0)
                    : (o.current = setTimeout(() => {
                          u(!1);
                      }, 500)),
                () => {
                    null != o.current && clearTimeout(o.current);
                }
            ),
            [n],
        ),
        (0, r.jsxs)("div", {
            className: g.buttonChildrenWrapper,
            children: [
                t,
                l &&
                    (0, r.jsx)("div", {
                        className: s()(g.spinnerWrapper, { [g.fadeIn]: n, [g.fadeOut]: !n }),
                        children: (0, r.jsx)(h.y, {
                            type: h.t.PULSING_ELLIPSIS,
                            className: s()(g.spinner, g[`spinner-${a}`]),
                            itemClassName: g.spinnerItem,
                        }),
                    }),
            ],
        })
    );
}
function S(e) {
    let { hasReducedMotion: t, buttonRef: n, isLightMode: a, disabled: o } = e,
        l = i.useRef(null);
    return (
        i.useEffect(() => {
            if (!o && t) {
                let e = n.current,
                    t = () => {
                        l.current?.play();
                    },
                    r = () => {
                        l.current?.pause();
                    };
                return (
                    e?.addEventListener("mouseenter", t, !0),
                    e?.addEventListener("mouseleave", r, !0),
                    () => {
                        e?.removeEventListener("mouseenter", t, !0), e?.removeEventListener("mouseleave", r, !0);
                    }
                );
            }
        }, [t, n, o]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                !o &&
                    (0, r.jsx)(p.s, {
                        className: s()(g.expressiveRive, g.expressiveBackground),
                        eventTargetRef: n,
                        fit: "layout",
                        artboard: "BaseGlowRemapped",
                        ref: l,
                        withReducedMotion: "short-loop",
                    }),
                !t &&
                    !o &&
                    (0, r.jsx)(p.s, {
                        className: s()(g.expressiveRive, g.expressiveHoverContainer),
                        fit: "layout",
                        artboard: a ? "HoverLightmode" : "HoverDarkmode",
                    }),
                (0, r.jsx)("div", { className: s()(g.expressiveRive, g.expressiveFill) }),
            ],
        })
    );
}
function v(e) {
    let { icon: t, iconOpticalOffsetMargin: n, iconPosition: a, size: s, ref: o, disabled: l } = e,
        u = null;
    function c() {
        if (0 === n) return {};
        switch (a) {
            case "start":
                return { marginLeft: n };
            case "end":
                return { marginRight: n };
        }
        return {};
    }
    let [d, f] = i.useState(!1);
    if (
        (i.useEffect(() => {
            if ("object" == typeof t && "sticker" === t.type && null != o.current) {
                let e = o.current,
                    t = () => {
                        l || f(!0);
                    },
                    n = () => {
                        l || f(!1);
                    };
                return (
                    e.addEventListener("mouseenter", t),
                    e.addEventListener("mouseleave", n),
                    () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n);
                    }
                );
            }
        }, [t, o, l]),
        "function" == typeof t || t?.type === "icon")
    ) {
        let e = "function" == typeof t ? t : t.asset;
        u = (0, r.jsx)(e, { color: "currentColor", style: c(), size: A[s], className: g.icon });
    } else if (null != t) {
        if ("rive" === t.type) {
            let e = t.asset;
            u = (0, r.jsx)(e, { ...t.riveProps, eventTargetRef: o, style: { width: _.E[A[s]], height: _.E[A[s]] } });
        } else if ("sticker" === t.type) {
            let e = t.component;
            u = (0, r.jsx)(e, { size: _.E[I[s]], sticker: t.asset, isInteracting: d });
        }
    }
    return u;
}

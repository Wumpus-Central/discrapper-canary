"use strict";
n.d(t, { S: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(165180);
let g = { xs: "text-xs/medium", sm: "text-sm/medium", md: "text-md/medium" },
    A = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    I = { xs: "sm", sm: "sm", md: "md" };
function T(e) {
    let {
            role: t = "button",
            variant: n = "primary",
            size: s = "md",
            text: _,
            icon: p,
            iconPosition: h = "start",
            iconOpticalOffsetMargin: A = 0,
            fullWidth: I = !1,
            focusProps: T,
            loading: N,
            loadingStartedLabel: C,
            loadingFinishedLabel: b,
            rounded: R = !1,
            type: O = "button",
            rel: D,
            onClick: L,
            onDoubleClick: w,
            onMouseEnter: x,
            onMouseLeave: M,
            onMouseUp: P,
            onMouseDown: k,
            onKeyDown: U,
            disabled: G,
            minWidth: F,
            className: V,
            style: B,
            buttonRef: H,
            ...j
        } = e,
        Y = (0, c.C)(),
        W = Y?.size ?? s,
        K = Y?.fullWidth ?? I,
        z = null != _,
        $ = i.useRef(null),
        q = H ?? $,
        Z = (0, r.jsx)(v, { icon: p, iconOpticalOffsetMargin: A, iconPosition: h, size: W, ref: q, disabled: G }),
        X = "expressive" === n,
        Q = i.useContext(u.C),
        { theme: J, i18n: ee } = (0, f.G9)(),
        et = (0, o.q)(J),
        en = i.useRef(!1);
    i.useEffect(() => {
        !0 === N && ((en.current = !0), l.O.announce(C ?? ee.BUTTON_LOADING_STARTED_LABEL)),
            !1 === N && !0 === en.current && (l.O.announce(b ?? ee.BUTTON_LOADING_FINISHED_LABEL), (en.current = !1));
    }, [N, C, b, ee.BUTTON_LOADING_STARTED_LABEL, ee.BUTTON_LOADING_FINISHED_LABEL]);
    let er = (0, r.jsxs)("div", {
            className: a()(E.buttonChildren, { [E.loading]: N }),
            children: [
                null != Z && "start" === h && Z,
                z && (0, r.jsx)(m.E, { tag: "span", variant: g[W], color: "none", lineClamp: 1, children: _ }),
                null != Z && "end" === h && Z,
            ],
        }),
        ei = G || N,
        es = F;
    null != es && "number" == typeof es && (es = `${es}px`);
    let ea = (0, r.jsx)(d.vN, {
        ...T,
        children: (0, r.jsxs)("button", {
            "data-mana-component": "button",
            role: t,
            "aria-busy": N,
            className: a()(E.button, E[W], E[n], { [E.hasText]: z, [E.fullWidth]: K, [E.rounded]: R }),
            ref: q,
            rel: D,
            type: O,
            onClick: ei ? (e) => e.preventDefault() : L,
            onDoubleClick: ei ? (e) => e.preventDefault() : w,
            onMouseUp: ei ? void 0 : P,
            onMouseDown: ei ? void 0 : k,
            onKeyDown: ei ? void 0 : U,
            onMouseEnter: ei ? void 0 : x,
            onMouseLeave: ei ? void 0 : M,
            disabled: G,
            style: { "--__button-min-width": es },
            ...j,
            children: [
                X &&
                    (0, r.jsx)(y, {
                        hasReducedMotion: Q.reducedMotion.enabled,
                        buttonRef: q,
                        isLightMode: et,
                        disabled: G,
                    }),
                null == N
                    ? (0, r.jsx)("div", { className: E.buttonChildrenWrapper, children: er })
                    : (0, r.jsx)(S, { loading: N, size: W, children: er }),
            ],
        }),
    });
    return X
        ? (0, r.jsx)("div", { className: a()(E.expressiveWrapper, { [E.fullWidth]: K, [E.hasText]: z }), children: ea })
        : ea;
}
function S(e) {
    let { children: t, loading: n, size: s } = e,
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
            className: E.buttonChildrenWrapper,
            children: [
                t,
                l &&
                    (0, r.jsx)("div", {
                        className: a()(E.spinnerWrapper, { [E.fadeIn]: n, [E.fadeOut]: !n }),
                        children: (0, r.jsx)(h.y, {
                            type: h.t.PULSING_ELLIPSIS,
                            className: a()(E.spinner, E[`spinner-${s}`]),
                            itemClassName: E.spinnerItem,
                        }),
                    }),
            ],
        })
    );
}
function y(e) {
    let { hasReducedMotion: t, buttonRef: n, isLightMode: s, disabled: o } = e,
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
                        className: a()(E.expressiveRive, E.expressiveBackground),
                        eventTargetRef: n,
                        fit: "layout",
                        artboard: "BaseGlowRemapped",
                        ref: l,
                        withReducedMotion: "short-loop",
                    }),
                !t &&
                    !o &&
                    (0, r.jsx)(p.s, {
                        className: a()(E.expressiveRive, E.expressiveHoverContainer),
                        fit: "layout",
                        artboard: s ? "HoverLightmode" : "HoverDarkmode",
                    }),
                (0, r.jsx)("div", { className: a()(E.expressiveRive, E.expressiveFill) }),
            ],
        })
    );
}
function v(e) {
    let { icon: t, iconOpticalOffsetMargin: n, iconPosition: s, size: a, ref: o, disabled: l } = e,
        u = null;
    function c() {
        if (0 === n) return {};
        switch (s) {
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
        u = (0, r.jsx)(e, { color: "currentColor", style: c(), size: A[a], className: E.icon });
    } else if (null != t) {
        if ("rive" === t.type) {
            let e = t.asset;
            u = (0, r.jsx)(e, { ...t.riveProps, eventTargetRef: o, style: { width: _.E[A[a]], height: _.E[A[a]] } });
        } else if ("sticker" === t.type) {
            let e = t.component;
            u = (0, r.jsx)(e, { size: _.E[I[a]], sticker: t.asset, isInteracting: d });
        }
    }
    return u;
}

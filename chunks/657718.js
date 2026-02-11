"use strict";
n.d(t, { S: () => y });
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
    h = n(145188),
    p = n(289873),
    g = n(834730),
    E = n(165180);
let A = { xs: "text-xs/medium", sm: "text-sm/medium", md: "text-md/medium" },
    I = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    T = { xs: "sm", sm: "sm", md: "md" };
function y(e) {
    let {
            role: t = "button",
            variant: n = "primary",
            size: a = "md",
            text: _,
            icon: h,
            iconPosition: p = "start",
            iconOpticalOffsetMargin: I = 0,
            fullWidth: T = !1,
            focusProps: y,
            loading: b,
            loadingStartedLabel: N,
            loadingFinishedLabel: R,
            rounded: O = !1,
            type: D = "button",
            rel: L,
            onClick: w,
            onDoubleClick: x,
            onMouseEnter: P,
            onMouseLeave: M,
            onMouseUp: k,
            onMouseDown: U,
            onKeyDown: G,
            disabled: F,
            minWidth: V,
            className: B,
            style: j,
            buttonRef: H,
            ...Y
        } = e,
        W = (0, c.C)(),
        K = W?.size ?? a,
        $ = W?.fullWidth ?? T,
        z = null != _,
        q = i.useRef(null),
        X = H ?? q,
        Z = (0, r.jsx)(C, { icon: h, iconOpticalOffsetMargin: I, iconPosition: p, size: K, ref: X, disabled: F }),
        Q = "expressive" === n,
        J = i.useContext(u.C),
        { theme: ee, i18n: et } = (0, f.G9)(),
        en = (0, o.q)(ee),
        er = i.useRef(!1);
    i.useEffect(() => {
        !0 === b && ((er.current = !0), l.O.announce(N ?? et.BUTTON_LOADING_STARTED_LABEL)),
            !1 === b && !0 === er.current && (l.O.announce(R ?? et.BUTTON_LOADING_FINISHED_LABEL), (er.current = !1));
    }, [b, N, R, et.BUTTON_LOADING_STARTED_LABEL, et.BUTTON_LOADING_FINISHED_LABEL]);
    let ei = (0, r.jsxs)("div", {
            className: s()(E.buttonChildren, { [E.loading]: b }),
            children: [
                null != Z && "start" === p && Z,
                z && (0, r.jsx)(g.E, { tag: "span", variant: A[K], color: "none", lineClamp: 1, children: _ }),
                null != Z && "end" === p && Z,
            ],
        }),
        ea = F || b,
        es = V;
    null != es && "number" == typeof es && (es = `${es}px`);
    let eo = (0, r.jsx)(d.vN, {
        ...y,
        children: (0, r.jsxs)("button", {
            "data-mana-component": "button",
            role: t,
            "aria-busy": b,
            className: s()(E.button, E[K], E[n], { [E.hasText]: z, [E.fullWidth]: $, [E.rounded]: O }),
            ref: X,
            rel: L,
            type: D,
            onClick: ea ? (e) => e.preventDefault() : w,
            onDoubleClick: ea ? (e) => e.preventDefault() : x,
            onMouseUp: ea ? void 0 : k,
            onMouseDown: ea ? void 0 : U,
            onKeyDown: ea ? void 0 : G,
            onMouseEnter: ea ? void 0 : P,
            onMouseLeave: ea ? void 0 : M,
            disabled: F,
            style: { "--__button-min-width": es },
            ...Y,
            children: [
                Q &&
                    (0, r.jsx)(v, {
                        hasReducedMotion: J.reducedMotion.enabled,
                        buttonRef: X,
                        isLightMode: en,
                        disabled: F,
                    }),
                null == b
                    ? (0, r.jsx)("div", { className: E.buttonChildrenWrapper, children: ei })
                    : (0, r.jsx)(S, { loading: b, size: K, children: ei }),
            ],
        }),
    });
    return Q
        ? (0, r.jsx)("div", { className: s()(E.expressiveWrapper, { [E.fullWidth]: $, [E.hasText]: z }), children: eo })
        : eo;
}
function S(e) {
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
            className: E.buttonChildrenWrapper,
            children: [
                t,
                l &&
                    (0, r.jsx)("div", {
                        className: s()(E.spinnerWrapper, { [E.fadeIn]: n, [E.fadeOut]: !n }),
                        children: (0, r.jsx)(p.y, {
                            type: p.t.PULSING_ELLIPSIS,
                            className: s()(E.spinner, E[`spinner-${a}`]),
                            itemClassName: E.spinnerItem,
                        }),
                    }),
            ],
        })
    );
}
function v(e) {
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
                    (0, r.jsx)(h.s, {
                        className: s()(E.expressiveRive, E.expressiveBackground),
                        eventTargetRef: n,
                        fit: "layout",
                        artboard: "BaseGlowRemapped",
                        ref: l,
                        withReducedMotion: "short-loop",
                    }),
                !t &&
                    !o &&
                    (0, r.jsx)(h.s, {
                        className: s()(E.expressiveRive, E.expressiveHoverContainer),
                        fit: "layout",
                        artboard: a ? "HoverLightmode" : "HoverDarkmode",
                    }),
                (0, r.jsx)("div", { className: s()(E.expressiveRive, E.expressiveFill) }),
            ],
        })
    );
}
function C(e) {
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
        u = (0, r.jsx)(e, { color: "currentColor", style: c(), size: I[s], className: E.icon });
    } else if (null != t) {
        if ("rive" === t.type) {
            let e = t.asset;
            u = (0, r.jsx)(e, { ...t.riveProps, eventTargetRef: o, style: { width: _.E[I[s]], height: _.E[I[s]] } });
        } else if ("sticker" === t.type) {
            let e = t.component;
            u = (0, r.jsx)(e, { size: _.E[T[s]], sticker: t.asset, isInteracting: d });
        }
    }
    return u;
}

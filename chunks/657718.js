"use strict";
n.d(t, { S: () => T, a: () => y });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(366010),
    l = n(765178),
    u = n(844222),
    c = n(977067),
    d = n(187322),
    _ = n(27989),
    f = n(460890),
    h = n(145188),
    p = n(289873),
    E = n(834730),
    m = n(518229);
let g = { xs: "text-xs/medium", sm: "text-sm/medium", md: "text-md/medium" },
    A = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    I = { xs: "sm", sm: "sm", md: "md" };
function T(e) {
    let {
            role: t = "button",
            variant: n = "primary",
            size: s = "md",
            text: _,
            icon: h,
            iconPosition: p = "start",
            iconOpticalOffsetMargin: A = 0,
            fullWidth: I = !1,
            focusProps: T,
            loading: C,
            loadingStartedLabel: v,
            loadingFinishedLabel: O,
            rounded: R = !1,
            type: b = "button",
            rel: D,
            onClick: L,
            onDoubleClick: w,
            onMouseEnter: M,
            onMouseLeave: P,
            onMouseUp: x,
            onMouseDown: U,
            onKeyDown: k,
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
        $ = r.useRef(null),
        q = H ?? $,
        Z = (0, i.jsx)(y, { icon: h, iconOpticalOffsetMargin: A, iconPosition: p, size: W, ref: q, disabled: G }),
        X = "expressive" === n,
        Q = r.useContext(u.C),
        { theme: J, i18n: ee } = (0, f.G9)(),
        et = (0, o.q)(J),
        en = r.useRef(!1);
    r.useEffect(() => {
        !0 === C && ((en.current = !0), l.O.announce(v ?? ee.BUTTON_LOADING_STARTED_LABEL)),
            !1 === C && !0 === en.current && (l.O.announce(O ?? ee.BUTTON_LOADING_FINISHED_LABEL), (en.current = !1));
    }, [C, v, O, ee.BUTTON_LOADING_STARTED_LABEL, ee.BUTTON_LOADING_FINISHED_LABEL]);
    let ei = (0, i.jsxs)("div", {
            className: a()(m.buttonChildren, { [m.loading]: C }),
            children: [
                null != Z && "start" === p && Z,
                z && (0, i.jsx)(E.E, { tag: "span", variant: g[W], color: "none", lineClamp: 1, children: _ }),
                null != Z && "end" === p && Z,
            ],
        }),
        er = G || C,
        es = F;
    null != es && "number" == typeof es && (es = `${es}px`);
    let ea = (0, i.jsx)(d.vN, {
        ...T,
        children: (0, i.jsxs)("button", {
            "data-mana-component": "button",
            role: t,
            "aria-busy": C,
            className: a()(m.button, m[W], m[n], { [m.hasText]: z, [m.fullWidth]: K, [m.rounded]: R }),
            ref: q,
            rel: D,
            type: b,
            onClick: er ? (e) => e.preventDefault() : L,
            onDoubleClick: er ? (e) => e.preventDefault() : w,
            onMouseUp: er ? void 0 : x,
            onMouseDown: er ? void 0 : U,
            onKeyDown: er ? void 0 : k,
            onMouseEnter: er ? void 0 : M,
            onMouseLeave: er ? void 0 : P,
            disabled: G,
            style: { "--__button-min-width": es },
            ...j,
            children: [
                X &&
                    (0, i.jsx)(N, {
                        hasReducedMotion: Q.reducedMotion.enabled,
                        buttonRef: q,
                        isLightMode: et,
                        disabled: G,
                    }),
                null == C
                    ? (0, i.jsx)("div", { className: m.buttonChildrenWrapper, children: ei })
                    : (0, i.jsx)(S, { loading: C, size: W, children: ei }),
            ],
        }),
    });
    return X
        ? (0, i.jsx)("div", { className: a()(m.expressiveWrapper, { [m.fullWidth]: K, [m.hasText]: z }), children: ea })
        : ea;
}
function S(e) {
    let { children: t, loading: n, size: s } = e,
        o = r.useRef(null),
        [l, u] = r.useState(n);
    return (
        r.useEffect(
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
        (0, i.jsxs)("div", {
            className: m.buttonChildrenWrapper,
            children: [
                t,
                l &&
                    (0, i.jsx)("div", {
                        className: a()(m.spinnerWrapper, { [m.fadeIn]: n, [m.fadeOut]: !n }),
                        children: (0, i.jsx)(p.y, {
                            type: p.t.PULSING_ELLIPSIS,
                            className: a()(m.spinner, m[`spinner-${s}`]),
                            itemClassName: m.spinnerItem,
                        }),
                    }),
            ],
        })
    );
}
function N(e) {
    let { hasReducedMotion: t, buttonRef: n, isLightMode: s, disabled: o } = e,
        l = r.useRef(null);
    return (
        r.useEffect(() => {
            if (!o && t) {
                let e = n.current,
                    t = () => {
                        l.current?.play();
                    },
                    i = () => {
                        l.current?.pause();
                    };
                return (
                    e?.addEventListener("mouseenter", t, !0),
                    e?.addEventListener("mouseleave", i, !0),
                    () => {
                        e?.removeEventListener("mouseenter", t, !0), e?.removeEventListener("mouseleave", i, !0);
                    }
                );
            }
        }, [t, n, o]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                !o &&
                    (0, i.jsx)(h.s, {
                        className: a()(m.expressiveRive, m.expressiveBackground),
                        eventTargetRef: n,
                        fit: "layout",
                        artboard: "BaseGlowRemapped",
                        ref: l,
                        withReducedMotion: "short-loop",
                    }),
                !t &&
                    !o &&
                    (0, i.jsx)(h.s, {
                        className: a()(m.expressiveRive, m.expressiveHoverContainer),
                        fit: "layout",
                        artboard: s ? "HoverLightmode" : "HoverDarkmode",
                    }),
                (0, i.jsx)("div", { className: a()(m.expressiveRive, m.expressiveFill) }),
            ],
        })
    );
}
function y(e) {
    let { icon: t, iconOpticalOffsetMargin: n, iconPosition: s, size: a, ref: o, disabled: l } = e,
        u = null,
        [c, d] = r.useState(!1);
    if (
        (r.useEffect(() => {
            if ("object" == typeof t && "sticker" === t.type && null != o.current) {
                let e = o.current,
                    t = () => {
                        l || d(!0);
                    },
                    n = () => {
                        l || d(!1);
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
        u = (0, i.jsx)(e, {
            color: "currentColor",
            style: (function () {
                if (0 === n) return {};
                switch (s) {
                    case "start":
                        return { marginLeft: n };
                    case "end":
                        return { marginRight: n };
                }
                return {};
            })(),
            size: A[a],
            className: m.icon,
        });
    } else if (null != t) {
        if ("rive" === t.type) {
            let e = t.asset;
            u = (0, i.jsx)(e, { ...t.riveProps, eventTargetRef: o, style: { width: _.E[A[a]], height: _.E[A[a]] } });
        } else if ("sticker" === t.type) {
            let e = t.component;
            u = (0, i.jsx)(e, { size: _.E[I[a]], sticker: t.asset, isInteracting: c });
        }
    }
    return u;
}

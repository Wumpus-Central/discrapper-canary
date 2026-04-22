"use strict";
n.d(t, { S: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(366010),
    l = n(765178),
    u = n(844222),
    d = n(977067),
    c = n(187322),
    _ = n(27989),
    f = n(460890),
    E = n(145188),
    h = n(289873),
    p = n(834730),
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
            icon: E,
            iconPosition: h = "start",
            iconOpticalOffsetMargin: A = 0,
            fullWidth: I = !1,
            focusProps: T,
            loading: O,
            loadingStartedLabel: R,
            loadingFinishedLabel: v,
            rounded: C = !1,
            type: b = "button",
            rel: D,
            onClick: L,
            onDoubleClick: w,
            onMouseEnter: M,
            onMouseLeave: P,
            onMouseUp: U,
            onMouseDown: k,
            onKeyDown: x,
            disabled: G,
            minWidth: V,
            className: F,
            style: B,
            buttonRef: H,
            ...Y
        } = e,
        W = (0, d.C)(),
        j = W?.size ?? s,
        K = W?.fullWidth ?? I,
        $ = null != _,
        z = i.useRef(null),
        q = H ?? z,
        X = (0, r.jsx)(N, { icon: E, iconOpticalOffsetMargin: A, iconPosition: h, size: j, ref: q, disabled: G }),
        Q = "expressive" === n,
        J = i.useContext(u.C),
        { theme: Z, i18n: ee } = (0, f.G9)(),
        et = (0, o.q)(Z),
        en = i.useRef(!1);
    i.useEffect(() => {
        !0 === O && ((en.current = !0), l.O.announce(R ?? ee.BUTTON_LOADING_STARTED_LABEL)),
            !1 === O && !0 === en.current && (l.O.announce(v ?? ee.BUTTON_LOADING_FINISHED_LABEL), (en.current = !1));
    }, [O, R, v, ee.BUTTON_LOADING_STARTED_LABEL, ee.BUTTON_LOADING_FINISHED_LABEL]);
    let er = (0, r.jsxs)("div", {
            className: a()(m.buttonChildren, { [m.loading]: O }),
            children: [
                null != X && "start" === h && X,
                $ && (0, r.jsx)(p.E, { tag: "span", variant: g[j], color: "none", lineClamp: 1, children: _ }),
                null != X && "end" === h && X,
            ],
        }),
        ei = G || O,
        es = V;
    null != es && "number" == typeof es && (es = `${es}px`);
    let ea = (0, r.jsx)(c.vN, {
        ...T,
        children: (0, r.jsxs)("button", {
            "data-mana-component": "button",
            role: t,
            "aria-busy": O,
            className: a()(m.button, m[j], m[n], { [m.hasText]: $, [m.fullWidth]: K, [m.rounded]: C }),
            ref: q,
            rel: D,
            type: b,
            onClick: ei ? (e) => e.preventDefault() : L,
            onDoubleClick: ei ? (e) => e.preventDefault() : w,
            onMouseUp: ei ? void 0 : U,
            onMouseDown: ei ? void 0 : k,
            onKeyDown: ei ? void 0 : x,
            onMouseEnter: ei ? void 0 : M,
            onMouseLeave: ei ? void 0 : P,
            disabled: G,
            style: { "--__button-min-width": es },
            ...Y,
            children: [
                Q &&
                    (0, r.jsx)(y, {
                        hasReducedMotion: J.reducedMotion.enabled,
                        buttonRef: q,
                        isLightMode: et,
                        disabled: G,
                    }),
                null == O
                    ? (0, r.jsx)("div", { className: m.buttonChildrenWrapper, children: er })
                    : (0, r.jsx)(S, { loading: O, size: j, children: er }),
            ],
        }),
    });
    return Q
        ? (0, r.jsx)("div", { className: a()(m.expressiveWrapper, { [m.fullWidth]: K, [m.hasText]: $ }), children: ea })
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
            className: m.buttonChildrenWrapper,
            children: [
                t,
                l &&
                    (0, r.jsx)("div", {
                        className: a()(m.spinnerWrapper, { [m.fadeIn]: n, [m.fadeOut]: !n }),
                        children: (0, r.jsx)(h.y, {
                            type: h.t.PULSING_ELLIPSIS,
                            className: a()(m.spinner, m[`spinner-${s}`]),
                            itemClassName: m.spinnerItem,
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
                    (0, r.jsx)(E.s, {
                        className: a()(m.expressiveRive, m.expressiveBackground),
                        eventTargetRef: n,
                        fit: "layout",
                        artboard: "BaseGlowRemapped",
                        ref: l,
                        withReducedMotion: "short-loop",
                    }),
                !t &&
                    !o &&
                    (0, r.jsx)(E.s, {
                        className: a()(m.expressiveRive, m.expressiveHoverContainer),
                        fit: "layout",
                        artboard: s ? "HoverLightmode" : "HoverDarkmode",
                    }),
                (0, r.jsx)("div", { className: a()(m.expressiveRive, m.expressiveFill) }),
            ],
        })
    );
}
function N(e) {
    let { icon: t, iconOpticalOffsetMargin: n, iconPosition: s, size: a, ref: o, disabled: l } = e,
        u = null,
        [d, c] = i.useState(!1);
    if (
        (i.useEffect(() => {
            if ("object" == typeof t && "sticker" === t.type && null != o.current) {
                let e = o.current,
                    t = () => {
                        l || c(!0);
                    },
                    n = () => {
                        l || c(!1);
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
        u = (0, r.jsx)(e, {
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
            u = (0, r.jsx)(e, { ...t.riveProps, eventTargetRef: o, style: { width: _.E[A[a]], height: _.E[A[a]] } });
        } else if ("sticker" === t.type) {
            let e = t.component;
            u = (0, r.jsx)(e, { size: _.E[I[a]], sticker: t.asset, isInteracting: d });
        }
    }
    return u;
}

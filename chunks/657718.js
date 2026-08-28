"use strict";
n.d(t, { S: () => S, a: () => O });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(366010),
    o = n(765178),
    d = n(844222),
    c = n(977067),
    u = n(259678),
    _ = n(27989),
    E = n(460890),
    A = n(570950),
    h = n(289873),
    I = n(834730),
    f = n(65406),
    p = n(70074);
let T = { xs: "text-xs/medium", sm: "text-sm/medium", md: "text-md/medium" },
    m = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    g = { xs: "sm", sm: "sm", md: "md" };
function S(e) {
    let {
            role: t = "button",
            variant: n = "primary",
            size: a = "md",
            text: _,
            icon: A,
            iconPosition: h = "start",
            iconOpticalOffsetMargin: m = 0,
            fullWidth: g = !1,
            focusProps: S,
            loading: R,
            loadingStartedLabel: L,
            loadingFinishedLabel: y,
            rounded: D = !1,
            type: v = "button",
            rel: b,
            onClick: M,
            onDoubleClick: P,
            onMouseEnter: U,
            onMouseLeave: w,
            onMouseUp: G,
            onMouseDown: x,
            onKeyDown: k,
            disabled: F,
            minWidth: V,
            className: B,
            style: H,
            buttonRef: j,
            ...W
        } = e,
        Y = (0, c.C)(),
        K = Y?.size ?? a,
        $ = Y?.fullWidth ?? g,
        z = null != _,
        Z = r.useRef(null),
        q = j ?? Z,
        X = (0, i.jsx)(O, { icon: A, iconOpticalOffsetMargin: m, iconPosition: h, size: K, ref: q, disabled: F }),
        Q = "expressive" === n,
        J = r.useContext(d.C),
        { theme: ee, i18n: et } = (0, E.G9)(),
        en = (0, l.q)(ee),
        ei = r.useRef(!1);
    r.useEffect(() => {
        !0 === R && ((ei.current = !0), o.O.announce(L ?? et.BUTTON_LOADING_STARTED_LABEL)),
            !1 === R && !0 === ei.current && (o.O.announce(y ?? et.BUTTON_LOADING_FINISHED_LABEL), (ei.current = !1));
    }, [R, L, y, et.BUTTON_LOADING_STARTED_LABEL, et.BUTTON_LOADING_FINISHED_LABEL]);
    let er = (0, i.jsxs)("div", {
            className: s()(f.buttonChildren, { [f.loading]: R }),
            children: [
                null != X && "start" === h && X,
                z && (0, i.jsx)(I.E, { tag: "span", variant: T[K], color: "none", lineClamp: 1, children: _ }),
                null != X && "end" === h && X,
            ],
        }),
        ea = F || R,
        es = V;
    null != es && "number" == typeof es && (es = `${es}px`);
    let el = (0, i.jsx)(u.vN, {
        ...S,
        children: (0, i.jsxs)("button", {
            "data-mana-component": "button",
            role: t,
            "aria-busy": R,
            className: s()(
                f.button,
                f[K],
                (function (e, t) {
                    switch (e) {
                        case "togglebutton":
                            return t ? p.GA : p.mQ;
                        case "togglebutton-critical":
                            return p.kD;
                        case "togglebutton-icon-only":
                            return p.e7;
                        default:
                            return f[e];
                    }
                })(n, z),
                { [f.hasText]: z, [f.fullWidth]: $, [f.rounded]: D },
            ),
            ref: q,
            rel: b,
            type: v,
            onClick: ea ? (e) => e.preventDefault() : M,
            onDoubleClick: ea ? (e) => e.preventDefault() : P,
            onMouseUp: ea ? void 0 : G,
            onMouseDown: ea ? void 0 : x,
            onKeyDown: ea ? void 0 : k,
            onMouseEnter: ea ? void 0 : U,
            onMouseLeave: ea ? void 0 : w,
            disabled: F,
            style: { "--__button-min-width": es },
            ...W,
            children: [
                Q &&
                    (0, i.jsx)(C, {
                        hasReducedMotion: J.reducedMotion.enabled,
                        buttonRef: q,
                        isLightMode: en,
                        disabled: F,
                    }),
                null == R
                    ? (0, i.jsx)("div", { className: f.buttonChildrenWrapper, children: er })
                    : (0, i.jsx)(N, { loading: R, size: K, children: er }),
            ],
        }),
    });
    return Q
        ? (0, i.jsx)("div", { className: s()(f.expressiveWrapper, { [f.fullWidth]: $, [f.hasText]: z }), children: el })
        : el;
}
function N(e) {
    let { children: t, loading: n, size: a } = e,
        l = r.useRef(null),
        [o, d] = r.useState(n);
    return (
        r.useEffect(
            () => (
                null != l.current && clearTimeout(l.current),
                n
                    ? d(!0)
                    : (l.current = setTimeout(() => {
                          d(!1);
                      }, 500)),
                () => {
                    null != l.current && clearTimeout(l.current);
                }
            ),
            [n],
        ),
        (0, i.jsxs)("div", {
            className: f.buttonChildrenWrapper,
            children: [
                t,
                o &&
                    (0, i.jsx)("div", {
                        className: s()(f.spinnerWrapper, { [f.fadeIn]: n, [f.fadeOut]: !n }),
                        children: (0, i.jsx)(h.y, {
                            type: h.t.PULSING_ELLIPSIS,
                            className: s()(f.spinner, f[`spinner-${a}`]),
                            itemClassName: f.spinnerItem,
                        }),
                    }),
            ],
        })
    );
}
function C(e) {
    let { hasReducedMotion: t, buttonRef: n, isLightMode: a, disabled: l } = e,
        o = r.useRef(null);
    return (
        r.useEffect(() => {
            if (!l && t) {
                let t = n.current;
                function e() {
                    o.current?.play();
                }
                function i() {
                    o.current?.pause();
                }
                return (
                    t?.addEventListener("mouseenter", e, !0),
                    t?.addEventListener("mouseleave", i, !0),
                    () => {
                        t?.removeEventListener("mouseenter", e, !0), t?.removeEventListener("mouseleave", i, !0);
                    }
                );
            }
        }, [t, n, l]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                !l &&
                    (0, i.jsx)(A.s, {
                        className: s()(f.expressiveRive, f.expressiveBackground),
                        eventTargetRef: n,
                        fit: "layout",
                        artboard: "BaseGlowRemapped",
                        ref: o,
                        withReducedMotion: "short-loop",
                    }),
                !t &&
                    !l &&
                    (0, i.jsx)(A.s, {
                        className: s()(f.expressiveRive, f.expressiveHoverContainer),
                        fit: "layout",
                        artboard: a ? "HoverLightmode" : "HoverDarkmode",
                    }),
                (0, i.jsx)("div", { className: s()(f.expressiveRive, f.expressiveFill) }),
            ],
        })
    );
}
function O(e) {
    let { icon: t, iconOpticalOffsetMargin: n, iconPosition: a, size: s, ref: l, disabled: o } = e,
        d = null,
        [c, u] = r.useState(!1);
    if (
        (r.useEffect(() => {
            if ("object" == typeof t && "sticker" === t.type && null != l.current) {
                let t = l.current;
                function e() {
                    o || u(!0);
                }
                function n() {
                    o || u(!1);
                }
                return (
                    t.addEventListener("mouseenter", e),
                    t.addEventListener("mouseleave", n),
                    () => {
                        t.removeEventListener("mouseenter", e), t.removeEventListener("mouseleave", n);
                    }
                );
            }
        }, [t, l, o]),
        "function" == typeof t || t?.type === "icon")
    ) {
        let e = "function" == typeof t ? t : t.asset;
        d = (0, i.jsx)(e, {
            color: "currentColor",
            style: (function () {
                if (0 === n) return {};
                switch (a) {
                    case "start":
                        return { marginLeft: n };
                    case "end":
                        return { marginRight: n };
                }
                return {};
            })(),
            size: m[s],
            className: f.icon,
        });
    } else if (null != t)
        switch (t.type) {
            case "rive": {
                let e = t.asset;
                d = (0, i.jsx)(e, {
                    ...t.riveProps,
                    eventTargetRef: l,
                    style: { width: _.E[m[s]], height: _.E[m[s]] },
                });
                break;
            }
            case "sticker": {
                let e = t.component;
                d = (0, i.jsx)(e, { size: _.E[g[s]], sticker: t.asset, isInteracting: c });
            }
        }
    return d;
}

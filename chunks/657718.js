"use strict";
n.d(t, { S: () => g, a: () => C });
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
    f = n(85277);
let p = { xs: "text-xs/medium", sm: "text-sm/medium", md: "text-md/medium" },
    T = { xs: "xxs", sm: "xs", md: "refresh_sm" },
    m = { xs: "sm", sm: "sm", md: "md" };
function g(e) {
    let {
            role: t = "button",
            variant: n = "primary",
            size: a = "md",
            text: _,
            icon: A,
            iconPosition: h = "start",
            iconOpticalOffsetMargin: T = 0,
            fullWidth: m = !1,
            focusProps: g,
            loading: O,
            loadingStartedLabel: R,
            loadingFinishedLabel: L,
            rounded: y = !1,
            type: D = "button",
            rel: v,
            onClick: b,
            onDoubleClick: M,
            onMouseEnter: P,
            onMouseLeave: U,
            onMouseUp: w,
            onMouseDown: G,
            onKeyDown: x,
            disabled: k,
            minWidth: F,
            className: V,
            style: B,
            buttonRef: H,
            ...j
        } = e,
        W = (0, c.C)(),
        Y = W?.size ?? a,
        K = W?.fullWidth ?? m,
        $ = null != _,
        z = r.useRef(null),
        Z = H ?? z,
        q = (0, i.jsx)(C, { icon: A, iconOpticalOffsetMargin: T, iconPosition: h, size: Y, ref: Z, disabled: k }),
        X = "expressive" === n,
        Q = r.useContext(d.C),
        { theme: J, i18n: ee } = (0, E.G9)(),
        et = (0, l.q)(J),
        en = r.useRef(!1);
    r.useEffect(() => {
        !0 === O && ((en.current = !0), o.O.announce(R ?? ee.BUTTON_LOADING_STARTED_LABEL)),
            !1 === O && !0 === en.current && (o.O.announce(L ?? ee.BUTTON_LOADING_FINISHED_LABEL), (en.current = !1));
    }, [O, R, L, ee.BUTTON_LOADING_STARTED_LABEL, ee.BUTTON_LOADING_FINISHED_LABEL]);
    let ei = (0, i.jsxs)("div", {
            className: s()(f.buttonChildren, { [f.loading]: O }),
            children: [
                null != q && "start" === h && q,
                $ && (0, i.jsx)(I.E, { tag: "span", variant: p[Y], color: "none", lineClamp: 1, children: _ }),
                null != q && "end" === h && q,
            ],
        }),
        er = k || O,
        ea = F;
    null != ea && "number" == typeof ea && (ea = `${ea}px`);
    let es = (0, i.jsx)(u.vN, {
        ...g,
        children: (0, i.jsxs)("button", {
            "data-mana-component": "button",
            role: t,
            "aria-busy": O,
            className: s()(f.button, f[Y], f[n], { [f.hasText]: $, [f.fullWidth]: K, [f.rounded]: y }),
            ref: Z,
            rel: v,
            type: D,
            onClick: er ? (e) => e.preventDefault() : b,
            onDoubleClick: er ? (e) => e.preventDefault() : M,
            onMouseUp: er ? void 0 : w,
            onMouseDown: er ? void 0 : G,
            onKeyDown: er ? void 0 : x,
            onMouseEnter: er ? void 0 : P,
            onMouseLeave: er ? void 0 : U,
            disabled: k,
            style: { "--__button-min-width": ea },
            ...j,
            children: [
                X &&
                    (0, i.jsx)(N, {
                        hasReducedMotion: Q.reducedMotion.enabled,
                        buttonRef: Z,
                        isLightMode: et,
                        disabled: k,
                    }),
                null == O
                    ? (0, i.jsx)("div", { className: f.buttonChildrenWrapper, children: ei })
                    : (0, i.jsx)(S, { loading: O, size: Y, children: ei }),
            ],
        }),
    });
    return X
        ? (0, i.jsx)("div", { className: s()(f.expressiveWrapper, { [f.fullWidth]: K, [f.hasText]: $ }), children: es })
        : es;
}
function S(e) {
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
function N(e) {
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
function C(e) {
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
            size: T[s],
            className: f.icon,
        });
    } else if (null != t)
        switch (t.type) {
            case "rive": {
                let e = t.asset;
                d = (0, i.jsx)(e, {
                    ...t.riveProps,
                    eventTargetRef: l,
                    style: { width: _.E[T[s]], height: _.E[T[s]] },
                });
                break;
            }
            case "sticker": {
                let e = t.component;
                d = (0, i.jsx)(e, { size: _.E[m[s]], sticker: t.asset, isInteracting: c });
            }
        }
    return d;
}

n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(681715),
    c = n(755721),
    u = n(481060),
    d = n(451478),
    f = n(648613),
    p = n(433390),
    _ = n(474936),
    m = n(568247);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = function (e) {
    var {
            subscriptionTier: t,
            onClick: n,
            size: a,
            className: h,
            textOptions: E,
            iconClassName: O,
            postSuccessGuild: v,
            onSubscribeModalClose: S,
            premiumModalAnalyticsLocation: I,
            showIcon: T = !0,
            disableShine: C,
            applicationId: A,
            shinyButtonClassName: N,
            showGradient: P = !1,
            confirmationFooter: R,
            color: w,
            iconColor: D = "currentColor",
        } = e,
        x = y(e, [
            "subscriptionTier",
            "onClick",
            "size",
            "className",
            "textOptions",
            "iconClassName",
            "postSuccessGuild",
            "onSubscribeModalClose",
            "premiumModalAnalyticsLocation",
            "showIcon",
            "disableShine",
            "applicationId",
            "shinyButtonClassName",
            "showGradient",
            "confirmationFooter",
            "color",
            "iconColor",
        ]);
    let L = (0, s.e7)([d.Z], () => d.Z.isFocused()),
        j = (0, p.Z)({
            subscriptionTier: t,
            buttonTextOverride: null == E ? void 0 : E.textOverride,
            defaultTextOverride: null == E ? void 0 : E.subscribeText,
        }),
        M = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: v,
            onSubscribeModalClose: S,
            premiumModalAnalyticsLocation: I,
            applicationId: A,
            confirmationFooter: R,
        },
        k = null != w ? w : t === _.Si.TIER_1 ? c.zx.Colors.PRIMARY : c.zx.Colors.GREEN,
        U = (0, r.jsxs)(
            u.gtL,
            b(
                g(
                    {
                        "data-migration-pending": !0,
                        disabled: j.disabled,
                        innerClassName: m.premiumSubscribeButton,
                        color: k,
                        size: a,
                        className: N,
                        wrapperClassName: o()(
                            {
                                [m.tier2Gradient]: P && t === _.Si.TIER_2,
                                [m.tier1Gradient]: P && t === _.Si.TIER_1,
                            },
                            h,
                        ),
                        buttonShineClassName:
                            "buttonShineClassName" in x
                                ? x.buttonShineClassName
                                : k === c.Tt.BRAND_INVERTED
                                  ? m.brandShine
                                  : void 0,
                        pauseAnimation: !L || C,
                    },
                    x,
                ),
                {
                    children: [
                        T &&
                            (0, r.jsx)(u.SrA, {
                                size: "md",
                                color: D,
                                className: o()(m.premiumIcon, O),
                            }),
                        (0, r.jsx)("span", {
                            className: o()(m.buttonText, null == E ? void 0 : E.textClassName),
                            children: j.buttonText,
                        }),
                    ],
                },
            ),
        );
    return (0, r.jsx)(
        f.Z,
        b(g({}, M), {
            children: (e) => {
                let { onClick: t } = e,
                    n = i.cloneElement(U, { onClick: t });
                return null != j.buttonTooltipText
                    ? (0, r.jsx)(l.u, {
                          text: j.buttonTooltipText,
                          children: n,
                      })
                    : n;
            },
        }),
    );
};

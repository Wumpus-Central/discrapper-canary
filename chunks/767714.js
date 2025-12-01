n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(451478),
    u = n(648613),
    d = n(433390),
    f = n(474936),
    p = n(402623);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = function (e) {
    var {
            subscriptionTier: t,
            onClick: n,
            size: i,
            className: _,
            textOptions: h,
            iconClassName: b,
            postSuccessGuild: y,
            onSubscribeModalClose: O,
            premiumModalAnalyticsLocation: v,
            showIcon: S = !0,
            disableShine: I,
            applicationId: T,
            shinyButtonClassName: A,
            showGradient: C = !1,
            confirmationFooter: N,
            color: P,
            iconColor: R = "currentColor",
        } = e,
        w = E(e, [
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
    let D = (0, o.e7)([c.Z], () => c.Z.isFocused()),
        x = (0, d.Z)({
            subscriptionTier: t,
            buttonTextOverride: null == h ? void 0 : h.textOverride,
            defaultTextOverride: null == h ? void 0 : h.subscribeText,
        }),
        L = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: y,
            onSubscribeModalClose: O,
            premiumModalAnalyticsLocation: v,
            applicationId: T,
            confirmationFooter: N,
        };
    function j(e) {
        let n = null != P ? P : t === f.Si.TIER_1 ? s.zx.Colors.PRIMARY : s.zx.Colors.GREEN;
        return (0, r.jsx)(
            u.Z,
            g(m({}, L), {
                children: (o) => {
                    let { onClick: c } = o;
                    return (0, r.jsxs)(
                        l.gtL,
                        g(
                            m(
                                {
                                    "data-migration-pending": !0,
                                    disabled: x.disabled,
                                    onClick: c,
                                    innerClassName: p.premiumSubscribeButton,
                                    color: n,
                                    size: i,
                                    className: A,
                                    wrapperClassName: a()(
                                        {
                                            [p.tier2Gradient]: C && t === f.Si.TIER_2,
                                            [p.tier1Gradient]: C && t === f.Si.TIER_1,
                                        },
                                        _,
                                    ),
                                    buttonShineClassName:
                                        "buttonShineClassName" in w
                                            ? w.buttonShineClassName
                                            : n === s.Tt.BRAND_INVERTED
                                              ? p.brandShine
                                              : void 0,
                                    pauseAnimation: !D || I,
                                },
                                w,
                                e,
                            ),
                            {
                                children: [
                                    S &&
                                        (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: R,
                                            className: a()(p.premiumIcon, b),
                                        }),
                                    (0, r.jsx)("span", {
                                        className: a()(p.buttonText, null == h ? void 0 : h.textClassName),
                                        children: x.buttonText,
                                    }),
                                ],
                            },
                        ),
                    );
                },
            }),
        );
    }
    return null != x.buttonTooltipText
        ? (0, r.jsx)(l.aML, {
              "data-migration-pending": !0,
              text: x.buttonTooltipText,
              children: j,
          })
        : j();
};

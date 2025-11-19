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
    _ = n(402623);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
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
            className: p,
            textOptions: m,
            iconClassName: b,
            postSuccessGuild: y,
            onSubscribeModalClose: O,
            premiumModalAnalyticsLocation: v,
            showIcon: I = !0,
            disableShine: T,
            applicationId: S,
            shinyButtonClassName: A,
            showGradient: C = !1,
            confirmationFooter: N,
            color: R,
            iconColor: P = "currentColor",
        } = e,
        D = E(e, [
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
    let w = (0, o.e7)([c.Z], () => c.Z.isFocused()),
        L = (0, d.Z)({
            subscriptionTier: t,
            buttonTextOverride: null == m ? void 0 : m.textOverride,
            defaultTextOverride: null == m ? void 0 : m.subscribeText,
        }),
        x = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: y,
            onSubscribeModalClose: O,
            premiumModalAnalyticsLocation: v,
            applicationId: S,
            confirmationFooter: N,
        };
    function M(e) {
        let n = null != R ? R : t === f.Si.TIER_1 ? s.zx.Colors.PRIMARY : s.zx.Colors.GREEN;
        return (0, r.jsx)(
            u.Z,
            g(h({}, x), {
                children: (o) => {
                    let { onClick: c } = o;
                    return (0, r.jsxs)(
                        l.gtL,
                        g(
                            h(
                                {
                                    "data-migration-pending": !0,
                                    disabled: L.disabled,
                                    onClick: c,
                                    innerClassName: _.premiumSubscribeButton,
                                    color: n,
                                    size: i,
                                    className: A,
                                    wrapperClassName: a()(
                                        {
                                            [_.tier2Gradient]: C && t === f.Si.TIER_2,
                                            [_.tier1Gradient]: C && t === f.Si.TIER_1,
                                        },
                                        p,
                                    ),
                                    buttonShineClassName:
                                        "buttonShineClassName" in D
                                            ? D.buttonShineClassName
                                            : n === s.Tt.BRAND_INVERTED
                                              ? _.brandShine
                                              : void 0,
                                    pauseAnimation: !w || T,
                                },
                                D,
                                e,
                            ),
                            {
                                children: [
                                    I &&
                                        (0, r.jsx)(l.SrA, {
                                            size: "md",
                                            color: P,
                                            className: a()(_.premiumIcon, b),
                                        }),
                                    (0, r.jsx)("span", {
                                        className: a()(_.buttonText, null == m ? void 0 : m.textClassName),
                                        children: L.buttonText,
                                    }),
                                ],
                            },
                        ),
                    );
                },
            }),
        );
    }
    return null != L.buttonTooltipText
        ? (0, r.jsx)(l.aML, {
              "data-migration-pending": !0,
              text: L.buttonTooltipText,
              children: M,
          })
        : M();
};

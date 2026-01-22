n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(435371),
    c = n(421380),
    u = n(397927),
    d = n(531685),
    f = n(783420),
    p = n(245383),
    _ = n(788868),
    h = n(328504);
function m(e, t, n) {
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
                m(e, t, n[t]);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = O(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let A = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            size: a,
            className: m,
            textOptions: E,
            iconClassName: O,
            postSuccessGuild: A,
            onSubscribeModalClose: v,
            premiumModalAnalyticsLocation: S,
            showIcon: I = !0,
            disableShine: T,
            applicationId: C,
            shinyButtonClassName: N,
            showGradient: R = !1,
            confirmationFooter: w,
            color: P,
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
        ]),
        L = (0, o.bG)([d.A], () => d.A.isFocused()),
        j = (0, p.A)({
            subscriptionTier: t,
            buttonTextOverride: null == E ? void 0 : E.textOverride,
            defaultTextOverride: null == E ? void 0 : E.subscribeText,
        }),
        M = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: A,
            onSubscribeModalClose: v,
            premiumModalAnalyticsLocation: S,
            applicationId: C,
            confirmationFooter: w,
        },
        k = null != P ? P : t === _.pe.TIER_1 ? c.$n.Colors.PRIMARY : c.$n.Colors.GREEN,
        U = (0, r.jsxs)(
            u.wLn,
            b(
                g(
                    {
                        "data-migration-pending": !0,
                        disabled: j.disabled,
                        innerClassName: h.UO,
                        color: k,
                        size: a,
                        className: N,
                        wrapperClassName: s()(
                            {
                                [h.PJ]: R && t === _.pe.TIER_2,
                                [h.Up]: R && t === _.pe.TIER_1,
                            },
                            m,
                        ),
                        buttonShineClassName:
                            "buttonShineClassName" in x
                                ? x.buttonShineClassName
                                : k === c.XD.BRAND_INVERTED
                                  ? h.nz
                                  : void 0,
                        pauseAnimation: !L || T,
                    },
                    x,
                ),
                {
                    children: [
                        I &&
                            (0, r.jsx)(u.tvc, {
                                size: "md",
                                color: D,
                                className: s()(h.PC, O),
                            }),
                        (0, r.jsx)("span", {
                            className: s()(h._d, null == E ? void 0 : E.textClassName),
                            children: j.buttonText,
                        }),
                    ],
                },
            ),
        );
    return (0, r.jsx)(
        f.A,
        b(g({}, M), {
            children: (e) => {
                let { onClick: t } = e,
                    n = i.cloneElement(U, { onClick: t });
                return null != j.buttonTooltipText
                    ? (0, r.jsx)(l.m_, {
                          text: j.buttonTooltipText,
                          children: n,
                      })
                    : n;
            },
        }),
    );
};

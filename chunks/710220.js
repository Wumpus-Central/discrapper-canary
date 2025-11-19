n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(518950),
    o = n(268685),
    s = n(388032),
    l = n(215062);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = (e) => (null != e.globalName ? e.globalName : e.username);
function f(e) {
    let { referrer: t, enablePremiumBrandRefresh: n } = e,
        { avatarSrc: c, eventHandlers: f } = (0, a.Z)({
            userId: null == t ? void 0 : t.id,
            size: n ? o.EF.SIZE_24 : o.EF.SIZE_32,
            animateOnHover: !0,
        });
    return (0, r.jsx)("div", {
        className: l.attributionBannerContainerRebranded,
        children: (0, r.jsxs)("div", {
            className: l.attributionBannerContentApplicationHomeRebranded,
            children: [
                (0, r.jsx)("div", {
                    className: l.iconContainerApplicationHome,
                    children: (0, r.jsx)(
                        i.qEK,
                        u(
                            {
                                className: l.icon,
                                src: c,
                                "aria-label": t.username,
                                size: o.EF.SIZE_32,
                            },
                            f,
                        ),
                    ),
                }),
                (0, r.jsx)(i.Heading, {
                    variant: "heading-sm/normal",
                    className: l.textContainerRebranded,
                    color: "header-primary",
                    children: s.intl.format(s.t.IqxblS, { username: d(t) }),
                }),
            ],
        }),
    });
}

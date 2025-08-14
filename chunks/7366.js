n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(667202),
    o = n(648613),
    a = n(38273),
    s = n(717975),
    l = n(474936),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = (e) => {
    var { gradientColor: t, title: n, subtitle: u, onClose: f, onSecondaryClick: h, videoSrc: m, loopAt: g } = e,
        E = p(e, ["gradientColor", "title", "subtitle", "onClose", "onSecondaryClick", "videoSrc", "loopAt"]);
    let { subscribeButtonProps: b, subscriptionTier: y } = (0, a.G)({
            subscriptionTier: l.Si.TIER_2,
            defaultTextOverride: c.intl.string(c.t.pj0XBA),
        }),
        O = (0, s.Z)(l.Si.TIER_2);
    return (0, r.jsx)(o.Z, {
        subscriptionTier: y,
        children: (e) => {
            let { onClick: o } = e;
            return (0, r.jsx)(
                i.I,
                d(
                    {
                        size: "md",
                        onClose: async () => {
                            await f();
                        },
                        gradientColor: t,
                        graphic: {
                            type: "video",
                            src: m,
                            loop: !0,
                            loopAt: g,
                        },
                        title: n,
                        subtitle: u,
                        actions: [
                            {
                                variant: "secondary",
                                text: c.intl.string(c.t.ZnqyZ2),
                                onClick: h,
                            },
                            _(d({}, b), { onClick: o }),
                        ],
                    },
                    null != O && { badge: { text: O } },
                    E,
                ),
            );
        },
    });
};

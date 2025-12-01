n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(287734),
    s = n(699263),
    l = n(359110),
    c = n(19780),
    u = n(626135),
    d = n(981631),
    f = n(388032);
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
function _(e) {
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
function h(e, t) {
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
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    var { variant: t = "active", size: n = "sm", hangStatusChannel: p, onAction: m, userId: E } = e,
        b = g(e, ["variant", "size", "hangStatusChannel", "onAction", "userId"]);
    let y = (0, i.e7)([c.Z], () => c.Z.getChannelId() === p.id),
        O = () => {
            null == m || m(),
                o.default.selectVoiceChannel(p.id),
                (0, l.Kh)(p.id),
                u.default.track(
                    d.rMx.HANG_STATUS_CTA_CLICKED,
                    h(_({ source: "UserProfilePopout" }, (0, s.Z)(p.id)), {
                        other_user_id: E,
                        cta_type: y ? "open" : "join",
                    }),
                );
        };
    return (0, r.jsx)(
        a.Button,
        _(
            {
                text: y ? f.intl.string(f.t.BXxdl7) : f.intl.string(f.t["9C444m"]),
                onClick: O,
                variant: t,
                size: n,
                fullWidth: !0,
            },
            b,
        ),
    );
}

n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(287734),
    s = n(19780),
    l = n(626135),
    c = n(981631),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function h(e) {
    var { variant: t = "active", size: n = "sm", hangStatusChannel: d, onAction: p } = e,
        h = _(e, ["variant", "size", "hangStatusChannel", "onAction"]);
    let m = (0, i.e7)([s.Z], () => s.Z.getChannelId() === d.id),
        g = () => {
            null == p || p(),
                o.default.selectVoiceChannel(d.id),
                l.default.track(c.rMx.HANG_STATUS_CTA_CLICKED, {
                    source: "UserProfilePopout",
                    guild_id: d.guild_id,
                    channel_id: d.id,
                });
        };
    return (0, r.jsx)(
        a.zxk,
        f(
            {
                disabled: m,
                text: u.intl.string(u.t["9C444u"]),
                onClick: g,
                variant: t,
                size: n,
                fullWidth: !0,
            },
            h,
        ),
    );
}

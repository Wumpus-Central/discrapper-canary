n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(40851),
    a = n(340541),
    s = n(493754),
    l = n(496675),
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
function _(e, t, n, d) {
    let _ = {
            streamUserId: n,
            channel: e,
            applicationId: d,
            appContext: (0, o.bp)(),
        },
        p = () => {
            null != t && e.type === c.d4z.GUILD_VOICE && (0, s.W)(f({ guild: t }, _));
        },
        { entrypoints: h } = (0, a._k)({ location: "more_settings_invite_item" }),
        m = h ? i.oLu : i.ejJ;
    if (null != d)
        return (0, r.jsx)(i.sNh, {
            id: "invite-to-stream",
            label: u.intl.string(u.t["OzOM/v"]),
            action: p,
            icon: i.ejJ,
        });
    if (null == t || null == e || !l.Z.can(c.Plq.CREATE_INSTANT_INVITE, e)) return null;
    let g = h ? u.intl.string(u.t["EE+P0N"]) : u.intl.string(u.t["6Qgren"]);
    return (0, r.jsx)(i.sNh, {
        id: "invite-friends",
        label: g,
        action: p,
        icon: m,
    });
}

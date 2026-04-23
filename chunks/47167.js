"use strict";
n.d(t, { Ay: () => g, Eq: () => m, Jo: () => u, LG: () => f, e5: () => E, ks: () => c, m1: () => h });
var i = n(17928),
    r = n(736056),
    s = n(994500),
    a = n(287809),
    o = n(403362),
    l = n(427262),
    d = n(652215),
    _ = n(985018);
function u(e, t, n) {
    let i = e
        .map(t.getUser)
        .filter(o.Vq)
        .map((e) => n.getNickname(e.id) ?? l.Ay.getName(e));
    return i.length > 0
        ? i.join(", ")
        : _.intl.formatToPlainString(_.t["9Uk8PF"], { name: l.Ay.getName(t.getCurrentUser()) });
}
function c(e, t, n) {
    return u(e.recipients, t, n);
}
function E(e) {
    return (0, i.bG)([a.default, s.A], () => (null != e && e.isMultiUserDM() ? c(e, a.default, s.A) : null));
}
function h(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = e.name,
        a = (e) => (i ? `@${e}` : e);
    if (e.isObfuscated()) return _.intl.string(_.t["/YzI63"]);
    switch (e.type) {
        case d.rbe.DM:
            if ("" !== s) return a(s);
            let [u] = e.recipients.map(t.getUser).filter(o.Vq);
            if (null == u) return "???";
            if (u.isProvisional && null != u.globalName) return u.globalName;
            return a(n.getNickname(u.id) ?? l.Ay.getName(u) ?? "???");
        case d.rbe.GROUP_DM:
            if ("" !== s) return s;
            return c(e, t, n);
        case d.rbe.GUILD_ANNOUNCEMENT:
        case d.rbe.GUILD_TEXT:
        case d.rbe.GUILD_FORUM:
        case d.rbe.GUILD_MEDIA:
            if (i) return `#${s}`;
            return s;
        case d.rbe.PUBLIC_THREAD:
        case d.rbe.PRIVATE_THREAD:
        case d.rbe.ANNOUNCEMENT_THREAD:
        case d.rbe.GUILD_VOICE:
        case d.rbe.GUILD_STAGE_VOICE:
        case d.rbe.GUILD_CATEGORY:
            if (r) return `#"${m(s)}"`;
            if (i && e.isThread()) return `"${s}"`;
            return s;
        default:
            return s;
    }
}
function m(e) {
    return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function f(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, i.bG)([a.default, r.A, s.A], () => (null == e ? null : h(e, a.default, s.A, t)));
}

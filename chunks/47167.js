"use strict";
n.d(t, { Ay: () => m, Eq: () => p, Jo: () => d, LG: () => E, e5: () => h, ks: () => _, m1: () => f });
var i = n(17928),
    r = n(736056),
    s = n(994500),
    a = n(287809),
    o = n(403362),
    l = n(427262),
    u = n(652215),
    c = n(375708);
function d(e, t, n) {
    let i = e
        .map(t.getUser)
        .filter(o.Vq)
        .map((e) => n.getNickname(e.id) ?? l.Ay.getName(e));
    return i.length > 0
        ? i.join(", ")
        : c.intl.formatToPlainString(c.t["9Uk8PF"], { name: l.Ay.getName(t.getCurrentUser()) });
}
function _(e, t, n) {
    return d(e.recipients, t, n);
}
function h(e) {
    return (0, i.bG)([a.default, s.A], () => (null != e && e.isMultiUserDM() ? _(e, a.default, s.A) : null));
}
function f(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = e.name,
        a = (e) => (i ? `@${e}` : e);
    if (e.isObfuscated()) return c.intl.string(c.t["/YzI63"]);
    switch (e.type) {
        case u.rbe.DM:
            if ("" !== s) return a(s);
            let [d] = e.recipients.map(t.getUser).filter(o.Vq);
            if (null == d) return "???";
            if (d.isProvisional && null != d.globalName) return d.globalName;
            return a(n.getNickname(d.id) ?? l.Ay.getName(d) ?? "???");
        case u.rbe.GROUP_DM:
            if ("" !== s) return s;
            return _(e, t, n);
        case u.rbe.GUILD_ANNOUNCEMENT:
        case u.rbe.GUILD_TEXT:
        case u.rbe.GUILD_FORUM:
        case u.rbe.GUILD_MEDIA:
            if (i) return `#${s}`;
            return s;
        case u.rbe.PUBLIC_THREAD:
        case u.rbe.PRIVATE_THREAD:
        case u.rbe.ANNOUNCEMENT_THREAD:
        case u.rbe.GUILD_VOICE:
        case u.rbe.GUILD_STAGE_VOICE:
        case u.rbe.GUILD_CATEGORY:
            if (r) return `#"${p(s)}"`;
            if (i && e.isThread()) return `"${s}"`;
            return s;
        default:
            return s;
    }
}
function p(e) {
    return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function E(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, i.bG)([a.default, r.A, s.A], () => (null == e ? null : f(e, a.default, s.A, t)));
}

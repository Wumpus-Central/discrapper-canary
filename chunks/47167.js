"use strict";
n.d(t, { Ay: () => g, Eq: () => h, Jo: () => d, LG: () => m, e5: () => f, ks: () => _, m1: () => p });
var r = n(311907),
    i = n(49463),
    a = n(994500),
    s = n(287809),
    o = n(403362),
    l = n(427262),
    u = n(652215),
    c = n(985018);
function d(e, t, n) {
    let r = e
        .map(t.getUser)
        .filter(o.Vq)
        .map((e) => n.getNickname(e.id) ?? l.Ay.getName(e));
    return r.length > 0
        ? r.join(", ")
        : c.intl.formatToPlainString(c.t["9Uk8PF"], { name: l.Ay.getName(t.getCurrentUser()) });
}
function _(e, t, n) {
    return d(e.recipients, t, n);
}
function f(e) {
    return (0, r.bG)([s.default, a.A], () => (null != e && e.isMultiUserDM() ? _(e, s.default, a.A) : null));
}
function p(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (e.isObfuscated()) return c.intl.string(c.t["/YzI63"]);
    switch (e.type) {
        case u.rbe.DM:
            let [a] = e.recipients.map(t.getUser).filter(o.Vq);
            if (null == a) return "???";
            if (a.isProvisional && null != a.globalName) return a.globalName;
            let s = n.getNickname(a.id) ?? l.Ay.getName(a) ?? "???";
            return r ? `@${s}` : s;
        case u.rbe.GROUP_DM:
            if ("" !== e.name) return e.name;
            return _(e, t, n);
        case u.rbe.GUILD_ANNOUNCEMENT:
        case u.rbe.GUILD_TEXT:
        case u.rbe.GUILD_FORUM:
        case u.rbe.GUILD_MEDIA:
            if (r) return `#${e.name}`;
            return e.name;
        case u.rbe.PUBLIC_THREAD:
        case u.rbe.PRIVATE_THREAD:
        case u.rbe.ANNOUNCEMENT_THREAD:
        case u.rbe.GUILD_VOICE:
        case u.rbe.GUILD_STAGE_VOICE:
        case u.rbe.GUILD_CATEGORY:
            if (i) return `#"${h(e.name)}"`;
            if (r && e.isThread()) return `"${e.name}"`;
            return e.name;
        default:
            return e.name;
    }
}
function h(e) {
    return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function m(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, r.bG)([s.default, i.A, a.A], () => (null == e ? null : p(e, s.default, a.A, t)));
}

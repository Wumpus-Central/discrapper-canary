"use strict";
n.d(t, { Ay: () => E, Eq: () => h, Jo: () => d, LG: () => m, e5: () => f, ks: () => _, m1: () => p });
var r = n(311907),
    i = n(49463),
    s = n(994500),
    a = n(287809),
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
    return (0, r.bG)([a.default, s.A], () => (null != e && e.isMultiUserDM() ? _(e, a.default, s.A) : null));
}
function p(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = e.name,
        a = (e) => (r ? `@${e}` : e);
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
            if (r) return `#${s}`;
            return s;
        case u.rbe.PUBLIC_THREAD:
        case u.rbe.PRIVATE_THREAD:
        case u.rbe.ANNOUNCEMENT_THREAD:
        case u.rbe.GUILD_VOICE:
        case u.rbe.GUILD_STAGE_VOICE:
        case u.rbe.GUILD_CATEGORY:
            if (i) return `#"${h(s)}"`;
            if (r && e.isThread()) return `"${s}"`;
            return s;
        default:
            return s;
    }
}
function h(e) {
    return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function m(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, r.bG)([a.default, i.A, s.A], () => (null == e ? null : p(e, a.default, s.A, t)));
}

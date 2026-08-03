"use strict";
n.d(t, { Ay: () => p, Bi: () => A, Eq: () => I, Jo: () => u, LG: () => f, e5: () => E, ks: () => _, m1: () => h });
var i = n(17928),
    r = n(736056),
    a = n(994500),
    s = n(287809),
    l = n(403362),
    o = n(427262),
    d = n(652215),
    c = n(375708);
function u(e, t, n) {
    let i = e
        .map(t.getUser)
        .filter(l.Vq)
        .map((e) => n.getNickname(e.id) ?? o.Ay.getName(e));
    return i.length > 0
        ? i.join(", ")
        : c.intl.formatToPlainString(c.t["9Uk8PF"], { name: o.Ay.getName(t.getCurrentUser()) });
}
function _(e, t, n) {
    return u(e.recipients, t, n);
}
function E(e) {
    return (0, i.bG)([s.default, a.A], () => (null != e && e.isMultiUserDM() ? _(e, s.default, a.A) : null));
}
function A(e) {
    if (e.isObfuscated() || !e.isMultiUserDM()) return;
    let t = e.name;
    if ("" !== t) return t;
}
function h(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = e.name;
    if (e.isObfuscated()) return c.intl.string(c.t["/YzI63"]);
    switch (e.type) {
        case d.rbe.DM:
            var s;
            if ("" !== a) return i ? `@${a}` : a;
            let [u] = e.recipients.map(t.getUser).filter(l.Vq);
            if (null == u) return "???";
            if (u.isProvisional && null != u.globalName) return u.globalName;
            return (s = n.getNickname(u.id) ?? o.Ay.getName(u) ?? "???"), i ? `@${s}` : s;
        case d.rbe.GROUP_DM:
            if ("" !== a) return a;
            return _(e, t, n);
        case d.rbe.GUILD_ANNOUNCEMENT:
        case d.rbe.GUILD_TEXT:
        case d.rbe.GUILD_FORUM:
        case d.rbe.GUILD_MEDIA:
            if (i) return `#${a}`;
            return a;
        case d.rbe.GUILD_CATEGORY:
            if (e.id === d._Ee) return c.intl.string(c.t.GSfOoo);
            if (r) return `#"${I(a)}"`;
            return a;
        case d.rbe.PUBLIC_THREAD:
        case d.rbe.PRIVATE_THREAD:
        case d.rbe.ANNOUNCEMENT_THREAD:
        case d.rbe.GUILD_VOICE:
        case d.rbe.GUILD_STAGE_VOICE:
            if (r) return `#"${I(a)}"`;
            if (i && e.isThread()) return `"${a}"`;
            return a;
        default:
            return a;
    }
}
function I(e) {
    return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function f(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, i.bG)([s.default, r.A, a.A], () => (null == e ? null : h(e, s.default, a.A, t)));
}

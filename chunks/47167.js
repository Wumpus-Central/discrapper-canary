var i = n(855986),
    r = n(343446),
    a = n(994500),
    s = n(287809),
    l = n(403362),
    o = n(427262),
    d = n(652215),
    c = n(792996);
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
function E(e, t, n) {
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
            return ((s = n.getNickname(u.id) ?? o.Ay.getName(u) ?? "???"), i ? `@${s}` : s);
        case d.rbe.GROUP_DM:
            if ("" !== a) return a;
            return _(e, t, n);
        case d.rbe.GUILD_ANNOUNCEMENT:
        case d.rbe.GUILD_TEXT:
        case d.rbe.GUILD_FORUM:
        case d.rbe.GUILD_MEDIA:
        case d.rbe.GUILD_APP:
            if (i) return `#${a}`;
            return a;
        case d.rbe.GUILD_CATEGORY:
            if ("null" === e.id) return c.intl.string(c.t.GSfOoo);
            if (r) return `#"${A(a)}"`;
            return a;
        case d.rbe.PUBLIC_THREAD:
        case d.rbe.PRIVATE_THREAD:
        case d.rbe.ANNOUNCEMENT_THREAD:
        case d.rbe.MEDIA_THREAD:
        case d.rbe.GUILD_VOICE:
        case d.rbe.GUILD_STAGE_VOICE:
            if (r) return `#"${A(a)}"`;
            if (i && e.isThread()) return `"${a}"`;
            return a;
        case d.rbe.GUILD_STORE:
        case d.rbe.GUILD_DIRECTORY:
        case d.rbe.GUILD_SPACE:
        case d.rbe.UNKNOWN:
        default:
            return a;
    }
}
function A(e) {
    return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (0, i.bG)([s.default, r.A, a.A], () => (null == e ? null : E(e, s.default, a.A, t)));
        },
        Bi: function (e) {
            if (e.isObfuscated() || !e.isMultiUserDM()) return;
            let t = e.name;
            if ("" !== t) return t;
        },
        Eq: A,
        Jo: u,
        LG: function (e) {
            return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
        },
        e5: function (e) {
            return (0, i.bG)([s.default, a.A], () => (null != e && e.isMultiUserDM() ? _(e, s.default, a.A) : null));
        },
        ks: _,
        m1: E,
    },
);

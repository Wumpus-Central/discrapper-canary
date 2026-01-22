n.d(t, {
    Ay: () => g,
    Eq: () => h,
    Jo: () => d,
    LG: () => m,
    e5: () => p,
    ks: () => f,
    m1: () => _,
}),
    n(896048),
    n(747238),
    n(812715);
var r = n(311907),
    i = n(49463),
    a = n(994500),
    s = n(287809),
    o = n(403362),
    l = n(427262),
    c = n(652215),
    u = n(985018);

function d(e, t, n) {
    let r = e
        .map(t.getUser)
        .filter(o.Vq)
        .map((e) => {
            var t;
            return null != (t = n.getNickname(e.id)) ? t : l.Ay.getName(e);
        });
    return r.length > 0
        ? r.join(", ")
        : u.intl.formatToPlainString(u.t["9Uk8PF"], {
              name: l.Ay.getName(t.getCurrentUser()),
          });
}

function f(e, t, n) {
    return d(e.recipients, t, n);
}

function p(e) {
    return (0, r.bG)([s.default, a.A], () => (null != e && e.isMultiUserDM() ? f(e, s.default, a.A) : null));
}

function _(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    if (e.isObfuscated()) return u.intl.string(u.t["/YzI63"]);
    switch (e.type) {
        case c.rbe.DM:
            var a;
            let [s] = e.recipients.map(t.getUser).filter(o.Vq);
            if (null == s) return "???";
            if (s.isProvisional && null != s.globalName) return s.globalName;
            let d = n.getNickname(s.id),
                p = null != (a = null != d ? d : l.Ay.getName(s)) ? a : "???";
            return r ? "@".concat(p) : p;
        case c.rbe.GROUP_DM:
            if ("" !== e.name) return e.name;
            return f(e, t, n);
        case c.rbe.GUILD_ANNOUNCEMENT:
        case c.rbe.GUILD_TEXT:
        case c.rbe.GUILD_FORUM:
        case c.rbe.GUILD_MEDIA:
            if (r) return "#".concat(e.name);
            return e.name;
        case c.rbe.PUBLIC_THREAD:
        case c.rbe.PRIVATE_THREAD:
        case c.rbe.ANNOUNCEMENT_THREAD:
        case c.rbe.GUILD_VOICE:
        case c.rbe.GUILD_STAGE_VOICE:
        case c.rbe.GUILD_CATEGORY:
            if (i) return '#"'.concat(h(e.name), '"');
            if (r && e.isThread()) return '"'.concat(e.name, '"');
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
    return (0, r.bG)([s.default, i.A, a.A], () => (null == e ? null : _(e, s.default, a.A, t)));
}

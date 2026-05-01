"use strict";
n.d(t, { DO: () => h, Mt: () => _, c: () => d, l7: () => f }), n(735438);
var i = n(763827),
    r = n(562153),
    s = n(488926),
    a = n(446600),
    o = n(516607),
    l = n(652215),
    u = n(719366),
    c = n(375708);
function d(e, t, n, i) {
    let s = t[0],
        a = r.Ay.getName(e, n, s),
        o = i ?? t.length;
    return 1 === o && null != s
        ? a
        : null == s
          ? c.intl.formatToPlainString(c.t.chmM9N, { count: o })
          : c.intl.formatToPlainString(c.t.GhkJ21, { name: a, count: o - 1 });
}
function _(e, t) {
    switch (e) {
        case u.T6.OWNER:
            return c.intl.string(c.t.icuNBM);
        case u.T6.ADMINISTRATOR:
            return c.intl.string(c.t.eTmN5a);
        case u.T6.MEMBER:
        case u.T6.ROLE:
            return t ? c.intl.string(c.t.Hw3XWx) : c.intl.string(c.t.YieyPi);
        case u.T6.EMPTY_STATE:
    }
    return null;
}
function f(e) {
    let t = a.A.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: t?.topic,
        media_session_id: i.A.getMediaSessionId(),
        request_to_speak_state: s.MJ(l.xBc.REQUEST_TO_SPEAK, e) ? o.kw.EVERYONE : o.kw.NO_ONE,
        stage_instance_id: t?.id,
    };
}
function h(e, t) {
    let n = (t) => r.Ay.getName(e.getGuildId(), e.id, t.user),
        i = new Set(),
        s = t.filter((e) => {
            let t = e.user.id;
            return !i.has(t) && (i.add(t), !0);
        });
    return 0 === s.length
        ? c.intl.string(c.t.FUVhyC)
        : 1 === s.length
          ? c.intl.formatToPlainString(c.t.EQwZlN, { a: n(s[0]) })
          : 2 === s.length
            ? c.intl.formatToPlainString(c.t.zBcKoA, { a: n(s[0]), b: n(s[1]) })
            : c.intl.formatToPlainString(c.t["3AqFaG"], { a: n(s[0]), b: n(s[1]), n: s.length - 2 });
}

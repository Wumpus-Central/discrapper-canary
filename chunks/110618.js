"use strict";
n.d(t, { DO: () => u, Mt: () => d, c: () => _, l7: () => A }), n(735438);
var i = n(383501),
    r = n(562153),
    l = n(488926),
    s = n(446600),
    a = n(516607),
    o = n(652215),
    E = n(737045),
    c = n(985018);
function _(e, t, n, i) {
    let l = t[0],
        s = r.Ay.getName(e, n, l),
        a = i ?? t.length;
    return 1 === a && null != l
        ? s
        : null == l
          ? c.intl.formatToPlainString(c.t.chmM9N, { count: a })
          : c.intl.formatToPlainString(c.t.GhkJ21, { name: s, count: a - 1 });
}
function d(e, t) {
    switch (e) {
        case E.T6.OWNER:
            return c.intl.string(c.t.icuNBM);
        case E.T6.ADMINISTRATOR:
            return c.intl.string(c.t.eTmN5a);
        case E.T6.MEMBER:
        case E.T6.ROLE:
            return t ? c.intl.string(c.t.Hw3XWx) : c.intl.string(c.t.YieyPi);
        case E.T6.EMPTY_STATE:
    }
    return null;
}
function A(e) {
    let t = s.A.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: t?.topic,
        media_session_id: i.A.getMediaSessionId(),
        request_to_speak_state: l.MJ(o.xBc.REQUEST_TO_SPEAK, e) ? a.kw.EVERYONE : a.kw.NO_ONE,
        stage_instance_id: t?.id,
    };
}
function u(e, t) {
    let n = (t) => r.Ay.getName(e.getGuildId(), e.id, t.user),
        i = new Set(),
        l = t.filter((e) => {
            let t = e.user.id;
            return !i.has(t) && (i.add(t), !0);
        });
    return 0 === l.length
        ? c.intl.string(c.t.FUVhyC)
        : 1 === l.length
          ? c.intl.formatToPlainString(c.t.EQwZlN, { a: n(l[0]) })
          : 2 === l.length
            ? c.intl.formatToPlainString(c.t.zBcKoA, { a: n(l[0]), b: n(l[1]) })
            : c.intl.formatToPlainString(c.t["3AqFaG"], { a: n(l[0]), b: n(l[1]), n: l.length - 2 });
}

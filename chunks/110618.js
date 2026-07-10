"use strict";
n.d(t, { DO: () => A, Mt: () => _, c: () => u, l7: () => E }), n(735438);
var i = n(763827),
    r = n(562153),
    a = n(488926),
    s = n(446600),
    l = n(516607),
    o = n(652215),
    d = n(719366),
    c = n(375708);
function u(e, t, n, i) {
    let a = t[0],
        s = r.Ay.getName(e, n, a),
        l = i ?? t.length;
    return 1 === l && null != a
        ? s
        : null == a
          ? c.intl.formatToPlainString(c.t.chmM9N, { count: l })
          : c.intl.formatToPlainString(c.t.GhkJ21, { name: s, count: l - 1 });
}
function _(e, t) {
    switch (e) {
        case d.T6.OWNER:
            return c.intl.string(c.t.icuNBM);
        case d.T6.ADMINISTRATOR:
            return c.intl.string(c.t.eTmN5a);
        case d.T6.MEMBER:
        case d.T6.ROLE:
            return t ? c.intl.string(c.t.Hw3XWx) : c.intl.string(c.t.YieyPi);
        case d.T6.EMPTY_STATE:
    }
    return null;
}
function E(e) {
    let t = s.A.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: t?.topic,
        media_session_id: i.A.getMediaSessionId(),
        request_to_speak_state: a.MJ(o.xBc.REQUEST_TO_SPEAK, e) ? l.kw.EVERYONE : l.kw.NO_ONE,
        stage_instance_id: t?.id,
    };
}
function A(e, t) {
    function n(t) {
        return r.Ay.getName(e.getGuildId(), e.id, t.user);
    }
    let i = new Set(),
        a = t.filter((e) => {
            let t = e.user.id;
            return !i.has(t) && (i.add(t), !0);
        });
    return 0 === a.length
        ? c.intl.string(c.t.FUVhyC)
        : 1 === a.length
          ? c.intl.formatToPlainString(c.t.EQwZlN, { a: n(a[0]) })
          : 2 === a.length
            ? c.intl.formatToPlainString(c.t.zBcKoA, { a: n(a[0]), b: n(a[1]) })
            : c.intl.formatToPlainString(c.t["3AqFaG"], { a: n(a[0]), b: n(a[1]), n: a.length - 2 });
}

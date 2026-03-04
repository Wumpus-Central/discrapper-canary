n.d(t, { DO: () => A, Mt: () => d, c: () => E, l7: () => u }), n(735438);
var i = n(383501),
    l = n(562153),
    r = n(488926),
    a = n(446600),
    s = n(516607),
    o = n(652215),
    c = n(737045),
    _ = n(985018);
function E(e, t, n, i) {
    let r = t[0],
        a = l.Ay.getName(e, n, r),
        s = i ?? t.length;
    return 1 === s && null != r
        ? a
        : null == r
          ? _.intl.formatToPlainString(_.t.chmM9N, { count: s })
          : _.intl.formatToPlainString(_.t.GhkJ21, { name: a, count: s - 1 });
}
function d(e, t) {
    switch (e) {
        case c.T6.OWNER:
            return _.intl.string(_.t.icuNBM);
        case c.T6.ADMINISTRATOR:
            return _.intl.string(_.t.eTmN5a);
        case c.T6.MEMBER:
        case c.T6.ROLE:
            return t ? _.intl.string(_.t.Hw3XWx) : _.intl.string(_.t.YieyPi);
        case c.T6.EMPTY_STATE:
    }
    return null;
}
function u(e) {
    let t = a.A.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: t?.topic,
        media_session_id: i.A.getMediaSessionId(),
        request_to_speak_state: r.MJ(o.xBc.REQUEST_TO_SPEAK, e) ? s.kw.EVERYONE : s.kw.NO_ONE,
        stage_instance_id: t?.id,
    };
}
function A(e, t) {
    let n = (t) => l.Ay.getName(e.getGuildId(), e.id, t.user),
        i = new Set(),
        r = t.filter((e) => {
            let t = e.user.id;
            return !i.has(t) && (i.add(t), !0);
        });
    return 0 === r.length
        ? _.intl.string(_.t.FUVhyC)
        : 1 === r.length
          ? _.intl.formatToPlainString(_.t.EQwZlN, { a: n(r[0]) })
          : 2 === r.length
            ? _.intl.formatToPlainString(_.t.zBcKoA, { a: n(r[0]), b: n(r[1]) })
            : _.intl.formatToPlainString(_.t["3AqFaG"], { a: n(r[0]), b: n(r[1]), n: r.length - 2 });
}

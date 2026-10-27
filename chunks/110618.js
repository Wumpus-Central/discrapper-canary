(n.d(e, { DO: () => T, Mt: () => _, c: () => c, l7: () => E }), n(435558));
var i = n(763827),
    l = n(562153),
    r = n(488926),
    a = n(446600),
    s = n(516607),
    o = n(652215),
    d = n(719366),
    u = n(105292);
function c(t, e, n, i) {
    let r = e[0],
        a = l.Ay.getName(t, n, r),
        s = i ?? e.length;
    return 1 === s && null != r
        ? a
        : null == r
          ? u.intl.formatToPlainString(u.t.chmM9N, { count: s })
          : u.intl.formatToPlainString(u.t.GhkJ21, { name: a, count: s - 1 });
}
function _(t, e) {
    switch (t) {
        case d.T6.OWNER:
            return u.intl.string(u.t.icuNBM);
        case d.T6.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5a);
        case d.T6.MEMBER:
        case d.T6.ROLE:
            return e ? u.intl.string(u.t.Hw3XWx) : u.intl.string(u.t.YieyPi);
        case d.T6.EMPTY_STATE:
    }
    return null;
}
function E(t) {
    let e = a.A.getStageInstanceByChannel(t.id);
    return {
        channel_id: t.id,
        guild_id: t.guild_id,
        topic: e?.topic,
        media_session_id: i.A.getMediaSessionId(),
        request_to_speak_state: r.MJ(o.xBc.REQUEST_TO_SPEAK, t) ? s.kw.EVERYONE : s.kw.NO_ONE,
        stage_instance_id: e?.id,
    };
}
function T(t, e) {
    function n(e) {
        return l.Ay.getName(t.getGuildId(), t.id, e.user);
    }
    let i = new Set(),
        r = e.filter((t) => {
            let e = t.user.id;
            return !i.has(e) && (i.add(e), !0);
        });
    return 0 === r.length
        ? u.intl.string(u.t.FUVhyC)
        : 1 === r.length
          ? u.intl.formatToPlainString(u.t.EQwZlN, { a: n(r[0]) })
          : 2 === r.length
            ? u.intl.formatToPlainString(u.t.zBcKoA, { a: n(r[0]), b: n(r[1]) })
            : u.intl.formatToPlainString(u.t["3AqFaG"], { a: n(r[0]), b: n(r[1]), n: r.length - 2 });
}

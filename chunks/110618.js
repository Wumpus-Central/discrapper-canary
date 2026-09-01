r.d(e, { DO: () => I, Mt: () => S, c: () => A, l7: () => T }), r(435558);
var i = r(763827),
    n = r(562153),
    E = r(488926),
    c = r(446600),
    l = r(516607),
    s = r(652215),
    _ = r(719366),
    a = r(375708);
function A(t, e, r, i) {
    let E = e[0],
        c = n.Ay.getName(t, r, E),
        l = i ?? e.length;
    return 1 === l && null != E
        ? c
        : null == E
          ? a.intl.formatToPlainString(a.t.chmM9N, { count: l })
          : a.intl.formatToPlainString(a.t.GhkJ21, { name: c, count: l - 1 });
}
function S(t, e) {
    switch (t) {
        case _.T6.OWNER:
            return a.intl.string(a.t.icuNBM);
        case _.T6.ADMINISTRATOR:
            return a.intl.string(a.t.eTmN5a);
        case _.T6.MEMBER:
        case _.T6.ROLE:
            return e ? a.intl.string(a.t.Hw3XWx) : a.intl.string(a.t.YieyPi);
        case _.T6.EMPTY_STATE:
    }
    return null;
}
function T(t) {
    let e = c.A.getStageInstanceByChannel(t.id);
    return {
        channel_id: t.id,
        guild_id: t.guild_id,
        topic: e?.topic,
        media_session_id: i.A.getMediaSessionId(),
        request_to_speak_state: E.MJ(s.xBc.REQUEST_TO_SPEAK, t) ? l.kw.EVERYONE : l.kw.NO_ONE,
        stage_instance_id: e?.id,
    };
}
function I(t, e) {
    function r(e) {
        return n.Ay.getName(t.getGuildId(), t.id, e.user);
    }
    let i = new Set(),
        E = e.filter((t) => {
            let e = t.user.id;
            return !i.has(e) && (i.add(e), !0);
        });
    return 0 === E.length
        ? a.intl.string(a.t.FUVhyC)
        : 1 === E.length
          ? a.intl.formatToPlainString(a.t.EQwZlN, { a: r(E[0]) })
          : 2 === E.length
            ? a.intl.formatToPlainString(a.t.zBcKoA, { a: r(E[0]), b: r(E[1]) })
            : a.intl.formatToPlainString(a.t["3AqFaG"], { a: r(E[0]), b: r(E[1]), n: E.length - 2 });
}

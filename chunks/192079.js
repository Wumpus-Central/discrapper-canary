n.d(t, {
    ER: () => d,
    kk: () => f,
    s$: () => p,
    wQ: () => _,
}),
    n(388685),
    n(392711);
var r = n(19780),
    i = n(5192),
    a = n(700785),
    o = n(427679),
    s = n(157925),
    l = n(981631),
    c = n(71080),
    u = n(388032);
function d(e, t, n, r) {
    let a = t[0],
        o = i.ZP.getName(e, n, a),
        s = null != r ? r : t.length;
    return 1 === s && null != a
        ? o
        : null == a
          ? u.intl.formatToPlainString(u.t.chmM9N, { count: s })
          : u.intl.formatToPlainString(u.t.GhkJ21, {
                name: o,
                count: s - 1,
            });
}
function f(e, t) {
    switch (e) {
        case c.aC.OWNER:
            return u.intl.string(u.t.icuNBM);
        case c.aC.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5a);
        case c.aC.MEMBER:
        case c.aC.ROLE:
            return t ? u.intl.string(u.t.Hw3XWx) : u.intl.string(u.t.YieyPi);
        case c.aC.EMPTY_STATE:
    }
    return null;
}
function p(e) {
    let t = o.Z.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == t ? void 0 : t.topic,
        media_session_id: r.Z.getMediaSessionId(),
        request_to_speak_state: a.Uu(l.Plq.REQUEST_TO_SPEAK, e) ? s.BM.EVERYONE : s.BM.NO_ONE,
        stage_instance_id: null == t ? void 0 : t.id,
    };
}
function _(e, t) {
    let n = (t) => i.ZP.getName(e.getGuildId(), e.id, t.user),
        r = new Set(),
        a = t.filter((e) => {
            let t = e.user.id;
            return !r.has(t) && (r.add(t), !0);
        });
    return 0 === a.length
        ? u.intl.string(u.t.FUVhyC)
        : 1 === a.length
          ? u.intl.formatToPlainString(u.t.EQwZlN, { a: n(a[0]) })
          : 2 === a.length
            ? u.intl.formatToPlainString(u.t.zBcKoA, {
                  a: n(a[0]),
                  b: n(a[1]),
              })
            : u.intl.formatToPlainString(u.t["3AqFaG"], {
                  a: n(a[0]),
                  b: n(a[1]),
                  n: a.length - 2,
              });
}

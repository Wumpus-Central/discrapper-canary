n.d(t, {
    DO: () => _,
    Mt: () => f,
    c: () => d,
    l7: () => p,
}),
    n(896048),
    n(735438);
var r = n(383501),
    i = n(562153),
    a = n(488926),
    s = n(446600),
    o = n(516607),
    l = n(652215),
    c = n(737045),
    u = n(985018);
function d(e, t, n, r) {
    let a = t[0],
        s = i.Ay.getName(e, n, a),
        o = null != r ? r : t.length;
    return 1 === o && null != a
        ? s
        : null == a
          ? u.intl.formatToPlainString(u.t.chmM9N, { count: o })
          : u.intl.formatToPlainString(u.t.GhkJ21, {
                name: s,
                count: o - 1,
            });
}
function f(e, t) {
    switch (e) {
        case c.T6.OWNER:
            return u.intl.string(u.t.icuNBM);
        case c.T6.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5a);
        case c.T6.MEMBER:
        case c.T6.ROLE:
            return t ? u.intl.string(u.t.Hw3XWx) : u.intl.string(u.t.YieyPi);
        case c.T6.EMPTY_STATE:
    }
    return null;
}
function p(e) {
    let t = s.A.getStageInstanceByChannel(e.id);
    return {
        channel_id: e.id,
        guild_id: e.guild_id,
        topic: null == t ? void 0 : t.topic,
        media_session_id: r.A.getMediaSessionId(),
        request_to_speak_state: a.MJ(l.xBc.REQUEST_TO_SPEAK, e) ? o.kw.EVERYONE : o.kw.NO_ONE,
        stage_instance_id: null == t ? void 0 : t.id,
    };
}
function _(e, t) {
    let n = (t) => i.Ay.getName(e.getGuildId(), e.id, t.user),
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

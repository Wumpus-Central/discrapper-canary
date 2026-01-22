n.d(t, {
    U1: () => u,
    mf: () => p,
    yg: () => d,
    yr: () => h,
    yz: () => _,
}),
    n(896048);
var r = n(602137),
    i = n(734057),
    a = n(71393),
    s = n(222823),
    o = n(253913),
    l = n(746080),
    c = n(985018);

function u(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Ay];
    return {
        isNew: !e.isArchivedThread() && n.isNewForumThread(e.id, e.parent_id, t),
        hasUnreads: !e.isArchivedThread() && n.isForumPostUnread(e.id),
    };
}

function d(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A, a.A, s.Ay],
        o = t.getChannel(e);
    if (null == o) return null;
    let l = n.getGuild(o.guild_id);
    return null == l ? null : u(o, l, [r]);
}
let f = () => ({
    minutes: c.t.nFt9ck,
    hours: c.t.jzCewe,
    days: c.t.U4I0sw,
    month: c.intl.string(c.t["nBNJ/L"]),
});

function p(e, t) {
    if (t === o.EG.POSTED_DURATION_AGO && e === r.T.CREATION_DATE) return f;
}

function _(e, t) {
    let [n] = t,
        r = n.hasTrackedUnread(e),
        i = n.hasOpenedThread(e),
        a = null != n.getTrackedAckMessageId(e);
    return r && i && a;
}

function h(e) {
    var t;
    return (null == (t = i.A.getChannel(e)) ? void 0 : t.hasFlag(l.lx.PINNED)) === !0;
}

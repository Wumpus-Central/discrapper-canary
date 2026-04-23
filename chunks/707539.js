n.d(t, { D3: () => O, JO: () => C, TE: () => R, aK: () => A.A, hs: () => f, ju: () => N }), n(938796);
var i = n(989349),
    r = n.n(i),
    a = n(665260),
    s = n(17928),
    _ = n(58149),
    l = n(332456),
    o = n(222823),
    E = n(543465),
    d = n(954571),
    c = n(477427),
    u = n(935208),
    I = n(152007),
    A = n(469881),
    T = n(37411),
    S = n(652215);
function N() {
    (0, _.zV)(S.HAw.THREAD_BROWSER_TAB_CHANGED);
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
    (0, _.zV)(S.HAw.OPEN_MODAL, { type: "Thread Browser", location_section: e });
}
function R() {
    d.default.track(S.HAw.OPEN_POPOUT, { type: "Active Threads Popout" });
}
function f(e, t) {
    let n = (0, l.C)(e);
    if (null == n) return;
    let i = e.getGuildId(),
        r = e.parent_id,
        s = (0, c.ME)(i, r),
        _ = (e) =>
            (0, a.Lt)(e, T.CP.ALL_MESSAGES)
                ? c.Qe[S.orn.ALL_MESSAGES]
                : (0, a.Lt)(e, T.CP.ONLY_MENTIONS)
                  ? c.Qe[S.orn.ONLY_MENTIONS]
                  : (0, a.Lt)(e, T.CP.NO_MESSAGES)
                    ? c.Qe[S.orn.NO_MESSAGES]
                    : c.Qe[S.orn.NULL],
        o = I.A.flags(e.id) ?? 0,
        u = _(o),
        A = I.A.isMuted(e.id),
        N = (0, c.DZ)(I.A.getMuteConfig(e.id)),
        { can_send_message: O, parent_channel_type: R, ...f } = n,
        C = {
            ...f,
            channel_id: e.id,
            guild_id: i,
            parent_id: r,
            channel_type: e.type,
            has_interacted_with_thread: (o & T.CP.HAS_INTERACTED) != 0,
            parent_is_muted: E.Ay.isGuildOrCategoryOrChannelMuted(i, r),
            old_thread_notification_setting: u,
            new_thread_notification_setting: null != t.flags ? _(t.flags) : u,
            parent_notification_setting: s.channel_message_notification_settings,
            old_thread_is_muted: A,
            new_thread_is_muted: t.muted ?? A,
            old_thread_muted_until: N,
            new_thread_muted_until: null != t.mute_config ? (0, c.DZ)(t.mute_config) : N,
        };
    d.default.track(S.HAw.THREAD_NOTIFICATION_SETTINGS_UPDATED, C);
}
n(985018);
let C = (e) => {
    let t = (0, s.bG)([o.Ay], () => o.Ay.lastMessageId(e.id)),
        n = null != t ? u.default.extractTimestamp(t) : null,
        i = e.threadMetadata?.createTimestamp,
        a = null != i ? r()(i).valueOf() : null;
    return n ?? a ?? u.default.extractTimestamp(e.id);
};

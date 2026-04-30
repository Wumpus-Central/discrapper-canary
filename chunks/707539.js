n.d(t, { D3: () => N, JO: () => m, TE: () => f, aK: () => I.A, hs: () => p, ju: () => S }), n(938796);
var i = n(989349),
    a = n.n(i),
    r = n(665260),
    s = n(17928),
    l = n(58149),
    o = n(332456),
    d = n(222823),
    c = n(543465),
    _ = n(954571),
    E = n(477427),
    u = n(935208),
    A = n(152007),
    I = n(469881),
    T = n(37411),
    h = n(652215);
function S() {
    (0, l.zV)(h.HAw.THREAD_BROWSER_TAB_CHANGED);
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
    (0, l.zV)(h.HAw.OPEN_MODAL, { type: "Thread Browser", location_section: e });
}
function f() {
    _.default.track(h.HAw.OPEN_POPOUT, { type: "Active Threads Popout" });
}
function p(e, t) {
    let n = (0, o.C)(e);
    if (null == n) return;
    let i = e.getGuildId(),
        a = e.parent_id,
        s = (0, E.ME)(i, a),
        l = (e) =>
            (0, r.Lt)(e, T.CP.ALL_MESSAGES)
                ? E.Qe[h.orn.ALL_MESSAGES]
                : (0, r.Lt)(e, T.CP.ONLY_MENTIONS)
                  ? E.Qe[h.orn.ONLY_MENTIONS]
                  : (0, r.Lt)(e, T.CP.NO_MESSAGES)
                    ? E.Qe[h.orn.NO_MESSAGES]
                    : E.Qe[h.orn.NULL],
        d = A.A.flags(e.id) ?? 0,
        u = l(d),
        I = A.A.isMuted(e.id),
        S = (0, E.DZ)(A.A.getMuteConfig(e.id)),
        { can_send_message: N, parent_channel_type: f, ...p } = n,
        m = {
            ...p,
            channel_id: e.id,
            guild_id: i,
            parent_id: a,
            channel_type: e.type,
            has_interacted_with_thread: (d & T.CP.HAS_INTERACTED) != 0,
            parent_is_muted: c.Ay.isGuildOrCategoryOrChannelMuted(i, a),
            old_thread_notification_setting: u,
            new_thread_notification_setting: null != t.flags ? l(t.flags) : u,
            parent_notification_setting: s.channel_message_notification_settings,
            old_thread_is_muted: I,
            new_thread_is_muted: t.muted ?? I,
            old_thread_muted_until: S,
            new_thread_muted_until: null != t.mute_config ? (0, E.DZ)(t.mute_config) : S,
        };
    _.default.track(h.HAw.THREAD_NOTIFICATION_SETTINGS_UPDATED, m);
}
n(985018);
let m = (e) => {
    let t = (0, s.bG)([d.Ay], () => d.Ay.lastMessageId(e.id)),
        n = null != t ? u.default.extractTimestamp(t) : null,
        i = e.threadMetadata?.createTimestamp,
        r = null != i ? a()(i).valueOf() : null;
    return n ?? r ?? u.default.extractTimestamp(e.id);
};

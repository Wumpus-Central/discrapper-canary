"use strict";
n.d(t, { D3: () => A, JO: () => y, TE: () => I, aK: () => h.A, hs: () => T, ju: () => E }), n(938796);
var r = n(989349),
    i = n.n(r),
    a = n(665260),
    s = n(311907),
    o = n(58149),
    l = n(332456),
    u = n(222823),
    c = n(543465),
    d = n(954571),
    _ = n(477427),
    f = n(661191),
    p = n(152007),
    h = n(469881),
    m = n(37411),
    g = n(652215);
n(985018);
function E() {
    (0, o.zV)(g.HAw.THREAD_BROWSER_TAB_CHANGED);
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
    (0, o.zV)(g.HAw.OPEN_MODAL, { type: "Thread Browser", location_section: e });
}
function I() {
    d.default.track(g.HAw.OPEN_POPOUT, { type: "Active Threads Popout" });
}
function T(e, t) {
    let n = (0, l.C)(e);
    if (null == n) return;
    let r = e.getGuildId(),
        i = e.parent_id,
        s = (0, _.ME)(r, i),
        o = (e) =>
            (0, a.Lt)(e, m.CP.ALL_MESSAGES)
                ? _.Qe[g.orn.ALL_MESSAGES]
                : (0, a.Lt)(e, m.CP.ONLY_MENTIONS)
                  ? _.Qe[g.orn.ONLY_MENTIONS]
                  : (0, a.Lt)(e, m.CP.NO_MESSAGES)
                    ? _.Qe[g.orn.NO_MESSAGES]
                    : _.Qe[g.orn.NULL],
        u = p.A.flags(e.id) ?? 0,
        f = o(u),
        h = p.A.isMuted(e.id),
        E = (0, _.DZ)(p.A.getMuteConfig(e.id)),
        { can_send_message: A, parent_channel_type: I, ...T } = n,
        y = {
            ...T,
            channel_id: e.id,
            guild_id: r,
            parent_id: i,
            channel_type: e.type,
            has_interacted_with_thread: (u & m.CP.HAS_INTERACTED) != 0,
            parent_is_muted: c.Ay.isGuildOrCategoryOrChannelMuted(r, i),
            old_thread_notification_setting: f,
            new_thread_notification_setting: null != t.flags ? o(t.flags) : f,
            parent_notification_setting: s.channel_message_notification_settings,
            old_thread_is_muted: h,
            new_thread_is_muted: t.muted ?? h,
            old_thread_muted_until: E,
            new_thread_muted_until: null != t.mute_config ? (0, _.DZ)(t.mute_config) : E,
        };
    d.default.track(g.HAw.THREAD_NOTIFICATION_SETTINGS_UPDATED, y);
}
let y = (e) => {
    let t = (0, s.bG)([u.Ay], () => u.Ay.lastMessageId(e.id)),
        n = null != t ? f.default.extractTimestamp(t) : null,
        r = e.threadMetadata?.createTimestamp,
        a = null != r ? i()(r).valueOf() : null;
    return n ?? a ?? f.default.extractTimestamp(e.id);
};

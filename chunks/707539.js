"use strict";
n.d(t, { D3: () => A, JO: () => S, TE: () => I, aK: () => h.A, hs: () => T, ju: () => g }), n(938796);
var r = n(989349),
    i = n.n(r),
    s = n(665260),
    a = n(311907),
    o = n(58149),
    l = n(332456),
    u = n(222823),
    c = n(543465),
    d = n(954571),
    _ = n(477427),
    f = n(661191),
    p = n(152007),
    h = n(469881),
    E = n(37411),
    m = n(652215);
function g() {
    (0, o.zV)(m.HAw.THREAD_BROWSER_TAB_CHANGED);
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
    (0, o.zV)(m.HAw.OPEN_MODAL, { type: "Thread Browser", location_section: e });
}
function I() {
    d.default.track(m.HAw.OPEN_POPOUT, { type: "Active Threads Popout" });
}
function T(e, t) {
    let n = (0, l.C)(e);
    if (null == n) return;
    let r = e.getGuildId(),
        i = e.parent_id,
        a = (0, _.ME)(r, i),
        o = (e) =>
            (0, s.Lt)(e, E.CP.ALL_MESSAGES)
                ? _.Qe[m.orn.ALL_MESSAGES]
                : (0, s.Lt)(e, E.CP.ONLY_MENTIONS)
                  ? _.Qe[m.orn.ONLY_MENTIONS]
                  : (0, s.Lt)(e, E.CP.NO_MESSAGES)
                    ? _.Qe[m.orn.NO_MESSAGES]
                    : _.Qe[m.orn.NULL],
        u = p.A.flags(e.id) ?? 0,
        f = o(u),
        h = p.A.isMuted(e.id),
        g = (0, _.DZ)(p.A.getMuteConfig(e.id)),
        { can_send_message: A, parent_channel_type: I, ...T } = n,
        S = {
            ...T,
            channel_id: e.id,
            guild_id: r,
            parent_id: i,
            channel_type: e.type,
            has_interacted_with_thread: (u & E.CP.HAS_INTERACTED) != 0,
            parent_is_muted: c.Ay.isGuildOrCategoryOrChannelMuted(r, i),
            old_thread_notification_setting: f,
            new_thread_notification_setting: null != t.flags ? o(t.flags) : f,
            parent_notification_setting: a.channel_message_notification_settings,
            old_thread_is_muted: h,
            new_thread_is_muted: t.muted ?? h,
            old_thread_muted_until: g,
            new_thread_muted_until: null != t.mute_config ? (0, _.DZ)(t.mute_config) : g,
        };
    d.default.track(m.HAw.THREAD_NOTIFICATION_SETTINGS_UPDATED, S);
}
n(985018);
let S = (e) => {
    let t = (0, a.bG)([u.Ay], () => u.Ay.lastMessageId(e.id)),
        n = null != t ? f.default.extractTimestamp(t) : null,
        r = e.threadMetadata?.createTimestamp,
        s = null != r ? i()(r).valueOf() : null;
    return n ?? s ?? f.default.extractTimestamp(e.id);
};

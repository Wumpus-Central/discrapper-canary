"use strict";
n.d(t, { D3: () => A, JO: () => S, TE: () => I, aK: () => p.A, hs: () => T, ju: () => g }), n(938796);
var i = n(989349),
    r = n.n(i),
    s = n(665260),
    a = n(17928),
    o = n(95561),
    l = n(332456),
    u = n(222823),
    c = n(543465),
    d = n(174459),
    _ = n(477427),
    f = n(935208),
    h = n(152007),
    p = n(469881),
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
    let i = e.getGuildId(),
        r = e.parent_id,
        a = (0, _.ME)(i, r),
        o = (e) =>
            (0, s.Lt)(e, E.CP.ALL_MESSAGES)
                ? _.Qe[m.orn.ALL_MESSAGES]
                : (0, s.Lt)(e, E.CP.ONLY_MENTIONS)
                  ? _.Qe[m.orn.ONLY_MENTIONS]
                  : (0, s.Lt)(e, E.CP.NO_MESSAGES)
                    ? _.Qe[m.orn.NO_MESSAGES]
                    : _.Qe[m.orn.NULL],
        u = h.A.flags(e.id) ?? 0,
        f = o(u),
        p = h.A.isMuted(e.id),
        g = (0, _.DZ)(h.A.getMuteConfig(e.id)),
        { can_send_message: A, parent_channel_type: I, ...T } = n,
        S = {
            ...T,
            channel_id: e.id,
            guild_id: i,
            parent_id: r,
            channel_type: e.type,
            has_interacted_with_thread: (u & E.CP.HAS_INTERACTED) != 0,
            parent_is_muted: c.Ay.isGuildOrCategoryOrChannelMuted(i, r),
            old_thread_notification_setting: f,
            new_thread_notification_setting: null != t.flags ? o(t.flags) : f,
            parent_notification_setting: a.channel_message_notification_settings,
            old_thread_is_muted: p,
            new_thread_is_muted: t.muted ?? p,
            old_thread_muted_until: g,
            new_thread_muted_until: null != t.mute_config ? (0, _.DZ)(t.mute_config) : g,
        };
    d.default.track(m.HAw.THREAD_NOTIFICATION_SETTINGS_UPDATED, S);
}
n(375708);
let S = (e) => {
    let t = (0, a.bG)([u.Ay], () => u.Ay.lastMessageId(e.id)),
        n = null != t ? f.default.extractTimestamp(t) : null,
        i = e.threadMetadata?.createTimestamp,
        s = null != i ? r()(i).valueOf() : null;
    return n ?? s ?? f.default.extractTimestamp(e.id);
};

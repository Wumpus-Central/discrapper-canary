"use strict";
n.d(t, { D3: () => T, JO: () => S, TE: () => m, aK: () => h.A, hs: () => g, ju: () => p }), n(938796);
var i = n(989349),
    r = n.n(i),
    a = n(665260),
    s = n(17928),
    l = n(95561),
    o = n(332456),
    d = n(573163),
    c = n(543465),
    u = n(174459),
    _ = n(477427),
    E = n(935208),
    A = n(152007),
    h = n(469881),
    I = n(37411),
    f = n(652215);
function p() {
    (0, l.zV)(f.HAw.THREAD_BROWSER_TAB_CHANGED);
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
    (0, l.zV)(f.HAw.OPEN_MODAL, { type: "Thread Browser", location_section: e });
}
function m() {
    u.default.track(f.HAw.OPEN_POPOUT, { type: "Active Threads Popout" });
}
function g(e, t) {
    let n = (0, o.C)(e);
    if (null == n) return;
    let i = e.getGuildId(),
        r = e.parent_id,
        s = (0, _.ME)(i, r);
    function l(e) {
        return (0, a.Lt)(e, I.CP.ALL_MESSAGES)
            ? _.Qe[f.orn.ALL_MESSAGES]
            : (0, a.Lt)(e, I.CP.ONLY_MENTIONS)
              ? _.Qe[f.orn.ONLY_MENTIONS]
              : (0, a.Lt)(e, I.CP.NO_MESSAGES)
                ? _.Qe[f.orn.NO_MESSAGES]
                : _.Qe[f.orn.NULL];
    }
    let d = A.A.flags(e.id) ?? 0,
        E = l(d),
        h = A.A.isMuted(e.id),
        p = (0, _.DZ)(A.A.getMuteConfig(e.id)),
        { can_send_message: T, parent_channel_type: m, ...g } = n,
        S = {
            ...g,
            channel_id: e.id,
            guild_id: i,
            parent_id: r,
            channel_type: e.type,
            has_interacted_with_thread: (d & I.CP.HAS_INTERACTED) != 0,
            parent_is_muted: c.Ay.isGuildOrCategoryOrChannelMuted(i, r),
            old_thread_notification_setting: E,
            new_thread_notification_setting: null != t.flags ? l(t.flags) : E,
            parent_notification_setting: s.channel_message_notification_settings,
            old_thread_is_muted: h,
            new_thread_is_muted: t.muted ?? h,
            old_thread_muted_until: p,
            new_thread_muted_until: null != t.mute_config ? (0, _.DZ)(t.mute_config) : p,
        };
    u.default.track(f.HAw.THREAD_NOTIFICATION_SETTINGS_UPDATED, S);
}
function S(e) {
    let t = (0, s.bG)([d.Ay], () => d.Ay.lastMessageId(e.id)),
        n = null != t ? E.default.extractTimestamp(t) : null,
        i = e.threadMetadata?.createTimestamp,
        a = null != i ? r()(i).valueOf() : null;
    return n ?? a ?? E.default.extractTimestamp(e.id);
}
n(375708);

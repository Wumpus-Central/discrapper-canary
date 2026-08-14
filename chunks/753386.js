n.d(t, { J$: () => T, WM: () => l.WM, cZ: () => p, eG: () => f, vd: () => A, vm: () => m, zh: () => E, zv: () => C });
var i = n(544180),
    r = n(396813),
    s = n(859703),
    o = n(405670),
    a = n(561844),
    l = n(546121),
    u = n(710969),
    d = n(792620),
    c = n(652215);
function C(e, t) {
    (0, u.Ic)(e) || e.userStatus?.enrolledAt == null || e.userStatus?.completedAt != null || (0, r.uI)(e.id, t);
}
n(375708);
function f(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height || t.width > t.height ? "landscape" : "portrait";
}
function E(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function m(e) {
    let { questId: t, sourceQuestContent: n, videoSessionId: r } = e;
    o.Ay.getState().setTranscriptEnabled(!1);
    let l = o.Ay.getState().getVideoProgress(t);
    if (null == l) return;
    let u = s.A.getQuest(t);
    null != u && u.userStatus?.enrolledAt != null && u.userStatus?.completedAt == null && C(u, l.maxTimestampSec);
    let d = E(l.maxTimestampSec, l.duration);
    (0, a.av)({
        questId: t,
        event: c.HAw.QUEST_VIDEO_PROGRESSED,
        properties: { progress: d, video_timestamp_seconds: l.maxTimestampSec, video_session_id: r },
        sourceQuestContent: n,
    }),
        (0, a.av)({
            questId: t,
            event: c.HAw.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: d,
                video_session_id: r,
                network_connection_speed: i.A.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: n,
        });
}
function p(e) {
    return `VIDEO-QUEST-${e}`;
}
function A(e, t) {
    return e >= t - 1 ? Math.max(e, t) : e;
}
function T(e) {
    return !!(0, d.vv)(e) && (0, n(192308).hasModalOpen)(p(e.id));
}

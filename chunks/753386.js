n.d(t, { J$: () => T, WM: () => s.WM, cZ: () => C, eG: () => E, vd: () => I, vm: () => _, zh: () => A, zv: () => f });
var r = n(544180),
    u = n(396813),
    i = n(859703),
    o = n(405670),
    l = n(561844),
    s = n(546121),
    a = n(977416),
    c = n(792620),
    d = n(652215);
function f(e, t) {
    (0, a.Ic)(e) || e.userStatus?.enrolledAt == null || e.userStatus?.completedAt != null || (0, u.uI)(e.id, t);
}
n(660183);
function E(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height || t.width > t.height ? "landscape" : "portrait";
}
function A(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function _(e) {
    let { questId: t, sourceQuestContent: n, videoSessionId: u } = e;
    o.Ay.getState().setTranscriptEnabled(!1);
    let s = o.Ay.getState().getVideoProgress(t);
    if (null == s) return;
    let a = i.A.getQuest(t);
    null != a && a.userStatus?.enrolledAt != null && a.userStatus?.completedAt == null && f(a, s.maxTimestampSec);
    let c = A(s.maxTimestampSec, s.duration);
    ((0, l.av)({
        questId: t,
        event: d.HAw.QUEST_VIDEO_PROGRESSED,
        properties: { progress: c, video_timestamp_seconds: s.maxTimestampSec, video_session_id: u },
        sourceQuestContent: n,
    }),
        (0, l.av)({
            questId: t,
            event: d.HAw.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: c,
                video_session_id: u,
                network_connection_speed: r.A.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: n,
        }));
}
function C(e) {
    return `VIDEO-QUEST-${e}`;
}
function I(e, t) {
    return e >= t - 1 ? Math.max(e, t) : e;
}
function T(e) {
    return !!(0, c.vv)(e) && (0, n(192308).hasModalOpen)(C(e.id));
}

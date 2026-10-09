n.d(t, { J$: () => p, WM: () => s.WM, cZ: () => C, eG: () => A, vd: () => I, vm: () => _, zh: () => E, zv: () => f });
var r = n(544180),
    u = n(396813),
    i = n(859703),
    o = n(405670),
    l = n(561844),
    s = n(546121),
    a = n(977416),
    d = n(792620),
    c = n(652215);
function f(e, t) {
    (0, a.Ic)(e) || e.userStatus?.enrolledAt == null || e.userStatus?.completedAt != null || (0, u.uI)(e.id, t);
}
n(660183);
function A(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height || t.width > t.height ? "landscape" : "portrait";
}
function E(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function _(e) {
    let { questId: t, sourceQuestContent: n, videoSessionId: u } = e;
    o.Ay.getState().setTranscriptEnabled(!1);
    let s = o.Ay.getState().getVideoProgress(t);
    if (null == s) return;
    let a = i.A.getQuest(t);
    null != a && a.userStatus?.enrolledAt != null && a.userStatus?.completedAt == null && f(a, s.maxTimestampSec);
    let d = E(s.maxTimestampSec, s.duration);
    ((0, l.av)({
        questId: t,
        event: c.HAw.QUEST_VIDEO_PROGRESSED,
        properties: { progress: d, video_timestamp_seconds: s.maxTimestampSec, video_session_id: u },
        sourceQuestContent: n,
    }),
        (0, l.av)({
            questId: t,
            event: c.HAw.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: d,
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
function p(e) {
    return !!(0, d.vv)(e) && (0, n(192308).hasModalOpen)(C(e.id));
}

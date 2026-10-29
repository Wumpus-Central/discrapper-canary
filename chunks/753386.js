n.d(t, {
    J$: () => p,
    WM: () => s.WM,
    cZ: () => I,
    di: () => T,
    eG: () => A,
    vd: () => C,
    vm: () => _,
    zh: () => E,
    zv: () => f,
});
var r = n(544180),
    u = n(427495),
    l = n(859703),
    i = n(405670),
    o = n(561844),
    s = n(546121),
    a = n(977416),
    c = n(792620),
    d = n(652215);
function f(e, t) {
    (0, a.Ic)(e) || e.userStatus?.enrolledAt == null || e.userStatus?.completedAt != null || (0, u.uI)(e.id, t);
}
n(105292);
function A(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height || t.width > t.height ? "landscape" : "portrait";
}
function E(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function T(e) {
    return Number.isFinite(e) && e > 0;
}
function _(e) {
    let { questId: t, sourceQuestContent: n, videoSessionId: u } = e;
    i.Ay.getState().setTranscriptEnabled(!1);
    let s = i.Ay.getState().getVideoProgress(t);
    if (null == s) return;
    let a = l.A.getQuest(t);
    null != a && a.userStatus?.enrolledAt != null && a.userStatus?.completedAt == null && f(a, s.maxTimestampSec);
    let c = E(s.maxTimestampSec, s.duration);
    ((0, o.av)({
        questId: t,
        event: d.HAw.QUEST_VIDEO_PROGRESSED,
        properties: { progress: c, video_timestamp_seconds: s.maxTimestampSec, video_session_id: u },
        sourceQuestContent: n,
    }),
        (0, o.av)({
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
function I(e) {
    return `VIDEO-QUEST-${e}`;
}
function C(e, t) {
    return e >= t - 1 ? Math.max(e, t) : e;
}
function p(e) {
    return !!(0, c.vv)(e) && (0, n(192308).hasModalOpen)(I(e.id));
}

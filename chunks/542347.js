n.d(t, {
    BM: () => O,
    F9: () => h,
    FI: () => p,
    Mo: () => b,
    ZS: () => m,
    bA: () => g,
    u7: () => y,
    z1: () => E,
});
var r = n(754700),
    i = n(866960),
    a = n(22095),
    o = n(617136),
    s = n(616022),
    l = n(184299),
    c = n(862657),
    u = n(254579),
    d = n(981631),
    f = n(388032);
function p(e, t) {
    var n, r;
    (0, c.zi)(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, a.cT)(e.id, t);
}
let _ = "landscape";
function m(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? _ : t.width > t.height ? "landscape" : "portrait";
}
let h = (e) =>
    e.percentComplete > 0
        ? f.intl.formatToPlainString(f.t["c59/Tp"], { remainTime: (0, u.Ah)(e) })
        : f.intl.formatToPlainString(f.t.GNsKiW, { remainTime: (0, u.Ah)(e) });
function g(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function E(e) {
    var t;
    let n = e.taskConfigV2.tasks[r.X.WATCH_VIDEO],
        i = e.taskConfigV2.tasks[r.X.WATCH_VIDEO_ON_MOBILE];
    return null != n && null != i ? n : null != (t = null != i ? i : n) ? t : null;
}
function b(e) {
    var t, n;
    let { questId: r, sourceQuestContent: a, videoSessionId: c } = e,
        u = l.ZP.getState().getVideoProgress(r);
    if (null == u) return;
    let f = s.Z.getQuest(r);
    null != f &&
        (null == (t = f.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = f.userStatus) ? void 0 : n.completedAt) == null &&
        p(f, u.maxTimestampSec);
    let _ = g(u.maxTimestampSec, u.duration);
    (0, o.dA)({
        questId: r,
        event: d.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: _,
            video_timestamp_seconds: u.maxTimestampSec,
            video_session_id: c,
        },
        sourceQuestContent: a,
    }),
        (0, o.dA)({
            questId: r,
            event: d.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: _,
                video_session_id: c,
                network_connection_speed: i.Z.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: a,
        });
}
function y(e) {
    return "VIDEO-QUEST-".concat(e);
}
function O(e) {
    return !!(0, u.q8)(e) && (0, n(952265).hasModalOpen)(y(e.id));
}

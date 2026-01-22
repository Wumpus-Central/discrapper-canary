n.d(t, {
    J$: () => O,
    WM: () => m,
    Xi: () => E,
    cZ: () => y,
    eG: () => h,
    vm: () => b,
    zh: () => g,
    zv: () => p,
});
var r = n(412703),
    i = n(544180),
    a = n(829219),
    s = n(216456),
    o = n(859703),
    l = n(405670),
    c = n(710969),
    u = n(792620),
    d = n(652215),
    f = n(985018);
function p(e, t) {
    var n, r;
    (0, c.Ic)(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, a.uI)(e.id, t);
}
let _ = "landscape";
function h(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? _ : t.width > t.height ? "landscape" : "portrait";
}
let m = (e) =>
    e.percentComplete > 0
        ? f.intl.formatToPlainString(f.t["c59/Tp"], { remainTime: (0, u.xm)(e) })
        : f.intl.formatToPlainString(f.t.GNsKiW, { remainTime: (0, u.xm)(e) });
function g(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function E(e) {
    var t;
    let n = e.taskConfigV2.tasks[r.n.WATCH_VIDEO],
        i = e.taskConfigV2.tasks[r.n.WATCH_VIDEO_ON_MOBILE];
    return null != n && null != i ? n : null != (t = null != i ? i : n) ? t : null;
}
function b(e) {
    var t, n;
    let { questId: r, sourceQuestContent: a, videoSessionId: c } = e,
        u = l.Ay.getState().getVideoProgress(r);
    if (null == u) return;
    let f = o.A.getQuest(r);
    null != f &&
        (null == (t = f.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = f.userStatus) ? void 0 : n.completedAt) == null &&
        p(f, u.maxTimestampSec);
    let _ = g(u.maxTimestampSec, u.duration);
    (0, s.av)({
        questId: r,
        event: d.HAw.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: _,
            video_timestamp_seconds: u.maxTimestampSec,
            video_session_id: c,
        },
        sourceQuestContent: a,
    }),
        (0, s.av)({
            questId: r,
            event: d.HAw.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: _,
                video_session_id: c,
                network_connection_speed: i.A.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: a,
        });
}
function y(e) {
    return "VIDEO-QUEST-".concat(e);
}
function O(e) {
    return !!(0, u.vv)(e) && (0, n(192308).hasModalOpen)(y(e.id));
}

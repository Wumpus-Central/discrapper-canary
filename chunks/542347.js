n.d(t, {
    BM: () => y,
    F9: () => m,
    FI: () => f,
    Mo: () => E,
    ZS: () => _,
    bA: () => h,
    u7: () => b,
    z1: () => g,
});
var r = n(754700),
    i = n(866960),
    a = n(22095),
    o = n(617136),
    s = n(616022),
    l = n(509212),
    c = n(184299),
    u = n(981631),
    d = n(388032);
function f(e, t) {
    var n, r;
    (0, l.zi)(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, a.cT)(e.id, t);
}
let p = "landscape";
function _(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? p : t.width > t.height ? "landscape" : "portrait";
}
let m = (e) =>
    e.percentComplete > 0
        ? d.intl.formatToPlainString(d.t["c59/Tp"], { remainTime: (0, l.Ah)(e) })
        : d.intl.formatToPlainString(d.t.GNsKiW, { remainTime: (0, l.Ah)(e) });
function h(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function g(e) {
    var t;
    let n = e.taskConfigV2.tasks[r.X.WATCH_VIDEO],
        i = e.taskConfigV2.tasks[r.X.WATCH_VIDEO_ON_MOBILE];
    return null != n && null != i ? n : null != (t = null != i ? i : n) ? t : null;
}
function E(e) {
    var t, n;
    let { questId: r, sourceQuestContent: a, videoSessionId: l } = e,
        d = c.ZP.getState().getVideoProgress(r);
    if (null == d) return;
    let p = s.Z.getQuest(r);
    null != p &&
        (null == (t = p.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = p.userStatus) ? void 0 : n.completedAt) == null &&
        f(p, d.maxTimestampSec);
    let _ = h(d.maxTimestampSec, d.duration);
    (0, o.dA)({
        questId: r,
        event: u.rMx.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: _,
            video_timestamp_seconds: d.maxTimestampSec,
            video_session_id: l,
        },
        sourceQuestContent: a,
    }),
        (0, o.dA)({
            questId: r,
            event: u.rMx.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: _,
                video_session_id: l,
                network_connection_speed: i.Z.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: a,
        });
}
function b(e) {
    return "VIDEO-QUEST-".concat(e);
}
function y(e) {
    return !!(0, l.q8)(e) && (0, n(952265).nf)(b(e.id));
}

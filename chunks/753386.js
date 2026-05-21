"use strict";
n.d(t, { J$: () => g, WM: () => l.WM, cZ: () => E, eG: () => f, vd: () => m, vm: () => p, zh: () => h, zv: () => _ });
var i = n(544180),
    r = n(340124),
    s = n(859703),
    a = n(405670),
    o = n(561844),
    l = n(287875),
    u = n(710969),
    c = n(792620),
    d = n(652215);
function _(e, t) {
    (0, u.Ic)(e) || e.userStatus?.enrolledAt == null || e.userStatus?.completedAt != null || (0, r.uI)(e.id, t);
}
n(375708);
function f(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height || t.width > t.height ? "landscape" : "portrait";
}
function h(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function p(e) {
    let { questId: t, sourceQuestContent: n, videoSessionId: r } = e;
    a.Ay.getState().setTranscriptEnabled(!1);
    let l = a.Ay.getState().getVideoProgress(t);
    if (null == l) return;
    let u = s.A.getQuest(t);
    null != u && u.userStatus?.enrolledAt != null && u.userStatus?.completedAt == null && _(u, l.maxTimestampSec);
    let c = h(l.maxTimestampSec, l.duration);
    (0, o.av)({
        questId: t,
        event: d.HAw.QUEST_VIDEO_PROGRESSED,
        properties: { progress: c, video_timestamp_seconds: l.maxTimestampSec, video_session_id: r },
        sourceQuestContent: n,
    }),
        (0, o.av)({
            questId: t,
            event: d.HAw.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: c,
                video_session_id: r,
                network_connection_speed: i.A.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: n,
        });
}
function E(e) {
    return `VIDEO-QUEST-${e}`;
}
function m(e, t) {
    return e >= t - 1 ? Math.max(e, t) : e;
}
function g(e) {
    return !!(0, c.vv)(e) && (0, n(192308).hasModalOpen)(E(e.id));
}

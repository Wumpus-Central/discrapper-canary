"use strict";
n.d(t, { J$: () => A, WM: () => E, cZ: () => m, eG: () => f, vd: () => g, vm: () => p, zh: () => h, zv: () => _ });
var r = n(544180),
    i = n(829219),
    s = n(859703),
    a = n(405670),
    o = n(561844),
    l = n(710969),
    u = n(792620),
    d = n(652215),
    c = n(985018);
function _(e, t) {
    (0, l.Ic)(e) || e.userStatus?.enrolledAt == null || e.userStatus?.completedAt != null || (0, i.uI)(e.id, t);
}
function f(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height || t.width > t.height ? "landscape" : "portrait";
}
let E = (e) =>
    e.percentComplete > 0
        ? c.intl.formatToPlainString(c.t["c59/Tp"], { remainTime: (0, u.xm)(e) })
        : c.intl.formatToPlainString(c.t.GNsKiW, { remainTime: (0, u.xm)(e) });
function h(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function p(e) {
    let { questId: t, sourceQuestContent: n, videoSessionId: i } = e;
    a.Ay.getState().setTranscriptEnabled(!1);
    let l = a.Ay.getState().getVideoProgress(t);
    if (null == l) return;
    let u = s.A.getQuest(t);
    null != u && u.userStatus?.enrolledAt != null && u.userStatus?.completedAt == null && _(u, l.maxTimestampSec);
    let c = h(l.maxTimestampSec, l.duration);
    (0, o.av)({
        questId: t,
        event: d.HAw.QUEST_VIDEO_PROGRESSED,
        properties: { progress: c, video_timestamp_seconds: l.maxTimestampSec, video_session_id: i },
        sourceQuestContent: n,
    }),
        (0, o.av)({
            questId: t,
            event: d.HAw.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: c,
                video_session_id: i,
                network_connection_speed: r.A.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: n,
        });
}
function m(e) {
    return `VIDEO-QUEST-${e}`;
}
function g(e, t) {
    return e >= t - 1 ? Math.max(e, t) : e;
}
function A(e) {
    return !!(0, u.vv)(e) && (0, n(192308).hasModalOpen)(m(e.id));
}

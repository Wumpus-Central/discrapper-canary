n.d(t, {
    J$: () => y,
    WM: () => h,
    cZ: () => E,
    eG: () => _,
    vm: () => g,
    zh: () => m,
    zv: () => f,
});
var r = n(544180),
    i = n(829219),
    a = n(859703),
    s = n(405670),
    o = n(561844),
    l = n(710969),
    c = n(792620),
    u = n(652215),
    d = n(985018);

function f(e, t) {
    var n, r;
    (0, l.Ic)(e) ||
        (null == (n = e.userStatus) ? void 0 : n.enrolledAt) == null ||
        (null == (r = e.userStatus) ? void 0 : r.completedAt) != null ||
        (0, i.uI)(e.id, t);
}
let p = "landscape";

function _(e) {
    let t = e.assets.video;
    return null == t || null == t.width || null == t.height ? p : t.width > t.height ? "landscape" : "portrait";
}
let h = (e) =>
    e.percentComplete > 0
        ? d.intl.formatToPlainString(d.t["c59/Tp"], {
              remainTime: (0, c.xm)(e),
          })
        : d.intl.formatToPlainString(d.t.GNsKiW, {
              remainTime: (0, c.xm)(e),
          });

function m(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}

function g(e) {
    var t, n;
    let { questId: i, sourceQuestContent: l, videoSessionId: c } = e,
        d = s.Ay.getState().getVideoProgress(i);
    if (null == d) return;
    let p = a.A.getQuest(i);
    null != p &&
        (null == (t = p.userStatus) ? void 0 : t.enrolledAt) != null &&
        (null == (n = p.userStatus) ? void 0 : n.completedAt) == null &&
        f(p, d.maxTimestampSec);
    let _ = m(d.maxTimestampSec, d.duration);
    (0, o.av)({
        questId: i,
        event: u.HAw.QUEST_VIDEO_PROGRESSED,
        properties: {
            progress: _,
            video_timestamp_seconds: d.maxTimestampSec,
            video_session_id: c,
        },
        sourceQuestContent: l,
    }),
        (0, o.av)({
            questId: i,
            event: u.HAw.QUEST_VIDEO_MODAL_CLOSED,
            properties: {
                video_progress: _,
                video_session_id: c,
                network_connection_speed: r.A.getEffectiveConnectionSpeed(),
            },
            sourceQuestContent: l,
        });
}

function E(e) {
    return "VIDEO-QUEST-".concat(e);
}

function y(e) {
    return !!(0, c.vv)(e) && (0, n(192308).hasModalOpen)(E(e.id));
}

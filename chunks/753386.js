var r = n(544180),
    u = n(153229),
    i = n(122760),
    l = n(405670),
    o = n(561844),
    a = n(500180),
    s = n(977416),
    c = n(792620),
    d = n(652215);
function f(e, t) {
    (0, s.Ic)(e) || e.userStatus?.enrolledAt == null || e.userStatus?.completedAt != null || (0, u.uI)(e.id, t);
}
n(792996);
function A(e, t) {
    return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round((e / t) * 100) / 100);
}
function E(e) {
    return `VIDEO-QUEST-${e}`;
}
n.d(
    t,
    { WM: () => a.WM },
    {
        J$: function (e) {
            return !!(0, c.vv)(e) && (0, n(192308).kB)(E(e.id));
        },
        cZ: E,
        di: function (e) {
            return Number.isFinite(e) && e > 0;
        },
        eG: function (e) {
            let t = e.assets.video;
            return null == t || null == t.width || null == t.height || t.width > t.height ? "landscape" : "portrait";
        },
        vd: function (e, t) {
            return e >= t - 1 ? Math.max(e, t) : e;
        },
        vm: function (e) {
            let { questId: t, sourceQuestContent: n, videoSessionId: u } = e,
                a = l.Ay.getState().getVideoProgress(t);
            if (null == a) return;
            let s = i.A.getQuest(t);
            null != s &&
                s.userStatus?.enrolledAt != null &&
                s.userStatus?.completedAt == null &&
                f(s, a.maxTimestampSec);
            let c = A(a.maxTimestampSec, a.duration);
            ((0, o.av)({
                questId: t,
                event: d.HAw.QUEST_VIDEO_PROGRESSED,
                properties: { progress: c, video_timestamp_seconds: a.maxTimestampSec, video_session_id: u },
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
        },
        zh: A,
        zv: f,
    },
);

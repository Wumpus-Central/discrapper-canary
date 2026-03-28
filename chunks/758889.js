n.d(t, { Vy: () => c });
var r = n(627968);
n(64700);
var a = n(397927),
    o = n(931135),
    i = n(762168),
    s = n(654487),
    l = n(652215);
function d(e) {
    let { orientation: t, autoplay: n, questCompleted: d, fullEpisode: u, targetTimeSec: c, videoUrl: p } = e,
        _ = "portrait" === t,
        f = (0, i.DX)({
            url: p,
            width: _ ? 360 : 640,
            height: _ ? 640 : 360,
            target: c,
            videoTitle: _ ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        m = (0, i.ec)(f);
    u && (m.config.features = [s.Li.FULL_EPISODE_VIDEO_QUEST]);
    let b = d
        ? {
              ...m,
              userStatus: (0, i.kK)({
                  enrolledAt: m.userStatus?.enrolledAt ?? null,
                  completedAt: m.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: f.target,
              }),
          }
        : m;
    return (0, r.jsx)("div", {
        style: {
            width: _ ? "400px" : "100%",
            maxWidth: _ ? void 0 : "800px",
            height: _ ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
        },
        children: (0, r.jsx)(i.sn, {
            quest: b,
            isPortrait: _,
            children: (0, r.jsx)(o.A, {
                targetTimeSec: f.target,
                parentTransitionState: a.ip4.ENTERED,
                onOptimisticProgressUpdate: l.tEg,
                autoplay: n,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: p,
            }),
        }),
    });
}
let u = { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
    c = {
        title: "Video Player (Composed Quests)",
        stories: [
            {
                name: "Landscape Video (Composed Quests)",
                id: "landscape-video-composed",
                component: d,
                controls: { ...i._v, orientation: { ...i._v.orientation, defaultValue: "landscape" }, fullEpisode: u },
            },
            {
                name: "Portrait Video (Composed Quests)",
                id: "portrait-video-composed",
                component: d,
                controls: { ...i._v, orientation: { ...i._v.orientation, defaultValue: "portrait" }, fullEpisode: u },
            },
        ],
    };

n.d(t, { Vy: () => d });
var r = n(627968);
n(64700);
var a = n(397927),
    o = n(931135),
    i = n(762168),
    s = n(652215);
function l(e) {
    let { orientation: t, autoplay: n, questCompleted: l, videoUrl: d } = e,
        u = "portrait" === t,
        c = (0, i.DX)({
            url: d,
            width: u ? 360 : 640,
            height: u ? 640 : 360,
            videoTitle: u ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        p = (0, i.ec)(c),
        _ = l
            ? {
                  ...p,
                  userStatus: (0, i.kK)({
                      enrolledAt: p.userStatus?.enrolledAt ?? null,
                      completedAt: p.userStatus?.enrolledAt ?? null,
                      streamProgressSeconds: c.target,
                  }),
              }
            : p;
    return (0, r.jsx)("div", {
        style: {
            width: u ? "400px" : "100%",
            maxWidth: u ? void 0 : "800px",
            height: u ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
        },
        children: (0, r.jsx)(i.sn, {
            quest: _,
            isPortrait: u,
            children: (0, r.jsx)(o.A, {
                targetTimeSec: c.target,
                parentTransitionState: a.ip4.ENTERED,
                onOptimisticProgressUpdate: s.tEg,
                autoplay: n,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: d,
            }),
        }),
    });
}
let d = {
    title: "Video Player (Composed Quests)",
    stories: [
        {
            name: "Landscape Video (Composed Quests)",
            id: "landscape-video-composed",
            component: l,
            controls: { ...i._v, orientation: { ...i._v.orientation, defaultValue: "landscape" } },
        },
        {
            name: "Portrait Video (Composed Quests)",
            id: "portrait-video-composed",
            component: l,
            controls: { ...i._v, orientation: { ...i._v.orientation, defaultValue: "portrait" } },
        },
    ],
};

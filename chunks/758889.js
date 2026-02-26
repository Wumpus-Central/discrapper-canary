r.d(t, { Vy: () => d });
var o = r(627968);
r(64700);
var a = r(397927),
    n = r(432806),
    i = r(762168),
    s = r(652215);
function l(e) {
    let { orientation: t, autoplay: r, questCompleted: l, videoUrl: d } = e,
        _ = "portrait" === t,
        u = (0, i.DX)({
            url: d,
            width: _ ? 360 : 640,
            height: _ ? 640 : 360,
            videoTitle: _ ? "Test Portrait Video" : "Test Landscape Video",
        }),
        c = (0, i.ec)(u),
        p = l
            ? {
                  ...c,
                  userStatus: (0, i.kK)({
                      enrolledAt: c.userStatus?.enrolledAt ?? null,
                      completedAt: c.userStatus?.enrolledAt ?? null,
                      streamProgressSeconds: u.target,
                  }),
              }
            : c;
    return (0, o.jsx)("div", {
        style: {
            width: _ ? "400px" : "100%",
            maxWidth: _ ? void 0 : "800px",
            height: _ ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
        },
        children: (0, o.jsx)(i.sn, {
            quest: p,
            isPortrait: _,
            children: (0, o.jsx)(n.A, {
                targetTimeSec: u.target,
                parentTransitionState: a.ip4.ENTERED,
                onOptimisticProgressUpdate: s.tEg,
                autoplay: r,
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

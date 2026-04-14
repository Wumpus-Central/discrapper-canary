n.d(t, { Vy: () => _ });
var a = n(627968),
    r = n(64700),
    o = n(397927),
    i = n(405670),
    l = n(931135),
    s = n(762168),
    c = n(654487),
    d = n(652215);
function u(e) {
    let { orientation: t, autoplay: n, questCompleted: u, fullEpisode: p, targetTimeSec: m, videoUrl: b } = e,
        _ = "portrait" === t,
        S = (0, s.DX)({
            url: b,
            width: _ ? 360 : 640,
            height: _ ? 640 : 360,
            target: m,
            videoTitle: _ ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        g = (0, s.ec)(S),
        f = r.useRef(!1);
    f.current || ((f.current = !0), i.Kr.getState().clearState()),
        r.useEffect(() => {
            let e = document.querySelector('[data-testid="discord-web-video-player-video"]');
            if (null == e) return;
            let t = () => {
                e.currentTime = 0;
            };
            if (!(e.readyState >= 1))
                return (
                    e.addEventListener("loadedmetadata", t, { once: !0 }),
                    () => e.removeEventListener("loadedmetadata", t)
                );
            t();
        }, []),
        p && (g.config.features = [c.Li.FULL_EPISODE_VIDEO_QUEST]);
    let v = u
        ? {
              ...g,
              userStatus: (0, s.kK)({
                  enrolledAt: g.userStatus?.enrolledAt ?? null,
                  completedAt: g.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: S.target,
              }),
          }
        : g;
    return (0, a.jsx)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: _ ? "400px" : "100%",
            maxWidth: _ ? void 0 : "800px",
            height: _ ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
        },
        children: (0, a.jsx)(s.sn, {
            quest: v,
            isPortrait: _,
            children: (0, a.jsx)(l.A, {
                targetTimeSec: S.target,
                parentTransitionState: o.ip4.ENTERED,
                onOptimisticProgressUpdate: d.tEg,
                autoplay: n,
                autoFocus: !1,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: b,
            }),
        }),
    });
}
let { useNewStyling: p, ...m } = s._v,
    b = { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
    _ = {
        title: "Composed Quest Player",
        stories: [
            {
                name: "Landscape",
                id: "landscape-video-composed",
                component: u,
                controls: { ...m, orientation: { ...s._v.orientation, defaultValue: "landscape" }, fullEpisode: b },
            },
            {
                name: "Portrait",
                id: "portrait-video-composed",
                component: u,
                controls: { ...m, orientation: { ...s._v.orientation, defaultValue: "portrait" }, fullEpisode: b },
            },
            {
                name: "Landscape — Autoplay",
                id: "landscape-video-composed-autoplay",
                component: u,
                controls: {
                    ...m,
                    orientation: { ...s._v.orientation, defaultValue: "landscape" },
                    autoplay: { label: "Autoplay", type: "boolean", defaultValue: !0 },
                    fullEpisode: b,
                },
            },
            {
                name: "Landscape — Progress Persistence",
                id: "landscape-video-composed-persistence",
                component: function (e) {
                    let {
                            orientation: t,
                            autoplay: n,
                            questCompleted: r,
                            fullEpisode: i,
                            targetTimeSec: u,
                            videoUrl: p,
                        } = e,
                        m = "portrait" === t,
                        b = (0, s.DX)({
                            url: p,
                            width: m ? 360 : 640,
                            height: m ? 640 : 360,
                            target: u,
                            videoTitle: m ? "Test Portrait Video" : "Test Landscape Video",
                            transcript: "transcript.txt",
                        }),
                        _ = (0, s.ec)(b);
                    i && (_.config.features = [c.Li.FULL_EPISODE_VIDEO_QUEST]);
                    let S = r
                        ? {
                              ..._,
                              userStatus: (0, s.kK)({
                                  enrolledAt: _.userStatus?.enrolledAt ?? null,
                                  completedAt: _.userStatus?.enrolledAt ?? null,
                                  streamProgressSeconds: b.target,
                              }),
                          }
                        : _;
                    return (0, a.jsx)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            maxWidth: "800px",
                            height: "500px",
                            backgroundColor: "#1e1f22",
                            borderRadius: "8px",
                            overflow: "hidden",
                        },
                        children: (0, a.jsx)(s.sn, {
                            quest: S,
                            isPortrait: !1,
                            children: (0, a.jsx)(l.A, {
                                targetTimeSec: b.target,
                                parentTransitionState: o.ip4.ENTERED,
                                onOptimisticProgressUpdate: d.tEg,
                                autoplay: n,
                                autoFocus: !1,
                                performanceClockStartTime: 0,
                                orientation: t,
                                videoUrlOverride: p,
                            }),
                        }),
                    });
                },
                controls: { ...m, orientation: { ...s._v.orientation, defaultValue: "landscape" }, fullEpisode: b },
            },
        ],
    };

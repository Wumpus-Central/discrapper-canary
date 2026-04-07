n.d(t, { Vy: () => m });
var r = n(627968),
    a = n(64700),
    o = n(397927),
    i = n(405670),
    l = n(931135),
    s = n(762168),
    c = n(654487),
    d = n(652215);
function u(e) {
    let {
            orientation: t,
            autoplay: n,
            questCompleted: u,
            fullEpisode: p,
            targetTimeSec: m,
            videoUrl: b,
            useNewStyling: _,
        } = e,
        g = "portrait" === t,
        S = (0, s.DX)({
            url: b,
            width: g ? 360 : 640,
            height: g ? 640 : 360,
            target: m,
            videoTitle: g ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        f = (0, s.ec)(S),
        v = a.useRef(!1);
    v.current || ((v.current = !0), i.Kr.getState().clearState()),
        a.useEffect(() => {
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
        p && (f.config.features = [c.Li.FULL_EPISODE_VIDEO_QUEST]);
    let h = u
        ? {
              ...f,
              userStatus: (0, s.kK)({
                  enrolledAt: f.userStatus?.enrolledAt ?? null,
                  completedAt: f.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: S.target,
              }),
          }
        : f;
    return (0, r.jsx)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: g ? "400px" : "100%",
            maxWidth: g ? void 0 : "800px",
            height: g ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
        },
        children: (0, r.jsx)(s.sn, {
            quest: h,
            isPortrait: g,
            useNewStyling: _,
            children: (0, r.jsx)(l.A, {
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
let p = { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
    m = {
        title: "Composed Quest Player",
        stories: [
            {
                name: "Landscape",
                id: "landscape-video-composed",
                component: u,
                controls: { ...s._v, orientation: { ...s._v.orientation, defaultValue: "landscape" }, fullEpisode: p },
            },
            {
                name: "Portrait",
                id: "portrait-video-composed",
                component: u,
                controls: { ...s._v, orientation: { ...s._v.orientation, defaultValue: "portrait" }, fullEpisode: p },
            },
            {
                name: "Landscape — Autoplay",
                id: "landscape-video-composed-autoplay",
                component: u,
                controls: {
                    ...s._v,
                    orientation: { ...s._v.orientation, defaultValue: "landscape" },
                    autoplay: { label: "Autoplay", type: "boolean", defaultValue: !0 },
                    fullEpisode: p,
                },
            },
            {
                name: "Landscape — Progress Persistence",
                id: "landscape-video-composed-persistence",
                component: function (e) {
                    let {
                            orientation: t,
                            autoplay: n,
                            questCompleted: a,
                            fullEpisode: i,
                            targetTimeSec: u,
                            videoUrl: p,
                            useNewStyling: m,
                        } = e,
                        b = "portrait" === t,
                        _ = (0, s.DX)({
                            url: p,
                            width: b ? 360 : 640,
                            height: b ? 640 : 360,
                            target: u,
                            videoTitle: b ? "Test Portrait Video" : "Test Landscape Video",
                            transcript: "transcript.txt",
                        }),
                        g = (0, s.ec)(_);
                    i && (g.config.features = [c.Li.FULL_EPISODE_VIDEO_QUEST]);
                    let S = a
                        ? {
                              ...g,
                              userStatus: (0, s.kK)({
                                  enrolledAt: g.userStatus?.enrolledAt ?? null,
                                  completedAt: g.userStatus?.enrolledAt ?? null,
                                  streamProgressSeconds: _.target,
                              }),
                          }
                        : g;
                    return (0, r.jsx)("div", {
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
                        children: (0, r.jsx)(s.sn, {
                            quest: S,
                            isPortrait: !1,
                            useNewStyling: m,
                            children: (0, r.jsx)(l.A, {
                                targetTimeSec: _.target,
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
                controls: { ...s._v, orientation: { ...s._v.orientation, defaultValue: "landscape" }, fullEpisode: p },
            },
        ],
    };

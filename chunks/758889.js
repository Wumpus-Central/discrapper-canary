a.d(t, { Vy: () => v });
var n = a(627968),
    o = a(64700),
    r = a(397927),
    i = a(405670),
    l = a(931135),
    s = a(762168),
    d = a(654487),
    c = a(652215);
function u(e, t) {
    return "video" === e
        ? { width: t ? "360px" : "640px", height: t ? "640px" : "360px", margin: "0 auto" }
        : {
              display: "flex",
              flexDirection: "column",
              width: t ? "400px" : "100%",
              maxWidth: t ? void 0 : "800px",
              height: t ? "700px" : "500px",
              backgroundColor: "#1e1f22",
              borderRadius: "8px",
              overflow: "hidden",
          };
}
function p(e) {
    let {
            orientation: t,
            autoplay: a,
            questCompleted: p,
            fullEpisode: m,
            targetTimeSec: b,
            videoUrl: _,
            sizing: g,
        } = e,
        v = "portrait" === t,
        f = (0, s.DX)({
            url: _,
            width: v ? 360 : 640,
            height: v ? 640 : 360,
            target: b,
            videoTitle: v ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        h = (0, s.ec)(f),
        x = o.useRef(!1);
    x.current || ((x.current = !0), i.Kr.getState().clearState()),
        o.useEffect(() => {
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
        m && (h.config.features = [d.Li.FULL_EPISODE_VIDEO_QUEST]);
    let S = p
        ? {
              ...h,
              userStatus: (0, s.kK)({
                  enrolledAt: h.userStatus?.enrolledAt ?? null,
                  completedAt: h.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: f.target,
              }),
          }
        : h;
    return (0, n.jsx)("div", {
        style: u(g, v),
        children: (0, n.jsx)(s.sn, {
            quest: S,
            isPortrait: v,
            children: (0, n.jsx)(l.A, {
                targetTimeSec: f.target,
                parentTransitionState: r.ip4.ENTERED,
                onOptimisticProgressUpdate: c.tEg,
                autoplay: a,
                autoFocus: !1,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: _,
            }),
        }),
    });
}
let { useNewStyling: m, ...b } = s._v,
    _ = { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
    g = {
        label: "Container sizing",
        type: "select",
        options: [
            { label: "Video size (640\xd7360 / 360\xd7640)", value: "video" },
            { label: "Modal context (800\xd7500)", value: "modal" },
        ],
        defaultValue: "modal",
    },
    v = {
        title: "Composed Quest Player",
        stories: [
            {
                name: "Landscape",
                id: "landscape-video-composed",
                component: p,
                controls: {
                    ...b,
                    orientation: { ...s._v.orientation, defaultValue: "landscape" },
                    fullEpisode: _,
                    sizing: g,
                },
            },
            {
                name: "Portrait",
                id: "portrait-video-composed",
                component: p,
                controls: {
                    ...b,
                    orientation: { ...s._v.orientation, defaultValue: "portrait" },
                    fullEpisode: _,
                    sizing: g,
                },
            },
            {
                name: "Landscape — Autoplay",
                id: "landscape-video-composed-autoplay",
                component: p,
                controls: {
                    ...b,
                    orientation: { ...s._v.orientation, defaultValue: "landscape" },
                    autoplay: { label: "Autoplay", type: "boolean", defaultValue: !0 },
                    fullEpisode: _,
                    sizing: g,
                },
            },
            {
                name: "Landscape — Progress Persistence",
                id: "landscape-video-composed-persistence",
                component: function (e) {
                    let {
                            orientation: t,
                            autoplay: a,
                            questCompleted: o,
                            fullEpisode: i,
                            targetTimeSec: p,
                            videoUrl: m,
                            sizing: b,
                        } = e,
                        _ = "portrait" === t,
                        g = (0, s.DX)({
                            url: m,
                            width: _ ? 360 : 640,
                            height: _ ? 640 : 360,
                            target: p,
                            videoTitle: _ ? "Test Portrait Video" : "Test Landscape Video",
                            transcript: "transcript.txt",
                        }),
                        v = (0, s.ec)(g);
                    i && (v.config.features = [d.Li.FULL_EPISODE_VIDEO_QUEST]);
                    let f = o
                        ? {
                              ...v,
                              userStatus: (0, s.kK)({
                                  enrolledAt: v.userStatus?.enrolledAt ?? null,
                                  completedAt: v.userStatus?.enrolledAt ?? null,
                                  streamProgressSeconds: g.target,
                              }),
                          }
                        : v;
                    return (0, n.jsx)("div", {
                        style: u(b, !1),
                        children: (0, n.jsx)(s.sn, {
                            quest: f,
                            isPortrait: !1,
                            children: (0, n.jsx)(l.A, {
                                targetTimeSec: g.target,
                                parentTransitionState: r.ip4.ENTERED,
                                onOptimisticProgressUpdate: c.tEg,
                                autoplay: a,
                                autoFocus: !1,
                                performanceClockStartTime: 0,
                                orientation: t,
                                videoUrlOverride: m,
                            }),
                        }),
                    });
                },
                controls: {
                    ...b,
                    orientation: { ...s._v.orientation, defaultValue: "landscape" },
                    fullEpisode: _,
                    sizing: g,
                },
            },
        ],
    };

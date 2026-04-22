a.d(t, { Vy: () => g });
var n = a(627968),
    r = a(64700),
    i = a(231723),
    l = a(405670),
    o = a(931135),
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
            targetTimeSec: h,
            videoUrl: v,
            sizing: _,
        } = e,
        g = "portrait" === t,
        f = (0, s.DX)({
            url: v,
            width: g ? 360 : 640,
            height: g ? 640 : 360,
            target: h,
            videoTitle: g ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        b = (0, s.ec)(f),
        x = r.useRef(!1);
    x.current || ((x.current = !0), l.Kr.getState().clearState()),
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
        m && (b.config.features = [d.Li.FULL_EPISODE_VIDEO_QUEST]);
    let E = p
        ? {
              ...b,
              userStatus: (0, s.kK)({
                  enrolledAt: b.userStatus?.enrolledAt ?? null,
                  completedAt: b.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: f.target,
              }),
          }
        : b;
    return (0, n.jsx)("div", {
        style: u(_, g),
        children: (0, n.jsx)(s.sn, {
            quest: E,
            isPortrait: g,
            children: (0, n.jsx)(o.A, {
                targetTimeSec: f.target,
                parentTransitionState: i.ip.ENTERED,
                onOptimisticProgressUpdate: c.tEg,
                autoplay: a,
                autoFocus: !1,
                openedAtMs: 0,
                orientation: t,
                videoUrlOverride: v,
            }),
        }),
    });
}
let { useNewStyling: m, ...h } = s._v,
    v = { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
    _ = {
        label: "Container sizing",
        type: "select",
        options: [
            { label: "Video size (640\xd7360 / 360\xd7640)", value: "video" },
            { label: "Modal context (800\xd7500)", value: "modal" },
        ],
        defaultValue: "modal",
    },
    g = {
        title: "Composed Quest Player",
        stories: [
            {
                name: "Landscape",
                id: "landscape-video-composed",
                component: p,
                controls: {
                    ...h,
                    orientation: { ...s._v.orientation, defaultValue: "landscape" },
                    fullEpisode: v,
                    sizing: _,
                },
            },
            {
                name: "Portrait",
                id: "portrait-video-composed",
                component: p,
                controls: {
                    ...h,
                    orientation: { ...s._v.orientation, defaultValue: "portrait" },
                    fullEpisode: v,
                    sizing: _,
                },
            },
            {
                name: "Landscape — Autoplay",
                id: "landscape-video-composed-autoplay",
                component: p,
                controls: {
                    ...h,
                    orientation: { ...s._v.orientation, defaultValue: "landscape" },
                    autoplay: { label: "Autoplay", type: "boolean", defaultValue: !0 },
                    fullEpisode: v,
                    sizing: _,
                },
            },
            {
                name: "Landscape — Progress Persistence",
                id: "landscape-video-composed-persistence",
                component: function (e) {
                    let {
                            orientation: t,
                            autoplay: a,
                            questCompleted: r,
                            fullEpisode: l,
                            targetTimeSec: p,
                            videoUrl: m,
                            sizing: h,
                        } = e,
                        v = "portrait" === t,
                        _ = (0, s.DX)({
                            url: m,
                            width: v ? 360 : 640,
                            height: v ? 640 : 360,
                            target: p,
                            videoTitle: v ? "Test Portrait Video" : "Test Landscape Video",
                            transcript: "transcript.txt",
                        }),
                        g = (0, s.ec)(_);
                    l && (g.config.features = [d.Li.FULL_EPISODE_VIDEO_QUEST]);
                    let f = r
                        ? {
                              ...g,
                              userStatus: (0, s.kK)({
                                  enrolledAt: g.userStatus?.enrolledAt ?? null,
                                  completedAt: g.userStatus?.enrolledAt ?? null,
                                  streamProgressSeconds: _.target,
                              }),
                          }
                        : g;
                    return (0, n.jsx)("div", {
                        style: u(h, !1),
                        children: (0, n.jsx)(s.sn, {
                            quest: f,
                            isPortrait: !1,
                            children: (0, n.jsx)(o.A, {
                                targetTimeSec: _.target,
                                parentTransitionState: i.ip.ENTERED,
                                onOptimisticProgressUpdate: c.tEg,
                                autoplay: a,
                                autoFocus: !1,
                                openedAtMs: 0,
                                orientation: t,
                                videoUrlOverride: m,
                            }),
                        }),
                    });
                },
                controls: {
                    ...h,
                    orientation: { ...s._v.orientation, defaultValue: "landscape" },
                    fullEpisode: v,
                    sizing: _,
                },
            },
        ],
    };

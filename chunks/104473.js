r.d(t, { AZ: () => u, kz: () => s });
var o = r(627968);
r(64700);
var n = r(397927),
    a = r(476066),
    i = r(6503);
let s = "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4";
function l(e) {
    let { orientation: t, thumbnailUrl: r, onReplay: n } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(i.nY, { url: r }),
            (0, o.jsx)(i.KP, {}),
            (0, o.jsxs)(i.zj, {
                orientation: t,
                children: [
                    (0, o.jsx)(i.Kb, { url: r, orientation: t }),
                    (0, o.jsx)(i.lx, {
                        title: "Watch Again",
                        subtitle: "Replay this video",
                        ctaBtnLabel: "Replay",
                        onCTAClick: n,
                        orientation: t,
                    }),
                ],
            }),
        ],
    });
}
function d(e) {
    let { orientation: t, autoplay: r, seekForwardRestricted: i, videoUrl: s, showEndScreen: d } = e;
    return (0, o.jsx)("div", {
        style: {
            width: "landscape" === t ? "640px" : "360px",
            height: "landscape" === t ? "360px" : "640px",
            margin: "0 auto",
            backgroundColor: "#000",
        },
        children: (0, o.jsx)(a.A, {
            src: s,
            autoplay: r,
            orientation: t,
            seekForwardRestricted: i,
            parentTransitionState: n.ip4.ENTERED,
            targetTimeSec: 1 / 0,
            onOptimisticProgressUpdate: () => {},
            performanceClockStartTime: 0,
            onProgressUpdate: () => {},
            onEnded: () => {},
            onError: () => {},
            renderEndScreen: d
                ? (e) => {
                      let { replay: r } = e;
                      return (0, o.jsx)(l, {
                          orientation: t,
                          thumbnailUrl: "https://cdn.discordapp.com/assets/og_img_discord_home.png",
                          onReplay: r,
                      });
                  }
                : void 0,
        }),
    });
}
let c = {
        orientation: {
            label: "Orientation",
            type: "select",
            options: [
                { label: "Landscape", value: "landscape" },
                { label: "Portrait", value: "portrait" },
            ],
            defaultValue: "landscape",
        },
        autoplay: { label: "Autoplay", type: "boolean", defaultValue: !1 },
        seekForwardRestricted: { label: "Restrict Seek Forward", type: "boolean", defaultValue: !1 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: s },
        showEndScreen: { label: "Show End Screen", type: "boolean", defaultValue: !0 },
    },
    u = {
        title: "Discord Video Player (Generic)",
        stories: [
            {
                name: "Landscape Video (Generic)",
                id: "landscape-video-generic",
                component: d,
                controls: { ...c, orientation: { ...c.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait Video (Generic)",
                id: "portrait-video-generic",
                component: d,
                controls: { ...c, orientation: { ...c.orientation, defaultValue: "portrait" } },
            },
            {
                name: "HLS Video (Generic)",
                id: "hls-video-generic",
                component: d,
                controls: {
                    ...c,
                    orientation: { ...c.orientation, defaultValue: "landscape" },
                    videoUrl: {
                        ...c.videoUrl,
                        defaultValue:
                            "https://cdn.discordapp.com/assets/quests/1276640451235156082/transcoded_akuma_trailer.m3u8",
                    },
                },
            },
        ],
    };

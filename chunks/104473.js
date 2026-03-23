r.d(t, { AZ: () => _, kz: () => s });
var a = r(627968);
r(64700);
var o = r(397927),
    n = r(476066),
    i = r(6503);
let s = "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
    l = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function d(e) {
    let { orientation: t, thumbnailUrl: r, onReplay: o } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i.nY, { url: r }),
            (0, a.jsx)(i.KP, {}),
            (0, a.jsxs)(i.zj, {
                orientation: t,
                children: [
                    (0, a.jsx)(i.Kb, { url: r, orientation: t }),
                    (0, a.jsx)(i.lx, {
                        title: "Watch Again",
                        subtitle: "Replay this video",
                        ctaBtnLabel: "Replay",
                        onCTAClick: o,
                        orientation: t,
                    }),
                ],
            }),
        ],
    });
}
function c(e) {
    let {
        orientation: t,
        autoplay: r,
        seekForwardRestricted: i,
        videoUrl: s,
        poster: c,
        showEndScreen: u,
        active: _,
    } = e;
    return (0, a.jsx)("div", {
        style: {
            width: "landscape" === t ? "640px" : "360px",
            height: "landscape" === t ? "360px" : "640px",
            margin: "0 auto",
            backgroundColor: "#000",
        },
        children: (0, a.jsx)(
            n.A,
            {
                src: s,
                poster: c,
                active: _,
                autoplay: r,
                orientation: t,
                seekForwardRestricted: i,
                parentTransitionState: o.ip4.ENTERED,
                targetTimeSec: 1 / 0,
                onOptimisticProgressUpdate: () => {},
                performanceClockStartTime: 0,
                onProgressUpdate: () => {},
                onEnded: () => {},
                onError: () => {},
                renderEndScreen: u
                    ? (e) => {
                          let { replay: r } = e;
                          return (0, a.jsx)(d, { orientation: t, thumbnailUrl: l, onReplay: r });
                      }
                    : void 0,
            },
            String(_),
        ),
    });
}
let u = {
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
        poster: { label: "Poster URL", type: "text", defaultValue: l },
        showEndScreen: { label: "Show End Screen", type: "boolean", defaultValue: !0 },
        active: { label: "Active", type: "boolean", defaultValue: !0 },
    },
    _ = {
        title: "Discord Video Player (Generic)",
        stories: [
            {
                name: "Landscape Video (Generic)",
                id: "landscape-video-generic",
                component: c,
                controls: { ...u, orientation: { ...u.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait Video (Generic)",
                id: "portrait-video-generic",
                component: c,
                controls: { ...u, orientation: { ...u.orientation, defaultValue: "portrait" } },
            },
            {
                name: "HLS Video (Generic)",
                id: "hls-video-generic",
                component: c,
                controls: {
                    ...u,
                    orientation: { ...u.orientation, defaultValue: "landscape" },
                    videoUrl: {
                        ...u.videoUrl,
                        defaultValue:
                            "https://cdn.discordapp.com/assets/quests/1276640451235156082/transcoded_akuma_trailer.m3u8",
                    },
                },
            },
        ],
    };

r.d(t, { AZ: () => d, kz: () => i });
var o = r(627968);
r(64700);
var a = r(397927),
    n = r(476066);
let i = "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4";
function s(e) {
    let { orientation: t, autoplay: r, seekForwardRestricted: i, videoUrl: s } = e;
    return (0, o.jsx)("div", {
        style: {
            width: "landscape" === t ? "640px" : "360px",
            height: "landscape" === t ? "360px" : "640px",
            margin: "0 auto",
            backgroundColor: "#000",
        },
        children: (0, o.jsx)(n.A, {
            src: s,
            autoplay: r,
            orientation: t,
            seekForwardRestricted: i,
            parentTransitionState: a.ip4.ENTERED,
            targetTimeSec: 1 / 0,
            onOptimisticProgressUpdate: () => {},
            performanceClockStartTime: 0,
            onProgressUpdate: () => {},
            onEnded: () => {},
            onError: () => {},
        }),
    });
}
let l = {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: i },
    },
    d = {
        title: "Discord Video Player (Generic)",
        stories: [
            {
                name: "Landscape Video (Generic)",
                id: "landscape-video-generic",
                component: s,
                controls: { ...l, orientation: { ...l.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait Video (Generic)",
                id: "portrait-video-generic",
                component: s,
                controls: { ...l, orientation: { ...l.orientation, defaultValue: "portrait" } },
            },
            {
                name: "HLS Video (Generic)",
                id: "hls-video-generic",
                component: s,
                controls: {
                    ...l,
                    orientation: { ...l.orientation, defaultValue: "landscape" },
                    videoUrl: {
                        ...l.videoUrl,
                        defaultValue:
                            "https://cdn.discordapp.com/assets/quests/1276640451235156082/transcoded_akuma_trailer.m3u8",
                    },
                },
            },
        ],
    };

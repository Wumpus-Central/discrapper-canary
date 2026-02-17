"use strict";
n.d(t, { AZ: () => u, kz: () => s });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(476066);
let s = "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4";
function o(e) {
    let { orientation: t, autoplay: n, seekForwardRestricted: s, videoUrl: o } = e;
    return (0, r.jsx)("div", {
        style: {
            width: "landscape" === t ? "640px" : "360px",
            height: "landscape" === t ? "360px" : "640px",
            margin: "0 auto",
            backgroundColor: "#000",
        },
        children: (0, r.jsx)(a.A, {
            src: o,
            autoplay: n,
            orientation: t,
            seekForwardRestricted: s,
            parentTransitionState: i.ip4.ENTERED,
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
        seekForwardRestricted: { label: "Restrict Seek Forward", type: "boolean", defaultValue: !0 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: s },
    },
    u = {
        title: "Discord Video Player (Generic)",
        stories: [
            {
                name: "Landscape Video (Generic)",
                id: "landscape-video-generic",
                component: o,
                controls: { ...l, orientation: { ...l.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait Video (Generic)",
                id: "portrait-video-generic",
                component: o,
                controls: { ...l, orientation: { ...l.orientation, defaultValue: "portrait" } },
            },
        ],
    };

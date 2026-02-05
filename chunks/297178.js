"use strict";
n.d(t, { U: () => l });
var r = n(627968);
n(64700);
var i = n(103989),
    a = n(786558),
    s = n(799226);
let o = {
    Preview: { reducedMotion: "boolean", iconColor: "color" },
    Friends: { reducedMotion: "boolean", iconColor: "color" },
    Globe: { reducedMotion: "boolean", iconColor: "color" },
    "Globe Single Line": {},
    Emojis: { reducedMotion: "boolean", iconColor: "color" },
    "Wave Line": { reducedMotion: "boolean", iconColor: "color" },
    Games: { reducedMotion: "boolean", iconColor: "color" },
    Voice: { reducedMotion: "boolean", iconColor: "color" },
    "Looping Checkboard": { reducedMotion: "boolean", iconColor: "color" },
    CheckRow: { reducedMotion: "boolean", iconColor: "color" },
    Quests: { reducedMotion: "boolean", iconColor: "color" },
    Entry: { reducedMotion: "boolean", iconColor: "color" },
    Messages: { reducedMotion: "boolean", iconColor: "color" },
    Servers: { reducedMotion: "boolean", iconColor: "color" },
};
function l(e) {
    let { artboard: t = "Preview", stateMachine: n, ...l } = e,
        { status: u, buffer: c } = (0, s.CE)(i.A),
        d = (0, s.m2)(i.A);
    return u === s.BW.Loading
        ? null
        : (0, r.jsx)(a.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = i.A;

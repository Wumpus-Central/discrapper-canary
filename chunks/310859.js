"use strict";
n.d(t, { v: () => l });
var r = n(627968);
n(64700);
var i = n(139482),
    a = n(786558),
    s = n(799226);
let o = {
    "Checkpoint Intro Desktop": {
        reducedMotion: "boolean",
        Subtitle: "string",
        "StartButton Pressed": "boolean",
        StartButton: "string",
    },
    Globe: { reducedMotion: "boolean", Subtitle: "string", "StartButton Pressed": "boolean", StartButton: "string" },
    "Globe Single Line": {},
    "Looping Checkboard": {},
    CheckRow: {},
    Entry: { reducedMotion: "boolean", Subtitle: "string", "StartButton Pressed": "boolean", StartButton: "string" },
    "Start Button": {
        reducedMotion: "boolean",
        Subtitle: "string",
        "StartButton Pressed": "boolean",
        StartButton: "string",
    },
};
function l(e) {
    let { artboard: t = "Checkpoint Intro Desktop", stateMachine: n, ...l } = e,
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

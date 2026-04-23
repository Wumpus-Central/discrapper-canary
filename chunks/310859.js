o.d(e, { v: () => s });
var t = o(627968);
o(64700);
var a = o(139482),
    i = o(786558),
    n = o(799226);
let l = {
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
function s(r) {
    let { artboard: e = "Checkpoint Intro Desktop", stateMachine: o, ...s } = r,
        { status: d, buffer: c } = (0, n.CE)(a.A),
        b = (0, n.m2)(a.A);
    return d === n.BW.Loading
        ? null
        : (0, t.jsx)(i.w, {
              ...(b ? { key: "override" } : {}),
              buffer: c,
              artboard: e,
              stateMachine: o,
              artboardProperties: l,
              ...s,
          });
}
s.riveSrc = a.A;

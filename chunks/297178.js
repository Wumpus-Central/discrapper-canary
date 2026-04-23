o.d(e, { U: () => s });
var t = o(627968);
o(64700);
var a = o(103989),
    i = o(786558),
    n = o(799226);
let l = {
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
function s(r) {
    let { artboard: e = "Preview", stateMachine: o, ...s } = r,
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

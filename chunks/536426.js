e.d(a, { U: () => c });
var i = e(477900);
e(582128);
let t =
    "https://cdn.discordapp.com/assets/content/b938a7ed497f825ee131572ca37f34e5c674b47edec8a88661d2a7d380966f1c.riv";
var o = e(509482),
    n = e(799226);
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
    },
    s = {
        Preview: ["State Machine 1"],
        Friends: ["State Machine 1"],
        Globe: ["State Machine 1"],
        "Globe Single Line": ["State Machine 1"],
        Emojis: ["State Machine 1"],
        "Wave Line": ["State Machine 1"],
        Games: ["State Machine 1"],
        Voice: ["State Machine 1"],
        "Looping Checkboard": ["State Machine 1"],
        CheckRow: ["State Machine 1"],
        Quests: ["State Machine 1"],
        Entry: ["State Machine 1"],
        Messages: ["State Machine 1"],
        Servers: ["State Machine 1"],
    };
function c(r) {
    let { artboard: a = "Preview", stateMachine: e, ...c } = r,
        { status: b, buffer: m } = (0, n.CE)(t),
        v = (0, n.m2)(t);
    return b === n.BW.Loading
        ? null
        : (0, i.jsx)(o.w, {
              ...(v ? { key: "override" } : {}),
              buffer: m,
              artboard: a,
              stateMachine: e,
              artboardProperties: l,
              artboardStateMachines: s,
              ...c,
          });
}
c.riveSrc = t;

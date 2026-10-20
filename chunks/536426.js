r.d(t, { U: () => l });
var a = r(477900);
r(582128);
let o =
    "https://cdn.discordapp.com/assets/content/b938a7ed497f825ee131572ca37f34e5c674b47edec8a88661d2a7d380966f1c.riv";
var i = r(509482),
    n = r(799226);
let s = {
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
    c = {
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
function l(e) {
    let { artboard: t = "Preview", stateMachine: r, ...l } = e,
        { status: b, buffer: d } = (0, n.CE)(o),
        u = (0, n.m2)(o);
    return b === n.BW.Loading
        ? null
        : (0, a.jsx)(i.w, {
              ...(u ? { key: "override" } : {}),
              buffer: d,
              artboard: t,
              stateMachine: r,
              artboardProperties: s,
              artboardStateMachines: c,
              ...l,
          });
}
l.riveSrc = o;

t.d(a, { U: () => u });
var i = t(477900);
t(582128);
let r =
    "https://cdn.discordapp.com/assets/content/b938a7ed497f825ee131572ca37f34e5c674b47edec8a88661d2a7d380966f1c.riv";
var m = t(509482),
    o = t(799226);
let g = {
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
    n = {
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
function u(e) {
    let { artboard: a = "Preview", stateMachine: t, ...u } = e,
        { status: b, buffer: c } = (0, o.CE)(r),
        I = (0, o.m2)(r);
    return b === o.BW.Loading
        ? null
        : (0, i.jsx)(m.w, {
              ...(I ? { key: "override" } : {}),
              buffer: c,
              artboard: a,
              stateMachine: t,
              artboardProperties: g,
              artboardStateMachines: n,
              ...u,
          });
}
u.riveSrc = r;

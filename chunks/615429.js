t.d(e, { R: () => i });
var r = t(477900);
t(582128);
let c =
    "https://cdn.discordapp.com/assets/content/905fd829443af468087dff86c879838d5fc2dba35ccdaa856f6481b1af1d5c74.riv";
var d = t(509482),
    n = t(799226);
let s = { Wumpus: {}, Background: {} },
    u = { Wumpus: ["Auto Generated State Machine"], Background: ["State Machine_ALT", "State Machine 1"] };
function i(a) {
    let { artboard: e = "Wumpus", stateMachine: t, ...i } = a,
        { status: o, buffer: p } = (0, n.CE)(c),
        b = (0, n.m2)(c);
    return o === n.BW.Loading
        ? null
        : (0, r.jsx)(d.w, {
              ...(b ? { key: "override" } : {}),
              buffer: p,
              artboard: e,
              stateMachine: t,
              artboardProperties: s,
              artboardStateMachines: u,
              ...i,
          });
}
i.riveSrc = c;

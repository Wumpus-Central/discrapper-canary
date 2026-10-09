t.d(e, { Z: () => i });
var r = t(477900);
t(582128);
let c =
    "https://cdn.discordapp.com/assets/content/354f49a6e211c21e698aad050121ad8b21a568e18f0e117346fded7089ebc51b.riv";
var d = t(509482),
    n = t(799226);
let s = { Wumpus: {}, Background: {} },
    u = { Wumpus: ["SM_Vibing_Wumpus"], Background: ["State Machine_ALT", "State Machine 1"] };
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

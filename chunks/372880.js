t.d(e, { Z: () => i });
var r = t(477900);
t(582128);
let d =
    "https://cdn.discordapp.com/assets/content/354f49a6e211c21e698aad050121ad8b21a568e18f0e117346fded7089ebc51b.riv";
var c = t(729901),
    n = t(799226);
let s = { Wumpus: {}, Background: {} },
    u = { Wumpus: [], Background: [] },
    o = { Wumpus: ["SM_Vibing_Wumpus"], Background: ["State Machine_ALT", "State Machine 1"] };
function i(a) {
    let { artboard: e = "Wumpus", stateMachine: t, ...i } = a,
        { status: p, buffer: b } = (0, n.CE)(d),
        f = (0, n.m2)(d);
    return p === n.BW.Loading
        ? null
        : (0, r.jsx)(c.w, {
              ...(f ? { key: "override" } : {}),
              buffer: b,
              artboard: e,
              stateMachine: t,
              artboardProperties: s,
              artboardViewModelInstances: u,
              artboardStateMachines: o,
              ...i,
          });
}
i.riveSrc = d;

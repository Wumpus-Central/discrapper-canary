t.d(r, { Z: () => b });
var e = t(477900);
t(582128);
let s =
    "https://cdn.discordapp.com/assets/content/8a7ac8dc9047bab64168144f5a3b303136a96b175530939355c8612193350419.riv";
var i = t(845867),
    c = t(799226);
let o = { Torbs_Main: {} },
    n = { Torbs_Main: ["SM_Torbs"] };
function b(a) {
    let { artboard: r = "Torbs_Main", stateMachine: t, ...b } = a,
        { status: d, buffer: p } = (0, c.CE)(s),
        h = (0, c.m2)(s);
    return d === c.BW.Loading
        ? null
        : (0, e.jsx)(i.w, {
              ...(h ? { key: "override" } : {}),
              buffer: p,
              artboard: r,
              stateMachine: t,
              artboardProperties: o,
              artboardStateMachines: n,
              ...b,
          });
}
b.riveSrc = s;

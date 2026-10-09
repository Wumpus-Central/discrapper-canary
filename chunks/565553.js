a.d(r, { t: () => l });
var o = a(477900);
a(582128);
let t =
    "https://cdn.discordapp.com/assets/content/43b5fa41a3e3cada2b5bb7dfdc456d22a834d01c2947ffc986b4996ee40c063b.riv";
var d = a(509482),
    n = a(799226);
let i = {
        "Gem L1": { reducedMotion: "boolean" },
        Sparkle_Tiny: { reducedMotion: "boolean" },
        Sparkle: { reducedMotion: "boolean" },
    },
    c = { "Gem L1": ["SM_Hover"], Sparkle_Tiny: ["SparkleSM"], Sparkle: ["SparkleSM"] };
function l(e) {
    let { artboard: r = "Gem L1", stateMachine: a, ...l } = e,
        { status: b, buffer: p } = (0, n.CE)(t),
        s = (0, n.m2)(t);
    return b === n.BW.Loading
        ? null
        : (0, o.jsx)(d.w, {
              ...(s ? { key: "override" } : {}),
              buffer: p,
              artboard: r,
              stateMachine: a,
              artboardProperties: i,
              artboardStateMachines: c,
              ...l,
          });
}
l.riveSrc = t;

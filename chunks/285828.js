a.d(r, { z: () => l });
var o = a(477900);
a(582128);
let t =
    "https://cdn.discordapp.com/assets/content/3f8d8cb2278b39eb8975ff5c252ed36a67addd54ae228a2b0d34691ddffa9104.riv";
var d = a(509482),
    n = a(799226);
let i = {
        "Gem L3": { reducedMotion: "boolean" },
        Sparkle: { reducedMotion: "boolean" },
        Sparkle_Tiny: { reducedMotion: "boolean" },
    },
    c = { "Gem L3": ["SM_Hover"], Sparkle: ["SparkleSM"], Sparkle_Tiny: ["SparkleSM"] };
function l(e) {
    let { artboard: r = "Gem L3", stateMachine: a, ...l } = e,
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

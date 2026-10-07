a.d(r, { J: () => l });
var o = a(477900);
a(582128);
let t =
    "https://cdn.discordapp.com/assets/content/f6be7075b3756dfb89ce77617b82d7a9a863a31483e03dfedb07377038197910.riv";
var d = a(845867),
    n = a(799226);
let i = {
        "Gem L2": { reducedMotion: "boolean" },
        Sparkle: { reducedMotion: "boolean" },
        Sparkle_Tiny: { reducedMotion: "boolean" },
    },
    c = { "Gem L2": ["SM_Hover"], Sparkle: ["SparkleSM"], Sparkle_Tiny: ["SparkleSM"] };
function l(e) {
    let { artboard: r = "Gem L2", stateMachine: a, ...l } = e,
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

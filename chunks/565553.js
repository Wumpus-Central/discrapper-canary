a.d(r, { t: () => i });
var o = a(627968);
a(64700);
let d =
    "https://cdn.discordapp.com/assets/content/43b5fa41a3e3cada2b5bb7dfdc456d22a834d01c2947ffc986b4996ee40c063b.riv";
var t = a(594639),
    n = a(105596);
let c = {
    "Gem L1": { reducedMotion: "boolean" },
    Sparkle_Tiny: { reducedMotion: "boolean" },
    Sparkle: { reducedMotion: "boolean" },
};
function i(e) {
    let { artboard: r = "Gem L1", stateMachine: a, ...i } = e,
        { status: b, buffer: s } = (0, n.CE)(d),
        l = (0, n.m2)(d);
    return b === n.BW.Loading
        ? null
        : (0, o.jsx)(t.w, {
              ...(l ? { key: "override" } : {}),
              buffer: s,
              artboard: r,
              stateMachine: a,
              artboardProperties: c,
              ...i,
          });
}
i.riveSrc = d;

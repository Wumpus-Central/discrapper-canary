a.d(l, { t: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/43b5fa41a3e3cada2b5bb7dfdc456d22a834d01c2947ffc986b4996ee40c063b.riv";
var n = a(502377),
    i = a(799226);
let r = {
    "Gem L1": { reducedMotion: "boolean" },
    Sparkle_Tiny: { reducedMotion: "boolean" },
    Sparkle: { reducedMotion: "boolean" },
};
function s(e) {
    let { artboard: l = "Gem L1", stateMachine: a, ...s } = e,
        { status: d, buffer: u } = (0, i.CE)(o),
        c = (0, i.m2)(o);
    return d === i.BW.Loading
        ? null
        : (0, t.jsx)(n.w, {
              ...(c ? { key: "override" } : {}),
              buffer: u,
              artboard: l,
              stateMachine: a,
              artboardProperties: r,
              ...s,
          });
}
s.riveSrc = o;

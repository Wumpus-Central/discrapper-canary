a.d(r, { z: () => i });
var o = a(627968);
a(64700);
let d =
    "https://cdn.discordapp.com/assets/content/3f8d8cb2278b39eb8975ff5c252ed36a67addd54ae228a2b0d34691ddffa9104.riv";
var t = a(594639),
    n = a(105596);
let c = {
    "Gem L3": { reducedMotion: "boolean" },
    Sparkle: { reducedMotion: "boolean" },
    Sparkle_Tiny: { reducedMotion: "boolean" },
};
function i(e) {
    let { artboard: r = "Gem L3", stateMachine: a, ...i } = e,
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

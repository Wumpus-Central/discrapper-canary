a.d(l, { z: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/3f8d8cb2278b39eb8975ff5c252ed36a67addd54ae228a2b0d34691ddffa9104.riv";
var n = a(502377),
    i = a(799226);
let r = {
    "Gem L3": { reducedMotion: "boolean" },
    Sparkle: { reducedMotion: "boolean" },
    Sparkle_Tiny: { reducedMotion: "boolean" },
};
function s(e) {
    let { artboard: l = "Gem L3", stateMachine: a, ...s } = e,
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

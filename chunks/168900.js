a.d(l, { J: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/f6be7075b3756dfb89ce77617b82d7a9a863a31483e03dfedb07377038197910.riv";
var n = a(502377),
    i = a(799226);
let r = {
    "Gem L2": { reducedMotion: "boolean" },
    Sparkle: { reducedMotion: "boolean" },
    Sparkle_Tiny: { reducedMotion: "boolean" },
};
function s(e) {
    let { artboard: l = "Gem L2", stateMachine: a, ...s } = e,
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

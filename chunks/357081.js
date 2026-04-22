a.d(l, { J: () => s });
var t = a(627968);
a(64700);
var n = a(46440),
    o = a(786558),
    i = a(799226);
let r = {
    "Gem L2": { reducedMotion: "boolean" },
    Sparkle: { reducedMotion: "boolean" },
    Sparkle_Tiny: { reducedMotion: "boolean" },
};
function s(e) {
    let { artboard: l = "Gem L2", stateMachine: a, ...s } = e,
        { status: d, buffer: u } = (0, i.CE)(n.A),
        c = (0, i.m2)(n.A);
    return d === i.BW.Loading
        ? null
        : (0, t.jsx)(o.w, {
              ...(c ? { key: "override" } : {}),
              buffer: u,
              artboard: l,
              stateMachine: a,
              artboardProperties: r,
              ...s,
          });
}
s.riveSrc = n.A;

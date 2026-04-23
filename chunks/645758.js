a.d(l, { E: () => s });
var t = a(627968);
a(64700);
var o = a(841921),
    n = a(786558),
    i = a(799226);
let r = {
    Torbs_Multiply: { reducedMotion: "boolean" },
    Shards_All_Nitro: { reducedMotion: "boolean" },
    "Orb Mid Shine": { reducedMotion: "boolean" },
    Torbs_Shine: { reducedMotion: "boolean" },
};
function s(e) {
    let { artboard: l = "Torbs_Multiply", stateMachine: a, ...s } = e,
        { status: d, buffer: u } = (0, i.CE)(o.A),
        c = (0, i.m2)(o.A);
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
s.riveSrc = o.A;

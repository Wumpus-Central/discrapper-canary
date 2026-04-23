a.d(l, { E: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/a5e059af7c16750f382df02ee50c55be2ee90575e42ff1790aa2067c7c890a16.riv";
var n = a(502377),
    i = a(799226);
let r = {
    Torbs_Multiply: { reducedMotion: "boolean" },
    Shards_All_Nitro: { reducedMotion: "boolean" },
    "Orb Mid Shine": { reducedMotion: "boolean" },
    Torbs_Shine: { reducedMotion: "boolean" },
};
function s(e) {
    let { artboard: l = "Torbs_Multiply", stateMachine: a, ...s } = e,
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

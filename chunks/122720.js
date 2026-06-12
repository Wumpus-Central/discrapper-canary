r.d(o, { E: () => c });
var t = r(627968);
r(64700);
let a =
    "https://cdn.discordapp.com/assets/content/a5e059af7c16750f382df02ee50c55be2ee90575e42ff1790aa2067c7c890a16.riv";
var d = r(594639),
    i = r(105596);
let n = {
    Torbs_Multiply: { reducedMotion: "boolean" },
    Shards_All_Nitro: { reducedMotion: "boolean" },
    "Orb Mid Shine": { reducedMotion: "boolean" },
    Torbs_Shine: { reducedMotion: "boolean" },
};
function c(e) {
    let { artboard: o = "Torbs_Multiply", stateMachine: r, ...c } = e,
        { status: s, buffer: l } = (0, i.CE)(a),
        b = (0, i.m2)(a);
    return s === i.BW.Loading
        ? null
        : (0, t.jsx)(d.w, {
              ...(b ? { key: "override" } : {}),
              buffer: l,
              artboard: o,
              stateMachine: r,
              artboardProperties: n,
              ...c,
          });
}
c.riveSrc = a;

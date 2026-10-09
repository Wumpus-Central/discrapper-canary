o.d(r, { E: () => c });
var t = o(477900);
o(582128);
let a =
    "https://cdn.discordapp.com/assets/content/a5e059af7c16750f382df02ee50c55be2ee90575e42ff1790aa2067c7c890a16.riv";
var i = o(509482),
    d = o(799226);
let s = {
        Torbs_Multiply: { reducedMotion: "boolean" },
        Shards_All_Nitro: { reducedMotion: "boolean" },
        "Orb Mid Shine": { reducedMotion: "boolean" },
        Torbs_Shine: { reducedMotion: "boolean" },
    },
    n = {
        Torbs_Multiply: ["SM_Torbs_Multiply"],
        Shards_All_Nitro: ["Shard_Burst"],
        "Orb Mid Shine": ["State Machine 1"],
        Torbs_Shine: ["SM_Torbs"],
    };
function c(e) {
    let { artboard: r = "Torbs_Multiply", stateMachine: o, ...c } = e,
        { status: l, buffer: b } = (0, d.CE)(a),
        u = (0, d.m2)(a);
    return l === d.BW.Loading
        ? null
        : (0, t.jsx)(i.w, {
              ...(u ? { key: "override" } : {}),
              buffer: b,
              artboard: r,
              stateMachine: o,
              artboardProperties: s,
              artboardStateMachines: n,
              ...c,
          });
}
c.riveSrc = a;

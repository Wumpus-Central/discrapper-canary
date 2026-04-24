i.d(t, { E: () => o });
var n = i(627968);
i(64700);
let l =
    "https://cdn.discordapp.com/assets/content/03622d5cf6122c0557116bfd66c48955caf9a146c3dc6dcbd53c94fe0fe58a3a.riv";
var r = i(502377),
    a = i(799226);
let s = {
    Game_Server_Hosting_Main: { reducedMotion: "boolean" },
    c_chara_5: {},
    hytale_gameplay: { reducedMotion: "boolean" },
    c_chara_1: {},
    c_chara_4: {},
    c_chara_2: {},
    c_chara_3: {},
};
function o(e) {
    let { artboard: t = "Game_Server_Hosting_Main", stateMachine: i, ...o } = e,
        { status: d, buffer: c } = (0, a.CE)(l),
        u = (0, a.m2)(l);
    return d === a.BW.Loading
        ? null
        : (0, n.jsx)(r.w, {
              ...(u ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: i,
              artboardProperties: s,
              ...o,
          });
}
o.riveSrc = l;

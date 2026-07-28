"use strict";
n.d(t, { E: () => o });
var i = n(477900);
n(582128);
let r =
    "https://cdn.discordapp.com/assets/content/03622d5cf6122c0557116bfd66c48955caf9a146c3dc6dcbd53c94fe0fe58a3a.riv";
var a = n(502377),
    s = n(799226);
let l = {
    Game_Server_Hosting_Main: { reducedMotion: "boolean" },
    c_chara_5: {},
    hytale_gameplay: { reducedMotion: "boolean" },
    c_chara_1: {},
    c_chara_4: {},
    c_chara_2: {},
    c_chara_3: {},
};
function o(e) {
    let { artboard: t = "Game_Server_Hosting_Main", stateMachine: n, ...o } = e,
        { status: d, buffer: c } = (0, s.CE)(r),
        u = (0, s.m2)(r);
    return d === s.BW.Loading
        ? null
        : (0, i.jsx)(a.w, {
              ...(u ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: l,
              ...o,
          });
}
o.riveSrc = r;

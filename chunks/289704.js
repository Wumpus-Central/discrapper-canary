"use strict";
n.d(t, { E: () => l });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/03622d5cf6122c0557116bfd66c48955caf9a146c3dc6dcbd53c94fe0fe58a3a.riv";
var s = n(594639),
    a = n(105596);
let o = {
    Game_Server_Hosting_Main: { reducedMotion: "boolean" },
    c_chara_5: {},
    hytale_gameplay: { reducedMotion: "boolean" },
    c_chara_1: {},
    c_chara_4: {},
    c_chara_2: {},
    c_chara_3: {},
};
function l(e) {
    let { artboard: t = "Game_Server_Hosting_Main", stateMachine: n, ...l } = e,
        { status: u, buffer: c } = (0, a.CE)(r),
        d = (0, a.m2)(r);
    return u === a.BW.Loading
        ? null
        : (0, i.jsx)(s.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = r;

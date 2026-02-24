"use strict";
n.d(t, { E: () => l });
var r = n(627968);
n(64700);
var i = n(790795),
    s = n(786558),
    a = n(799226);
let o = {
    Game_Server_Hosting_Main: { reducedMotion: "boolean" },
    c_chara_5: {},
    hytale_gameplay: { reducedMotion: "boolean" },
    gameplay_palworld_nozoom: {},
    c_chara_1: {},
    c_chara_4: {},
    c_chara_2: {},
    c_chara_3: {},
};
function l(e) {
    let { artboard: t = "Game_Server_Hosting_Main", stateMachine: n, ...l } = e,
        { status: u, buffer: c } = (0, a.CE)(i.A),
        d = (0, a.m2)(i.A);
    return u === a.BW.Loading
        ? null
        : (0, r.jsx)(s.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = i.A;

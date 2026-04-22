i.d(t, { E: () => o });
var n = i(627968);
i(64700);
var l = i(790795),
    r = i(786558),
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
        { status: d, buffer: c } = (0, a.CE)(l.A),
        _ = (0, a.m2)(l.A);
    return d === a.BW.Loading
        ? null
        : (0, n.jsx)(r.w, {
              ...(_ ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: i,
              artboardProperties: s,
              ...o,
          });
}
o.riveSrc = l.A;

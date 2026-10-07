c.d(e, { E: () => o });
var t = c(477900);
c(582128);
let r =
    "https://cdn.discordapp.com/assets/content/03622d5cf6122c0557116bfd66c48955caf9a146c3dc6dcbd53c94fe0fe58a3a.riv";
var _ = c(845867),
    n = c(799226);
let i = {
        Game_Server_Hosting_Main: { reducedMotion: "boolean" },
        c_chara_5: {},
        hytale_gameplay: { reducedMotion: "boolean" },
        c_chara_1: {},
        c_chara_4: {},
        c_chara_2: {},
        c_chara_3: {},
    },
    h = {
        Game_Server_Hosting_Main: ["SM_Auto", "SM_Main_Int"],
        c_chara_5: ["State Machine 1"],
        hytale_gameplay: ["State Machine 1"],
        c_chara_1: ["State Machine 1"],
        c_chara_4: ["State Machine 1"],
        c_chara_2: ["State Machine 1"],
        c_chara_3: ["State Machine 1"],
    };
function o(a) {
    let { artboard: e = "Game_Server_Hosting_Main", stateMachine: c, ...o } = a,
        { status: d, buffer: s } = (0, n.CE)(r),
        M = (0, n.m2)(r);
    return d === n.BW.Loading
        ? null
        : (0, t.jsx)(_.w, {
              ...(M ? { key: "override" } : {}),
              buffer: s,
              artboard: e,
              stateMachine: c,
              artboardProperties: i,
              artboardStateMachines: h,
              ...o,
          });
}
o.riveSrc = r;

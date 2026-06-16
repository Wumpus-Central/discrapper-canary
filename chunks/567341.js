t.d(e, { Z: () => c });
var a = t(627968);
t(64700);
let o =
    "https://cdn.discordapp.com/assets/content/8a7ac8dc9047bab64168144f5a3b303136a96b175530939355c8612193350419.riv";
var n = t(594639),
    d = t(105596);
let i = { Torbs_Main: {} };
function c(r) {
    let { artboard: e = "Torbs_Main", stateMachine: t, ...c } = r,
        { status: s, buffer: b } = (0, d.CE)(o),
        l = (0, d.m2)(o);
    return s === d.BW.Loading
        ? null
        : (0, a.jsx)(n.w, {
              ...(l ? { key: "override" } : {}),
              buffer: b,
              artboard: e,
              stateMachine: t,
              artboardProperties: i,
              ...c,
          });
}
c.riveSrc = o;

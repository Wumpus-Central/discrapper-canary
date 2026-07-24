t.d(r, { Z: () => n });
var e = t(627968);
t(64700);
let s =
    "https://cdn.discordapp.com/assets/content/8a7ac8dc9047bab64168144f5a3b303136a96b175530939355c8612193350419.riv";
var c = t(502377),
    i = t(799226);
let d = { Torbs_Main: {} };
function n(a) {
    let { artboard: r = "Torbs_Main", stateMachine: t, ...n } = a,
        { status: o, buffer: b } = (0, i.CE)(s),
        p = (0, i.m2)(s);
    return o === i.BW.Loading
        ? null
        : (0, e.jsx)(c.w, {
              ...(p ? { key: "override" } : {}),
              buffer: b,
              artboard: r,
              stateMachine: t,
              artboardProperties: d,
              ...n,
          });
}
n.riveSrc = s;

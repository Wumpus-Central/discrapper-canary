a.d(l, { Z: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/8a7ac8dc9047bab64168144f5a3b303136a96b175530939355c8612193350419.riv";
var n = a(502377),
    i = a(799226);
let r = { Torbs_Main: {} };
function s(e) {
    let { artboard: l = "Torbs_Main", stateMachine: a, ...s } = e,
        { status: d, buffer: u } = (0, i.CE)(o),
        c = (0, i.m2)(o);
    return d === i.BW.Loading
        ? null
        : (0, t.jsx)(n.w, {
              ...(c ? { key: "override" } : {}),
              buffer: u,
              artboard: l,
              stateMachine: a,
              artboardProperties: r,
              ...s,
          });
}
s.riveSrc = o;

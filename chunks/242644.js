a.d(l, { V: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/bee5073bff85cffaf0f4236456029b067925cd9de6742c5bb582f0ce39f1fa49.riv";
var n = a(502377),
    i = a(799226);
let r = { "Icon Unlock": { reducedMotion: "boolean", locked: "boolean", fill: "color" } };
function s(e) {
    let { artboard: l = "Icon Unlock", stateMachine: a, ...s } = e,
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

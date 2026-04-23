a.d(l, { M: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/5ff46e6a38cbffb1450e062ca9e8dcabf8452f6890907b70dc0489fb3ec489de.riv";
var n = a(502377),
    i = a(799226);
let r = { Artboard: {} };
function s(e) {
    let { artboard: l = "Artboard", stateMachine: a, ...s } = e,
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

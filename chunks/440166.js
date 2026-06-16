t.d(e, { M: () => o });
var a = t(627968);
t(64700);
let c =
    "https://cdn.discordapp.com/assets/content/5ff46e6a38cbffb1450e062ca9e8dcabf8452f6890907b70dc0489fb3ec489de.riv";
var d = t(594639),
    s = t(105596);
let i = { Artboard: {} };
function o(r) {
    let { artboard: e = "Artboard", stateMachine: t, ...o } = r,
        { status: b, buffer: n } = (0, s.CE)(c),
        p = (0, s.m2)(c);
    return b === s.BW.Loading
        ? null
        : (0, a.jsx)(d.w, {
              ...(p ? { key: "override" } : {}),
              buffer: n,
              artboard: e,
              stateMachine: t,
              artboardProperties: i,
              ...o,
          });
}
o.riveSrc = c;

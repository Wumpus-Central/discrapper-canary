n.d(t, { u: () => o });
var i = n(627968);
n(64700);
var l = n(999519),
    s = n(786558),
    a = n(799226);
let r = { "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" } };
function o(e) {
    let { artboard: t = "Nitro Wishlist", stateMachine: n, ...o } = e,
        { status: d, buffer: c } = (0, a.CE)(l.A),
        u = (0, a.m2)(l.A);
    return d === a.BW.Loading
        ? null
        : (0, i.jsx)(s.w, {
              ...(u ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: r,
              ...o,
          });
}
o.riveSrc = l.A;

"use strict";
n.d(t, { u: () => d });
var a = n(627968);
n(64700);
var i = n(999519),
    r = n(786558),
    l = n(799226);
let s = { "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" } };
function d(e) {
    let { artboard: t = "Nitro Wishlist", stateMachine: n, ...d } = e,
        { status: o, buffer: c } = (0, l.CE)(i.A),
        u = (0, l.m2)(i.A);
    return o === l.BW.Loading
        ? null
        : (0, a.jsx)(r.w, {
              ...(u ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: s,
              ...d,
          });
}
d.riveSrc = i.A;

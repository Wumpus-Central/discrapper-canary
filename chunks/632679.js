"use strict";
n.d(t, { w: () => l });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/0e8095ebdbf89e1289f83a859a892a5790e8a76949d9bf9bb02e4dfc16190d10.riv";
var s = n(502377),
    a = n(799226);
let o = {
    "Teen Screen Time Illo": {},
    "Gradient Vertical": {},
    "RAW ILLO (Do not deploy)": {},
    "Gradient Horizontal": {},
};
function l(e) {
    let { artboard: t = "Teen Screen Time Illo", stateMachine: n, ...l } = e,
        { status: d, buffer: _ } = (0, a.CE)(r),
        u = (0, a.m2)(r);
    return d === a.BW.Loading
        ? null
        : (0, i.jsx)(s.w, {
              ...(u ? { key: "override" } : {}),
              buffer: _,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = r;

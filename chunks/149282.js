"use strict";
n.d(t, { s: () => l });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/fac02dd925a746a61291e1f604a8affff663e9d8a22cd9b21749991ff745f1f2.riv";
var s = n(594639),
    a = n(105596);
let o = { "STACKED COINS": {}, "SINGLE COIN": {} };
function l(e) {
    let { artboard: t = "STACKED COINS", stateMachine: n, ...l } = e,
        { status: u, buffer: c } = (0, a.CE)(r),
        d = (0, a.m2)(r);
    return u === a.BW.Loading
        ? null
        : (0, i.jsx)(s.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = r;

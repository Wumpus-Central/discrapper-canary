r.d(e, { s: () => i });
var t = r(627968);
r(64700);
let d =
    "https://cdn.discordapp.com/assets/content/fac02dd925a746a61291e1f604a8affff663e9d8a22cd9b21749991ff745f1f2.riv";
var s = r(594639),
    c = r(105596);
let f = { "STACKED COINS": {}, "SINGLE COIN": {} };
function i(a) {
    let { artboard: e = "STACKED COINS", stateMachine: r, ...i } = a,
        { status: n, buffer: o } = (0, c.CE)(d),
        p = (0, c.m2)(d);
    return n === c.BW.Loading
        ? null
        : (0, t.jsx)(s.w, {
              ...(p ? { key: "override" } : {}),
              buffer: o,
              artboard: e,
              stateMachine: r,
              artboardProperties: f,
              ...i,
          });
}
i.riveSrc = d;

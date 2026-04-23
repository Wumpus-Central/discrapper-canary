a.d(t, { m: () => o });
var l = a(627968);
a(64700);
var n = a(980441),
    s = a(786558),
    r = a(799226);
let i = { "Icon Dice": { fill: "color", muted: "boolean" } };
function o(e) {
    let { artboard: t = "Icon Dice", stateMachine: a, ...o } = e,
        { status: c, buffer: d } = (0, r.CE)(n.A),
        u = (0, r.m2)(n.A);
    return c === r.BW.Loading
        ? null
        : (0, l.jsx)(s.w, {
              ...(u ? { key: "override" } : {}),
              buffer: d,
              artboard: t,
              stateMachine: a,
              artboardProperties: i,
              ...o,
          });
}
o.riveSrc = n.A;

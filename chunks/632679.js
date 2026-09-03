n.d(t, { w: () => o });
var i = n(477900);
n(582128);
let r =
    "https://cdn.discordapp.com/assets/content/0e8095ebdbf89e1289f83a859a892a5790e8a76949d9bf9bb02e4dfc16190d10.riv";
var a = n(502377),
    s = n(799226);
let l = {
    "Teen Screen Time Illo": {},
    "Gradient Vertical": {},
    "RAW ILLO (Do not deploy)": {},
    "Gradient Horizontal": {},
};
function o(e) {
    let { artboard: t = "Teen Screen Time Illo", stateMachine: n, ...o } = e,
        { status: d, buffer: c } = (0, s.CE)(r),
        u = (0, s.m2)(r);
    return d === s.BW.Loading
        ? null
        : (0, i.jsx)(a.w, {
              ...(u ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: l,
              ...o,
          });
}
o.riveSrc = r;

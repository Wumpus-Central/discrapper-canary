var E = e(503698),
    u = e.n(E),
    l = e(559949),
    x = e(676279),
    L = e(913563),
    N = e(824994),
    A = e(516064);
let d = {
    [l.x.DEFAULT]: "",
    [l.x.CHERRY_BOMB]: A.u_,
    [l.x.CHICLE]: A.xO,
    [l.x.MUSEO_MODERNO]: A._,
    [l.x.NEO_CASTEL]: A.pN,
    [l.x.PIXELIFY]: A.f,
    [l.x.SINISTRE]: A.yH,
    [l.x.ZILLA_SLAB]: A.FR,
    [l.x.PLAYPEN_SANS]: A.R_,
    [l.x.ORBITRON]: A.yT,
    [l.x.NEW_ROCKER]: A.NX,
    [l.x.KALAM]: A.x4,
    [l.x.HEXAGON]: A.qP,
};
function f(t) {
    return { name: (0, L.A)(t), className: d[t] ?? "" };
}
e.d(
    a,
    {},
    {
        a: function (t) {
            let { displayNameStyles: a, compensateForSafari: e = !0 } = t;
            if (!(0, N.W)({ location: "useDisplayNameStylesFont" }) || null == a) return "";
            let E = f(a.fontId);
            return "" === E.className ? "" : u()(A.zt, E.className, { [A.VM]: e && (0, x.nr)() });
        },
        p: f,
    },
);

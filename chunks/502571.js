(n.r(t), n.d(t, { default: () => _, getAttachmentImageLadderConfig: () => u, parseTreatmentConfig: () => d }));
var i = n(284009),
    r = n.n(i),
    a = n(945810),
    s = n(459830),
    l = n(652215);
let o = { enabled: !1, ladder: s.t0, maxUpscale: 1.1, minSnapDownDpr: 2 };
function d(e) {
    let t = JSON.parse(e),
        n = t.maxUpscale ?? o.maxUpscale;
    r()(
        "number" == typeof n && Number.isFinite(n) && n >= 1 && n <= 1.5,
        "maxUpscale must be a number in [1, %s]",
        1.5,
    );
    let i = t.minSnapDownDpr ?? o.minSnapDownDpr;
    r()(
        "number" == typeof i && Number.isFinite(i) && i >= 1 && i <= 4,
        "minSnapDownDpr must be a number in [1, %s]",
        4,
    );
    let a = t.ladder ?? o.ladder;
    for (let e of (r()(
        Array.isArray(a) && a.length > 0 && a.length <= 32,
        "ladder must be a non-empty array of at most %s rungs",
        32,
    ),
    a))
        r()(Number.isInteger(e) && e >= 16 && e <= l.uJv, "ladder rungs must be integers in [%s, %s]", 16, l.uJv);
    return { enabled: !0, ladder: [...a].sort((e, t) => e - t), maxUpscale: n, minSnapDownDpr: i };
}
let c = (0, a.mj)({
    name: "2026-07-attachment-image-ladder",
    kind: "user",
    defaultConfig: o,
    variations: { 0: o, 1: d },
});
function u(e) {
    let { location: t } = e;
    return c.getConfig({ location: t });
}
let _ = c;

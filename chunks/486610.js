t.d(n, { hO: () => h });
var i = t(435558),
    l = t.n(i),
    r = t(807081),
    a = t(478676),
    s = t.n(a),
    o = t(182490);
let d = {
    ...s().defaultRules.image,
    order: s().defaultRules.link.order - 0.5,
    requiredFirstCharacters: ["!"],
    parse: (e) => ({ type: o.D.TEXT, content: e[0] }),
};
var c = t(247186),
    u = t(999915);
let g = (0, t(551965).A)([
        l().pick(u.Ay.RULES, ["text", "link"]),
        { image: d },
        (0, c.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0, enableEmojiClick: !1, emojiFocusable: !1 }),
    ]),
    m = r.aV(g);
function h(e, n) {
    return m(e, !0, { allowLinks: !0, ...n });
}
r.X(g);

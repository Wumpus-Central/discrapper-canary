n.d(t, { hO: () => x });
var i = n(435558),
    l = n.n(i),
    r = n(807081),
    a = n(478676),
    s = n.n(a),
    o = n(182490);
let c = {
    ...s().defaultRules.image,
    order: s().defaultRules.link.order - 0.5,
    requiredFirstCharacters: ["!"],
    parse: (e) => ({ type: o.D.TEXT, content: e[0] }),
};
var d = n(247186),
    u = n(999915);
let g = (0, n(551965).A)([
        l().pick(u.Ay.RULES, ["text", "link"]),
        { image: c },
        (0, d.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0, enableEmojiClick: !1, emojiFocusable: !1 }),
    ]),
    m = r.aV(g);
function x(e, t) {
    return m(e, !0, { allowLinks: !0, ...t });
}
r.X(g);

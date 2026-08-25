n.d(t, { hO: () => h });
var i = n(435558),
    r = n.n(i),
    l = n(807081),
    a = n(478676),
    s = n.n(a),
    o = n(182490);
let c = {
    ...s().defaultRules.image,
    order: s().defaultRules.link.order - 0.5,
    requiredFirstCharacters: ["!"],
    parse: (e) => ({ type: o.D.TEXT, content: e[0] }),
};
var d = n(480084),
    u = n(29814);
let g = (0, n(551965).A)([
        r().pick(u.Ay.RULES, ["text", "link"]),
        { image: c },
        (0, d.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0, enableEmojiClick: !1, emojiFocusable: !1 }),
    ]),
    f = l.aV(g);
function h(e, t) {
    return f(e, !0, { allowLinks: !0, ...t });
}
l.X(g);

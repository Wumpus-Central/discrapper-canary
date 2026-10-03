n.d(t, { hO: () => p });
var i = n(435558),
    r = n.n(i),
    l = n(807081),
    a = n(478676),
    s = n.n(a),
    o = n(182490);
let u = {
    ...s().defaultRules.image,
    order: s().defaultRules.link.order - 0.5,
    requiredFirstCharacters: ["!"],
    parse: (e) => ({ type: o.D.TEXT, content: e[0] }),
};
var d = n(247186),
    c = n(999915);
let f = (0, n(551965).A)([
        r().pick(c.Ay.RULES, ["text", "link"]),
        { image: u },
        (0, d.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0, enableEmojiClick: !1, emojiFocusable: !1 }),
    ]),
    h = l.aV(f);
function p(e, t) {
    return h(e, !0, { allowLinks: !0, ...t });
}
l.X(f);

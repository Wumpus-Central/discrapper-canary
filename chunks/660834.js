"use strict";
n.d(t, { Ay: () => A, N8: () => _, Q$: () => p });
var i = n(627968);
n(64700);
var s = n(735438),
    l = n(311907),
    r = n(397927),
    a = n(134413),
    o = n(221950),
    d = n(179534),
    c = n(997509),
    u = n(555337),
    m = n(652215),
    g = n(985018),
    x = n(366277);
function h(e) {
    if (null == e) return !1;
    let t = e.features.has(m.GuildFeatures.COMMUNITY),
        n = e.features.has(m.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    return t || n;
}
function _() {
    let e = u.A.getProps().guild;
    null != e && (h(e) ? (c.A.close(), (0, o.aZ)(e.id)) : c.A.open(e.id, m.BEX.MEMBERS));
}
function p() {
    let e = h((0, l.bG)([u.A], () => u.A.getProps().guild, []));
    return (0, i.jsxs)("div", {
        className: x.q,
        children: [
            (0, i.jsx)("div", { children: g.intl.string(g.t["9Oq93m"]) }),
            e && (0, i.jsx)(r.tfB, { size: "xs", color: "currentColor", className: x.w }),
        ],
    });
}
function A() {
    let { guild: e } = (0, l.bG)([u.A], () => u.A.getProps(), [], s.isEqual),
        t = e?.id ?? m.dJq;
    return (0, a.fw)(t) ? (0, i.jsx)(d.A, { guildId: t }) : null;
}

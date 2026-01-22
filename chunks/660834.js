n.d(t, {
    Ay: () => h,
    N8: () => p,
    Q$: () => x,
});
var r = n(627968);
n(64700);
var i = n(735438),
    l = n(311907),
    s = n(397927),
    a = n(134413),
    c = n(221950),
    o = n(179534),
    d = n(997509),
    u = n(555337),
    f = n(652215),
    g = n(985018),
    b = n(118856);

function m(e) {
    if (null == e) return !1;
    let t = e.features.has(f.GuildFeatures.COMMUNITY),
        n = e.features.has(f.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    return t || n;
}

function p() {
    let e = u.A.getProps().guild;
    null != e && (m(e) ? (d.A.close(), (0, c.aZ)(e.id)) : d.A.open(e.id, f.BEX.MEMBERS));
}

function x() {
    let e = m((0, l.bG)([u.A], () => u.A.getProps().guild, []));
    return (0, r.jsxs)("div", {
        className: b.q,
        children: [
            (0, r.jsx)("div", {
                children: g.intl.string(g.t["9Oq93m"]),
            }),
            e &&
                (0, r.jsx)(s.tfB, {
                    size: "xs",
                    color: "currentColor",
                    className: b.w,
                }),
        ],
    });
}

function h() {
    var e;
    let { guild: t } = (0, l.bG)([u.A], () => u.A.getProps(), [], i.isEqual),
        n = null != (e = null == t ? void 0 : t.id) ? e : f.dJq;
    return (0, a.fw)(n)
        ? (0, r.jsx)(o.A, {
              guildId: n,
          })
        : null;
}

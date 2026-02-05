"use strict";
n.d(t, { Ay: () => A, CG: () => E, J$: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(573435),
    l = n(946274),
    u = n(145497),
    c = n(179283),
    d = n(123213),
    _ = n(86376),
    f = n(649640),
    p = n(339984),
    h = n(838934);
function m(e) {
    let { profile: t, className: n } = e,
        i = (0, f._3)(t);
    return null != i
        ? (0, r.jsx)("div", { className: a()(n, h.vK), style: { background: i } })
        : (0, r.jsx)(g, { profile: t, className: n });
}
function g(e) {
    let { profile: t, className: n } = e,
        i = (0, f.b2)(),
        s = (0, f.aG)({ profile: t, defaultColor: i.hex(), forceDefaultColor: null != t.brandColorPrimary }),
        o = t.brandColorPrimary ?? s;
    return (0, r.jsx)("div", { className: a()(n, h.vK), style: { background: (0, f.n6)(o) } });
}
function E(e) {
    let { profile: t, onIconChange: i } = e;
    if (null == i)
        return (0, r.jsx)("div", {
            className: h.H,
            children: (0, r.jsx)(o.Ay, {
                mask: o.hW.CLAN_ICON,
                width: 70,
                height: 70,
                children: (0, r.jsx)("div", {
                    className: h.R3,
                    children: (0, r.jsx)(u.j, { guildId: t.id, guildName: t.name, guildIcon: t.icon, iconSize: 64 }),
                }),
            }),
        });
    function c(e, t) {
        null != i &&
            (0, s.mMO)(async () => {
                let { default: a } = await Promise.all([n.e("35929"), n.e("74571"), n.e("90017"), n.e("97932")]).then(
                    n.bind(n, 142630),
                );
                return (n) =>
                    (0, r.jsx)(a, {
                        uploadType: p.HL.GUILD_ICON,
                        imageUri: e,
                        file: t,
                        onCrop: (e) => {
                            let { imageUri: t } = e;
                            return i(t);
                        },
                        ...n,
                    });
            }, {});
    }
    return (0, r.jsx)("div", {
        className: h.H,
        children: (0, r.jsx)(s.vN3, {
            within: !0,
            children: (0, r.jsx)(o.Ay, {
                mask: o.hW.CLAN_ICON,
                width: 70,
                height: 70,
                children: (0, r.jsxs)("div", {
                    className: a()(h.R3, h.vk),
                    children: [
                        (0, r.jsx)(u.j, { guildId: t.id, guildName: t.name, guildIcon: t.icon, iconSize: 64 }),
                        (0, r.jsx)("div", { className: h.Lw }),
                        (0, r.jsx)(s.R2l, { size: "custom", className: h.QY, width: 20, height: 20, color: "white" }),
                        (0, r.jsx)(l.Ay, { tabIndex: 0, onChange: c }),
                    ],
                }),
            }),
        }),
    });
}
function A(e) {
    let {
            profile: t,
            onIconChange: n,
            className: i,
            disableCTA: s,
            CTAOverride: o,
            onClose: l,
            disableGuildNameClick: u,
        } = e,
        f = null;
    return (
        null != o ? (f = o) : s || (f = (0, r.jsx)(d.A, { profile: t, onComplete: l })),
        (0, r.jsxs)("div", {
            className: a()(h.kL, i),
            children: [
                (0, r.jsx)(m, { profile: t }),
                (0, r.jsx)(E, { onIconChange: n, profile: t }),
                (0, r.jsx)(_.A, { profile: t, disableGuildNameClick: u }),
                (0, r.jsx)(c.P, { profile: t }),
                null != f && (0, r.jsx)("div", { className: h.UD, children: f }),
            ],
        })
    );
}

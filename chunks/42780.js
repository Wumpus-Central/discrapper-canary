"use strict";
n.d(t, { Ay: () => A, CG: () => g, J$: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(573435),
    l = n(946274),
    u = n(145497),
    c = n(179283),
    d = n(123213),
    _ = n(86376),
    f = n(649640),
    p = n(339984),
    h = n(912648);
function m(e) {
    let { profile: t, className: n } = e,
        i = (0, f._3)(t);
    return null != i
        ? (0, r.jsx)("div", { className: s()(n, h.vK), style: { background: i } })
        : (0, r.jsx)(E, { profile: t, className: n });
}
function E(e) {
    let { profile: t, className: n } = e,
        i = (0, f.b2)(),
        a = (0, f.aG)({ profile: t, defaultColor: i.hex(), forceDefaultColor: null != t.brandColorPrimary }),
        o = t.brandColorPrimary ?? a;
    return (0, r.jsx)("div", { className: s()(n, h.vK), style: { background: (0, f.n6)(o) } });
}
function g(e) {
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
            (0, a.mMO)(async () => {
                let { default: s } = await Promise.all([
                    n.e("81028"),
                    n.e("79149"),
                    n.e("35929"),
                    n.e("74571"),
                    n.e("82563"),
                ]).then(n.bind(n, 142630));
                return (n) =>
                    (0, r.jsx)(s, {
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
        children: (0, r.jsx)(a.vN3, {
            within: !0,
            children: (0, r.jsx)(o.Ay, {
                mask: o.hW.CLAN_ICON,
                width: 70,
                height: 70,
                children: (0, r.jsxs)("div", {
                    className: s()(h.R3, h.vk),
                    children: [
                        (0, r.jsx)(u.j, { guildId: t.id, guildName: t.name, guildIcon: t.icon, iconSize: 64 }),
                        (0, r.jsx)("div", { className: h.Lw }),
                        (0, r.jsx)(a.R2l, { size: "custom", className: h.QY, width: 20, height: 20, color: "white" }),
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
            disableCTA: a,
            CTAOverride: o,
            onClose: l,
            disableGuildNameClick: u,
        } = e,
        f = null;
    return (
        null != o ? (f = o) : a || (f = (0, r.jsx)(d.A, { profile: t, onComplete: l })),
        (0, r.jsxs)("div", {
            className: s()(h.kL, i),
            children: [
                (0, r.jsx)(m, { profile: t }),
                (0, r.jsx)(g, { onIconChange: n, profile: t }),
                (0, r.jsx)(_.A, { profile: t, disableGuildNameClick: u }),
                (0, r.jsx)(c.P, { profile: t }),
                null != f && (0, r.jsx)("div", { className: h.UD, children: f }),
            ],
        })
    );
}

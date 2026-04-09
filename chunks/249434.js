"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(946274),
    o = n(555337),
    d = n(339984),
    c = n(985018),
    u = n(419403);
function m(e) {
    let { profile: t, handleIconChange: l, canManageGuild: o } = e,
        m = s.useCallback(() => {
            l(null);
        }, [l]),
        g = s.useCallback(
            (e, t) => {
                (0, r.mMO)(async () => {
                    let { default: s } = await Promise.all([
                        n.e("79149"),
                        n.e("35929"),
                        n.e("74571"),
                        n.e("9992"),
                    ]).then(n.bind(n, 142630));
                    return (n) =>
                        (0, i.jsx)(s, {
                            uploadType: d.HL.GUILD_ICON,
                            imageUri: e,
                            file: t,
                            onCrop: (e) => {
                                let { imageUri: t } = e;
                                return l(t);
                            },
                            ...n,
                        });
                }, {});
            },
            [l],
        );
    return (0, i.jsxs)("div", {
        className: u.Uo,
        children: [
            (0, i.jsx)(r.vN3, {
                within: !0,
                children: (0, i.jsxs)("div", {
                    className: u.UD,
                    children: [
                        (0, i.jsx)(r.Button, {
                            tabIndex: -1,
                            size: "sm",
                            variant: "primary",
                            disabled: !o,
                            text: c.intl.string(c.t.r3JdsT),
                        }),
                        (0, i.jsx)(a.Ay, { tabIndex: 0, onChange: g, disabled: !o }),
                    ],
                }),
            }),
            null != t.icon
                ? (0, i.jsx)(r.Button, {
                      variant: "critical-secondary",
                      size: "sm",
                      text: c.intl.string(c.t.x8AlTm),
                      onClick: m,
                      disabled: !o,
                  })
                : null,
        ],
    });
}
function g(e) {
    let { profile: t, canManageGuild: n, onIconChange: s } = e,
        a = (0, l.bG)([o.A], () => o.A.getError("icon"));
    return (0, i.jsx)("section", {
        className: u.kL,
        children: (0, i.jsx)(r.D0$, {
            label: c.intl.string(c.t.FkQnxJ),
            description: c.intl.string(c.t.KjkA0W),
            errorMessage: a,
            children: (0, i.jsx)(m, { profile: t, canManageGuild: n, handleIconChange: s }),
        }),
    });
}

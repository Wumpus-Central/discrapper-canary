"use strict";
n.d(t, { L: () => A });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(539895),
    a = n(844330),
    o = n(253932),
    c = n(578746),
    d = n(954571),
    u = n(960736),
    h = n(652215),
    _ = n(985018),
    p = n(190359);
let g = () => (0, i.jsx)("div", { className: p.m });
function m(e) {
    let { label: t, children: n } = e;
    return (0, i.jsxs)(r.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, i.jsx)(r.Text, { variant: "text-sm/medium", color: "text-default", children: t }), n],
    });
}
function f(e) {
    let { label: t, checked: n, onChange: s } = e;
    return (0, i.jsxs)(r.BJc, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, i.jsx)(r.Text, { variant: "text-sm/medium", color: "text-default", children: t }),
            (0, i.jsx)(c.Ay, { value: n, onChange: s, title: "" }),
        ],
    });
}
let A = () => {
    let e = o.tz.useSetting(),
        {
            nickname: t,
            dmsAllowed: n,
            showActivity: c,
            setNickname: p,
            setDmsAllowed: A,
            setShowActivity: E,
            guildId: x,
            inviteCode: v,
        } = (0, u.lD)(),
        I = l.A.getProps().invite?.is_nickname_changeable,
        N = s.useCallback(() => {
            d.default.track(h.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, { guild_id: x, invite_code: v });
        }, [x, v]);
    return (0, i.jsxs)(a.A, {
        icon: (0, i.jsx)(r.Zes, { size: "refresh_sm" }),
        title: _.intl.string(_.t["A5wHQ/"]),
        subtitle: _.intl.string(_.t.UKCSEd),
        onOpen: N,
        maxHeight: I ? 220 : 130,
        children: [
            I &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m, {
                            label: _.intl.string(_.t.me1lRk),
                            children: (0, i.jsx)(r.ksK, {
                                placeholder: _.intl.string(_.t["09Q8yp"]),
                                maxLength: h.d0r,
                                value: t,
                                onChange: p,
                            }),
                        }),
                        (0, i.jsx)(g, {}),
                    ],
                }),
            (0, i.jsx)(f, { label: _.intl.string(_.t["/2ed37"]), checked: n, onChange: A }),
            (0, i.jsx)(g, {}),
            e && (0, i.jsx)(f, { label: _.intl.string(_.t.bN4m1G), checked: c, onChange: E }),
        ],
    });
};

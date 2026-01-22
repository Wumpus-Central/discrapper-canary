n.d(t, {
    L: () => x,
});
var r = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(539895),
    a = n(844330),
    o = n(253932),
    c = n(578746),
    u = n(954571),
    d = n(960736),
    h = n(652215),
    f = n(985018),
    p = n(190359);
let g = () =>
    (0, r.jsx)("div", {
        className: p.m,
    });

function m(e) {
    let { label: t, children: n } = e;
    return (0, r.jsxs)(s.BJc, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: t,
            }),
            n,
        ],
    });
}

function A(e) {
    let { label: t, checked: n, onChange: i } = e;
    return (0, r.jsxs)(s.BJc, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: t,
            }),
            (0, r.jsx)(c.Ay, {
                value: n,
                onChange: i,
                title: "",
            }),
        ],
    });
}
let x = () => {
    var e;
    let t = o.tz.useSetting(),
        {
            nickname: n,
            dmsAllowed: c,
            showActivity: p,
            setNickname: x,
            setDmsAllowed: _,
            setShowActivity: E,
            guildId: b,
            inviteCode: v,
        } = (0, d.lD)(),
        j = null == (e = l.A.getProps().invite) ? void 0 : e.is_nickname_changeable,
        y = i.useCallback(() => {
            u.default.track(h.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                guild_id: b,
                invite_code: v,
            });
        }, [b, v]);
    return (0, r.jsxs)(a.A, {
        icon: (0, r.jsx)(s.Zes, {
            size: "refresh_sm",
        }),
        title: f.intl.string(f.t["A5wHQ/"]),
        subtitle: f.intl.string(f.t.UKCSEd),
        onOpen: y,
        maxHeight: j ? 220 : 130,
        children: [
            j &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(m, {
                            label: f.intl.string(f.t.me1lRk),
                            children: (0, r.jsx)(s.ksK, {
                                placeholder: f.intl.string(f.t["09Q8yp"]),
                                maxLength: h.d0r,
                                value: n,
                                onChange: x,
                            }),
                        }),
                        (0, r.jsx)(g, {}),
                    ],
                }),
            (0, r.jsx)(A, {
                label: f.intl.string(f.t["/2ed37"]),
                checked: c,
                onChange: _,
            }),
            (0, r.jsx)(g, {}),
            t &&
                (0, r.jsx)(A, {
                    label: f.intl.string(f.t.bN4m1G),
                    checked: p,
                    onChange: E,
                }),
        ],
    });
};

t.d(l, { R: () => v });
var n = t(54381),
    i = t(473749),
    a = t(481060),
    r = t(590965),
    s = t(590149),
    u = t(695346),
    c = t(51331),
    d = t(626135),
    o = t(978986),
    m = t(981631),
    x = t(388032),
    g = t(181174);
let h = () => (0, n.jsx)("div", { className: g.separator });
function j(e) {
    let { label: l, children: t } = e;
    return (0, n.jsxs)(a.Kqy, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, n.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: l,
            }),
            t,
        ],
    });
}
function p(e) {
    let { label: l, checked: t, onChange: i } = e;
    return (0, n.jsxs)(a.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, n.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: l,
            }),
            (0, n.jsx)(c.ZP, {
                value: t,
                onChange: i,
                title: "",
            }),
        ],
    });
}
let v = () => {
    var e;
    let l = u.G6.useSetting(),
        {
            nickname: t,
            dmsAllowed: c,
            showActivity: g,
            setNickname: v,
            setDmsAllowed: f,
            setShowActivity: N,
            guildId: E,
            inviteCode: _,
        } = (0, o.XW)(),
        S = null == (e = r.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        Z = i.useCallback(() => {
            d.default.track(m.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                guild_id: E,
                invite_code: _,
            });
        }, [E, _]);
    return (0, n.jsxs)(s.Z, {
        icon: (0, n.jsx)(a.ewm, { size: "refresh_sm" }),
        title: x.intl.string(x.t["A5wHQ/"]),
        subtitle: x.intl.string(x.t.UKCSEd),
        onOpen: Z,
        maxHeight: S ? 220 : 130,
        children: [
            S &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(j, {
                            label: x.intl.string(x.t.me1lRk),
                            children: (0, n.jsx)(a.oil, {
                                placeholder: x.intl.string(x.t["09Q8yp"]),
                                maxLength: m.l$U,
                                value: t,
                                onChange: v,
                            }),
                        }),
                        (0, n.jsx)(h, {}),
                    ],
                }),
            (0, n.jsx)(p, {
                label: x.intl.string(x.t["/2ed37"]),
                checked: c,
                onChange: f,
            }),
            (0, n.jsx)(h, {}),
            l &&
                (0, n.jsx)(p, {
                    label: x.intl.string(x.t.bN4m1G),
                    checked: g,
                    onChange: N,
                }),
        ],
    });
};

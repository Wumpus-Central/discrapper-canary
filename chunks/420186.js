n.d(t, { R: () => x });
var r = n(54381),
    i = n(473749),
    s = n(481060),
    l = n(590965),
    a = n(590149),
    o = n(695346),
    c = n(51331),
    u = n(626135),
    d = n(978986),
    h = n(981631),
    g = n(388032),
    m = n(181174);
let p = () => (0, r.jsx)("div", { className: m.separator });
function f(e) {
    let { label: t, children: n } = e;
    return (0, r.jsxs)(s.Kqy, {
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
function _(e) {
    let { label: t, checked: n, onChange: i } = e;
    return (0, r.jsxs)(s.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: t,
            }),
            (0, r.jsx)(c.ZP, {
                value: n,
                onChange: i,
                title: "",
            }),
        ],
    });
}
let x = () => {
    var e;
    let t = o.G6.useSetting(),
        {
            nickname: n,
            dmsAllowed: c,
            showActivity: m,
            setNickname: x,
            setDmsAllowed: E,
            setShowActivity: v,
            guildId: j,
            inviteCode: b,
        } = (0, d.XW)(),
        I = null == (e = l.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        N = i.useCallback(() => {
            u.default.track(h.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                guild_id: j,
                invite_code: b,
            });
        }, [j, b]);
    return (0, r.jsxs)(a.Z, {
        icon: (0, r.jsx)(s.ewm, { size: "refresh_sm" }),
        title: g.intl.string(g.t["A5wHQ/"]),
        subtitle: g.intl.string(g.t.UKCSEd),
        onOpen: N,
        maxHeight: I ? 220 : 130,
        children: [
            I &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f, {
                            label: g.intl.string(g.t.me1lRk),
                            children: (0, r.jsx)(s.oil, {
                                placeholder: g.intl.string(g.t["09Q8yp"]),
                                maxLength: h.l$U,
                                value: n,
                                onChange: x,
                            }),
                        }),
                        (0, r.jsx)(p, {}),
                    ],
                }),
            (0, r.jsx)(_, {
                label: g.intl.string(g.t["/2ed37"]),
                checked: c,
                onChange: E,
            }),
            (0, r.jsx)(p, {}),
            t &&
                (0, r.jsx)(_, {
                    label: g.intl.string(g.t.bN4m1G),
                    checked: m,
                    onChange: v,
                }),
        ],
    });
};

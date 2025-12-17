n.d(t, { R: () => _ });
var r = n(54381),
    i = n(473749),
    s = n(481060),
    a = n(590965),
    l = n(590149),
    o = n(695346),
    c = n(51331),
    u = n(626135),
    d = n(978986),
    h = n(981631),
    f = n(388032),
    g = n(804665);
let m = () => (0, r.jsx)("div", { className: g.separator });
function p(e) {
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
function x(e) {
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
let _ = () => {
    var e;
    let t = o.G6.useSetting(),
        {
            nickname: n,
            dmsAllowed: c,
            showActivity: g,
            setNickname: _,
            setDmsAllowed: E,
            setShowActivity: v,
            guildId: b,
            inviteCode: j,
        } = (0, d.XW)(),
        I = null == (e = a.Z.getProps().invite) ? void 0 : e.is_nickname_changeable,
        N = i.useCallback(() => {
            u.default.track(h.rMx.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                guild_id: b,
                invite_code: j,
            });
        }, [b, j]);
    return (0, r.jsxs)(l.Z, {
        icon: (0, r.jsx)(s.ewm, { size: "refresh_sm" }),
        title: f.intl.string(f.t["A5wHQ/"]),
        subtitle: f.intl.string(f.t.UKCSEd),
        onOpen: N,
        maxHeight: I ? 220 : 130,
        children: [
            I &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p, {
                            label: f.intl.string(f.t.me1lRk),
                            children: (0, r.jsx)(s.oil, {
                                placeholder: f.intl.string(f.t["09Q8yp"]),
                                maxLength: h.l$U,
                                value: n,
                                onChange: _,
                            }),
                        }),
                        (0, r.jsx)(m, {}),
                    ],
                }),
            (0, r.jsx)(x, {
                label: f.intl.string(f.t["/2ed37"]),
                checked: c,
                onChange: E,
            }),
            (0, r.jsx)(m, {}),
            t &&
                (0, r.jsx)(x, {
                    label: f.intl.string(f.t.bN4m1G),
                    checked: g,
                    onChange: v,
                }),
        ],
    });
};

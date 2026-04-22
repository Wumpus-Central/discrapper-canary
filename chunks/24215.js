l.d(t, { L: () => N });
var n = l(627968),
    i = l(64700),
    a = l(331322),
    s = l(834730),
    r = l(625903),
    u = l(292666),
    c = l(539895),
    d = l(844330),
    o = l(253932),
    m = l(650832),
    g = l(954571),
    h = l(960736),
    x = l(652215),
    j = l(985018),
    A = l(353442);
let E = () => (0, n.jsx)("div", { className: A.m });
function _(e) {
    let { label: t, children: l } = e;
    return (0, n.jsxs)(a.B, {
        direction: "vertical",
        gap: 4,
        children: [(0, n.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", children: t }), l],
    });
}
function p(e) {
    let { label: t, checked: l, onChange: i } = e;
    return (0, n.jsxs)(a.B, {
        direction: "horizontal",
        justify: "space-between",
        align: "center",
        children: [
            (0, n.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", children: t }),
            (0, n.jsx)(m.Ay, { value: l, onChange: i, title: "" }),
        ],
    });
}
let N = () => {
    let e = o.tz.useSetting(),
        {
            nickname: t,
            dmsAllowed: l,
            showActivity: a,
            setNickname: s,
            setDmsAllowed: m,
            setShowActivity: A,
            guildId: N,
            inviteCode: v,
        } = (0, h.lD)(),
        f = c.A.getProps().invite?.is_nickname_changeable,
        S = i.useCallback(() => {
            g.default.track(x.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, { guild_id: N, invite_code: v });
        }, [N, v]);
    return (0, n.jsxs)(d.A, {
        icon: (0, n.jsx)(r.Z, { size: "refresh_sm" }),
        title: j.intl.string(j.t["A5wHQ/"]),
        subtitle: j.intl.string(j.t.UKCSEd),
        onOpen: S,
        maxHeight: f ? 220 : 130,
        children: [
            f &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(_, {
                            label: j.intl.string(j.t.me1lRk),
                            children: (0, n.jsx)(u.k, {
                                placeholder: j.intl.string(j.t["09Q8yp"]),
                                maxLength: x.d0r,
                                value: t,
                                onChange: s,
                            }),
                        }),
                        (0, n.jsx)(E, {}),
                    ],
                }),
            (0, n.jsx)(p, { label: j.intl.string(j.t["/2ed37"]), checked: l, onChange: m }),
            (0, n.jsx)(E, {}),
            e && (0, n.jsx)(p, { label: j.intl.string(j.t.bN4m1G), checked: a, onChange: A }),
        ],
    });
};

n.d(a, { default: () => P }), n(321073);
var e = n(627968),
    s = n(64700),
    i = n(224640),
    r = n(20742),
    l = n(430993),
    o = n(696208),
    c = n(311907),
    d = n(192308),
    m = n(761508),
    g = n(821609),
    x = n(509434),
    u = n(71393),
    h = n(576705),
    v = n(853742),
    j = n(728645),
    p = n(253913),
    N = n(652215),
    f = n(49999),
    S = n(985018),
    C = n(789051);
function P(t) {
    let { guildId: a, shouldUpsellCreation: P, transitionState: y, onClose: A } = t,
        b = (0, c.bG)([u.A], () => u.A.getGuild(a), [a]),
        k = (0, c.bG)([h.A], () => h.A.can(N.xBc.MANAGE_CHANNELS, b)),
        I = [
            { id: 0, name: S.intl.string(S.t.HTA517) },
            { id: 1, name: S.intl.string(S.t["IHjjY/"]) },
            { id: 2, name: S.intl.string(S.t.x3drh1) },
        ],
        [E, T] = s.useState(0),
        H = [
            {
                variant: P ? "secondary" : "primary",
                text: P ? S.intl.string(S.t.TulDPl) : S.intl.string(S.t["NX+WJN"]),
                onClick: () => A(f.i.SECONDARY),
            },
        ];
    return (
        P &&
            H.push({
                variant: "primary",
                text: S.intl.string(S.t["1X8SK/"]),
                onClick: () => {
                    (0, d.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("64233"), n.e("40988")]).then(n.bind(n, 409200));
                        return (n) =>
                            (0, e.jsx)(t, {
                                ...n,
                                channelType: N.rbe.GUILD_FORUM,
                                guildId: a,
                                prefillChannelName: P ? S.intl.string(S.t["5z1Xat"]) : void 0,
                            });
                    }),
                        A(f.i.PRIMARY);
                },
            }),
        (0, e.jsxs)(i.d, {
            transitionState: y,
            size: "xxl",
            onClose: async () => await A(),
            children: [
                (0, e.jsx)(r.rQ, { title: S.intl.string(S.t["6S6WCQ"]), subtitle: S.intl.string(S.t.I2BA8K) }),
                (0, e.jsxs)(l.c, {
                    children: [
                        (0, e.jsx)(m.V, {
                            selectedItem: E,
                            type: "top",
                            onItemSelect: (t) => {
                                T(t), (0, v.Bd)({ forumDemoId: t });
                            },
                            className: C._,
                            children: I.map((t, a) => (0, e.jsx)(m.V.Item, { id: a, children: t.name }, a)),
                        }),
                        (0, e.jsx)(j.A, { id: E }),
                    ],
                }),
                k &&
                    (0, e.jsx)(o.H, {
                        leading: (0, e.jsx)(g.$, {
                            variant: "secondary",
                            text: S.intl.string(S.t.hvVgAZ),
                            icon: x.I,
                            iconPosition: "end",
                            role: "link",
                            onClick: () => {
                                open(p.X_);
                            },
                        }),
                        actions: H,
                    }),
            ],
        })
    );
}

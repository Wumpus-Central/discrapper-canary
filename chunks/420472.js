a.d(e, { default: () => p }), a(321073);
var n = a(627968),
    s = a(64700),
    i = a(158954),
    r = a(311907),
    l = a(397927),
    o = a(71393),
    c = a(576705),
    d = a(853742),
    m = a(728645),
    g = a(253913),
    x = a(652215),
    u = a(49999),
    h = a(985018),
    v = a(864562);
function p(t) {
    let { guildId: e, shouldUpsellCreation: p, transitionState: j, onClose: N } = t,
        f = (0, r.bG)([o.A], () => o.A.getGuild(e), [e]),
        C = (0, r.bG)([c.A], () => c.A.can(x.xBc.MANAGE_CHANNELS, f)),
        S = [
            { id: 0, name: h.intl.string(h.t.HTA517) },
            { id: 1, name: h.intl.string(h.t["IHjjY/"]) },
            { id: 2, name: h.intl.string(h.t.x3drh1) },
        ],
        [_, P] = s.useState(0),
        T = [
            {
                variant: p ? "secondary" : "primary",
                text: p ? h.intl.string(h.t.TulDPl) : h.intl.string(h.t["NX+WJN"]),
                onClick: () => N(u.i.SECONDARY),
            },
        ];
    return (
        p &&
            T.push({
                variant: "primary",
                text: h.intl.string(h.t["1X8SK/"]),
                onClick: () => {
                    (0, l.mMO)(async () => {
                        let { default: t } = await Promise.all([a.e("64233"), a.e("9743")]).then(a.bind(a, 409200));
                        return (a) =>
                            (0, n.jsx)(t, {
                                ...a,
                                channelType: x.rbe.GUILD_FORUM,
                                guildId: e,
                                prefillChannelName: p ? h.intl.string(h.t["5z1Xat"]) : void 0,
                            });
                    }),
                        N(u.i.PRIMARY);
                },
            }),
        (0, n.jsxs)(i.dWK, {
            transitionState: j,
            size: "xxl",
            onClose: async () => await N(),
            children: [
                (0, n.jsx)(i.rQ0, { title: h.intl.string(h.t["6S6WCQ"]), subtitle: h.intl.string(h.t.I2BA8K) }),
                (0, n.jsxs)(i.cwr, {
                    children: [
                        (0, n.jsx)(l.VQ0, {
                            selectedItem: _,
                            type: "top",
                            onItemSelect: (t) => {
                                P(t), (0, d.Bd)({ forumDemoId: t });
                            },
                            className: v._,
                            children: S.map((t, e) => (0, n.jsx)(l.VQ0.Item, { id: e, children: t.name }, e)),
                        }),
                        (0, n.jsx)(m.A, { id: _ }),
                    ],
                }),
                C &&
                    (0, n.jsx)(i.H7u, {
                        leading: (0, n.jsx)(l.Button, {
                            variant: "secondary",
                            text: h.intl.string(h.t.hvVgAZ),
                            icon: l.I9m,
                            iconPosition: "end",
                            role: "link",
                            onClick: () => {
                                open(g.X_);
                            },
                        }),
                        actions: T,
                    }),
            ],
        })
    );
}

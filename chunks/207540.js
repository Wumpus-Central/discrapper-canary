n.r(e), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    d = n(481060),
    a = n(933557),
    u = n(156699),
    s = n(734893),
    o = n(693196),
    _ = n(66999),
    E = n(575830),
    c = n(554747),
    I = n(434404),
    T = n(144140),
    g = n(314897),
    p = n(430824),
    m = n(496675),
    U = n(981631),
    C = n(388032),
    D = n(43986);
e.default = (t) => {
    let { channel: e, onClose: n, onConfirm: G, transitionState: L } = t,
        f = (0, a.ZP)(e, !0),
        N = e.id,
        S = e.isForumPost(),
        y = (0, r.e7)([p.Z], () => p.Z.getGuild(e.getGuildId())),
        O = (0, c.u1)(N),
        { isSubscriptionGated: v } = (0, _.Z)(e.id),
        h = (0, E.Z)(y, e),
        [A, Z] = l.useState(),
        z = (0, r.e7)([g.default], () => e.isOwner(g.default.getId()), [e]),
        M = (0, r.e7)([m.Z], () => m.Z.can(e.isThread() ? U.Plq.MANAGE_THREADS : U.Plq.MANAGE_CHANNELS, e), [e]),
        P = (0, r.e7)(
            [T.Z],
            () => {
                var t;
                return null !== (t = T.Z.getCount(e.id)) && void 0 !== t ? t : 0;
            },
            [e.id]
        ),
        H = S && (M || (z && P < 1)),
        R = O.length > 0 && (e.type === U.d4z.GUILD_VOICE || e.type === U.d4z.GUILD_STAGE_VOICE);
    if (
        (l.useEffect(() => {
            (async () => {
                if (!(await (0, u.C)(e.getGuildId(), N))) {
                    Z(s.j.DEFAULT);
                    return;
                }
                let t = await (0, o.T)(e.getGuildId(), N);
                if (null != t) {
                    Z(t);
                    return;
                }
            })();
        }, [e, N]),
        null != A)
    ) {
        let t;
        let e = C.intl.string(C.t.iWlB6u);
        return (
            (t = A === s.j.TODO ? C.t['/rjozM'] : A === s.j.RESOURCE ? C.t.Nf5pt7 : C.t.ajiBwM),
            (0, i.jsxs)(d.ModalRoot, {
                transitionState: L,
                'aria-label': C.intl.string(C.t['TY/V+P']),
                children: [
                    (0, i.jsx)(d.ModalHeader, {
                        separator: !1,
                        children: (0, i.jsx)(d.Heading, {
                            variant: 'heading-lg/semibold',
                            children: C.intl.string(C.t['TY/V+P'])
                        })
                    }),
                    (0, i.jsxs)(d.ModalContent, {
                        className: D.modalContent,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                children: e
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                children: C.intl.format(t, {
                                    onClick: () => {
                                        null != y && (I.Z.open(y.id, U.pNK.ONBOARDING), null == n || n());
                                    }
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(d.ModalFooter, {
                        children: (0, i.jsx)(d.Button, {
                            onClick: n,
                            children: C.intl.string(C.t.BddRzc)
                        })
                    })
                ]
            })
        );
    }
    if (null == y) return null;
    if (y.hasFeature(U.oNc.COMMUNITY) && (y.rulesChannelId === N || y.publicUpdatesChannelId === N)) {
        let t = y.rulesChannelId === N,
            e = t ? C.intl.string(C.t.yjrZPj) : C.intl.string(C.t['1B1/ND']);
        return (0, i.jsxs)(d.ModalRoot, {
            transitionState: L,
            'aria-label': C.intl.string(C.t['TY/V+P']),
            children: [
                (0, i.jsx)(d.ModalHeader, {
                    separator: !1,
                    children: (0, i.jsx)(d.Heading, {
                        variant: 'heading-lg/semibold',
                        children: C.intl.string(C.t['TY/V+P'])
                    })
                }),
                (0, i.jsxs)(d.ModalContent, {
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            className: D.__invalid_modalText,
                            children: e
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            className: D.__invalid_modalText,
                            children: C.intl.format(C.t['cg6U//'], {
                                onClick: () => {
                                    I.Z.open(y.id, U.pNK.COMMUNITY), null == n || n();
                                }
                            })
                        })
                    ]
                }),
                (0, i.jsx)(d.ModalFooter, {
                    children: (0, i.jsx)(d.Button, {
                        onClick: n,
                        children: C.intl.string(C.t.BddRzc)
                    })
                })
            ]
        });
    }
    {
        let { deleteText: t, deleteBody: l } = (() => {
            if (e.type === U.d4z.GUILD_CATEGORY)
                return {
                    deleteText: C.intl.string(C.t.ifbXnJ),
                    deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: f })
                };
            if (e.isForumPost())
                return {
                    deleteText: H ? C.intl.string(C.t.nEOg1N) : C.intl.string(C.t.xwMqDw),
                    deleteBody: H && z && !M ? C.intl.format(C.t['6/pY29'], { postName: f }) : H ? C.intl.format(C.t.su3voK, { postName: f }) : C.intl.string(C.t.RUHcys)
                };
            if (e.isThread())
                return {
                    deleteText: C.intl.string(C.t.H7vTe3),
                    deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: f })
                };
            else if (v && h > 0)
                return {
                    deleteText: C.intl.string(C.t['8D8Rsb']),
                    deleteBody: C.intl.format(C.t['+qkiT0'], {
                        channelName: f,
                        numGuildRoleSubscriptionMembers: h
                    })
                };
            return {
                deleteText: C.intl.string(C.t['8D8Rsb']),
                deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: f })
            };
        })();
        return (0, i.jsxs)(d.ModalRoot, {
            transitionState: L,
            'aria-label': t,
            children: [
                (0, i.jsx)(d.ModalHeader, {
                    separator: !1,
                    children: (0, i.jsx)(d.Heading, {
                        variant: 'heading-lg/semibold',
                        children: t
                    })
                }),
                (0, i.jsxs)(d.ModalContent, {
                    className: D.modalContent,
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: 'text-md/normal',
                            color: 'header-primary',
                            children: l
                        }),
                        R
                            ? (0, i.jsx)(d.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  className: D.warningText,
                                  children: C.intl.format(C.t.Ze005O, { count: O.length })
                              })
                            : null
                    ]
                }),
                (0, i.jsxs)(d.ModalFooter, {
                    children: [
                        (0, i.jsx)(d.Button, {
                            onClick: G,
                            color: d.Button.Colors.RED,
                            children: t
                        }),
                        (0, i.jsx)(d.Button, {
                            onClick: n,
                            look: d.Button.Looks.LINK,
                            color: d.Button.Colors.PRIMARY,
                            children: C.intl.string(C.t['ETE/oK'])
                        })
                    ]
                })
            ]
        });
    }
};

n.d(e, { default: () => G }), n(47120);
var i = n(200651),
    l = n(192379),
    d = n(442837),
    r = n(481060),
    a = n(933557),
    s = n(156699),
    u = n(734893),
    _ = n(693196),
    E = n(66999),
    o = n(575830),
    c = n(554747),
    I = n(434404),
    T = n(144140),
    g = n(314897),
    p = n(430824),
    m = n(496675),
    U = n(981631),
    C = n(388032),
    D = n(967211);
let G = (t) => {
    let { channel: e, onClose: n, onConfirm: G, transitionState: L } = t,
        N = (0, a.ZP)(e, !0),
        S = e.id,
        f = e.isForumPost(),
        y = (0, d.e7)([p.Z], () => p.Z.getGuild(e.getGuildId())),
        O = (0, c.u1)(S),
        { isSubscriptionGated: v } = (0, E.Z)(e.id),
        h = (0, o.Z)(y, e),
        [A, z] = l.useState(),
        Z = (0, d.e7)([g.default], () => e.isOwner(g.default.getId()), [e]),
        P = (0, d.e7)([m.Z], () => m.Z.can(e.isThread() ? U.Plq.MANAGE_THREADS : U.Plq.MANAGE_CHANNELS, e), [e]),
        x = (0, d.e7)(
            [T.Z],
            () => {
                var t;
                return null !== (t = T.Z.getCount(e.id)) && void 0 !== t ? t : 0;
            },
            [e.id]
        ),
        H = f && (P || (Z && x < 1)),
        R = O.length > 0 && (e.type === U.d4z.GUILD_VOICE || e.type === U.d4z.GUILD_STAGE_VOICE);
    if (
        (l.useEffect(() => {
            (async () => {
                if (!(await (0, s.C)(e.getGuildId(), S))) {
                    z(u.j.DEFAULT);
                    return;
                }
                let t = await (0, _.T)(e.getGuildId(), S);
                if (null != t) {
                    z(t);
                    return;
                }
            })();
        }, [e, S]),
        null != A)
    ) {
        let t;
        let e = C.intl.string(C.t.iWlB6u);
        return (
            (t = A === u.j.TODO ? C.t['/rjozM'] : A === u.j.RESOURCE ? C.t.Nf5pt7 : C.t.ajiBwM),
            (0, i.jsxs)(r.Y0X, {
                transitionState: L,
                'aria-label': C.intl.string(C.t['TY/V+P']),
                children: [
                    (0, i.jsx)(r.xBx, {
                        separator: !1,
                        children: (0, i.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            children: C.intl.string(C.t['TY/V+P'])
                        })
                    }),
                    (0, i.jsxs)(r.hzk, {
                        className: D.modalContent,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: e
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: C.intl.format(t, {
                                    onClick: () => {
                                        null != y && (I.Z.open(y.id, U.pNK.ONBOARDING), null == n || n());
                                    }
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(r.mzw, {
                        children: (0, i.jsx)(r.zxk, {
                            onClick: n,
                            children: C.intl.string(C.t.BddRzc)
                        })
                    })
                ]
            })
        );
    }
    if (null == y) return null;
    if (y.hasFeature(U.oNc.COMMUNITY) && (y.rulesChannelId === S || y.publicUpdatesChannelId === S)) {
        let t = y.rulesChannelId === S ? C.intl.string(C.t.yjrZPj) : C.intl.string(C.t['1B1/ND']);
        return (0, i.jsxs)(r.Y0X, {
            transitionState: L,
            'aria-label': C.intl.string(C.t['TY/V+P']),
            children: [
                (0, i.jsx)(r.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(r.X6q, {
                        variant: 'heading-lg/semibold',
                        children: C.intl.string(C.t['TY/V+P'])
                    })
                }),
                (0, i.jsxs)(r.hzk, {
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            className: D.__invalid_modalText,
                            children: t
                        }),
                        (0, i.jsx)(r.Text, {
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
                (0, i.jsx)(r.mzw, {
                    children: (0, i.jsx)(r.zxk, {
                        onClick: n,
                        children: C.intl.string(C.t.BddRzc)
                    })
                })
            ]
        });
    }
    {
        let { deleteText: t, deleteBody: l } =
            e.type === U.d4z.GUILD_CATEGORY
                ? {
                      deleteText: C.intl.string(C.t.ifbXnJ),
                      deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: N })
                  }
                : e.isForumPost()
                  ? {
                        deleteText: H ? C.intl.string(C.t.nEOg1N) : C.intl.string(C.t.xwMqDw),
                        deleteBody: H && Z && !P ? C.intl.format(C.t['6/pY29'], { postName: N }) : H ? C.intl.format(C.t.su3voK, { postName: N }) : C.intl.string(C.t.RUHcys)
                    }
                  : e.isThread()
                    ? {
                          deleteText: C.intl.string(C.t.H7vTe3),
                          deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: N })
                      }
                    : v && h > 0
                      ? {
                            deleteText: C.intl.string(C.t['8D8Rsb']),
                            deleteBody: C.intl.format(C.t['+qkiT0'], {
                                channelName: N,
                                numGuildRoleSubscriptionMembers: h
                            })
                        }
                      : {
                            deleteText: C.intl.string(C.t['8D8Rsb']),
                            deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: N })
                        };
        return (0, i.jsxs)(r.Y0X, {
            transitionState: L,
            'aria-label': t,
            children: [
                (0, i.jsx)(r.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(r.X6q, {
                        variant: 'heading-lg/semibold',
                        children: t
                    })
                }),
                (0, i.jsxs)(r.hzk, {
                    className: D.modalContent,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'header-primary',
                            children: l
                        }),
                        R
                            ? (0, i.jsx)(r.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  className: D.warningText,
                                  children: C.intl.format(C.t.Ze005O, { count: O.length })
                              })
                            : null
                    ]
                }),
                (0, i.jsxs)(r.mzw, {
                    children: [
                        (0, i.jsx)(r.zxk, {
                            onClick: G,
                            color: r.zxk.Colors.RED,
                            children: t
                        }),
                        (0, i.jsx)(r.zxk, {
                            onClick: n,
                            look: r.zxk.Looks.LINK,
                            color: r.zxk.Colors.PRIMARY,
                            children: C.intl.string(C.t['ETE/oK'])
                        })
                    ]
                })
            ]
        });
    }
};

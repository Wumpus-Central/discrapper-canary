n.d(t, { default: () => L }), n(47120);
var i = n(200651),
    d = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(933557),
    s = n(156699),
    _ = n(734893),
    o = n(693196),
    p = n(66999),
    N = n(575830),
    T = n(554747),
    I = n(434404),
    E = n(144140),
    g = n(314897),
    u = n(430824),
    m = n(496675),
    c = n(981631),
    U = n(388032),
    C = n(782155);
let L = (e) => {
    let { channel: t, onClose: n, onConfirm: L, transitionState: G } = e,
        D = (0, l.ZP)(t, !0),
        W = t.id,
        y = t.isForumPost(),
        O = (0, r.e7)([u.Z], () => u.Z.getGuild(t.getGuildId())),
        z = (0, T.u1)(W),
        { isSubscriptionGated: S } = (0, p.Z)(t.id),
        A = (0, N.Z)(O, t),
        [h, v] = d.useState(),
        x = (0, r.e7)([g.default], () => t.isOwner(g.default.getId()), [t]),
        f = (0, r.e7)([m.Z], () => m.Z.can(t.isThread() ? c.Plq.MANAGE_THREADS : c.Plq.MANAGE_CHANNELS, t), [t]),
        R = (0, r.e7)(
            [E.Z],
            () => {
                var e;
                return null !== (e = E.Z.getCount(t.id)) && void 0 !== e ? e : 0;
            },
            [t.id]
        ),
        H = y && (f || (x && R < 1)),
        B = z.length > 0 && (t.type === c.d4z.GUILD_VOICE || t.type === c.d4z.GUILD_STAGE_VOICE);
    if (
        (d.useEffect(() => {
            (async () => {
                if (!(await (0, s.C)(t.getGuildId(), W))) {
                    v(_.j.DEFAULT);
                    return;
                }
                let e = await (0, o.T)(t.getGuildId(), W);
                if (null != e) {
                    v(e);
                    return;
                }
            })();
        }, [t, W]),
        null != h)
    ) {
        let e;
        let t = U.NW.string(U.t.iWlB6u);
        return (
            (e = h === _.j.TODO ? U.t['/rjozM'] : h === _.j.RESOURCE ? U.t.Nf5pt7 : U.t.ajiBwM),
            (0, i.jsxs)(a.Y0X, {
                transitionState: G,
                'aria-label': U.NW.string(U.t['TY/V+P']),
                children: [
                    (0, i.jsx)(a.xBx, {
                        separator: !1,
                        children: (0, i.jsx)(a.X6q, {
                            variant: 'heading-lg/semibold',
                            children: U.NW.string(U.t['TY/V+P'])
                        })
                    }),
                    (0, i.jsxs)(a.hzk, {
                        className: C.modalContent,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: t
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: U.NW.format(e, {
                                    onClick: () => {
                                        null != O && (I.Z.open(O.id, c.pNK.ONBOARDING), null == n || n());
                                    }
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(a.mzw, {
                        children: (0, i.jsx)(a.zxk, {
                            onClick: n,
                            children: U.NW.string(U.t.BddRzc)
                        })
                    })
                ]
            })
        );
    }
    if (null == O) return null;
    if (O.hasFeature(c.oNc.COMMUNITY) && (O.rulesChannelId === W || O.publicUpdatesChannelId === W)) {
        let e = O.rulesChannelId === W ? U.NW.string(U.t.yjrZPj) : U.NW.string(U.t['1B1/ND']);
        return (0, i.jsxs)(a.Y0X, {
            transitionState: G,
            'aria-label': U.NW.string(U.t['TY/V+P']),
            children: [
                (0, i.jsx)(a.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        children: U.NW.string(U.t['TY/V+P'])
                    })
                }),
                (0, i.jsxs)(a.hzk, {
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: C.__invalid_modalText,
                            children: e
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: C.__invalid_modalText,
                            children: U.NW.format(U.t['cg6U//'], {
                                onClick: () => {
                                    I.Z.open(O.id, c.pNK.COMMUNITY), null == n || n();
                                }
                            })
                        })
                    ]
                }),
                (0, i.jsx)(a.mzw, {
                    children: (0, i.jsx)(a.zxk, {
                        onClick: n,
                        children: U.NW.string(U.t.BddRzc)
                    })
                })
            ]
        });
    }
    {
        let { deleteText: e, deleteBody: d } =
            t.type === c.d4z.GUILD_CATEGORY
                ? {
                      deleteText: U.NW.string(U.t.ifbXnJ),
                      deleteBody: U.NW.format(U.t.a6Gz9P, { channelName: D })
                  }
                : t.isForumPost()
                  ? {
                        deleteText: H ? U.NW.string(U.t.nEOg1N) : U.NW.string(U.t.xwMqDw),
                        deleteBody: H && x && !f ? U.NW.format(U.t['6/pY29'], { postName: D }) : H ? U.NW.format(U.t.su3voK, { postName: D }) : U.NW.string(U.t.RUHcys)
                    }
                  : t.isThread()
                    ? {
                          deleteText: U.NW.string(U.t.H7vTe3),
                          deleteBody: U.NW.format(U.t.a6Gz9P, { channelName: D })
                      }
                    : S && A > 0
                      ? {
                            deleteText: U.NW.string(U.t['8D8Rsb']),
                            deleteBody: U.NW.format(U.t['+qkiT0'], {
                                channelName: D,
                                numGuildRoleSubscriptionMembers: A
                            })
                        }
                      : {
                            deleteText: U.NW.string(U.t['8D8Rsb']),
                            deleteBody: U.NW.format(U.t.a6Gz9P, { channelName: D })
                        };
        return (0, i.jsxs)(a.Y0X, {
            transitionState: G,
            'aria-label': e,
            children: [
                (0, i.jsx)(a.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        children: e
                    })
                }),
                (0, i.jsxs)(a.hzk, {
                    className: C.modalContent,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'header-primary',
                            children: d
                        }),
                        B
                            ? (0, i.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  className: C.warningText,
                                  children: U.NW.format(U.t.Ze005O, { count: z.length })
                              })
                            : null
                    ]
                }),
                (0, i.jsxs)(a.mzw, {
                    children: [
                        (0, i.jsx)(a.zxk, {
                            onClick: L,
                            color: a.zxk.Colors.RED,
                            children: e
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: n,
                            look: a.zxk.Looks.LINK,
                            color: a.zxk.Colors.PRIMARY,
                            children: U.NW.string(U.t['ETE/oK'])
                        })
                    ]
                })
            ]
        });
    }
};

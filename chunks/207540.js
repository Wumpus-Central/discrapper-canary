e.d(n, { default: () => G }), e(388685);
var i = e(255367),
    l = e(73800),
    d = e(442837),
    r = e(481060),
    a = e(933557),
    s = e(156699),
    _ = e(734893),
    p = e(693196),
    o = e(66999),
    T = e(575830),
    I = e(554747),
    E = e(434404),
    u = e(144140),
    g = e(314897),
    m = e(430824),
    c = e(496675),
    U = e(981631),
    C = e(388032),
    L = e(356407);
let G = (t) => {
    let { channel: n, onClose: e, onConfirm: G, transitionState: D } = t,
        y = (0, a.ZP)(n, !0),
        O = n.id,
        z = n.isForumPost(),
        S = (0, d.e7)([m.Z], () => m.Z.getGuild(n.getGuildId())),
        A = (0, I.u1)(O),
        { isSubscriptionGated: h } = (0, o.Z)(n.id),
        v = (0, T.Z)(S, n),
        [x, f] = l.useState(),
        R = (0, d.e7)([g.default], () => n.isOwner(g.default.getId()), [n]),
        N = (0, d.e7)([c.Z], () => c.Z.can(n.isThread() ? U.Plq.MANAGE_THREADS : U.Plq.MANAGE_CHANNELS, n), [n]),
        H = (0, d.e7)(
            [u.Z],
            () => {
                var t;
                return null != (t = u.Z.getCount(n.id)) ? t : 0;
            },
            [n.id]
        ),
        B = z && (N || (R && H < 1)),
        M = A.length > 0 && (n.type === U.d4z.GUILD_VOICE || n.type === U.d4z.GUILD_STAGE_VOICE);
    if (
        (l.useEffect(() => {
            (async () => {
                if (!(await (0, s.C)(n.getGuildId(), O))) return f(_.j.DEFAULT);
                let t = await (0, p.T)(n.getGuildId(), O);
                if (null != t) return f(t);
            })();
        }, [n, O]),
        null != x)
    ) {
        let t,
            n = C.intl.string(C.t.iWlB6u);
        return (
            (t = x === _.j.TODO ? C.t['/rjozM'] : x === _.j.RESOURCE ? C.t.Nf5pt7 : C.t.ajiBwM),
            (0, i.jsxs)(r.Y0X, {
                transitionState: D,
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
                        className: L.modalContent,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: n
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: C.intl.format(t, {
                                    onClick: () => {
                                        null != S && (E.Z.open(S.id, U.pNK.ONBOARDING), null == e || e());
                                    }
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(r.mzw, {
                        children: (0, i.jsx)(r.zxk, {
                            onClick: e,
                            children: C.intl.string(C.t.BddRzc)
                        })
                    })
                ]
            })
        );
    }
    if (null == S) return null;
    if (S.hasFeature(U.oNc.COMMUNITY) && (S.rulesChannelId === O || S.publicUpdatesChannelId === O)) {
        let t = S.rulesChannelId === O ? C.intl.string(C.t.yjrZPj) : C.intl.string(C.t['1B1/ND']);
        return (0, i.jsxs)(r.Y0X, {
            transitionState: D,
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
                            className: L.__invalid_modalText,
                            children: t
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            className: L.__invalid_modalText,
                            children: C.intl.format(C.t['cg6U//'], {
                                onClick: () => {
                                    E.Z.open(S.id, U.pNK.COMMUNITY), null == e || e();
                                }
                            })
                        })
                    ]
                }),
                (0, i.jsx)(r.mzw, {
                    children: (0, i.jsx)(r.zxk, {
                        onClick: e,
                        children: C.intl.string(C.t.BddRzc)
                    })
                })
            ]
        });
    }
    {
        let { deleteText: t, deleteBody: l } =
            n.type === U.d4z.GUILD_CATEGORY
                ? {
                      deleteText: C.intl.string(C.t.ifbXnJ),
                      deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: y })
                  }
                : n.isForumPost()
                  ? {
                        deleteText: B ? C.intl.string(C.t.nEOg1N) : C.intl.string(C.t.xwMqDw),
                        deleteBody: B && R && !N ? C.intl.format(C.t['6/pY29'], { postName: y }) : B ? C.intl.format(C.t.su3voK, { postName: y }) : C.intl.string(C.t.RUHcys)
                    }
                  : n.isThread()
                    ? {
                          deleteText: C.intl.string(C.t.H7vTe3),
                          deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: y })
                      }
                    : h && v > 0
                      ? {
                            deleteText: C.intl.string(C.t['8D8Rsb']),
                            deleteBody: C.intl.format(C.t['+qkiT0'], {
                                channelName: y,
                                numGuildRoleSubscriptionMembers: v
                            })
                        }
                      : {
                            deleteText: C.intl.string(C.t['8D8Rsb']),
                            deleteBody: C.intl.format(C.t.a6Gz9P, { channelName: y })
                        };
        return (0, i.jsxs)(r.Y0X, {
            transitionState: D,
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
                    className: L.modalContent,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'header-primary',
                            children: l
                        }),
                        M
                            ? (0, i.jsx)(r.Text, {
                                  variant: 'text-md/normal',
                                  color: 'header-secondary',
                                  className: L.warningText,
                                  children: C.intl.format(C.t.Ze005O, { count: A.length })
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
                            onClick: e,
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

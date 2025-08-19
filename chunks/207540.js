e.d(n, { default: () => G }), e(388685);
var i = e(951288),
    l = e(647438),
    d = e(442837),
    r = e(82659),
    a = e(481060),
    s = e(933557),
    _ = e(156699),
    E = e(734893),
    o = e(693196),
    u = e(66999),
    p = e(575830),
    I = e(554747),
    T = e(434404),
    g = e(144140),
    U = e(314897),
    m = e(430824),
    c = e(496675),
    C = e(981631),
    D = e(388032);
let G = (t) => {
    let { channel: n, onClose: e, onConfirm: G, transitionState: L } = t,
        y = (0, s.ZP)(n, !0),
        S = n.id,
        O = n.isForumPost(),
        A = (0, d.e7)([m.Z], () => m.Z.getGuild(n.getGuildId())),
        f = (0, I.u1)(S),
        { isSubscriptionGated: z } = (0, u.Z)(n.id),
        v = (0, p.Z)(A, n),
        [N, h] = l.useState(),
        R = (0, d.e7)([U.default], () => n.isOwner(U.default.getId()), [n]),
        H = (0, d.e7)([c.Z], () => c.Z.can(n.isThread() ? C.Plq.MANAGE_THREADS : C.Plq.MANAGE_CHANNELS, n), [n]),
        B = (0, d.e7)([g.Z], () => {
            var t;
            return null != (t = g.Z.getCount(n.id)) ? t : 0;
        }, [n.id]),
        M = O && (H || (R && B < 1)),
        b = f.length > 0 && (n.type === C.d4z.GUILD_VOICE || n.type === C.d4z.GUILD_STAGE_VOICE);
    if (
        (l.useEffect(() => {
            (async () => {
                if (!(await (0, _.C)(n.getGuildId(), S))) return h(E.j.DEFAULT);
                let t = await (0, o.T)(n.getGuildId(), S);
                if (null != t) return h(t);
            })();
        }, [n, S]),
        l.useEffect(() => {
            null != A &&
                A.features.has(C.oNc.COMMUNITY) &&
                (A.rulesChannelId === S ? h(E.j.RULES) : A.publicUpdatesChannelId === S && h(E.j.UPDATES));
        }, [A, S]),
        null == A)
    )
        return null;
    if (null != N) {
        let t,
            n = async () => {
                await T.Z.open(A.id, C.pNK.ONBOARDING), await e();
            },
            l = async () => {
                await T.Z.open(A.id, C.pNK.COMMUNITY), await e();
            };
        switch (N) {
            case E.j.DEFAULT:
                t = D.intl.format(D.t.iWlB6u, { onClick: n });
                break;
            case E.j.TODO:
                t = D.intl.format(D.t["/rjozM"], { onClick: n });
                break;
            case E.j.RESOURCE:
                t = D.intl.format(D.t.Nf5pt7, { onClick: n });
                break;
            case E.j.RULES:
                t = D.intl.format(D.t["kB1f+/"], {
                    reason: D.intl.string(D.t.yjrZPj),
                    onClick: l,
                });
                break;
            case E.j.UPDATES:
                t = D.intl.format(D.t["kB1f+/"], {
                    reason: D.intl.string(D.t["1B1/ND"]),
                    onClick: l,
                });
        }
        return (0, i.jsx)(r.Modal, {
            title: D.intl.string(D.t["TY/V+P"]),
            onClose: e,
            subtitle: t,
            transitionState: L,
            actions: [
                {
                    text: D.intl.string(D.t.BddRzc),
                    onClick: e,
                    variant: "primary",
                },
            ],
        });
    }
    let { deleteText: P, deleteBody: Z } =
        n.type === C.d4z.GUILD_CATEGORY
            ? {
                  deleteText: D.intl.string(D.t.ifbXnJ),
                  deleteBody: D.intl.format(D.t.a6Gz9P, { channelName: y }),
              }
            : n.isForumPost()
              ? {
                    deleteText: M ? D.intl.string(D.t.nEOg1N) : D.intl.string(D.t.xwMqDw),
                    deleteBody:
                        M && R && !H
                            ? D.intl.format(D.t["6/pY29"], { postName: y })
                            : M
                              ? D.intl.format(D.t.su3voK, { postName: y })
                              : D.intl.string(D.t.RUHcys),
                }
              : n.isThread()
                ? {
                      deleteText: D.intl.string(D.t.H7vTe3),
                      deleteBody: D.intl.format(D.t.a6Gz9P, { channelName: y }),
                  }
                : z && v > 0
                  ? {
                        deleteText: D.intl.string(D.t["8D8Rsb"]),
                        deleteBody: D.intl.format(D.t["+qkiT0"], {
                            channelName: y,
                            numGuildRoleSubscriptionMembers: v,
                        }),
                    }
                  : {
                        deleteText: D.intl.string(D.t["8D8Rsb"]),
                        deleteBody: D.intl.format(D.t.a6Gz9P, { channelName: y }),
                    };
    return (0, i.jsx)(r.Modal, {
        size: "sm",
        onClose: e,
        transitionState: L,
        title: P,
        subtitle: Z,
        actions: [
            {
                text: D.intl.string(D.t["ETE/oK"]),
                onClick: e,
                variant: "secondary",
            },
            {
                text: P,
                onClick: G,
                variant: "critical-primary",
            },
        ],
        children: b
            ? (0, i.jsx)(a.Text, {
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: D.intl.format(D.t.Ze005O, { count: f.length }),
              })
            : null,
    });
};

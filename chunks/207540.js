n.d(t, { default: () => v }), n(388685);
var l = n(54381),
    i = n(473749),
    r = n(793030),
    u = n(442837),
    a = n(481060),
    o = n(933557),
    s = n(156699),
    d = n(734893),
    c = n(693196),
    E = n(66999),
    f = n(575830),
    N = n(554747),
    g = n(434404),
    _ = n(144140),
    Z = n(314897),
    m = n(430824),
    p = n(496675),
    h = n(981631),
    O = n(388032);
let v = (e) => {
    let { channel: t, onClose: n, onConfirm: v, transitionState: C } = e,
        S = (0, o.ZP)(t, !0),
        I = t.id,
        P = t.isForumPost(),
        T = (0, u.e7)([m.Z], () => m.Z.getGuild(t.getGuildId())),
        y = (0, N.u1)(I),
        { isSubscriptionGated: D } = (0, E.Z)(t.id),
        b = (0, f.Z)(T, t),
        [G, w] = i.useState(),
        A = (0, u.e7)([Z.default], () => t.isOwner(Z.default.getId()), [t]),
        U = (0, u.e7)([p.Z], () => p.Z.can(t.isThread() ? h.Plq.MANAGE_THREADS : h.Plq.MANAGE_CHANNELS, t), [t]),
        L = (0, u.e7)([_.Z], () => {
            var e;
            return null != (e = _.Z.getCount(t.id)) ? e : 0;
        }, [t.id]),
        j = P && (U || (A && L < 1)),
        V = y.length > 0 && (t.type === h.d4z.GUILD_VOICE || t.type === h.d4z.GUILD_STAGE_VOICE);
    if (
        (i.useEffect(() => {
            (async () => {
                if (!(await (0, s.C)(t.getGuildId(), I))) return w(d.j.DEFAULT);
                let e = await (0, c.T)(t.getGuildId(), I);
                if (null != e) return w(e);
            })();
        }, [t, I]),
        i.useEffect(() => {
            null != T &&
                T.features.has(h.GuildFeatures.COMMUNITY) &&
                (T.rulesChannelId === I ? w(d.j.RULES) : T.publicUpdatesChannelId === I && w(d.j.UPDATES));
        }, [T, I]),
        null == T)
    )
        return null;
    if (null != G) {
        let e,
            t = async () => {
                await g.Z.open(T.id, h.pNK.ONBOARDING), await n();
            },
            i = async () => {
                await g.Z.open(T.id, h.pNK.COMMUNITY), await n();
            };
        switch (G) {
            case d.j.DEFAULT:
                e = O.intl.format(O.t.iWlB6h, { onClick: t });
                break;
            case d.j.TODO:
                e = O.intl.format(O.t["/rjozD"], { onClick: t });
                break;
            case d.j.RESOURCE:
                e = O.intl.format(O.t.Nf5ptw, { onClick: t });
                break;
            case d.j.RULES:
                e = O.intl.format(O.t["kB1f+3"], {
                    reason: O.intl.string(O.t.yjrZPl),
                    onClick: i,
                });
                break;
            case d.j.UPDATES:
                e = O.intl.format(O.t["kB1f+3"], {
                    reason: O.intl.string(O.t["1B1/NB"]),
                    onClick: i,
                });
        }
        return (0, l.jsx)(r.Modal, {
            title: O.intl.string(O.t["TY/V+H"]),
            onClose: n,
            subtitle: e,
            transitionState: C,
            actions: [
                {
                    text: O.intl.string(O.t.BddRzS),
                    onClick: n,
                    variant: "primary",
                },
            ],
        });
    }
    let { deleteText: M, deleteBody: k } =
        t.type === h.d4z.GUILD_CATEGORY
            ? {
                  deleteText: O.intl.string(O.t.ifbXnL),
                  deleteBody: O.intl.format(O.t.a6Gz9J, { channelName: S }),
              }
            : t.isForumPost()
              ? {
                    deleteText: j ? O.intl.string(O.t.nEOg1N) : O.intl.string(O.t.xwMqD7),
                    deleteBody:
                        j && A && !U
                            ? O.intl.format(O.t["6/pY2+"], { postName: S })
                            : j
                              ? O.intl.format(O.t.su3voL, { postName: S })
                              : O.intl.string(O.t.RUHcyk),
                }
              : t.isThread()
                ? {
                      deleteText: O.intl.string(O.t.H7vTe2),
                      deleteBody: O.intl.format(O.t.a6Gz9J, { channelName: S }),
                  }
                : D && b > 0
                  ? {
                        deleteText: O.intl.string(O.t["8D8Rsb"]),
                        deleteBody: O.intl.format(O.t["+qkiT9"], {
                            channelName: S,
                            numGuildRoleSubscriptionMembers: b,
                        }),
                    }
                  : {
                        deleteText: O.intl.string(O.t["8D8Rsb"]),
                        deleteBody: O.intl.format(O.t.a6Gz9J, { channelName: S }),
                    };
    return (0, l.jsx)(r.Modal, {
        size: "sm",
        onClose: n,
        transitionState: C,
        title: M,
        subtitle: k,
        actions: [
            {
                text: O.intl.string(O.t["ETE/oC"]),
                onClick: n,
                variant: "secondary",
            },
            {
                text: M,
                onClick: v,
                variant: "critical-primary",
            },
        ],
        children: V
            ? (0, l.jsx)(a.Text, {
                  variant: "text-md/normal",
                  color: "text-default",
                  children: O.intl.format(O.t.Ze005A, { count: y.length }),
              })
            : null,
    });
};

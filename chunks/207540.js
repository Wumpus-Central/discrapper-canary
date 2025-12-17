n.d(t, { default: () => h }), n(388685);
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
    O = n(496675),
    p = n(981631),
    C = n(388032);
let h = (e) => {
    let { channel: t, onClose: n, onConfirm: h, transitionState: S } = e,
        v = (0, o.ZP)(t, !0),
        I = t.id,
        P = t.isForumPost(),
        T = (0, u.e7)([m.Z], () => m.Z.getGuild(t.getGuildId())),
        D = (0, N.u1)(I),
        { isSubscriptionGated: y } = (0, E.Z)(t.id),
        b = (0, f.Z)(T, t),
        [G, w] = i.useState(),
        A = (0, u.e7)([Z.default], () => t.isOwner(Z.default.getId()), [t]),
        U = (0, u.e7)([O.Z], () => O.Z.can(t.isThread() ? p.Plq.MANAGE_THREADS : p.Plq.MANAGE_CHANNELS, t), [t]),
        L = (0, u.e7)([_.Z], () => {
            var e;
            return null != (e = _.Z.getCount(t.id)) ? e : 0;
        }, [t.id]),
        j = P && (U || (A && L < 1)),
        V = D.length > 0 && (t.type === p.d4z.GUILD_VOICE || t.type === p.d4z.GUILD_STAGE_VOICE);
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
                T.features.has(p.GuildFeatures.COMMUNITY) &&
                (T.rulesChannelId === I ? w(d.j.RULES) : T.publicUpdatesChannelId === I && w(d.j.UPDATES));
        }, [T, I]),
        null == T)
    )
        return null;
    if (null != G) {
        let e,
            t = async () => {
                await g.Z.open(T.id, p.pNK.ONBOARDING), await n();
            },
            i = async () => {
                await g.Z.open(T.id, p.pNK.COMMUNITY), await n();
            };
        switch (G) {
            case d.j.DEFAULT:
                e = C.intl.format(C.t.iWlB6h, { onClick: t });
                break;
            case d.j.TODO:
                e = C.intl.format(C.t["/rjozD"], { onClick: t });
                break;
            case d.j.RESOURCE:
                e = C.intl.format(C.t.Nf5ptw, { onClick: t });
                break;
            case d.j.RULES:
                e = C.intl.format(C.t["kB1f+3"], {
                    reason: C.intl.string(C.t.yjrZPl),
                    onClick: i,
                });
                break;
            case d.j.UPDATES:
                e = C.intl.format(C.t["kB1f+3"], {
                    reason: C.intl.string(C.t["1B1/NB"]),
                    onClick: i,
                });
        }
        return (0, l.jsx)(r.Modal, {
            title: C.intl.string(C.t["TY/V+H"]),
            onClose: n,
            subtitle: e,
            transitionState: S,
            actions: [
                {
                    text: C.intl.string(C.t.BddRzS),
                    onClick: n,
                    variant: "primary",
                },
            ],
        });
    }
    let { deleteText: M, deleteBody: k } =
        t.type === p.d4z.GUILD_CATEGORY
            ? {
                  deleteText: C.intl.string(C.t.ifbXnL),
                  deleteBody: C.intl.format(C.t.a6Gz9J, { channelName: v }),
              }
            : t.isForumPost()
              ? {
                    deleteText: j ? C.intl.string(C.t.nEOg1N) : C.intl.string(C.t.xwMqD7),
                    deleteBody:
                        j && A && !U
                            ? C.intl.format(C.t["6/pY2+"], { postName: v })
                            : j
                              ? C.intl.format(C.t.su3voL, { postName: v })
                              : C.intl.string(C.t.RUHcyk),
                }
              : t.isThread()
                ? {
                      deleteText: C.intl.string(C.t.H7vTe2),
                      deleteBody: C.intl.format(C.t.a6Gz9J, { channelName: v }),
                  }
                : y && b > 0
                  ? {
                        deleteText: C.intl.string(C.t["8D8Rsb"]),
                        deleteBody: C.intl.format(C.t["+qkiT9"], {
                            channelName: v,
                            numGuildRoleSubscriptionMembers: b,
                        }),
                    }
                  : {
                        deleteText: C.intl.string(C.t["8D8Rsb"]),
                        deleteBody: C.intl.format(C.t.a6Gz9J, { channelName: v }),
                    };
    return (0, l.jsx)(r.Modal, {
        size: "sm",
        onClose: n,
        transitionState: S,
        title: M,
        subtitle: k,
        actions: [
            {
                text: C.intl.string(C.t["ETE/oC"]),
                onClick: n,
                variant: "secondary",
            },
            {
                text: M,
                onClick: h,
                variant: "critical-primary",
            },
        ],
        children: V
            ? (0, l.jsx)(a.Text, {
                  variant: "text-md/normal",
                  color: "text-default",
                  children: C.intl.format(C.t.Ze005A, { count: D.length }),
              })
            : null,
    });
};

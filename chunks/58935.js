n.d(t, { default: () => _ }), n(896048);
var l = n(627968),
    i = n(64700),
    r = n(158954),
    u = n(311907),
    a = n(397927),
    o = n(47167),
    s = n(60868),
    d = n(374084),
    c = n(894328),
    E = n(721592),
    f = n(873878),
    A = n(508654),
    g = n(997509),
    y = n(456874),
    N = n(961350),
    O = n(71393),
    m = n(576705),
    h = n(652215),
    G = n(985018);
let _ = (e) => {
    let { channel: t, onClose: n, onConfirm: _, transitionState: C } = e,
        v = (0, o.Ay)(t, !0),
        I = t.id,
        S = t.isForumPost(),
        b = (0, u.bG)([O.A], () => O.A.getGuild(t.getGuildId())),
        p = (0, A.ob)(I),
        { isSubscriptionGated: D } = (0, E.A)(t.id),
        T = (0, f.A)(b, t),
        [w, U] = i.useState(),
        B = (0, u.bG)([N.default], () => t.isOwner(N.default.getId()), [t]),
        L = (0, u.bG)([m.A], () => m.A.can(t.isThread() ? h.xBc.MANAGE_THREADS : h.xBc.MANAGE_CHANNELS, t), [t]),
        j = (0, u.bG)([y.A], () => {
            var e;
            return null != (e = y.A.getCount(t.id)) ? e : 0;
        }, [t.id]),
        x = S && (L || (B && j < 1)),
        P = p.length > 0 && (t.type === h.rbe.GUILD_VOICE || t.type === h.rbe.GUILD_STAGE_VOICE);
    if (
        (i.useEffect(() => {
            (async () => {
                if (!(await (0, s.F)(t.getGuildId(), I))) return U(d.K5.DEFAULT);
                let e = await (0, c.D)(t.getGuildId(), I);
                if (null != e) return U(e);
            })();
        }, [t, I]),
        i.useEffect(() => {
            null != b &&
                b.features.has(h.GuildFeatures.COMMUNITY) &&
                (b.rulesChannelId === I ? U(d.K5.RULES) : b.publicUpdatesChannelId === I && U(d.K5.UPDATES));
        }, [b, I]),
        null == b)
    )
        return null;
    if (null != w) {
        let e,
            t = async () => {
                await g.A.open(b.id, h.BEX.ONBOARDING), await n();
            },
            i = async () => {
                await g.A.open(b.id, h.BEX.COMMUNITY), await n();
            };
        switch (w) {
            case d.K5.DEFAULT:
                e = G.intl.format(G.t.iWlB6h, { onClick: t });
                break;
            case d.K5.TODO:
                e = G.intl.format(G.t["/rjozD"], { onClick: t });
                break;
            case d.K5.RESOURCE:
                e = G.intl.format(G.t.Nf5ptw, { onClick: t });
                break;
            case d.K5.RULES:
                e = G.intl.format(G.t["kB1f+3"], {
                    reason: G.intl.string(G.t.yjrZPl),
                    onClick: i,
                });
                break;
            case d.K5.UPDATES:
                e = G.intl.format(G.t["kB1f+3"], {
                    reason: G.intl.string(G.t["1B1/NB"]),
                    onClick: i,
                });
        }
        return (0, l.jsx)(r.Modal, {
            title: G.intl.string(G.t["TY/V+H"]),
            onClose: n,
            subtitle: e,
            transitionState: C,
            actions: [
                {
                    text: G.intl.string(G.t.BddRzS),
                    onClick: n,
                    variant: "primary",
                },
            ],
        });
    }
    let { deleteText: M, deleteBody: V } =
        t.type === h.rbe.GUILD_CATEGORY
            ? {
                  deleteText: G.intl.string(G.t.ifbXnL),
                  deleteBody: G.intl.format(G.t.a6Gz9J, { channelName: v }),
              }
            : t.isForumPost()
              ? {
                    deleteText: x ? G.intl.string(G.t.nEOg1N) : G.intl.string(G.t.xwMqD7),
                    deleteBody:
                        x && B && !L
                            ? G.intl.format(G.t["6/pY2+"], { postName: v })
                            : x
                              ? G.intl.format(G.t.su3voL, { postName: v })
                              : G.intl.string(G.t.RUHcyk),
                }
              : t.isThread()
                ? {
                      deleteText: G.intl.string(G.t.H7vTe2),
                      deleteBody: G.intl.format(G.t.a6Gz9J, { channelName: v }),
                  }
                : D && T > 0
                  ? {
                        deleteText: G.intl.string(G.t["8D8Rsb"]),
                        deleteBody: G.intl.format(G.t["+qkiT9"], {
                            channelName: v,
                            numGuildRoleSubscriptionMembers: T,
                        }),
                    }
                  : {
                        deleteText: G.intl.string(G.t["8D8Rsb"]),
                        deleteBody: G.intl.format(G.t.a6Gz9J, { channelName: v }),
                    };
    return (0, l.jsx)(r.Modal, {
        size: "sm",
        onClose: n,
        transitionState: C,
        title: M,
        subtitle: V,
        actions: [
            {
                text: G.intl.string(G.t["ETE/oC"]),
                onClick: n,
                variant: "secondary",
            },
            {
                text: M,
                onClick: _,
                variant: "critical-primary",
            },
        ],
        children: P
            ? (0, l.jsx)(a.Text, {
                  variant: "text-md/normal",
                  color: "text-default",
                  children: G.intl.format(G.t.Ze005A, { count: p.length }),
              })
            : null,
    });
};

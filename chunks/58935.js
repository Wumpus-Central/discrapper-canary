n.d(t, { default: () => m });
var l = n(627968),
    i = n(64700),
    r = n(189213),
    u = n(311907),
    a = n(834730),
    s = n(47167),
    d = n(60868),
    o = n(374084),
    E = n(894328),
    c = n(721592),
    A = n(873878),
    f = n(508654),
    N = n(997509),
    g = n(456874),
    G = n(961350),
    _ = n(71393),
    C = n(576705),
    I = n(652215),
    h = n(985018);
let m = (e) => {
    let { channel: t, onClose: n, onConfirm: m, transitionState: y } = e,
        S = (0, s.Ay)(t, !0),
        D = t.id,
        T = t.isForumPost(),
        v = (0, u.bG)([_.A], () => _.A.getGuild(t.getGuildId())),
        O = (0, f.ob)(D),
        { isSubscriptionGated: U } = (0, c.A)(t.id),
        p = (0, A.A)(v, t),
        [w, B] = i.useState(),
        L = (0, u.bG)([G.default], () => t.isOwner(G.default.getId()), [t]),
        b = (0, u.bG)([C.A], () => C.A.can(t.isThread() ? I.xBc.MANAGE_THREADS : I.xBc.MANAGE_CHANNELS, t), [t]),
        x = (0, u.bG)([g.A], () => g.A.getCount(t.id) ?? 0, [t.id]),
        M = T && (b || (L && x < 1)),
        V = O.length > 0 && (t.type === I.rbe.GUILD_VOICE || t.type === I.rbe.GUILD_STAGE_VOICE);
    if (
        (i.useEffect(() => {
            (async () => {
                if (!(await (0, d.F)(t.getGuildId(), D))) return B(o.K5.DEFAULT);
                let e = await (0, E.D)(t.getGuildId(), D);
                if (null != e) return B(e);
            })();
        }, [t, D]),
        i.useEffect(() => {
            null != v &&
                v.features.has(I.GuildFeatures.COMMUNITY) &&
                (v.rulesChannelId === D ? B(o.K5.RULES) : v.publicUpdatesChannelId === D && B(o.K5.UPDATES));
        }, [v, D]),
        null == v)
    )
        return null;
    if (null != w) {
        let e,
            t = async () => {
                await N.A.open(v.id, I.BEX.ONBOARDING), await n();
            },
            i = async () => {
                await N.A.open(v.id, I.BEX.COMMUNITY), await n();
            };
        switch (w) {
            case o.K5.DEFAULT:
                e = h.intl.format(h.t.iWlB6h, { onClick: t });
                break;
            case o.K5.TODO:
                e = h.intl.format(h.t["/rjozD"], { onClick: t });
                break;
            case o.K5.RESOURCE:
                e = h.intl.format(h.t.Nf5ptw, { onClick: t });
                break;
            case o.K5.RULES:
                e = h.intl.format(h.t["kB1f+3"], { reason: h.intl.string(h.t.yjrZPl), onClick: i });
                break;
            case o.K5.UPDATES:
                e = h.intl.format(h.t["kB1f+3"], { reason: h.intl.string(h.t["1B1/NB"]), onClick: i });
        }
        return (0, l.jsx)(r.Modal, {
            title: h.intl.string(h.t["TY/V+H"]),
            onClose: n,
            subtitle: e,
            transitionState: y,
            actions: [{ text: h.intl.string(h.t.BddRzS), onClick: n, variant: "primary" }],
        });
    }
    let { deleteText: R, deleteBody: k } =
        t.type === I.rbe.GUILD_CATEGORY
            ? { deleteText: h.intl.string(h.t.ifbXnL), deleteBody: h.intl.format(h.t.a6Gz9J, { channelName: S }) }
            : t.isForumPost()
              ? {
                    deleteText: M ? h.intl.string(h.t.nEOg1N) : h.intl.string(h.t.xwMqD7),
                    deleteBody:
                        M && L && !b
                            ? h.intl.format(h.t["6/pY2+"], { postName: S })
                            : M
                              ? h.intl.format(h.t.su3voL, { postName: S })
                              : h.intl.string(h.t.RUHcyk),
                }
              : t.isThread()
                ? { deleteText: h.intl.string(h.t.H7vTe2), deleteBody: h.intl.format(h.t.a6Gz9J, { channelName: S }) }
                : U && p > 0
                  ? {
                        deleteText: h.intl.string(h.t["8D8Rsb"]),
                        deleteBody: h.intl.format(h.t["+qkiT9"], {
                            channelName: S,
                            numGuildRoleSubscriptionMembers: p,
                        }),
                    }
                  : {
                        deleteText: h.intl.string(h.t["8D8Rsb"]),
                        deleteBody: h.intl.format(h.t.a6Gz9J, { channelName: S }),
                    };
    return (0, l.jsx)(r.Modal, {
        size: "sm",
        onClose: n,
        transitionState: y,
        title: R,
        subtitle: k,
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), onClick: n, variant: "secondary" },
            { text: R, onClick: m, variant: "critical-primary" },
        ],
        children: V
            ? (0, l.jsx)(a.E, {
                  variant: "text-md/normal",
                  color: "text-default",
                  children: h.intl.format(h.t.Ze005A, { count: O.length }),
              })
            : null,
    });
};

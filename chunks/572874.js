n.d(t, { default: () => O });
var l = n(627968),
    i = n(64700),
    r = n(189213),
    u = n(17928),
    a = n(834730),
    s = n(47167),
    d = n(60868),
    o = n(374084),
    E = n(894328),
    c = n(721592),
    A = n(317525),
    f = n(260509),
    N = n(34457),
    g = n(98318),
    G = n(855918),
    _ = n(652215),
    C = n(386784),
    I = n(508654),
    h = n(997509),
    m = n(456874),
    y = n(495544),
    S = n(71393),
    D = n(576705),
    T = n(985018);
let O = (e) => {
    let t,
        n,
        { channel: O, onClose: v, onConfirm: U, transitionState: p } = e,
        w = (0, s.Ay)(O, !0),
        B = O.id,
        L = O.isForumPost(),
        b = (0, u.bG)([S.A], () => S.A.getGuild(O.getGuildId())),
        x = (0, I.ob)(B),
        { isSubscriptionGated: M } = (0, c.A)(O.id),
        V =
            ((t = (0, u.bG)([A.A], () => (null != b ? A.A.getRolesSnapshot(b.id) : void 0))),
            (n = (0, C.A)(b?.id)),
            i.useMemo(() => {
                let e =
                        null != b && null != t
                            ? (function (e, t, n) {
                                  let l = new Set();
                                  for (let e of Object.keys(n.permissionOverwrites)) {
                                      let i = t[e],
                                          r = n.permissionOverwrites[e];
                                      (0, g.U)(i) && (0, G.Uj)(n, r) && l.add(i);
                                  }
                                  let i = t[(0, f.af)(e)],
                                      r = !(0, N._m)(i, _.xBc.VIEW_CHANNEL),
                                      u = (0, G.AN)(n, n.permissionOverwrites[e.id]);
                                  if (r && !u) for (let e of Object.values(t)) (0, g.U)(e) && (0, G.iR)(e) && l.add(e);
                                  return [...l];
                              })(b, t, O)
                            : [],
                    l = 0;
                for (let t of e) {
                    let e = t.id;
                    if (null != e) {
                        let t = n?.[e];
                        null != t && (l += t);
                    }
                }
                return l;
            }, [n, b, O, t])),
        [R, k] = i.useState(),
        H = (0, u.bG)([y.default], () => O.isOwner(y.default.getId()), [O]),
        P = (0, u.bG)([D.A], () => D.A.can(O.isThread() ? _.xBc.MANAGE_THREADS : _.xBc.MANAGE_CHANNELS, O), [O]),
        F = (0, u.bG)([m.A], () => m.A.getCount(O.id) ?? 0, [O.id]),
        j = L && (P || (H && F < 1)),
        K = x.length > 0 && (O.type === _.rbe.GUILD_VOICE || O.type === _.rbe.GUILD_STAGE_VOICE);
    if (
        (i.useEffect(() => {
            (async () => {
                if (!(await (0, d.F)(O.getGuildId(), B))) return k(o.K5.DEFAULT);
                let e = await (0, E.D)(O.getGuildId(), B);
                if (null != e) return k(e);
            })();
        }, [O, B]),
        i.useEffect(() => {
            null != b &&
                b.features.has(_.GuildFeatures.COMMUNITY) &&
                (b.rulesChannelId === B ? k(o.K5.RULES) : b.publicUpdatesChannelId === B && k(o.K5.UPDATES));
        }, [b, B]),
        null == b)
    )
        return null;
    if (null != R) {
        let e,
            t = async () => {
                await h.A.open(b.id, _.BEX.ONBOARDING), await v();
            },
            n = async () => {
                await h.A.open(b.id, _.BEX.COMMUNITY), await v();
            };
        switch (R) {
            case o.K5.DEFAULT:
                e = T.intl.format(T.t.iWlB6h, { onClick: t });
                break;
            case o.K5.TODO:
                e = T.intl.format(T.t["/rjozD"], { onClick: t });
                break;
            case o.K5.RESOURCE:
                e = T.intl.format(T.t.Nf5ptw, { onClick: t });
                break;
            case o.K5.RULES:
                e = T.intl.format(T.t["kB1f+3"], { reason: T.intl.string(T.t.yjrZPl), onClick: n });
                break;
            case o.K5.UPDATES:
                e = T.intl.format(T.t["kB1f+3"], { reason: T.intl.string(T.t["1B1/NB"]), onClick: n });
        }
        return (0, l.jsx)(r.Modal, {
            title: T.intl.string(T.t["TY/V+H"]),
            onClose: v,
            subtitle: e,
            transitionState: p,
            actions: [{ text: T.intl.string(T.t.BddRzS), onClick: v, variant: "primary" }],
        });
    }
    let { deleteText: z, deleteBody: W } =
        O.type === _.rbe.GUILD_CATEGORY
            ? { deleteText: T.intl.string(T.t.ifbXnL), deleteBody: T.intl.format(T.t.a6Gz9J, { channelName: w }) }
            : O.isForumPost()
              ? {
                    deleteText: j ? T.intl.string(T.t.nEOg1N) : T.intl.string(T.t.xwMqD7),
                    deleteBody:
                        j && H && !P
                            ? T.intl.format(T.t["6/pY2+"], { postName: w })
                            : j
                              ? T.intl.format(T.t.su3voL, { postName: w })
                              : T.intl.string(T.t.RUHcyk),
                }
              : O.isThread()
                ? { deleteText: T.intl.string(T.t.H7vTe2), deleteBody: T.intl.format(T.t.a6Gz9J, { channelName: w }) }
                : M && V > 0
                  ? {
                        deleteText: T.intl.string(T.t["8D8Rsb"]),
                        deleteBody: T.intl.format(T.t["+qkiT9"], {
                            channelName: w,
                            numGuildRoleSubscriptionMembers: V,
                        }),
                    }
                  : {
                        deleteText: T.intl.string(T.t["8D8Rsb"]),
                        deleteBody: T.intl.format(T.t.a6Gz9J, { channelName: w }),
                    };
    return (0, l.jsx)(r.Modal, {
        size: "sm",
        onClose: v,
        transitionState: p,
        title: z,
        subtitle: W,
        actions: [
            { text: T.intl.string(T.t["ETE/oC"]), onClick: v, variant: "secondary" },
            { text: z, onClick: U, variant: "critical-primary" },
        ],
        children: K
            ? (0, l.jsx)(a.E, {
                  variant: "text-md/normal",
                  color: "text-default",
                  children: T.intl.format(T.t.Ze005A, { count: x.length }),
              })
            : null,
    });
};

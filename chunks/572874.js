i.d(e, { default: () => w });
var n = i(477900),
    l = i(582128),
    a = i(17928),
    r = i(189213),
    s = i(834730),
    o = i(47167),
    d = i(298702),
    u = i(266990),
    c = i(246338),
    f = i(60868),
    A = i(374084),
    m = i(894328),
    p = i(499211),
    C = i(317525),
    E = i(260509),
    b = i(34457),
    g = i(98318),
    G = i(855918),
    k = i(652215),
    T = i(386784),
    h = i(508654),
    x = i(468689),
    y = i(456874),
    B = i(280450),
    I = i(71393),
    O = i(576705),
    U = i(105292);
let w = (t) => {
    let e,
        i,
        { channel: w, onClose: D, onConfirm: N, transitionState: S } = t,
        R = (0, o.Ay)(w, !0),
        v = w.id,
        L = w.isForumPost(),
        _ = (0, a.bG)([I.A], () => I.A.getGuild(w.getGuildId())),
        j = (0, d.iD)(w.getGuildId(), (0, c.us)(w)),
        K = (0, h.ob)(v),
        { isSubscriptionGated: M } = (0, p.A)(w.id),
        z =
            ((e = (0, a.bG)([C.A], () => (null != _ ? C.A.getRolesSnapshot(_.id) : void 0))),
            (i = (0, T.A)(_?.id)),
            l.useMemo(() => {
                let t =
                        null != _ && null != e
                            ? (function (t, e, i) {
                                  let n = new Set();
                                  for (let t of Object.keys(i.permissionOverwrites)) {
                                      let l = e[t],
                                          a = i.permissionOverwrites[t];
                                      (0, g.U)(l) && (0, G.Uj)(i, a) && n.add(l);
                                  }
                                  let l = e[(0, E.af)(t)],
                                      a = !(0, b._m)(l, k.xBc.VIEW_CHANNEL),
                                      r = (0, G.AN)(i, i.permissionOverwrites[t.id]);
                                  if (a && !r) for (let t of Object.values(e)) (0, g.U)(t) && (0, G.iR)(t) && n.add(t);
                                  return [...n];
                              })(_, e, w)
                            : [],
                    n = 0;
                for (let e of t) {
                    let t = e.id;
                    if (null != t) {
                        let e = i?.[t];
                        null != e && (n += e);
                    }
                }
                return n;
            }, [i, _, w, e])),
        [F, H] = l.useState(),
        P = (0, a.bG)([B.default], () => w.isOwner(B.default.getId()), [w]),
        Y = (0, a.bG)([O.A], () => O.A.can(w.isThread() ? k.xBc.MANAGE_THREADS : k.xBc.MANAGE_CHANNELS, w), [w]),
        V = (0, a.bG)([y.A], () => y.A.getCount(w.id) ?? 0, [w.id]),
        J = L && (Y || (P && V < 1)),
        X = K.length > 0 && (w.type === k.rbe.GUILD_VOICE || w.type === k.rbe.GUILD_STAGE_VOICE);
    if (
        (l.useEffect(() => {
            (async () => {
                if (!(await (0, f.F)(w.getGuildId(), v))) return H(A.K5.DEFAULT);
                let t = await (0, m.D)(w.getGuildId(), v);
                if (null != t) return H(t);
            })();
        }, [w, v]),
        l.useEffect(() => {
            null != _ &&
                _.features.has(k.GuildFeatures.COMMUNITY) &&
                (_.rulesChannelId === v ? H(A.K5.RULES) : _.publicUpdatesChannelId === v && H(A.K5.UPDATES));
        }, [_, v]),
        null == _)
    )
        return null;
    if (null != F) {
        let t;
        async function q() {
            null != _ && (await x.A.open(_.id, k.BEX.ONBOARDING), await D());
        }
        async function W() {
            null != _ && (await x.A.open(_.id, k.BEX.COMMUNITY), await D());
        }
        switch (F) {
            case A.K5.DEFAULT:
                t = U.intl.format(U.t.iWlB6h, { onClick: q });
                break;
            case A.K5.TODO:
                t = U.intl.format(U.t["/rjozD"], { onClick: q });
                break;
            case A.K5.RESOURCE:
                t = U.intl.format(U.t.Nf5ptw, { onClick: q });
                break;
            case A.K5.RULES:
                t = U.intl.format(U.t["kB1f+3"], { reason: U.intl.string(U.t.yjrZPl), onClick: W });
                break;
            case A.K5.UPDATES:
                t = U.intl.format(U.t["kB1f+3"], { reason: U.intl.string(U.t["1B1/NB"]), onClick: W });
        }
        return (0, n.jsx)(r.a, {
            title: U.intl.string(U.t["TY/V+H"]),
            onClose: D,
            subtitle: t,
            transitionState: S,
            actions: [{ text: U.intl.string(U.t.BddRzS), onClick: D, variant: "primary" }],
        });
    }
    let { deleteText: Z, deleteBody: Q } =
        w.type === k.rbe.GUILD_CATEGORY
            ? { deleteText: U.intl.string(U.t.ifbXnL), deleteBody: U.intl.format(U.t.a6Gz9J, { channelName: R }) }
            : w.isForumPost()
              ? {
                    deleteText: J ? U.intl.string(U.t.nEOg1N) : U.intl.string(U.t.xwMqD7),
                    deleteBody:
                        J && P && !Y
                            ? U.intl.format(U.t["6/pY2+"], { postName: R })
                            : J
                              ? U.intl.format(U.t.su3voL, { postName: R })
                              : U.intl.string(U.t.RUHcyk),
                }
              : w.isThread()
                ? { deleteText: U.intl.string(U.t.H7vTe2), deleteBody: U.intl.format(U.t.a6Gz9J, { channelName: R }) }
                : M && z > 0
                  ? {
                        deleteText: U.intl.string(U.t["8D8Rsb"]),
                        deleteBody: U.intl.format(U.t["+qkiT9"], {
                            channelName: R,
                            numGuildRoleSubscriptionMembers: z,
                        }),
                    }
                  : {
                        deleteText: U.intl.string(U.t["8D8Rsb"]),
                        deleteBody: U.intl.format(U.t.a6Gz9J, { channelName: R }),
                    };
    return null != j
        ? (0, n.jsx)(u.lt, { app: j, channelId: w.id, onPlainConfirm: N, onClose: D, transitionState: S })
        : (0, n.jsx)(r.a, {
              size: "sm",
              onClose: D,
              transitionState: S,
              title: Z,
              subtitle: Q,
              actions: [
                  { text: U.intl.string(U.t["ETE/oC"]), onClick: D, variant: "secondary" },
                  { text: Z, onClick: N, variant: "critical-primary" },
              ],
              children: X
                  ? (0, n.jsx)(s.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: U.intl.format(U.t.Ze005A, { count: K.length }),
                    })
                  : null,
          });
};

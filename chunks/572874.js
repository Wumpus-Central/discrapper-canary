i.d(e, { default: () => I });
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
    T = i(652215),
    k = i(386784),
    x = i(508654),
    h = i(468689),
    y = i(456874),
    O = i(280450),
    w = i(71393),
    B = i(576705),
    D = i(105292);
let I = function (t) {
    let e,
        i,
        { channel: I, onClose: N, onConfirm: U, transitionState: S } = t,
        v = (0, o.Ay)(I, !0),
        R = I.id,
        _ = I.isForumPost(),
        L = (0, a.bG)([w.A], () => w.A.getGuild(I.getGuildId())),
        j = (0, d.iD)(I.getGuildId(), (0, c.us)(I)),
        M = (0, x.ob)(R),
        { isSubscriptionGated: z } = (0, p.A)(I.id),
        F =
            ((e = (0, a.bG)([C.A], () => (null != L ? C.A.getRolesSnapshot(L.id) : void 0))),
            (i = (0, k.A)(L?.id)),
            l.useMemo(() => {
                let t =
                        null != L && null != e
                            ? (function (t, e, i) {
                                  let n = new Set();
                                  for (let t of Object.keys(i.permissionOverwrites)) {
                                      let l = e[t],
                                          a = i.permissionOverwrites[t];
                                      (0, g.U)(l) && (0, G.Uj)(i, a) && n.add(l);
                                  }
                                  let l = e[(0, E.af)(t)],
                                      a = !(0, b._m)(l, T.xBc.VIEW_CHANNEL),
                                      r = (0, G.AN)(i, i.permissionOverwrites[t.id]);
                                  if (a && !r) for (let t of Object.values(e)) (0, g.U)(t) && (0, G.iR)(t) && n.add(t);
                                  return [...n];
                              })(L, e, I)
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
            }, [i, L, I, e])),
        [H, K] = l.useState(),
        P = (0, a.bG)([O.default], () => I.isOwner(O.default.getId()), [I]),
        Y = (0, a.bG)([B.A], () => B.A.can(I.isThread() ? T.xBc.MANAGE_THREADS : T.xBc.MANAGE_CHANNELS, I), [I]),
        V = (0, a.bG)([y.A], () => y.A.getCount(I.id) ?? 0, [I.id]),
        J = _ && (Y || (P && V < 1)),
        X = M.length > 0 && (I.type === T.rbe.GUILD_VOICE || I.type === T.rbe.GUILD_STAGE_VOICE);
    if (
        (l.useEffect(() => {
            (async () => {
                if (!(await (0, f.F)(I.getGuildId(), R))) return K(A.K5.DEFAULT);
                let t = await (0, m.D)(I.getGuildId(), R);
                if (null != t) return K(t);
            })();
        }, [I, R]),
        null == L)
    )
        return null;
    let q = L.features.has(T.GuildFeatures.COMMUNITY) && L.publicUpdatesChannelId === R ? A.K5.UPDATES : H;
    if (null != q) {
        let t;
        async function W() {
            null != L && (await h.A.open(L.id, T.BEX.ONBOARDING), await N());
        }
        async function Z() {
            null != L && (await h.A.open(L.id, T.BEX.COMMUNITY), await N());
        }
        switch (q) {
            case A.K5.DEFAULT:
                t = D.intl.format(D.t.iWlB6h, { onClick: W });
                break;
            case A.K5.TODO:
                t = D.intl.format(D.t["/rjozD"], { onClick: W });
                break;
            case A.K5.RESOURCE:
                t = D.intl.format(D.t.Nf5ptw, { onClick: W });
                break;
            case A.K5.UPDATES:
                t = D.intl.format(D.t["kB1f+3"], { reason: D.intl.string(D.t["1B1/NB"]), onClick: Z });
        }
        return (0, n.jsx)(r.a, {
            title: D.intl.string(D.t["TY/V+H"]),
            onClose: N,
            subtitle: t,
            transitionState: S,
            actions: [{ text: D.intl.string(D.t.BddRzS), onClick: N, variant: "primary" }],
        });
    }
    let { deleteText: Q, deleteBody: $ } =
        I.type === T.rbe.GUILD_CATEGORY
            ? { deleteText: D.intl.string(D.t.ifbXnL), deleteBody: D.intl.format(D.t.a6Gz9J, { channelName: v }) }
            : I.isForumPost()
              ? {
                    deleteText: J ? D.intl.string(D.t.nEOg1N) : D.intl.string(D.t.xwMqD7),
                    deleteBody:
                        J && P && !Y
                            ? D.intl.format(D.t["6/pY2+"], { postName: v })
                            : J
                              ? D.intl.format(D.t.su3voL, { postName: v })
                              : D.intl.string(D.t.RUHcyk),
                }
              : I.isThread()
                ? { deleteText: D.intl.string(D.t.H7vTe2), deleteBody: D.intl.format(D.t.a6Gz9J, { channelName: v }) }
                : z && F > 0
                  ? {
                        deleteText: D.intl.string(D.t["8D8Rsb"]),
                        deleteBody: D.intl.format(D.t["+qkiT9"], {
                            channelName: v,
                            numGuildRoleSubscriptionMembers: F,
                        }),
                    }
                  : {
                        deleteText: D.intl.string(D.t["8D8Rsb"]),
                        deleteBody: D.intl.format(D.t.a6Gz9J, { channelName: v }),
                    };
    return null != j
        ? (0, n.jsx)(u.lt, { app: j, channelId: I.id, onPlainConfirm: U, onClose: N, transitionState: S })
        : (0, n.jsx)(r.a, {
              size: "sm",
              onClose: N,
              transitionState: S,
              title: Q,
              subtitle: $,
              actions: [
                  { text: D.intl.string(D.t["ETE/oC"]), onClick: N, variant: "secondary" },
                  { text: Q, onClick: U, variant: "critical-primary" },
              ],
              children: X
                  ? (0, n.jsx)(s.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: D.intl.format(D.t.Ze005A, { count: M.length }),
                    })
                  : null,
          });
};

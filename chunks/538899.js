(l(323874), l(14289), l(35956));
var a = l(477900),
    n = l(582128),
    i = l(855986),
    s = l(620632),
    r = l(189213),
    d = l(123292),
    c = l(346055),
    u = l(138399),
    o = l(608299),
    h = l(433777),
    C = l(390248),
    A = l(946274),
    p = l(409481),
    g = l(7909),
    E = l(734057),
    b = l(31717),
    y = l(71393),
    I = l(596344),
    T = l(453771),
    f = l(811091),
    M = l(292348),
    x = l(518960),
    _ = l(382287),
    j = l(256265),
    k = l(853742),
    m = l(173404),
    S = l(218152),
    v = l(652215),
    L = l(818348),
    w = l(792996),
    O = l(821737);
l.d(
    t,
    {},
    {
        default: function (e) {
            let { threadId: t, attachments: l, sendMessage: G, transitionState: R, onClose: D } = e,
                F = (0, i.bG)([E.A], () => E.A.getChannel(t), [t]),
                N = (0, i.bG)([y.A], () => y.A.getGuild(F?.getGuildId()), [F]),
                U = (0, i.bG)([E.A], () => E.A.getChannel(F?.parent_id), [F]),
                V = l[0],
                B = V?.item,
                H = V?.isVideo ?? !1,
                P = B?.file,
                W = n.useMemo(() => (H && null != P ? URL.createObjectURL(P) : null), [P, H]);
            n.useEffect(() => {
                if (null != W) return () => URL.revokeObjectURL(W);
            }, [W]);
            let [J, K] = n.useState(null);
            n.useEffect(() => {
                H || null == B || (0, A.JF)(B.file, (e, t) => K(e), L.tE);
            }, [B, H]);
            let X = H ? W : J,
                z =
                    null != V && null != X
                        ? {
                              type: j.vV.ATTACHMENT,
                              src: X,
                              width: 72,
                              height: 72,
                              spoiler: V.spoiler,
                              alt: V.description ?? void 0,
                              isVideo: H,
                              mediaIndex: 0,
                              srcIsAnimated: !1,
                          }
                        : null,
                [Q, Y] = n.useState(!1),
                Z = n.useCallback(() => {
                    ((0, k.jh)({ added: !1 }), G(), D());
                }, [G, D]),
                q = n.useCallback(() => {
                    null != F &&
                        null != N &&
                        ((0, k.jh)({ added: !0 }),
                        (async function (e) {
                            let t,
                                { thread: l, attachments: a, setIsUploading: n, guild: i, onClose: r } = e,
                                d = f.default.castChannelIdAsMessageId(l.id),
                                c = new h.A();
                            c.on("progress", (e) => {
                                let t = (0, p.C)((0, T.o2)(i.id));
                                e.currentSize > t && (c.cancel(), n(!1), r(), (0, x.V)(l, (0, _.LJ)(a)));
                            });
                            let A = I.A.getMessage(l.id, d),
                                E = null != A ? A.attachments : [];
                            n(!0);
                            try {
                                t = await c.uploadFiles(a);
                            } catch (e) {
                                n(!1);
                                return;
                            }
                            let y = [...E, ...(t.map((e, t) => (0, M.OW)(e, t)) ?? [])];
                            try {
                                await g.A.unarchiveThreadIfNecessary(l.id);
                            } catch {
                                (n(!1), r());
                                return;
                            }
                            try {
                                (await s.Bo.patch({
                                    url: v.Rsh.MESSAGE(l.id, d),
                                    body: { attachments: y },
                                    rejectWithError: (0, s.fT)(),
                                }),
                                    r(),
                                    o.A.clearAll(l.id, b.C.ChannelMessage));
                            } catch (e) {
                                (n(!1),
                                    e.body?.code === v.t02.EXPLICIT_CONTENT &&
                                        (r(),
                                        u.A.sendExplicitMediaClydeError(
                                            l.id,
                                            e.body?.attachments,
                                            C.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                                        ),
                                        o.A.clearAll(l.id, b.C.ChannelMessage)));
                            }
                        })({ thread: F, attachments: l, setIsUploading: Y, guild: N, onClose: D }));
                }, [F, l, Y, N, D]);
            return null == U
                ? null
                : (0, a.jsx)(r.a, {
                      title: w.intl.string(w.t["+SZF6S"]),
                      subtitle: w.intl.string(w.t["0Ycgw5"]),
                      transitionState: R,
                      onClose: D,
                      actionBarInput: (0, a.jsx)(d.Q, {
                          variant: "secondary",
                          disabled: Q,
                          onClick: D,
                          text: w.intl.string(w.t["ETE/oC"]),
                      }),
                      actions: [
                          { variant: "secondary", text: w.intl.string(w.t["8rKVHL"]), disabled: Q, onClick: Z },
                          {
                              variant: "primary",
                              text: w.intl.string(w.t.d611xH),
                              loading: Q,
                              onClick: q,
                              autoFocus: !0,
                          },
                      ],
                      children: (0, a.jsx)(S.Cp, {
                          channel: U,
                          children: (0, a.jsx)(c.M, {
                              children: (0, a.jsx)(m.Ay, {
                                  threadId: t,
                                  goToThread: L.tE,
                                  overrideMedia: z,
                                  className: O.u,
                              }),
                          }),
                      }),
                  });
        },
    },
);

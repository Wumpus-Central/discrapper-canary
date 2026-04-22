t.d(i, { default: () => P });
var l = t(627968),
    s = t(64700),
    a = t(110259),
    n = t(189213),
    r = t(224640),
    d = t(289873),
    o = t(331322),
    c = t(821609),
    u = t(825484),
    h = t(123292),
    m = t(417597),
    _ = t(778712),
    x = t(890698),
    g = t(966327),
    A = t(964486),
    p = t(616755),
    v = t(793574),
    E = t(688810),
    j = t(915089),
    I = t(960736),
    f = t(9994),
    C = t(398884),
    N = t(611010),
    y = t(299091),
    T = t(287809),
    D = t(954571),
    b = t(486020),
    L = t(723702),
    R = t(837921),
    S = t(260451),
    w = t(972387),
    U = t(539895),
    O = t(233761),
    G = t(652215),
    M = t(985018),
    V = t(310253);
function k(e) {
    let { transitionState: i, inviteCode: t } = e,
        { analyticsLocations: s } = (0, E.Ay)(v.A.INVITE_MODAL);
    return (0, l.jsx)(E.f5, {
        value: s,
        children: (0, l.jsx)(n.Modal, {
            "aria-label": M.intl.string(M.t.u9zxnX),
            title: M.intl.string(M.t.u9zxnX),
            subtitle: M.intl.string(M.t.FWkU6P),
            transitionState: i,
            onClose: () => (w.A.close(t), Promise.resolve()),
            size: "sm",
            actions: [{ text: M.intl.string(M.t.wcqOoF), onClick: () => w.A.close(t) }],
        }),
    });
}
function P(e) {
    let i,
        t,
        n,
        { transitionState: P } = e;
    (0, m.bG)([T.default], () => T.default.getCurrentUser()?.premiumType);
    let Y = (0, m.bG)([T.default], () => T.default.getCurrentUser()),
        { invite: F, error: z, submitting: Z, invite_instance_id: H } = (0, m.cf)([U.A], () => U.A.getProps()),
        B = (0, m.bG)([y.A], () => y.A.getInvite(F?.code ?? "") ?? null),
        W = (0, m.bG)([y.A], () => y.A.getFriendMemberIds(F?.code ?? ""));
    s.useEffect(() => {
        null != F && null != F.guild && (0, I.dR)(F.approximate_member_count ?? 0, F.code, F.guild.id);
    }, [F, F?.approximate_member_count, F?.code, F?.guild?.id]);
    let q = (0, I.uE)(),
        { enabled: J, discoveryGuild: K, isLoading: X } = (0, S.qE)(F?.guild ?? null, "AcceptInviteModal"),
        { enabled: $ } = S.SH.useConfig({ location: "AcceptInviteModal" }),
        Q = $ ? W : null;
    s.useEffect(() => {
        !__OVERLAY__ && L.isPlatformEmbedded && ((0, L.isWindows)() ? R.Ay.minimize() : R.Ay.restore(), R.Ay.focus());
    }, []),
        (0, A.Ay)(() => {
            D.default.track(G.HAw.OPEN_MODAL, { type: "Accept Invite", invite_code: F?.code, guild_id: F?.guild?.id });
        });
    let ee = (0, j.GV)(),
        { analyticsLocations: ei } = (0, E.Ay)(v.A.INVITE_MODAL),
        et = Q?.length ?? 0,
        el = et > 0;
    if (
        (s.useEffect(() => {
            el &&
                F?.code != null &&
                D.default.track(G.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: F?.code,
                    guild_id: F.guild?.id,
                    friend_count: et,
                });
        }, [el, et, F?.code, F?.guild?.id]),
        null == F || null == Y)
    )
        return (0, l.jsx)(r.d, {
            size: "md",
            "aria-labelledby": ee,
            transitionState: P,
            onClose: () => (w.A.close(F?.code), Promise.resolve()),
            children: (0, l.jsx)("div", { className: V.g4, children: (0, l.jsx)(d.y, {}) }),
        });
    if (F.state === G.elq.EXPIRED || F.state === G.elq.BANNED || F.state === G.elq.ERROR)
        return (0, l.jsx)(k, { transitionState: P, inviteCode: F.code });
    if (null == F.channel)
        return (0, l.jsx)(r.d, {
            size: "md",
            "aria-labelledby": ee,
            transitionState: P,
            onClose: () => (w.A.close(F.code), Promise.resolve()),
            children: (0, l.jsx)("div", { className: V.g4, children: (0, l.jsx)(d.y, {}) }),
        });
    function es() {
        null != F && w.A.acceptInvite(F, H);
    }
    function ea() {
        D.default.track(G.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: F?.code, guild_id: F?.guild?.id }),
            w.A.close(F?.code);
    }
    let { guild: en, channel: er, inviter: ed, target_application: eo } = F,
        ec = null == F.guild && null == F.channel && null != ed,
        eu = null != en;
    if (null != eo) (i = en?.name), (t = N.Ay.createFromServer(eo).getCoverImageURL(1024));
    else if (null != en) (i = en.name), (t = b.Ay.getGuildSplashURL({ id: en.id, splash: en.splash }));
    else if (((null == (i = er.name) || "" === i) && null != ed && (i = ed.username), null == i))
        throw Error("no name for group DM invite");
    let eh = (0, C.Sn)();
    if (
        ((n = ec
            ? M.intl.string(M.t["e/6Ogt"])
            : M.intl.format(M.t["9sWQNT"], { usernameHook: () => (0, l.jsx)("span", { children: q }) })),
        X)
    )
        return (0, l.jsx)(r.d, {
            size: "md",
            "aria-labelledby": ee,
            transitionState: P,
            onClose: () => (ea(), Promise.resolve()),
            children: (0, l.jsx)("div", { className: V.g4, children: (0, l.jsx)(d.y, {}) }),
        });
    if (J && null != en)
        return (0, l.jsx)(E.f5, {
            value: ei,
            children: (0, l.jsx)(p.A, {
                transitionState: P,
                headerId: ee,
                channel: er,
                invite: F,
                guild: en,
                splashURL: t,
                friendMemberIds: Q ?? void 0,
                discoveryGuild: K,
                onClose: ea,
            }),
        });
    let em = null != B ? (0, f.oO)(B) : null,
        e_ = (function (e) {
            if (null == e) return !1;
            let i = null != e.description && e.description.length > 0,
                t = null != e.traits && e.traits.filter((e) => e.label.length > 0).length > 0,
                l = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
            return i && (t || l);
        })(em);
    return null != em && e_ && null != en && (S.SH.getConfig({ location: "AcceptInviteModal.hasProfile" }), $)
        ? (0, l.jsx)(E.f5, {
              value: ei,
              children: (0, l.jsx)(p.H, {
                  transitionState: P,
                  headerId: ee,
                  channel: er,
                  invite: F,
                  guild: en,
                  splashURL: t,
                  friendMemberIds: Q ?? void 0,
                  profile: em,
                  onClose: ea,
              }),
          })
        : (0, l.jsx)(E.f5, {
              value: ei,
              children: (0, l.jsx)(r.d, {
                  size: null != t ? "xl" : "sm",
                  "aria-labelledby": ee,
                  "aria-label": en?.name ?? er?.name ?? "",
                  transitionState: P,
                  onClose: () => (ea(), Promise.resolve()),
                  trackingProps: {
                      impression: {
                          impressionName: a.ImpressionNames.INVITE_ACCEPT,
                          impressionProperties: { guild_id: en?.id, invite_code: F.code },
                      },
                  },
                  children: (0, l.jsxs)("div", {
                      className: V.jT,
                      children: [
                          (0, l.jsx)("div", {
                              className: V.FG,
                              children: (0, l.jsxs)("div", {
                                  className: V.Ro,
                                  children: [
                                      (0, l.jsx)("div", {
                                          id: ee,
                                          children: (0, l.jsx)(x.A, { invite: F, disableUser: eu, error: z }),
                                      }),
                                      (0, l.jsxs)("div", {
                                          children: [
                                              eh ? (0, l.jsx)(O.A, {}) : null,
                                              (0, l.jsxs)(o.B, {
                                                  gap: 8,
                                                  align: "center",
                                                  children: [
                                                      null == eo
                                                          ? (0, l.jsx)(c.$, {
                                                                onClick: es,
                                                                loading: Z,
                                                                disabled: eh,
                                                                variant: "primary",
                                                                fullWidth: !0,
                                                                text: eh ? M.intl.string(M.t.ZNCziL) : n,
                                                                icon:
                                                                    eh || null == Y
                                                                        ? void 0
                                                                        : () =>
                                                                              (0, l.jsx)(g.A, {
                                                                                  "aria-hidden": !0,
                                                                                  size: _._3.SIZE_16,
                                                                                  user: Y,
                                                                                  className: V.Mp,
                                                                              }),
                                                            })
                                                          : (0, l.jsxs)(u.e, {
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, l.jsx)(c.$, {
                                                                        variant: "secondary",
                                                                        text: M.intl.string(M.t.eylRaY),
                                                                        onClick: es,
                                                                        loading: Z,
                                                                    }),
                                                                    (0, l.jsx)(c.$, {
                                                                        variant: "primary",
                                                                        text: M.intl.string(M.t.RscU7I),
                                                                        onClick: es,
                                                                        loading: Z,
                                                                    }),
                                                                ],
                                                            }),
                                                      (0, l.jsx)(h.Q, {
                                                          onClick: ea,
                                                          variant: "secondary",
                                                          text: M.intl.string(M.t.ndsK4Z),
                                                          textVariant: "text-sm/medium",
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                          null != t && (0, l.jsx)("div", { className: V.ll, style: { backgroundImage: `url(${t})` } }),
                      ],
                  }),
              }),
          });
}

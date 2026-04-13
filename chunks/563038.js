t.d(i, { default: () => G });
var l = t(627968),
    s = t(64700),
    n = t(110259),
    a = t(158954),
    r = t(417597),
    o = t(397927),
    d = t(890698),
    c = t(966327),
    u = t(964486),
    m = t(616755),
    _ = t(793574),
    h = t(688810),
    x = t(915089),
    g = t(960736),
    p = t(9994),
    A = t(398884),
    E = t(611010),
    j = t(299091),
    v = t(287809),
    I = t(954571),
    f = t(486020),
    C = t(723702),
    T = t(837921),
    y = t(260451),
    D = t(972387),
    N = t(539895),
    b = t(233761),
    L = t(652215),
    S = t(985018),
    U = t(126365);
function R(e) {
    let { transitionState: i, inviteCode: t } = e,
        { analyticsLocations: s } = (0, h.Ay)(_.A.INVITE_MODAL);
    return (0, l.jsx)(h.f5, {
        value: s,
        children: (0, l.jsx)(a.Modal, {
            "aria-label": S.intl.string(S.t.u9zxnX),
            title: S.intl.string(S.t.u9zxnX),
            subtitle: S.intl.string(S.t.FWkU6P),
            transitionState: i,
            onClose: () => (D.A.close(t), Promise.resolve()),
            size: "sm",
            actions: [{ text: S.intl.string(S.t.wcqOoF), onClick: () => D.A.close(t) }],
        }),
    });
}
function G(e) {
    let i,
        t,
        G,
        { transitionState: O } = e;
    (0, r.bG)([v.default], () => v.default.getCurrentUser()?.premiumType);
    let k = (0, r.bG)([v.default], () => v.default.getCurrentUser()),
        { invite: P, error: M, submitting: V, invite_instance_id: Y } = (0, r.cf)([N.A], () => N.A.getProps()),
        z = (0, r.bG)([j.A], () => j.A.getInvite(P?.code ?? "") ?? null),
        w = (0, r.bG)([j.A], () => j.A.getFriendMemberIds(P?.code ?? ""));
    s.useEffect(() => {
        null != P && null != P.guild && (0, g.dR)(P.approximate_member_count ?? 0, P.code, P.guild.id);
    }, [P, P?.approximate_member_count, P?.code, P?.guild?.id]);
    let F = (0, g.uE)(),
        { enabled: H, discoveryGuild: W, isLoading: B } = (0, y.qE)(P?.guild ?? null, "AcceptInviteModal"),
        { enabled: J } = y.SH.useConfig({ location: "AcceptInviteModal" }),
        K = J ? w : null;
    s.useEffect(() => {
        !__OVERLAY__ && C.isPlatformEmbedded && ((0, C.isWindows)() ? T.Ay.minimize() : T.Ay.restore(), T.Ay.focus());
    }, []),
        (0, u.Ay)(() => {
            I.default.track(L.HAw.OPEN_MODAL, { type: "Accept Invite", invite_code: P?.code, guild_id: P?.guild?.id });
        });
    let Z = (0, x.GV)(),
        { analyticsLocations: q } = (0, h.Ay)(_.A.INVITE_MODAL),
        $ = K?.length ?? 0,
        Q = $ > 0;
    if (
        (s.useEffect(() => {
            Q &&
                P?.code != null &&
                I.default.track(L.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: P?.code,
                    guild_id: P.guild?.id,
                    friend_count: $,
                });
        }, [Q, $, P?.code, P?.guild?.id]),
        null == P || null == k)
    )
        return null;
    if (P.state === L.elq.EXPIRED || P.state === L.elq.BANNED || P.state === L.elq.ERROR)
        return (0, l.jsx)(R, { transitionState: O, inviteCode: P.code });
    if (null == P.channel) return null;
    function X() {
        null != P && D.A.acceptInvite(P, Y);
    }
    function ee() {
        I.default.track(L.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: P?.code, guild_id: P?.guild?.id }),
            D.A.close(P?.code);
    }
    let { guild: ei, channel: et, inviter: el, target_application: es } = P,
        en = null == P.guild && null == P.channel && null != el,
        ea = null != ei;
    if (null != es) (i = ei?.name), (t = E.Ay.createFromServer(es).getCoverImageURL(1024));
    else if (null != ei) (i = ei.name), (t = f.Ay.getGuildSplashURL({ id: ei.id, splash: ei.splash }));
    else if (((null == (i = et.name) || "" === i) && null != el && (i = el.username), null == i))
        throw Error("no name for group DM invite");
    let er = (0, A.Sn)();
    if (
        ((G = en
            ? S.intl.string(S.t["e/6Ogt"])
            : S.intl.format(S.t["9sWQNT"], { usernameHook: () => (0, l.jsx)("span", { children: F }) })),
        B)
    )
        return (0, l.jsx)(a.dWK, {
            size: "md",
            "aria-labelledby": Z,
            transitionState: O,
            onClose: () => (ee(), Promise.resolve()),
            children: (0, l.jsx)("div", { className: U.g4, children: (0, l.jsx)(a.y$y, {}) }),
        });
    if (H && null != ei)
        return (0, l.jsx)(h.f5, {
            value: q,
            children: (0, l.jsx)(m.A, {
                transitionState: O,
                headerId: Z,
                channel: et,
                invite: P,
                guild: ei,
                splashURL: t,
                friendMemberIds: K ?? void 0,
                discoveryGuild: W,
                onClose: ee,
            }),
        });
    let eo = null != z ? (0, p.oO)(z) : null,
        ed = (function (e) {
            if (null == e) return !1;
            let i = null != e.description && e.description.length > 0,
                t = null != e.traits && e.traits.filter((e) => e.label.length > 0).length > 0,
                l = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
            return i && (t || l);
        })(eo);
    return null != eo && ed && null != ei && (y.SH.getConfig({ location: "AcceptInviteModal.hasProfile" }), J)
        ? (0, l.jsx)(h.f5, {
              value: q,
              children: (0, l.jsx)(m.H, {
                  transitionState: O,
                  headerId: Z,
                  channel: et,
                  invite: P,
                  guild: ei,
                  splashURL: t,
                  friendMemberIds: K ?? void 0,
                  profile: eo,
                  onClose: ee,
              }),
          })
        : (0, l.jsx)(h.f5, {
              value: q,
              children: (0, l.jsx)(a.dWK, {
                  size: null != t ? "xl" : "sm",
                  "aria-labelledby": Z,
                  "aria-label": ei?.name ?? et?.name ?? "",
                  transitionState: O,
                  onClose: () => (ee(), Promise.resolve()),
                  trackingProps: {
                      impression: {
                          impressionName: n.ImpressionNames.INVITE_ACCEPT,
                          impressionProperties: { guild_id: ei?.id, invite_code: P.code },
                      },
                  },
                  children: (0, l.jsxs)("div", {
                      className: U.jT,
                      children: [
                          (0, l.jsx)("div", {
                              className: U.FG,
                              children: (0, l.jsxs)("div", {
                                  className: U.Ro,
                                  children: [
                                      (0, l.jsx)("div", {
                                          id: Z,
                                          children: (0, l.jsx)(d.A, { invite: P, disableUser: ea, error: M }),
                                      }),
                                      (0, l.jsxs)("div", {
                                          children: [
                                              er ? (0, l.jsx)(b.A, {}) : null,
                                              (0, l.jsxs)(a.BJc, {
                                                  gap: 8,
                                                  align: "center",
                                                  children: [
                                                      null == es
                                                          ? (0, l.jsx)(a.$nd, {
                                                                onClick: X,
                                                                loading: V,
                                                                disabled: er,
                                                                variant: "primary",
                                                                fullWidth: !0,
                                                                text: er ? S.intl.string(S.t.ZNCziL) : G,
                                                                icon:
                                                                    er || null == k
                                                                        ? void 0
                                                                        : () =>
                                                                              (0, l.jsx)(c.A, {
                                                                                  "aria-hidden": !0,
                                                                                  size: o._3J.SIZE_16,
                                                                                  user: k,
                                                                                  className: U.Mp,
                                                                              }),
                                                            })
                                                          : (0, l.jsxs)(a.e2v, {
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, l.jsx)(a.$nd, {
                                                                        variant: "secondary",
                                                                        text: S.intl.string(S.t.eylRaY),
                                                                        onClick: X,
                                                                        loading: V,
                                                                    }),
                                                                    (0, l.jsx)(a.$nd, {
                                                                        variant: "primary",
                                                                        text: S.intl.string(S.t.RscU7I),
                                                                        onClick: X,
                                                                        loading: V,
                                                                    }),
                                                                ],
                                                            }),
                                                      (0, l.jsx)(a.QWc, {
                                                          onClick: ee,
                                                          variant: "secondary",
                                                          text: S.intl.string(S.t.ndsK4Z),
                                                          textVariant: "text-sm/medium",
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                          null != t && (0, l.jsx)("div", { className: U.ll, style: { backgroundImage: `url(${t})` } }),
                      ],
                  }),
              }),
          });
}

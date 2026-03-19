i.d(t, { default: () => U });
var l = i(627968),
    n = i(64700),
    a = i(110259),
    s = i(158954),
    r = i(417597),
    d = i(397927),
    o = i(890698),
    c = i(966327),
    u = i(964486),
    m = i(616755),
    x = i(793574),
    g = i(688810),
    h = i(915089),
    _ = i(960736),
    p = i(9994),
    A = i(398884),
    j = i(611010),
    E = i(299091),
    v = i(287809),
    I = i(954571),
    f = i(486020),
    T = i(723702),
    C = i(837921),
    N = i(260451),
    y = i(972387),
    D = i(539895),
    S = i(233761),
    L = i(652215),
    b = i(985018),
    R = i(729950);
function O(e) {
    let { transitionState: t } = e,
        { analyticsLocations: i } = (0, g.Ay)(x.A.INVITE_MODAL);
    return (0, l.jsx)(g.f5, {
        value: i,
        children: (0, l.jsx)(s.Modal, {
            "aria-label": b.intl.string(b.t.u9zxnX),
            title: b.intl.string(b.t.u9zxnX),
            subtitle: b.intl.string(b.t.FWkU6P),
            transitionState: t,
            onClose: () => (y.A.close(), Promise.resolve()),
            size: "sm",
            actions: [{ text: b.intl.string(b.t.wcqOoF), onClick: y.A.close }],
        }),
    });
}
function U(e) {
    let t,
        i,
        U,
        { transitionState: G } = e;
    (0, r.bG)([v.default], () => v.default.getCurrentUser()?.premiumType);
    let k = (0, r.bG)([v.default], () => v.default.getCurrentUser()),
        { invite: M, error: P, submitting: V } = (0, r.cf)([D.A], () => D.A.getProps()),
        F = (0, r.bG)([E.A], () => E.A.getInvite(M?.code ?? "") ?? null),
        Y = (0, r.bG)([E.A], () => E.A.getFriendMemberIds(M?.code ?? ""));
    n.useEffect(() => {
        null != M && null != M.guild && (0, _.dR)(M.approximate_member_count ?? 0, M.code, M.guild.id);
    }, [M, M?.approximate_member_count, M?.code, M?.guild?.id]);
    let z = (0, _.uE)(),
        { enabled: w, discoveryGuild: H, isLoading: B } = (0, N.qE)(M?.guild ?? null, "AcceptInviteModal"),
        { enabled: W } = N.SH.useConfig({ location: "AcceptInviteModal" }),
        J = W ? Y : null;
    n.useEffect(() => {
        !__OVERLAY__ && T.isPlatformEmbedded && ((0, T.isWindows)() ? C.Ay.minimize() : C.Ay.restore(), C.Ay.focus());
    }, []),
        (0, u.Ay)(() => {
            I.default.track(L.HAw.OPEN_MODAL, { type: "Accept Invite", invite_code: M?.code, guild_id: M?.guild?.id });
        });
    let K = (0, h.GV)(),
        { analyticsLocations: Z } = (0, g.Ay)(x.A.INVITE_MODAL),
        Q = J?.length ?? 0,
        $ = Q > 0;
    if (
        (n.useEffect(() => {
            $ &&
                M?.code != null &&
                I.default.track(L.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: M?.code,
                    guild_id: M.guild?.id,
                    friend_count: Q,
                });
        }, [$, Q, M?.code, M?.guild?.id]),
        null == M || null == k)
    )
        return null;
    if (M.state === L.elq.EXPIRED || M.state === L.elq.BANNED || M.state === L.elq.ERROR)
        return (0, l.jsx)(O, { transitionState: G });
    if (null == M.channel) return null;
    function q() {
        null != M && y.A.acceptInvite(M);
    }
    function X() {
        I.default.track(L.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: M?.code, guild_id: M?.guild?.id }), y.A.close();
    }
    let { guild: ee, channel: et, inviter: ei, target_application: el } = M,
        en = null == M.guild && null == M.channel && null != ei,
        ea = null != ee;
    if (null != el) (t = ee?.name), (i = j.Ay.createFromServer(el).getCoverImageURL(1024));
    else if (null != ee) (t = ee.name), (i = f.Ay.getGuildSplashURL({ id: ee.id, splash: ee.splash }));
    else if (((null == (t = et.name) || "" === t) && null != ei && (t = ei.username), null == t))
        throw Error("no name for group DM invite");
    let es = (0, A.Sn)();
    if (
        ((U = en
            ? b.intl.string(b.t["e/6Ogt"])
            : b.intl.format(b.t["9sWQNT"], { usernameHook: () => (0, l.jsx)("span", { children: z }) })),
        B)
    )
        return (0, l.jsx)(s.dWK, {
            size: "md",
            "aria-labelledby": K,
            transitionState: G,
            onClose: () => (X(), Promise.resolve()),
            children: (0, l.jsx)("div", { className: R.g4, children: (0, l.jsx)(s.y$y, {}) }),
        });
    if (w && null != ee)
        return (0, l.jsx)(g.f5, {
            value: Z,
            children: (0, l.jsx)(m.A, {
                transitionState: G,
                headerId: K,
                channel: et,
                invite: M,
                guild: ee,
                splashURL: i,
                friendMemberIds: J ?? void 0,
                discoveryGuild: H,
                onClose: X,
            }),
        });
    let er = null != F ? (0, p.oO)(F) : null,
        ed = (function (e) {
            if (null == e) return !1;
            let t = null != e.description && e.description.length > 0,
                i = null != e.traits && e.traits.filter((e) => e.label.length > 0).length > 0,
                l = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
            return t && (i || l);
        })(er);
    return null != er && ed && null != ee && (N.SH.getConfig({ location: "AcceptInviteModal.hasProfile" }), W)
        ? (0, l.jsx)(g.f5, {
              value: Z,
              children: (0, l.jsx)(m.H, {
                  transitionState: G,
                  headerId: K,
                  channel: et,
                  invite: M,
                  guild: ee,
                  splashURL: i,
                  friendMemberIds: J ?? void 0,
                  profile: er,
                  onClose: X,
              }),
          })
        : (0, l.jsx)(g.f5, {
              value: Z,
              children: (0, l.jsx)(s.dWK, {
                  size: null != i ? "xl" : "sm",
                  "aria-labelledby": K,
                  "aria-label": ee?.name ?? et?.name ?? "",
                  transitionState: G,
                  onClose: () => (X(), Promise.resolve()),
                  trackingProps: {
                      impression: {
                          impressionName: a.ImpressionNames.INVITE_ACCEPT,
                          impressionProperties: { guild_id: ee?.id, invite_code: M.code },
                      },
                  },
                  children: (0, l.jsxs)("div", {
                      className: R.jT,
                      children: [
                          (0, l.jsx)("div", {
                              className: R.FG,
                              children: (0, l.jsxs)("div", {
                                  className: R.Ro,
                                  children: [
                                      (0, l.jsx)("div", {
                                          id: K,
                                          children: (0, l.jsx)(o.A, { invite: M, disableUser: ea, error: P }),
                                      }),
                                      (0, l.jsxs)("div", {
                                          children: [
                                              es ? (0, l.jsx)(S.A, {}) : null,
                                              (0, l.jsxs)(s.BJc, {
                                                  gap: 8,
                                                  align: "center",
                                                  children: [
                                                      null == el
                                                          ? (0, l.jsx)(s.$nd, {
                                                                onClick: q,
                                                                loading: V,
                                                                disabled: es,
                                                                variant: "primary",
                                                                fullWidth: !0,
                                                                text: es ? b.intl.string(b.t.ZNCziL) : U,
                                                                icon:
                                                                    es || null == k
                                                                        ? void 0
                                                                        : () =>
                                                                              (0, l.jsx)(c.A, {
                                                                                  "aria-hidden": !0,
                                                                                  size: d._3J.SIZE_16,
                                                                                  user: k,
                                                                                  className: R.Mp,
                                                                              }),
                                                            })
                                                          : (0, l.jsxs)(s.e2v, {
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, l.jsx)(s.$nd, {
                                                                        variant: "secondary",
                                                                        text: b.intl.string(b.t.eylRaY),
                                                                        onClick: q,
                                                                        loading: V,
                                                                    }),
                                                                    (0, l.jsx)(s.$nd, {
                                                                        variant: "primary",
                                                                        text: b.intl.string(b.t.RscU7I),
                                                                        onClick: q,
                                                                        loading: V,
                                                                    }),
                                                                ],
                                                            }),
                                                      (0, l.jsx)(s.QWc, {
                                                          onClick: X,
                                                          variant: "secondary",
                                                          text: b.intl.string(b.t.ndsK4Z),
                                                          textVariant: "text-sm/medium",
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                          null != i && (0, l.jsx)("div", { className: R.ll, style: { backgroundImage: `url(${i})` } }),
                      ],
                  }),
              }),
          });
}

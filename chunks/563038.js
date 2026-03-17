i.d(t, { default: () => G });
var l = i(627968),
    n = i(64700),
    a = i(110259),
    s = i(158954),
    r = i(417597),
    d = i(397927),
    o = i(890698),
    c = i(966327),
    u = i(616755),
    m = i(793574),
    x = i(688810),
    g = i(915089),
    h = i(960736),
    _ = i(9994),
    p = i(398884),
    A = i(611010),
    j = i(427157),
    E = i(299091),
    v = i(287809),
    I = i(954571),
    f = i(486020),
    T = i(723702),
    C = i(837921),
    N = i(430914),
    y = i(260451),
    D = i(972387),
    S = i(539895),
    b = i(233761),
    L = i(652215),
    R = i(985018),
    U = i(929252);
function O(e) {
    let { transitionState: t } = e,
        { analyticsLocations: i } = (0, x.Ay)(m.A.INVITE_MODAL);
    return (0, l.jsx)(x.f5, {
        value: i,
        children: (0, l.jsx)(s.Modal, {
            "aria-label": R.intl.string(R.t.u9zxnX),
            title: R.intl.string(R.t.u9zxnX),
            subtitle: R.intl.string(R.t.FWkU6P),
            transitionState: t,
            onClose: () => (D.A.close(), Promise.resolve()),
            size: "sm",
            actions: [{ text: R.intl.string(R.t.wcqOoF), onClick: D.A.close }],
        }),
    });
}
function G(e) {
    let t,
        i,
        G,
        { transitionState: k } = e;
    (0, r.bG)([v.default], () => v.default.getCurrentUser()?.premiumType);
    let M = (0, r.bG)([v.default], () => v.default.getCurrentUser()),
        { invite: P, error: V, submitting: F } = (0, r.cf)([S.A], () => S.A.getProps()),
        Y = (0, r.bG)([E.A], () => E.A.getInvite(P?.code ?? "") ?? null),
        z = (0, r.bG)([E.A], () => E.A.getFriendMemberIds(P?.code ?? ""));
    n.useEffect(() => {
        null != P && null != P.guild && (0, h.dR)(P.approximate_member_count ?? 0, P.code, P.guild.id);
    }, [P, P?.approximate_member_count, P?.code, P?.guild?.id]);
    let w = (0, h.uE)(),
        { showFriendsInServer: H, showInviter: B } = (0, N.uS)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
            guild: P?.guild,
        }),
        { enabled: W, discoveryGuild: J, isLoading: Z } = (0, y.qE)(P?.guild ?? null, "AcceptInviteModal"),
        { enabled: K } = y.SH.useConfig({ location: "AcceptInviteModal" }),
        Q = H || K ? z : null;
    n.useEffect(() => {
        !__OVERLAY__ && T.isPlatformEmbedded && ((0, T.isWindows)() ? C.Ay.minimize() : C.Ay.restore(), C.Ay.focus());
    }, []);
    let $ = (0, g.GV)(),
        { analyticsLocations: q } = (0, x.Ay)(m.A.INVITE_MODAL),
        X = Q?.length ?? 0,
        ee = X > 0;
    if (
        (n.useEffect(() => {
            ee &&
                P?.code != null &&
                I.default.track(L.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: P?.code,
                    guild_id: P.guild?.id,
                    friend_count: X,
                });
        }, [ee, X, P?.code, P?.guild?.id]),
        null == P || null == M)
    )
        return null;
    if (P.state === L.elq.EXPIRED || P.state === L.elq.BANNED || P.state === L.elq.ERROR)
        return (0, l.jsx)(O, { transitionState: k });
    if (null == P.channel) return null;
    function et() {
        null != P && D.A.acceptInvite(P);
    }
    function ei() {
        I.default.track(L.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: P?.code, guild_id: P?.guild?.id }), D.A.close();
    }
    let { guild: el, channel: en, inviter: ea, target_application: es } = P,
        er = null == P.guild && null == P.channel && null != ea,
        ed = B && (Q?.length ?? 0) > 0 && null != ea,
        eo = null != el || ed;
    if (null != es) (t = el?.name), (i = A.Ay.createFromServer(es).getCoverImageURL(1024));
    else if (null != el) (t = el.name), (i = f.Ay.getGuildSplashURL({ id: el.id, splash: el.splash }));
    else if (((null == (t = en.name) || "" === t) && null != ea && (t = ea.username), null == t))
        throw Error("no name for group DM invite");
    let ec = (0, p.Sn)();
    if (
        ((G = er
            ? R.intl.string(R.t["e/6Ogt"])
            : R.intl.format(R.t["9sWQNT"], { usernameHook: () => (0, l.jsx)("span", { children: w }) })),
        Z)
    )
        return (0, l.jsx)(s.dWK, {
            size: "md",
            "aria-labelledby": $,
            transitionState: k,
            onClose: () => (ei(), Promise.resolve()),
            children: (0, l.jsx)("div", { className: U.g4, children: (0, l.jsx)(s.y$y, {}) }),
        });
    if (W && null != el)
        return (0, l.jsx)(x.f5, {
            value: q,
            children: (0, l.jsx)(u.A, {
                transitionState: k,
                headerId: $,
                channel: en,
                invite: P,
                guild: el,
                splashURL: i,
                friendMemberIds: Q ?? void 0,
                discoveryGuild: J,
                onClose: ei,
            }),
        });
    let eu = null != Y ? (0, _.oO)(Y) : null,
        em = (function (e) {
            if (null == e) return !1;
            let t = null != e.description && e.description.length > 0,
                i = null != e.traits && e.traits.filter((e) => e.label.length > 0).length > 0,
                l = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
            return t && (i || l);
        })(eu);
    return null != eu && em && null != el && (y.SH.getConfig({ location: "AcceptInviteModal.hasProfile" }), K)
        ? (0, l.jsx)(x.f5, {
              value: q,
              children: (0, l.jsx)(u.H, {
                  transitionState: k,
                  headerId: $,
                  channel: en,
                  invite: P,
                  guild: el,
                  splashURL: i,
                  friendMemberIds: Q ?? void 0,
                  profile: eu,
                  onClose: ei,
              }),
          })
        : (0, l.jsx)(x.f5, {
              value: q,
              children: (0, l.jsx)(s.dWK, {
                  size: null != i ? "xl" : "sm",
                  "aria-labelledby": $,
                  "aria-label": el?.name ?? en?.name ?? "",
                  transitionState: k,
                  onClose: () => (ei(), Promise.resolve()),
                  trackingProps: {
                      impression: {
                          impressionName: a.ImpressionNames.INVITE_ACCEPT,
                          impressionProperties: { guild_id: el?.id, invite_code: P.code },
                      },
                  },
                  children: (0, l.jsxs)("div", {
                      className: U.jT,
                      children: [
                          (0, l.jsxs)("div", {
                              className: U.FG,
                              children: [
                                  ed &&
                                      (0, l.jsxs)("div", {
                                          className: U.$N,
                                          children: [
                                              (0, l.jsx)(c.A, { user: new j.A(ea), size: d._3J.SIZE_20 }),
                                              (0, l.jsx)(d.Text, {
                                                  tag: "span",
                                                  variant: "text-md/medium",
                                                  color: "text-subtle",
                                                  children: R.intl.format(R.t.ri1ubC, {
                                                      usernameHook: (e, t) =>
                                                          (0, l.jsx)(
                                                              d.Text,
                                                              {
                                                                  variant: "text-md/semibold",
                                                                  color: "text-default",
                                                                  tag: "span",
                                                                  children: ea.username,
                                                              },
                                                              t,
                                                          ),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  (0, l.jsxs)("div", {
                                      className: U.Ro,
                                      children: [
                                          (0, l.jsx)("div", {
                                              id: $,
                                              children: (0, l.jsx)(o.A, {
                                                  invite: P,
                                                  disableUser: eo,
                                                  error: V,
                                                  friendMemberIds: Q,
                                                  showInvitedByHeader: !ed,
                                              }),
                                          }),
                                          (0, l.jsxs)("div", {
                                              children: [
                                                  ec ? (0, l.jsx)(b.A, {}) : null,
                                                  (0, l.jsxs)(s.BJc, {
                                                      gap: 8,
                                                      align: "center",
                                                      children: [
                                                          null == es
                                                              ? (0, l.jsx)(s.$nd, {
                                                                    onClick: et,
                                                                    loading: F,
                                                                    disabled: ec,
                                                                    variant: "primary",
                                                                    fullWidth: !0,
                                                                    text: ec ? R.intl.string(R.t.ZNCziL) : G,
                                                                    icon:
                                                                        ec || null == M
                                                                            ? void 0
                                                                            : () =>
                                                                                  (0, l.jsx)(c.A, {
                                                                                      "aria-hidden": !0,
                                                                                      size: d._3J.SIZE_16,
                                                                                      user: M,
                                                                                      className: U.Mp,
                                                                                  }),
                                                                })
                                                              : (0, l.jsxs)(s.e2v, {
                                                                    fullWidth: !0,
                                                                    children: [
                                                                        (0, l.jsx)(s.$nd, {
                                                                            variant: "secondary",
                                                                            text: R.intl.string(R.t.eylRaY),
                                                                            onClick: et,
                                                                            loading: F,
                                                                        }),
                                                                        (0, l.jsx)(s.$nd, {
                                                                            variant: "primary",
                                                                            text: R.intl.string(R.t.RscU7I),
                                                                            onClick: et,
                                                                            loading: F,
                                                                        }),
                                                                    ],
                                                                }),
                                                          (0, l.jsx)(s.QWc, {
                                                              onClick: ei,
                                                              variant: "secondary",
                                                              text: R.intl.string(R.t.ndsK4Z),
                                                              textVariant: "text-sm/medium",
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          null != i && (0, l.jsx)("div", { className: U.ll, style: { backgroundImage: `url(${i})` } }),
                      ],
                  }),
              }),
          });
}

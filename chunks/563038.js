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
    R = i(126365);
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
        { invite: M, error: P, submitting: V, invite_instance_id: F } = (0, r.cf)([D.A], () => D.A.getProps()),
        Y = (0, r.bG)([E.A], () => E.A.getInvite(M?.code ?? "") ?? null),
        z = (0, r.bG)([E.A], () => E.A.getFriendMemberIds(M?.code ?? ""));
    n.useEffect(() => {
        null != M && null != M.guild && (0, _.dR)(M.approximate_member_count ?? 0, M.code, M.guild.id);
    }, [M, M?.approximate_member_count, M?.code, M?.guild?.id]);
    let H = (0, _.uE)(),
        { enabled: w, discoveryGuild: B, isLoading: W } = (0, N.qE)(M?.guild ?? null, "AcceptInviteModal"),
        { enabled: J } = N.SH.useConfig({ location: "AcceptInviteModal" }),
        K = J ? z : null;
    n.useEffect(() => {
        !__OVERLAY__ && T.isPlatformEmbedded && ((0, T.isWindows)() ? C.Ay.minimize() : C.Ay.restore(), C.Ay.focus());
    }, []),
        (0, u.Ay)(() => {
            I.default.track(L.HAw.OPEN_MODAL, { type: "Accept Invite", invite_code: M?.code, guild_id: M?.guild?.id });
        });
    let Z = (0, h.GV)(),
        { analyticsLocations: Q } = (0, g.Ay)(x.A.INVITE_MODAL),
        $ = K?.length ?? 0,
        q = $ > 0;
    if (
        (n.useEffect(() => {
            q &&
                M?.code != null &&
                I.default.track(L.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: M?.code,
                    guild_id: M.guild?.id,
                    friend_count: $,
                });
        }, [q, $, M?.code, M?.guild?.id]),
        null == M || null == k)
    )
        return null;
    if (M.state === L.elq.EXPIRED || M.state === L.elq.BANNED || M.state === L.elq.ERROR)
        return (0, l.jsx)(O, { transitionState: G });
    if (null == M.channel) return null;
    function X() {
        null != M && y.A.acceptInvite(M, F);
    }
    function ee() {
        I.default.track(L.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: M?.code, guild_id: M?.guild?.id }), y.A.close();
    }
    let { guild: et, channel: ei, inviter: el, target_application: en } = M,
        ea = null == M.guild && null == M.channel && null != el,
        es = null != et;
    if (null != en) (t = et?.name), (i = j.Ay.createFromServer(en).getCoverImageURL(1024));
    else if (null != et) (t = et.name), (i = f.Ay.getGuildSplashURL({ id: et.id, splash: et.splash }));
    else if (((null == (t = ei.name) || "" === t) && null != el && (t = el.username), null == t))
        throw Error("no name for group DM invite");
    let er = (0, A.Sn)();
    if (
        ((U = ea
            ? b.intl.string(b.t["e/6Ogt"])
            : b.intl.format(b.t["9sWQNT"], { usernameHook: () => (0, l.jsx)("span", { children: H }) })),
        W)
    )
        return (0, l.jsx)(s.dWK, {
            size: "md",
            "aria-labelledby": Z,
            transitionState: G,
            onClose: () => (ee(), Promise.resolve()),
            children: (0, l.jsx)("div", { className: R.g4, children: (0, l.jsx)(s.y$y, {}) }),
        });
    if (w && null != et)
        return (0, l.jsx)(g.f5, {
            value: Q,
            children: (0, l.jsx)(m.A, {
                transitionState: G,
                headerId: Z,
                channel: ei,
                invite: M,
                guild: et,
                splashURL: i,
                friendMemberIds: K ?? void 0,
                discoveryGuild: B,
                onClose: ee,
            }),
        });
    let ed = null != Y ? (0, p.oO)(Y) : null,
        eo = (function (e) {
            if (null == e) return !1;
            let t = null != e.description && e.description.length > 0,
                i = null != e.traits && e.traits.filter((e) => e.label.length > 0).length > 0,
                l = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
            return t && (i || l);
        })(ed);
    return null != ed && eo && null != et && (N.SH.getConfig({ location: "AcceptInviteModal.hasProfile" }), J)
        ? (0, l.jsx)(g.f5, {
              value: Q,
              children: (0, l.jsx)(m.H, {
                  transitionState: G,
                  headerId: Z,
                  channel: ei,
                  invite: M,
                  guild: et,
                  splashURL: i,
                  friendMemberIds: K ?? void 0,
                  profile: ed,
                  onClose: ee,
              }),
          })
        : (0, l.jsx)(g.f5, {
              value: Q,
              children: (0, l.jsx)(s.dWK, {
                  size: null != i ? "xl" : "sm",
                  "aria-labelledby": Z,
                  "aria-label": et?.name ?? ei?.name ?? "",
                  transitionState: G,
                  onClose: () => (ee(), Promise.resolve()),
                  trackingProps: {
                      impression: {
                          impressionName: a.ImpressionNames.INVITE_ACCEPT,
                          impressionProperties: { guild_id: et?.id, invite_code: M.code },
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
                                          id: Z,
                                          children: (0, l.jsx)(o.A, { invite: M, disableUser: es, error: P }),
                                      }),
                                      (0, l.jsxs)("div", {
                                          children: [
                                              er ? (0, l.jsx)(S.A, {}) : null,
                                              (0, l.jsxs)(s.BJc, {
                                                  gap: 8,
                                                  align: "center",
                                                  children: [
                                                      null == en
                                                          ? (0, l.jsx)(s.$nd, {
                                                                onClick: X,
                                                                loading: V,
                                                                disabled: er,
                                                                variant: "primary",
                                                                fullWidth: !0,
                                                                text: er ? b.intl.string(b.t.ZNCziL) : U,
                                                                icon:
                                                                    er || null == k
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
                                                                        onClick: X,
                                                                        loading: V,
                                                                    }),
                                                                    (0, l.jsx)(s.$nd, {
                                                                        variant: "primary",
                                                                        text: b.intl.string(b.t.RscU7I),
                                                                        onClick: X,
                                                                        loading: V,
                                                                    }),
                                                                ],
                                                            }),
                                                      (0, l.jsx)(s.QWc, {
                                                          onClick: ee,
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

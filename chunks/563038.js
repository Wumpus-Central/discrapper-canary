i.d(t, { default: () => k });
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
    E = i(427157),
    v = i(299091),
    I = i(287809),
    f = i(954571),
    T = i(486020),
    C = i(723702),
    N = i(837921),
    y = i(430914),
    D = i(260451),
    S = i(972387),
    b = i(539895),
    L = i(233761),
    R = i(652215),
    O = i(985018),
    U = i(929252);
function G(e) {
    let { transitionState: t } = e,
        { analyticsLocations: i } = (0, g.Ay)(x.A.INVITE_MODAL);
    return (0, l.jsx)(g.f5, {
        value: i,
        children: (0, l.jsx)(s.Modal, {
            "aria-label": O.intl.string(O.t.u9zxnX),
            title: O.intl.string(O.t.u9zxnX),
            subtitle: O.intl.string(O.t.FWkU6P),
            transitionState: t,
            onClose: () => (S.A.close(), Promise.resolve()),
            size: "sm",
            actions: [{ text: O.intl.string(O.t.wcqOoF), onClick: S.A.close }],
        }),
    });
}
function k(e) {
    let t,
        i,
        k,
        { transitionState: M } = e;
    (0, r.bG)([I.default], () => I.default.getCurrentUser()?.premiumType);
    let P = (0, r.bG)([I.default], () => I.default.getCurrentUser()),
        { invite: V, error: F, submitting: Y } = (0, r.cf)([b.A], () => b.A.getProps()),
        z = (0, r.bG)([v.A], () => v.A.getInvite(V?.code ?? "") ?? null),
        w = (0, r.bG)([v.A], () => v.A.getFriendMemberIds(V?.code ?? ""));
    n.useEffect(() => {
        null != V && null != V.guild && (0, _.dR)(V.approximate_member_count ?? 0, V.code, V.guild.id);
    }, [V, V?.approximate_member_count, V?.code, V?.guild?.id]);
    let H = (0, _.uE)(),
        { showFriendsInServer: B, showInviter: W } = (0, y.uS)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
            guild: V?.guild,
        }),
        { enabled: J, discoveryGuild: Z, isLoading: K } = (0, D.qE)(V?.guild ?? null, "AcceptInviteModal"),
        { enabled: Q } = D.SH.useConfig({ location: "AcceptInviteModal" }),
        $ = B || Q ? w : null;
    n.useEffect(() => {
        !__OVERLAY__ && C.isPlatformEmbedded && ((0, C.isWindows)() ? N.Ay.minimize() : N.Ay.restore(), N.Ay.focus());
    }, []),
        (0, u.Ay)(() => {
            f.default.track(R.HAw.OPEN_MODAL, { type: "Accept Invite", invite_code: V?.code, guild_id: V?.guild?.id });
        });
    let q = (0, h.GV)(),
        { analyticsLocations: X } = (0, g.Ay)(x.A.INVITE_MODAL),
        ee = $?.length ?? 0,
        et = ee > 0;
    if (
        (n.useEffect(() => {
            et &&
                V?.code != null &&
                f.default.track(R.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: V?.code,
                    guild_id: V.guild?.id,
                    friend_count: ee,
                });
        }, [et, ee, V?.code, V?.guild?.id]),
        null == V || null == P)
    )
        return null;
    if (V.state === R.elq.EXPIRED || V.state === R.elq.BANNED || V.state === R.elq.ERROR)
        return (0, l.jsx)(G, { transitionState: M });
    if (null == V.channel) return null;
    function ei() {
        null != V && S.A.acceptInvite(V);
    }
    function el() {
        f.default.track(R.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: V?.code, guild_id: V?.guild?.id }), S.A.close();
    }
    let { guild: en, channel: ea, inviter: es, target_application: er } = V,
        ed = null == V.guild && null == V.channel && null != es,
        eo = W && ($?.length ?? 0) > 0 && null != es,
        ec = null != en || eo;
    if (null != er) (t = en?.name), (i = j.Ay.createFromServer(er).getCoverImageURL(1024));
    else if (null != en) (t = en.name), (i = T.Ay.getGuildSplashURL({ id: en.id, splash: en.splash }));
    else if (((null == (t = ea.name) || "" === t) && null != es && (t = es.username), null == t))
        throw Error("no name for group DM invite");
    let eu = (0, A.Sn)();
    if (
        ((k = ed
            ? O.intl.string(O.t["e/6Ogt"])
            : O.intl.format(O.t["9sWQNT"], { usernameHook: () => (0, l.jsx)("span", { children: H }) })),
        K)
    )
        return (0, l.jsx)(s.dWK, {
            size: "md",
            "aria-labelledby": q,
            transitionState: M,
            onClose: () => (el(), Promise.resolve()),
            children: (0, l.jsx)("div", { className: U.g4, children: (0, l.jsx)(s.y$y, {}) }),
        });
    if (J && null != en)
        return (0, l.jsx)(g.f5, {
            value: X,
            children: (0, l.jsx)(m.A, {
                transitionState: M,
                headerId: q,
                channel: ea,
                invite: V,
                guild: en,
                splashURL: i,
                friendMemberIds: $ ?? void 0,
                discoveryGuild: Z,
                onClose: el,
            }),
        });
    let em = null != z ? (0, p.oO)(z) : null,
        ex = (function (e) {
            if (null == e) return !1;
            let t = null != e.description && e.description.length > 0,
                i = null != e.traits && e.traits.filter((e) => e.label.length > 0).length > 0,
                l = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
            return t && (i || l);
        })(em);
    return null != em && ex && null != en && (D.SH.getConfig({ location: "AcceptInviteModal.hasProfile" }), Q)
        ? (0, l.jsx)(g.f5, {
              value: X,
              children: (0, l.jsx)(m.H, {
                  transitionState: M,
                  headerId: q,
                  channel: ea,
                  invite: V,
                  guild: en,
                  splashURL: i,
                  friendMemberIds: $ ?? void 0,
                  profile: em,
                  onClose: el,
              }),
          })
        : (0, l.jsx)(g.f5, {
              value: X,
              children: (0, l.jsx)(s.dWK, {
                  size: null != i ? "xl" : "sm",
                  "aria-labelledby": q,
                  "aria-label": en?.name ?? ea?.name ?? "",
                  transitionState: M,
                  onClose: () => (el(), Promise.resolve()),
                  trackingProps: {
                      impression: {
                          impressionName: a.ImpressionNames.INVITE_ACCEPT,
                          impressionProperties: { guild_id: en?.id, invite_code: V.code },
                      },
                  },
                  children: (0, l.jsxs)("div", {
                      className: U.jT,
                      children: [
                          (0, l.jsxs)("div", {
                              className: U.FG,
                              children: [
                                  eo &&
                                      (0, l.jsxs)("div", {
                                          className: U.$N,
                                          children: [
                                              (0, l.jsx)(c.A, { user: new E.A(es), size: d._3J.SIZE_20 }),
                                              (0, l.jsx)(d.Text, {
                                                  tag: "span",
                                                  variant: "text-md/medium",
                                                  color: "text-subtle",
                                                  children: O.intl.format(O.t.ri1ubC, {
                                                      usernameHook: (e, t) =>
                                                          (0, l.jsx)(
                                                              d.Text,
                                                              {
                                                                  variant: "text-md/semibold",
                                                                  color: "text-default",
                                                                  tag: "span",
                                                                  children: es.username,
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
                                              id: q,
                                              children: (0, l.jsx)(o.A, {
                                                  invite: V,
                                                  disableUser: ec,
                                                  error: F,
                                                  friendMemberIds: $,
                                                  showInvitedByHeader: !eo,
                                              }),
                                          }),
                                          (0, l.jsxs)("div", {
                                              children: [
                                                  eu ? (0, l.jsx)(L.A, {}) : null,
                                                  (0, l.jsxs)(s.BJc, {
                                                      gap: 8,
                                                      align: "center",
                                                      children: [
                                                          null == er
                                                              ? (0, l.jsx)(s.$nd, {
                                                                    onClick: ei,
                                                                    loading: Y,
                                                                    disabled: eu,
                                                                    variant: "primary",
                                                                    fullWidth: !0,
                                                                    text: eu ? O.intl.string(O.t.ZNCziL) : k,
                                                                    icon:
                                                                        eu || null == P
                                                                            ? void 0
                                                                            : () =>
                                                                                  (0, l.jsx)(c.A, {
                                                                                      "aria-hidden": !0,
                                                                                      size: d._3J.SIZE_16,
                                                                                      user: P,
                                                                                      className: U.Mp,
                                                                                  }),
                                                                })
                                                              : (0, l.jsxs)(s.e2v, {
                                                                    fullWidth: !0,
                                                                    children: [
                                                                        (0, l.jsx)(s.$nd, {
                                                                            variant: "secondary",
                                                                            text: O.intl.string(O.t.eylRaY),
                                                                            onClick: ei,
                                                                            loading: Y,
                                                                        }),
                                                                        (0, l.jsx)(s.$nd, {
                                                                            variant: "primary",
                                                                            text: O.intl.string(O.t.RscU7I),
                                                                            onClick: ei,
                                                                            loading: Y,
                                                                        }),
                                                                    ],
                                                                }),
                                                          (0, l.jsx)(s.QWc, {
                                                              onClick: el,
                                                              variant: "secondary",
                                                              text: O.intl.string(O.t.ndsK4Z),
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

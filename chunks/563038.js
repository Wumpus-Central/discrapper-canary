i.d(t, { default: () => U });
var l = i(627968),
    n = i(64700),
    a = i(110259),
    s = i(158954),
    r = i(417597),
    d = i(397927),
    c = i(890698),
    o = i(966327),
    u = i(616755),
    m = i(793574),
    x = i(688810),
    _ = i(915089),
    h = i(960736),
    g = i(398884),
    A = i(611010),
    E = i(427157),
    p = i(299091),
    j = i(287809),
    I = i(954571),
    v = i(486020),
    T = i(723702),
    f = i(837921),
    N = i(430914),
    C = i(260451),
    y = i(972387),
    D = i(539895),
    S = i(233761),
    L = i(652215),
    b = i(985018),
    R = i(929252);
function O(e) {
    let { transitionState: t } = e,
        { analyticsLocations: i } = (0, x.Ay)(m.A.INVITE_MODAL);
    return (0, l.jsx)(x.f5, {
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
    (0, r.bG)([j.default], () => j.default.getCurrentUser()?.premiumType);
    let k = (0, r.bG)([j.default], () => j.default.getCurrentUser()),
        { invite: M, error: P, submitting: V } = (0, r.cf)([D.A], () => D.A.getProps()),
        F = (0, r.bG)([p.A], () => p.A.getFriendMemberIds(M?.code ?? ""));
    n.useEffect(() => {
        null != M && null != M.guild && (0, h.dR)(M.approximate_member_count ?? 0, M.code, M.guild.id);
    }, [M, M?.approximate_member_count, M?.code, M?.guild?.id]);
    let Y = (0, h.uE)(),
        { showFriendsInServer: z, showInviter: w } = (0, N.uS)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
            guild: M?.guild,
        }),
        H = z ? F : null,
        { enabled: B, discoveryGuild: W, isLoading: J } = (0, C.q)(M?.guild ?? null, "AcceptInviteModal");
    n.useEffect(() => {
        !__OVERLAY__ && T.isPlatformEmbedded && ((0, T.isWindows)() ? f.Ay.minimize() : f.Ay.restore(), f.Ay.focus());
    }, []);
    let K = (0, _.GV)(),
        { analyticsLocations: Z } = (0, x.Ay)(m.A.INVITE_MODAL),
        $ = H?.length ?? 0,
        Q = $ > 0;
    if (
        (n.useEffect(() => {
            Q &&
                M?.code != null &&
                I.default.track(L.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: M?.code,
                    guild_id: M.guild?.id,
                    friend_count: $,
                });
        }, [Q, $, M?.code, M?.guild?.id]),
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
        ea = w && (H?.length ?? 0) > 0 && null != ei,
        es = null != ee || ea;
    if (null != el) (t = ee?.name), (i = A.Ay.createFromServer(el).getCoverImageURL(1024));
    else if (null != ee) (t = ee.name), (i = v.Ay.getGuildSplashURL({ id: ee.id, splash: ee.splash }));
    else if (((null == (t = et.name) || "" === t) && null != ei && (t = ei.username), null == t))
        throw Error("no name for group DM invite");
    let er = (0, g.Sn)();
    return ((U = en
        ? b.intl.string(b.t["e/6Ogt"])
        : b.intl.format(b.t["9sWQNT"], { usernameHook: () => (0, l.jsx)("span", { children: Y }) })),
    J)
        ? (0, l.jsx)(s.dWK, {
              size: "md",
              "aria-labelledby": K,
              transitionState: G,
              onClose: () => (X(), Promise.resolve()),
              children: (0, l.jsx)("div", { className: R.g4, children: (0, l.jsx)(s.y$y, {}) }),
          })
        : B && null != ee
          ? (0, l.jsx)(x.f5, {
                value: Z,
                children: (0, l.jsx)(u.A, {
                    transitionState: G,
                    headerId: K,
                    channel: et,
                    invite: M,
                    guild: ee,
                    splashURL: i,
                    friendMemberIds: H ?? void 0,
                    discoveryGuild: W,
                    onClose: X,
                }),
            })
          : (0, l.jsx)(x.f5, {
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
                            (0, l.jsxs)("div", {
                                className: R.FG,
                                children: [
                                    ea &&
                                        (0, l.jsxs)("div", {
                                            className: R.$N,
                                            children: [
                                                (0, l.jsx)(o.A, { user: new E.A(ei), size: d._3J.SIZE_20 }),
                                                (0, l.jsx)(d.Text, {
                                                    tag: "span",
                                                    variant: "text-md/medium",
                                                    color: "text-subtle",
                                                    children: b.intl.format(b.t.ri1ubC, {
                                                        usernameHook: (e, t) =>
                                                            (0, l.jsx)(
                                                                d.Text,
                                                                {
                                                                    variant: "text-md/semibold",
                                                                    color: "text-default",
                                                                    tag: "span",
                                                                    children: ei.username,
                                                                },
                                                                t,
                                                            ),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    (0, l.jsxs)("div", {
                                        className: R.Ro,
                                        children: [
                                            (0, l.jsx)("div", {
                                                id: K,
                                                children: (0, l.jsx)(c.A, {
                                                    invite: M,
                                                    disableUser: es,
                                                    error: P,
                                                    friendMemberIds: H,
                                                    showInvitedByHeader: !ea,
                                                }),
                                            }),
                                            (0, l.jsxs)("div", {
                                                children: [
                                                    er ? (0, l.jsx)(S.A, {}) : null,
                                                    (0, l.jsxs)(s.BJc, {
                                                        gap: 8,
                                                        align: "center",
                                                        children: [
                                                            null == el
                                                                ? (0, l.jsx)(s.$nd, {
                                                                      onClick: q,
                                                                      loading: V,
                                                                      disabled: er,
                                                                      variant: "primary",
                                                                      fullWidth: !0,
                                                                      text: er ? b.intl.string(b.t.ZNCziL) : U,
                                                                      icon:
                                                                          er || null == k
                                                                              ? void 0
                                                                              : () =>
                                                                                    (0, l.jsx)(o.A, {
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
                                ],
                            }),
                            null != i &&
                                (0, l.jsx)("div", { className: R.ll, style: { backgroundImage: `url(${i})` } }),
                        ],
                    }),
                }),
            });
}

i.d(t, { default: () => V });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(110259),
    d = i(158954),
    c = i(417597),
    o = i(397927),
    u = i(890698),
    m = i(966327),
    x = i(616755),
    h = i(793574),
    _ = i(688810),
    g = i(915089),
    A = i(960736),
    p = i(398884),
    E = i(611010),
    j = i(427157),
    v = i(299091),
    I = i(287809),
    T = i(44998),
    f = i(597222),
    N = i(954571),
    C = i(486020),
    y = i(723702),
    D = i(837921),
    S = i(430914),
    L = i(260451),
    b = i(972387),
    R = i(539895),
    O = i(233761),
    U = i(652215),
    G = i(985018),
    M = i(729950);
function k(e) {
    let { className: t } = e;
    return (0, l.jsxs)("div", {
        "aria-hidden": "true",
        className: a()(M.zc, t),
        children: [
            (0, l.jsx)(T.A, { className: M.Mk }),
            (0, l.jsx)(o.qYV, { size: "custom", color: "currentColor", className: M._Q, width: 40, height: 40 }),
            (0, l.jsx)(f.A, { className: M.sY }),
        ],
    });
}
function P(e) {
    let { transitionState: t } = e,
        i = (0, g.GV)(),
        { analyticsLocations: n } = (0, _.Ay)(h.A.INVITE_MODAL);
    return (0, l.jsx)(_.f5, {
        value: n,
        children: (0, l.jsx)(d.dWK, {
            "aria-label": G.intl.string(G.t.u9zxnX),
            transitionState: t,
            onClose: () => (b.A.close(), Promise.resolve()),
            size: "sm",
            children: (0, l.jsxs)("div", {
                className: M.ow,
                children: [
                    (0, l.jsx)(k, { className: M.M6 }),
                    (0, l.jsx)(o.Heading, {
                        id: i,
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: G.intl.string(G.t.u9zxnX),
                    }),
                    (0, l.jsx)("div", { className: M.t4, children: G.intl.string(G.t.FWkU6P) }),
                    (0, l.jsx)(d.$nd, {
                        fullWidth: !0,
                        onClick: () => b.A.close(),
                        variant: "primary",
                        text: G.intl.string(G.t.wcqOoF),
                    }),
                ],
            }),
        }),
    });
}
function V(e) {
    let t,
        i,
        s,
        { transitionState: a } = e;
    (0, c.bG)([I.default], () => I.default.getCurrentUser()?.premiumType);
    let T = (0, c.bG)([I.default], () => I.default.getCurrentUser()),
        { invite: f, error: k, submitting: V } = (0, c.cf)([R.A], () => R.A.getProps()),
        F = (0, c.bG)([v.A], () => v.A.getFriendMemberIds(f?.code ?? ""));
    n.useEffect(() => {
        null != f && null != f.guild && (0, A.dR)(f.approximate_member_count ?? 0, f.code, f.guild.id);
    }, [f, f?.approximate_member_count, f?.code, f?.guild?.id]);
    let Y = (0, A.uE)(),
        { showFriendsInServer: z, showInviter: w } = (0, S.uS)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
            guild: f?.guild,
        }),
        H = z ? F : null,
        { enabled: W, discoveryGuild: B, isLoading: J } = (0, L.q)(f?.guild ?? null, "AcceptInviteModal");
    n.useEffect(() => {
        !__OVERLAY__ && y.isPlatformEmbedded && ((0, y.isWindows)() ? D.Ay.minimize() : D.Ay.restore(), D.Ay.focus());
    }, []);
    let Z = (0, g.GV)(),
        { analyticsLocations: $ } = (0, _.Ay)(h.A.INVITE_MODAL),
        K = H?.length ?? 0,
        Q = K > 0;
    if (
        (n.useEffect(() => {
            Q &&
                f?.code != null &&
                N.default.track(U.HAw.INVITE_FRIEND_MEMBERS_VIEWED, {
                    invite_code: f?.code,
                    guild_id: f.guild?.id,
                    friend_count: K,
                });
        }, [Q, K, f?.code, f?.guild?.id]),
        null == f || null == T)
    )
        return null;
    if (f.state === U.elq.EXPIRED || f.state === U.elq.BANNED || f.state === U.elq.ERROR)
        return (0, l.jsx)(P, { transitionState: a });
    if (null == f.channel) return null;
    function q() {
        null != f && b.A.acceptInvite(f);
    }
    function X() {
        N.default.track(U.HAw.INVITE_ACCEPT_DISMISSED, { invite_code: f?.code, guild_id: f?.guild?.id }), b.A.close();
    }
    let { guild: ee, channel: et, inviter: ei, target_application: el } = f,
        en = null == f.guild && null == f.channel && null != ei,
        es = w && (H?.length ?? 0) > 0 && null != ei,
        ea = null != ee || es;
    if (null != el) (t = ee?.name), (i = E.Ay.createFromServer(el).getCoverImageURL(1024));
    else if (null != ee) (t = ee.name), (i = C.Ay.getGuildSplashURL({ id: ee.id, splash: ee.splash }));
    else if (((null == (t = et.name) || "" === t) && null != ei && (t = ei.username), null == t))
        throw Error("no name for group DM invite");
    let er = (0, p.Sn)();
    return ((s = en
        ? G.intl.string(G.t["e/6Ogt"])
        : G.intl.format(G.t["9sWQNT"], { usernameHook: () => (0, l.jsx)("span", { children: Y }) })),
    J)
        ? (0, l.jsx)(d.dWK, {
              size: "md",
              "aria-labelledby": Z,
              transitionState: a,
              onClose: () => (X(), Promise.resolve()),
              children: (0, l.jsx)("div", { className: M.g4, children: (0, l.jsx)(d.y$y, {}) }),
          })
        : W && null != ee
          ? (0, l.jsx)(_.f5, {
                value: $,
                children: (0, l.jsx)(x.A, {
                    transitionState: a,
                    headerId: Z,
                    channel: et,
                    invite: f,
                    guild: ee,
                    splashURL: i,
                    friendMemberIds: H ?? void 0,
                    discoveryGuild: B,
                    onClose: X,
                }),
            })
          : (0, l.jsx)(_.f5, {
                value: $,
                children: (0, l.jsx)(d.dWK, {
                    size: null != i ? "xl" : "sm",
                    "aria-labelledby": Z,
                    "aria-label": ee?.name ?? et?.name ?? "",
                    transitionState: a,
                    onClose: () => (X(), Promise.resolve()),
                    trackingProps: {
                        impression: {
                            impressionName: r.ImpressionNames.INVITE_ACCEPT,
                            impressionProperties: { guild_id: ee?.id, invite_code: f.code },
                        },
                    },
                    children: (0, l.jsxs)("div", {
                        className: M.jT,
                        children: [
                            (0, l.jsxs)("div", {
                                className: M.FG,
                                children: [
                                    es &&
                                        (0, l.jsxs)("div", {
                                            className: M.$N,
                                            children: [
                                                (0, l.jsx)(m.A, { user: new j.A(ei), size: o._3J.SIZE_20 }),
                                                (0, l.jsx)(o.Text, {
                                                    tag: "span",
                                                    variant: "text-md/medium",
                                                    color: "text-subtle",
                                                    children: G.intl.format(G.t.ri1ubC, {
                                                        usernameHook: (e, t) =>
                                                            (0, l.jsx)(
                                                                o.Text,
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
                                        className: M.Ro,
                                        children: [
                                            (0, l.jsx)("div", {
                                                id: Z,
                                                children: (0, l.jsx)(u.A, {
                                                    invite: f,
                                                    disableUser: ea,
                                                    error: k,
                                                    friendMemberIds: H,
                                                    showInvitedByHeader: !es,
                                                }),
                                            }),
                                            (0, l.jsxs)("div", {
                                                children: [
                                                    er ? (0, l.jsx)(O.A, {}) : null,
                                                    (0, l.jsxs)(d.BJc, {
                                                        gap: 8,
                                                        align: "center",
                                                        children: [
                                                            null == el
                                                                ? (0, l.jsx)(d.$nd, {
                                                                      onClick: q,
                                                                      loading: V,
                                                                      disabled: er,
                                                                      variant: "primary",
                                                                      fullWidth: !0,
                                                                      text: er ? G.intl.string(G.t.ZNCziL) : s,
                                                                      icon:
                                                                          er || null == T
                                                                              ? void 0
                                                                              : () =>
                                                                                    (0, l.jsx)(m.A, {
                                                                                        "aria-hidden": !0,
                                                                                        size: o._3J.SIZE_16,
                                                                                        user: T,
                                                                                        className: M.Mp,
                                                                                    }),
                                                                  })
                                                                : (0, l.jsxs)(d.e2v, {
                                                                      fullWidth: !0,
                                                                      children: [
                                                                          (0, l.jsx)(d.$nd, {
                                                                              variant: "secondary",
                                                                              text: G.intl.string(G.t.eylRaY),
                                                                              onClick: q,
                                                                              loading: V,
                                                                          }),
                                                                          (0, l.jsx)(d.$nd, {
                                                                              variant: "primary",
                                                                              text: G.intl.string(G.t.RscU7I),
                                                                              onClick: q,
                                                                              loading: V,
                                                                          }),
                                                                      ],
                                                                  }),
                                                            (0, l.jsx)(d.QWc, {
                                                                onClick: X,
                                                                variant: "secondary",
                                                                text: G.intl.string(G.t.ndsK4Z),
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
                                (0, l.jsx)("div", { className: M.ll, style: { backgroundImage: `url(${i})` } }),
                        ],
                    }),
                }),
            });
}

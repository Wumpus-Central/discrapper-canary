(n.r(l), n.d(l, { default: () => eh }));
var t = n(477900),
    r = n(582128),
    i = n(855986),
    a = n(477782),
    o = n(305866),
    s = n(140735),
    u = n(707554),
    d = n(793574),
    c = n(688810),
    f = n(316980),
    h = n(827656),
    m = n(474047),
    p = n(730201);
let x = p.I;
function A(e) {
    let { user: l, guildId: n, onClose: i } = e,
        a = (0, m.A)(l, "ConjureBotProfileFooter"),
        { creator: o, remixProject: s, editProject: u, isSettled: d } = (0, f.A)(a, n ?? null, null != a),
        c = r.useCallback(() => i?.(), [i]);
    return null == a || (null == o && d)
        ? null
        : (0, t.jsx)("div", {
              className: p.q,
              children: (0, t.jsx)(h.A, {
                  applicationId: a.id,
                  creator: o,
                  remixProject: s,
                  editProject: u,
                  guildId: n ?? null,
                  onClose: c,
              }),
          });
}
var g = n(915089),
    j = n(713517),
    v = n(267102),
    P = n(397562),
    b = n(71393),
    y = n(562153),
    I = n(183555),
    M = n(741534),
    w = n(527212),
    C = n(702476),
    O = n(718019),
    N = n(915614),
    R = n(946356),
    T = n(630891),
    k = n(587168),
    E = n(680581),
    U = n(95362),
    F = n(825484),
    $ = n(734057),
    S = n(576705),
    L = n(693241),
    _ = n(821609),
    G = n(976860),
    q = n(652215),
    V = n(792996);
function z(e) {
    let { appChannel: l, onClose: n } = e;
    return (0, t.jsx)(_.$, {
        variant: "primary",
        text: V.intl.string(V.t["Cia+A8"]),
        onClick: function () {
            (n?.(), (0, G.pX)(q.BVt.CHANNEL(l.guildId, l.channelId)));
        },
    });
}
var B = n(696451),
    W = n(309010),
    D = n(351906),
    H = n(851767),
    X = n(612770),
    Y = n(241614),
    J = n(559506),
    K = n(791556),
    Q = n(900179),
    Z = n(646986),
    ee = n(465829),
    el = n(570314),
    en = n(571077),
    et = n(243166),
    er = n(442228),
    ei = n(403369),
    ea = n(996988),
    eo = n(96804),
    es = n(47453);
function eu(e) {
    var l;
    let n,
        a,
        o,
        {
            user: s,
            currentUser: u,
            displayProfile: d,
            guild: c,
            isHoveringOrFocusing: f,
            onOpenProfile: h,
            channelId: p,
            onClose: x,
        } = e,
        A = y.Ay.getName(c?.id, p, s),
        g = (0, i.bG)([H.A], () => H.A.getUserProfile(s.id)?.application),
        j = (0, i.bG)([$.A, W.Ay], () => $.A.getChannel(W.Ay.getChannelId())),
        v =
            ((l = c?.id),
            (n = (0, m.A)(s, "BotUserProfilePopout")),
            (a = n?.id ?? null),
            (o = (0, i.bG)([$.A, S.A], () => (null != l && null != a ? ((0, L.A)(l, a, p)?.channelId ?? null) : null), [
                l,
                a,
                p,
            ])),
            r.useMemo(() => (null != l && null != o ? { guildId: l, channelId: o } : null), [l, o])),
        P = (0, i.bG)([B.Ay], () => B.Ay.isMember(c?.id, s.id)),
        b = (0, i.bG)([D.A], () => D.A.hidePersonalInformation);
    return (0, t.jsxs)(U.Ip, {
        fade: !0,
        className: es.rf,
        children: [
            (0, t.jsx)(J.A, { userId: s.id }),
            (0, t.jsx)(ee.Ay, {
                user: s,
                guildId: c?.id,
                displayName: A,
                onClickName: h,
                displayNameTrailing: b ? null : (0, t.jsx)(et.A, { userId: s.id, isVisible: f, onOpenProfile: h }),
                pronouns: d?.pronouns,
                onClose: x,
                trailing: (0, t.jsx)(Y.A, { displayProfile: d, themeType: ea.d.POPOUT, onClose: x }),
            }),
            (0, t.jsx)(K.A, { user: s, onOpenProfile: (e) => h?.({ tabSection: e }) }),
            (0, t.jsxs)("div", {
                className: eo.U,
                children: [
                    null != v
                        ? (0, t.jsxs)(F.e, {
                              size: "sm",
                              fullWidth: !0,
                              children: [
                                  (0, t.jsx)(z, { appChannel: v, onClose: x }),
                                  (0, t.jsx)(el.A, { user: s, closePopout: x, variant: "secondary", hideIcon: !0 }),
                              ],
                          })
                        : (0, t.jsx)(el.A, { user: s, closePopout: x, fullWidth: !0 }),
                    (0, t.jsx)(en.A, { user: s, guildId: c?.id, fullWidth: !0 }),
                ],
            }),
            (0, t.jsx)(er.A, { userId: s.id, userBio: d?.bio, hidePersonalInformation: b, onClose: x }),
            (0, t.jsx)(Z.A, { user: s, currentUser: u, guildId: c?.id, onOpenUserProfileModal: h, onClose: x }),
            g?.popularApplicationCommandIds != null &&
                null != j &&
                (0, t.jsx)(X.A, {
                    applicationId: g.id,
                    commandIds: g.popularApplicationCommandIds,
                    channel: j,
                    guildId: c?.id,
                    onClick: x,
                }),
            null != c &&
                P &&
                (0, t.jsx)(Q.A, {
                    heading: V.intl.string(V.t["LPJmL/"]),
                    children: (0, t.jsx)(ei.A, { userId: s.id, guild: c }),
                }),
        ],
    });
}
var ed = n(848674),
    ec = n(518477),
    ef = n(207634);
function eh(e) {
    let {
            user: l,
            currentUser: n,
            guildId: f,
            channelId: h,
            messageId: m,
            roleId: p,
            openedAt: U,
            closePopout: F,
            setPopoutRef: $,
            disableUserProfileLink: S = __OVERLAY__,
            newAnalyticsLocations: L = [],
            disableAutoFocus: _ = !1,
            onClickContainer: G,
        } = e,
        { analyticsLocations: z } = (0, c.Ay)([...L, d.A.USER_PROFILE_POPOUT]),
        B = (0, v.aL)(),
        W = (0, I.pb)({ layout: "POPOUT", userId: l.id, guildId: f, channelId: h, messageId: m, roleId: p }),
        D = (0, w.Ay)(l.id, f);
    (0, P.A)(z, D, ec.R7.POPOUT);
    let H = (0, i.bG)([b.A], () => (null != f ? b.A.getGuild(f) : null)),
        X = r.useRef(null),
        { isHoveringOrFocusing: Y } = (0, j.A)(X);
    function J(e) {
        (F?.(),
            B.dispatch(q.jej.POPOUT_CLOSE),
            (0, C.openUserProfileModal)({ sourceAnalyticsLocations: z, hideRestrictedProfile: !0, ...W, ...e }));
    }
    r.useEffect(() => {
        $?.(X?.current);
    }, [X, $]);
    let K = _ ? "div" : o.l,
        Q = (0, g.GV)(),
        Z = y.Ay.useName(f, h, l);
    return (0, t.jsx)(c.f5, {
        value: z,
        children: (0, t.jsx)(I.of, {
            value: W,
            openedAt: U,
            fetchStartedAt: D?.fetchStartedAt,
            fetchEndedAt: D?.fetchEndedAt,
            isLoaded: D?.isLoaded,
            children: (0, t.jsxs)(K, {
                ref: X,
                "aria-labelledby": Q,
                onClick: G,
                children: [
                    (0, t.jsx)(s.A, {
                        children: (0, t.jsx)(u.H, { id: Q, children: V.intl.format(V.t.KRe1Fk, { name: Z }) }),
                    }),
                    (0, t.jsxs)(R.A, {
                        user: l,
                        displayProfile: D,
                        themeType: ea.d.POPOUT,
                        innerClassName: x,
                        children: [
                            (0, t.jsx)(k.A, {
                                children: (0, t.jsx)(T.A, {
                                    user: l,
                                    guildId: f,
                                    viewProfileItem: S
                                        ? null
                                        : (0, t.jsx)(a.Dr, {
                                              id: "view-profile",
                                              label: V.intl.string(V.t["+Xp3hq"]),
                                              action: () => {
                                                  (J(),
                                                      (0, M.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: z,
                                                          ...W,
                                                      }));
                                              },
                                          }),
                                }),
                            }),
                            (0, t.jsxs)("div", {
                                className: es.wx,
                                children: [
                                    (0, t.jsx)(N.A, { user: l, displayProfile: D, guildId: f, themeType: ea.d.POPOUT }),
                                    (0, t.jsx)(O.A, {
                                        user: l,
                                        displayProfile: D,
                                        guildId: f,
                                        channelId: h,
                                        avatarSize: ef.T[ea.d.POPOUT].avatarSize,
                                        onOpenProfile: S ? void 0 : J,
                                    }),
                                    (0, t.jsx)(E.A, {
                                        user: l,
                                        guildId: f,
                                        channelId: h,
                                        themeType: ea.d.POPOUT,
                                        onCloseProfile: F,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, t.jsx)(eu, {
                                user: l,
                                currentUser: n,
                                displayProfile: D,
                                guild: H,
                                isHoveringOrFocusing: Y,
                                onOpenProfile: S ? void 0 : J,
                                channelId: h,
                                onClose: F,
                            }),
                            (0, t.jsx)(ed.A, { user: l, guildId: f, channelId: h, onClose: F, disableAutoFocus: _ }),
                            (0, t.jsx)(A, { user: l, guildId: f, onClose: F }),
                        ],
                    }),
                ],
            }),
        }),
    });
}

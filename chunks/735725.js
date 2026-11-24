(l.r(t), l.d(t, { default: () => eh }));
var n = l(477900),
    r = l(582128),
    i = l(855986),
    o = l(477782),
    a = l(305866),
    u = l(140735),
    s = l(707554),
    d = l(793574),
    c = l(688810),
    f = l(316980),
    h = l(827656),
    m = l(474047),
    p = l(730201);
let x = p.I;
function g(e) {
    let { user: t, guildId: l, onClose: i } = e,
        o = (0, m.A)(t, "ConjureBotProfileFooter"),
        { creator: a, remixProject: u, editProject: s, isSettled: d } = (0, f.A)(o, l ?? null, null != o),
        c = r.useCallback(() => i?.(), [i]);
    return null == o || (null == a && d)
        ? null
        : (0, n.jsx)("div", {
              className: p.q,
              children: (0, n.jsx)(h.A, {
                  applicationId: o.id,
                  creator: a,
                  remixProject: u,
                  editProject: s,
                  guildId: l ?? null,
                  onClose: c,
              }),
          });
}
var A = l(915089),
    j = l(713517),
    v = l(267102),
    P = l(397562),
    b = l(71393),
    y = l(562153),
    I = l(183555),
    M = l(741534),
    w = l(527212),
    C = l(100663),
    O = l(718019),
    R = l(915614),
    N = l(946356),
    k = l(630891),
    T = l(587168),
    $ = l(804329),
    E = l(95362),
    U = l(825484),
    F = l(734057),
    S = l(576705),
    L = l(693241),
    _ = l(821609),
    G = l(976860),
    q = l(652215),
    V = l(792996);
function W(e) {
    let { appChannel: t, onClose: l } = e;
    return (0, n.jsx)(_.$, {
        variant: "primary",
        text: V.intl.string(V.t["Cia+A8"]),
        onClick: function () {
            (l?.(), (0, G.pX)(q.BVt.CHANNEL(t.guildId, t.channelId)));
        },
    });
}
var z = l(696451),
    B = l(309010),
    D = l(351906),
    X = l(851767),
    H = l(612770),
    Y = l(56810),
    J = l(559506),
    K = l(791556),
    Q = l(900179),
    Z = l(646986),
    ee = l(465829),
    et = l(570314),
    el = l(571077),
    en = l(243166),
    er = l(442228),
    ei = l(403369),
    eo = l(996988),
    ea = l(96804),
    eu = l(47453);
function es(e) {
    var t;
    let l,
        o,
        a,
        {
            user: u,
            currentUser: s,
            displayProfile: d,
            guild: c,
            isHoveringOrFocusing: f,
            onOpenProfile: h,
            channelId: p,
            onClose: x,
        } = e,
        g = y.Ay.getName(c?.id, p, u),
        A = (0, i.bG)([X.A], () => X.A.getUserProfile(u.id)?.application),
        j = (0, i.bG)([F.A, B.Ay], () => F.A.getChannel(B.Ay.getChannelId())),
        v =
            ((t = c?.id),
            (l = (0, m.A)(u, "BotUserProfilePopout")),
            (o = l?.id ?? null),
            (a = (0, i.bG)([F.A, S.A], () => (null != t && null != o ? ((0, L.A)(t, o, p)?.channelId ?? null) : null), [
                t,
                o,
                p,
            ])),
            r.useMemo(() => (null != t && null != a ? { guildId: t, channelId: a } : null), [t, a])),
        P = (0, i.bG)([z.Ay], () => z.Ay.isMember(c?.id, u.id)),
        b = (0, i.bG)([D.A], () => D.A.hidePersonalInformation);
    return (0, n.jsxs)(E.Ip, {
        fade: !0,
        className: eu.rf,
        children: [
            (0, n.jsx)(J.A, { userId: u.id }),
            (0, n.jsx)(ee.Ay, {
                user: u,
                guildId: c?.id,
                displayName: g,
                onClickName: h,
                displayNameTrailing: b ? null : (0, n.jsx)(en.A, { userId: u.id, isVisible: f, onOpenProfile: h }),
                pronouns: d?.pronouns,
                onClose: x,
                trailing: (0, n.jsx)(Y.A, { displayProfile: d, themeType: eo.d.POPOUT, onClose: x }),
            }),
            (0, n.jsx)(K.A, { user: u, onOpenProfile: (e) => h?.({ tabSection: e }) }),
            (0, n.jsxs)("div", {
                className: ea.U,
                children: [
                    null != v
                        ? (0, n.jsxs)(U.e, {
                              size: "sm",
                              fullWidth: !0,
                              children: [
                                  (0, n.jsx)(W, { appChannel: v, onClose: x }),
                                  (0, n.jsx)(et.A, { user: u, closePopout: x, variant: "secondary", hideIcon: !0 }),
                              ],
                          })
                        : (0, n.jsx)(et.A, { user: u, closePopout: x, fullWidth: !0 }),
                    (0, n.jsx)(el.A, { user: u, guildId: c?.id, fullWidth: !0 }),
                ],
            }),
            (0, n.jsx)(er.A, { userId: u.id, userBio: d?.bio, hidePersonalInformation: b, onClose: x }),
            (0, n.jsx)(Z.A, { user: u, currentUser: s, guildId: c?.id, onOpenUserProfileModal: h, onClose: x }),
            A?.popularApplicationCommandIds != null &&
                null != j &&
                (0, n.jsx)(H.A, {
                    applicationId: A.id,
                    commandIds: A.popularApplicationCommandIds,
                    channel: j,
                    guildId: c?.id,
                    onClick: x,
                }),
            null != c &&
                P &&
                (0, n.jsx)(Q.A, {
                    heading: V.intl.string(V.t["LPJmL/"]),
                    children: (0, n.jsx)(ei.A, { userId: u.id, guild: c }),
                }),
        ],
    });
}
var ed = l(74525),
    ec = l(518477),
    ef = l(207634);
function eh(e) {
    let {
            user: t,
            currentUser: l,
            guildId: f,
            channelId: h,
            messageId: m,
            roleId: p,
            openedAt: E,
            closePopout: U,
            setPopoutRef: F,
            disableUserProfileLink: S = __OVERLAY__,
            newAnalyticsLocations: L = [],
            disableAutoFocus: _ = !1,
            onClickContainer: G,
        } = e,
        { analyticsLocations: W } = (0, c.Ay)([...L, d.A.USER_PROFILE_POPOUT]),
        z = (0, v.aL)(),
        B = (0, I.pb)({ layout: "POPOUT", userId: t.id, guildId: f, channelId: h, messageId: m, roleId: p }),
        D = (0, w.Ay)(t.id, f);
    (0, P.A)(W, D, ec.R7.POPOUT);
    let X = (0, i.bG)([b.A], () => (null != f ? b.A.getGuild(f) : null)),
        H = r.useRef(null),
        { isHoveringOrFocusing: Y } = (0, j.A)(H);
    function J(e) {
        (U?.(),
            z.dispatch(q.jej.POPOUT_CLOSE),
            (0, C.openUserProfileModal)({ sourceAnalyticsLocations: W, hideRestrictedProfile: !0, ...B, ...e }));
    }
    r.useEffect(() => {
        F?.(H?.current);
    }, [H, F]);
    let K = _ ? "div" : a.l,
        Q = (0, A.GV)(),
        Z = y.Ay.useName(f, h, t);
    return (0, n.jsx)(c.f5, {
        value: W,
        children: (0, n.jsx)(I.of, {
            value: B,
            openedAt: E,
            fetchStartedAt: D?.fetchStartedAt,
            fetchEndedAt: D?.fetchEndedAt,
            isLoaded: D?.isLoaded,
            children: (0, n.jsxs)(K, {
                ref: H,
                "aria-labelledby": Q,
                onClick: G,
                children: [
                    (0, n.jsx)(u.A, {
                        children: (0, n.jsx)(s.H, { id: Q, children: V.intl.format(V.t.KRe1Fk, { name: Z }) }),
                    }),
                    (0, n.jsxs)(N.A, {
                        user: t,
                        displayProfile: D,
                        themeType: eo.d.POPOUT,
                        innerClassName: x,
                        children: [
                            (0, n.jsx)(T.A, {
                                children: (0, n.jsx)(k.A, {
                                    user: t,
                                    guildId: f,
                                    viewProfileItem: S
                                        ? null
                                        : (0, n.jsx)(o.Dr, {
                                              id: "view-profile",
                                              label: V.intl.string(V.t["+Xp3hq"]),
                                              action: () => {
                                                  (J(),
                                                      (0, M.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: W,
                                                          ...B,
                                                      }));
                                              },
                                          }),
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: eu.wx,
                                children: [
                                    (0, n.jsx)(R.A, { user: t, displayProfile: D, guildId: f, themeType: eo.d.POPOUT }),
                                    (0, n.jsx)(O.A, {
                                        user: t,
                                        displayProfile: D,
                                        guildId: f,
                                        channelId: h,
                                        avatarSize: ef.T[eo.d.POPOUT].avatarSize,
                                        onOpenProfile: S ? void 0 : J,
                                    }),
                                    (0, n.jsx)($.A, {
                                        user: t,
                                        guildId: f,
                                        channelId: h,
                                        themeType: eo.d.POPOUT,
                                        onCloseProfile: U,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(es, {
                                user: t,
                                currentUser: l,
                                displayProfile: D,
                                guild: X,
                                isHoveringOrFocusing: Y,
                                onOpenProfile: S ? void 0 : J,
                                channelId: h,
                                onClose: U,
                            }),
                            (0, n.jsx)(ed.A, { user: t, guildId: f, channelId: h, onClose: U, disableAutoFocus: _ }),
                            (0, n.jsx)(g, { user: t, guildId: f, onClose: U }),
                        ],
                    }),
                ],
            }),
        }),
    });
}

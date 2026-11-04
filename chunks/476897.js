(t.r(l), t.d(l, { default: () => eu }));
var n = t(477900),
    r = t(582128),
    i = t(855986),
    a = t(477782),
    o = t(305866),
    s = t(140735),
    u = t(707554),
    d = t(793574),
    c = t(688810),
    f = t(627363),
    h = t(587895),
    m = t(316980),
    p = t(827656),
    x = t(499466),
    g = t(730201);
let A = g.I;
function j(e) {
    let { user: l, guildId: t, onClose: a } = e,
        o = (0, x.TW)("ConjureBotProfileFooter", { autoTrackExposure: l.bot }),
        s = (0, i.bG)([h.A], () => (o && l.bot ? (h.A.getAppIdForBotUserId(l.id) ?? l.id) : null), [o, l.bot, l.id]),
        u = (0, f.YY)(s).data,
        d = u?.conjureProjectId != null ? u : null,
        { creator: c, remixProject: A, isSettled: j } = (0, m.A)(d, t ?? null, null != d),
        v = r.useCallback(() => a?.(), [a]);
    return null == d || (null == c && j)
        ? null
        : (0, n.jsx)("div", {
              className: g.q,
              children: (0, n.jsx)(p.A, { creator: c, remixProject: A, guildId: t ?? null, onClose: v }),
          });
}
var v = t(915089),
    b = t(713517),
    P = t(267102),
    y = t(397562),
    I = t(71393),
    M = t(562153),
    w = t(183555),
    C = t(741534),
    O = t(527212),
    R = t(702476),
    T = t(718019),
    N = t(915614),
    E = t(946356),
    U = t(630891),
    k = t(587168),
    F = t(680581),
    S = t(95362),
    _ = t(734057),
    L = t(696451),
    $ = t(309010),
    G = t(351906),
    q = t(851767),
    z = t(612770),
    B = t(567556),
    D = t(559506),
    V = t(791556),
    W = t(900179),
    Y = t(646986),
    H = t(465829),
    X = t(570314),
    Z = t(571077),
    J = t(243166),
    K = t(442228),
    Q = t(403369),
    ee = t(996988),
    el = t(792996),
    et = t(96804),
    en = t(47453);
function er(e) {
    let {
            user: l,
            currentUser: t,
            displayProfile: r,
            guild: a,
            isHoveringOrFocusing: o,
            onOpenProfile: s,
            channelId: u,
            onClose: d,
        } = e,
        c = M.Ay.getName(a?.id, u, l),
        f = (0, i.bG)([q.A], () => q.A.getUserProfile(l.id)?.application),
        h = (0, i.bG)([_.A, $.Ay], () => _.A.getChannel($.Ay.getChannelId())),
        m = (0, i.bG)([L.Ay], () => L.Ay.isMember(a?.id, l.id)),
        p = (0, i.bG)([G.A], () => G.A.hidePersonalInformation);
    return (0, n.jsxs)(S.Ip, {
        fade: !0,
        className: en.rf,
        children: [
            (0, n.jsx)(D.A, { userId: l.id }),
            (0, n.jsx)(H.Ay, {
                user: l,
                guildId: a?.id,
                displayName: c,
                onClickName: s,
                displayNameTrailing: p ? null : (0, n.jsx)(J.A, { userId: l.id, isVisible: o, onOpenProfile: s }),
                pronouns: r?.pronouns,
                onClose: d,
                trailing: (0, n.jsx)(B.A, { displayProfile: r, themeType: ee.d.POPOUT, onClose: d }),
            }),
            (0, n.jsx)(V.A, { user: l, onOpenProfile: (e) => s?.({ tabSection: e }) }),
            (0, n.jsxs)("div", {
                className: et.U,
                children: [
                    (0, n.jsx)(X.A, { user: l, closePopout: d, fullWidth: !0 }),
                    (0, n.jsx)(Z.A, { user: l, guildId: a?.id, fullWidth: !0 }),
                ],
            }),
            (0, n.jsx)(K.A, { userId: l.id, userBio: r?.bio, hidePersonalInformation: p, onClose: d }),
            (0, n.jsx)(Y.A, { user: l, currentUser: t, guildId: a?.id, onOpenUserProfileModal: s, onClose: d }),
            f?.popularApplicationCommandIds != null &&
                null != h &&
                (0, n.jsx)(z.A, {
                    applicationId: f.id,
                    commandIds: f.popularApplicationCommandIds,
                    channel: h,
                    guildId: a?.id,
                    onClick: d,
                }),
            null != a &&
                m &&
                (0, n.jsx)(W.A, {
                    heading: el.intl.string(el.t["LPJmL/"]),
                    children: (0, n.jsx)(Q.A, { userId: l.id, guild: a }),
                }),
        ],
    });
}
var ei = t(848674),
    ea = t(518477),
    eo = t(652215),
    es = t(207634);
function eu(e) {
    let {
            user: l,
            currentUser: t,
            guildId: f,
            channelId: h,
            messageId: m,
            roleId: p,
            openedAt: x,
            closePopout: g,
            setPopoutRef: S,
            disableUserProfileLink: _ = __OVERLAY__,
            newAnalyticsLocations: L = [],
            disableAutoFocus: $ = !1,
            onClickContainer: G,
        } = e,
        { analyticsLocations: q } = (0, c.Ay)([...L, d.A.USER_PROFILE_POPOUT]),
        z = (0, P.aL)(),
        B = (0, w.pb)({ layout: "POPOUT", userId: l.id, guildId: f, channelId: h, messageId: m, roleId: p }),
        D = (0, O.Ay)(l.id, f);
    (0, y.A)(q, D, ea.R7.POPOUT);
    let V = (0, i.bG)([I.A], () => (null != f ? I.A.getGuild(f) : null)),
        W = r.useRef(null),
        { isHoveringOrFocusing: Y } = (0, b.A)(W);
    function H(e) {
        (g?.(),
            z.dispatch(eo.jej.POPOUT_CLOSE),
            (0, R.openUserProfileModal)({ sourceAnalyticsLocations: q, hideRestrictedProfile: !0, ...B, ...e }));
    }
    r.useEffect(() => {
        S?.(W?.current);
    }, [W, S]);
    let X = $ ? "div" : o.l,
        Z = (0, v.GV)(),
        J = M.Ay.useName(f, h, l);
    return (0, n.jsx)(c.f5, {
        value: q,
        children: (0, n.jsx)(w.of, {
            value: B,
            openedAt: x,
            fetchStartedAt: D?.fetchStartedAt,
            fetchEndedAt: D?.fetchEndedAt,
            isLoaded: D?.isLoaded,
            children: (0, n.jsxs)(X, {
                ref: W,
                "aria-labelledby": Z,
                onClick: G,
                children: [
                    (0, n.jsx)(s.A, {
                        children: (0, n.jsx)(u.H, { id: Z, children: el.intl.format(el.t.KRe1Fk, { name: J }) }),
                    }),
                    (0, n.jsxs)(E.A, {
                        user: l,
                        displayProfile: D,
                        themeType: ee.d.POPOUT,
                        innerClassName: A,
                        children: [
                            (0, n.jsx)(k.A, {
                                children: (0, n.jsx)(U.A, {
                                    user: l,
                                    guildId: f,
                                    viewProfileItem: _
                                        ? null
                                        : (0, n.jsx)(a.Dr, {
                                              id: "view-profile",
                                              label: el.intl.string(el.t["+Xp3hq"]),
                                              action: () => {
                                                  (H(),
                                                      (0, C.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: q,
                                                          ...B,
                                                      }));
                                              },
                                          }),
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: en.wx,
                                children: [
                                    (0, n.jsx)(N.A, { user: l, displayProfile: D, guildId: f, themeType: ee.d.POPOUT }),
                                    (0, n.jsx)(T.A, {
                                        user: l,
                                        displayProfile: D,
                                        guildId: f,
                                        channelId: h,
                                        avatarSize: es.T[ee.d.POPOUT].avatarSize,
                                        onOpenProfile: _ ? void 0 : H,
                                    }),
                                    (0, n.jsx)(F.A, {
                                        user: l,
                                        guildId: f,
                                        channelId: h,
                                        themeType: ee.d.POPOUT,
                                        onCloseProfile: g,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(er, {
                                user: l,
                                currentUser: t,
                                displayProfile: D,
                                guild: V,
                                isHoveringOrFocusing: Y,
                                onOpenProfile: _ ? void 0 : H,
                                channelId: h,
                                onClose: g,
                            }),
                            (0, n.jsx)(ei.A, { user: l, guildId: f, channelId: h, onClose: g, disableAutoFocus: $ }),
                            (0, n.jsx)(j, { user: l, guildId: f, onClose: g }),
                        ],
                    }),
                ],
            }),
        }),
    });
}

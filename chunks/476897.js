(t.r(l), t.d(l, { default: () => eu }));
var n = t(477900),
    r = t(582128),
    i = t(855986),
    o = t(477782),
    a = t(305866),
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
    let { user: l, guildId: t, onClose: o } = e,
        a = (0, x.TW)("ConjureBotProfileFooter", { autoTrackExposure: l.bot }),
        s = (0, i.bG)([h.A], () => (a && l.bot ? (h.A.getAppIdForBotUserId(l.id) ?? l.id) : null), [a, l.bot, l.id]),
        u = (0, f.YY)(s).data,
        d = u?.conjureProjectId != null ? u : null,
        { creator: c, remixProject: A, editProject: j, isSettled: v } = (0, m.A)(d, t ?? null, null != d),
        b = r.useCallback(() => o?.(), [o]);
    return null == d || (null == c && v)
        ? null
        : (0, n.jsx)("div", {
              className: g.q,
              children: (0, n.jsx)(p.A, {
                  applicationId: d.id,
                  creator: c,
                  remixProject: A,
                  editProject: j,
                  guildId: t ?? null,
                  onClose: b,
              }),
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
    k = t(946356),
    E = t(630891),
    U = t(587168),
    F = t(680581),
    S = t(95362),
    $ = t(734057),
    _ = t(696451),
    L = t(309010),
    G = t(351906),
    q = t(851767),
    V = t(612770),
    W = t(567556),
    z = t(559506),
    B = t(791556),
    D = t(900179),
    Y = t(646986),
    H = t(465829),
    X = t(570314),
    J = t(571077),
    K = t(243166),
    Q = t(442228),
    Z = t(403369),
    ee = t(996988),
    el = t(792996),
    et = t(96804),
    en = t(47453);
function er(e) {
    let {
            user: l,
            currentUser: t,
            displayProfile: r,
            guild: o,
            isHoveringOrFocusing: a,
            onOpenProfile: s,
            channelId: u,
            onClose: d,
        } = e,
        c = M.Ay.getName(o?.id, u, l),
        f = (0, i.bG)([q.A], () => q.A.getUserProfile(l.id)?.application),
        h = (0, i.bG)([$.A, L.Ay], () => $.A.getChannel(L.Ay.getChannelId())),
        m = (0, i.bG)([_.Ay], () => _.Ay.isMember(o?.id, l.id)),
        p = (0, i.bG)([G.A], () => G.A.hidePersonalInformation);
    return (0, n.jsxs)(S.Ip, {
        fade: !0,
        className: en.rf,
        children: [
            (0, n.jsx)(z.A, { userId: l.id }),
            (0, n.jsx)(H.Ay, {
                user: l,
                guildId: o?.id,
                displayName: c,
                onClickName: s,
                displayNameTrailing: p ? null : (0, n.jsx)(K.A, { userId: l.id, isVisible: a, onOpenProfile: s }),
                pronouns: r?.pronouns,
                onClose: d,
                trailing: (0, n.jsx)(W.A, { displayProfile: r, themeType: ee.d.POPOUT, onClose: d }),
            }),
            (0, n.jsx)(B.A, { user: l, onOpenProfile: (e) => s?.({ tabSection: e }) }),
            (0, n.jsxs)("div", {
                className: et.U,
                children: [
                    (0, n.jsx)(X.A, { user: l, closePopout: d, fullWidth: !0 }),
                    (0, n.jsx)(J.A, { user: l, guildId: o?.id, fullWidth: !0 }),
                ],
            }),
            (0, n.jsx)(Q.A, { userId: l.id, userBio: r?.bio, hidePersonalInformation: p, onClose: d }),
            (0, n.jsx)(Y.A, { user: l, currentUser: t, guildId: o?.id, onOpenUserProfileModal: s, onClose: d }),
            f?.popularApplicationCommandIds != null &&
                null != h &&
                (0, n.jsx)(V.A, {
                    applicationId: f.id,
                    commandIds: f.popularApplicationCommandIds,
                    channel: h,
                    guildId: o?.id,
                    onClick: d,
                }),
            null != o &&
                m &&
                (0, n.jsx)(D.A, {
                    heading: el.intl.string(el.t["LPJmL/"]),
                    children: (0, n.jsx)(Z.A, { userId: l.id, guild: o }),
                }),
        ],
    });
}
var ei = t(848674),
    eo = t(518477),
    ea = t(652215),
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
            disableUserProfileLink: $ = __OVERLAY__,
            newAnalyticsLocations: _ = [],
            disableAutoFocus: L = !1,
            onClickContainer: G,
        } = e,
        { analyticsLocations: q } = (0, c.Ay)([..._, d.A.USER_PROFILE_POPOUT]),
        V = (0, P.aL)(),
        W = (0, w.pb)({ layout: "POPOUT", userId: l.id, guildId: f, channelId: h, messageId: m, roleId: p }),
        z = (0, O.Ay)(l.id, f);
    (0, y.A)(q, z, eo.R7.POPOUT);
    let B = (0, i.bG)([I.A], () => (null != f ? I.A.getGuild(f) : null)),
        D = r.useRef(null),
        { isHoveringOrFocusing: Y } = (0, b.A)(D);
    function H(e) {
        (g?.(),
            V.dispatch(ea.jej.POPOUT_CLOSE),
            (0, R.openUserProfileModal)({ sourceAnalyticsLocations: q, hideRestrictedProfile: !0, ...W, ...e }));
    }
    r.useEffect(() => {
        S?.(D?.current);
    }, [D, S]);
    let X = L ? "div" : a.l,
        J = (0, v.GV)(),
        K = M.Ay.useName(f, h, l);
    return (0, n.jsx)(c.f5, {
        value: q,
        children: (0, n.jsx)(w.of, {
            value: W,
            openedAt: x,
            fetchStartedAt: z?.fetchStartedAt,
            fetchEndedAt: z?.fetchEndedAt,
            isLoaded: z?.isLoaded,
            children: (0, n.jsxs)(X, {
                ref: D,
                "aria-labelledby": J,
                onClick: G,
                children: [
                    (0, n.jsx)(s.A, {
                        children: (0, n.jsx)(u.H, { id: J, children: el.intl.format(el.t.KRe1Fk, { name: K }) }),
                    }),
                    (0, n.jsxs)(k.A, {
                        user: l,
                        displayProfile: z,
                        themeType: ee.d.POPOUT,
                        innerClassName: A,
                        children: [
                            (0, n.jsx)(U.A, {
                                children: (0, n.jsx)(E.A, {
                                    user: l,
                                    guildId: f,
                                    viewProfileItem: $
                                        ? null
                                        : (0, n.jsx)(o.Dr, {
                                              id: "view-profile",
                                              label: el.intl.string(el.t["+Xp3hq"]),
                                              action: () => {
                                                  (H(),
                                                      (0, C.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: q,
                                                          ...W,
                                                      }));
                                              },
                                          }),
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: en.wx,
                                children: [
                                    (0, n.jsx)(N.A, { user: l, displayProfile: z, guildId: f, themeType: ee.d.POPOUT }),
                                    (0, n.jsx)(T.A, {
                                        user: l,
                                        displayProfile: z,
                                        guildId: f,
                                        channelId: h,
                                        avatarSize: es.T[ee.d.POPOUT].avatarSize,
                                        onOpenProfile: $ ? void 0 : H,
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
                                displayProfile: z,
                                guild: B,
                                isHoveringOrFocusing: Y,
                                onOpenProfile: $ ? void 0 : H,
                                channelId: h,
                                onClose: g,
                            }),
                            (0, n.jsx)(ei.A, { user: l, guildId: f, channelId: h, onClose: g, disableAutoFocus: L }),
                            (0, n.jsx)(j, { user: l, guildId: f, onClose: g }),
                        ],
                    }),
                ],
            }),
        }),
    });
}

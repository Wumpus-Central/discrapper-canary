(l.r(t), l.d(t, { default: () => eu }));
var n = l(477900),
    r = l(582128),
    i = l(17928),
    o = l(477782),
    a = l(305866),
    s = l(140735),
    u = l(707554),
    d = l(793574),
    c = l(688810),
    f = l(627363),
    h = l(587895),
    m = l(456709),
    p = l(827656),
    x = l(793480),
    g = l(730201);
let A = g.I;
function j(e) {
    let { user: t, guildId: l, onClose: o } = e,
        a = (0, x.TW)("ConjureBotProfileFooter", { autoTrackExposure: t.bot }),
        s = (0, i.bG)([h.A], () => (a && t.bot ? (h.A.getAppIdForBotUserId(t.id) ?? t.id) : null), [a, t.bot, t.id]),
        u = (0, f.YY)(s).data,
        d = u?.conjureProjectId != null ? u : null,
        { creator: c, remixProject: A, isSettled: j } = (0, m.A)(d, l ?? null, null != d),
        v = r.useCallback(() => o?.(), [o]);
    return null == d || (null == c && j)
        ? null
        : (0, n.jsx)("div", {
              className: g.q,
              children: (0, n.jsx)(p.A, { creator: c, remixProject: A, guildId: l ?? null, onClose: v }),
          });
}
var v = l(915089),
    b = l(713517),
    P = l(267102),
    y = l(397562),
    I = l(71393),
    M = l(562153),
    w = l(183555),
    C = l(47675),
    O = l(999291),
    R = l(402860),
    T = l(718019),
    E = l(915614),
    N = l(946356),
    U = l(984545),
    k = l(587168),
    $ = l(394816),
    F = l(364522),
    S = l(734057),
    L = l(696451),
    _ = l(309010),
    G = l(351906),
    q = l(321191),
    W = l(383199),
    z = l(977059),
    D = l(559506),
    V = l(791556),
    B = l(900179),
    X = l(646986),
    Y = l(465829),
    H = l(570314),
    Z = l(571077),
    J = l(243166),
    K = l(442228),
    Q = l(403369),
    ee = l(996988),
    et = l(105292),
    el = l(96804),
    en = l(47453);
function er(e) {
    let {
            user: t,
            currentUser: l,
            displayProfile: r,
            guild: o,
            isHoveringOrFocusing: a,
            onOpenProfile: s,
            channelId: u,
            onClose: d,
        } = e,
        c = M.Ay.getName(o?.id, u, t),
        f = (0, i.bG)([q.A], () => q.A.getUserProfile(t.id)?.application),
        h = (0, i.bG)([S.A, _.Ay], () => S.A.getChannel(_.Ay.getChannelId())),
        m = (0, i.bG)([L.Ay], () => L.Ay.isMember(o?.id, t.id)),
        p = (0, i.bG)([G.A], () => G.A.hidePersonalInformation);
    return (0, n.jsxs)(F.Ip, {
        fade: !0,
        className: en.rf,
        children: [
            (0, n.jsx)(D.A, { userId: t.id }),
            (0, n.jsx)(Y.Ay, {
                user: t,
                guildId: o?.id,
                displayName: c,
                onClickName: s,
                displayNameTrailing: p ? null : (0, n.jsx)(J.A, { userId: t.id, isVisible: a, onOpenProfile: s }),
                pronouns: r?.pronouns,
                onClose: d,
                trailing: (0, n.jsx)(z.A, { displayProfile: r, themeType: ee.d.POPOUT, onClose: d }),
            }),
            (0, n.jsx)(V.A, { user: t, onOpenProfile: (e) => s?.({ tabSection: e }) }),
            (0, n.jsxs)("div", {
                className: el.U,
                children: [
                    (0, n.jsx)(H.A, { user: t, closePopout: d, fullWidth: !0 }),
                    (0, n.jsx)(Z.A, { user: t, guildId: o?.id, fullWidth: !0 }),
                ],
            }),
            (0, n.jsx)(K.A, { userId: t.id, userBio: r?.bio, hidePersonalInformation: p, onClose: d }),
            (0, n.jsx)(X.A, { user: t, currentUser: l, guildId: o?.id, onOpenUserProfileModal: s, onClose: d }),
            f?.popularApplicationCommandIds != null &&
                null != h &&
                (0, n.jsx)(W.A, {
                    applicationId: f.id,
                    commandIds: f.popularApplicationCommandIds,
                    channel: h,
                    guildId: o?.id,
                    onClick: d,
                }),
            null != o &&
                m &&
                (0, n.jsx)(B.A, {
                    heading: et.intl.string(et.t["LPJmL/"]),
                    children: (0, n.jsx)(Q.A, { userId: t.id, guild: o }),
                }),
        ],
    });
}
var ei = l(848674),
    eo = l(518477),
    ea = l(652215),
    es = l(207634);
function eu(e) {
    let {
            user: t,
            currentUser: l,
            guildId: f,
            channelId: h,
            messageId: m,
            roleId: p,
            openedAt: x,
            closePopout: g,
            setPopoutRef: F,
            disableUserProfileLink: S = __OVERLAY__,
            newAnalyticsLocations: L = [],
            disableAutoFocus: _ = !1,
            onClickContainer: G,
        } = e,
        { analyticsLocations: q } = (0, c.Ay)([...L, d.A.USER_PROFILE_POPOUT]),
        W = (0, P.aL)(),
        z = (0, w.pb)({ layout: "POPOUT", userId: t.id, guildId: f, channelId: h, messageId: m, roleId: p }),
        D = (0, O.Ay)(t.id, f);
    (0, y.A)(q, D, eo.R7.POPOUT);
    let V = (0, i.bG)([I.A], () => (null != f ? I.A.getGuild(f) : null)),
        B = r.useRef(null),
        { isHoveringOrFocusing: X } = (0, b.A)(B);
    function Y(e) {
        (g?.(),
            W.dispatch(ea.jej.POPOUT_CLOSE),
            (0, R.openUserProfileModal)({ sourceAnalyticsLocations: q, hideRestrictedProfile: !0, ...z, ...e }));
    }
    r.useEffect(() => {
        F?.(B?.current);
    }, [B, F]);
    let H = _ ? "div" : a.l,
        Z = (0, v.GV)(),
        J = M.Ay.useName(f, h, t);
    return (0, n.jsx)(c.f5, {
        value: q,
        children: (0, n.jsx)(w.of, {
            value: z,
            openedAt: x,
            fetchStartedAt: D?.fetchStartedAt,
            fetchEndedAt: D?.fetchEndedAt,
            isLoaded: D?.isLoaded,
            children: (0, n.jsxs)(H, {
                ref: B,
                "aria-labelledby": Z,
                onClick: G,
                children: [
                    (0, n.jsx)(s.A, {
                        children: (0, n.jsx)(u.H, { id: Z, children: et.intl.format(et.t.KRe1Fk, { name: J }) }),
                    }),
                    (0, n.jsxs)(N.A, {
                        user: t,
                        displayProfile: D,
                        themeType: ee.d.POPOUT,
                        innerClassName: A,
                        children: [
                            (0, n.jsx)(k.A, {
                                children: (0, n.jsx)(U.A, {
                                    user: t,
                                    guildId: f,
                                    viewProfileItem: S
                                        ? null
                                        : (0, n.jsx)(o.Dr, {
                                              id: "view-profile",
                                              label: et.intl.string(et.t["+Xp3hq"]),
                                              action: () => {
                                                  (Y(),
                                                      (0, C.Wn)({
                                                          action: "PRESS_VIEW_PROFILE",
                                                          analyticsLocations: q,
                                                          ...z,
                                                      }));
                                              },
                                          }),
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: en.wx,
                                children: [
                                    (0, n.jsx)(E.A, { user: t, displayProfile: D, guildId: f, themeType: ee.d.POPOUT }),
                                    (0, n.jsx)(T.A, {
                                        user: t,
                                        displayProfile: D,
                                        guildId: f,
                                        channelId: h,
                                        avatarSize: es.T[ee.d.POPOUT].avatarSize,
                                        onOpenProfile: S ? void 0 : Y,
                                    }),
                                    (0, n.jsx)($.A, {
                                        user: t,
                                        guildId: f,
                                        channelId: h,
                                        themeType: ee.d.POPOUT,
                                        onCloseProfile: g,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(er, {
                                user: t,
                                currentUser: l,
                                displayProfile: D,
                                guild: V,
                                isHoveringOrFocusing: X,
                                onOpenProfile: S ? void 0 : Y,
                                channelId: h,
                                onClose: g,
                            }),
                            (0, n.jsx)(ei.A, { user: t, guildId: f, channelId: h, onClose: g, disableAutoFocus: _ }),
                            (0, n.jsx)(j, { user: t, guildId: f, onClose: g }),
                        ],
                    }),
                ],
            }),
        }),
    });
}

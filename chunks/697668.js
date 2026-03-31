"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(793574),
    l = n(688810),
    u = n(915089),
    c = n(713517),
    d = n(267102),
    _ = n(71393),
    f = n(562153),
    p = n(183555),
    h = n(672385),
    m = n(950191),
    E = n(657331),
    g = n(718019),
    A = n(915614),
    I = n(946356),
    T = n(490752),
    S = n(587168),
    y = n(159218),
    v = n(666388),
    N = n(848674),
    C = n(652215),
    R = n(996988),
    O = n(985018),
    b = n(74209);
function D(e) {
    let {
            user: t,
            currentUser: n,
            guildId: D,
            channelId: L,
            messageId: w,
            roleId: M,
            closePopout: P,
            setPopoutRef: x,
            disableUserProfileLink: k = __OVERLAY__,
            newAnalyticsLocations: U = [],
            disableAutoFocus: G = !1,
            onClickContainer: F,
        } = e,
        { analyticsLocations: V } = (0, l.Ay)([...U, o.A.USER_PROFILE_POPOUT]),
        B = (0, d.aL)(),
        H = (0, p.pb)({ layout: "POPOUT", userId: t.id, guildId: D, channelId: L, messageId: w, roleId: M }),
        j = (0, m.Ay)(t.id, D),
        Y = (0, s.bG)([_.A], () => (null != D ? _.A.getGuild(D) : null)),
        W = i.useRef(null),
        { isHoveringOrFocusing: K } = (0, c.A)(W);
    i.useEffect(() => {
        x?.(W?.current);
    }, [W, x]);
    let $ = (e) => {
            P?.(),
                B.dispatch(C.jej.POPOUT_CLOSE),
                (0, E.openUserProfileModal)({ sourceAnalyticsLocations: V, hideRestrictedProfile: !0, ...H, ...e });
        },
        z = () =>
            k
                ? null
                : (0, r.jsx)(a.Drp, {
                      id: "view-profile",
                      label: O.intl.string(O.t["+Xp3hq"]),
                      action: () => {
                          $(), (0, h.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: V, ...H });
                      },
                  }),
        q = G ? "div" : a.lGe,
        Z = (0, u.GV)(),
        X = f.Ay.useName(D, L, t);
    return (0, r.jsx)(l.f5, {
        value: V,
        children: (0, r.jsx)(p.of, {
            value: H,
            isLoaded: j?.isLoaded,
            children: (0, r.jsxs)(q, {
                ref: W,
                "aria-labelledby": Z,
                onClick: F,
                children: [
                    (0, r.jsx)(a.AC4, {
                        children: (0, r.jsx)(a.H, { id: Z, children: O.intl.format(O.t.KRe1Fk, { name: X }) }),
                    }),
                    (0, r.jsxs)(I.A, {
                        user: t,
                        displayProfile: j,
                        themeType: R.d.POPOUT,
                        children: [
                            (0, r.jsx)(S.A, {
                                children: (0, r.jsx)(T.A, { user: t, guildId: D, viewProfileItem: z() }),
                            }),
                            (0, r.jsxs)("div", {
                                className: b.wx,
                                children: [
                                    (0, r.jsx)(A.A, { user: t, displayProfile: j, guildId: D, themeType: R.d.POPOUT }),
                                    (0, r.jsx)(g.A, {
                                        user: t,
                                        displayProfile: j,
                                        guildId: D,
                                        channelId: L,
                                        themeType: R.d.POPOUT,
                                        onOpenProfile: k ? void 0 : $,
                                    }),
                                    (0, r.jsx)(y.A, {
                                        user: t,
                                        themeType: R.d.POPOUT,
                                        onCloseProfile: P,
                                        disableToolbar: !0,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(v.A, {
                                user: t,
                                currentUser: n,
                                displayProfile: j,
                                guild: Y,
                                isHoveringOrFocusing: K,
                                onOpenProfile: k ? void 0 : $,
                                channelId: L,
                                onClose: P,
                            }),
                            (0, r.jsx)(N.A, { user: t, guildId: D, channelId: L, onClose: P, disableAutoFocus: G }),
                        ],
                    }),
                ],
            }),
        }),
    });
}

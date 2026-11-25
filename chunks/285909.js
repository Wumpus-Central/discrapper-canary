e.d(n, { A: () => B });
var l = e(477900),
    i = e(582128),
    a = e(866665),
    r = e(939249),
    s = e(365199),
    o = e(646514),
    c = e(265872),
    u = e(165862),
    d = e(477782),
    A = e(793574),
    x = e(688810),
    m = e(315246),
    f = e(92240),
    g = e(679492),
    p = e(243949),
    _ = e(939496),
    I = e(855986),
    E = e(573648),
    T = e(541806),
    N = e(261020),
    h = e(83971),
    C = e(780964),
    v = e(766075),
    y = e(417869),
    S = e(652215),
    j = e(792996),
    O = e(754495),
    P = e(534465),
    L = e(306471),
    R = e(620678),
    b = e(540999),
    M = e(939075),
    U = e(20805),
    G = e(655116),
    D = e(287809),
    V = e(272984),
    Y = e(695311),
    w = e(518477),
    k = e(996988);
function W(t) {
    let {
            children: n,
            user: e,
            activity: a,
            entry: r,
            display: s,
            onSelect: o,
            onClose: W,
            appContext: z,
            targetElementRef: B,
        } = t,
        [H, $] = i.useState(!1),
        { analyticsLocations: F } = (0, x.Ay)(A.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        X = (0, f.A)({ display: s, user: e, activity: a, entry: r, analyticsLocations: F }),
        Q = (0, g.NR)(),
        J = i.useRef(null),
        Z = Q?.interactionPopoutTargetRef ?? J,
        q = (function (t) {
            let { onAction: n } = t,
                { themeType: e } = (0, _.E)(),
                i = (0, p.A)({
                    userId: t.user.id,
                    tabSection: w.RP.ACTIVITY,
                    label: j.intl.string(j.t.pD1L1u),
                    onAction: () => n?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
                });
            return [
                e === k.d.POPOUT ? i : null,
                (function (t) {
                    let { user: n, entry: e, display: i, onAction: a, onClose: r } = t,
                        s = (0, I.bG)([D.default], () => D.default.getCurrentUser()?.id === n.id),
                        o = (0, I.bG)([G.A], () => G.A.hasConnectedAccount());
                    if ("recent" !== i || !(0, h.F3)(e)) return null;
                    if (!o)
                        return (0, l.jsx)(d.Dr, {
                            id: "connect-spotify",
                            label: j.intl.formatToPlainString(j.t.XWSHTb, { platform: V.HD }),
                            action: () => {
                                (a?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                                    (0, v.openUserSettings)(C.X.CONNECTIONS_CATEGORY),
                                    r?.());
                            },
                        });
                    if (s) return null;
                    let c = (0, U.Tq)(e) ? e.extra.entries[0]?.media : e.extra.media;
                    return null == c
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "play-on-spotify",
                              label: j.intl.string(j.t.rRffNz),
                              action: () => {
                                  (a?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                                      (0, N.n)(V.M0.TRACK, c.external_id));
                              },
                          });
                })(t),
                (0, P.Ay)(t),
                (0, P.gA)(t),
                (function (t) {
                    let { display: n, entry: e, onAction: i, onClose: a } = t,
                        r = (0, U.yl)(e),
                        s = (0, Y.A)({ applicationId: r ? e.extra.application_id : void 0, onClose: a });
                    return "recent" === n && r
                        ? (0, l.jsx)(d.Dr, {
                              id: "view-activity",
                              label: j.intl.string(j.t.GDWYR8),
                              action: () => {
                                  (i?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), s());
                              },
                          })
                        : null;
                })(t),
                (0, M.A)(t),
                (function (t) {
                    let { activity: n, entry: e, display: i, onAction: a, onClose: r } = t,
                        s = (0, I.bG)([y.A], () => null != y.A.getAccount(null, S.fg2.CRUNCHYROLL));
                    if (!(0, T.A)(n) && !(0, h.CU)(e)) return null;
                    if (!s)
                        return (0, l.jsx)(d.Dr, {
                            id: "connect-crunchyroll",
                            label: j.intl.formatToPlainString(j.t.XWSHTb, {
                                platform: E.A.get(S.fg2.CRUNCHYROLL).name,
                            }),
                            action: () => {
                                (a?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                                    (0, v.openUserSettings)(C.X.CONNECTIONS_CATEGORY),
                                    r?.());
                            },
                        });
                    if ("recent" !== i || !(0, h.CU)(e)) return null;
                    let o = e.extra.url;
                    return null == o || "" === o
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "watch-on-crunchyroll",
                              label: j.intl.string(j.t.OpxQVH),
                              action: () => {
                                  (a?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, N.C)(o));
                              },
                          });
                })(t),
                (0, O.s)(t),
                (function (t) {
                    let { user: n, activity: e } = t,
                        i = (0, I.bG)([b.A], () => b.A.isDeveloper);
                    return __OVERLAY__ || !i || null == e
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "inspect-presence",
                              label: "Inspect Presence",
                              leadingAccessory: { type: "icon", icon: L.StaffBadgeIcon },
                              action: () => (0, R.cN)(n.id),
                          });
                })(t),
            ].filter((t) => null != t);
        })({ entry: r, activity: a, user: e, display: s, onClose: W, onAction: X, isMenuOpen: H, appContext: z });
    return 0 === q.length || e.bot
        ? null
        : (0, l.jsx)(c.Y, {
              targetElementRef: B ?? Z,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  (X({ action: "OPEN_MENU" }), $(!0));
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, l.jsx)("div", {
                      onClick: (t) => t.stopPropagation(),
                      children: (0, l.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: m.n,
                          onClose: () => {
                              (n(), $(!1));
                          },
                          "aria-label": j.intl.string(j.t.PlAQz1),
                          onSelect: o,
                          children: (0, l.jsx)(d.rX, { children: q }),
                      }),
                  });
              },
              children: n,
          });
}
var z = e(260155);
function B(t) {
    let n = i.useRef(null);
    return (0, l.jsx)(W, {
        ...t,
        targetElementRef: n,
        children: (t) =>
            (0, l.jsx)(a.m, {
                targetElementRef: n,
                text: j.intl.string(j.t["UKOtz+"]),
                ariaHidden: !0,
                children: (0, l.jsx)(r.D, {
                    ...t,
                    innerRef: n,
                    "aria-label": j.intl.string(j.t["UKOtz+"]),
                    onClick: (n) => {
                        (n.stopPropagation(), t.onClick(n));
                    },
                    onContextMenu: (n) => {
                        (n.preventDefault(), t.onClick(n));
                    },
                    className: z.He,
                    children: (0, l.jsx)(s.MoreHorizontalIcon, {
                        color: o.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        size: "xs",
                    }),
                }),
            }),
    });
}

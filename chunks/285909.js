e.d(n, { A: () => H });
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
    f = e(688810),
    g = e(315246),
    m = e(92240),
    p = e(679492),
    x = e(243949),
    I = e(939496),
    _ = e(855986),
    N = e(573648),
    E = e(541806),
    T = e(261020),
    h = e(83971),
    C = e(780964),
    S = e(766075),
    y = e(417869),
    v = e(652215),
    O = e(792996),
    j = e(754495),
    P = e(534465),
    R = e(306471),
    L = e(620678),
    b = e(540999),
    M = e(939075),
    U = e(20805),
    D = e(655116),
    G = e(287809),
    Y = e(272984),
    V = e(695311),
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
            appContext: B,
            targetElementRef: H,
        } = t,
        [z, X] = i.useState(!1),
        { analyticsLocations: $ } = (0, f.Ay)(A.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        F = (0, m.A)({ display: s, user: e, activity: a, entry: r, analyticsLocations: $ }),
        Q = (0, p.NR)(),
        J = i.useRef(null),
        q = Q?.interactionPopoutTargetRef ?? J,
        Z = (function (t) {
            let { onAction: n } = t,
                { themeType: e } = (0, I.E)(),
                i = (0, x.A)({
                    userId: t.user.id,
                    tabSection: w.RP.ACTIVITY,
                    label: O.intl.string(O.t.pD1L1u),
                    onAction: () => n?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
                });
            return [
                e === k.d.POPOUT ? i : null,
                (function (t) {
                    let { user: n, entry: e, display: i, onAction: a, onClose: r } = t,
                        s = (0, _.bG)([G.default], () => G.default.getCurrentUser()?.id === n.id),
                        o = (0, _.bG)([D.A], () => D.A.hasConnectedAccount());
                    if ("recent" !== i || !(0, h.F3)(e)) return null;
                    if (!o)
                        return (0, l.jsx)(d.Dr, {
                            id: "connect-spotify",
                            label: O.intl.formatToPlainString(O.t.XWSHTb, { platform: Y.HD }),
                            action: () => {
                                (a?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                                    (0, S.openUserSettings)(C.X.CONNECTIONS_CATEGORY),
                                    r?.());
                            },
                        });
                    if (s) return null;
                    let c = (0, U.Tq)(e) ? e.extra.entries[0]?.media : e.extra.media;
                    return null == c
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "play-on-spotify",
                              label: O.intl.string(O.t.rRffNz),
                              action: () => {
                                  (a?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                                      (0, T.n)(Y.M0.TRACK, c.external_id));
                              },
                          });
                })(t),
                (0, P.Ay)(t),
                (0, P.gA)(t),
                (function (t) {
                    let { display: n, entry: e, onAction: i, onClose: a } = t,
                        r = (0, U.yl)(e),
                        s = (0, V.A)({ applicationId: r ? e.extra.application_id : void 0, onClose: a });
                    return "recent" === n && r
                        ? (0, l.jsx)(d.Dr, {
                              id: "view-activity",
                              label: O.intl.string(O.t.GDWYR8),
                              action: () => {
                                  (i?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), s());
                              },
                          })
                        : null;
                })(t),
                (0, M.A)(t),
                (function (t) {
                    let { activity: n, entry: e, display: i, onAction: a, onClose: r } = t,
                        s = (0, _.bG)([y.A], () => null != y.A.getAccount(null, v.fg2.CRUNCHYROLL));
                    if (!(0, E.A)(n) && !(0, h.CU)(e)) return null;
                    if (!s)
                        return (0, l.jsx)(d.Dr, {
                            id: "connect-crunchyroll",
                            label: O.intl.formatToPlainString(O.t.XWSHTb, {
                                platform: N.A.get(v.fg2.CRUNCHYROLL).name,
                            }),
                            action: () => {
                                (a?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                                    (0, S.openUserSettings)(C.X.CONNECTIONS_CATEGORY),
                                    r?.());
                            },
                        });
                    if ("recent" !== i || !(0, h.CU)(e)) return null;
                    let o = e.extra.url;
                    return null == o || "" === o
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "watch-on-crunchyroll",
                              label: O.intl.string(O.t.OpxQVH),
                              action: () => {
                                  (a?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, T.C)(o));
                              },
                          });
                })(t),
                (0, j.s)(t),
                (function (t) {
                    let { user: n, activity: e } = t,
                        i = (0, _.bG)([b.A], () => b.A.isDeveloper);
                    return __OVERLAY__ || !i || null == e
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "inspect-presence",
                              label: "Inspect Presence",
                              leadingAccessory: { type: "icon", icon: R.StaffBadgeIcon },
                              action: () => (0, L.cN)(n.id),
                          });
                })(t),
            ].filter((t) => null != t);
        })({ entry: r, activity: a, user: e, display: s, onClose: W, onAction: F, isMenuOpen: z, appContext: B });
    return 0 === Z.length || e.bot
        ? null
        : (0, l.jsx)(c.Y, {
              targetElementRef: H ?? q,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  (F({ action: "OPEN_MENU" }), X(!0));
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, l.jsx)("div", {
                      onClick: (t) => t.stopPropagation(),
                      children: (0, l.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: g.n,
                          onClose: () => {
                              (n(), X(!1));
                          },
                          "aria-label": O.intl.string(O.t.PlAQz1),
                          onSelect: o,
                          children: (0, l.jsx)(d.rX, { children: Z }),
                      }),
                  });
              },
              children: n,
          });
}
var B = e(260155);
function H(t) {
    let n = i.useRef(null);
    return (0, l.jsx)(W, {
        ...t,
        targetElementRef: n,
        children: (t) =>
            (0, l.jsx)(a.m, {
                targetElementRef: n,
                text: O.intl.string(O.t["UKOtz+"]),
                ariaHidden: !0,
                children: (0, l.jsx)(r.D, {
                    ...t,
                    innerRef: n,
                    "aria-label": O.intl.string(O.t["UKOtz+"]),
                    onClick: (n) => {
                        (n.stopPropagation(), t.onClick(n));
                    },
                    onContextMenu: (n) => {
                        (n.preventDefault(), t.onClick(n));
                    },
                    className: B.He,
                    children: (0, l.jsx)(s.MoreHorizontalIcon, {
                        color: o.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        size: "xs",
                    }),
                }),
            }),
    });
}

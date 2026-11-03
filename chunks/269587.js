e.d(n, { A: () => k });
var l = e(477900),
    i = e(582128),
    a = e(866665),
    r = e(939249),
    s = e(365199),
    o = e(661531),
    c = e(265872),
    u = e(980707),
    d = e(477782),
    A = e(793574),
    f = e(688810),
    g = e(315246),
    m = e(92240),
    p = e(679492),
    x = e(243949),
    _ = e(939496),
    I = e(17928),
    N = e(573648),
    E = e(541806),
    T = e(261020),
    h = e(83971),
    C = e(780964),
    S = e(766075),
    y = e(30370),
    v = e(652215),
    O = e(105292),
    j = e(754495),
    P = e(534465),
    L = e(939075),
    R = e(20805),
    b = e(655116),
    M = e(287809),
    U = e(272984),
    G = e(695311),
    D = e(518477),
    Y = e(996988);
function V(t) {
    let {
            children: n,
            user: e,
            activity: a,
            entry: r,
            display: s,
            onSelect: o,
            onClose: V,
            appContext: w,
            targetElementRef: k,
        } = t,
        [W, B] = i.useState(!1),
        { analyticsLocations: H } = (0, f.Ay)(A.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        z = (0, m.A)({ display: s, user: e, activity: a, entry: r, analyticsLocations: H }),
        X = (0, p.NR)(),
        $ = i.useRef(null),
        F = X?.interactionPopoutTargetRef ?? $,
        Q = (function (t) {
            let { onAction: n } = t,
                { themeType: e } = (0, _.E)(),
                i = (0, x.A)({
                    userId: t.user.id,
                    tabSection: D.RP.ACTIVITY,
                    label: O.intl.string(O.t.pD1L1u),
                    onAction: () => n?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
                });
            return [
                e === Y.d.POPOUT ? i : null,
                (function (t) {
                    let { user: n, entry: e, display: i, onAction: a, onClose: r } = t,
                        s = (0, I.bG)([M.default], () => M.default.getCurrentUser()?.id === n.id),
                        o = (0, I.bG)([b.A], () => b.A.hasConnectedAccount());
                    if ("recent" !== i || !(0, h.F3)(e)) return null;
                    if (!o)
                        return (0, l.jsx)(d.Dr, {
                            id: "connect-spotify",
                            label: O.intl.formatToPlainString(O.t.XWSHTb, { platform: U.HD }),
                            action: () => {
                                (a?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                                    (0, S.openUserSettings)(C.X.CONNECTIONS_CATEGORY),
                                    r?.());
                            },
                        });
                    if (s) return null;
                    let c = (0, R.Tq)(e) ? e.extra.entries[0]?.media : e.extra.media;
                    return null == c
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "play-on-spotify",
                              label: O.intl.string(O.t.rRffNz),
                              action: () => {
                                  (a?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                                      (0, T.n)(U.M0.TRACK, c.external_id));
                              },
                          });
                })(t),
                (0, P.Ay)(t),
                (0, P.gA)(t),
                (function (t) {
                    let { display: n, entry: e, onAction: i, onClose: a } = t,
                        r = (0, R.yl)(e),
                        s = (0, G.A)({ applicationId: r ? e.extra.application_id : void 0, onClose: a });
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
                (0, L.A)(t),
                (function (t) {
                    let { activity: n, entry: e, display: i, onAction: a, onClose: r } = t,
                        s = (0, I.bG)([y.A], () => null != y.A.getAccount(null, v.fg2.CRUNCHYROLL));
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
            ].filter((t) => null != t);
        })({ entry: r, activity: a, user: e, display: s, onClose: V, onAction: z, isMenuOpen: W, appContext: w });
    return 0 === Q.length || e.bot
        ? null
        : (0, l.jsx)(c.Y, {
              targetElementRef: k ?? F,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  (z({ action: "OPEN_MENU" }), B(!0));
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, l.jsx)("div", {
                      onClick: (t) => t.stopPropagation(),
                      children: (0, l.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: g.n,
                          onClose: () => {
                              (n(), B(!1));
                          },
                          "aria-label": O.intl.string(O.t.PlAQz1),
                          onSelect: o,
                          children: (0, l.jsx)(d.rX, { children: Q }),
                      }),
                  });
              },
              children: n,
          });
}
var w = e(260155);
function k(t) {
    let n = i.useRef(null);
    return (0, l.jsx)(V, {
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
                    className: w.He,
                    children: (0, l.jsx)(s.MoreHorizontalIcon, {
                        color: o.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        size: "xs",
                    }),
                }),
            }),
    });
}

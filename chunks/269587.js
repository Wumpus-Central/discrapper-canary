n.d(e, { A: () => w });
var l = n(477900),
    i = n(582128),
    a = n(866665),
    r = n(939249),
    s = n(365199),
    o = n(661531),
    c = n(922016),
    u = n(980707),
    d = n(477782),
    A = n(793574),
    f = n(688810),
    p = n(315246),
    g = n(92240),
    m = n(679492),
    x = n(243949),
    _ = n(939496),
    I = n(17928),
    N = n(573648),
    E = n(541806),
    T = n(261020),
    C = n(83971),
    S = n(780964),
    h = n(766075),
    y = n(30370),
    O = n(652215),
    v = n(375708),
    j = n(754495),
    P = n(534465),
    R = n(939075),
    L = n(20805),
    b = n(655116),
    M = n(287809),
    U = n(272984),
    D = n(695311),
    G = n(518477),
    Y = n(996988);
function V(t) {
    let {
            children: e,
            user: n,
            activity: a,
            entry: r,
            display: s,
            onSelect: o,
            onClose: V,
            appContext: k,
            targetElementRef: w,
        } = t,
        [B, W] = i.useState(!1),
        { analyticsLocations: H } = (0, f.Ay)(A.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        z = (0, g.A)({ display: s, user: n, activity: a, entry: r, analyticsLocations: H }),
        X = (0, m.NR)(),
        F = i.useRef(null),
        $ = X?.interactionPopoutTargetRef ?? F,
        Q = (function (t) {
            let { onAction: e } = t,
                { themeType: n } = (0, _.E)(),
                i = (0, x.A)({
                    userId: t.user.id,
                    tabSection: G.RP.ACTIVITY,
                    label: v.intl.string(v.t.pD1L1u),
                    onAction: () => e?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
                });
            return [
                n === Y.d.POPOUT ? i : null,
                (function (t) {
                    let { user: e, entry: n, display: i, onAction: a, onClose: r } = t,
                        s = (0, I.bG)([M.default], () => M.default.getCurrentUser()?.id === e.id),
                        o = (0, I.bG)([b.A], () => b.A.hasConnectedAccount());
                    if ("recent" !== i || !(0, C.F3)(n)) return null;
                    if (!o)
                        return (0, l.jsx)(d.Dr, {
                            id: "connect-spotify",
                            label: v.intl.formatToPlainString(v.t.XWSHTb, { platform: U.HD }),
                            action: () => {
                                (a?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                                    (0, h.openUserSettings)(S.X.CONNECTIONS_CATEGORY),
                                    r?.());
                            },
                        });
                    if (s) return null;
                    let c = (0, L.Tq)(n) ? n.extra.entries[0]?.media : n.extra.media;
                    return null == c
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "play-on-spotify",
                              label: v.intl.string(v.t.rRffNz),
                              action: () => {
                                  (a?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                                      (0, T.n)(U.M0.TRACK, c.external_id));
                              },
                          });
                })(t),
                (0, P.Ay)(t),
                (0, P.gA)(t),
                (function (t) {
                    let { display: e, entry: n, onAction: i, onClose: a } = t,
                        r = (0, L.yl)(n),
                        s = (0, D.A)({ applicationId: r ? n.extra.application_id : void 0, onClose: a });
                    return "recent" === e && r
                        ? (0, l.jsx)(d.Dr, {
                              id: "view-activity",
                              label: v.intl.string(v.t.GDWYR8),
                              action: () => {
                                  (i?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), s());
                              },
                          })
                        : null;
                })(t),
                (0, R.A)(t),
                (function (t) {
                    let { activity: e, entry: n, display: i, onAction: a, onClose: r } = t,
                        s = (0, I.bG)([y.A], () => null != y.A.getAccount(null, O.fg2.CRUNCHYROLL));
                    if (!(0, E.A)(e) && !(0, C.CU)(n)) return null;
                    if (!s)
                        return (0, l.jsx)(d.Dr, {
                            id: "connect-crunchyroll",
                            label: v.intl.formatToPlainString(v.t.XWSHTb, {
                                platform: N.A.get(O.fg2.CRUNCHYROLL).name,
                            }),
                            action: () => {
                                (a?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                                    (0, h.openUserSettings)(S.X.CONNECTIONS_CATEGORY),
                                    r?.());
                            },
                        });
                    if ("recent" !== i || !(0, C.CU)(n)) return null;
                    let o = n.extra.url;
                    return null == o || "" === o
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "watch-on-crunchyroll",
                              label: v.intl.string(v.t.OpxQVH),
                              action: () => {
                                  (a?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, T.C)(o));
                              },
                          });
                })(t),
                (0, j.s)(t),
            ].filter((t) => null != t);
        })({ entry: r, activity: a, user: n, display: s, onClose: V, onAction: z, isMenuOpen: B, appContext: k });
    return 0 === Q.length || n.bot
        ? null
        : (0, l.jsx)(c.Y, {
              targetElementRef: w ?? $,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  (z({ action: "OPEN_MENU" }), W(!0));
              },
              renderPopout: (t) => {
                  let { closePopout: e } = t;
                  return (0, l.jsx)("div", {
                      onClick: (t) => t.stopPropagation(),
                      children: (0, l.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: p.n,
                          onClose: () => {
                              (e(), W(!1));
                          },
                          "aria-label": v.intl.string(v.t.PlAQz1),
                          onSelect: o,
                          children: (0, l.jsx)(d.rX, { children: Q }),
                      }),
                  });
              },
              children: e,
          });
}
var k = n(260155);
function w(t) {
    let e = i.useRef(null);
    return (0, l.jsx)(V, {
        ...t,
        targetElementRef: e,
        children: (t) =>
            (0, l.jsx)(a.m, {
                targetElementRef: e,
                text: v.intl.string(v.t["UKOtz+"]),
                ariaHidden: !0,
                children: (0, l.jsx)(r.D, {
                    ...t,
                    innerRef: e,
                    "aria-label": v.intl.string(v.t["UKOtz+"]),
                    onClick: (e) => {
                        (e.stopPropagation(), t.onClick(e));
                    },
                    onContextMenu: (e) => {
                        (e.preventDefault(), t.onClick(e));
                    },
                    className: k.He,
                    children: (0, l.jsx)(s.MoreHorizontalIcon, {
                        color: o.A.colors.INTERACTIVE_TEXT_DEFAULT,
                        size: "xs",
                    }),
                }),
            }),
    });
}

e.d(n, { A: () => W });
var i = e(627968),
    l = e(64700),
    a = e(866665),
    r = e(939249),
    s = e(365199),
    o = e(661531),
    c = e(922016),
    u = e(980707),
    d = e(477782),
    A = e(793574),
    x = e(688810),
    p = e(315246),
    f = e(92240),
    _ = e(679492),
    m = e(243949),
    T = e(939496),
    E = e(17928),
    N = e(573648),
    g = e(541806),
    C = e(261020),
    I = e(83971),
    j = e(780964),
    y = e(766075),
    S = e(30370),
    O = e(652215),
    h = e(375708),
    P = e(754495),
    v = e(534465),
    L = e(939075),
    R = e(20805),
    U = e(655116),
    b = e(287809),
    M = e(272984),
    D = e(695311),
    G = e(518477),
    V = e(996988);
function Y(t) {
    let {
            children: n,
            user: e,
            activity: a,
            entry: r,
            display: s,
            onSelect: o,
            onClose: Y,
            appContext: k,
            targetElementRef: W,
        } = t,
        [H, B] = l.useState(!1),
        { analyticsLocations: w } = (0, x.Ay)(A.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        z = (0, f.A)({ display: s, user: e, activity: a, entry: r, analyticsLocations: w }),
        $ = (0, _.NR)(),
        F = l.useRef(null),
        X = $?.interactionPopoutTargetRef ?? F,
        Q = (function (t) {
            let { onAction: n } = t,
                { themeType: e } = (0, T.E)(),
                l = (0, m.A)({
                    userId: t.user.id,
                    tabSection: G.RP.ACTIVITY,
                    label: h.intl.string(h.t.pD1L1u),
                    onAction: () => n?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
                });
            return [
                e === V.d.POPOUT ? l : null,
                (function (t) {
                    let { user: n, entry: e, display: l, onAction: a, onClose: r } = t,
                        s = (0, E.bG)([b.default], () => b.default.getCurrentUser()?.id === n.id),
                        o = (0, E.bG)([U.A], () => U.A.hasConnectedAccount());
                    if ("recent" !== l || !(0, I.F3)(e)) return null;
                    if (!o)
                        return (0, i.jsx)(d.Dr, {
                            id: "connect-spotify",
                            label: h.intl.formatToPlainString(h.t.XWSHTb, { platform: M.HD }),
                            action: () => {
                                a?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                                    (0, y.openUserSettings)(j.X.CONNECTIONS_PANEL),
                                    r?.();
                            },
                        });
                    if (s) return null;
                    let c = (0, R.Tq)(e) ? e.extra.entries[0]?.media : e.extra.media;
                    return null == c
                        ? null
                        : (0, i.jsx)(d.Dr, {
                              id: "play-on-spotify",
                              label: h.intl.string(h.t.rRffNz),
                              action: () => {
                                  a?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                                      (0, C.n)(M.M0.TRACK, c.external_id);
                              },
                          });
                })(t),
                (0, v.Ay)(t),
                (0, v.gA)(t),
                (function (t) {
                    let { display: n, entry: e, onAction: l, onClose: a } = t,
                        r = (0, R.yl)(e),
                        s = (0, D.A)({ applicationId: r ? e.extra.application_id : void 0, onClose: a });
                    return "recent" === n && r
                        ? (0, i.jsx)(d.Dr, {
                              id: "view-activity",
                              label: h.intl.string(h.t.GDWYR8),
                              action: () => {
                                  l?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), s();
                              },
                          })
                        : null;
                })(t),
                (0, L.A)(t),
                (function (t) {
                    let { activity: n, entry: e, display: l, onAction: a, onClose: r } = t,
                        s = (0, E.bG)([S.A], () => null != S.A.getAccount(null, O.fg2.CRUNCHYROLL));
                    if (!(0, g.A)(n) && !(0, I.CU)(e)) return null;
                    if (!s)
                        return (0, i.jsx)(d.Dr, {
                            id: "connect-crunchyroll",
                            label: h.intl.formatToPlainString(h.t.XWSHTb, {
                                platform: N.A.get(O.fg2.CRUNCHYROLL).name,
                            }),
                            action: () => {
                                a?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                                    (0, y.openUserSettings)(j.X.CONNECTIONS_PANEL),
                                    r?.();
                            },
                        });
                    if ("recent" !== l || !(0, I.CU)(e)) return null;
                    let o = e.extra.url;
                    return null == o || "" === o
                        ? null
                        : (0, i.jsx)(d.Dr, {
                              id: "watch-on-crunchyroll",
                              label: h.intl.string(h.t.OpxQVH),
                              action: () => {
                                  a?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, C.C)(o);
                              },
                          });
                })(t),
                (0, P.s)(t),
            ].filter((t) => null != t);
        })({ entry: r, activity: a, user: e, display: s, onClose: Y, onAction: z, isMenuOpen: H, appContext: k });
    return 0 === Q.length || e.bot
        ? null
        : (0, i.jsx)(c.Y, {
              targetElementRef: W ?? X,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  z({ action: "OPEN_MENU" }), B(!0);
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, i.jsx)("div", {
                      onClick: (t) => t.stopPropagation(),
                      children: (0, i.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: p.n,
                          onClose: () => {
                              n(), B(!1);
                          },
                          "aria-label": h.intl.string(h.t.PlAQz1),
                          onSelect: o,
                          children: (0, i.jsx)(d.rX, { children: Q }),
                      }),
                  });
              },
              children: n,
          });
}
var k = e(514566);
function W(t) {
    let n = l.useRef(null);
    return (0, i.jsx)(Y, {
        ...t,
        targetElementRef: n,
        children: (t) =>
            (0, i.jsx)(a.m, {
                targetElementRef: n,
                text: h.intl.string(h.t["UKOtz+"]),
                ariaHidden: !0,
                children: (0, i.jsx)(r.D, {
                    ...t,
                    innerRef: n,
                    "aria-label": h.intl.string(h.t["UKOtz+"]),
                    onClick: (n) => {
                        n.stopPropagation(), t.onClick(n);
                    },
                    onContextMenu: (n) => {
                        n.preventDefault(), t.onClick(n);
                    },
                    className: k.He,
                    children: (0, i.jsx)(s.j, { color: o.A.colors.INTERACTIVE_TEXT_DEFAULT, size: "xs" }),
                }),
            }),
    });
}

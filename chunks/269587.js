e.d(n, { A: () => W });
var i = e(627968),
    l = e(64700),
    r = e(990078),
    a = e(939249),
    s = e(365199),
    o = e(661531),
    c = e(922016),
    u = e(550079),
    d = e(477782),
    A = e(793574),
    x = e(688810),
    p = e(315246),
    f = e(92240),
    _ = e(679492),
    m = e(243949),
    g = e(939496),
    E = e(17928),
    T = e(573648),
    N = e(541806),
    C = e(261020),
    I = e(83971),
    S = e(780964),
    O = e(858897),
    h = e(30370),
    j = e(652215),
    y = e(985018),
    P = e(754495),
    v = e(534465),
    L = e(939075),
    R = e(20805),
    b = e(655116),
    D = e(287809),
    U = e(272984),
    M = e(695311),
    G = e(518477),
    V = e(996988);
function Y(t) {
    let {
            children: n,
            user: e,
            activity: r,
            entry: a,
            display: s,
            onSelect: o,
            onClose: Y,
            appContext: k,
            targetElementRef: W,
        } = t,
        [B, w] = l.useState(!1),
        { analyticsLocations: F } = (0, x.Ay)(A.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        H = (0, f.A)({ display: s, user: e, activity: r, entry: a, analyticsLocations: F }),
        z = (0, _.NR)(),
        X = l.useRef(null),
        $ = z?.interactionPopoutTargetRef ?? X,
        Q = (function (t) {
            let { onAction: n } = t,
                { themeType: e } = (0, g.E)(),
                l = (0, m.A)({
                    userId: t.user.id,
                    tabSection: G.RP.ACTIVITY,
                    label: y.intl.string(y.t.pD1L1u),
                    onAction: () => n?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
                });
            return [
                e === V.d.POPOUT ? l : null,
                (function (t) {
                    let { user: n, entry: e, display: l, onAction: r, onClose: a } = t,
                        s = (0, E.bG)([D.default], () => D.default.getCurrentUser()?.id === n.id),
                        o = (0, E.bG)([b.A], () => b.A.hasConnectedAccount());
                    if ("recent" !== l || !(0, I.F3)(e)) return null;
                    if (!o)
                        return (0, i.jsx)(d.Dr, {
                            id: "connect-spotify",
                            label: y.intl.formatToPlainString(y.t.XWSHTb, { platform: U.HD }),
                            action: () => {
                                r?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                                    (0, O.openUserSettings)(S.X.CONNECTIONS_PANEL),
                                    a?.();
                            },
                        });
                    if (s) return null;
                    let c = (0, R.Tq)(e) ? e.extra.entries[0]?.media : e.extra.media;
                    return null == c
                        ? null
                        : (0, i.jsx)(d.Dr, {
                              id: "play-on-spotify",
                              label: y.intl.string(y.t.rRffNz),
                              action: () => {
                                  r?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                                      (0, C.n)(U.M0.TRACK, c.external_id);
                              },
                          });
                })(t),
                (0, v.Ay)(t),
                (0, v.gA)(t),
                (function (t) {
                    let { display: n, entry: e, onAction: l, onClose: r } = t,
                        a = (0, R.yl)(e),
                        s = (0, M.A)({ applicationId: a ? e.extra.application_id : void 0, onClose: r });
                    return "recent" === n && a
                        ? (0, i.jsx)(d.Dr, {
                              id: "view-activity",
                              label: y.intl.string(y.t.GDWYR8),
                              action: () => {
                                  l?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), s();
                              },
                          })
                        : null;
                })(t),
                (0, L.A)(t),
                (function (t) {
                    let { activity: n, entry: e, display: l, onAction: r, onClose: a } = t,
                        s = (0, E.bG)([h.A], () => null != h.A.getAccount(null, j.fg2.CRUNCHYROLL));
                    if (!(0, N.A)(n) && !(0, I.CU)(e)) return null;
                    if (!s)
                        return (0, i.jsx)(d.Dr, {
                            id: "connect-crunchyroll",
                            label: y.intl.formatToPlainString(y.t.XWSHTb, {
                                platform: T.A.get(j.fg2.CRUNCHYROLL).name,
                            }),
                            action: () => {
                                r?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                                    (0, O.openUserSettings)(S.X.CONNECTIONS_PANEL),
                                    a?.();
                            },
                        });
                    if ("recent" !== l || !(0, I.CU)(e)) return null;
                    let o = e.extra.url;
                    return null == o || "" === o
                        ? null
                        : (0, i.jsx)(d.Dr, {
                              id: "watch-on-crunchyroll",
                              label: y.intl.string(y.t.OpxQVH),
                              action: () => {
                                  r?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, C.C)(o);
                              },
                          });
                })(t),
                (0, P.s)(t),
            ].filter((t) => null != t);
        })({ entry: a, activity: r, user: e, display: s, onClose: Y, onAction: H, isMenuOpen: B, appContext: k });
    return 0 === Q.length || e.bot
        ? null
        : (0, i.jsx)(c.Y, {
              targetElementRef: W ?? $,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  H({ action: "OPEN_MENU" }), w(!0);
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, i.jsx)("div", {
                      onClick: (t) => t.stopPropagation(),
                      children: (0, i.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: p.n,
                          onClose: () => {
                              n(), w(!1);
                          },
                          "aria-label": y.intl.string(y.t.PlAQz1),
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
            (0, i.jsx)(r.m, {
                targetElementRef: n,
                text: y.intl.string(y.t["UKOtz+"]),
                "aria-label": !1,
                children: (0, i.jsx)(a.D, {
                    ...t,
                    innerRef: n,
                    "aria-label": y.intl.string(y.t["UKOtz+"]),
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

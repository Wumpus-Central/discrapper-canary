"use strict";
n.d(t, { A: () => B });
var i = n(627968),
    r = n(64700),
    s = n(990078),
    a = n(939249),
    o = n(365199),
    l = n(661531),
    u = n(922016),
    c = n(980707),
    d = n(477782),
    _ = n(793574),
    f = n(688810),
    h = n(315246),
    p = n(92240),
    E = n(679492),
    m = n(243949),
    g = n(939496),
    A = n(17928),
    I = n(573648),
    T = n(541806),
    S = n(261020),
    N = n(83971),
    y = n(780964),
    C = n(858897),
    v = n(30370),
    O = n(652215),
    R = n(375708),
    b = n(754495),
    D = n(534465),
    L = n(939075),
    w = n(20805),
    M = n(655116),
    P = n(287809),
    x = n(272984),
    U = n(695311),
    k = n(518477),
    G = n(996988);
function F(e) {
    let {
            children: t,
            user: n,
            activity: s,
            entry: a,
            display: o,
            onSelect: l,
            onClose: F,
            appContext: V,
            targetElementRef: B,
        } = e,
        [H, j] = r.useState(!1),
        { analyticsLocations: Y } = (0, f.Ay)(_.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        W = (0, p.A)({ display: o, user: n, activity: s, entry: a, analyticsLocations: Y }),
        K = (0, E.NR)(),
        z = r.useRef(null),
        $ = K?.interactionPopoutTargetRef ?? z,
        q = (function (e) {
            let { onAction: t } = e,
                { themeType: n } = (0, g.E)(),
                r = (0, m.A)({
                    userId: e.user.id,
                    tabSection: k.RP.ACTIVITY,
                    label: R.intl.string(R.t.pD1L1u),
                    onAction: () => t?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
                });
            return [
                n === G.d.POPOUT ? r : null,
                (function (e) {
                    let { user: t, entry: n, display: r, onAction: s, onClose: a } = e,
                        o = (0, A.bG)([P.default], () => P.default.getCurrentUser()?.id === t.id),
                        l = (0, A.bG)([M.A], () => M.A.hasConnectedAccount());
                    if ("recent" !== r || !(0, N.F3)(n)) return null;
                    if (!l)
                        return (0, i.jsx)(d.Dr, {
                            id: "connect-spotify",
                            label: R.intl.formatToPlainString(R.t.XWSHTb, { platform: x.HD }),
                            action: () => {
                                s?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                                    (0, C.openUserSettings)(y.X.CONNECTIONS_PANEL),
                                    a?.();
                            },
                        });
                    if (o) return null;
                    let u = (0, w.Tq)(n) ? n.extra.entries[0]?.media : n.extra.media;
                    return null == u
                        ? null
                        : (0, i.jsx)(d.Dr, {
                              id: "play-on-spotify",
                              label: R.intl.string(R.t.rRffNz),
                              action: () => {
                                  s?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                                      (0, S.n)(x.M0.TRACK, u.external_id);
                              },
                          });
                })(e),
                (0, D.Ay)(e),
                (0, D.gA)(e),
                (function (e) {
                    let { display: t, entry: n, onAction: r, onClose: s } = e,
                        a = (0, w.yl)(n),
                        o = (0, U.A)({ applicationId: a ? n.extra.application_id : void 0, onClose: s });
                    return "recent" === t && a
                        ? (0, i.jsx)(d.Dr, {
                              id: "view-activity",
                              label: R.intl.string(R.t.GDWYR8),
                              action: () => {
                                  r?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), o();
                              },
                          })
                        : null;
                })(e),
                (0, L.A)(e),
                (function (e) {
                    let { activity: t, entry: n, display: r, onAction: s, onClose: a } = e,
                        o = (0, A.bG)([v.A], () => null != v.A.getAccount(null, O.fg2.CRUNCHYROLL));
                    if (!(0, T.A)(t) && !(0, N.CU)(n)) return null;
                    if (!o)
                        return (0, i.jsx)(d.Dr, {
                            id: "connect-crunchyroll",
                            label: R.intl.formatToPlainString(R.t.XWSHTb, {
                                platform: I.A.get(O.fg2.CRUNCHYROLL).name,
                            }),
                            action: () => {
                                s?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                                    (0, C.openUserSettings)(y.X.CONNECTIONS_PANEL),
                                    a?.();
                            },
                        });
                    if ("recent" !== r || !(0, N.CU)(n)) return null;
                    let l = n.extra.url;
                    return null == l || "" === l
                        ? null
                        : (0, i.jsx)(d.Dr, {
                              id: "watch-on-crunchyroll",
                              label: R.intl.string(R.t.OpxQVH),
                              action: () => {
                                  s?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, S.C)(l);
                              },
                          });
                })(e),
                (0, b.s)(e),
            ].filter((e) => null != e);
        })({ entry: a, activity: s, user: n, display: o, onClose: F, onAction: W, isMenuOpen: H, appContext: V });
    return 0 === q.length || n.bot
        ? null
        : (0, i.jsx)(u.Y, {
              targetElementRef: B ?? $,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  W({ action: "OPEN_MENU" }), j(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)("div", {
                      onClick: (e) => e.stopPropagation(),
                      children: (0, i.jsx)(c.W, {
                          "data-menu-migrated-auto": !0,
                          navId: h.n,
                          onClose: () => {
                              t(), j(!1);
                          },
                          "aria-label": R.intl.string(R.t.PlAQz1),
                          onSelect: l,
                          children: (0, i.jsx)(d.rX, { children: q }),
                      }),
                  });
              },
              children: t,
          });
}
var V = n(514566);
function B(e) {
    let t = r.useRef(null);
    return (0, i.jsx)(F, {
        ...e,
        targetElementRef: t,
        children: (e) =>
            (0, i.jsx)(s.m, {
                targetElementRef: t,
                text: R.intl.string(R.t["UKOtz+"]),
                ariaHidden: !0,
                children: (0, i.jsx)(a.D, {
                    ...e,
                    innerRef: t,
                    "aria-label": R.intl.string(R.t["UKOtz+"]),
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: (t) => {
                        t.preventDefault(), e.onClick(t);
                    },
                    className: V.He,
                    children: (0, i.jsx)(o.j, { color: l.A.colors.INTERACTIVE_TEXT_DEFAULT, size: "xs" }),
                }),
            }),
    });
}

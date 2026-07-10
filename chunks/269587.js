"use strict";
n.d(t, { A: () => B });
var i = n(627968),
    r = n(64700),
    a = n(990078),
    s = n(939249),
    l = n(365199),
    o = n(661531),
    d = n(922016),
    c = n(980707),
    u = n(477782),
    _ = n(793574),
    E = n(688810),
    A = n(315246),
    h = n(92240),
    I = n(679492),
    f = n(243949),
    p = n(939496),
    T = n(17928),
    m = n(573648),
    g = n(541806),
    S = n(261020),
    N = n(83971),
    C = n(780964),
    R = n(766075),
    O = n(30370),
    L = n(652215),
    D = n(375708),
    y = n(754495),
    v = n(534465),
    b = n(939075),
    M = n(20805),
    P = n(655116),
    U = n(287809),
    w = n(272984),
    G = n(695311),
    x = n(518477),
    k = n(996988);
function F(e) {
    let {
            children: t,
            user: n,
            activity: a,
            entry: s,
            display: l,
            onSelect: o,
            onClose: F,
            appContext: V,
            targetElementRef: B,
        } = e,
        [H, j] = r.useState(!1),
        { analyticsLocations: W } = (0, E.Ay)(_.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        Y = (0, h.A)({ display: l, user: n, activity: a, entry: s, analyticsLocations: W }),
        K = (0, I.NR)(),
        $ = r.useRef(null),
        z = K?.interactionPopoutTargetRef ?? $,
        q = (function (e) {
            let { onAction: t } = e,
                { themeType: n } = (0, p.E)(),
                r = (0, f.A)({
                    userId: e.user.id,
                    tabSection: x.RP.ACTIVITY,
                    label: D.intl.string(D.t.pD1L1u),
                    onAction: () => t?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
                });
            return [
                n === k.d.POPOUT ? r : null,
                (function (e) {
                    let { user: t, entry: n, display: r, onAction: a, onClose: s } = e,
                        l = (0, T.bG)([U.default], () => U.default.getCurrentUser()?.id === t.id),
                        o = (0, T.bG)([P.A], () => P.A.hasConnectedAccount());
                    if ("recent" !== r || !(0, N.F3)(n)) return null;
                    if (!o)
                        return (0, i.jsx)(u.Dr, {
                            id: "connect-spotify",
                            label: D.intl.formatToPlainString(D.t.XWSHTb, { platform: w.HD }),
                            action: () => {
                                a?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                                    (0, R.openUserSettings)(C.X.CONNECTIONS_PANEL),
                                    s?.();
                            },
                        });
                    if (l) return null;
                    let d = (0, M.Tq)(n) ? n.extra.entries[0]?.media : n.extra.media;
                    return null == d
                        ? null
                        : (0, i.jsx)(u.Dr, {
                              id: "play-on-spotify",
                              label: D.intl.string(D.t.rRffNz),
                              action: () => {
                                  a?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                                      (0, S.n)(w.M0.TRACK, d.external_id);
                              },
                          });
                })(e),
                (0, v.Ay)(e),
                (0, v.gA)(e),
                (function (e) {
                    let { display: t, entry: n, onAction: r, onClose: a } = e,
                        s = (0, M.yl)(n),
                        l = (0, G.A)({ applicationId: s ? n.extra.application_id : void 0, onClose: a });
                    return "recent" === t && s
                        ? (0, i.jsx)(u.Dr, {
                              id: "view-activity",
                              label: D.intl.string(D.t.GDWYR8),
                              action: () => {
                                  r?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), l();
                              },
                          })
                        : null;
                })(e),
                (0, b.A)(e),
                (function (e) {
                    let { activity: t, entry: n, display: r, onAction: a, onClose: s } = e,
                        l = (0, T.bG)([O.A], () => null != O.A.getAccount(null, L.fg2.CRUNCHYROLL));
                    if (!(0, g.A)(t) && !(0, N.CU)(n)) return null;
                    if (!l)
                        return (0, i.jsx)(u.Dr, {
                            id: "connect-crunchyroll",
                            label: D.intl.formatToPlainString(D.t.XWSHTb, {
                                platform: m.A.get(L.fg2.CRUNCHYROLL).name,
                            }),
                            action: () => {
                                a?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                                    (0, R.openUserSettings)(C.X.CONNECTIONS_PANEL),
                                    s?.();
                            },
                        });
                    if ("recent" !== r || !(0, N.CU)(n)) return null;
                    let o = n.extra.url;
                    return null == o || "" === o
                        ? null
                        : (0, i.jsx)(u.Dr, {
                              id: "watch-on-crunchyroll",
                              label: D.intl.string(D.t.OpxQVH),
                              action: () => {
                                  a?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, S.C)(o);
                              },
                          });
                })(e),
                (0, y.s)(e),
            ].filter((e) => null != e);
        })({ entry: s, activity: a, user: n, display: l, onClose: F, onAction: Y, isMenuOpen: H, appContext: V });
    return 0 === q.length || n.bot
        ? null
        : (0, i.jsx)(d.Y, {
              targetElementRef: B ?? z,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  Y({ action: "OPEN_MENU" }), j(!0);
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)("div", {
                      onClick: (e) => e.stopPropagation(),
                      children: (0, i.jsx)(c.W, {
                          "data-menu-migrated-auto": !0,
                          navId: A.n,
                          onClose: () => {
                              t(), j(!1);
                          },
                          "aria-label": D.intl.string(D.t.PlAQz1),
                          onSelect: o,
                          children: (0, i.jsx)(u.rX, { children: q }),
                      }),
                  });
              },
              children: t,
          });
}
var V = n(726342);
function B(e) {
    let t = r.useRef(null);
    return (0, i.jsx)(F, {
        ...e,
        targetElementRef: t,
        children: (e) =>
            (0, i.jsx)(a.m, {
                targetElementRef: t,
                text: D.intl.string(D.t["UKOtz+"]),
                ariaHidden: !0,
                children: (0, i.jsx)(s.D, {
                    ...e,
                    innerRef: t,
                    "aria-label": D.intl.string(D.t["UKOtz+"]),
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: (t) => {
                        t.preventDefault(), e.onClick(t);
                    },
                    className: V.He,
                    children: (0, i.jsx)(l.j, { color: o.A.colors.INTERACTIVE_TEXT_DEFAULT, size: "xs" }),
                }),
            }),
    });
}

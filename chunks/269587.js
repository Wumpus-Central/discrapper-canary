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
    h = n(688810),
    f = n(315246),
    E = n(92240),
    p = n(679492),
    m = n(243949),
    g = n(939496),
    A = n(17928),
    I = n(573648),
    T = n(541806),
    S = n(261020),
    N = n(83971),
    C = n(780964),
    y = n(766075),
    O = n(30370),
    R = n(652215),
    v = n(375708),
    b = n(754495),
    L = n(534465),
    D = n(939075),
    w = n(20805),
    P = n(655116),
    M = n(287809),
    x = n(272984),
    U = n(695311),
    k = n(518477),
    G = n(996988);
function V(e) {
    let {
            children: t,
            user: n,
            activity: s,
            entry: a,
            display: o,
            onSelect: l,
            onClose: V,
            appContext: F,
            targetElementRef: B,
        } = e,
        [H, j] = r.useState(!1),
        { analyticsLocations: W } = (0, h.Ay)(_.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        Y = (0, E.A)({ display: o, user: n, activity: s, entry: a, analyticsLocations: W }),
        K = (0, p.NR)(),
        $ = r.useRef(null),
        z = K?.interactionPopoutTargetRef ?? $,
        q = (function (e) {
            let { onAction: t } = e,
                { themeType: n } = (0, g.E)(),
                r = (0, m.A)({
                    userId: e.user.id,
                    tabSection: k.RP.ACTIVITY,
                    label: v.intl.string(v.t.pD1L1u),
                    onAction: () => t?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
                });
            return [
                n === G.d.POPOUT ? r : null,
                (function (e) {
                    let { user: t, entry: n, display: r, onAction: s, onClose: a } = e,
                        o = (0, A.bG)([M.default], () => M.default.getCurrentUser()?.id === t.id),
                        l = (0, A.bG)([P.A], () => P.A.hasConnectedAccount());
                    if ("recent" !== r || !(0, N.F3)(n)) return null;
                    if (!l)
                        return (0, i.jsx)(d.Dr, {
                            id: "connect-spotify",
                            label: v.intl.formatToPlainString(v.t.XWSHTb, { platform: x.HD }),
                            action: () => {
                                s?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                                    (0, y.openUserSettings)(C.X.CONNECTIONS_PANEL),
                                    a?.();
                            },
                        });
                    if (o) return null;
                    let u = (0, w.Tq)(n) ? n.extra.entries[0]?.media : n.extra.media;
                    return null == u
                        ? null
                        : (0, i.jsx)(d.Dr, {
                              id: "play-on-spotify",
                              label: v.intl.string(v.t.rRffNz),
                              action: () => {
                                  s?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                                      (0, S.n)(x.M0.TRACK, u.external_id);
                              },
                          });
                })(e),
                (0, L.Ay)(e),
                (0, L.gA)(e),
                (function (e) {
                    let { display: t, entry: n, onAction: r, onClose: s } = e,
                        a = (0, w.yl)(n),
                        o = (0, U.A)({ applicationId: a ? n.extra.application_id : void 0, onClose: s });
                    return "recent" === t && a
                        ? (0, i.jsx)(d.Dr, {
                              id: "view-activity",
                              label: v.intl.string(v.t.GDWYR8),
                              action: () => {
                                  r?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), o();
                              },
                          })
                        : null;
                })(e),
                (0, D.A)(e),
                (function (e) {
                    let { activity: t, entry: n, display: r, onAction: s, onClose: a } = e,
                        o = (0, A.bG)([O.A], () => null != O.A.getAccount(null, R.fg2.CRUNCHYROLL));
                    if (!(0, T.A)(t) && !(0, N.CU)(n)) return null;
                    if (!o)
                        return (0, i.jsx)(d.Dr, {
                            id: "connect-crunchyroll",
                            label: v.intl.formatToPlainString(v.t.XWSHTb, {
                                platform: I.A.get(R.fg2.CRUNCHYROLL).name,
                            }),
                            action: () => {
                                s?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                                    (0, y.openUserSettings)(C.X.CONNECTIONS_PANEL),
                                    a?.();
                            },
                        });
                    if ("recent" !== r || !(0, N.CU)(n)) return null;
                    let l = n.extra.url;
                    return null == l || "" === l
                        ? null
                        : (0, i.jsx)(d.Dr, {
                              id: "watch-on-crunchyroll",
                              label: v.intl.string(v.t.OpxQVH),
                              action: () => {
                                  s?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, S.C)(l);
                              },
                          });
                })(e),
                (0, b.s)(e),
            ].filter((e) => null != e);
        })({ entry: a, activity: s, user: n, display: o, onClose: V, onAction: Y, isMenuOpen: H, appContext: F });
    return 0 === q.length || n.bot
        ? null
        : (0, i.jsx)(u.Y, {
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
                          navId: f.n,
                          onClose: () => {
                              t(), j(!1);
                          },
                          "aria-label": v.intl.string(v.t.PlAQz1),
                          onSelect: l,
                          children: (0, i.jsx)(d.rX, { children: q }),
                      }),
                  });
              },
              children: t,
          });
}
var F = n(514566);
function B(e) {
    let t = r.useRef(null);
    return (0, i.jsx)(V, {
        ...e,
        targetElementRef: t,
        children: (e) =>
            (0, i.jsx)(s.m, {
                targetElementRef: t,
                text: v.intl.string(v.t["UKOtz+"]),
                ariaHidden: !0,
                children: (0, i.jsx)(a.D, {
                    ...e,
                    innerRef: t,
                    "aria-label": v.intl.string(v.t["UKOtz+"]),
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick(t);
                    },
                    onContextMenu: (t) => {
                        t.preventDefault(), e.onClick(t);
                    },
                    className: F.He,
                    children: (0, i.jsx)(o.j, { color: l.A.colors.INTERACTIVE_TEXT_DEFAULT, size: "xs" }),
                }),
            }),
    });
}

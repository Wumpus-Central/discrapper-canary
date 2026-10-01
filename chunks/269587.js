e.d(n, { A: () => W });
var l = e(477900),
    i = e(582128),
    r = e(866665),
    a = e(939249),
    s = e(365199),
    o = e(661531),
    c = e(922016),
    u = e(980707),
    d = e(477782),
    A = e(793574),
    x = e(688810),
    p = e(315246),
    f = e(92240),
    m = e(679492),
    _ = e(243949),
    T = e(939496),
    E = e(17928),
    g = e(573648),
    N = e(541806),
    C = e(261020),
    I = e(83971),
    y = e(780964),
    j = e(766075),
    O = e(30370),
    S = e(652215),
    h = e(375708),
    v = e(754495),
    P = e(534465),
    R = e(939075),
    L = e(20805),
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
            activity: r,
            entry: a,
            display: s,
            onSelect: o,
            onClose: Y,
            appContext: k,
            targetElementRef: W,
        } = t,
        [H, B] = i.useState(!1),
        { analyticsLocations: z } = (0, x.Ay)(A.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        $ = (0, f.A)({ display: s, user: e, activity: r, entry: a, analyticsLocations: z }),
        w = (0, m.NR)(),
        F = i.useRef(null),
        X = w?.interactionPopoutTargetRef ?? F,
        Q = (function (t) {
            let { onAction: n } = t,
                { themeType: e } = (0, T.E)(),
                i = (0, _.A)({
                    userId: t.user.id,
                    tabSection: G.RP.ACTIVITY,
                    label: h.intl.string(h.t.pD1L1u),
                    onAction: () => n?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
                });
            return [
                e === V.d.POPOUT ? i : null,
                (function (t) {
                    let { user: n, entry: e, display: i, onAction: r, onClose: a } = t,
                        s = (0, E.bG)([b.default], () => b.default.getCurrentUser()?.id === n.id),
                        o = (0, E.bG)([U.A], () => U.A.hasConnectedAccount());
                    if ("recent" !== i || !(0, I.F3)(e)) return null;
                    if (!o)
                        return (0, l.jsx)(d.Dr, {
                            id: "connect-spotify",
                            label: h.intl.formatToPlainString(h.t.XWSHTb, { platform: M.HD }),
                            action: () => {
                                (r?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                                    (0, j.openUserSettings)(y.X.CONNECTIONS_CATEGORY),
                                    a?.());
                            },
                        });
                    if (s) return null;
                    let c = (0, L.Tq)(e) ? e.extra.entries[0]?.media : e.extra.media;
                    return null == c
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "play-on-spotify",
                              label: h.intl.string(h.t.rRffNz),
                              action: () => {
                                  (r?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                                      (0, C.n)(M.M0.TRACK, c.external_id));
                              },
                          });
                })(t),
                (0, P.Ay)(t),
                (0, P.gA)(t),
                (function (t) {
                    let { display: n, entry: e, onAction: i, onClose: r } = t,
                        a = (0, L.yl)(e),
                        s = (0, D.A)({ applicationId: a ? e.extra.application_id : void 0, onClose: r });
                    return "recent" === n && a
                        ? (0, l.jsx)(d.Dr, {
                              id: "view-activity",
                              label: h.intl.string(h.t.GDWYR8),
                              action: () => {
                                  (i?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), s());
                              },
                          })
                        : null;
                })(t),
                (0, R.A)(t),
                (function (t) {
                    let { activity: n, entry: e, display: i, onAction: r, onClose: a } = t,
                        s = (0, E.bG)([O.A], () => null != O.A.getAccount(null, S.fg2.CRUNCHYROLL));
                    if (!(0, N.A)(n) && !(0, I.CU)(e)) return null;
                    if (!s)
                        return (0, l.jsx)(d.Dr, {
                            id: "connect-crunchyroll",
                            label: h.intl.formatToPlainString(h.t.XWSHTb, {
                                platform: g.A.get(S.fg2.CRUNCHYROLL).name,
                            }),
                            action: () => {
                                (r?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                                    (0, j.openUserSettings)(y.X.CONNECTIONS_CATEGORY),
                                    a?.());
                            },
                        });
                    if ("recent" !== i || !(0, I.CU)(e)) return null;
                    let o = e.extra.url;
                    return null == o || "" === o
                        ? null
                        : (0, l.jsx)(d.Dr, {
                              id: "watch-on-crunchyroll",
                              label: h.intl.string(h.t.OpxQVH),
                              action: () => {
                                  (r?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, C.C)(o));
                              },
                          });
                })(t),
                (0, v.s)(t),
            ].filter((t) => null != t);
        })({ entry: a, activity: r, user: e, display: s, onClose: Y, onAction: $, isMenuOpen: H, appContext: k });
    return 0 === Q.length || e.bot
        ? null
        : (0, l.jsx)(c.Y, {
              targetElementRef: W ?? X,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  ($({ action: "OPEN_MENU" }), B(!0));
              },
              renderPopout: (t) => {
                  let { closePopout: n } = t;
                  return (0, l.jsx)("div", {
                      onClick: (t) => t.stopPropagation(),
                      children: (0, l.jsx)(u.W, {
                          "data-menu-migrated-auto": !0,
                          navId: p.n,
                          onClose: () => {
                              (n(), B(!1));
                          },
                          "aria-label": h.intl.string(h.t.PlAQz1),
                          onSelect: o,
                          children: (0, l.jsx)(d.rX, { children: Q }),
                      }),
                  });
              },
              children: n,
          });
}
var k = e(260155);
function W(t) {
    let n = i.useRef(null);
    return (0, l.jsx)(Y, {
        ...t,
        targetElementRef: n,
        children: (t) =>
            (0, l.jsx)(r.m, {
                targetElementRef: n,
                text: h.intl.string(h.t["UKOtz+"]),
                ariaHidden: !0,
                children: (0, l.jsx)(a.D, {
                    ...t,
                    innerRef: n,
                    "aria-label": h.intl.string(h.t["UKOtz+"]),
                    onClick: (n) => {
                        (n.stopPropagation(), t.onClick(n));
                    },
                    onContextMenu: (n) => {
                        (n.preventDefault(), t.onClick(n));
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

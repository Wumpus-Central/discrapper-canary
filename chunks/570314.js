n.d(e, { A: () => x });
var i = n(627968),
    l = n(64700),
    r = n(17928),
    a = n(192308),
    o = n(509434),
    s = n(307301),
    c = n(922016),
    u = n(550079),
    d = n(477782),
    p = n(177640),
    A = n(297486),
    _ = n(342384),
    m = n(204776),
    h = n(734057),
    S = n(309010),
    g = n(954571),
    I = n(957565),
    f = n(998218),
    C = n(692848),
    E = n(841595),
    T = n(403777),
    P = n(993401),
    b = n(652215),
    v = n(985018);
function x(t) {
    let { user: e, closePopout: n, ...x } = t,
        O = l.useRef(null),
        R = (0, r.bG)([E.A], () => E.A.getUserProfile(e.id)?.application),
        L = (0, r.bG)([S.A, h.A], () => h.A.getChannel(S.A.getChannelId())),
        N = (0, p.A)(L),
        y = e.id,
        j = l.useCallback(() => {
            null != R &&
                (N
                    ? ((0, A.hg)(R.id),
                      (0, a.closeModal)((0, T.n)(y, L?.guild_id)),
                      n?.(),
                      g.default.track(b.HAw.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: R.id }))
                    : (0, C.o)({ applicationId: R.id, ...R }));
        }, [R, N, y, L?.guild_id, n]),
        U = N ? v.intl.string(v.t["Cia+A8"]) : v.intl.string(v.t.NgXl3C);
    if (null == R || !(0, m.Ie)(R)) return null;
    let { customInstallUrl: D } = R,
        k = null == D || f.A.isDiscordUrl(D) ? s.j : o.I,
        w = N ? void 0 : k;
    return I.p5
        ? (0, i.jsx)(c.Y, {
              targetElementRef: O,
              renderPopout: (t) => {
                  let { closePopout: e } = t;
                  return (0, i.jsx)(u.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "user-bot-profile-add-app",
                      onClose: e,
                      "aria-label": v.intl.string(v.t.dbkxVm),
                      onSelect: void 0,
                      children: (0, i.jsx)(d.rX, {
                          children: (0, i.jsx)(d.Dr, {
                              id: "copy",
                              label: v.intl.string(v.t.XWDihq),
                              action: () => (0, I.C)((0, _.V)(R)),
                          }),
                      }),
                  });
              },
              children: (t) => {
                  let { onClick: e, ...n } = t;
                  return (0, i.jsx)(P.FD, {
                      buttonRef: O,
                      action: "PRESS_ADD_APP",
                      text: U,
                      icon: w,
                      onContextMenu: e,
                      onClick: j,
                      ...n,
                      ...x,
                  });
              },
          })
        : (0, i.jsx)(P.FD, { action: "PRESS_ADD_APP", text: U, icon: w, onClick: j, variant: "primary", ...x });
}

n.d(e, { A: () => x });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    o = n(192308),
    a = n(509434),
    s = n(307301),
    c = n(265872),
    d = n(861672),
    u = n(477782),
    p = n(177640),
    _ = n(297486),
    A = n(342384),
    h = n(204776),
    I = n(734057),
    m = n(309010),
    S = n(954571),
    E = n(957565),
    C = n(998218),
    g = n(692848),
    f = n(622543),
    P = n(403777),
    T = n(993401),
    O = n(652215),
    v = n(985018);
function x(t) {
    let { user: e, closePopout: n, ...x } = t,
        b = l.useRef(null),
        R = (0, r.bG)([f.A], () => f.A.getUserProfile(e.id)?.application),
        L = (0, r.bG)([m.A, I.A], () => I.A.getChannel(m.A.getChannelId())),
        N = (0, p.A)(L),
        j = e.id,
        D = l.useCallback(() => {
            null != R &&
                (N
                    ? ((0, _.hg)(R.id),
                      (0, o.closeModal)((0, P.n)(j, L?.guild_id)),
                      n?.(),
                      S.default.track(O.HAw.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: R.id }))
                    : (0, g.o)({ applicationId: R.id, ...R }));
        }, [R, N, j, L?.guild_id, n]),
        U = N ? v.intl.string(v.t["Cia+A8"]) : v.intl.string(v.t.NgXl3C);
    if (null == R || !(0, h.Ie)(R)) return null;
    let { customInstallUrl: y } = R,
        F = null == y || C.A.isDiscordUrl(y) ? s.j : a.I,
        w = N ? void 0 : F;
    return E.p5
        ? (0, i.jsx)(c.Y, {
              targetElementRef: b,
              renderPopout: (t) => {
                  let { closePopout: e } = t;
                  return (0, i.jsx)(d.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "user-bot-profile-add-app",
                      onClose: e,
                      "aria-label": v.intl.string(v.t.dbkxVm),
                      onSelect: void 0,
                      children: (0, i.jsx)(u.rX, {
                          children: (0, i.jsx)(u.Dr, {
                              id: "copy",
                              label: v.intl.string(v.t.XWDihq),
                              action: () => (0, E.C)((0, A.V)(R)),
                          }),
                      }),
                  });
              },
              children: (t) => {
                  let { onClick: e, ...n } = t;
                  return (0, i.jsx)(T.FD, {
                      buttonRef: b,
                      action: "PRESS_ADD_APP",
                      text: U,
                      icon: w,
                      onContextMenu: e,
                      onClick: D,
                      ...n,
                      ...x,
                  });
              },
          })
        : (0, i.jsx)(T.FD, { action: "PRESS_ADD_APP", text: U, icon: w, onClick: D, variant: "primary", ...x });
}

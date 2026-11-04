var n = t(477900),
    l = t(582128),
    r = t(855986),
    a = t(192308),
    d = t(509434),
    o = t(307301),
    u = t(265872),
    c = t(165862),
    s = t(477782),
    p = t(177640),
    A = t(212613),
    P = t(342384),
    g = t(204776),
    C = t(734057),
    _ = t(309010),
    x = t(129230),
    f = t(957565),
    h = t(998218),
    b = t(692848),
    j = t(851767),
    k = t(403777),
    D = t(993401),
    I = t(652215),
    R = t(792996);
t.d(
    i,
    {},
    {
        A: function (e) {
            let { user: i, closePopout: t, ...m } = e,
                v = l.useRef(null),
                E = (0, r.bG)([j.A], () => j.A.getUserProfile(i.id)?.application),
                S = (0, r.bG)([_.Ay, C.A], () => C.A.getChannel(_.Ay.getChannelId())),
                y = (0, p.A)(S),
                O = i.id,
                F = l.useCallback(() => {
                    null != E &&
                        (y
                            ? ((0, A.hg)(E.id),
                              (0, a.Oo)((0, k.n1)(O, S?.guild_id)),
                              t?.(),
                              x.default.track(I.HAw.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: E.id }))
                            : (0, b.o)({ applicationId: E.id, ...E }));
                }, [E, y, O, S?.guild_id, t]),
                U = y ? R.intl.string(R.t["Cia+A8"]) : R.intl.string(R.t.NgXl3C);
            if (null == E || !(0, g.Ie)(E)) return null;
            let { customInstallUrl: w } = E,
                G = null == w || h.A.isDiscordUrl(w) ? o.j : d.I,
                N = y ? void 0 : G;
            return f.p5
                ? (0, n.jsx)(u.Y, {
                      targetElementRef: v,
                      renderPopout: (e) => {
                          let { closePopout: i } = e;
                          return (0, n.jsx)(c.W, {
                              "data-menu-migrated-auto": !0,
                              navId: "user-bot-profile-add-app",
                              onClose: i,
                              "aria-label": R.intl.string(R.t.dbkxVm),
                              onSelect: void 0,
                              children: (0, n.jsx)(s.rX, {
                                  children: (0, n.jsx)(s.Dr, {
                                      id: "copy",
                                      label: R.intl.string(R.t.XWDihq),
                                      action: () => (0, f.C)((0, P.V)(E)),
                                  }),
                              }),
                          });
                      },
                      children: (e) => {
                          let { onClick: i, ...t } = e;
                          return (0, n.jsx)(D.FD, {
                              buttonRef: v,
                              action: "PRESS_ADD_APP",
                              text: U,
                              icon: N,
                              onContextMenu: i,
                              onClick: F,
                              ...t,
                              ...m,
                          });
                      },
                  })
                : (0, n.jsx)(D.FD, { action: "PRESS_ADD_APP", text: U, icon: N, onClick: F, variant: "primary", ...m });
        },
    },
);

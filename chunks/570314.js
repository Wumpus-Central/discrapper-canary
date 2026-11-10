var i = n(477900),
    l = n(582128),
    r = n(855986),
    a = n(192308),
    o = n(509434),
    d = n(307301),
    u = n(265872),
    c = n(165862),
    s = n(477782),
    p = n(177640),
    A = n(212613),
    P = n(342384),
    g = n(48726),
    C = n(204776),
    b = n(474047),
    x = n(734057),
    _ = n(309010),
    f = n(129230),
    h = n(957565),
    I = n(998218),
    j = n(692848),
    k = n(851767),
    D = n(403777),
    S = n(993401),
    m = n(652215),
    v = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, closePopout: n, variant: E, hideIcon: R = !1, ...O } = e,
                y = l.useRef(null),
                F = (0, r.bG)([k.A], () => k.A.getUserProfile(t.id)?.application),
                T = (0, r.bG)([_.Ay, x.A], () => x.A.getChannel(_.Ay.getChannelId())),
                U = (0, p.A)(T);
            (0, b.A)(t, "BotUserProfileAddOrOpenAppButton");
            let G = (0, g.A)(F),
                w = t.id,
                B = l.useCallback(() => {
                    null != F &&
                        (U
                            ? ((0, A.hg)(F.id),
                              (0, a.Oo)((0, D.n1)(w, T?.guild_id)),
                              n?.(),
                              f.default.track(m.HAw.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: F.id }))
                            : (0, j.o)({ applicationId: F.id, ...F }));
                }, [F, U, w, T?.guild_id, n]),
                N = U ? v.intl.string(v.t["Cia+A8"]) : v.intl.string(v.t.NgXl3C);
            if (null == F || !(U ? (0, C.Aj)(F) : G)) return null;
            let { customInstallUrl: L } = F,
                V = null == L || I.A.isDiscordUrl(L) ? d.PlusSmallIcon : o.LinkExternalSmallIcon,
                W = U || R ? void 0 : V;
            return h.p5
                ? (0, i.jsx)(u.Y, {
                      targetElementRef: y,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(c.W, {
                              "data-menu-migrated-auto": !0,
                              navId: "user-bot-profile-add-app",
                              onClose: t,
                              "aria-label": v.intl.string(v.t.dbkxVm),
                              onSelect: void 0,
                              children: (0, i.jsx)(s.rX, {
                                  children: (0, i.jsx)(s.Dr, {
                                      id: "copy",
                                      label: v.intl.string(v.t.XWDihq),
                                      action: () => (0, h.C)((0, P.V)(F)),
                                  }),
                              }),
                          });
                      },
                      children: (e) => {
                          let { onClick: t, ...n } = e;
                          return (0, i.jsx)(S.FD, {
                              buttonRef: y,
                              action: "PRESS_ADD_APP",
                              text: N,
                              icon: W,
                              onContextMenu: t,
                              onClick: B,
                              variant: E,
                              ...n,
                              ...O,
                          });
                      },
                  })
                : (0, i.jsx)(S.FD, {
                      action: "PRESS_ADD_APP",
                      text: N,
                      icon: W,
                      onClick: B,
                      variant: E ?? "primary",
                      ...O,
                  });
        },
    },
);

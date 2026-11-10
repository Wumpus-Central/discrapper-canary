var t = n(477900),
    l = n(582128),
    a = n(855986),
    r = n(192308),
    o = n(509434),
    d = n(307301),
    u = n(265872),
    c = n(165862),
    s = n(477782),
    p = n(177640),
    A = n(212613),
    P = n(342384),
    g = n(204776),
    C = n(734057),
    _ = n(309010),
    x = n(129230),
    h = n(957565),
    f = n(998218),
    b = n(692848),
    k = n(851767),
    I = n(403777),
    D = n(993401),
    S = n(652215),
    j = n(792996);
n.d(
    i,
    {},
    {
        A: function (e) {
            let { user: i, closePopout: n, variant: m, hideIcon: v = !1, ...E } = e,
                R = l.useRef(null),
                y = (0, a.bG)([k.A], () => k.A.getUserProfile(i.id)?.application),
                O = (0, a.bG)([_.Ay, C.A], () => C.A.getChannel(_.Ay.getChannelId())),
                F = (0, p.A)(O),
                w = i.id,
                G = l.useCallback(() => {
                    null != y &&
                        (F
                            ? ((0, A.hg)(y.id),
                              (0, r.Oo)((0, I.n1)(w, O?.guild_id)),
                              n?.(),
                              x.default.track(S.HAw.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: y.id }))
                            : (0, b.o)({ applicationId: y.id, ...y }));
                }, [y, F, w, O?.guild_id, n]),
                N = F ? j.intl.string(j.t["Cia+A8"]) : j.intl.string(j.t.NgXl3C);
            if (null == y || !(0, g.Ie)(y)) return null;
            let { customInstallUrl: T } = y,
                U = null == T || f.A.isDiscordUrl(T) ? d.PlusSmallIcon : o.LinkExternalSmallIcon,
                L = F || v ? void 0 : U;
            return h.p5
                ? (0, t.jsx)(u.Y, {
                      targetElementRef: R,
                      renderPopout: (e) => {
                          let { closePopout: i } = e;
                          return (0, t.jsx)(c.W, {
                              "data-menu-migrated-auto": !0,
                              navId: "user-bot-profile-add-app",
                              onClose: i,
                              "aria-label": j.intl.string(j.t.dbkxVm),
                              onSelect: void 0,
                              children: (0, t.jsx)(s.rX, {
                                  children: (0, t.jsx)(s.Dr, {
                                      id: "copy",
                                      label: j.intl.string(j.t.XWDihq),
                                      action: () => (0, h.C)((0, P.V)(y)),
                                  }),
                              }),
                          });
                      },
                      children: (e) => {
                          let { onClick: i, ...n } = e;
                          return (0, t.jsx)(D.FD, {
                              buttonRef: R,
                              action: "PRESS_ADD_APP",
                              text: N,
                              icon: L,
                              onContextMenu: i,
                              onClick: G,
                              variant: m,
                              ...n,
                              ...E,
                          });
                      },
                  })
                : (0, t.jsx)(D.FD, {
                      action: "PRESS_ADD_APP",
                      text: N,
                      icon: L,
                      onClick: G,
                      variant: m ?? "primary",
                      ...E,
                  });
        },
    },
);

"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(177640),
    l = n(297486),
    u = n(342384),
    c = n(204776),
    d = n(734057),
    _ = n(309010),
    f = n(954571),
    p = n(957565),
    h = n(998218),
    m = n(692848),
    g = n(622543),
    E = n(403777),
    A = n(993401),
    I = n(652215),
    T = n(985018);
function y(e) {
    let { user: t, closePopout: n, ...y } = e,
        S = i.useRef(null),
        v = (0, a.bG)([g.A], () => g.A.getUserProfile(t.id)?.application),
        C = (0, a.bG)([_.A, d.A], () => d.A.getChannel(_.A.getChannelId())),
        b = (0, o.A)(C),
        N = t.id,
        R = i.useCallback(() => {
            null != v &&
                (b
                    ? ((0, l.hg)(v.id),
                      (0, s.OoC)((0, E.n)(N, C?.guild_id)),
                      n?.(),
                      f.default.track(I.HAw.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: v.id }))
                    : (0, m.o)({ applicationId: v.id, ...v }));
        }, [v, b, N, C?.guild_id, n]),
        O = b ? T.intl.string(T.t["Cia+A8"]) : T.intl.string(T.t.NgXl3C);
    if (null == v || !(0, c.Ie)(v)) return null;
    let { customInstallUrl: D } = v,
        L = null == D || h.A.isDiscordUrl(D) ? s.j96 : s.I9m,
        w = b ? void 0 : L;
    return p.p5
        ? (0, r.jsx)(s.YNO, {
              targetElementRef: S,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.W1t, {
                      "data-menu-migrated-auto": !0,
                      navId: "user-bot-profile-add-app",
                      onClose: t,
                      "aria-label": T.intl.string(T.t.dbkxVm),
                      onSelect: void 0,
                      children: (0, r.jsx)(s.rXV, {
                          children: (0, r.jsx)(s.Drp, {
                              id: "copy",
                              label: T.intl.string(T.t.XWDihq),
                              action: () => (0, p.C)((0, u.V)(v)),
                          }),
                      }),
                  });
              },
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, r.jsx)(A.FD, {
                      buttonRef: S,
                      action: "PRESS_ADD_APP",
                      text: O,
                      icon: w,
                      onContextMenu: t,
                      onClick: R,
                      ...n,
                      ...y,
                  });
              },
          })
        : (0, r.jsx)(A.FD, { action: "PRESS_ADD_APP", text: O, icon: w, onClick: R, variant: "primary", ...y });
}

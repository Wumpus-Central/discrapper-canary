n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(994667),
    c = n(594174),
    u = n(652853),
    d = n(475413),
    f = n(981631),
    _ = n(671955),
    p = n(388032);
function h(e) {
    var t;
    let { user: n, application: h, onAction: m, onClose: g } = e,
        { themeType: E } = (0, u.z)(),
        [b, y] = i.useState(!1),
        O = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        v = null == (t = h.thirdPartySkus.find((e) => e.distributor === f.GQo.ROBLOX)) ? void 0 : t.id,
        I = (0, l.dW)(v);
    return null == O || n.id === O.id || null == v
        ? null
        : (0, r.jsx)(d.tG, {
              text: p.intl.string(p.t.RscU7O),
              submitting: b,
              size: E === _.l.MODAL_V2 ? o.Ph.TINY : o.Ph.SMALL,
              fullWidth: E !== _.l.MODAL_V2,
              themeColor: "secondary",
              onClick: async (e) => {
                  y(!0), e.stopPropagation(), null == m || m({ action: "PRESS_PLAY_BUTTON" });
                  try {
                      await I();
                  } catch (e) {
                      (0, s.showToast)((0, s.createToast)(p.intl.string(p.t.F8FvU1), s.ToastType.FAILURE));
                  }
                  y(!1), null == g || g();
              },
          });
}

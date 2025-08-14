n.d(t, { Z: () => h }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(755721),
    s = n(481060),
    l = n(994667),
    c = n(594174),
    u = n(652853),
    d = n(475413),
    f = n(228168),
    _ = n(981631),
    p = n(388032);
function h(e) {
    var t;
    let { user: n, application: h, onAction: m, onClose: g } = e,
        { themeType: E } = (0, u.z)(),
        [b, y] = i.useState(!1),
        O = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        v = null == (t = h.thirdPartySkus.find((e) => e.distributor === _.GQo.ROBLOX)) ? void 0 : t.id,
        I = (0, l.dW)(v);
    return null == O || n.id === O.id || null == v
        ? null
        : (0, r.jsx)(d.tG, {
              text: p.intl.string(p.t.RscU7O),
              submitting: b,
              size: E === f.lY.MODAL_V2 ? a.Ph.TINY : a.Ph.SMALL,
              fullWidth: E !== f.lY.MODAL_V2,
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

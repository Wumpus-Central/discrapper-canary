n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(265872),
    a = n(861672),
    r = n(477782),
    o = n(365199),
    d = n(793574),
    c = n(688810),
    u = n(50268),
    h = n(183555),
    A = n(993401),
    _ = n(985018);
function m(e) {
    let { user: t, viewProfileItem: n } = e,
        m = l.useRef(null),
        { trackUserProfileAction: g } = (0, h.NJ)(),
        { analyticsLocations: p } = (0, c.Ay)(d.A.USER_PROFILE_OVERFLOW_MENU),
        f = [
            [n],
            [
                (0, u.A)({
                    id: t.id,
                    label: _.intl.string(_.t["/AXYnE"]),
                    onSuccess: () => g({ action: "COPY_USER_ID", analyticsLocations: p }),
                }),
            ],
        ];
    return f.every((e) => e.every((e) => null == e))
        ? null
        : (0, i.jsx)(s.Y, {
              targetElementRef: m,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(a.W, {
                      "data-menu-migrated-auto": !0,
                      navId: "non-user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": _.intl.string(_.t.AXIHpV),
                      children: f.map((e, t) => (0, i.jsx)(r.rX, { children: e.map((e) => e) }, t)),
                  });
              },
              children: (e) =>
                  (0, i.jsx)(A.br, {
                      buttonRef: m,
                      action: "PRESS_OPTIONS",
                      icon: o.j,
                      tooltipText: _.intl.string(_.t["UKOtz+"]),
                      ...e,
                  }),
          });
}

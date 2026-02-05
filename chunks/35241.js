"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(50268),
    u = n(183555),
    c = n(993401),
    d = n(985018);
function _(e) {
    let { user: t, viewProfileItem: n } = e,
        _ = i.useRef(null),
        { trackUserProfileAction: f } = (0, u.NJ)(),
        { analyticsLocations: p } = (0, o.Ay)(s.A.USER_PROFILE_OVERFLOW_MENU),
        h = [
            [n],
            [
                (0, l.A)({
                    id: t.id,
                    label: d.intl.string(d.t["/AXYnE"]),
                    onSuccess: () => f({ action: "COPY_USER_ID", analyticsLocations: p }),
                }),
            ],
        ];
    return h.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(a.YNO, {
              targetElementRef: _,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.W1t, {
                      "data-menu-migrated-auto": !0,
                      navId: "non-user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": d.intl.string(d.t.AXIHpV),
                      children: h.map((e, t) => (0, r.jsx)(a.rXV, { children: e.map((e) => e) }, t)),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(c.br, {
                      buttonRef: _,
                      action: "PRESS_OPTIONS",
                      icon: a.jNK,
                      tooltipText: d.intl.string(d.t["UKOtz+"]),
                      ...e,
                  }),
          });
}

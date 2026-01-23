n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(793574),
    o = n(688810),
    l = n(50268),
    c = n(183555),
    u = n(993401),
    d = n(985018);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e) {
    let { user: t, viewProfileItem: n } = e,
        f = i.useRef(null),
        { trackUserProfileAction: _ } = (0, c.NJ)(),
        { analyticsLocations: h } = (0, o.Ay)(s.A.USER_PROFILE_OVERFLOW_MENU),
        m = [
            [n],
            [
                (0, l.A)({
                    id: t.id,
                    label: d.intl.string(d.t["/AXYnE"]),
                    onSuccess: () =>
                        _({
                            action: "COPY_USER_ID",
                            analyticsLocations: h,
                        }),
                }),
            ],
        ];
    return m.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(a.YNO, {
              targetElementRef: f,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.W1t, {
                      "data-menu-mixed": !0,
                      navId: "non-user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": d.intl.string(d.t.AXIHpV),
                      children: m.map((e, t) =>
                          (0, r.jsx)(
                              a.rXV,
                              {
                                  children: e.map((e) => e),
                              },
                              t,
                          ),
                      ),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      u.br,
                      p(
                          {
                              buttonRef: f,
                              action: "PRESS_OPTIONS",
                              icon: a.jNK,
                              tooltipText: d.intl.string(d.t["UKOtz+"]),
                          },
                          e,
                      ),
                  ),
          });
}

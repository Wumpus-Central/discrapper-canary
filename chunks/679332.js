n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(299206),
    c = n(785717),
    u = n(732380),
    d = n(388032);
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
        { trackUserProfileAction: _ } = (0, c.KZ)(),
        { analyticsLocations: m } = (0, s.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
        h = [
            [n],
            [
                (0, l.Z)({
                    id: t.id,
                    label: d.intl.string(d.t["/AXYnE"]),
                    onSuccess: () =>
                        _({
                            action: "COPY_USER_ID",
                            analyticsLocations: m,
                        }),
                }),
            ],
        ];
    return h.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(a.yRy, {
              targetElementRef: f,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(a.v2r, {
                      navId: "non-user-bot-profile-overflow-menu",
                      onSelect: void 0,
                      onClose: t,
                      "aria-label": d.intl.string(d.t.AXIHpV),
                      children: h.map((e, t) => (0, r.jsx)(a.kSQ, { children: e.map((e) => e) }, t)),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      u.f6,
                      p(
                          {
                              buttonRef: f,
                              action: "PRESS_OPTIONS",
                              icon: a.xhG,
                              tooltipText: d.intl.string(d.t["UKOtz+"]),
                          },
                          e,
                      ),
                  ),
          });
}

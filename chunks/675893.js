n.d(t, { Z: () => g }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(906732),
    o = n(785717),
    s = n(931847),
    l = n(836197),
    c = n(164725),
    u = n(278857),
    d = n(890307),
    f = n(350207),
    p = n(228168),
    _ = n(388032);
function m(e, t, n) {
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
function h(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e) {
    let { user: t, widgets: n = [], onOpenUserProfileModal: m } = e,
        g = i.useMemo(() => n.filter((e) => e instanceof s.q), [n]),
        { analyticsLocations: E } = (0, a.ZP)(),
        { trackUserProfileAction: b } = (0, o.KZ)(),
        y = (0, c.d)(t.id, g),
        O = i.useCallback(() => {
            null == m || m({ section: p.oh.WIDGETS });
        }, [m]),
        v = i.useCallback(
            (e) => {
                let t = !1,
                    i = [];
                for (let a of n)
                    a instanceof s.q
                        ? null != y[a.applicationId] &&
                          i.push(
                              (0, r.jsx)(
                                  d.Z,
                                  h(
                                      {
                                          previewData: y[a.applicationId],
                                          onClick: O,
                                      },
                                      e,
                                  ),
                                  "application-widget-".concat(a.applicationId),
                              ),
                          )
                        : a instanceof l.zy &&
                          !t &&
                          (i.push(
                              (0, r.jsx)(
                                  f.Z,
                                  h(
                                      {
                                          widgets: n,
                                          onClick: O,
                                      },
                                      e,
                                  ),
                                  "collection-breadcrumb",
                              ),
                          ),
                          (t = !0));
                return i;
            },
            [y, O, n],
        );
    return 0 === n.length
        ? null
        : (0, r.jsx)(u.Z, {
              renderCards: v,
              heading: _.intl.string(_.t.Y55Tua),
              onExpand: () => {
                  b({
                      action: "PRESS_SHOW_MORE_WIDGETS",
                      analyticsLocations: E,
                  }),
                      O();
              },
          });
}

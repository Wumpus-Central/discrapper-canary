n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(296009),
    a = n(481060),
    o = n(785717),
    s = n(931847),
    c = n(86419),
    u = n(872269),
    d = n(860717),
    p = n(228168),
    f = n(921944),
    h = n(388032);
function g(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { user: t, application: n, onDismiss: b } = e,
        { trackUserProfileEditAction: _ } = (0, o.KZ)(),
        O = i.useMemo(
            () =>
                new s.q({
                    type: l.l.APPLICATION,
                    applicationId: n.id,
                }),
            [n.id],
        ),
        E = i.useCallback(() => {
            null != O &&
                ((0, c.qH)(O.type, O, !0),
                _({
                    action: "WIDGET_ADDED",
                    widgetEdited: O.type,
                }),
                (0, u.L$)(p.qb.WIDGET_ADDED));
        }, [O, _]);
    return (0, r.jsx)(d.Z, {
        user: t,
        widget: O,
        cta: (0, r.jsx)(d.Z.Cta, {
            heading: h.intl.format(h.t.OIzLCw, { applicationName: n.name }),
            content: h.intl.format(h.t.BQySrq, { applicationName: n.name }),
            buttons: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.ua7, {
                        text: h.intl.string(h.t.WAI6xs),
                        children: (e) =>
                            (0, r.jsx)(
                                a.Yd2,
                                m(g({}, e), {
                                    variant: "secondary",
                                    size: "sm",
                                    icon: a.Dio,
                                    "aria-label": h.intl.string(h.t.WAI6xs),
                                    onClick: () => {
                                        b(f.L.USER_DISMISS);
                                    },
                                }),
                            ),
                    }),
                    (0, r.jsx)(a.ua7, {
                        text: h.intl.string(h.t.lBG2s7),
                        children: (e) =>
                            (0, r.jsx)(
                                a.Yd2,
                                m(g({}, e), {
                                    variant: "primary",
                                    size: "sm",
                                    icon: a.kmB,
                                    "aria-label": h.intl.formatToPlainString(h.t.KfGahI, { applicationName: n.name }),
                                    onClick: () => {
                                        b(f.L.TAKE_ACTION), E();
                                    },
                                }),
                            ),
                    }),
                ],
            }),
        }),
    });
}

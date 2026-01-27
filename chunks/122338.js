n.d(t, {
    A: () => f,
}),
    n(321073),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(183555),
    o = n(735321),
    s = n(394245),
    c = n(985018),
    u = n(542467);
let d = l.memo(function (e) {
    let { currentTags: t, onTagSelect: n, onNoneSelect: l, onClose: a } = e;
    return (0, r.jsx)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": c.intl.string(c.t.r6EJOu),
        onClose: a,
        onSelect: () => {},
        className: u.VS,
        children: Object.entries(s.Pb).map((e) => {
            let a,
                [o, u] = e,
                d =
                    ((a = []),
                    u.type === s.me.RADIO &&
                        a.push(
                            (0, r.jsx)(
                                i.iDA,
                                {
                                    id: "".concat(o, "-none"),
                                    group: o,
                                    label: c.intl.string(c.t.PoWNfe),
                                    checked: !u.tags.some((e) => t.includes(e)),
                                    action: () => l(u.tags),
                                },
                                "none",
                            ),
                        ),
                    u.tags.forEach((e) => {
                        let l = s.PT[e];
                        null != l &&
                            (u.type === s.me.RADIO
                                ? a.push(
                                      (0, r.jsx)(
                                          i.iDA,
                                          {
                                              id: e,
                                              group: o,
                                              label: l.getText(),
                                              checked: t.includes(e),
                                              action: () => n(e, !0),
                                          },
                                          e,
                                      ),
                                  )
                                : a.push(
                                      (0, r.jsx)(
                                          i.sLh,
                                          {
                                              id: e,
                                              label: l.getText(),
                                              checked: t.includes(e),
                                              action: () => n(e, !1),
                                          },
                                          e,
                                      ),
                                  ));
                    }),
                    a);
            return (0, r.jsx)(
                i.rXV,
                {
                    label: u.getLabel(),
                    children: d,
                },
                o,
            );
        }),
    });
});

function f(e) {
    let { tags: t, widgetType: n, applicationId: f, ref: p } = e,
        g = (0, l.useRef)(null),
        { trackUserProfileEditAction: m } = (0, a.NJ)(),
        b = (0, l.useMemo)(() => (null != t ? t : []), [t]),
        y = (0, l.useCallback)(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = new Set(b);
                if (t) {
                    let t = Object.values(s.Pb).find((t) => t.tags.includes(e));
                    null != t &&
                        (t.tags.forEach((e) => {
                            r.delete(e);
                        }),
                        r.add(e),
                        m({
                            action: "TAG_ADDED",
                            widgetEdited: n,
                            gameId: f,
                        }));
                } else
                    r.has(e)
                        ? (r.delete(e),
                          m({
                              action: "TAG_REMOVED",
                              widgetEdited: n,
                              gameId: f,
                          }))
                        : (r.add(e),
                          m({
                              action: "TAG_ADDED",
                              widgetEdited: n,
                              gameId: f,
                          }));
                (0, o.s1)(n, f, Array.from(r));
            },
            [b, m, n, f],
        ),
        O = (0, l.useCallback)(
            (e) => {
                let t = new Set(b);
                e.forEach((e) => {
                    t.delete(e);
                }),
                    m({
                        action: "TAG_REMOVED",
                        widgetEdited: n,
                        gameId: f,
                    }),
                    (0, o.s1)(n, f, Array.from(t));
            },
            [b, m, n, f],
        );
    return (0, r.jsx)(i.YNO, {
        targetElementRef: g,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            m({
                action: "PRESS_ADD_TAG",
                widgetEdited: n,
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(d, {
                currentTags: b,
                onTagSelect: y,
                onNoneSelect: O,
                onClose: t,
            });
        },
        children: (e) => {
            var t, n;
            return (0, r.jsx)("div", {
                ref: (e) => (
                    null != e && ((g.current = e), (p.current = e)),
                    () => {
                        (g.current = null), (p.current = null);
                    }
                ),
                children: (0, r.jsx)(
                    i.DUT,
                    ((t = (function (e) {
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
                    })({}, e)),
                    (n = n =
                        {
                            className: u.c9,
                            "aria-label": c.intl.string(c.t.r6EJOu),
                            children: (0, r.jsx)(i.Text, {
                                variant: "text-xxs/medium",
                                color: "none",
                                children: c.intl.string(c.t.fZSejy),
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                ),
            });
        },
    });
}

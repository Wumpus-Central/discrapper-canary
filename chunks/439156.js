n.d(t, {
    A: () => y,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(435371),
    o = n(732955),
    c = n(397927),
    u = n(470934),
    d = n(898190),
    f = n(998418),
    p = n(220628),
    h = n(933337),
    b = n(568065),
    g = n(333354),
    m = n(985018),
    A = n(294590);

function y(e) {
    var t, n;
    let { guildId: i, powerup: y, compact: O, iconSize: j, size: v, grow: x, className: E, onError: _ } = e,
        { onActivate: C, isLoading: S, error: I } = (0, p.A)(i, y),
        { isLoading: N, error: T } = (0, d.A)(i, y),
        P = (0, h.A)(i, y),
        w = (0, f.Ay)(i, y),
        R = w.type !== b.b_.INACTIVE,
        { disabled: D, reason: M } = (0, u.A)(i, y, R),
        L =
            null != M
                ? {
                      title: null,
                      body: M,
                  }
                : (function (e, t) {
                      if (e.type === b.b_.LEVEL_ACTIVATED) {
                          var n, r;
                          return {
                              title: m.intl.string(g.default["9oYuvb"]),
                              body: m.intl.formatToPlainString(g.default.WRRYUT, {
                                  perkName:
                                      null != (n = null == (r = e.sourcePowerup) ? void 0 : r.title)
                                          ? n
                                          : m.intl.string(m.t.BfF6ED),
                              }),
                          };
                      }
                      return e.type === b.b_.POWERUP_ACTIVATED
                          ? {
                                title: m.intl.string(g.default.TZsu1U),
                                body: m.intl.formatToPlainString(g.default["5HQUzD"], {
                                    boostCount: t.cost,
                                }),
                            }
                          : null;
                  })(w, y);
    return (
        l.useEffect(() => {
            null == _ || _(null != I ? I : T);
        }, [I, T, _]),
        (0, r.jsx)(s.un, {
            body: null != (t = null == L ? void 0 : L.body) ? t : "",
            title: null != (n = null == L ? void 0 : L.title) ? n : void 0,
            shouldShow: null != L,
            delay: 100,
            "aria-label": null != M ? M : R ? m.intl.string(g.default.TZsu1U) : void 0,
            children: (0, r.jsx)("div", {
                className: a()(
                    A.zr,
                    {
                        [A._o]: x,
                        [A.nB]: !x,
                    },
                    E,
                ),
                children: (() => {
                    let { text: e, icon: t } = (function (e) {
                        let { cost: t, isActive: n, compact: l, iconSize: i } = e,
                            a = null != i ? i : "sm",
                            s = n ? c.x8N : c._Jp;
                        return l
                            ? {
                                  text: t.toString(),
                                  icon: s,
                              }
                            : {
                                  text: m.intl.format(n ? g.default.uzQpQd : g.default.ad2Mfj, {
                                      boostCount: t,
                                      dotHook: () =>
                                          (0, r.jsx)("span", {
                                              className: A.Om,
                                              children: "•",
                                          }),
                                      boostIconHook: () =>
                                          (0, r.jsx)(s, {
                                              size: a,
                                              color: "currentColor",
                                              className: A.$J,
                                          }),
                                  }),
                              };
                    })({
                        cost: y.cost,
                        isActive: R,
                        compact: O,
                        iconSize: j,
                    });
                    return (0, r.jsx)(
                        o.$nd,
                        (function (e) {
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
                        })(
                            {
                                variant: R ? "secondary" : "primary",
                                "aria-label": m.intl.string(R ? g.default.TZsu1U : g.default.gSxlHf),
                                disabled: D,
                                onClick: (e) => {
                                    e.stopPropagation(), R ? P() : C();
                                },
                                loading: S || N,
                                fullWidth: x,
                                size: null != v ? v : O ? "md" : void 0,
                                text: e,
                                minWidth: 0,
                            },
                            O
                                ? {
                                      icon: t,
                                  }
                                : {},
                        ),
                    );
                })(),
            }),
        })
    );
}

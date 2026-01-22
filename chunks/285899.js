r.d(t, {
    O: () => j,
    default: () => P,
}),
    r(896048);
var n = r(627968),
    a = r(64700),
    l = r(512750),
    o = r(158954),
    s = r(397927),
    i = r(503852),
    c = r(661685),
    u = r(898190),
    d = r(490557),
    f = r(193157),
    p = r(568065),
    m = r(333354),
    b = r(985018),
    k = r(438619);

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}

function g(e, t) {
    if (null == e) return {};
    var r,
        n,
        a,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++)
            (n = r[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = {},
                l = Object.getOwnPropertyNames(e);
            for (n = 0; n < l.length; n++)
                (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            return a;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            (n = r[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l;
}

function j(e) {
    var t, r;
    let {
            size: l,
            title: i,
            body: c,
            warningText: u,
            acknowledgementText: d,
            error: f,
            isLoading: p,
            onDeactivate: j,
        } = e,
        P = g(e, ["size", "title", "body", "warningText", "acknowledgementText", "error", "isLoading", "onDeactivate"]),
        [I, y] = a.useState(!1);
    return (0, n.jsxs)(
        o.Modal,
        ((t = O({}, P)),
        (r = r =
            {
                size: l,
                title: b.intl.formatToPlainString(m.default.iEBw1M, {
                    perk: i,
                }),
                subtitle: b.intl.formatToPlainString(m.default["7o0K+2"], {
                    perk: i,
                }),
                actions: [
                    {
                        variant: "secondary",
                        text: b.intl.string(b.t["ETE/oC"]),
                        onClick: P.onClose,
                    },
                    {
                        variant: "critical-primary",
                        text: b.intl.string(m.default.PYPdl4),
                        loading: p,
                        onClick: j,
                        disabled: null != d && !I,
                    },
                ],
                children: [
                    c,
                    (0, n.jsxs)("div", {
                        className: k.UW,
                        children: [
                            (0, n.jsx)(o.EYj, {
                                color: "text-feedback-critical",
                                variant: "eyebrow",
                                children: b.intl.string(m.default.OVt5CC),
                            }),
                            (0, n.jsx)(o.EYj, {
                                className: k.i4,
                                tag: "span",
                                variant: "text-sm/medium",
                                children: u,
                            }),
                        ],
                    }),
                    null != f &&
                        (0, n.jsx)(o.EYj, {
                            className: k.kc,
                            color: "text-feedback-critical",
                            variant: "text-sm/semibold",
                            children: f,
                        }),
                    null != d &&
                        (0, n.jsx)("div", {
                            className: k.ud,
                            children: (0, n.jsx)(s.Checkbox, {
                                checked: I,
                                onChange: y,
                                label: d,
                                labelType: "secondary",
                            }),
                        }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}

function P(e) {
    let { guildId: t, powerup: r } = e,
        s = g(e, ["guildId", "powerup"]),
        { onDeactivate: m, error: b, isLoading: P } = (0, u.A)(t, r),
        { onClose: I } = s,
        y = a.useCallback(
            (e) => {
                e.stopPropagation(),
                    m().then(() => {
                        null == I || I();
                    });
            },
            [I, m],
        ),
        v = (function (e, t) {
            let { warningText: r, vanityUrlWarning: s } = (0, c.A)(e, t);
            return a.useMemo(
                () =>
                    t.skuId === l.FB
                        ? (0, n.jsx)(o.EYj, {
                              color: "text-feedback-critical",
                              variant: "text-sm/semibold",
                              children: r,
                          })
                        : null != s
                          ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                    r,
                                    (0, n.jsx)(o.EYj, {
                                        color: "text-feedback-critical",
                                        variant: "text-sm/semibold",
                                        children: s,
                                    }),
                                ],
                            })
                          : r,
                [t.skuId, r, s],
            );
        })(t, r);
    return (
        (0, i.Z)(t, r, i.q.DEACTIVATE),
        (0, n.jsx)(
            j,
            O(
                {
                    size: r.type === p.o9.LEVEL ? "md" : "sm",
                    title: r.title,
                    body: (() => {
                        switch (r.type) {
                            case p.o9.LEVEL:
                                return (0, n.jsx)(f.A, {
                                    powerup: r,
                                });
                            case p.o9.PERK:
                                return (0, n.jsx)(d.l, {
                                    className: k.Sl,
                                    powerup: r,
                                });
                        }
                    })(),
                    warningText: v,
                    error: b,
                    isLoading: P,
                    onDeactivate: y,
                },
                s,
            ),
        )
    );
}

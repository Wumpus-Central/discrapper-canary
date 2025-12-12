n.d(t, {
    default: () => I,
    f: () => x,
}),
    n(388685);
var r = n(54381),
    o = n(473749),
    a = n(494497),
    i = n(793030),
    c = n(481060),
    l = n(870246),
    s = n(268574),
    u = n(448222),
    d = n(795338),
    f = n(17622),
    b = n(535396),
    m = n(5238),
    p = n(388032),
    k = n(514186);
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
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    }
    return o;
}
function x(e) {
    var t,
        n,
        {
            size: a,
            title: l,
            body: s,
            warningText: u,
            acknowledgementText: d,
            error: f,
            isLoading: b,
            onDeactivate: x,
        } = e,
        I = v(e, ["size", "title", "body", "warningText", "acknowledgementText", "error", "isLoading", "onDeactivate"]);
    let [O, _] = o.useState(!1);
    return (0, r.jsxs)(
        i.Modal,
        ((t = g({}, I)),
        (n = n =
            {
                size: a,
                title: p.intl.formatToPlainString(m.default.iEBw1M, { perk: l }),
                subtitle: p.intl.formatToPlainString(m.default["7o0K+2"], { perk: l }),
                actions: [
                    {
                        variant: "secondary",
                        text: p.intl.string(p.t["ETE/oC"]),
                        onClick: I.onClose,
                    },
                    {
                        variant: "critical-primary",
                        text: p.intl.string(m.default.PYPdl4),
                        loading: b,
                        onClick: x,
                        disabled: null != d && !O,
                    },
                ],
                children: [
                    s,
                    (0, r.jsxs)("div", {
                        className: k.warningContainer,
                        children: [
                            (0, r.jsx)(i.xvT, {
                                color: "text-feedback-critical",
                                variant: "eyebrow",
                                children: p.intl.string(m.default.OVt5CC),
                            }),
                            (0, r.jsx)(i.xvT, {
                                className: k.warningText,
                                tag: "span",
                                variant: "text-sm/medium",
                                children: u,
                            }),
                        ],
                    }),
                    null != f &&
                        (0, r.jsx)(i.xvT, {
                            className: k.errorText,
                            color: "text-feedback-critical",
                            variant: "text-sm/semibold",
                            children: f,
                        }),
                    null != d &&
                        (0, r.jsx)("div", {
                            className: k.acknowledgementContainer,
                            children: (0, r.jsx)(c.Checkbox, {
                                checked: O,
                                onChange: _,
                                label: d,
                                labelType: "secondary",
                            }),
                        }),
                ],
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
    );
}
function I(e) {
    var { guildId: t, powerup: n } = e,
        c = v(e, ["guildId", "powerup"]);
    let { onDeactivate: m, error: p, isLoading: I } = (0, u.Z)(t, n),
        { onClose: O } = c,
        _ = o.useCallback(
            (e) => {
                e.stopPropagation(),
                    m().then(() => {
                        null == O || O();
                    });
            },
            [O, m],
        ),
        j = (function (e, t) {
            let { warningText: n, vanityUrlWarning: c } = (0, s.Z)(e, t);
            return o.useMemo(
                () =>
                    t.skuId === a.A$
                        ? (0, r.jsx)(i.xvT, {
                              color: "text-feedback-critical",
                              variant: "text-sm/semibold",
                              children: n,
                          })
                        : null != c
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    n,
                                    (0, r.jsx)(i.xvT, {
                                        color: "text-feedback-critical",
                                        variant: "text-sm/semibold",
                                        children: c,
                                    }),
                                ],
                            })
                          : n,
                [t.skuId, n, c],
            );
        })(t, n);
    return (
        (0, l.$)(t, n, l.w.DEACTIVATE),
        (0, r.jsx)(
            x,
            g(
                {
                    size: n.type === b.Us.LEVEL ? "md" : "sm",
                    title: n.title,
                    body: (() => {
                        switch (n.type) {
                            case b.Us.LEVEL:
                                return (0, r.jsx)(f.Z, { powerup: n });
                            case b.Us.PERK:
                                return (0, r.jsx)(d.m, {
                                    className: k.image,
                                    powerup: n,
                                });
                        }
                    })(),
                    warningText: j,
                    error: p,
                    isLoading: I,
                    onDeactivate: _,
                },
                c,
            ),
        )
    );
}

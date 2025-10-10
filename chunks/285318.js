n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(755721),
    s = n(481060),
    a = n(273504),
    o = n(388032),
    c = n(343392);
function d(e) {
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
function u(e, t) {
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
function g(e) {
    let { preset: t, toggled: n, onToggle: i } = e,
        { headerText: d, subtitleText: u } = (function (e) {
            let t = null,
                n = null;
            switch (e) {
                case a.Ux.PROFANITY:
                    (t = o.intl.string(o.t["I+BDrK"])),
                        (n = (0, r.jsx)(r.Fragment, { children: o.intl.string(o.t.hISCmp) }));
                    break;
                case a.Ux.SEXUAL_CONTENT:
                    (t = o.intl.string(o.t.URSMen)),
                        (n = (0, r.jsx)(r.Fragment, { children: o.intl.string(o.t.oRQDBg) }));
                    break;
                case a.Ux.SLURS:
                    (t = o.intl.string(o.t.xjK2Mz)),
                        (n = (0, r.jsx)(r.Fragment, { children: o.intl.string(o.t.oJYXBA) }));
                    break;
                default:
                    (t = "Error"), (n = "Unrecognized list");
            }
            return {
                headerText: t,
                subtitleText: n,
            };
        })(t);
    return (0, r.jsxs)("div", {
        className: c.keywordListContainer,
        children: [
            (0, r.jsxs)("div", {
                className: c.keywordListTextContainer,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-sm/semibold",
                        children: d,
                    }),
                    (0, r.jsx)(s.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: u,
                    }),
                ],
            }),
            (0, r.jsx)(l.$q, {
                className: c.toggle,
                type: l.M0.INVERTED,
                value: n,
                onChange: () => i(t),
            }),
        ],
    });
}
function m(e) {
    var t;
    let { rule: n, onChangeRule: l } = e,
        [s, o] = i.useState(new Set(null == n || null == (t = n.triggerMetadata) ? void 0 : t.presets)),
        c = i.useMemo(
            () => (e) => {
                l(u(d({}, n), { triggerMetadata: u(d({}, n.triggerMetadata), { presets: e }) }));
            },
            [l, n],
        ),
        m = (e) => {
            let t = new Set(s);
            t.has(e) ? t.delete(e) : t.add(e), o(t), c(Array.from(t));
        };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(g, {
                preset: a.Ux.PROFANITY,
                toggled: s.has(a.Ux.PROFANITY),
                onToggle: m,
            }),
            (0, r.jsx)(g, {
                preset: a.Ux.SLURS,
                toggled: s.has(a.Ux.SLURS),
                onToggle: m,
            }),
            (0, r.jsx)(g, {
                preset: a.Ux.SEXUAL_CONTENT,
                toggled: s.has(a.Ux.SEXUAL_CONTENT),
                onToggle: m,
            }),
        ],
    });
}

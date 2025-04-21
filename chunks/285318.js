n.d(t, { Z: () => m }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(273504),
    a = n(388032),
    o = n(274117);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e, t) {
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
function u(e) {
    let { preset: t, toggled: n, onToggle: i } = e,
        { headerText: c, subtitleText: d } = (function (e) {
            let t = null,
                n = null;
            switch (e) {
                case s.Ux.PROFANITY:
                    (t = a.intl.string(a.t['I+BDrK'])), (n = (0, r.jsx)(r.Fragment, { children: a.intl.string(a.t.hISCmp) }));
                    break;
                case s.Ux.SEXUAL_CONTENT:
                    (t = a.intl.string(a.t.URSMen)), (n = (0, r.jsx)(r.Fragment, { children: a.intl.string(a.t.oRQDBg) }));
                    break;
                case s.Ux.SLURS:
                    (t = a.intl.string(a.t.xjK2Mz)), (n = (0, r.jsx)(r.Fragment, { children: a.intl.string(a.t.oJYXBA) }));
                    break;
                default:
                    (t = 'Error'), (n = 'Unrecognized list');
            }
            return {
                headerText: t,
                subtitleText: n
            };
        })(t);
    return (0, r.jsxs)('div', {
        className: o.keywordListContainer,
        children: [
            (0, r.jsxs)('div', {
                className: o.keywordListTextContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-sm/semibold',
                        children: c
                    }),
                    (0, r.jsx)(l.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: d
                    })
                ]
            }),
            (0, r.jsx)(l.XZJ, {
                className: o.toggle,
                type: l.XZJ.Types.INVERTED,
                value: n,
                onChange: () => i(t)
            })
        ]
    });
}
function m(e) {
    var t;
    let { rule: n, onChangeRule: l } = e,
        [a, o] = i.useState(new Set(null == n || null == (t = n.triggerMetadata) ? void 0 : t.presets)),
        m = i.useMemo(
            () => (e) => {
                l(d(c({}, n), { triggerMetadata: d(c({}, n.triggerMetadata), { presets: e }) }));
            },
            [l, n]
        ),
        g = (e) => {
            let t = new Set(a);
            t.has(e) ? t.delete(e) : t.add(e), o(t), m(Array.from(t));
        };
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(u, {
                preset: s.Ux.PROFANITY,
                toggled: a.has(s.Ux.PROFANITY),
                onToggle: g
            }),
            (0, r.jsx)(u, {
                preset: s.Ux.SLURS,
                toggled: a.has(s.Ux.SLURS),
                onToggle: g
            }),
            (0, r.jsx)(u, {
                preset: s.Ux.SEXUAL_CONTENT,
                toggled: a.has(s.Ux.SEXUAL_CONTENT),
                onToggle: g
            })
        ]
    });
}

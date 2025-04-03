n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(430824),
    l = n(496675),
    o = n(556012),
    c = n(273504),
    d = n(981631),
    u = n(590433),
    m = n(388032),
    g = n(467397);
function p(e) {
    var t;
    let { action: n, triggerType: p, guildId: h, toggled: f, onToggleAction: b } = e,
        x = (e) => () => b(e),
        j = (0, o.c)(n.type, n, p),
        N = null == (t = n.metadata) ? void 0 : t.durationSeconds,
        _ = null != N ? (0, u.L9)(N) : null,
        v = (0, i.e7)([l.Z, a.Z], () => l.Z.can(d.Plq.MODERATE_MEMBERS, a.Z.getGuild(h)), [h]);
    if (null == j) return null;
    let { headerText: C, descriptionText: O, icon: y } = j;
    return (0, r.jsxs)('div', {
        className: g.actionContainer,
        children: [
            (0, r.jsx)('div', {
                className: g.actionIconContainer,
                children: (0, r.jsx)(y, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.actionIcon
                })
            }),
            (0, r.jsxs)('div', {
                className: g.actionTextContainer,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-sm/semibold',
                        children: C
                    }),
                    (0, r.jsx)(s.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: O
                    }),
                    f &&
                        (0, r.jsxs)(s.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/medium',
                            children: [
                                null === _ ? null : p === c.fX.MENTION_SPAM ? m.NW.format(m.t.i3lsKC, { friendlyDurationString: _ }) : m.NW.format(m.t.mvHxzc, { friendlyDurationString: _ }),
                                v &&
                                    (0, r.jsx)(s.P3F, {
                                        onClick: x(!0),
                                        className: g.editChannel,
                                        tag: 'span',
                                        role: 'link',
                                        children: m.NW.string(m.t['0B95RE'])
                                    })
                            ]
                        })
                ]
            }),
            (0, r.jsx)(s.ua7, {
                text: m.NW.format(m.t.wx6Vb2, {}),
                'aria-label': m.NW.formatToMarkdownString(m.t.wx6Vb2, {}),
                shouldShow: !v,
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        'div',
                        ((t = (function (e) {
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
                        })({}, e)),
                        (n = n =
                            {
                                children: (0, r.jsx)(s.XZJ, {
                                    type: s.XZJ.Types.INVERTED,
                                    value: f,
                                    onChange: x(!1),
                                    disabled: !v,
                                    className: g.__invalid_actionCheckbox
                                })
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
                        t)
                    );
                }
            })
        ]
    });
}

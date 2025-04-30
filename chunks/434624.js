n.d(t, { l: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(866442),
    s = n(596454),
    c = n(434650),
    u = n(446489),
    d = n(56314),
    p = n(566006),
    m = n(287151),
    f = n(92254),
    h = n(588429);
let g = i.memo(function (e) {
        let t,
            n,
            { useChatFontScaling: i, hideEmoji: l, emoji: c, className: g, count: _, me: b, me_burst: x, burst_count: y, burst_colors: v, readOnly: E, isLurking: O, isGuest: j, isPendingMember: C, type: S, emojiSize: I } = e,
            N = S === p.O.BURST,
            T = (0, m.y4)(b, x, S),
            P = (0, d.v)(N && null != v ? v : []),
            A = i ? h : f,
            w = N ? y : _,
            Z = (0, u.y)(w, m.aO),
            R = {};
        if (N && null != P) {
            var k;
            let { accentColor: e, backgroundColor: r, opacity: i } = P,
                l = null != (k = (0, o.wK)(null != r ? r : '', i)) ? k : '';
            T && (R.borderColor = r), (R.background = l), (t = e), (n = e);
        }
        let D = {
            minWidth: Z,
            color: t,
            borderColor: n
        };
        return (0, r.jsxs)('div', {
            className: a()(A.reaction, A.reactionInner, g, {
                [A.reactionMe]: T,
                [A.reactionReadOnly]: E && !O && !C && !j
            }),
            style: R,
            children: [
                (0, r.jsx)(s.Z, {
                    className: a()({ [A.hideEmoji]: l }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: I,
                    animated: N && c.animated
                }),
                (0, r.jsx)('div', {
                    className: A.reactionCount,
                    style: D,
                    children: w
                })
            ]
        });
    }),
    _ = i.memo(function (e) {
        var { showImmediate: t, reactions: n } = e,
            l = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['showImmediate', 'reactions']);
        let [a, o] = i.useState(!1),
            [s, u] = i.useTransition(),
            d = i.useCallback(
                (e) => {
                    !e ||
                        a ||
                        s ||
                        u(() => {
                            o(!0);
                        });
                },
                [a, s]
            ),
            f = (0, c.O)(d),
            h = (a && !s) || t ? m.le : g;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', { ref: f }),
                n.map((e) => {
                    var t, n, i;
                    return (0, r.jsx)(
                        h,
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
                        })({}, l, e)),
                        (n = n = { emojiSize: 'reaction' }),
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
                        ''
                            .concat(e.type === p.O.BURST ? 'burst:' : '')
                            .concat(null != (i = e.emoji.id) ? i : 0, ':')
                            .concat(e.emoji.name)
                    );
                })
            ]
        });
    });

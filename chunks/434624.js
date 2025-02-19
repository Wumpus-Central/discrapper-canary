n.d(t, { l: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(866442),
    s = n(596454),
    c = n(434650),
    d = n(446489),
    u = n(56314),
    p = n(566006),
    m = n(287151),
    f = n(773265),
    h = n(893372);
let g = i.memo(function (e) {
        let t,
            n,
            { useChatFontScaling: i, hideEmoji: a, emoji: c, className: g, count: _, me: b, me_burst: v, burst_count: y, burst_colors: x, readOnly: O, isLurking: E, isGuest: j, isPendingMember: N, type: C, emojiSize: I } = e,
            S = C === p.O.BURST,
            P = (0, m.y4)(b, v, C),
            T = (0, u.v)(S && null != x ? x : []),
            A = i ? h : f,
            w = S ? y : _,
            Z = (0, d.y)(w, m.aO),
            k = {};
        if (S && null != T) {
            var R;
            let { accentColor: e, backgroundColor: r, opacity: i } = T,
                a = null !== (R = (0, l.wK)(null != r ? r : '', i)) && void 0 !== R ? R : '';
            P && (k.borderColor = r), (k.background = a), (t = e), (n = e);
        }
        let L = {
            minWidth: Z,
            color: t,
            borderColor: n
        };
        return (0, r.jsxs)('div', {
            className: o()(A.reaction, A.reactionInner, g, {
                [A.reactionMe]: P,
                [A.reactionReadOnly]: O && !E && !N && !j
            }),
            style: k,
            children: [
                (0, r.jsx)(s.Z, {
                    className: o()({ [A.hideEmoji]: a }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: I,
                    animated: S && c.animated
                }),
                (0, r.jsx)('div', {
                    className: A.reactionCount,
                    style: L,
                    children: w
                })
            ]
        });
    }),
    _ = i.memo(function (e) {
        var { showImmediate: t, reactions: n, emojiSize: a } = e,
            o = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['showImmediate', 'reactions', 'emojiSize']);
        let [l, s] = i.useState(!1),
            [d, u] = i.useTransition(),
            f = i.useCallback(
                (e) => {
                    !e ||
                        l ||
                        d ||
                        u(() => {
                            s(!0);
                        });
                },
                [l, d]
            ),
            h = (0, c.O)(f),
            _ = (l && !d) || t ? m.le : g;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', { ref: h }),
                n.map((e) => {
                    var t, n, i;
                    return (0, r.jsx)(
                        _,
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
                        })({}, o, e)),
                        (n = n = { emojiSize: a }),
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
                            .concat(null !== (i = e.emoji.id) && void 0 !== i ? i : 0, ':')
                            .concat(e.emoji.name)
                    );
                })
            ]
        });
    });

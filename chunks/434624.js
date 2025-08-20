n.d(t, { l: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(866442),
    s = n(596454),
    c = n(434650),
    u = n(446489),
    d = n(56314),
    p = n(566006),
    m = n(287151),
    f = n(127947),
    g = n(893973);
let _ = i.memo(function (e) {
        let t,
            n,
            {
                useChatFontScaling: i,
                hideEmoji: l,
                emoji: c,
                className: _,
                count: h,
                me: b,
                me_burst: E,
                burst_count: C,
                burst_colors: v,
                readOnly: O,
                isLurking: y,
                isGuest: x,
                isPendingMember: j,
                type: I,
                emojiSize: S,
            } = e,
            T = I === p.O.BURST,
            P = (0, m.y4)(b, E, I),
            N = (0, d.v)(T && null != v ? v : []),
            A = i ? g : f,
            w = T ? C : h,
            Z = (0, u.y)(w, m.aO),
            R = {};
        if (T && null != N) {
            var D;
            let { accentColor: e, backgroundColor: r, opacity: i } = N,
                l = null != (D = (0, a.wK)(null != r ? r : "", i)) ? D : "";
            P && (R.borderColor = r), (R.background = l), (t = e), (n = e);
        }
        let L = {
            minWidth: Z,
            color: t,
            borderColor: n,
        };
        return (0, r.jsxs)("div", {
            className: o()(A.reaction, A.reactionInner, _, {
                [A.reactionMe]: P,
                [A.reactionReadOnly]: O && !y && !j && !x,
            }),
            style: R,
            children: [
                (0, r.jsx)(s.Z, {
                    className: o()({ [A.hideEmoji]: l }),
                    emojiId: c.id,
                    emojiName: c.name,
                    size: S,
                    animated: T && c.animated,
                }),
                (0, r.jsx)("div", {
                    className: A.reactionCount,
                    style: L,
                    children: w,
                }),
            ],
        });
    }),
    h = i.memo(function (e) {
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
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ["showImmediate", "reactions"]);
        let [o, a] = i.useState(!1),
            [s, u] = i.useTransition(),
            d = i.useCallback(
                (e) => {
                    !e ||
                        o ||
                        s ||
                        u(() => {
                            a(!0);
                        });
                },
                [o, s],
            ),
            f = (0, c.O)(d),
            g = (o && !s) || t ? m.le : _;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", { ref: f }),
                n.map((e) => {
                    var t, n, i;
                    return (0, r.jsx)(
                        g,
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
                        })({}, l, e)),
                        (n = n = { emojiSize: "reaction" }),
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
                        ""
                            .concat(e.type === p.O.BURST ? "burst:" : "")
                            .concat(null != (i = e.emoji.id) ? i : 0, ":")
                            .concat(e.emoji.name),
                    );
                }),
            ],
        });
    });

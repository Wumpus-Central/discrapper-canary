n.d(t, {
    A: () => v,
}),
    n(896048);
var i = n(627968),
    l = n(64700),
    r = n(106778),
    o = n(108531),
    a = n(615300),
    s = n(397927),
    u = n(565645),
    c = n(21161),
    d = n(750506),
    p = n(147421),
    h = n(486020),
    m = n(690521),
    f = n(851110),
    g = n(624085);

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = [];

function v(e) {
    let { messageId: t, emoji: n, startPosition: v, targetPosition: j } = e,
        [A, T] = l.useState(0),
        [E, I] = l.useState(0),
        [S, x] = l.useState(null),
        { confettiCanvas: N } = l.useContext(c.x),
        R = (0, r.f9)(N, S),
        P = l.useMemo(
            () => [
                {
                    src:
                        null == n.id
                            ? m.Ay.getURL(n.name)
                            : h.Ay.getEmojiURL({
                                  id: n.id,
                                  animated: !1,
                                  size: 22,
                              }),
                    colorize: !1,
                },
            ],
            [n.name, n.id],
        ),
        C = j.x - (j.width / 2) * 0.5,
        w = j.y - (j.height / 2) * 0.5,
        _ = (0, s.zhh)({
            from: {
                y: v.y,
            },
            to: {
                y: w,
            },
            config: {
                duration: 450,
                easing: a.A.Easing.in(a.A.Easing.exp),
            },
            onChange: (e) => {
                let { y: t } = e;
                I(t);
            },
        }),
        M = (0, s.zhh)({
            from: {
                x: v.x,
                scale: 1,
                opacity: 1,
            },
            to: {
                x: C,
                scale: 0.5,
                opacity: 0.4,
            },
            config: {
                duration: 450,
                easing: a.A.Easing.in(a.A.Easing.ease),
            },
            onRest: () => {
                (0, p.p)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                T(t);
            },
        });
    return (
        l.useEffect(() => {
            A > 0 &&
                E > 0 &&
                R.createConfetti(
                    y(b({}, f.Mw), {
                        position: {
                            type: "static",
                            value: {
                                x: A,
                                y: E,
                            },
                        },
                    }),
                );
        }, [R, A, E]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.K_, {
                    ref: x,
                    sprites: P,
                    colors: O,
                    spriteWidth: f.wn,
                    spriteHeight: f.wn,
                }),
                (0, i.jsx)(d.Ay, {
                    children: (0, i.jsx)(o.animated.div, {
                        style: b({}, _),
                        className: g.qq,
                        children: (0, i.jsx)(o.animated.div, {
                            style: y(b({}, M), {
                                opacity: M.opacity,
                            }),
                            children: (0, i.jsx)(u.A, {
                                className: g.Zg,
                                emojiId: n.id,
                                emojiName: n.name,
                                animated: n.animated,
                                size: "jumbo",
                            }),
                        }),
                    }),
                }),
            ],
        })
    );
}

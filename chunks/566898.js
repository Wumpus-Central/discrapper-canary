n.d(t, {
    M9: () => _,
    Pb: () => b,
    XX: () => m,
    ZP: () => C,
    ZT: () => p,
    iv: () => g,
    pk: () => f
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(392711),
    o = n.n(a),
    s = n(481060),
    c = n(881448);
function u(e) {
    return ''.concat(e / 16, 'rem');
}
function d() {
    return (0, r.jsx)('div', {
        className: c.avatar,
        style: { opacity: 0.08 }
    });
}
function p(e) {
    let { width: t, opacity: n, className: i } = e;
    return (0, r.jsx)('div', {
        className: l()(i, { [c.blob]: !0 }),
        style: {
            width: u(t),
            opacity: null != n ? n : o().random(0.02, 0.08)
        }
    });
}
function h(e) {
    let t,
        { groupStart: n = !1, compact: i = !1, attachmentSpecs: a, usernameWidth: u, usernameOpacity: h, className: f, style: m } = e,
        g = i ? 50 : o().random(40, 50);
    return (
        !i && n
            ? (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d, {}),
                      (0, r.jsx)(s.H, {
                          className: c.header,
                          children: (0, r.jsx)(p, {
                              width: u,
                              opacity: h,
                              className: c.__invalid_username
                          })
                      })
                  ]
              }))
            : i &&
              (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      i &&
                          (0, r.jsx)(p, {
                              width: g,
                              className: l()({
                                  [c.compactTimestamp]: !0,
                                  [c.hidden]: !n
                              })
                          }),
                      (0, r.jsx)(s.H, {
                          className: c.header,
                          children: (0, r.jsx)(p, {
                              width: u,
                              opacity: h
                          })
                      })
                  ]
              })),
        (0, r.jsxs)('div', {
            'aria-hidden': !0,
            className: l()(f, {
                [c.wrapper]: !0,
                [c.compact]: i,
                [c.cozy]: !i
            }),
            style: m,
            children: [
                (0, r.jsxs)('div', {
                    className: c.contents,
                    children: [
                        t,
                        (0, r.jsx)('div', {
                            className: c.content,
                            children: Array(o().random(3, 8))
                                .fill(null)
                                .map(() => o().random(30, 80))
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        p,
                                        {
                                            width: e,
                                            opacity: 0.06
                                        },
                                        t
                                    )
                                )
                        })
                    ]
                }),
                null != a &&
                    (0, r.jsx)('div', {
                        className: c.attachmentContainer,
                        children: (0, r.jsx)('div', {
                            className: c.attachment,
                            style: (function (e) {
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
                            })({ opacity: 0.03 }, a)
                        })
                    })
            ]
        })
    );
}
let f = 44,
    m = 22,
    g = 26,
    b = 26,
    _ = 6;
function C(e) {
    let { messages: t, groupSpacing: n = 0, compact: i = !1, attachmentSpecs: l, className: a } = e,
        s = null != l ? (l.last ? t - 1 : o().random(0, t - 1)) : -1,
        c = o().random(80, 120),
        d = o().random(0.1, 0.2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, r.jsx)(
                    h,
                    {
                        compact: i,
                        className: a,
                        usernameWidth: c,
                        usernameOpacity: d,
                        groupStart: 0 === t,
                        attachmentSpecs: t === s ? l : void 0,
                        style: 0 === t ? { marginTop: u(n) } : void 0
                    },
                    t
                )
            )
    });
}

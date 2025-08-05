n.d(t, {
    M9: () => _,
    Pb: () => y,
    XX: () => b,
    ZP: () => O,
    ZT: () => f,
    iv: () => g,
    pk: () => m
});
var r = n(255367);
n(73800);
var o = n(120356),
    l = n.n(o),
    i = n(392711),
    a = n.n(i),
    c = n(481060),
    s = n(881448);
function d(e) {
    return ''.concat(e / 16, 'rem');
}
function u() {
    return (0, r.jsx)('div', {
        className: s.avatar,
        style: { opacity: 0.08 }
    });
}
function f(e) {
    let { width: t, height: n, opacity: o, className: i } = e,
        c = {
            width: d(t),
            opacity: null != o ? o : a().random(0.02, 0.08)
        };
    return (
        null != n && (c.height = d(n)),
        (0, r.jsx)('div', {
            className: l()(i, { [s.blob]: !0 }),
            style: c
        })
    );
}
function p(e) {
    let t,
        { groupStart: n = !1, compact: o = !1, attachmentSpecs: i, usernameWidth: d, usernameOpacity: p, className: m, style: b } = e,
        g = o ? 50 : a().random(40, 50);
    return (
        !o && n
            ? (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(u, {}),
                      (0, r.jsx)(c.H, {
                          className: s.header,
                          children: (0, r.jsx)(f, {
                              width: d,
                              opacity: p,
                              className: s.__invalid_username
                          })
                      })
                  ]
              }))
            : o &&
              (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                      o &&
                          (0, r.jsx)(f, {
                              width: g,
                              className: l()({
                                  [s.compactTimestamp]: !0,
                                  [s.hidden]: !n
                              })
                          }),
                      (0, r.jsx)(c.H, {
                          className: s.header,
                          children: (0, r.jsx)(f, {
                              width: d,
                              opacity: p
                          })
                      })
                  ]
              })),
        (0, r.jsxs)('div', {
            'aria-hidden': !0,
            className: l()(m, {
                [s.wrapper]: !0,
                [s.compact]: o,
                [s.cozy]: !o
            }),
            style: b,
            children: [
                (0, r.jsxs)('div', {
                    className: s.contents,
                    children: [
                        t,
                        (0, r.jsx)('div', {
                            className: s.content,
                            children: Array(a().random(3, 8))
                                .fill(null)
                                .map(() => a().random(30, 80))
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        f,
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
                null != i &&
                    (0, r.jsx)('div', {
                        className: s.attachmentContainer,
                        children: (0, r.jsx)('div', {
                            className: s.attachment,
                            style: (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({ opacity: 0.03 }, i)
                        })
                    })
            ]
        })
    );
}
let m = 44,
    b = 22,
    g = 26,
    y = 26,
    _ = 6;
function O(e) {
    let { messages: t, groupSpacing: n = 0, compact: o = !1, attachmentSpecs: l, className: i } = e,
        c = null != l ? (l.last ? t - 1 : a().random(0, t - 1)) : -1,
        s = a().random(80, 120),
        u = a().random(0.1, 0.2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, r.jsx)(
                    p,
                    {
                        compact: o,
                        className: i,
                        usernameWidth: s,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === c ? l : void 0,
                        style: 0 === t ? { marginTop: d(n) } : void 0
                    },
                    t
                )
            )
    });
}

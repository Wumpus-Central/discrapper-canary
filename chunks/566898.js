n.d(t, {
    M9: () => y,
    Pb: () => _,
    XX: () => b,
    ZP: () => g,
    ZT: () => f,
    iv: () => h,
    pk: () => m
});
var o = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    c = n(392711),
    a = n.n(c),
    l = n(481060),
    s = n(881448);
function d(e) {
    return ''.concat(e / 16, 'rem');
}
function u() {
    return (0, o.jsx)('div', {
        className: s.avatar,
        style: { opacity: 0.08 }
    });
}
function f(e) {
    let { width: t, opacity: n, className: r } = e;
    return (0, o.jsx)('div', {
        className: i()(r, { [s.blob]: !0 }),
        style: {
            width: d(t),
            opacity: null != n ? n : a().random(0.02, 0.08)
        }
    });
}
function p(e) {
    let t,
        { groupStart: n = !1, compact: r = !1, attachmentSpecs: c, usernameWidth: d, usernameOpacity: p, className: m, style: b } = e,
        h = r ? 50 : a().random(40, 50);
    return (
        !r && n
            ? (t = (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(u, {}),
                      (0, o.jsx)(l.H, {
                          className: s.header,
                          children: (0, o.jsx)(f, {
                              width: d,
                              opacity: p,
                              className: s.__invalid_username
                          })
                      })
                  ]
              }))
            : r &&
              (t = (0, o.jsxs)(o.Fragment, {
                  children: [
                      r &&
                          (0, o.jsx)(f, {
                              width: h,
                              className: i()({
                                  [s.compactTimestamp]: !0,
                                  [s.hidden]: !n
                              })
                          }),
                      (0, o.jsx)(l.H, {
                          className: s.header,
                          children: (0, o.jsx)(f, {
                              width: d,
                              opacity: p
                          })
                      })
                  ]
              })),
        (0, o.jsxs)('div', {
            'aria-hidden': !0,
            className: i()(m, {
                [s.wrapper]: !0,
                [s.compact]: r,
                [s.cozy]: !r
            }),
            style: b,
            children: [
                (0, o.jsxs)('div', {
                    className: s.contents,
                    children: [
                        t,
                        (0, o.jsx)('div', {
                            className: s.content,
                            children: Array(a().random(3, 8))
                                .fill(null)
                                .map(() => a().random(30, 80))
                                .map((e, t) =>
                                    (0, o.jsx)(
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
                null != c &&
                    (0, o.jsx)('div', {
                        className: s.attachmentContainer,
                        children: (0, o.jsx)('div', {
                            className: s.attachment,
                            style: (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        o = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (o = o.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        o.forEach(function (t) {
                                            var o;
                                            (o = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: o,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = o);
                                        });
                                }
                                return e;
                            })({ opacity: 0.03 }, c)
                        })
                    })
            ]
        })
    );
}
let m = 44,
    b = 22,
    h = 26,
    _ = 26,
    y = 6;
function g(e) {
    let { messages: t, groupSpacing: n = 0, compact: r = !1, attachmentSpecs: i, className: c } = e,
        l = null != i ? (i.last ? t - 1 : a().random(0, t - 1)) : -1,
        s = a().random(80, 120),
        u = a().random(0.1, 0.2);
    return (0, o.jsx)(o.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, o.jsx)(
                    p,
                    {
                        compact: r,
                        className: c,
                        usernameWidth: s,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === l ? i : void 0,
                        style: 0 === t ? { marginTop: d(n) } : void 0
                    },
                    t
                )
            )
    });
}

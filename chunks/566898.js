n.d(t, {
    M9: () => _,
    Pb: () => y,
    XX: () => b,
    ZP: () => h,
    ZT: () => f,
    iv: () => x,
    pk: () => m
});
var o = n(255367);
n(73800);
var r = n(120356),
    i = n.n(r),
    c = n(392711),
    l = n.n(c),
    a = n(481060),
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
    let { width: t, height: n, opacity: r, className: c } = e,
        a = {
            width: d(t),
            opacity: null != r ? r : l().random(0.02, 0.08)
        };
    return (
        null != n && (a.height = d(n)),
        (0, o.jsx)('div', {
            className: i()(c, { [s.blob]: !0 }),
            style: a
        })
    );
}
function p(e) {
    let t,
        { groupStart: n = !1, compact: r = !1, attachmentSpecs: c, usernameWidth: d, usernameOpacity: p, className: m, style: b } = e,
        x = r ? 50 : l().random(40, 50);
    return (
        !r && n
            ? (t = (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(u, {}),
                      (0, o.jsx)(a.H, {
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
                              width: x,
                              className: i()({
                                  [s.compactTimestamp]: !0,
                                  [s.hidden]: !n
                              })
                          }),
                      (0, o.jsx)(a.H, {
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
                            children: Array(l().random(3, 8))
                                .fill(null)
                                .map(() => l().random(30, 80))
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
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (o = o.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        o.forEach(function (t) {
                                            var o;
                                            ((o = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: o,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = o));
                                        }));
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
    x = 26,
    y = 26,
    _ = 6;
function h(e) {
    let { messages: t, groupSpacing: n = 0, compact: r = !1, attachmentSpecs: i, className: c } = e,
        a = null != i ? (i.last ? t - 1 : l().random(0, t - 1)) : -1,
        s = l().random(80, 120),
        u = l().random(0.1, 0.2);
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
                        attachmentSpecs: t === a ? i : void 0,
                        style: 0 === t ? { marginTop: d(n) } : void 0
                    },
                    t
                )
            )
    });
}

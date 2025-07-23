t.d(l, {
    M9: () => v,
    Pb: () => f,
    XX: () => g,
    ZP: () => y,
    ZT: () => h,
    iv: () => b,
    pk: () => p
});
var r = t(255367);
t(73800);
var n = t(120356),
    i = t.n(n),
    s = t(392711),
    a = t.n(s),
    o = t(481060),
    d = t(881448);
function u(e) {
    return ''.concat(e / 16, 'rem');
}
function c() {
    return (0, r.jsx)('div', {
        className: d.avatar,
        style: { opacity: 0.08 }
    });
}
function h(e) {
    let { width: l, height: t, opacity: n, className: s } = e,
        o = {
            width: u(l),
            opacity: null != n ? n : a().random(0.02, 0.08)
        };
    return (
        null != t && (o.height = u(t)),
        (0, r.jsx)('div', {
            className: i()(s, { [d.blob]: !0 }),
            style: o
        })
    );
}
function m(e) {
    let l,
        { groupStart: t = !1, compact: n = !1, attachmentSpecs: s, usernameWidth: u, usernameOpacity: m, className: p, style: g } = e,
        b = n ? 50 : a().random(40, 50);
    return (
        !n && t
            ? (l = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(c, {}),
                      (0, r.jsx)(o.H, {
                          className: d.header,
                          children: (0, r.jsx)(h, {
                              width: u,
                              opacity: m,
                              className: d.__invalid_username
                          })
                      })
                  ]
              }))
            : n &&
              (l = (0, r.jsxs)(r.Fragment, {
                  children: [
                      n &&
                          (0, r.jsx)(h, {
                              width: b,
                              className: i()({
                                  [d.compactTimestamp]: !0,
                                  [d.hidden]: !t
                              })
                          }),
                      (0, r.jsx)(o.H, {
                          className: d.header,
                          children: (0, r.jsx)(h, {
                              width: u,
                              opacity: m
                          })
                      })
                  ]
              })),
        (0, r.jsxs)('div', {
            'aria-hidden': !0,
            className: i()(p, {
                [d.wrapper]: !0,
                [d.compact]: n,
                [d.cozy]: !n
            }),
            style: g,
            children: [
                (0, r.jsxs)('div', {
                    className: d.contents,
                    children: [
                        l,
                        (0, r.jsx)('div', {
                            className: d.content,
                            children: Array(a().random(3, 8))
                                .fill(null)
                                .map(() => a().random(30, 80))
                                .map((e, l) =>
                                    (0, r.jsx)(
                                        h,
                                        {
                                            width: e,
                                            opacity: 0.06
                                        },
                                        l
                                    )
                                )
                        })
                    ]
                }),
                null != s &&
                    (0, r.jsx)('div', {
                        className: d.attachmentContainer,
                        children: (0, r.jsx)('div', {
                            className: d.attachment,
                            style: (function (e) {
                                for (var l = 1; l < arguments.length; l++) {
                                    var t = null != arguments[l] ? arguments[l] : {},
                                        r = Object.keys(t);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (l) {
                                            var r;
                                            ((r = t[l]),
                                                l in e
                                                    ? Object.defineProperty(e, l, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[l] = r));
                                        }));
                                }
                                return e;
                            })({ opacity: 0.03 }, s)
                        })
                    })
            ]
        })
    );
}
let p = 44,
    g = 22,
    b = 26,
    f = 26,
    v = 6;
function y(e) {
    let { messages: l, groupSpacing: t = 0, compact: n = !1, attachmentSpecs: i, className: s } = e,
        o = null != i ? (i.last ? l - 1 : a().random(0, l - 1)) : -1,
        d = a().random(80, 120),
        c = a().random(0.1, 0.2);
    return (0, r.jsx)(r.Fragment, {
        children: Array(l)
            .fill(null)
            .map((e, l) =>
                (0, r.jsx)(
                    m,
                    {
                        compact: n,
                        className: s,
                        usernameWidth: d,
                        usernameOpacity: c,
                        groupStart: 0 === l,
                        attachmentSpecs: l === o ? i : void 0,
                        style: 0 === l ? { marginTop: u(t) } : void 0
                    },
                    l
                )
            )
    });
}

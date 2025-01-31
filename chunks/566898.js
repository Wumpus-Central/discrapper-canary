n.d(t, {
    M9: () => C,
    Pb: () => _,
    XX: () => f,
    ZP: () => x,
    ZT: () => h,
    iv: () => g,
    pk: () => m
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(392711),
    s = n.n(r),
    o = n(481060),
    c = n(610654);
function d(e) {
    return ''.concat(e / 16, 'rem');
}
function u() {
    return (0, i.jsx)('div', {
        className: c.avatar,
        style: { opacity: 0.08 }
    });
}
function h(e) {
    let { width: t, opacity: n, className: l } = e;
    return (0, i.jsx)('div', {
        className: a()(l, { [c.blob]: !0 }),
        style: {
            width: d(t),
            opacity: null != n ? n : s().random(0.02, 0.08)
        }
    });
}
function p(e) {
    let t,
        { groupStart: n = !1, compact: l = !1, attachmentSpecs: r, usernameWidth: d, usernameOpacity: p, className: m, style: f } = e,
        g = l ? 50 : s().random(40, 50);
    return (
        !l && n
            ? (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(u, {}),
                      (0, i.jsx)(o.H, {
                          className: c.header,
                          children: (0, i.jsx)(h, {
                              width: d,
                              opacity: p,
                              className: c.__invalid_username
                          })
                      })
                  ]
              }))
            : l &&
              (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                      l &&
                          (0, i.jsx)(h, {
                              width: g,
                              className: a()({
                                  [c.compactTimestamp]: !0,
                                  [c.hidden]: !n
                              })
                          }),
                      (0, i.jsx)(o.H, {
                          className: c.header,
                          children: (0, i.jsx)(h, {
                              width: d,
                              opacity: p
                          })
                      })
                  ]
              })),
        (0, i.jsxs)('div', {
            'aria-hidden': !0,
            className: a()(m, {
                [c.wrapper]: !0,
                [c.compact]: l,
                [c.cozy]: !l
            }),
            style: f,
            children: [
                (0, i.jsxs)('div', {
                    className: c.contents,
                    children: [
                        t,
                        (0, i.jsx)('div', {
                            className: c.content,
                            children: Array(s().random(3, 8))
                                .fill(null)
                                .map(() => s().random(30, 80))
                                .map((e, t) =>
                                    (0, i.jsx)(
                                        h,
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
                null != r &&
                    (0, i.jsx)('div', {
                        className: c.attachmentContainer,
                        children: (0, i.jsx)('div', {
                            className: c.attachment,
                            style: {
                                opacity: 0.03,
                                ...r
                            }
                        })
                    })
            ]
        })
    );
}
let m = 44,
    f = 22,
    g = 26,
    _ = 26,
    C = 6;
function x(e) {
    let { messages: t, groupSpacing: n = 0, compact: l = !1, attachmentSpecs: a, className: r } = e,
        o = null != a ? (a.last ? t - 1 : s().random(0, t - 1)) : -1,
        c = s().random(80, 120),
        u = s().random(0.1, 0.2);
    return (0, i.jsx)(i.Fragment, {
        children: Array(t)
            .fill(null)
            .map((e, t) =>
                (0, i.jsx)(
                    p,
                    {
                        compact: l,
                        className: r,
                        usernameWidth: c,
                        usernameOpacity: u,
                        groupStart: 0 === t,
                        attachmentSpecs: t === o ? a : void 0,
                        style: 0 === t ? { marginTop: d(n) } : void 0
                    },
                    t
                )
            )
    });
}

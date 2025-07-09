e.d(n, {
    Z: () => _,
    v: () => u
});
var i = e(255367);
e(73800);
var l = e(755721),
    a = e(481060),
    s = e(600164),
    r = e(626135),
    d = e(109983),
    c = e(675999),
    o = e(981631),
    m = e(388032),
    C = e(661711);
let p = 0.5 > Math.random();
function u(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: u, hasFooter: _ = !0 } = t,
        L = (0, i.jsx)(l.zx, {
            className: C.backButton,
            look: l.zx.Looks.BLANK,
            size: l.zx.Sizes.MIN,
            onClick: e,
            children: m.intl.string(m.t['13/7kZ'])
        });
    function g(t) {
        (r.default.track(o.rMx.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === c.lr.COMMUNITY
        }),
            u(t));
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.xBx, {
                    direction: s.Z.Direction.VERTICAL,
                    className: C.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: C.title,
                            variant: 'heading-xl/semibold',
                            children: m.intl.string(m.t.f3MvGR)
                        }),
                        (0, i.jsx)(a.Text, {
                            className: C.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: m.intl.string(m.t['nOzc7+'])
                        }),
                        null != n &&
                            (0, i.jsx)(a.olH, {
                                className: C.closeButton,
                                onClick: n
                            })
                    ]
                }),
                (0, i.jsxs)(a.hzk, {
                    className: C.optionsList,
                    children: [
                        p
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          icon: a.Nye,
                                          message: m.intl.string(m.t.uE7zcn),
                                          onClick: () => g(c.lr.FRIENDS)
                                      }),
                                      (0, i.jsx)(d.Z, {
                                          icon: a.q3d,
                                          message: m.intl.string(m.t.h9Q1lJ),
                                          onClick: () => g(c.lr.COMMUNITY)
                                      })
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          icon: a.q3d,
                                          message: m.intl.string(m.t.h9Q1lJ),
                                          onClick: () => g(c.lr.COMMUNITY)
                                      }),
                                      (0, i.jsx)(d.Z, {
                                          icon: a.Nye,
                                          message: m.intl.string(m.t.uE7zcn),
                                          onClick: () => g(c.lr.FRIENDS)
                                      })
                                  ]
                              }),
                        (0, i.jsx)(a.Text, {
                            className: C.skip,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: m.intl.format(m.t['SMc+Gx'], { onSkip: () => g(null) })
                        })
                    ]
                }),
                _ &&
                    (0, i.jsx)(a.mzw, {
                        justify: s.Z.Justify.BETWEEN,
                        children: L
                    })
            ]
        }),
        footer: L
    };
}
function _(t) {
    let { content: n } = u(t);
    return n;
}

e.d(n, {
    Z: () => T,
    v: () => x
});
var i = e(200651);
e(192379);
var l = e(120356),
    s = e.n(l),
    a = e(481060),
    r = e(600164),
    d = e(540059),
    o = e(626135),
    c = e(109983),
    C = e(675999),
    m = e(981631),
    p = e(388032),
    u = e(644615),
    L = e(43236),
    _ = e(142390);
let g = 0.5 > Math.random();
function x(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: l, hasFooter: x = !0 } = t,
        T = (0, d.Q3)('CreationIntentSlide'),
        E = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(a.zxk, {
                className: u.backButton,
                look: a.zxk.Looks.BLANK,
                size: a.zxk.Sizes.MIN,
                onClick: e,
                children: p.intl.string(p.t['13/7kZ'])
            })
        });
    function h(t) {
        o.default.track(m.rMx.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === C.lr.COMMUNITY
        }),
            l(t);
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.xBx, {
                    direction: r.Z.Direction.VERTICAL,
                    className: u.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: s()(u.title),
                            variant: 'heading-xl/semibold',
                            children: p.intl.string(p.t.f3MvGR)
                        }),
                        (0, i.jsx)(a.Text, {
                            className: u.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: p.intl.string(p.t['nOzc7+'])
                        }),
                        null != n &&
                            (0, i.jsx)(a.olH, {
                                className: u.closeButton,
                                onClick: n
                            })
                    ]
                }),
                (0, i.jsxs)(a.hzk, {
                    className: u.optionsList,
                    children: [
                        g
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.Z, {
                                          icon: T ? a.Nye : L,
                                          message: p.intl.string(p.t.uE7zcn),
                                          onClick: () => h(C.lr.FRIENDS)
                                      }),
                                      (0, i.jsx)(c.Z, {
                                          icon: T ? a.q3d : _,
                                          message: p.intl.string(p.t.h9Q1lJ),
                                          onClick: () => h(C.lr.COMMUNITY)
                                      })
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.Z, {
                                          icon: T ? a.q3d : _,
                                          message: p.intl.string(p.t.h9Q1lJ),
                                          onClick: () => h(C.lr.COMMUNITY)
                                      }),
                                      (0, i.jsx)(c.Z, {
                                          icon: T ? a.Nye : L,
                                          message: p.intl.string(p.t.uE7zcn),
                                          onClick: () => h(C.lr.FRIENDS)
                                      })
                                  ]
                              }),
                        (0, i.jsx)(a.Text, {
                            className: u.skip,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: p.intl.format(p.t['SMc+Gx'], { onSkip: () => h(null) })
                        })
                    ]
                }),
                x &&
                    (0, i.jsx)(a.mzw, {
                        justify: r.Z.Justify.BETWEEN,
                        children: E
                    })
            ]
        }),
        footer: E
    };
}
function T(t) {
    let { content: n } = x(t);
    return n;
}

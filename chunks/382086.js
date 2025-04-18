n.d(t, {
    Z: () => _,
    v: () => L
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(600164),
    l = n(540059),
    r = n(626135),
    d = n(109983),
    c = n(675999),
    o = n(981631),
    C = n(388032),
    m = n(661711),
    p = n(43236),
    N = n(142390);
let u = 0.5 > Math.random();
function L(e) {
    let { onClose: t, onBack: n, onCreationIntentChosen: L, hasFooter: _ = !0 } = e,
        g = (0, l.Q3)('CreationIntentSlide'),
        x = (0, i.jsx)(s.zxk, {
            className: m.backButton,
            look: s.zxk.Looks.BLANK,
            size: s.zxk.Sizes.MIN,
            onClick: n,
            children: C.NW.string(C.t['13/7kZ'])
        });
    function T(e) {
        r.default.track(o.rMx.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == e,
            is_community: e === c.lr.COMMUNITY
        }),
            L(e);
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.xBx, {
                    direction: a.Z.Direction.VERTICAL,
                    className: m.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.X6q, {
                            className: m.title,
                            variant: 'heading-xl/semibold',
                            children: C.NW.string(C.t.f3MvGR)
                        }),
                        (0, i.jsx)(s.Text, {
                            className: m.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: C.NW.string(C.t['nOzc7+'])
                        }),
                        null != t &&
                            (0, i.jsx)(s.olH, {
                                className: m.closeButton,
                                onClick: t
                            })
                    ]
                }),
                (0, i.jsxs)(s.hzk, {
                    className: m.optionsList,
                    children: [
                        u
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          icon: g ? s.Nye : p,
                                          message: C.NW.string(C.t.uE7zcn),
                                          onClick: () => T(c.lr.FRIENDS)
                                      }),
                                      (0, i.jsx)(d.Z, {
                                          icon: g ? s.q3d : N,
                                          message: C.NW.string(C.t.h9Q1lJ),
                                          onClick: () => T(c.lr.COMMUNITY)
                                      })
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          icon: g ? s.q3d : N,
                                          message: C.NW.string(C.t.h9Q1lJ),
                                          onClick: () => T(c.lr.COMMUNITY)
                                      }),
                                      (0, i.jsx)(d.Z, {
                                          icon: g ? s.Nye : p,
                                          message: C.NW.string(C.t.uE7zcn),
                                          onClick: () => T(c.lr.FRIENDS)
                                      })
                                  ]
                              }),
                        (0, i.jsx)(s.Text, {
                            className: m.skip,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: C.NW.format(C.t['SMc+Gx'], { onSkip: () => T(null) })
                        })
                    ]
                }),
                _ &&
                    (0, i.jsx)(s.mzw, {
                        justify: a.Z.Justify.BETWEEN,
                        children: x
                    })
            ]
        }),
        footer: x
    };
}
function _(e) {
    let { content: t } = L(e);
    return t;
}

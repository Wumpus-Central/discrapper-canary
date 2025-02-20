n.d(t, {
    Z: () => x,
    v: () => g
});
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(481060),
    r = n(600164),
    d = n(540059),
    o = n(626135),
    c = n(109983),
    C = n(675999),
    m = n(981631),
    p = n(388032),
    N = n(576630),
    u = n(43236),
    L = n(142390);
let _ = 0.5 > Math.random();
function g(e) {
    let { onClose: t, onBack: n, onCreationIntentChosen: s, hasFooter: g = !0 } = e,
        x = (0, d.Q3)('CreationIntentSlide'),
        T = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(l.zxk, {
                className: N.backButton,
                look: l.zxk.Looks.BLANK,
                size: l.zxk.Sizes.MIN,
                onClick: n,
                children: p.NW.string(p.t['13/7kZ'])
            })
        });
    function E(e) {
        o.default.track(m.rMx.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == e,
            is_community: e === C.lr.COMMUNITY
        }),
            s(e);
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.xBx, {
                    direction: r.Z.Direction.VERTICAL,
                    className: N.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            className: a()(N.title),
                            variant: 'heading-xl/semibold',
                            children: p.NW.string(p.t.f3MvGR)
                        }),
                        (0, i.jsx)(l.Text, {
                            className: N.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: p.NW.string(p.t['nOzc7+'])
                        }),
                        null != t &&
                            (0, i.jsx)(l.olH, {
                                className: N.closeButton,
                                onClick: t
                            })
                    ]
                }),
                (0, i.jsxs)(l.hzk, {
                    className: N.optionsList,
                    children: [
                        _
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.Z, {
                                          icon: x ? l.Nye : u,
                                          message: p.NW.string(p.t.uE7zcn),
                                          onClick: () => E(C.lr.FRIENDS)
                                      }),
                                      (0, i.jsx)(c.Z, {
                                          icon: x ? l.q3d : L,
                                          message: p.NW.string(p.t.h9Q1lJ),
                                          onClick: () => E(C.lr.COMMUNITY)
                                      })
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.Z, {
                                          icon: x ? l.q3d : L,
                                          message: p.NW.string(p.t.h9Q1lJ),
                                          onClick: () => E(C.lr.COMMUNITY)
                                      }),
                                      (0, i.jsx)(c.Z, {
                                          icon: x ? l.Nye : u,
                                          message: p.NW.string(p.t.uE7zcn),
                                          onClick: () => E(C.lr.FRIENDS)
                                      })
                                  ]
                              }),
                        (0, i.jsx)(l.Text, {
                            className: N.skip,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: p.NW.format(p.t['SMc+Gx'], { onSkip: () => E(null) })
                        })
                    ]
                }),
                g &&
                    (0, i.jsx)(l.mzw, {
                        justify: r.Z.Justify.BETWEEN,
                        children: T
                    })
            ]
        }),
        footer: T
    };
}
function x(e) {
    let { content: t } = g(e);
    return t;
}

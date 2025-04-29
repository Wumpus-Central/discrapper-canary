e.d(n, {
    Z: () => g,
    v: () => _
});
var i = e(255367);
e(73800);
var l = e(481060),
    s = e(600164),
    a = e(540059),
    r = e(626135),
    d = e(109983),
    c = e(675999),
    o = e(981631),
    C = e(388032),
    m = e(661711),
    p = e(43236),
    u = e(142390);
let L = 0.5 > Math.random();
function _(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: _, hasFooter: g = !0 } = t,
        x = (0, a.Q3)('CreationIntentSlide'),
        T = (0, i.jsx)(l.zxk, {
            className: m.backButton,
            look: l.zxk.Looks.BLANK,
            size: l.zxk.Sizes.MIN,
            onClick: e,
            children: C.intl.string(C.t['13/7kZ'])
        });
    function E(t) {
        r.default.track(o.rMx.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === c.lr.COMMUNITY
        }),
            _(t);
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.xBx, {
                    direction: s.Z.Direction.VERTICAL,
                    className: m.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            className: m.title,
                            variant: 'heading-xl/semibold',
                            children: C.intl.string(C.t.f3MvGR)
                        }),
                        (0, i.jsx)(l.Text, {
                            className: m.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: C.intl.string(C.t['nOzc7+'])
                        }),
                        null != n &&
                            (0, i.jsx)(l.olH, {
                                className: m.closeButton,
                                onClick: n
                            })
                    ]
                }),
                (0, i.jsxs)(l.hzk, {
                    className: m.optionsList,
                    children: [
                        L
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          icon: x ? l.Nye : p,
                                          message: C.intl.string(C.t.uE7zcn),
                                          onClick: () => E(c.lr.FRIENDS)
                                      }),
                                      (0, i.jsx)(d.Z, {
                                          icon: x ? l.q3d : u,
                                          message: C.intl.string(C.t.h9Q1lJ),
                                          onClick: () => E(c.lr.COMMUNITY)
                                      })
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          icon: x ? l.q3d : u,
                                          message: C.intl.string(C.t.h9Q1lJ),
                                          onClick: () => E(c.lr.COMMUNITY)
                                      }),
                                      (0, i.jsx)(d.Z, {
                                          icon: x ? l.Nye : p,
                                          message: C.intl.string(C.t.uE7zcn),
                                          onClick: () => E(c.lr.FRIENDS)
                                      })
                                  ]
                              }),
                        (0, i.jsx)(l.Text, {
                            className: m.skip,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: C.intl.format(C.t['SMc+Gx'], { onSkip: () => E(null) })
                        })
                    ]
                }),
                g &&
                    (0, i.jsx)(l.mzw, {
                        justify: s.Z.Justify.BETWEEN,
                        children: T
                    })
            ]
        }),
        footer: T
    };
}
function g(t) {
    let { content: n } = _(t);
    return n;
}

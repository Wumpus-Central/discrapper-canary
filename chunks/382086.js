e.d(n, {
    Z: () => u,
    v: () => p
});
var i = e(255367);
e(73800);
var l = e(481060),
    s = e(600164),
    a = e(626135),
    r = e(109983),
    d = e(675999),
    c = e(981631),
    o = e(388032),
    m = e(661711);
let C = 0.5 > Math.random();
function p(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: p, hasFooter: u = !0 } = t,
        _ = (0, i.jsx)(l.zxk, {
            className: m.backButton,
            look: l.zxk.Looks.BLANK,
            size: l.zxk.Sizes.MIN,
            onClick: e,
            children: o.intl.string(o.t['13/7kZ'])
        });
    function L(t) {
        (a.default.track(c.rMx.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === d.lr.COMMUNITY
        }),
            p(t));
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
                            children: o.intl.string(o.t.f3MvGR)
                        }),
                        (0, i.jsx)(l.Text, {
                            className: m.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: o.intl.string(o.t['nOzc7+'])
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
                        C
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(r.Z, {
                                          icon: l.Nye,
                                          message: o.intl.string(o.t.uE7zcn),
                                          onClick: () => L(d.lr.FRIENDS)
                                      }),
                                      (0, i.jsx)(r.Z, {
                                          icon: l.q3d,
                                          message: o.intl.string(o.t.h9Q1lJ),
                                          onClick: () => L(d.lr.COMMUNITY)
                                      })
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(r.Z, {
                                          icon: l.q3d,
                                          message: o.intl.string(o.t.h9Q1lJ),
                                          onClick: () => L(d.lr.COMMUNITY)
                                      }),
                                      (0, i.jsx)(r.Z, {
                                          icon: l.Nye,
                                          message: o.intl.string(o.t.uE7zcn),
                                          onClick: () => L(d.lr.FRIENDS)
                                      })
                                  ]
                              }),
                        (0, i.jsx)(l.Text, {
                            className: m.skip,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: o.intl.format(o.t['SMc+Gx'], { onSkip: () => L(null) })
                        })
                    ]
                }),
                u &&
                    (0, i.jsx)(l.mzw, {
                        justify: s.Z.Justify.BETWEEN,
                        children: _
                    })
            ]
        }),
        footer: _
    };
}
function u(t) {
    let { content: n } = p(t);
    return n;
}

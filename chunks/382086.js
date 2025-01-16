e.d(n, {
    Z: function () {
        return T;
    },
    v: function () {
        return L;
    }
});
var i = e(200651);
e(192379);
var l = e(120356),
    a = e.n(l),
    s = e(481060),
    r = e(600164),
    d = e(626135),
    o = e(109983),
    c = e(675999),
    u = e(981631),
    C = e(388032),
    m = e(884017),
    p = e(43236),
    g = e(142390);
let _ = 0.5 > Math.random();
function L(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: l, hasFooter: L = !0 } = t,
        T = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(s.Button, {
                className: m.backButton,
                look: s.Button.Looks.BLANK,
                size: s.Button.Sizes.MIN,
                onClick: e,
                children: C.intl.string(C.t['13/7kZ'])
            })
        });
    function x(t) {
        d.default.track(u.rMx.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === c.lr.COMMUNITY
        }),
            l(t);
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.ModalHeader, {
                    direction: r.Z.Direction.VERTICAL,
                    className: m.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: a()(m.title),
                            variant: 'heading-xl/semibold',
                            children: C.intl.string(C.t.f3MvGR)
                        }),
                        (0, i.jsx)(s.Text, {
                            className: m.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: C.intl.string(C.t['nOzc7+'])
                        }),
                        null != n &&
                            (0, i.jsx)(s.ModalCloseButton, {
                                className: m.closeButton,
                                onClick: n
                            })
                    ]
                }),
                (0, i.jsxs)(s.ModalContent, {
                    className: m.optionsList,
                    children: [
                        _
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(o.Z, {
                                          icon: p,
                                          message: C.intl.string(C.t.uE7zcn),
                                          onClick: () => x(c.lr.FRIENDS)
                                      }),
                                      (0, i.jsx)(o.Z, {
                                          icon: g,
                                          message: C.intl.string(C.t.h9Q1lJ),
                                          onClick: () => x(c.lr.COMMUNITY)
                                      })
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(o.Z, {
                                          icon: g,
                                          message: C.intl.string(C.t.h9Q1lJ),
                                          onClick: () => x(c.lr.COMMUNITY)
                                      }),
                                      (0, i.jsx)(o.Z, {
                                          icon: p,
                                          message: C.intl.string(C.t.uE7zcn),
                                          onClick: () => x(c.lr.FRIENDS)
                                      })
                                  ]
                              }),
                        (0, i.jsx)(s.Text, {
                            className: m.skip,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: C.intl.format(C.t['SMc+Gx'], { onSkip: () => x(null) })
                        })
                    ]
                }),
                L &&
                    (0, i.jsx)(s.ModalFooter, {
                        justify: r.Z.Justify.BETWEEN,
                        children: T
                    })
            ]
        }),
        footer: T
    };
}
function T(t) {
    let { content: n } = L(t);
    return n;
}

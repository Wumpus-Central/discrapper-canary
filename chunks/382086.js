e.d(n, {
    Z: function () {
        return E;
    },
    v: function () {
        return T;
    }
});
var i = e(200651);
e(192379);
var l = e(120356),
    a = e.n(l),
    s = e(481060),
    r = e(600164),
    d = e(540059),
    o = e(626135),
    c = e(109983),
    u = e(675999),
    C = e(981631),
    m = e(388032),
    p = e(884017),
    L = e(43236),
    g = e(142390);
let _ = 0.5 > Math.random();
function T(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: l, hasFooter: T = !0 } = t,
        E = (0, d.Q3)('CreationIntentSlide'),
        I = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(s.Button, {
                className: p.backButton,
                look: s.Button.Looks.BLANK,
                size: s.Button.Sizes.MIN,
                onClick: e,
                children: m.intl.string(m.t['13/7kZ'])
            })
        });
    function x(t) {
        o.default.track(C.rMx.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === u.lr.COMMUNITY
        }),
            l(t);
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.ModalHeader, {
                    direction: r.Z.Direction.VERTICAL,
                    className: p.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: a()(p.title),
                            variant: 'heading-xl/semibold',
                            children: m.intl.string(m.t.f3MvGR)
                        }),
                        (0, i.jsx)(s.Text, {
                            className: p.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: m.intl.string(m.t['nOzc7+'])
                        }),
                        null != n &&
                            (0, i.jsx)(s.ModalCloseButton, {
                                className: p.closeButton,
                                onClick: n
                            })
                    ]
                }),
                (0, i.jsxs)(s.ModalContent, {
                    className: p.optionsList,
                    children: [
                        _
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.Z, {
                                          icon: E ? s.SofaIllocon : L,
                                          message: m.intl.string(m.t.uE7zcn),
                                          onClick: () => x(u.lr.FRIENDS)
                                      }),
                                      (0, i.jsx)(c.Z, {
                                          icon: E ? s.GlobeIllocon : g,
                                          message: m.intl.string(m.t.h9Q1lJ),
                                          onClick: () => x(u.lr.COMMUNITY)
                                      })
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.Z, {
                                          icon: E ? s.GlobeIllocon : g,
                                          message: m.intl.string(m.t.h9Q1lJ),
                                          onClick: () => x(u.lr.COMMUNITY)
                                      }),
                                      (0, i.jsx)(c.Z, {
                                          icon: E ? s.SofaIllocon : L,
                                          message: m.intl.string(m.t.uE7zcn),
                                          onClick: () => x(u.lr.FRIENDS)
                                      })
                                  ]
                              }),
                        (0, i.jsx)(s.Text, {
                            className: p.skip,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: m.intl.format(m.t['SMc+Gx'], { onSkip: () => x(null) })
                        })
                    ]
                }),
                T &&
                    (0, i.jsx)(s.ModalFooter, {
                        justify: r.Z.Justify.BETWEEN,
                        children: I
                    })
            ]
        }),
        footer: I
    };
}
function E(t) {
    let { content: n } = T(t);
    return n;
}

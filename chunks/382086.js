e.d(n, {
    Z: () => g,
    v: () => u,
});
var i = e(54381);
e(473749);
var l = e(755721),
    a = e(481060),
    s = e(600164),
    r = e(626135),
    d = e(109983),
    c = e(675999),
    o = e(981631),
    C = e(388032),
    m = e(470816);
let p = 0.5 > Math.random();
function u(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: u, hasFooter: g = !0 } = t,
        _ = (0, i.jsx)(l.zx, {
            className: m.backButton,
            look: l.zx.Looks.BLANK,
            size: l.zx.Sizes.MIN,
            onClick: e,
            children: C.intl.string(C.t["13/7kX"]),
        });
    function L(t) {
        r.default.track(o.rMx.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === c.lr.COMMUNITY,
        }),
            u(t);
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.xBx, {
                    direction: s.Z.Direction.VERTICAL,
                    className: m.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            className: m.title,
                            variant: "heading-xl/semibold",
                            children: C.intl.string(C.t.f3MvGS),
                        }),
                        (0, i.jsx)(a.Text, {
                            className: m.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: C.intl.string(C.t.nOzc7w),
                        }),
                        null != n &&
                            (0, i.jsx)(a.olH, {
                                className: m.closeButton,
                                onClick: n,
                            }),
                    ],
                }),
                (0, i.jsxs)(a.hzk, {
                    className: m.optionsList,
                    children: [
                        p
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          icon: a.Nye,
                                          message: C.intl.string(C.t.uE7zcu),
                                          onClick: () => L(c.lr.FRIENDS),
                                      }),
                                      (0, i.jsx)(d.Z, {
                                          icon: a.q3d,
                                          message: C.intl.string(C.t.h9Q1lG),
                                          onClick: () => L(c.lr.COMMUNITY),
                                      }),
                                  ],
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          icon: a.q3d,
                                          message: C.intl.string(C.t.h9Q1lG),
                                          onClick: () => L(c.lr.COMMUNITY),
                                      }),
                                      (0, i.jsx)(d.Z, {
                                          icon: a.Nye,
                                          message: C.intl.string(C.t.uE7zcu),
                                          onClick: () => L(c.lr.FRIENDS),
                                      }),
                                  ],
                              }),
                        (0, i.jsx)(a.Text, {
                            className: m.skip,
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: C.intl.format(C.t["SMc+Gz"], { onSkip: () => L(null) }),
                        }),
                    ],
                }),
                g &&
                    (0, i.jsx)(a.mzw, {
                        justify: s.Z.Justify.BETWEEN,
                        children: _,
                    }),
            ],
        }),
        footer: _,
    };
}
function g(t) {
    let { content: n } = u(t);
    return n;
}

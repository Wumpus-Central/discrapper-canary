e.d(n, {
    Z: () => u,
    v: () => C,
});
var i = e(54381);
e(473749);
var a = e(755721),
    l = e(481060),
    s = e(600164),
    r = e(626135),
    d = e(109983),
    o = e(675999),
    c = e(981631),
    m = e(388032),
    p = e(470816);
let g = 0.5 > Math.random();
function C(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: C, hasFooter: u = !0 } = t,
        _ = (0, i.jsx)(a.zx, {
            "data-migration-pending": !0,
            className: p.backButton,
            look: a.zx.Looks.BLANK,
            size: a.zx.Sizes.MIN,
            onClick: e,
            children: m.intl.string(m.t["13/7kX"]),
        });
    function L(t) {
        r.default.track(c.rMx.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === o.lr.COMMUNITY,
        }),
            C(t);
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.xBx, {
                    "data-migration-pending": !0,
                    direction: s.Z.Direction.VERTICAL,
                    className: p.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            className: p.title,
                            variant: "heading-xl/semibold",
                            children: m.intl.string(m.t.f3MvGS),
                        }),
                        (0, i.jsx)(l.Text, {
                            className: p.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: m.intl.string(m.t.nOzc7w),
                        }),
                        null != n &&
                            (0, i.jsx)(l.olH, {
                                "data-migration-pending": !0,
                                className: p.closeButton,
                                onClick: n,
                            }),
                    ],
                }),
                (0, i.jsxs)(l.hzk, {
                    "data-migration-pending": !0,
                    className: p.optionsList,
                    children: [
                        g
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          icon: l.Nye,
                                          message: m.intl.string(m.t.uE7zcu),
                                          onClick: () => L(o.lr.FRIENDS),
                                      }),
                                      (0, i.jsx)(d.Z, {
                                          icon: l.q3d,
                                          message: m.intl.string(m.t.h9Q1lG),
                                          onClick: () => L(o.lr.COMMUNITY),
                                      }),
                                  ],
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.Z, {
                                          icon: l.q3d,
                                          message: m.intl.string(m.t.h9Q1lG),
                                          onClick: () => L(o.lr.COMMUNITY),
                                      }),
                                      (0, i.jsx)(d.Z, {
                                          icon: l.Nye,
                                          message: m.intl.string(m.t.uE7zcu),
                                          onClick: () => L(o.lr.FRIENDS),
                                      }),
                                  ],
                              }),
                        (0, i.jsx)(l.Text, {
                            className: p.skip,
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: m.intl.format(m.t["SMc+Gz"], { onSkip: () => L(null) }),
                        }),
                    ],
                }),
                u &&
                    (0, i.jsx)(l.mzw, {
                        "data-migration-pending": !0,
                        justify: s.Z.Justify.BETWEEN,
                        children: _,
                    }),
            ],
        }),
        footer: _,
    };
}
function u(t) {
    let { content: n } = C(t);
    return n;
}

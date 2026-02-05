n.d(e, { A: () => _, u: () => g });
var i = n(627968);
n(64700);
var a = n(421380),
    r = n(397927),
    l = n(235986),
    s = n(954571),
    d = n(878314),
    c = n(819638),
    o = n(652215),
    m = n(985018),
    p = n(308349);
let C = 0.5 > Math.random();
function g(t) {
    let { onClose: e, onBack: n, onCreationIntentChosen: g, hasFooter: _ = !0 } = t,
        L = (0, i.jsx)(a.$n, {
            "data-migration-pending": !0,
            className: p.Gv,
            look: a.$n.Looks.BLANK,
            size: a.$n.Sizes.MIN,
            onClick: n,
            children: m.intl.string(m.t["13/7kX"]),
        });
    function u(t) {
        s.default.track(o.HAw.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === c.IR.COMMUNITY,
        }),
            g(t);
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(r.rQ0, {
                    "data-migration-pending": !0,
                    direction: l.A.Direction.VERTICAL,
                    className: p.wx,
                    separator: !1,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            className: p.DD,
                            variant: "heading-xl/semibold",
                            children: m.intl.string(m.t.f3MvGS),
                        }),
                        (0, i.jsx)(r.Text, {
                            className: p.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: m.intl.string(m.t.nOzc7w),
                        }),
                        null != e && (0, i.jsx)(r.s_y, { "data-migration-pending": !0, className: p.b, onClick: e }),
                    ],
                }),
                (0, i.jsxs)(r.$mQ, {
                    "data-migration-pending": !0,
                    className: p.f9,
                    children: [
                        C
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.A, {
                                          icon: r.i5z,
                                          message: m.intl.string(m.t.uE7zcu),
                                          onClick: () => u(c.IR.FRIENDS),
                                      }),
                                      (0, i.jsx)(d.A, {
                                          icon: r.EU0,
                                          message: m.intl.string(m.t.h9Q1lG),
                                          onClick: () => u(c.IR.COMMUNITY),
                                      }),
                                  ],
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.A, {
                                          icon: r.EU0,
                                          message: m.intl.string(m.t.h9Q1lG),
                                          onClick: () => u(c.IR.COMMUNITY),
                                      }),
                                      (0, i.jsx)(d.A, {
                                          icon: r.i5z,
                                          message: m.intl.string(m.t.uE7zcu),
                                          onClick: () => u(c.IR.FRIENDS),
                                      }),
                                  ],
                              }),
                        (0, i.jsx)(r.Text, {
                            className: p.iv,
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: m.intl.format(m.t["SMc+Gz"], { onSkip: () => u(null) }),
                        }),
                    ],
                }),
                _ && (0, i.jsx)(r.jlY, { "data-migration-pending": !0, justify: l.A.Justify.BETWEEN, children: L }),
            ],
        }),
        footer: L,
    };
}
function _(t) {
    let { content: e } = g(t);
    return e;
}

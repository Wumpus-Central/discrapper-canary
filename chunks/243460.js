n.d(e, { A: () => E, u: () => x });
var i = n(627968);
n(64700);
var a = n(862482),
    r = n(935462),
    s = n(534514),
    l = n(834730);
let d = "/assets/7f384b2c31f586cd.svg",
    c = "/assets/2f0ebe181e1cce00.svg";
var o = n(235986),
    m = n(954571),
    g = n(878314),
    p = n(819638),
    C = n(652215),
    _ = n(985018),
    L = n(394272);
let u = 0.5 > Math.random();
function x(t) {
    let { onClose: e, onBack: n, onCreationIntentChosen: x, hasFooter: E = !0 } = t,
        b = (0, i.jsx)(a.$n, {
            "data-migration-pending": !0,
            className: L.Gv,
            look: a.$n.Looks.BLANK,
            size: a.$n.Sizes.MIN,
            onClick: n,
            children: _.intl.string(_.t["13/7kX"]),
        });
    function T(t) {
        m.default.track(C.HAw.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === p.IR.COMMUNITY,
        }),
            x(t);
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(r.rQ, {
                    "data-migration-pending": !0,
                    direction: o.A.Direction.VERTICAL,
                    className: L.wx,
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.D, {
                            className: L.DD,
                            variant: "heading-xl/semibold",
                            children: _.intl.string(_.t.f3MvGS),
                        }),
                        (0, i.jsx)(l.E, {
                            className: L.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: _.intl.string(_.t.nOzc7w),
                        }),
                        null != e && (0, i.jsx)(r.s_, { "data-migration-pending": !0, className: L.b, onClick: e }),
                    ],
                }),
                (0, i.jsxs)(r.$m, {
                    "data-migration-pending": !0,
                    className: L.f9,
                    children: [
                        u
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.A, {
                                          icon: d,
                                          message: _.intl.string(_.t.uE7zcu),
                                          onClick: () => T(p.IR.FRIENDS),
                                      }),
                                      (0, i.jsx)(g.A, {
                                          icon: c,
                                          message: _.intl.string(_.t.h9Q1lG),
                                          onClick: () => T(p.IR.COMMUNITY),
                                      }),
                                  ],
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.A, {
                                          icon: c,
                                          message: _.intl.string(_.t.h9Q1lG),
                                          onClick: () => T(p.IR.COMMUNITY),
                                      }),
                                      (0, i.jsx)(g.A, {
                                          icon: d,
                                          message: _.intl.string(_.t.uE7zcu),
                                          onClick: () => T(p.IR.FRIENDS),
                                      }),
                                  ],
                              }),
                        (0, i.jsx)(l.E, {
                            className: L.iv,
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: _.intl.format(_.t["SMc+Gz"], { onSkip: () => T(null) }),
                        }),
                    ],
                }),
                E && (0, i.jsx)(r.jl, { "data-migration-pending": !0, justify: o.A.Justify.BETWEEN, children: b }),
            ],
        }),
        footer: b,
    };
}
function E(t) {
    let { content: e } = x(t);
    return e;
}

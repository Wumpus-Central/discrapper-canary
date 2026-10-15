e.d(n, { A: () => G, u: () => b });
var i = e(477900);
e(582128);
var a = e(935462),
    r = e(821609),
    l = e(297264),
    s = e(834730);
let d = "/assets/7f384b2c31f586cd.svg",
    c = "/assets/2f0ebe181e1cce00.svg";
var p = e(235986),
    m = e(174459),
    _ = e(878314),
    g = e(819638),
    o = e(652215),
    E = e(105292),
    C = e(911475);
let T = 0.5 > Math.random();
function b(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: b, hasFooter: G = !0 } = t,
        I = (0, i.jsx)(r.$, { variant: "secondary", fullWidth: !0, text: E.intl.string(E.t["13/7kX"]), onClick: e });
    function D(t) {
        (m.default.track(o.HAw.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === g.IR.COMMUNITY,
        }),
            b(t));
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.rQ, {
                    "data-migration-pending": !0,
                    direction: p.A.Direction.VERTICAL,
                    className: C.wx,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.D, {
                            className: C.DD,
                            variant: "heading-xl/semibold",
                            children: E.intl.string(E.t.f3MvGS),
                        }),
                        (0, i.jsx)(s.E, {
                            className: C.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: E.intl.string(E.t.nOzc7w),
                        }),
                        null != n && (0, i.jsx)(a.s_, { "data-migration-pending": !0, className: C.b, onClick: n }),
                    ],
                }),
                (0, i.jsxs)(a.$m, {
                    "data-migration-pending": !0,
                    scrollbarGutter: !1,
                    className: C.f9,
                    disableFocusRingScope: !0,
                    children: [
                        T
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(_.A, {
                                          icon: d,
                                          message: E.intl.string(E.t.uE7zcu),
                                          onClick: () => D(g.IR.FRIENDS),
                                      }),
                                      (0, i.jsx)(_.A, {
                                          icon: c,
                                          message: E.intl.string(E.t.h9Q1lG),
                                          onClick: () => D(g.IR.COMMUNITY),
                                      }),
                                  ],
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(_.A, {
                                          icon: c,
                                          message: E.intl.string(E.t.h9Q1lG),
                                          onClick: () => D(g.IR.COMMUNITY),
                                      }),
                                      (0, i.jsx)(_.A, {
                                          icon: d,
                                          message: E.intl.string(E.t.uE7zcu),
                                          onClick: () => D(g.IR.FRIENDS),
                                      }),
                                  ],
                              }),
                        (0, i.jsx)(s.E, {
                            className: C.iv,
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: E.intl.format(E.t["SMc+Gz"], { onSkip: () => D(null) }),
                        }),
                    ],
                }),
                G && (0, i.jsx)(a.jl, { "data-migration-pending": !0, justify: p.A.Justify.BETWEEN, children: I }),
            ],
        }),
        footer: I,
    };
}
function G(t) {
    let { content: n } = b(t);
    return n;
}

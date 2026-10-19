e.d(n, { A: () => I, u: () => G });
var i = e(477900);
e(582128);
var a = e(935462),
    r = e(331322),
    l = e(123292),
    s = e(297264),
    d = e(834730);
let c = "/assets/7f384b2c31f586cd.svg",
    p = "/assets/2f0ebe181e1cce00.svg";
var m = e(235986),
    _ = e(174459),
    g = e(878314),
    o = e(819638),
    E = e(652215),
    C = e(105292),
    T = e(911475);
let b = 0.5 > Math.random();
function G(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: G, hasFooter: I = !0 } = t,
        D = (0, i.jsx)(r.B, {
            fullWidth: !0,
            align: "center",
            justify: "start",
            className: T.qr,
            direction: "horizontal",
            children: (0, i.jsx)(l.Q, {
                variant: "secondary",
                size: "sm",
                textVariant: "text-sm/medium",
                text: C.intl.string(C.t["13/7kX"]),
                onClick: e,
            }),
        });
    function u(t) {
        (_.default.track(E.HAw.GUILD_CREATION_INTENT_SELECTED, {
            skipped: null == t,
            is_community: t === o.IR.COMMUNITY,
        }),
            G(t));
    }
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.rQ, {
                    "data-migration-pending": !0,
                    direction: m.A.Direction.VERTICAL,
                    className: T.wx,
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.D, {
                            className: T.DD,
                            variant: "heading-xl/semibold",
                            children: C.intl.string(C.t.f3MvGS),
                        }),
                        (0, i.jsx)(d.E, {
                            className: T.VA,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: C.intl.string(C.t.nOzc7w),
                        }),
                        null != n && (0, i.jsx)(a.s_, { "data-migration-pending": !0, className: T.b, onClick: n }),
                    ],
                }),
                (0, i.jsxs)(a.$m, {
                    "data-migration-pending": !0,
                    scrollbarGutter: !1,
                    className: T.f9,
                    disableFocusRingScope: !0,
                    children: [
                        b
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.A, {
                                          icon: c,
                                          message: C.intl.string(C.t.uE7zcu),
                                          onClick: () => u(o.IR.FRIENDS),
                                      }),
                                      (0, i.jsx)(g.A, {
                                          icon: p,
                                          message: C.intl.string(C.t.h9Q1lG),
                                          onClick: () => u(o.IR.COMMUNITY),
                                      }),
                                  ],
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.A, {
                                          icon: p,
                                          message: C.intl.string(C.t.h9Q1lG),
                                          onClick: () => u(o.IR.COMMUNITY),
                                      }),
                                      (0, i.jsx)(g.A, {
                                          icon: c,
                                          message: C.intl.string(C.t.uE7zcu),
                                          onClick: () => u(o.IR.FRIENDS),
                                      }),
                                  ],
                              }),
                        (0, i.jsx)(d.E, {
                            className: T.iv,
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: C.intl.format(C.t["SMc+Gz"], { onSkip: () => u(null) }),
                        }),
                    ],
                }),
                I && (0, i.jsx)(a.jl, { "data-migration-pending": !0, children: D }),
            ],
        }),
        footer: D,
    };
}
function I(t) {
    let { content: n } = G(t);
    return n;
}

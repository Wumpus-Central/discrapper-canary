e.d(n, { A: () => I, u: () => G });
var i = e(477900);
e(582128);
var a = e(935462),
    r = e(331322),
    l = e(123292),
    s = e(534514),
    d = e(834730);
let c = "/assets/7f384b2c31f586cd.svg",
    p = "/assets/2f0ebe181e1cce00.svg";
var m = e(235986),
    _ = e(129230),
    g = e(878314),
    o = e(819638),
    E = e(652215),
    b = e(792996),
    C = e(911475);
let T = 0.5 > Math.random();
function G(t) {
    let { onClose: n, onBack: e, onCreationIntentChosen: G, hasFooter: I = !0 } = t,
        D = (0, i.jsx)(r.B, {
            fullWidth: !0,
            align: "center",
            justify: "start",
            className: C.qr,
            direction: "horizontal",
            children: (0, i.jsx)(l.Q, {
                variant: "secondary",
                size: "sm",
                textVariant: "body-sm/medium",
                text: b.intl.string(b.t["13/7kX"]),
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
                    className: C.wx,
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.D, {
                            className: C.DD,
                            variant: "heading-xl/semibold",
                            children: b.intl.string(b.t.f3MvGS),
                        }),
                        (0, i.jsx)(d.E, {
                            className: C.VA,
                            color: "text-default",
                            variant: "body-md/normal",
                            children: b.intl.string(b.t.nOzc7w),
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
                                      (0, i.jsx)(g.A, {
                                          icon: c,
                                          message: b.intl.string(b.t.uE7zcu),
                                          onClick: () => u(o.IR.FRIENDS),
                                      }),
                                      (0, i.jsx)(g.A, {
                                          icon: p,
                                          message: b.intl.string(b.t.h9Q1lG),
                                          onClick: () => u(o.IR.COMMUNITY),
                                      }),
                                  ],
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.A, {
                                          icon: p,
                                          message: b.intl.string(b.t.h9Q1lG),
                                          onClick: () => u(o.IR.COMMUNITY),
                                      }),
                                      (0, i.jsx)(g.A, {
                                          icon: c,
                                          message: b.intl.string(b.t.uE7zcu),
                                          onClick: () => u(o.IR.FRIENDS),
                                      }),
                                  ],
                              }),
                        (0, i.jsx)(d.E, {
                            className: C.iv,
                            color: "text-default",
                            variant: "body-sm/normal",
                            children: b.intl.format(b.t["SMc+Gz"], { onSkip: () => u(null) }),
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

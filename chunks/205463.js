e.d(o, { default: () => P });
var r = e(627968),
    n = e(64700),
    _ = e(189213),
    i = e(964486),
    a = e(954571),
    l = e(96304),
    s = e(677185),
    u = e(788868),
    c = e(88001),
    d = e(652215),
    m = e(466919),
    C = e(985018);
let p = { 1: "what_you_lose", 2: "confirmation" },
    f = (t) => {
        let { onClose: o, currentUser: e, onNext: n, ...i } = t;
        return (0, r.jsx)(_.Modal, {
            title: C.intl.formatToPlainString(m.default["4e7WtF"], { premiumGroupProductName: (0, c.DP)() }),
            subtitle: C.intl.formatToPlainString(m.default["3kVEg0"], { cooldownMonths: c.wl }),
            onClose: o,
            ...i,
            actions: [
                { text: C.intl.string(m.default.UFHNtO), variant: "secondary", onClick: o },
                { text: C.intl.string(C.t["3PatSz"]), variant: "primary", onClick: n },
            ],
            children: (0, r.jsx)(l.l, {
                currentUser: e,
                premiumType: u.PremiumTypes.TIER_2,
                onClose: o,
                isDowngrade: !1,
                isPremiumRebrand: !0,
            }),
        });
    },
    h = (t) => {
        let { onClose: o, onConfirm: e, isRemovingUser: n, ...i } = t;
        return (0, r.jsx)(_.Modal, {
            size: "md",
            title: C.intl.formatToPlainString(m.default.IrvJHs, { premiumGroupProductName: (0, c.DP)() }),
            subtitle: C.intl.formatToPlainString(m.default.cQDYKU, {
                premiumGroupProductName: (0, c.DP)(),
                cooldownMonths: c.wl,
            }),
            onClose: o,
            actions: [
                { text: C.intl.string(m.default.UFHNtO), variant: "secondary", onClick: o },
                { text: C.intl.string(C.t["cY+Oob"]), variant: "critical-primary", onClick: e, loading: n },
            ],
            ...i,
        });
    },
    P = (t) => {
        let { premiumGroupSubscriptionId: o, currentUser: e, onClose: _, ...l } = t,
            [u, c] = n.useState(1),
            [m, C] = n.useState(!1),
            P = n.useRef(0),
            w = n.useRef(0);
        (0, i.Ay)(() => {
            let t = Date.now();
            (P.current = t),
                (w.current = t),
                a.default.track(d.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_STARTED, { subscription_id: o });
        });
        let T = (t, e) => {
                a.default.track(d.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_STEP, {
                    subscription_id: o,
                    from_step: p[t],
                    to_step: e,
                    step_duration_ms: Date.now() - w.current,
                    flow_duration_ms: Date.now() - P.current,
                }),
                    (w.current = Date.now());
            },
            b = async () => {
                T(u, null), await _();
            },
            I = async () => {
                C(!0),
                    (await (0, s.oO)(o, e.id)).ok &&
                        (a.default.track(d.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_COMPLETED, { subscription_id: o }),
                        _()),
                    C(!1);
            };
        return 1 === u
            ? (0, r.jsx)(f, {
                  ...l,
                  onNext: () => {
                      T(u, p[2]), c(2);
                  },
                  currentUser: e,
                  onClose: b,
              })
            : 2 === u
              ? (0, r.jsx)(h, { ...l, onConfirm: I, onClose: b, isRemovingUser: m })
              : null;
    };

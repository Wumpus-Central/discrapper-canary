r.d(e, { default: () => x });
var o = r(627968),
    n = r(64700),
    a = r(189213),
    i = r(964486),
    s = r(954571),
    l = r(380124),
    _ = r(751877),
    c = r(788868),
    u = r(88001),
    d = r(652215),
    m = r(466919),
    C = r(985018);
let p = { 1: "what_you_lose", 2: "confirmation" },
    f = (t) => {
        let { onClose: e, currentUser: r, onNext: n, ...i } = t;
        return (0, o.jsx)(a.Modal, {
            title: C.intl.formatToPlainString(m.default["4e7WtF"], { premiumGroupProductName: (0, u.DP)() }),
            subtitle: C.intl.formatToPlainString(m.default["3kVEg0"], { cooldownMonths: u.wl }),
            onClose: e,
            ...i,
            actions: [
                { text: C.intl.string(m.default.UFHNtO), variant: "secondary", onClick: e },
                { text: C.intl.string(C.t["3PatSz"]), variant: "primary", onClick: n },
            ],
            children: (0, o.jsx)(l.l, {
                currentUser: r,
                premiumType: c.PremiumTypes.TIER_2,
                onClose: e,
                isDowngrade: !1,
                isPremiumRebrand: !0,
            }),
        });
    },
    h = (t) => {
        let { onClose: e, onConfirm: r, isRemovingUser: n, ...i } = t;
        return (0, o.jsx)(a.Modal, {
            size: "md",
            title: C.intl.formatToPlainString(m.default.IrvJHs, { premiumGroupProductName: (0, u.DP)() }),
            subtitle: C.intl.formatToPlainString(m.default.cQDYKU, {
                premiumGroupProductName: (0, u.DP)(),
                cooldownMonths: u.wl,
            }),
            onClose: e,
            actions: [
                { text: C.intl.string(m.default.UFHNtO), variant: "secondary", onClick: e },
                { text: C.intl.string(C.t["cY+Oob"]), variant: "critical-primary", onClick: r, loading: n },
            ],
            ...i,
        });
    },
    x = (t) => {
        let { premiumGroupSubscriptionId: e, currentUser: r, onClose: a, ...l } = t,
            [c, u] = n.useState(1),
            [m, C] = n.useState(!1),
            x = n.useRef(0),
            g = n.useRef(0);
        (0, i.Ay)(() => {
            let t = Date.now();
            (x.current = t),
                (g.current = t),
                s.default.track(d.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_STARTED, { subscription_id: e });
        });
        let P = (t, r) => {
                s.default.track(d.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_STEP, {
                    subscription_id: e,
                    from_step: p[t],
                    to_step: r,
                    step_duration_ms: Date.now() - g.current,
                    flow_duration_ms: Date.now() - x.current,
                }),
                    (g.current = Date.now());
            },
            b = async () => {
                P(c, null), await a();
            },
            N = async () => {
                C(!0),
                    (await (0, _.oO)(e, r.id)).ok &&
                        (s.default.track(d.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_COMPLETED, { subscription_id: e }),
                        a()),
                    C(!1);
            };
        return 1 === c
            ? (0, o.jsx)(f, {
                  ...l,
                  onNext: () => {
                      P(c, p[2]), u(2);
                  },
                  currentUser: r,
                  onClose: b,
              })
            : 2 === c
              ? (0, o.jsx)(h, { ...l, onConfirm: N, onClose: b, isRemovingUser: m })
              : null;
    };

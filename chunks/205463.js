r.d(e, { default: () => w });
var n = r(627968),
    i = r(64700),
    o = r(158954),
    a = r(964486),
    l = r(954571),
    s = r(96304),
    u = r(677185),
    c = r(788868),
    d = r(88001),
    m = r(652215),
    _ = r(519412),
    p = r(985018);
let P = { 1: "what_you_lose", 2: "confirmation" },
    f = (t) => {
        let { onClose: e, currentUser: r, onNext: i, ...a } = t;
        return (0, n.jsx)(o.Modal, {
            title: p.intl.formatToPlainString(_.default["4e7WtF"], { premiumGroupProductName: (0, d.DP)() }),
            subtitle: p.intl.formatToPlainString(_.default["3kVEg0"], { cooldownMonths: d.wl }),
            onClose: e,
            ...a,
            actions: [
                { text: p.intl.string(_.default.UFHNtO), variant: "secondary", onClick: e },
                { text: p.intl.string(p.t["3PatSz"]), variant: "primary", onClick: i },
            ],
            children: (0, n.jsx)(s.l, {
                currentUser: r,
                premiumType: c.PremiumTypes.TIER_2,
                onClose: e,
                isDowngrade: !1,
                isPremiumRebrand: !0,
            }),
        });
    },
    C = (t) => {
        let { onClose: e, onConfirm: r, isRemovingUser: i, ...a } = t;
        return (0, n.jsx)(o.Modal, {
            size: "md",
            title: p.intl.formatToPlainString(_.default.IrvJHs, { premiumGroupProductName: (0, d.DP)() }),
            subtitle: p.intl.formatToPlainString(_.default.cQDYKU, {
                premiumGroupProductName: (0, d.DP)(),
                cooldownMonths: d.wl,
            }),
            onClose: e,
            actions: [
                { text: p.intl.string(_.default.UFHNtO), variant: "secondary", onClick: e },
                { text: p.intl.string(p.t["cY+Oob"]), variant: "critical-primary", onClick: r, loading: i },
            ],
            ...a,
        });
    },
    w = (t) => {
        let { premiumGroupSubscriptionId: e, currentUser: r, onClose: o, ...s } = t,
            [c, d] = i.useState(1),
            [_, p] = i.useState(!1),
            w = i.useRef(0),
            E = i.useRef(0);
        (0, a.Ay)(() => {
            let t = Date.now();
            (w.current = t),
                (E.current = t),
                l.default.track(m.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_STARTED, { subscription_id: e });
        });
        let M = (t, r) => {
                l.default.track(m.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_STEP, {
                    subscription_id: e,
                    from_step: P[t],
                    to_step: r,
                    step_duration_ms: Date.now() - E.current,
                    flow_duration_ms: Date.now() - w.current,
                }),
                    (E.current = Date.now());
            },
            R = async () => {
                M(c, null), await o();
            },
            T = async () => {
                p(!0),
                    (await (0, u.oO)(e, r.id)).ok &&
                        (l.default.track(m.HAw.PREMIUM_GROUP_MEMBER_CANCELLATION_COMPLETED, { subscription_id: e }),
                        o()),
                    p(!1);
            };
        return 1 === c
            ? (0, n.jsx)(f, {
                  ...s,
                  onNext: () => {
                      M(c, P[2]), d(2);
                  },
                  currentUser: r,
                  onClose: R,
              })
            : 2 === c
              ? (0, n.jsx)(C, { ...s, onConfirm: T, onClose: R, isRemovingUser: _ })
              : null;
    };

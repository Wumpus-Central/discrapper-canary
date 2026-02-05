n.d(t, { q: () => p });
var i = n(627968),
    s = n(64700),
    r = n(989349),
    a = n.n(r),
    l = n(158954),
    o = n(397927),
    c = n(384904),
    d = n(793574),
    u = n(688810),
    _ = n(915089),
    m = n(250253),
    A = n(2242),
    g = n(985018),
    E = n(289324);
let h = (e) => {
        let { transitionState: t, groupListing: n, listing: r, subscription: h, onClose: p } = e,
            C = (0, _.GV)(),
            { analyticsLocations: x } = (0, u.Ay)(d.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            {
                cancelSubscription: T,
                error: I,
                submitting: S,
            } = ((e) => {
                let [t, n] = s.useState(!1),
                    [i, r] = s.useState(null);
                return {
                    cancelSubscription: async (t) => {
                        try {
                            return n(!0), await c.M2(t, e), !0;
                        } catch (e) {
                            r(e);
                        } finally {
                            n(!1);
                        }
                    },
                    error: i,
                    submitting: t,
                };
            })(x),
            f = async () => {
                (await T(h.id)) && p();
            },
            N = r.role_benefits.benefits.filter((e) => e.ref_type === A.bN.CHANNEL),
            b = r.role_benefits.benefits.filter((e) => e.ref_type === A.bN.INTANGIBLE),
            R = a()(h.currentPeriodEnd).format("MMMM Do, YYYY"),
            v = g.intl.formatToPlainString(g.t.KsMRP5, {
                numChannels: N.length,
                numAdditionalBenefits: b.length,
                subscriptionEndDate: R,
            });
        return (0, i.jsx)(l.Modal, {
            transitionState: t,
            "aria-labelledby": C,
            actions: [
                { text: g.intl.string(g.t.EP6EPb), variant: "secondary", onClick: p },
                { variant: "critical-primary", text: g.intl.string(g.t.F6lUDF), onClick: f, loading: S },
            ],
            title: g.intl.string(g.t.O6l5tM),
            subtitle: v,
            onClose: p,
            children: (0, i.jsxs)(o.BJc, {
                gap: 8,
                children: [
                    null != I ? (0, i.jsx)(o.wx6, { type: "critical", children: I.message }) : null,
                    (0, i.jsx)(m.x, { listingId: r.id, guildId: n.guild_id, className: E.P }),
                ],
            }),
        });
    },
    p = (e) => {
        (0, o.qfG)((t) => (0, i.jsx)(h, { ...t, ...e }));
    };

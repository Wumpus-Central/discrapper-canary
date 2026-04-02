n.d(t, { q: () => p });
var i = n(627968),
    s = n(64700),
    l = n(989349),
    a = n.n(l),
    r = n(158954),
    o = n(397927),
    d = n(384904),
    c = n(793574),
    u = n(688810),
    m = n(915089),
    g = n(250253),
    _ = n(2242),
    x = n(985018),
    A = n(770078);
let h = (e) => {
        let { transitionState: t, groupListing: n, listing: l, subscription: h, onClose: p } = e,
            T = (0, m.GV)(),
            { analyticsLocations: f } = (0, u.Ay)(c.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            {
                cancelSubscription: S,
                error: E,
                submitting: b,
            } = ((e) => {
                let [t, n] = s.useState(!1),
                    [i, l] = s.useState(null);
                return {
                    cancelSubscription: async (t) => {
                        try {
                            return n(!0), await d.M2(t, e), !0;
                        } catch (e) {
                            l(e);
                        } finally {
                            n(!1);
                        }
                    },
                    error: i,
                    submitting: t,
                };
            })(f),
            C = async () => {
                (await S(h.id)) && p();
            },
            N = l.role_benefits.benefits.filter((e) => e.ref_type === _.bN.CHANNEL),
            v = l.role_benefits.benefits.filter((e) => e.ref_type === _.bN.INTANGIBLE),
            I = a()(h.currentPeriodEnd).format("MMMM Do, YYYY"),
            j = x.intl.formatToPlainString(x.t.KsMRP5, {
                numChannels: N.length,
                numAdditionalBenefits: v.length,
                subscriptionEndDate: I,
            });
        return (0, i.jsx)(r.Modal, {
            transitionState: t,
            "aria-labelledby": T,
            actions: [
                { text: x.intl.string(x.t.EP6EPb), variant: "secondary", onClick: p },
                { variant: "critical-primary", text: x.intl.string(x.t.F6lUDF), onClick: C, loading: b },
            ],
            title: x.intl.string(x.t.O6l5tM),
            subtitle: j,
            onClose: p,
            children: (0, i.jsxs)(o.BJc, {
                gap: 8,
                children: [
                    null != E ? (0, i.jsx)(o.wx6, { type: "critical", children: E.message }) : null,
                    (0, i.jsx)(g.x, { listingId: l.id, guildId: n.guild_id, className: A.P }),
                ],
            }),
        });
    },
    p = (e) => {
        (0, o.qfG)((t) => (0, i.jsx)(h, { ...t, ...e }));
    };

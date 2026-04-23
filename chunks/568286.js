n.d(t, { q: () => T });
var i = n(627968),
    s = n(64700),
    l = n(989349),
    a = n.n(l),
    r = n(189213),
    o = n(331322),
    d = n(683071),
    u = n(192308),
    c = n(793574),
    g = n(688810),
    m = n(323082),
    _ = n(915089),
    A = n(250253),
    h = n(2242),
    p = n(985018),
    x = n(969389);
let E = (e) => {
        let { transitionState: t, groupListing: n, listing: l, subscription: u, onClose: E } = e,
            T = (0, _.GV)(),
            { analyticsLocations: S } = (0, g.Ay)(c.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            {
                cancelSubscription: f,
                error: b,
                submitting: C,
            } = ((e) => {
                let [t, n] = s.useState(!1),
                    [i, l] = s.useState(null);
                return {
                    cancelSubscription: async (t) => {
                        try {
                            return n(!0), await m.M2(t, e), !0;
                        } catch (e) {
                            l(e);
                        } finally {
                            n(!1);
                        }
                    },
                    error: i,
                    submitting: t,
                };
            })(S),
            v = async () => {
                (await f(u.id)) && E();
            },
            N = l.role_benefits.benefits.filter((e) => e.ref_type === h.bN.CHANNEL),
            I = l.role_benefits.benefits.filter((e) => e.ref_type === h.bN.INTANGIBLE),
            y = a()(u.currentPeriodEnd).format("MMMM Do, YYYY"),
            j = p.intl.formatToPlainString(p.t.KsMRP5, {
                numChannels: N.length,
                numAdditionalBenefits: I.length,
                subscriptionEndDate: y,
            });
        return (0, i.jsx)(r.Modal, {
            transitionState: t,
            "aria-labelledby": T,
            actions: [
                { text: p.intl.string(p.t.EP6EPb), variant: "secondary", onClick: E },
                { variant: "critical-primary", text: p.intl.string(p.t.F6lUDF), onClick: v, loading: C },
            ],
            title: p.intl.string(p.t.O6l5tM),
            subtitle: j,
            onClose: E,
            children: (0, i.jsxs)(o.B, {
                gap: 8,
                children: [
                    null != b ? (0, i.jsx)(d.w, { type: "critical", children: b.message }) : null,
                    (0, i.jsx)(A.x, { listingId: l.id, guildId: n.guild_id, className: x.P }),
                ],
            }),
        });
    },
    T = (e) => {
        (0, u.openModal)((t) => (0, i.jsx)(E, { ...t, ...e }));
    };

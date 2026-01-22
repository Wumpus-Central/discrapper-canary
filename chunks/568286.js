n.d(t, { q: () => A }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(158954),
    l = n(397927),
    c = n(384904),
    u = n(793574),
    d = n(688810),
    f = n(915089),
    p = n(250253),
    _ = n(2242),
    h = n(985018),
    m = n(289324);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
let b = "MMMM Do, YYYY",
    y = (e) => {
        let [t, n] = i.useState(!1),
            [r, a] = i.useState(null);
        return {
            cancelSubscription: async (t) => {
                try {
                    return n(!0), await c.M2(t, e), !0;
                } catch (e) {
                    a(e);
                } finally {
                    n(!1);
                }
            },
            error: r,
            submitting: t,
        };
    },
    O = (e) => {
        let { transitionState: t, groupListing: n, listing: i, subscription: a, onClose: c } = e,
            g = (0, f.GV)(),
            { analyticsLocations: E } = (0, d.Ay)(u.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: O, error: A, submitting: v } = y(E),
            S = async () => {
                (await O(a.id)) && c();
            },
            I = i.role_benefits.benefits.filter((e) => e.ref_type === _.bN.CHANNEL),
            T = i.role_benefits.benefits.filter((e) => e.ref_type === _.bN.INTANGIBLE),
            C = s()(a.currentPeriodEnd).format(b),
            N = h.intl.formatToPlainString(h.t.KsMRP5, {
                numChannels: I.length,
                numAdditionalBenefits: T.length,
                subscriptionEndDate: C,
            });
        return (0, r.jsx)(o.Modal, {
            transitionState: t,
            "aria-labelledby": g,
            actions: [
                {
                    text: h.intl.string(h.t.EP6EPb),
                    variant: "secondary",
                    onClick: c,
                },
                {
                    variant: "critical-primary",
                    text: h.intl.string(h.t.F6lUDF),
                    onClick: S,
                    loading: v,
                },
            ],
            title: h.intl.string(h.t.O6l5tM),
            subtitle: N,
            onClose: c,
            children: (0, r.jsxs)(l.BJc, {
                gap: 8,
                children: [
                    null != A
                        ? (0, r.jsx)(l.wx6, {
                              type: "critical",
                              children: A.message,
                          })
                        : null,
                    (0, r.jsx)(p.x, {
                        listingId: i.id,
                        guildId: n.guild_id,
                        className: m.P,
                    }),
                ],
            }),
        });
    },
    A = (e) => {
        (0, l.qfG)((t) => (0, r.jsx)(O, E({}, t, e)));
    };

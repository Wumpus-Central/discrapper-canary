"use strict";
n.d(t, { O: () => g });
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(311907),
    o = n(397927),
    l = n(730134),
    u = n(139286),
    c = n(287809),
    d = n(45787),
    _ = n(275759),
    f = n(788868),
    p = n(778712),
    h = n(985018),
    m = n(357776);
function g(e) {
    let { profileUserId: t } = e,
        n = (0, s.bG)([c.default], () => c.default.getUser(t), [t]),
        g = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        E = (0, s.bG)([_.Ay], () => _.Ay.getFriendAnniversaryYears(t), [t]);
    return (
        i.useEffect(() => {
            (0, u.x)({
                name: a.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
                type: a.ImpressionTypes.VIEW,
                properties: { gift_intent_type: f.np.FRIEND_ANNIVERSARY },
            });
        }, []),
        (0, r.jsxs)("div", {
            className: m.kL,
            children: [
                (0, r.jsx)("div", {
                    className: m.b,
                    children: (0, r.jsx)(o.K0, {
                        icon: o.PGe,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": h.intl.string(h.t.cpT0Cq),
                        onClick: () => (0, d.CK)(t),
                    }),
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: h.intl.string(h.t.icDVNb),
                }),
                (0, r.jsxs)("div", {
                    className: m.SC,
                    children: [
                        null != n && (0, r.jsx)(l.A, { size: p._3.SIZE_16, user: n }),
                        null != g && (0, r.jsx)(l.A, { className: m.GM, size: p._3.SIZE_16, user: g }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: h.intl.formatToPlainString(h.t.PpG27s, { numberOfYears: E }),
                        }),
                    ],
                }),
            ],
        })
    );
}

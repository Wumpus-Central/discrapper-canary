n.d(e, { A: () => h });
var s = n(627968),
    i = n(64700),
    l = n(691540),
    r = n(857250),
    a = n(97483),
    o = n(834730),
    c = n(821609),
    d = n(939249),
    T = n(780964),
    S = n(858897),
    u = n(975571),
    A = n(544231),
    _ = n(110168),
    x = n(403403),
    E = n(652215),
    m = n(985018),
    g = n(425020);
let h = function (t) {
    let { onClose: e, channelId: n } = t,
        [h, O] = i.useState(!1),
        j = i.useCallback(() => {
            (0, S.openUserSettings)(T.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING), e();
        }, [e]),
        b = i.useCallback(() => {
            h ||
                (O(!0),
                (0, A.XR)(n)
                    .then(() => {
                        e(), (0, _.r)({ text: m.intl.string(m.t.FhgVWi), id: "safety-tools-report-false-positive" });
                    })
                    .catch(() => {
                        O(!1), (0, l.P0)((0, r.o)(m.intl.string(m.t.R0RpRX), a.Ck.FAILURE));
                    }));
        }, [n, e, h]);
    return (0, s.jsxs)(x.A, {
        style: g.T1,
        children: [
            (0, s.jsx)(o.E, {
                variant: "text-md/normal",
                color: "text-default",
                children: m.intl.format(m.t["njJ/Cg"], { learnMoreLink: u.A.getArticleURL(E.MVz.SAFETY_ALERTS) }),
            }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(c.$, { onClick: j, fullWidth: !0, text: m.intl.string(m.t.qpWnyC) }),
                    (0, s.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: g._B,
                        children: m.intl.format(m.t["2uYViD"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, s.jsx)(d.D, { className: g.l_, tag: "span", onClick: b, children: t }, e),
                        }),
                    }),
                ],
            }),
        ],
    });
};

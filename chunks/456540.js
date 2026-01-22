n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(780964),
    a = n(840065),
    s = n(322092),
    o = n(652215),
    c = n(355097),
    u = n(985018);

function d(e) {
    let { subscription: t } = e;
    return null == t
        ? null
        : t.status === o.Dmq.PAST_DUE
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(i.hKd, {
                        size: 16,
                    }),
                    (0, r.jsx)(s.A, {
                        message: u.intl.string(u.t.eSuJE2),
                        ctaMessage: u.intl.string(u.t.RXsxqb),
                        onClick: () => {
                            (0, a.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL, {
                                section: o.nc_.SUBSCRIPTIONS,
                                subsection: c.nR,
                            });
                        },
                    }),
                ],
            })
          : null;
}

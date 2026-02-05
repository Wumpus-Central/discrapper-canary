n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(780964),
    l = n(840065),
    s = n(322092),
    o = n(652215),
    d = n(355097),
    c = n(985018);
function u(e) {
    let { subscription: t } = e;
    return null == t
        ? null
        : t.status === o.Dmq.PAST_DUE
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.hKd, { size: 16 }),
                    (0, i.jsx)(s.A, {
                        message: c.intl.string(c.t.eSuJE2),
                        ctaMessage: c.intl.string(c.t.RXsxqb),
                        onClick: () => {
                            (0, l.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL, {
                                section: o.nc_.SUBSCRIPTIONS,
                                subsection: d.nR,
                            });
                        },
                    }),
                ],
            })
          : null;
}

n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(790284),
    a = n(780964),
    s = n(840065),
    o = n(322092),
    d = n(652215),
    c = n(355097),
    u = n(985018);
function A(e) {
    let { subscription: t } = e;
    return null == t
        ? null
        : t.status === d.Dmq.PAST_DUE
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.hKd, { size: 16 }),
                    (0, i.jsx)(o.A, {
                        message: u.intl.string(u.t.eSuJE2),
                        ctaMessage: u.intl.string(u.t.RXsxqb),
                        onClick: () => {
                            l.A.setState({ subsection: c.nR }),
                                (0, s.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL, {
                                    section: d.nc_.SUBSCRIPTIONS,
                                    subsection: c.nR,
                                });
                        },
                    }),
                ],
            })
          : null;
}

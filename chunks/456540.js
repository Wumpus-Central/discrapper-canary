n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var r = n(696986),
    a = n(790284),
    l = n(780964),
    s = n(858897),
    o = n(322092),
    d = n(652215),
    u = n(355097),
    c = n(985018);
function A(e) {
    let { subscription: t } = e;
    return null == t
        ? null
        : t.status === d.Dmq.PAST_DUE
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.h, { size: 16 }),
                    (0, i.jsx)(o.A, {
                        message: c.intl.string(c.t.eSuJE2),
                        ctaMessage: c.intl.string(c.t.RXsxqb),
                        onClick: () => {
                            a.A.setState({ subsection: u.nR }), (0, s.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                ],
            })
          : null;
}

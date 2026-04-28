e.d(n, { A: () => A });
var s = e(627968);
e(64700);
var a = e(696986),
    i = e(790284),
    l = e(780964),
    u = e(858897),
    r = e(322092),
    c = e(652215),
    d = e(355097),
    h = e(985018);
function A(t) {
    let { subscription: n } = t;
    return null == n
        ? null
        : n.status === c.Dmq.PAST_DUE
          ? (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(a.h, { size: 16 }),
                    (0, s.jsx)(r.A, {
                        message: h.intl.string(h.t.eSuJE2),
                        ctaMessage: h.intl.string(h.t.RXsxqb),
                        onClick: () => {
                            i.A.setState({ subsection: d.nR }), (0, u.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                ],
            })
          : null;
}

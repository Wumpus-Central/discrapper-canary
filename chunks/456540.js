e.d(t, { A: () => o });
var s = e(627968);
e(64700);
var i = e(696986),
    a = e(790284),
    l = e(780964),
    u = e(766075),
    c = e(322092),
    r = e(652215),
    d = e(355097),
    h = e(375708);
function o(n) {
    let { subscription: t } = n;
    return null == t
        ? null
        : t.status === r.Dmq.PAST_DUE
          ? (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(i.h, { size: 16 }),
                    (0, s.jsx)(c.A, {
                        message: h.intl.string(h.t.eSuJE2),
                        ctaMessage: h.intl.string(h.t.RXsxqb),
                        onClick: function () {
                            a.A.setState({ subsection: d.nR }), (0, u.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                ],
            })
          : null;
}

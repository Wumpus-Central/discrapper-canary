"use strict";
i.d(t, { A: () => u });
var r = i(627968);
i(64700);
var s = i(696986),
    n = i(790284),
    l = i(780964),
    a = i(858897),
    o = i(322092),
    c = i(652215),
    d = i(355097),
    _ = i(985018);
function u(e) {
    let { subscription: t } = e;
    return null == t
        ? null
        : t.status === c.Dmq.PAST_DUE
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.h, { size: 16 }),
                    (0, r.jsx)(o.A, {
                        message: _.intl.string(_.t.eSuJE2),
                        ctaMessage: _.intl.string(_.t.RXsxqb),
                        onClick: () => {
                            n.A.setState({ subsection: d.nR }), (0, a.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                ],
            })
          : null;
}

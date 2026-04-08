"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(485878),
    u = n(985018),
    c = n(924939);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, l.uM)(),
        s = i.useCallback(() => {
            n();
        }, [n]);
    return (0, r.jsx)(o.DUT, {
        onClick: s,
        className: a()(c.v, t),
        "aria-label": u.intl.string(u.t.ybUZql),
        children: (0, r.jsx)(o.Zge, { size: "sm", color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE }),
    });
}

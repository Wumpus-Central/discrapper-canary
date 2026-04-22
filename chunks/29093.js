"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(707554),
    a = n(821609),
    o = n(854378),
    c = n(652215),
    d = n(985018),
    u = n(379154),
    _ = n(818050);
function h(e) {
    let { loginStatus: t, authBoxClassName: n, onSubmit: s, onCancelAccountDeletion: h } = e,
        m = t === c.aUe.ACCOUNT_DISABLED,
        p = m ? d.intl.string(d.t["j3rC+U"]) : d.intl.string(d.t.ZFWofo),
        g = m ? d.intl.string(d.t["6eNTWe"]) : d.intl.string(d.t["pCBti+"]);
    return (0, i.jsx)(o.Ay, {
        tag: "form",
        onSubmit: s,
        className: n,
        children: (0, i.jsxs)(l.F, {
            component: (0, i.jsx)(o.hE, { className: _.QB, children: p }),
            children: [
                (0, i.jsx)(o.tK, { className: _.SX, children: g }),
                (0, i.jsxs)(o.eB, {
                    children: [
                        (0, i.jsx)(a.$, { text: d.intl.string(d.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, i.jsx)("div", {
                            className: r()(_.Ot, u.Qt),
                            children: d.intl.format(d.t.js2rr5, { onClick: h }),
                        }),
                    ],
                }),
            ],
        }),
    });
}

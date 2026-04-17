"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(397927),
    a = n(854378),
    o = n(652215),
    c = n(985018),
    d = n(379154),
    u = n(818050);
function _(e) {
    let { loginStatus: t, authBoxClassName: n, onSubmit: s, onCancelAccountDeletion: _ } = e,
        h = t === o.aUe.ACCOUNT_DISABLED,
        g = h ? c.intl.string(c.t["j3rC+U"]) : c.intl.string(c.t.ZFWofo),
        p = h ? c.intl.string(c.t["6eNTWe"]) : c.intl.string(c.t["pCBti+"]);
    return (0, i.jsx)(a.Ay, {
        tag: "form",
        onSubmit: s,
        className: n,
        children: (0, i.jsxs)(l.Fmo, {
            component: (0, i.jsx)(a.hE, { className: u.QB, children: g }),
            children: [
                (0, i.jsx)(a.tK, { className: u.SX, children: p }),
                (0, i.jsxs)(a.eB, {
                    children: [
                        (0, i.jsx)(l.Button, { text: c.intl.string(c.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, i.jsx)("div", {
                            className: r()(u.Ot, d.Qt),
                            children: c.intl.format(c.t.js2rr5, { onClick: _ }),
                        }),
                    ],
                }),
            ],
        }),
    });
}

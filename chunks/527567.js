"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(830215),
    l = n(396681),
    a = n(854378),
    o = n(210714),
    c = n(985018),
    d = n(818050);
function u(e) {
    let { location: t } = e,
        [u, _] = s.useState("submitting");
    return (s.useEffect(() => {
        (0, o.d)("authorize_payment");
        let e = (0, l.A)(t);
        null == e
            ? _("failed")
            : (async () => {
                  try {
                      await r.A.authorizePayment(e), _("succeeded");
                  } catch (e) {
                      _("failed");
                  }
              })();
    }, [t]),
    "failed" === u)
        ? (0, i.jsxs)(a.Ay, {
              children: [
                  (0, i.jsx)("img", { alt: "", src: n(678985), className: d.SX }),
                  (0, i.jsx)(a.hE, { className: d.QB, children: c.intl.string(c.t.GHRpue) }),
                  (0, i.jsx)(a.tK, { className: d.C2, children: c.intl.string(c.t["1nO55v"]) }),
              ],
          })
        : "succeeded" === u
          ? (0, i.jsxs)(a.Ay, {
                children: [
                    (0, i.jsx)("img", { alt: "", src: n(586430), className: d.SX }),
                    (0, i.jsx)(a.hE, { className: d.QB, children: c.intl.string(c.t.ihHX53) }),
                    (0, i.jsx)(a.tK, { className: d.C2, children: c.intl.string(c.t["pGPCv+"]) }),
                ],
            })
          : (0, i.jsxs)(a.Ay, {
                children: [(0, i.jsx)(a.CK, {}), (0, i.jsx)(a.hE, { children: c.intl.string(c.t.T3vC7n) })],
            });
}

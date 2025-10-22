n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(893776),
    l = n(129293),
    a = n(388905),
    o = n(108427),
    c = n(388032),
    u = n(10198);
function d(e) {
    let { location: t } = e,
        [d, h] = i.useState("submitting");
    return (i.useEffect(() => {
        (0, o.e)("authorize_payment");
        let e = (0, l.Z)(t);
        if (null == e) return void h("failed");
        (async () => {
            try {
                await s.Z.authorizePayment(e), h("succeeded");
            } catch (e) {
                h("failed");
            }
        })();
    }, [t]),
    "failed" === d)
        ? (0, r.jsxs)(a.ZP, {
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      src: n(375673),
                      className: u.marginBottom20,
                  }),
                  (0, r.jsx)(a.Dx, {
                      className: u.marginBottom8,
                      children: c.intl.string(c.t.GHRpue),
                  }),
                  (0, r.jsx)(a.DK, {
                      className: u.marginBottom40,
                      children: c.intl.string(c.t["1nO55v"]),
                  }),
              ],
          })
        : "succeeded" === d
          ? (0, r.jsxs)(a.ZP, {
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: n(73962),
                        className: u.marginBottom20,
                    }),
                    (0, r.jsx)(a.Dx, {
                        className: u.marginBottom8,
                        children: c.intl.string(c.t.ihHX53),
                    }),
                    (0, r.jsx)(a.DK, {
                        className: u.marginBottom40,
                        children: c.intl.string(c.t["pGPCv+"]),
                    }),
                ],
            })
          : (0, r.jsxs)(a.ZP, {
                children: [(0, r.jsx)(a.Hh, {}), (0, r.jsx)(a.Dx, { children: c.intl.string(c.t.T3vC7n) })],
            });
}

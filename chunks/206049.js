(n(508300), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(323874), n(14289), n(35956));
var a = n(477900),
    o = n(582128),
    i = n(620632),
    r = n(189213),
    l = n(143129),
    s = n(683071),
    c = n(718718),
    d = n(181658),
    u = n(256006),
    p = n(652215),
    y = n(792996);
n.d(
    e,
    {},
    {
        default: function (t) {
            let { payment: e, paymentSource: n, ...f } = t,
                h = { name: "", line1: "", line2: "", city: "", postalCode: "", state: "", country: n.country },
                [m, g] = o.useState(h),
                [S, C] = o.useState(!1),
                [b, w] = o.useState(!1),
                [_, A] = o.useState(!1),
                [j, k] = o.useState(""),
                x = u.K,
                E = e.id,
                L = (0, a.jsx)(l.d, {
                    label: y.intl.formatToPlainString(y.t["aJg+oS"], {}),
                    description: y.intl.formatToPlainString(y.t["2p1XJW"], {}),
                    checked: S,
                    onChange: C,
                }),
                R = S
                    ? (0, a.jsx)(c.Ay, {
                          ...m,
                          mode: c.Ay.Modes.CREATE,
                          layout: x,
                          onBillingAddressChange: function (t, e) {
                              (g(t), w(e));
                          },
                          error: null,
                      })
                    : null;
            return (0, a.jsxs)(r.a, {
                transitionState: f.transitionState,
                onClose: f.onClose,
                title: y.intl.formatToPlainString(y.t.onRIxS, {}),
                actions: [
                    {
                        variant: "primary",
                        text: y.intl.formatToPlainString(y.t.uqZjLi, {}),
                        onClick: async function () {
                            A(!0);
                            try {
                                await (async function (t, e, n) {
                                    let a = p.Rsh.BILLING_INVOICE_PDF,
                                        o = e
                                            ? {
                                                  name: n.name,
                                                  line_1: n.line1,
                                                  line_2: n.line2,
                                                  city: n.city,
                                                  state: n.state,
                                                  postal_code: n.postalCode,
                                                  country: n.country,
                                              }
                                            : null,
                                        r = await i.Bo.post({
                                            url: a,
                                            body: { payment_id: t, billing_address_override: e ? o : null },
                                            oldFormErrors: !0,
                                            rejectWithError: !1,
                                        });
                                    return (
                                        !(function (t, e) {
                                            let n = atob(e.replace(/\s/g, "")),
                                                a = new Uint8Array(new ArrayBuffer(n.length));
                                            for (let t = 0; t < n.length; t++) a[t] = n.charCodeAt(t);
                                            let o = new Blob([a], { type: "application/pdf" }),
                                                i = URL.createObjectURL(o),
                                                r = document.createElement("a");
                                            ((r.href = i),
                                                (r.download = `receipt_${t}.pdf`),
                                                document.body.appendChild(r),
                                                r.click(),
                                                document.body.removeChild(r),
                                                URL.revokeObjectURL(i));
                                        })(t, r.text),
                                        !0
                                    );
                                })(E, S, m);
                            } catch (e) {
                                let t = JSON.parse(await e.body.text());
                                k(
                                    new d.A({ ...e, body: t }).getAnyErrorMessage() ??
                                        y.intl.formatToPlainString(y.t["4eT6rr"], {}),
                                );
                            } finally {
                                A(!1);
                            }
                        },
                        disabled: S && !b,
                        loading: _,
                        autoFocus: !0,
                    },
                ],
                children: [
                    L,
                    R,
                    null != j && "" !== j && (0, a.jsx)(s.w, { type: "critical", message: j, role: "alert" }),
                ],
            });
        },
    },
);

(n.d(e, { default: () => h }),
    n(508300),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(323874),
    n(14289),
    n(35956));
var a = n(477900),
    o = n(582128),
    i = n(636537),
    r = n(189213),
    l = n(193249),
    s = n(683071),
    c = n(198970),
    d = n(181658),
    u = n(256006),
    p = n(652215),
    y = n(105292);
async function f(t, e, n) {
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
}
function h(t) {
    let { payment: e, paymentSource: n, ...i } = t,
        p = { name: "", line1: "", line2: "", city: "", postalCode: "", state: "", country: n.country },
        [h, m] = o.useState(p),
        [g, S] = o.useState(!1),
        [C, b] = o.useState(!1),
        [w, _] = o.useState(!1),
        [A, j] = o.useState("");
    async function k() {
        _(!0);
        try {
            await f(E, g, h);
        } catch (e) {
            let t = JSON.parse(await e.body.text());
            j(new d.A({ ...e, body: t }).getAnyErrorMessage() ?? y.intl.formatToPlainString(y.t["4eT6rr"], {}));
        } finally {
            _(!1);
        }
    }
    let x = u.K,
        E = e.id,
        L = (0, a.jsx)(l.d, {
            label: y.intl.formatToPlainString(y.t["aJg+oS"], {}),
            description: y.intl.formatToPlainString(y.t["2p1XJW"], {}),
            checked: g,
            onChange: S,
        }),
        R = g
            ? (0, a.jsx)(c.Ay, {
                  ...h,
                  mode: c.Ay.Modes.CREATE,
                  layout: x,
                  onBillingAddressChange: function (t, e) {
                      (m(t), b(e));
                  },
                  error: null,
              })
            : null;
    return (0, a.jsxs)(r.a, {
        transitionState: i.transitionState,
        onClose: i.onClose,
        title: y.intl.formatToPlainString(y.t.onRIxS, {}),
        actions: [
            {
                variant: "primary",
                text: y.intl.formatToPlainString(y.t.uqZjLi, {}),
                onClick: k,
                disabled: g && !C,
                loading: w,
                autoFocus: !0,
            },
        ],
        children: [L, R, null != A && "" !== A && (0, a.jsx)(s.w, { type: "critical", message: A, role: "alert" })],
    });
}

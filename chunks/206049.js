n.d(e, { default: () => p }),
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
    n(35956);
var a = n(627968),
    o = n(64700),
    r = n(158954),
    i = n(562465),
    l = n(397927),
    s = n(450233),
    c = n(181658),
    u = n(256006),
    d = n(652215),
    y = n(985018);
async function S(t, e, n) {
    let a = d.Rsh.BILLING_INVOICE_PDF,
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
                r = URL.createObjectURL(o),
                i = document.createElement("a");
            (i.href = r),
                (i.download = `receipt_${t}.pdf`),
                document.body.appendChild(i),
                i.click(),
                document.body.removeChild(i),
                URL.revokeObjectURL(r);
        })(t, r.text),
        !0
    );
}
function p(t) {
    let { payment: e, paymentSource: n, ...i } = t,
        d = { name: "", line1: "", line2: "", city: "", postalCode: "", state: "", country: n.country },
        [p, T] = o.useState(d),
        [_, L] = o.useState(!1),
        [h, E] = o.useState(!1),
        [A, I] = o.useState(!1),
        [N, f] = o.useState("");
    async function g() {
        I(!0);
        try {
            await S(C, _, p);
        } catch (e) {
            let t = JSON.parse(await e.body.text());
            f(new c.A({ ...e, body: t }).getAnyErrorMessage() ?? y.intl.formatToPlainString(y.t["4eT6rr"], {}));
        } finally {
            I(!1);
        }
    }
    let m = u.K,
        C = e.id,
        b = (0, a.jsx)(l.dOG, {
            label: y.intl.formatToPlainString(y.t["aJg+oS"], {}),
            description: y.intl.formatToPlainString(y.t["2p1XJW"], {}),
            checked: _,
            onChange: L,
        }),
        O = _
            ? (0, a.jsx)(s.Ay, {
                  ...p,
                  mode: s.Ay.Modes.CREATE,
                  layout: m,
                  onBillingAddressChange: function (t, e) {
                      T(t), E(e);
                  },
                  error: null,
              })
            : null;
    return (0, a.jsxs)(r.Modal, {
        transitionState: i.transitionState,
        onClose: i.onClose,
        title: y.intl.formatToPlainString(y.t.onRIxS, {}),
        actions: [
            {
                variant: "primary",
                text: y.intl.formatToPlainString(y.t.uqZjLi, {}),
                onClick: g,
                disabled: _ && !h,
                loading: A,
                autoFocus: !0,
            },
        ],
        children: [b, O, null != N && "" !== N && (0, a.jsx)(l.wx6, { type: "critical", children: N })],
    });
}

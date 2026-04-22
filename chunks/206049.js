n.d(e, { default: () => T }),
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
    r = n(189213),
    i = n(562465),
    l = n(243721),
    s = n(683071),
    c = n(450233),
    u = n(181658),
    d = n(256006),
    y = n(652215),
    S = n(985018);
async function p(t, e, n) {
    let a = y.Rsh.BILLING_INVOICE_PDF,
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
function T(t) {
    let { payment: e, paymentSource: n, ...i } = t,
        y = { name: "", line1: "", line2: "", city: "", postalCode: "", state: "", country: n.country },
        [T, _] = o.useState(y),
        [L, h] = o.useState(!1),
        [E, A] = o.useState(!1),
        [I, N] = o.useState(!1),
        [f, g] = o.useState("");
    async function m() {
        N(!0);
        try {
            await p(b, L, T);
        } catch (e) {
            let t = JSON.parse(await e.body.text());
            g(new u.A({ ...e, body: t }).getAnyErrorMessage() ?? S.intl.formatToPlainString(S.t["4eT6rr"], {}));
        } finally {
            N(!1);
        }
    }
    let C = d.K,
        b = e.id,
        w = (0, a.jsx)(l.d, {
            label: S.intl.formatToPlainString(S.t["aJg+oS"], {}),
            description: S.intl.formatToPlainString(S.t["2p1XJW"], {}),
            checked: L,
            onChange: h,
        }),
        O = L
            ? (0, a.jsx)(c.Ay, {
                  ...T,
                  mode: c.Ay.Modes.CREATE,
                  layout: C,
                  onBillingAddressChange: function (t, e) {
                      _(t), A(e);
                  },
                  error: null,
              })
            : null;
    return (0, a.jsxs)(r.Modal, {
        transitionState: i.transitionState,
        onClose: i.onClose,
        title: S.intl.formatToPlainString(S.t.onRIxS, {}),
        actions: [
            {
                variant: "primary",
                text: S.intl.formatToPlainString(S.t.uqZjLi, {}),
                onClick: m,
                disabled: L && !E,
                loading: I,
                autoFocus: !0,
            },
        ],
        children: [w, O, null != f && "" !== f && (0, a.jsx)(s.w, { type: "critical", children: f })],
    });
}

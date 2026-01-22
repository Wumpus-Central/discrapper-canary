r.d(t, {
    default: () => O,
}),
    r(801460),
    r(508300),
    r(650828),
    r(747238),
    r(812715),
    r(927092),
    r(212978),
    r(201528),
    r(393431),
    r(752391),
    r(532706),
    r(42231),
    r(232424),
    r(757074),
    r(949626),
    r(767709),
    r(65162),
    r(896048),
    r(693327),
    r(554719),
    r(680155),
    r(323874),
    r(14289),
    r(35956);
var n = r(627968),
    o = r(64700),
    l = r(158954),
    a = r(562465),
    i = r(397927),
    c = r(450233),
    u = r(181658),
    s = r(256006),
    p = r(652215),
    y = r(985018);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
async function b(e, t, r) {
    let n = p.Rsh.BILLING_INVOICE_PDF,
        o = t
            ? {
                  name: r.name,
                  line_1: r.line1,
                  line_2: r.line2,
                  city: r.city,
                  state: r.state,
                  postal_code: r.postalCode,
                  country: r.country,
              }
            : null,
        l = await a.Bo.post({
            url: n,
            body: {
                payment_id: e,
                billing_address_override: t ? o : null,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    return (
        !(function (e, t) {
            let r = atob(t.replace(/\s/g, "")),
                n = new Uint8Array(new ArrayBuffer(r.length));
            for (let e = 0; e < r.length; e++) n[e] = r.charCodeAt(e);
            let o = new Blob([n], {
                    type: "application/pdf",
                }),
                l = URL.createObjectURL(o),
                a = document.createElement("a");
            (a.href = l),
                (a.download = "receipt_".concat(e, ".pdf")),
                document.body.appendChild(a),
                a.click(),
                document.body.removeChild(a),
                URL.revokeObjectURL(l);
        })(e, l.text),
        !0
    );
}

function O(e) {
    let { payment: t, paymentSource: r } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["payment", "paymentSource"]),
        p = {
            name: "",
            line1: "",
            line2: "",
            city: "",
            postalCode: "",
            state: "",
            country: r.country,
        },
        [O, g] = o.useState(p),
        [m, j] = o.useState(!1),
        [h, w] = o.useState(!1),
        [S, P] = o.useState(!1),
        [v, C] = o.useState("");
    async function x() {
        P(!0);
        try {
            await b(_, m, O);
        } catch (r) {
            var e;
            let t = JSON.parse(await r.body.text());
            C(
                null !=
                    (e = new u.A(
                        d(f({}, r), {
                            body: t,
                        }),
                    ).getAnyErrorMessage())
                    ? e
                    : y.intl.formatToPlainString(y.t["4eT6rr"], {}),
            );
        } finally {
            P(!1);
        }
    }
    let E = s.K,
        _ = t.id,
        k = (0, n.jsx)(i.dOG, {
            label: y.intl.formatToPlainString(y.t["aJg+oS"], {}),
            description: y.intl.formatToPlainString(y.t["2p1XJW"], {}),
            checked: m,
            onChange: j,
        }),
        R = m
            ? (0, n.jsx)(
                  c.Ay,
                  d(f({}, O), {
                      mode: c.Ay.Modes.CREATE,
                      layout: E,
                      onBillingAddressChange: function (e, t) {
                          g(e), w(t);
                      },
                      error: null,
                  }),
              )
            : null;
    return (0, n.jsxs)(l.Modal, {
        transitionState: a.transitionState,
        onClose: a.onClose,
        title: y.intl.formatToPlainString(y.t.onRIxS, {}),
        actions: [
            {
                variant: "primary",
                text: y.intl.formatToPlainString(y.t.uqZjLi, {}),
                onClick: x,
                disabled: m && !h,
                loading: S,
                autoFocus: !0,
            },
        ],
        children: [
            k,
            R,
            null != v &&
                "" !== v &&
                (0, n.jsx)(i.wx6, {
                    type: "critical",
                    children: v,
                }),
        ],
    });
}

n.d(t, { default: () => T }), n(388685);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(512722),
    c = n.n(s),
    o = n(793030),
    u = n(442837),
    d = n(693789),
    m = n(159691),
    f = n(481060),
    x = n(809086),
    h = n(599456),
    j = n(485386),
    v = n(430824),
    p = n(937615),
    g = n(495437),
    b = n(240864),
    y = n(942833),
    C = n(598952),
    Z = n(392739),
    N = n(916001),
    _ = n(298243),
    z = n(388032),
    S = n(800372);
function O(e) {
    let { guildProductListing: t, guildId: n, skuPricePreview: a } = e,
        i = (0, y.C)(t),
        l = (0, p.T4)(a.amount, a.currency),
        s = (0, u.e7)([v.Z], () => v.Z.getGuild(n));
    return (
        c()(null != s, "guild cannot be null"),
        (0, r.jsxs)("div", {
            className: S.purchaseSummaryContainer,
            children: [
                (0, r.jsx)(x.Z, {
                    alt: "",
                    className: S.purchaseSummaryImage,
                    listing: t,
                    imageSize: 100,
                }),
                (0, r.jsxs)("div", {
                    className: S.purchaseSummarInfo,
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: t.name,
                        }),
                        (0, r.jsx)(f.LZC, { size: 4 }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: i,
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    lineClamp: 1,
                                    children: s.name,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: S.purchaseSummaryPrice,
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: l,
                        }),
                        (0, r.jsx)(f.LZC, { size: 4 }),
                        (0, r.jsx)(f.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: z.intl.string(z.t["5dWOZX"]),
                        }),
                    ],
                }),
            ],
        })
    );
}
function P(e) {
    var t;
    let { guildProductListing: n, guildId: a } = e,
        i = null != (t = n.attachments) ? t : [],
        s = i.length > 1,
        c = (0, _.Z)({
            guildId: a,
            productId: n.id,
        });
    return 0 === i.length
        ? null
        : (0, r.jsx)(Z.Z, {
              label: z.intl.string(z.t.HOkHPB),
              children: (0, r.jsxs)("div", {
                  className: l()(S.attachmentsContainer, { [S.attachmentsContainerMultiple]: s }),
                  children: [
                      (0, r.jsx)("div", {
                          className: S.attachmentGrid,
                          children: i.map((e) => (0, r.jsx)(C.Z, { attachment: e }, e.id)),
                      }),
                      (0, r.jsx)("div", {
                          children: (0, r.jsx)(
                              m.zxk,
                              (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, c),
                          ),
                      }),
                  ],
              }),
          });
}
function L(e) {
    let { role: t } = e;
    return null == t
        ? null
        : (0, r.jsx)(Z.Z, {
              label: z.intl.string(z.t.gWBNet),
              children: (0, r.jsx)(N.Z, { role: t }),
          });
}
function w(e) {
    return (0, r.jsx)(f.Text, {
        tag: "span",
        variant: "text-md/semibold",
        color: "text-default",
        children: e,
    });
}
function T(e) {
    var t;
    let { onClose: n, transitionState: i, guildProductListingId: l, guildId: s, skuPricePreview: m } = e,
        x = (0, u.e7)([b.Z], () => b.Z.getGuildProduct(l));
    c()(null != x, "guildProductListing cannot be null");
    let [v, p] = a.useState(!1);
    a.useEffect(() => {
        !(async function () {
            try {
                p(!0), await (0, g.cf)(s, l), p(!1);
            } catch (e) {
                n(),
                    (0, h.Z)({
                        body: z.intl.string(z.t.VQ0lXY),
                        confirmText: z.intl.string(z.t["NX+WJN"]),
                        header: z.intl.string(z.t.OCwKlu),
                        confirmButtonColor: d.zx.Colors.BRAND,
                    });
            }
        })();
    }, [s, l, n]);
    let y = (null != (t = x.attachments) ? t : []).length > 0,
        C = x.role_id,
        Z = (0, u.e7)([j.Z], () => (null != C ? j.Z.getRole(s, C) : void 0));
    return (0, r.jsx)(o.Modal, {
        title: z.intl.string(z.t.dhAgv3),
        subtitle: z.intl.format(z.t.X6yvvo, {
            productName: x.name,
            emphasisHook: w,
        }),
        onClose: n,
        transitionState: i,
        size: "md",
        actions: [],
        children: v
            ? (0, r.jsx)(f.$jN, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(f.Text, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: [
                              y ? z.intl.string(z.t["A/RnkK"]) + " " : "",
                              null != Z
                                  ? z.intl.format(z.t.IeJDKs, {
                                        roleName: Z.name,
                                        emphasisHook: w,
                                    })
                                  : "",
                          ],
                      }),
                      (0, r.jsx)(f.LZC, { size: 12 }),
                      (0, r.jsx)(f.Text, {
                          variant: "text-md/normal",
                          color: "text-default",
                          children: z.intl.string(z.t["9S3QHF"]),
                      }),
                      (0, r.jsx)(f.LZC, { size: 24 }),
                      (0, r.jsx)(O, {
                          guildProductListing: x,
                          guildId: s,
                          skuPricePreview: m,
                      }),
                      (0, r.jsx)(f.LZC, { size: 32 }),
                      (0, r.jsx)("div", { className: S.divider }),
                      (0, r.jsx)(f.LZC, { size: 32 }),
                      (0, r.jsxs)("ul", {
                          className: S.benefitsContainer,
                          children: [
                              (0, r.jsx)(P, {
                                  guildProductListing: x,
                                  guildId: s,
                              }),
                              (0, r.jsx)(L, { role: Z }),
                          ],
                      }),
                  ],
              }),
    });
}

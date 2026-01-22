n.d(t, {
    A: () => d,
}),
    n(801541);
var r = n(627968);
n(64700);
var i = n(889137),
    a = n(397927),
    s = n(547065),
    o = n(166532),
    l = n(788868),
    c = n(985018),
    u = n(54196);

function d(e) {
    let { step: t, onClose: n, giftingOrigin: d } = e,
        { enabled: f } = s.P.useExperiment(
            {
                location: "CollectiblesGiftPaymentModalHeader",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        p = (0, i.YW)(t)
            .with(o.pn.REVIEW, () => c.intl.string(c.t.JbRd5s))
            .with(o.pn.ADD_PAYMENT_STEPS, () => c.intl.string(c.t.QiGOak))
            .with(o.pn.GIFT_CUSTOMIZATION, () =>
                f && d === l.vQ.DM_CHANNEL ? c.intl.string(c.t["xU+d9M"]) : c.intl.string(c.t["JCFN/y"]),
            )
            .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => c.intl.string(c.t.lDbi6H))
            .with(o.pn.CONFIRM, () => "")
            .otherwise(() => null);
    return null == p
        ? null
        : (0, r.jsxs)(a.rQ0, {
              "data-migration-pending": !0,
              className: u.H,
              separator: t !== o.pn.CONFIRM,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "heading-lg/semibold",
                      children: p,
                  }),
                  (0, r.jsx)(a.s_y, {
                      "data-migration-pending": !0,
                      onClick: n,
                      className: u.P,
                  }),
              ],
          });
}

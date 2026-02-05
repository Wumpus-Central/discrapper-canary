"use strict";
n.d(t, { A: () => d }), n(801541);
var r = n(627968);
n(64700);
var i = n(889137),
    a = n(397927),
    s = n(547065),
    o = n(166532),
    l = n(788868),
    u = n(985018),
    c = n(54196);
function d(e) {
    let { step: t, onClose: n, giftingOrigin: d } = e,
        { enabled: _ } = s.P.useExperiment(
            { location: "CollectiblesGiftPaymentModalHeader" },
            { autoTrackExposure: !1 },
        ),
        f = (0, i.YW)(t)
            .with(o.pn.REVIEW, () => u.intl.string(u.t.JbRd5s))
            .with(o.pn.ADD_PAYMENT_STEPS, () => u.intl.string(u.t.QiGOak))
            .with(o.pn.GIFT_CUSTOMIZATION, () =>
                _ && d === l.vQ.DM_CHANNEL ? u.intl.string(u.t["xU+d9M"]) : u.intl.string(u.t["JCFN/y"]),
            )
            .with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => u.intl.string(u.t.lDbi6H))
            .with(o.pn.CONFIRM, () => "")
            .otherwise(() => null);
    return null == f
        ? null
        : (0, r.jsxs)(a.rQ0, {
              "data-migration-pending": !0,
              className: c.H,
              separator: t !== o.pn.CONFIRM,
              children: [
                  (0, r.jsx)(a.Heading, { variant: "heading-lg/semibold", children: f }),
                  (0, r.jsx)(a.s_y, { "data-migration-pending": !0, onClick: n, className: c.P }),
              ],
          });
}

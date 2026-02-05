"use strict";
n.d(t, { A: () => u }), n(801541);
var r = n(627968);
n(64700);
var i = n(889137),
    a = n(397927),
    s = n(166532),
    o = n(985018),
    l = n(818413);
function u(e) {
    let { step: t, onClose: n, isGift: u } = e,
        c = (0, i.YW)(t)
            .with(s.pn.REVIEW, () => (u ? o.intl.string(o.t.wKaVLC) : o.intl.string(o.t.Whxhpm)))
            .with(s.pn.ADD_PAYMENT_STEPS, () => o.intl.string(o.t.QiGOak))
            .with(s.pn.GIFT_CUSTOMIZATION, () => o.intl.string(o.t["JCFN/y"]))
            .with(s.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => o.intl.string(o.t.lDbi6H))
            .with(s.pn.CONFIRM, () => "")
            .otherwise(() => null);
    return null == c
        ? null
        : (0, r.jsxs)(a.rQ0, {
              "data-migration-pending": !0,
              className: l.H,
              separator: t !== s.pn.CONFIRM,
              children: [
                  (0, r.jsx)(a.Heading, { variant: "heading-lg/semibold", children: c }),
                  (0, r.jsx)(a.s_y, { "data-migration-pending": !0, onClick: n, className: l.P }),
              ],
          });
}

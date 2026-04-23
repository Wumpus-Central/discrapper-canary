"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(783878),
    s = n(778712),
    a = n(966327),
    o = n(937008),
    l = n(427262),
    u = n(985018);
let c = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: c, recipients: d } = e,
        { giftRecipient: _, setGiftRecipient: f } = (0, o.Pv)();
    return null == t
        ? null
        : (0, r.jsx)("div", {
              className: c,
              children: (0, r.jsx)(i.Z, {
                  selectionMode: "single",
                  label: u.intl.string(u.t.xFn72s),
                  placeholder: u.intl.string(u.t.R0vK0N),
                  value: _,
                  onSelectionChange: (e) => {
                      n(e, t), f(e);
                  },
                  options: d.map((e) => ({
                      id: e.id,
                      value: e,
                      label: `${l.Ay.getUserTag(e)}`,
                      leading: (0, r.jsx)(a.A, { user: e, size: s._3.SIZE_20 }),
                  })),
              }),
          });
};

n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var r = n(783878),
    i = n(778712),
    s = n(966327),
    a = n(937008),
    o = n(427262),
    u = n(985018);
let d = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: d, recipients: c } = e,
        { giftRecipient: C, setGiftRecipient: p } = (0, a.Pv)();
    return null == t
        ? null
        : (0, l.jsx)("div", {
              className: d,
              children: (0, l.jsx)(r.Z, {
                  selectionMode: "single",
                  label: u.intl.string(u.t.xFn72s),
                  placeholder: u.intl.string(u.t.R0vK0N),
                  value: C,
                  onSelectionChange: (e) => {
                      n(e, t), p(e);
                  },
                  options: c.map((e) => ({
                      id: e.id,
                      value: e,
                      label: `${o.Ay.getUserTag(e)}`,
                      leading: (0, l.jsx)(s.A, { user: e, size: i._3.SIZE_20 }),
                  })),
              }),
          });
};

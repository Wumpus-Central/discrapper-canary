n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(783878),
    r = n(778712),
    s = n(966327),
    a = n(937008),
    o = n(427262),
    u = n(375708);
let c = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: c, recipients: d } = e,
        { giftRecipient: C, setGiftRecipient: p } = (0, a.Pv)();
    return null == t
        ? null
        : (0, l.jsx)("div", {
              className: c,
              children: (0, l.jsx)(i.Z, {
                  selectionMode: "single",
                  label: u.intl.string(u.t.xFn72s),
                  placeholder: u.intl.string(u.t.R0vK0N),
                  value: C?.id,
                  onSelectionChange: (e) => {
                      let l = d.find((t) => t.id === e);
                      null != l && (n(l, t), p(l));
                  },
                  options: d.map((e) => ({
                      id: e.id,
                      value: e.id,
                      label: `${o.Ay.getUserTag(e)}`,
                      leading: (0, l.jsx)(s.A, { user: e, size: r._3.SIZE_20 }),
                  })),
              }),
          });
};

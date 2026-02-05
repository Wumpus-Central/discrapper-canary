"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(554146),
    s = n(43105),
    o = n(379848),
    l = n(49999),
    u = n(985018),
    c = n(345394);
let d = (e) => {
    let { children: t } = e,
        [n, d] = (0, o.kn)([a.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [_, f] = i.useState(!1),
        p = i.useRef(null);
    i.useEffect(() => {
        let e = setTimeout(() => {
            f(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let h = i.useCallback(() => {
        d(l.i.USER_DISMISS);
    }, [d]);
    return n !== a.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", { ref: p, children: t }),
                  (0, r.jsx)(s.A, {
                      targetElementRef: p,
                      shouldShow: _,
                      onRequestClose: h,
                      position: "left",
                      title: u.intl.string(u.t.V5y3qZ),
                      body: u.intl.string(u.t.eSDHDk),
                      graphic: { type: "image", src: c.A },
                  }),
              ],
          });
};

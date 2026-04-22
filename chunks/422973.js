"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(554146),
    r = n(265486),
    a = n(932001),
    o = n(49999),
    c = n(985018),
    u = n(345394);
let d = (e) => {
    let { children: t } = e,
        [n, d] = (0, a.kn)([s.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [h, m] = l.useState(!1),
        p = l.useRef(null);
    l.useEffect(() => {
        let e = setTimeout(() => {
            m(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let f = l.useCallback(() => {
        d(o.i.USER_DISMISS);
    }, [d]);
    return n !== s.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)("div", { ref: p, children: t }),
                  (0, i.jsx)(r.A, {
                      targetElementRef: p,
                      shouldShow: h,
                      onRequestClose: f,
                      position: "left",
                      title: c.intl.string(c.t.V5y3qZ),
                      body: c.intl.string(c.t.eSDHDk),
                      graphic: { type: "image", src: u.A },
                  }),
              ],
          });
};

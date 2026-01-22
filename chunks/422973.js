n.d(t, { A: () => d }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(554146),
    s = n(43105),
    o = n(379848),
    l = n(49999),
    c = n(985018),
    u = n(345394);
let d = (e) => {
    let { children: t } = e,
        [n, d] = (0, o.kn)([a.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [f, p] = i.useState(!1),
        _ = i.useRef(null);
    i.useEffect(() => {
        let e = setTimeout(() => {
            p(!0);
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
                  (0, r.jsx)("div", {
                      ref: _,
                      children: t,
                  }),
                  (0, r.jsx)(s.A, {
                      targetElementRef: _,
                      shouldShow: f,
                      onRequestClose: h,
                      position: "left",
                      title: c.intl.string(c.t.V5y3qZ),
                      body: c.intl.string(c.t.eSDHDk),
                      graphic: {
                          type: "image",
                          src: u.A,
                      },
                  }),
              ],
          });
};

n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(704215),
    o = n(264418),
    s = n(243778),
    l = n(921944),
    c = n(388032),
    u = n(798690);
let d = (e) => {
    let { children: t } = e,
        [n, d] = (0, s.US)([a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [f, p] = i.useState(!1),
        _ = i.useRef(null);
    i.useEffect(() => {
        let e = setTimeout(() => {
            p(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let m = i.useCallback(() => {
        d(l.L.USER_DISMISS);
    }, [d]);
    return n !== a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", {
                      ref: _,
                      children: t,
                  }),
                  (0, r.jsx)(o.J, {
                      targetElementRef: _,
                      shouldShow: f,
                      onRequestClose: m,
                      position: "left",
                      title: c.intl.string(c.t.V5y3qZ),
                      body: c.intl.string(c.t.eSDHDk),
                      graphic: {
                          type: "image",
                          src: u.Z,
                      },
                  }),
              ],
          });
};

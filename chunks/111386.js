n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(704215),
    o = n(28664),
    s = n(481060),
    l = n(243778),
    c = n(388032),
    u = n(170337),
    d = n(442937);
let f = () =>
        (0, r.jsxs)("div", {
            className: u.coachtipInner,
            children: [
                (0, r.jsx)("img", {
                    src: d,
                    alt: c.intl.string(c.t["9wkT19"]),
                    className: u.coachtipAsset,
                }),
                (0, r.jsxs)("div", {
                    className: u.coachtipTextContainer,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: "heading-lg/semibold",
                            children: c.intl.string(c.t.V5y3qa),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            children: c.intl.string(c.t.eSDHDg),
                        }),
                    ],
                }),
            ],
        }),
    _ = (e) => {
        let { children: t } = e,
            [n] = (0, l.US)([a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
            [s, c] = i.useState(!1);
        return (i.useEffect(() => {
            setTimeout(() => {
                c(!0);
            }, 300);
        }),
        n !== a.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
            ? t
            : (0, r.jsx)(o.u, {
                  __unsupportedReactNodeAsText: (0, r.jsx)(f, {}),
                  position: "left",
                  forceOpen: s,
                  shouldShow: s,
                  "aria-label": "test",
                  children: (0, r.jsx)("div", { children: t }),
              });
    };

n.d(t, { Z: () => m }), n(47120);
var l = n(200651),
    a = n(192379),
    i = n(704215),
    r = n(481060),
    o = n(243778),
    s = n(388032),
    c = n(649314),
    d = n(442937);
let u = () =>
        (0, l.jsxs)('div', {
            className: c.coachtipInner,
            children: [
                (0, l.jsx)('img', {
                    src: d,
                    alt: s.intl.string(s.t['9wkT19']),
                    className: c.coachtipAsset
                }),
                (0, l.jsxs)('div', {
                    className: c.coachtipTextContainer,
                    children: [
                        (0, l.jsx)(r.X6q, {
                            variant: 'heading-lg/semibold',
                            children: s.intl.string(s.t.V5y3qa)
                        }),
                        (0, l.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: s.intl.string(s.t.eSDHDg)
                        })
                    ]
                })
            ]
        }),
    m = (e) => {
        let { children: t } = e,
            [n] = (0, o.US)([i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
            [s, d] = a.useState(!1);
        return (a.useEffect(() => {
            setTimeout(() => {
                d(!0);
            }, 300);
        }),
        n !== i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
            ? (0, l.jsx)(l.Fragment, { children: t })
            : (0, l.jsx)(r.ua7, {
                  text: (0, l.jsx)(u, {}),
                  tooltipClassName: c.coachtip,
                  tooltipContentClassName: c.coachtipContent,
                  position: 'left',
                  allowOverflow: !0,
                  forceOpen: s,
                  shouldShow: s,
                  hideOnClick: !1,
                  'aria-label': 'test',
                  children: (e) =>
                      (0, l.jsx)('div', {
                          ...e,
                          children: t
                      })
              });
    };

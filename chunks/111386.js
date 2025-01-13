n(47120);
var l = n(200651),
    a = n(192379),
    i = n(704215),
    r = n(481060),
    o = n(243778),
    s = n(388032),
    u = n(649314),
    c = n(442937);
let d = () =>
    (0, l.jsxs)('div', {
        className: u.coachtipInner,
        children: [
            (0, l.jsx)('img', {
                src: c,
                alt: s.intl.string(s.t['9wkT19']),
                className: u.coachtipAsset
            }),
            (0, l.jsxs)('div', {
                className: u.coachtipTextContainer,
                children: [
                    (0, l.jsx)(r.Heading, {
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
    });
t.Z = (e) => {
    let { children: t } = e,
        [n] = (0, o.US)([i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [s, c] = a.useState(!1);
    return (a.useEffect(() => {
        setTimeout(() => {
            c(!0);
        }, 300);
    }),
    n !== i.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
        ? (0, l.jsx)(l.Fragment, { children: t })
        : (0, l.jsx)(r.Tooltip, {
              text: (0, l.jsx)(d, {}),
              tooltipClassName: u.coachtip,
              tooltipContentClassName: u.coachtipContent,
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

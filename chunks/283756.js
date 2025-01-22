var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(249458),
    u = r(138599),
    c = r(388032),
    d = r(435499);
let f = (e) => {
    let { onPlay: n, externalURL: r, className: a, renderLinkComponent: f, inactive: p, messageId: h, channelId: _ } = e;
    return (0, i.jsx)(l.G.Consumer, {
        children: (e) =>
            (0, i.jsxs)('div', {
                className: o()(a, d.wrapper, { [d.disableInteractions]: e.disableInteractions }),
                children: [
                    p && null == n
                        ? (0, i.jsx)('div', {
                              className: d.iconWrapper,
                              children: (0, i.jsx)(s.PlayIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: d.iconPlay
                              })
                          })
                        : null,
                    null != n
                        ? (0, i.jsx)(s.Clickable, {
                              onClick: n,
                              className: o()(d.iconWrapperActive),
                              tabIndex: p ? -1 : 0,
                              'aria-label': c.intl.string(c.t.RscU7O),
                              children: (0, i.jsx)(s.PlayIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: d.iconPlay
                              })
                          })
                        : null,
                    null != r
                        ? f({
                              href: r,
                              target: '_blank',
                              rel: 'noreferrer noopener',
                              className: d.iconWrapperActive,
                              children: (0, i.jsx)(u.Z, {
                                  'aria-label': c.intl.string(c.t.wuRE8P),
                                  className: null != n ? d.iconExternalMargins : d.iconExternal
                              }),
                              messageId: h,
                              channelId: _
                          })
                        : null
                ]
            })
    });
};
n.Z = f;

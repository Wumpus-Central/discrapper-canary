n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(249458),
    l = n(138599),
    u = n(388032),
    c = n(559618);
let d = (e) => {
    let { onPlay: t, externalURL: n, className: r, renderLinkComponent: d, inactive: f, messageId: _, channelId: p } = e;
    return (0, i.jsx)(o.G.Consumer, {
        children: (e) =>
            (0, i.jsxs)('div', {
                className: a()(r, c.wrapper, { [c.disableInteractions]: e.disableInteractions }),
                children: [
                    f && null == t
                        ? (0, i.jsx)('div', {
                              className: c.iconWrapper,
                              children: (0, i.jsx)(s.o1U, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: c.iconPlay
                              })
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(s.P3F, {
                              onClick: t,
                              className: a()(c.iconWrapperActive),
                              tabIndex: f ? -1 : 0,
                              'aria-label': u.intl.string(u.t.RscU7O),
                              children: (0, i.jsx)(s.o1U, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: c.iconPlay
                              })
                          })
                        : null,
                    null != n
                        ? d({
                              href: n,
                              target: '_blank',
                              rel: 'noreferrer noopener',
                              className: c.iconWrapperActive,
                              children: (0, i.jsx)(l.Z, {
                                  'aria-label': u.intl.string(u.t.wuRE8P),
                                  className: null != t ? c.iconExternalMargins : c.iconExternal
                              }),
                              messageId: _,
                              channelId: p
                          })
                        : null
                ]
            })
    });
};

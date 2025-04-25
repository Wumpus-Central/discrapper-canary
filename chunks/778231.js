n.d(t, { Z: () => h });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(384275),
    s = n(686546),
    c = n(522289),
    d = n(359993),
    u = n(146078),
    m = n(881998),
    p = n(709054),
    x = n(388032),
    b = n(711845),
    _ = n(970952);
let h = (e) => {
    var t, n;
    let { entry: h } = e,
        { name: f } = h,
        g = (0, i.e7)([m.Z], () => {
            let e = m.Z.getApps();
            return null != e ? e.find((e) => e.application.id === h.id) : null;
        }),
        v = null != (n = h.getIconURL(40)) ? n : _,
        j = (0, d.Z)({ application: h }),
        y = l.useRef(!1);
    l.useEffect(() => {
        y.current || (o.Z.fetch(), (y.current = !0));
    }, []);
    let O = null != g ? p.default.extractTimestamp(g.id) : void 0;
    return (0, r.jsxs)('div', {
        className: b.container,
        children: [
            (0, r.jsx)(a.X6q, {
                className: b.header,
                variant: 'heading-sm/semibold',
                children: x.intl.string(x.t['aYfK//'])
            }),
            (0, r.jsx)('div', {
                className: b.appContainer,
                children: (0, r.jsxs)('div', {
                    className: b.appInfo,
                    children: [
                        (0, r.jsx)(s.ZP, {
                            mask: s.ZP.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: b.appIconMask,
                            children: (0, r.jsx)('img', {
                                src: v,
                                alt: '',
                                className: b.appIcon
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: b.textContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/medium',
                                    children: f
                                }),
                                j.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(a.Text, {
                                                  color: 'text-normal',
                                                  variant: 'text-md/normal',
                                                  children: (0, u.Z)(j.length)
                                              }),
                                              (0, r.jsx)(c.Z, {
                                                  className: b.guildStack,
                                                  guilds: j,
                                                  maxGuilds: 6
                                              })
                                          ]
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(a.Text, {
                                                  color: 'text-normal',
                                                  variant: 'text-md/normal',
                                                  children: null == (t = h.bot) ? void 0 : t.tag
                                              }),
                                              null != O &&
                                                  (0, r.jsx)(a.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-md/normal',
                                                      children: x.intl.formatToPlainString(x.t.C9rUOz, { authorizedAt: O })
                                                  })
                                          ]
                                      })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

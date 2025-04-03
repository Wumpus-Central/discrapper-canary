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
    x = n(709054),
    p = n(388032),
    f = n(711845),
    b = n(970952);
let h = (e) => {
    var t, n;
    let { entry: h } = e,
        { name: _ } = h,
        g = (0, i.e7)([m.Z], () => {
            let e = m.Z.getApps();
            return null != e ? e.find((e) => e.application.id === h.id) : null;
        }),
        v = null != (n = h.getIconURL(40)) ? n : b,
        j = (0, d.Z)({ application: h }),
        N = l.useRef(!1);
    l.useEffect(() => {
        N.current || (o.Z.fetch(), (N.current = !0));
    }, []);
    let y = null != g ? x.default.extractTimestamp(g.id) : void 0;
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            (0, r.jsx)(a.X6q, {
                className: f.header,
                variant: 'heading-sm/semibold',
                children: p.NW.string(p.t['aYfK//'])
            }),
            (0, r.jsx)('div', {
                className: f.appContainer,
                children: (0, r.jsxs)('div', {
                    className: f.appInfo,
                    children: [
                        (0, r.jsx)(s.ZP, {
                            mask: s.ZP.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: f.appIconMask,
                            children: (0, r.jsx)('img', {
                                src: v,
                                alt: '',
                                className: f.appIcon
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: f.textContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/medium',
                                    children: _
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
                                                  className: f.guildStack,
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
                                              null != y &&
                                                  (0, r.jsx)(a.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-md/normal',
                                                      children: p.NW.formatToPlainString(p.t.C9rUOz, { authorizedAt: y })
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

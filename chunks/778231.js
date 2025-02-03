n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(384275),
    l = n(824606),
    u = n(686546),
    c = n(522289),
    d = n(146078),
    f = n(881998),
    _ = n(709054),
    p = n(388032),
    h = n(914301),
    m = n(970952);
let g = 40,
    E = (e) => {
        var t, n;
        let { entry: E } = e,
            { name: v } = E,
            y = (0, a.e7)([f.Z], () => {
                let e = f.Z.getApps();
                return null != e ? e.find((e) => e.application.id === E.id) : null;
            }),
            I = null !== (n = E.getIconURL(g)) && void 0 !== n ? n : m,
            b = (0, l.Z)({ application: E }),
            T = r.useRef(!1);
        r.useEffect(() => {
            T.current || (o.Z.fetch(), (T.current = !0));
        }, []);
        let S = null != y ? _.default.extractTimestamp(y.id) : void 0;
        return (0, i.jsxs)('div', {
            className: h.container,
            children: [
                (0, i.jsx)(s.X6q, {
                    className: h.header,
                    variant: 'heading-sm/semibold',
                    children: p.intl.string(p.t['aYfK//'])
                }),
                (0, i.jsx)('div', {
                    className: h.appContainer,
                    children: (0, i.jsxs)('div', {
                        className: h.appInfo,
                        children: [
                            (0, i.jsx)(u.ZP, {
                                mask: u.ZP.Masks.AVATAR_DEFAULT,
                                width: g,
                                height: g,
                                className: h.appIconMask,
                                children: (0, i.jsx)('img', {
                                    src: I,
                                    alt: '',
                                    className: h.appIcon
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: h.textContainer,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        color: 'header-primary',
                                        variant: 'text-md/medium',
                                        children: v
                                    }),
                                    b.length > 0
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(s.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-md/normal',
                                                      children: (0, d.Z)(b.length)
                                                  }),
                                                  (0, i.jsx)(c.Z, {
                                                      className: h.guildStack,
                                                      guilds: b,
                                                      maxGuilds: 6
                                                  })
                                              ]
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(s.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-md/normal',
                                                      children: null === (t = E.bot) || void 0 === t ? void 0 : t.tag
                                                  }),
                                                  null != S &&
                                                      (0, i.jsx)(s.Text, {
                                                          color: 'text-normal',
                                                          variant: 'text-md/normal',
                                                          children: p.intl.formatToPlainString(p.t.C9rUOz, { authorizedAt: S })
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

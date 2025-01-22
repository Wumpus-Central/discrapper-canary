var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(384275),
    u = r(824606),
    c = r(686546),
    d = r(522289),
    f = r(146078),
    p = r(881998),
    h = r(709054),
    _ = r(388032),
    m = r(914301),
    g = r(970952);
let E = 64,
    v = (e) => {
        var n, r;
        let { entry: v } = e,
            { name: y } = v,
            b = (0, o.e7)([p.Z], () => {
                let e = p.Z.getApps();
                return null != e ? e.find((e) => e.application.id === v.id) : null;
            }),
            I = null !== (r = v.getIconURL(E)) && void 0 !== r ? r : g,
            T = (0, u.Z)({ application: v }),
            S = a.useRef(!1);
        a.useEffect(() => {
            !S.current && (l.Z.fetch(), (S.current = !0));
        }, []);
        let A = null != b ? h.default.extractTimestamp(b.id) : void 0;
        return (0, i.jsxs)('div', {
            className: m.container,
            children: [
                (0, i.jsx)(s.Heading, {
                    className: m.header,
                    variant: 'heading-sm/semibold',
                    children: _.intl.string(_.t['aYfK//'])
                }),
                (0, i.jsx)('div', {
                    className: m.appContainer,
                    children: (0, i.jsxs)('div', {
                        className: m.appInfo,
                        children: [
                            (0, i.jsx)(c.ZP, {
                                mask: c.ZP.Masks.AVATAR_DEFAULT,
                                width: E,
                                height: E,
                                className: m.appIconMask,
                                children: (0, i.jsx)('img', {
                                    src: I,
                                    alt: '',
                                    className: m.appIcon
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: m.textContainer,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        color: 'header-primary',
                                        variant: 'text-sm/semibold',
                                        children: y
                                    }),
                                    T.length > 0
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(s.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-xs/normal',
                                                      children: (0, f.Z)(T.length)
                                                  }),
                                                  (0, i.jsx)(d.Z, {
                                                      className: m.guildStack,
                                                      guilds: T,
                                                      maxGuilds: 6
                                                  })
                                              ]
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(s.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-xs/normal',
                                                      children: null === (n = v.bot) || void 0 === n ? void 0 : n.tag
                                                  }),
                                                  null != A &&
                                                      (0, i.jsx)(s.Text, {
                                                          color: 'text-normal',
                                                          variant: 'text-xs/normal',
                                                          children: _.intl.formatToPlainString(_.t.C9rUOz, { authorizedAt: A })
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
n.Z = v;

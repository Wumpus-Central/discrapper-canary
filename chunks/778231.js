var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(384275),
    u = r(824606),
    c = r(686546),
    d = r(522289),
    f = r(146078),
    _ = r(881998),
    h = r(709054),
    p = r(388032),
    m = r(914301),
    g = r(970952);
let E = 64,
    v = (e) => {
        var n, r;
        let { entry: v } = e,
            { name: I } = v,
            T = (0, s.e7)([_.Z], () => {
                let e = _.Z.getApps();
                return null != e ? e.find((e) => e.application.id === v.id) : null;
            }),
            b = null !== (r = v.getIconURL(E)) && void 0 !== r ? r : g,
            y = (0, u.Z)({ application: v }),
            S = a.useRef(!1);
        a.useEffect(() => {
            !S.current && (l.Z.fetch(), (S.current = !0));
        }, []);
        let A = null != T ? h.default.extractTimestamp(T.id) : void 0;
        return (0, i.jsxs)('div', {
            className: m.container,
            children: [
                (0, i.jsx)(o.Heading, {
                    className: m.header,
                    variant: 'heading-sm/semibold',
                    children: p.intl.string(p.t['aYfK//'])
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
                                    src: b,
                                    alt: '',
                                    className: m.appIcon
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: m.textContainer,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        color: 'header-primary',
                                        variant: 'text-sm/semibold',
                                        children: I
                                    }),
                                    y.length > 0
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(o.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-xs/normal',
                                                      children: (0, f.Z)(y.length)
                                                  }),
                                                  (0, i.jsx)(d.Z, {
                                                      className: m.guildStack,
                                                      guilds: y,
                                                      maxGuilds: 6
                                                  })
                                              ]
                                          })
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(o.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-xs/normal',
                                                      children: null === (n = v.bot) || void 0 === n ? void 0 : n.tag
                                                  }),
                                                  null != A &&
                                                      (0, i.jsx)(o.Text, {
                                                          color: 'text-normal',
                                                          variant: 'text-xs/normal',
                                                          children: p.intl.formatToPlainString(p.t.C9rUOz, { authorizedAt: A })
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

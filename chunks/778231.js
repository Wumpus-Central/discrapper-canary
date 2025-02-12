n.d(t, { Z: () => g });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(384275),
    o = n(824606),
    d = n(686546),
    c = n(522289),
    u = n(146078),
    m = n(881998),
    x = n(709054),
    _ = n(388032),
    h = n(698184),
    v = n(970952);
let g = (e) => {
    var t, n;
    let { entry: g } = e,
        { name: p } = g,
        f = (0, r.e7)([m.Z], () => {
            let e = m.Z.getApps();
            return null != e ? e.find((e) => e.application.id === g.id) : null;
        }),
        b = null !== (n = g.getIconURL(40)) && void 0 !== n ? n : v,
        Z = (0, o.Z)({ application: g }),
        j = i.useRef(!1);
    i.useEffect(() => {
        j.current || (s.Z.fetch(), (j.current = !0));
    }, []);
    let I = null != f ? x.default.extractTimestamp(f.id) : void 0;
    return (0, l.jsxs)('div', {
        className: h.container,
        children: [
            (0, l.jsx)(a.X6q, {
                className: h.header,
                variant: 'heading-sm/semibold',
                children: _.intl.string(_.t['aYfK//'])
            }),
            (0, l.jsx)('div', {
                className: h.appContainer,
                children: (0, l.jsxs)('div', {
                    className: h.appInfo,
                    children: [
                        (0, l.jsx)(d.ZP, {
                            mask: d.ZP.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: h.appIconMask,
                            children: (0, l.jsx)('img', {
                                src: b,
                                alt: '',
                                className: h.appIcon
                            })
                        }),
                        (0, l.jsxs)('div', {
                            className: h.textContainer,
                            children: [
                                (0, l.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/medium',
                                    children: p
                                }),
                                Z.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(a.Text, {
                                                  color: 'text-normal',
                                                  variant: 'text-md/normal',
                                                  children: (0, u.Z)(Z.length)
                                              }),
                                              (0, l.jsx)(c.Z, {
                                                  className: h.guildStack,
                                                  guilds: Z,
                                                  maxGuilds: 6
                                              })
                                          ]
                                      })
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(a.Text, {
                                                  color: 'text-normal',
                                                  variant: 'text-md/normal',
                                                  children: null === (t = g.bot) || void 0 === t ? void 0 : t.tag
                                              }),
                                              null != I &&
                                                  (0, l.jsx)(a.Text, {
                                                      color: 'text-normal',
                                                      variant: 'text-md/normal',
                                                      children: _.intl.formatToPlainString(_.t.C9rUOz, { authorizedAt: I })
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

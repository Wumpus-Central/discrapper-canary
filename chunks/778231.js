n.d(t, { Z: () => x });
var r = n(255367),
    a = n(73800),
    i = n(442837),
    o = n(481060),
    l = n(384275),
    s = n(686546),
    c = n(522289),
    d = n(359993),
    u = n(146078),
    m = n(881998),
    p = n(709054),
    _ = n(388032),
    b = n(711845),
    g = n(970952);
let x = (e) => {
    var t, n;
    let { entry: x } = e,
        { name: h } = x,
        f = (0, i.e7)([m.Z], () => m.Z.getNewestTokenForApplication(x.id)),
        v = null != (n = x.getIconURL(40)) ? n : g,
        j = (0, d.Z)({ application: x }),
        C = a.useRef(!1);
    a.useEffect(() => {
        C.current || (l.Z.fetch(), (C.current = !0));
    }, []);
    let y = null != f ? p.default.extractTimestamp(f.id) : void 0;
    return (0, r.jsxs)('div', {
        className: b.container,
        children: [
            (0, r.jsx)(o.X6q, {
                className: b.header,
                variant: 'heading-sm/semibold',
                children: _.intl.string(_.t['aYfK//'])
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
                                (0, r.jsx)(o.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/medium',
                                    children: h
                                }),
                                j.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Text, {
                                                  color: 'text-default',
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
                                              (0, r.jsx)(o.Text, {
                                                  color: 'text-default',
                                                  variant: 'text-md/normal',
                                                  children: null == (t = x.bot) ? void 0 : t.tag
                                              }),
                                              null != y &&
                                                  (0, r.jsx)(o.Text, {
                                                      color: 'text-default',
                                                      variant: 'text-md/normal',
                                                      children: _.intl.formatToPlainString(_.t.C9rUOz, { authorizedAt: y })
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

s.d(e, { AnnouncementModal: () => g });
var n = s(200651);
s(192379);
var r = s(481060),
    o = s(388032),
    i = s(751478),
    c = s(232474);
let a = s(788661),
    l = () =>
        (0, n.jsx)('div', {
            className: i.gifContainer,
            children: (0, n.jsx)('img', {
                src: c.Z,
                className: i.gif,
                alt: 'Orb GIF'
            })
        }),
    b = () =>
        (0, n.jsx)('img', {
            src: a,
            alt: 'Orb Icon',
            className: i.orbIconSVG
        }),
    f = () =>
        (0, n.jsx)('div', {
            className: i.betaBadge,
            children: o.NW.string(o.t.oW0eUV)
        }),
    u = (t) => {
        let { icon: e, text: s } = t;
        return (0, n.jsxs)('div', {
            className: i.listItem,
            children: [
                'string' == typeof e
                    ? (0, n.jsx)('img', {
                          src: e,
                          className: i.listItemIcon,
                          alt: 'List Icon'
                      })
                    : e,
                (0, n.jsx)('div', {
                    className: i.listItemText,
                    children: s
                })
            ]
        });
    },
    m = (t) => {
        var e, s;
        return (0, n.jsx)(
            r.zxk,
            ((e = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var s = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(s);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(s).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(s, t).enumerable;
                            })
                        )),
                        n.forEach(function (e) {
                            var n;
                            (n = s[e]),
                                e in t
                                    ? Object.defineProperty(t, e, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (t[e] = n);
                        });
                }
                return t;
            })({}, t)),
            (s = s =
                {
                    'aria-label': o.NW.string(o.t.cpT0Cg),
                    look: r.zxk.Looks.BLANK,
                    size: r.zxk.Sizes.NONE,
                    children: (0, n.jsx)(r.P$X, {
                        size: 'md',
                        color: 'currentColor',
                        className: i.closeButtonIcon
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
                : (function (t, e) {
                      var s = Object.keys(t);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(t);
                          s.push.apply(s, n);
                      }
                      return s;
                  })(Object(s)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
                  }),
            e)
        );
    },
    g = (t) => {
        let { onClose: e, ctaOnClick: c, transitionState: a } = t;
        return (0, n.jsxs)(r.Y0X, {
            size: r.CgR.DYNAMIC,
            className: i.container,
            transitionState: a,
            children: [
                (0, n.jsx)(m, {
                    className: i.closeButton,
                    onClick: e
                }),
                (0, n.jsxs)('div', {
                    className: i.marginContainer,
                    children: [
                        (0, n.jsx)(l, {}),
                        (0, n.jsx)('div', {
                            className: i.titleLeadIn,
                            children: o.NW.string(o.t.C1TOOD)
                        }),
                        (0, n.jsxs)('div', {
                            className: i.title,
                            children: [o.NW.string(o.t.XKlAys), (0, n.jsx)(f, {})]
                        }),
                        (0, n.jsxs)('div', {
                            className: i.list,
                            children: [
                                (0, n.jsx)(u, {
                                    icon: s(586248),
                                    text: o.NW.string(o.t.c7MXqK)
                                }),
                                (0, n.jsx)(u, {
                                    icon: s(126642),
                                    text: o.NW.string(o.t.bcmcCg)
                                }),
                                (0, n.jsx)(u, {
                                    icon: (0, n.jsx)(b, {}),
                                    text: o.NW.format(o.t.vt7mWl, { quantity: 200 })
                                })
                            ]
                        }),
                        (0, n.jsx)(r.zxk, {
                            onClick: c,
                            color: i.buttonColor,
                            className: i.button,
                            children: o.NW.string(o.t.LhlgY2)
                        })
                    ]
                })
            ]
        });
    };

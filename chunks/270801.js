n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    a = n(313201),
    o = n(388032),
    s = n(802867);
let c = () =>
        n
            .e('49812')
            .then(n.t.bind(n, 48603, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    u = (e) => {
        var t, n;
        let u = (0, a.Dt)();
        return (0, r.jsxs)(
            l.Y0X,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })({}, e)),
            (n = n =
                {
                    size: l.CgR.SMALL,
                    transitionState: e.transitionState,
                    'aria-labelledby': u,
                    className: s.modal,
                    parentComponent: 'MemberVerificationSuccessModal',
                    children: [
                        (0, r.jsx)('div', {
                            className: s.animationContainer,
                            children: (0, r.jsx)(l.Fmz, {
                                importData: c,
                                className: s.animationMiddle
                            })
                        }),
                        (0, r.jsx)(l.hzk, {
                            children: (0, r.jsxs)('div', {
                                className: s.container,
                                children: [
                                    (0, r.jsx)(l.X6q, {
                                        variant: 'heading-lg/semibold',
                                        className: s.header,
                                        id: u,
                                        children: o.intl.format(o.t.z9qozM, { guildName: e.guildName })
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'header-secondary',
                                        children: o.intl.string(o.t.nwpqyc)
                                    }),
                                    (0, r.jsx)(i.zx, {
                                        className: s.button,
                                        onClick: () => {
                                            (e.onAccept(), e.onClose());
                                        },
                                        fullWidth: !0,
                                        size: i.Ph.LARGE,
                                        children: o.intl.string(o.t.NuzmOD)
                                    })
                                ]
                            })
                        })
                    ]
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    };

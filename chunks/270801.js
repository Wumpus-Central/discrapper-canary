n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(313201),
    a = n(388032),
    o = n(802867);
let s = () =>
        n
            .e('49812')
            .then(n.t.bind(n, 48603, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    c = (e) => {
        var t, n;
        let c = (0, l.Dt)();
        return (0, r.jsxs)(
            i.Y0X,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (n = n =
                {
                    size: i.CgR.SMALL,
                    transitionState: e.transitionState,
                    'aria-labelledby': c,
                    className: o.modal,
                    children: [
                        (0, r.jsx)('div', {
                            className: o.animationContainer,
                            children: (0, r.jsx)(i.Fmz, {
                                importData: s,
                                className: o.animationMiddle
                            })
                        }),
                        (0, r.jsx)(i.hzk, {
                            children: (0, r.jsxs)('div', {
                                className: o.container,
                                children: [
                                    (0, r.jsx)(i.X6q, {
                                        variant: 'heading-lg/semibold',
                                        className: o.header,
                                        id: c,
                                        children: a.intl.format(a.t.z9qozM, { guildName: e.guildName })
                                    }),
                                    (0, r.jsx)(i.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'header-secondary',
                                        children: a.intl.string(a.t.nwpqyc)
                                    }),
                                    (0, r.jsx)(i.zxk, {
                                        className: o.button,
                                        onClick: () => {
                                            e.onAccept(), e.onClose();
                                        },
                                        fullWidth: !0,
                                        size: i.PhG.LARGE,
                                        children: a.intl.string(a.t.NuzmOD)
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

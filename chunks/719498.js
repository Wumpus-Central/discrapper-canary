r.d(t, { default: () => u });
var n = r(200651),
    a = r(192379),
    i = r(481060),
    o = r(933557),
    c = r(540059),
    s = r(925329),
    l = r(296023),
    d = r(388032),
    x = r(821084);
let u = (e) => {
    let { channel: t, application: u, onClose: b, transitionState: m } = e,
        p = (0, c.Q3)('IntegrationsEditLinkedLobbyModal'),
        j = (0, l.w)(t),
        h = a.useCallback(
            () => (
                b(),
                (0, i.ZDy)(async () => {
                    let { default: e } = await r.e('31907').then(r.bind(r, 366854));
                    return (r) => {
                        var a, i;
                        return (0, n.jsx)(
                            e,
                            ((a = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })({}, r)),
                            (i = i =
                                {
                                    channelId: t.id,
                                    application: u
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            a)
                        );
                    };
                })
            ),
            [u, t.id, b]
        ),
        O = (0, o.ZP)(t, !0);
    return (0, n.jsxs)(i.Y0X, {
        transitionState: m,
        'aria-label': d.intl.string(d.t.OJknho),
        children: [
            (0, n.jsx)(i.xBx, {
                separator: !1,
                children: (0, n.jsx)(i.X6q, {
                    variant: 'heading-lg/semibold',
                    children: d.intl.string(d.t.OJknho)
                })
            }),
            (0, n.jsxs)(i.hzk, {
                className: x.content,
                children: [
                    (0, n.jsx)(s.Z, {
                        game: u,
                        size: s.Z.Sizes.XLARGE
                    }),
                    (0, n.jsxs)('div', {
                        className: x.metadata,
                        children: [
                            (0, n.jsxs)('div', {
                                className: x.metadataHeader,
                                children: [
                                    (0, n.jsx)(i.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: u.name
                                    }),
                                    (0, n.jsx)(i.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        children: d.intl.format(d.t['0NJZAQ'], { channelName: O })
                                    })
                                ]
                            }),
                            null != j &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)('div', { className: x.divider }),
                                        (0, n.jsx)(i.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: j
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)(i.mzw, {
                children: [
                    (0, n.jsx)(i.zxk, {
                        onClick: h,
                        color: i.zxk.Colors.RED,
                        children: d.intl.string(d.t.LLWaxc)
                    }),
                    (0, n.jsx)(i.zxk, {
                        onClick: b,
                        look: p ? i.zxk.Looks.FILLED : i.zxk.Looks.LINK,
                        color: i.zxk.Colors.PRIMARY,
                        className: x.cancelButton,
                        children: d.intl.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};

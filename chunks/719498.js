r.d(t, { default: () => p });
var n = r(255367),
    a = r(73800),
    i = r(481060),
    c = r(933557),
    s = r(925329),
    o = r(296023),
    l = r(388032),
    d = r(821084);
let p = (e) => {
    let { channel: t, application: p, onClose: m, transitionState: u } = e,
        x = (0, o.w)(t),
        b = a.useCallback(
            () => (
                m(),
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
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            ((n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n));
                                        }));
                                }
                                return e;
                            })({}, r)),
                            (i = i =
                                {
                                    channelId: t.id,
                                    application: p
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
            [p, t.id, m]
        ),
        j = (0, c.ZP)(t, !0);
    return (0, n.jsxs)(i.Y0X, {
        transitionState: u,
        'aria-label': l.intl.string(l.t.OJknho),
        parentComponent: 'IntegrationsEditLinkedLobbyModal',
        children: [
            (0, n.jsx)(i.xBx, {
                separator: !1,
                children: (0, n.jsx)(i.X6q, {
                    variant: 'heading-lg/semibold',
                    children: l.intl.string(l.t.OJknho)
                })
            }),
            (0, n.jsxs)(i.hzk, {
                className: d.content,
                children: [
                    (0, n.jsx)(s.Z, {
                        game: p,
                        size: s.Z.Sizes.XLARGE
                    }),
                    (0, n.jsxs)('div', {
                        className: d.metadata,
                        children: [
                            (0, n.jsxs)('div', {
                                className: d.metadataHeader,
                                children: [
                                    (0, n.jsx)(i.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: p.name
                                    }),
                                    (0, n.jsx)(i.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        children: l.intl.format(l.t['0NJZAQ'], { channelName: j })
                                    })
                                ]
                            }),
                            null != x &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)('div', { className: d.divider }),
                                        (0, n.jsx)(i.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: x
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
                        variant: 'critical-primary',
                        text: l.intl.string(l.t.LLWaxc),
                        onClick: b
                    }),
                    (0, n.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: d.cancelButton,
                        children: (0, n.jsx)(i.zxk, {
                            variant: 'secondary',
                            text: l.intl.string(l.t['ETE/oK']),
                            onClick: m
                        })
                    })
                ]
            })
        ]
    });
};

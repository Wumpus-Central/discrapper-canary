r.d(t, { default: () => u });
var n = r(200651),
    a = r(192379),
    o = r(481060),
    i = r(933557),
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
                (0, o.ZDy)(async () => {
                    let { default: e } = await r.e('31907').then(r.bind(r, 366854));
                    return (r) => {
                        var a, o;
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
                            (o = o =
                                {
                                    channelId: t.id,
                                    application: u
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            a)
                        );
                    };
                })
            ),
            [u, t.id, b]
        ),
        O = (0, i.ZP)(t, !0);
    return (0, n.jsxs)(o.Y0X, {
        transitionState: m,
        'aria-label': d.NW.string(d.t.OJknho),
        children: [
            (0, n.jsx)(o.xBx, {
                separator: !1,
                children: (0, n.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    children: d.NW.string(d.t.OJknho)
                })
            }),
            (0, n.jsxs)(o.hzk, {
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
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: u.name
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        children: d.NW.format(d.t['0NJZAQ'], { channelName: O })
                                    })
                                ]
                            }),
                            null != j &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)('div', { className: x.divider }),
                                        (0, n.jsx)(o.Text, {
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
            (0, n.jsxs)(o.mzw, {
                children: [
                    (0, n.jsx)(o.zxk, {
                        onClick: h,
                        color: o.zxk.Colors.RED,
                        children: d.NW.string(d.t.LLWaxc)
                    }),
                    (0, n.jsx)(o.zxk, {
                        onClick: b,
                        look: p ? o.zxk.Looks.FILLED : o.zxk.Looks.LINK,
                        color: o.zxk.Colors.PRIMARY,
                        className: x.cancelButton,
                        children: d.NW.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};

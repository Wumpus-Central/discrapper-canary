n.d(t, { default: () => b });
var r = n(200651),
    o = n(192379),
    a = n(481060),
    c = n(156732),
    s = n(17622),
    i = n(279604),
    l = n(535396),
    u = n(367123),
    d = n(388032),
    m = n(136646);
function b(e) {
    var t,
        n,
        { guildId: b, powerup: p } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let { onDeactivate: x, error: j, isLoading: O } = (0, i.ZP)(b, p),
        { onClose: _ } = f,
        h = o.useCallback(
            (e) => {
                x(e).then(() => {
                    null == _ || _();
                });
            },
            [_, x]
        ),
        k = (0, c.Z)(p);
    return (0, r.jsxs)(
        a.Y0X,
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
        })(
            {
                className: m.modal,
                size: a.CgR.SMALL
            },
            f
        )),
        (n = n =
            {
                children: [
                    (0, r.jsxs)(a.hzk, {
                        className: m.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsxs)('div', {
                                className: m.headerContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: m.header,
                                        children: [
                                            (0, r.jsx)(a.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: d.NW.formatToPlainString(u.Z.iEBw1N, { perk: p.title })
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                variant: 'text-sm/medium',
                                                children: d.NW.formatToPlainString(u.Z['7o0K+/'], { perk: p.title })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(a.olH, { onClick: f.onClose })
                                ]
                            }),
                            (() => {
                                switch (p.type) {
                                    case l.Us.LEVEL:
                                        return (0, r.jsx)(s.Z, { powerup: p });
                                    case l.Us.PERK:
                                        return (0, r.jsx)('img', {
                                            alt: '',
                                            src: k,
                                            className: m.exampleImage
                                        });
                                }
                            })(),
                            (0, r.jsxs)('div', {
                                className: m.warningContainer,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        color: 'status-warning',
                                        variant: 'eyebrow',
                                        children: d.NW.string(u.Z.OVt5CA)
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-sm/medium',
                                        children: d.NW.formatToPlainString(u.Z['4jSvr6'], {
                                            perk: p.title,
                                            memberCount: 5
                                        })
                                    })
                                ]
                            }),
                            null != j &&
                                (0, r.jsx)(a.Text, {
                                    className: m.errorText,
                                    color: 'status-danger',
                                    variant: 'text-sm/semibold',
                                    children: j
                                })
                        ]
                    }),
                    (0, r.jsxs)(a.mzw, {
                        className: m.footer,
                        children: [
                            (0, r.jsx)(a.zxk, {
                                submitting: O,
                                color: a.Ttl.RED,
                                className: m.button,
                                onClick: h,
                                children: d.NW.string(u.Z.PYPdl5)
                            }),
                            (0, r.jsx)(a.zxk, {
                                color: a.Ttl.PRIMARY,
                                className: m.button,
                                onClick: f.onClose,
                                children: d.NW.string(d.t['ETE/oK'])
                            })
                        ]
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
}

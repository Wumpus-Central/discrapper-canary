r.d(t, { default: () => u });
var n = r(200651),
    o = r(192379),
    a = r(481060),
    i = r(17622),
    c = r(279604),
    l = r(535396),
    s = r(730621),
    d = r(388032),
    m = r(136646);
function u(e) {
    var t,
        r,
        { guildId: u, powerup: p } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['guildId', 'powerup']);
    let { onDeactivate: x, error: j, isLoading: f } = (0, c.Z)(u, p),
        { onClose: h } = b,
        g = o.useCallback(
            (e) => {
                x(e).then(() => {
                    null == h || h();
                });
            },
            [h, x]
        );
    return (0, n.jsxs)(
        a.Y0X,
        ((t = (function (e) {
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
        })(
            {
                className: m.modal,
                size: a.CgR.SMALL
            },
            b
        )),
        (r = r =
            {
                children: [
                    (0, n.jsxs)(a.hzk, {
                        className: m.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: m.headerContainer,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: m.header,
                                        children: [
                                            (0, n.jsx)(a.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: d.NW.formatToPlainString(s.Z.iEBw1N, { perk: p.title })
                                            }),
                                            (0, n.jsx)(a.Text, {
                                                variant: 'text-sm/medium',
                                                children: d.NW.formatToPlainString(s.Z['7o0K+/'], { perk: p.title })
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(a.olH, { onClick: b.onClose })
                                ]
                            }),
                            (() => {
                                switch (p.type) {
                                    case l.U.LEVEL:
                                        return (0, n.jsx)(i.Z, {});
                                    case l.U.PERK:
                                        return (0, n.jsx)('img', {
                                            alt: '',
                                            src: '',
                                            className: m.exampleImage
                                        });
                                }
                            })(),
                            (0, n.jsxs)('div', {
                                className: m.warningContainer,
                                children: [
                                    (0, n.jsx)(a.Text, {
                                        color: 'status-warning',
                                        variant: 'eyebrow',
                                        children: d.NW.string(s.Z.OVt5CA)
                                    }),
                                    (0, n.jsx)(a.Text, {
                                        variant: 'text-sm/medium',
                                        children: d.NW.formatToPlainString(s.Z['4jSvr6'], {
                                            perk: p.title,
                                            memberCount: 5
                                        })
                                    })
                                ]
                            }),
                            null != j &&
                                (0, n.jsx)(a.Text, {
                                    className: m.errorText,
                                    color: 'status-danger',
                                    variant: 'text-sm/semibold',
                                    children: j
                                })
                        ]
                    }),
                    (0, n.jsxs)(a.mzw, {
                        className: m.footer,
                        children: [
                            (0, n.jsx)(a.zxk, {
                                submitting: f,
                                color: a.Ttl.RED,
                                className: m.button,
                                onClick: g,
                                children: d.NW.string(s.Z.PYPdl5)
                            }),
                            (0, n.jsx)(a.zxk, {
                                color: a.Ttl.PRIMARY,
                                className: m.button,
                                onClick: b.onClose,
                                children: d.NW.string(d.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}

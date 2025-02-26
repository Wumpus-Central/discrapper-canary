t.d(r, { default: () => d });
var n = t(200651);
t(192379);
var o = t(481060),
    a = t(808189),
    i = t(535396),
    l = t(783684),
    s = t(388032),
    c = t(142030);
function d(e) {
    var r,
        t,
        { powerup: d } = e,
        m = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                o = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (t = a[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['powerup']);
    return (0, n.jsxs)(
        o.Y0X,
        ((r = (function (e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {},
                    n = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    n.forEach(function (r) {
                        var n;
                        (n = t[r]),
                            r in e
                                ? Object.defineProperty(e, r, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[r] = n);
                    });
            }
            return e;
        })(
            {
                className: c.modal,
                size: o.CgR.SMALL
            },
            m
        )),
        (t = t =
            {
                children: [
                    (0, n.jsxs)(o.hzk, {
                        className: c.modalContentContainer,
                        scrollbarType: 'none',
                        children: [
                            (0, n.jsxs)('div', {
                                className: c.headerContainer,
                                children: [
                                    (0, n.jsxs)('div', {
                                        className: c.header,
                                        children: [
                                            (0, n.jsx)(o.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: s.NW.formatToPlainString(l.Z.iEBw1N, { perk: d.title })
                                            }),
                                            (0, n.jsx)(o.Text, {
                                                variant: 'text-sm/medium',
                                                children: s.NW.formatToPlainString(l.Z['7o0K+/'], { perk: d.title })
                                            })
                                        ]
                                    }),
                                    (0, n.jsx)(o.olH, { onClick: m.onClose })
                                ]
                            }),
                            (() => {
                                switch (d.type) {
                                    case i.U.LEVEL:
                                        var e, r;
                                        return (0, n.jsx)('div', {
                                            className: c.levelContainer,
                                            children:
                                                null === (r = a.C['0']) || void 0 === r
                                                    ? void 0
                                                    : null === (e = r.perks) || void 0 === e
                                                      ? void 0
                                                      : e.map((e, r) =>
                                                            (0, n.jsxs)(
                                                                'div',
                                                                {
                                                                    className: c.perkContainer,
                                                                    children: [
                                                                        (0, n.jsx)(e.icon, { size: 'sm' }),
                                                                        (0, n.jsx)(o.Text, {
                                                                            className: c.perkText,
                                                                            color: 'text-muted',
                                                                            variant: 'text-sm/medium',
                                                                            children: e.getCopy()
                                                                        })
                                                                    ]
                                                                },
                                                                r
                                                            )
                                                        )
                                        });
                                    case i.U.PERK:
                                        return (0, n.jsx)('img', {
                                            alt: '',
                                            src: '',
                                            className: c.exampleImage
                                        });
                                }
                            })(),
                            (0, n.jsxs)('div', {
                                className: c.warningContainer,
                                children: [
                                    (0, n.jsx)(o.Text, {
                                        color: 'status-warning',
                                        variant: 'eyebrow',
                                        children: s.NW.string(l.Z.OVt5CA)
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-sm/medium',
                                        children: s.NW.formatToPlainString(l.Z['4jSvr6'], {
                                            perk: d.title,
                                            memberCount: 5
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsxs)(o.mzw, {
                        className: c.footer,
                        children: [
                            (0, n.jsx)(o.zxk, {
                                color: o.Ttl.RED,
                                className: c.button,
                                onClick: m.onClose,
                                children: s.NW.string(l.Z.PYPdl5)
                            }),
                            (0, n.jsx)(o.zxk, {
                                color: o.Ttl.PRIMARY,
                                className: c.button,
                                onClick: m.onClose,
                                children: s.NW.string(s.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        r)
    );
}

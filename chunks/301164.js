n.d(t, { t: () => f });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(755721),
    o = n(481060),
    s = n(738672),
    c = n(447564),
    u = n(921944),
    d = n(388032),
    p = n(471865);
function h(e) {
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
}
let f = (e) => {
    let { channel: t, markAsDismissed: n, potionRef: i } = e;
    return (0, r.jsx)(g, {
        channel: t,
        buttonRef: i,
        dismissed: !1,
        nudgeAlignIntoViewport: !0,
        onClick: () => {
            n(u.L.TAKE_ACTION);
        },
        onDismiss: () => {
            n(u.L.USER_DISMISS);
        }
    });
};
function m(e) {
    let { channel: t, onClick: n, hidden: i, onDismiss: s } = e;
    return (0, r.jsxs)('div', {
        className: l()(p.popoutContainer, { [p.hidden]: i }),
        children: [
            (0, r.jsx)('img', {
                className: p.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, r.jsx)(a.zx, {
                className: p.closeButton,
                'aria-label': d.intl.string(d.t.cpT0Cg),
                look: a.zx.Looks.BLANK,
                size: a.zx.Sizes.NONE,
                onClick: () => {
                    s();
                },
                children: (0, r.jsx)(o.Dio, {
                    size: 'xs',
                    className: p.closeIcon,
                    color: 'white'
                })
            }),
            (0, r.jsxs)('div', {
                className: p.infoContainerParent,
                children: [
                    (0, r.jsx)(o.X6q, {
                        className: p.heading,
                        variant: 'heading-md/extrabold',
                        children: d.intl.string(d.t.kQqTnp)
                    }),
                    (0, r.jsx)('div', {
                        className: p.infoContainer,
                        children: (0, r.jsx)(o.Text, {
                            className: p.infoText,
                            variant: 'text-sm/medium',
                            children: d.intl.string(d.t.cxf5yM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: p.buttonContainer,
                        children: (0, r.jsx)(a.zx, {
                            onClick: () => {
                                ((0, c.k)(t, 'HDStreamingPotionUpsellPopout'), n());
                            },
                            color: a.Tt.WHITE,
                            className: p.button,
                            children: d.intl.string(d.t.GBe9lJ)
                        })
                    })
                ]
            })
        ]
    });
}
function g(e) {
    var t,
        n,
        { channel: i, onClick: l } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['channel', 'onClick']);
    return (0, r.jsx)(
        s.h,
        ((t = h({}, a)),
        (n = n =
            {
                skipForceHide: !0,
                renderComponent: (e) =>
                    (0, r.jsx)(
                        m,
                        h(
                            {
                                onClick: l,
                                channel: i
                            },
                            e
                        )
                    )
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

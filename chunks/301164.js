n.d(t, { t: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(738672),
    s = n(447564),
    c = n(921944),
    u = n(388032),
    d = n(471865);
function p(e) {
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
}
let h = (e) => {
    let { channel: t, markAsDismissed: n, potionRef: i } = e;
    return (0, r.jsx)(m, {
        channel: t,
        buttonRef: i,
        dismissed: !1,
        nudgeAlignIntoViewport: !0,
        onClick: () => {
            n(c.L.TAKE_ACTION);
        },
        onDismiss: () => {
            n(c.L.USER_DISMISS);
        }
    });
};
function f(e) {
    let { channel: t, onClick: n, hidden: i, onDismiss: a } = e;
    return (0, r.jsxs)('div', {
        className: l()(d.popoutContainer, { [d.hidden]: i }),
        children: [
            (0, r.jsx)('img', {
                className: d.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, r.jsx)(o.zxk, {
                className: d.closeButton,
                'aria-label': u.NW.string(u.t.cpT0Cg),
                look: o.zxk.Looks.BLANK,
                size: o.zxk.Sizes.NONE,
                onClick: () => {
                    a();
                },
                children: (0, r.jsx)(o.Dio, {
                    size: 'xs',
                    className: d.closeIcon,
                    color: 'white'
                })
            }),
            (0, r.jsxs)('div', {
                className: d.infoContainerParent,
                children: [
                    (0, r.jsx)(o.X6q, {
                        className: d.heading,
                        variant: 'heading-md/extrabold',
                        children: u.NW.string(u.t.kQqTnp)
                    }),
                    (0, r.jsx)('div', {
                        className: d.infoContainer,
                        children: (0, r.jsx)(o.Text, {
                            className: d.infoText,
                            variant: 'text-sm/medium',
                            children: u.NW.string(u.t.cxf5yM)
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: d.buttonContainer,
                        children: (0, r.jsx)(o.zxk, {
                            onClick: () => {
                                (0, s.k)(t, 'HDStreamingPotionUpsellPopout'), n();
                            },
                            color: o.Ttl.WHITE,
                            className: d.button,
                            children: u.NW.string(u.t.GBe9lJ)
                        })
                    })
                ]
            })
        ]
    });
}
function m(e) {
    var t,
        n,
        { channel: i, onClick: l } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channel', 'onClick']);
    return (0, r.jsx)(
        a.h,
        ((t = p({}, o)),
        (n = n =
            {
                skipForceHide: !0,
                renderComponent: (e) =>
                    (0, r.jsx)(
                        f,
                        p(
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

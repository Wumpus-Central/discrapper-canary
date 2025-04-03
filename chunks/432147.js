n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(442837),
    o = n(481060),
    s = n(239091),
    c = n(901461),
    u = n(592125),
    d = n(709054),
    p = n(723774),
    m = n(144140),
    f = n(91159),
    h = n(576799),
    g = n(488131),
    _ = n(981631),
    b = n(388032),
    x = n(955344);
function y(e) {
    let { message: t, compact: n } = e,
        i = (0, l.e7)([u.Z], () => u.Z.getChannel(d.default.castMessageIdAsChannelId(t.id)));
    return null == i
        ? null
        : (0, r.jsx)(E, {
              channel: i,
              compact: n,
              isSystemMessage: (0, c.Z)(t)
          });
}
function E(e) {
    let { channel: t, compact: i, isSystemMessage: c } = e,
        u = (0, l.e7)([m.Z], () => m.Z.getCount(t.id)),
        d = (function (e) {
            var t;
            let n = (0, l.e7)([m.Z], () => m.Z.getMostRecentMessage(e.id)),
                i = (0, l.e7)([m.Z], () => m.Z.getCount(e.id)),
                a = (0, f.Ok)(e);
            return (null == (t = e.threadMetadata) ? void 0 : t.archived)
                ? b.NW.string(b.t.ZTo4HR)
                : null == i || 0 === i
                  ? b.NW.string(b.t.HYtNyM)
                  : null == n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('span', { children: b.NW.string(b.t.ZTo4HR) }),
                              (0, r.jsx)('span', {
                                  className: x.timestamp,
                                  children: (0, f.Ye)(a)
                              })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.Z, {
                                  message: n,
                                  channel: e
                              }),
                              (0, r.jsx)('span', {
                                  className: x.timestamp,
                                  children: (0, f.Ye)(a)
                              })
                          ]
                      });
        })(t),
        y = null != u && u > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: a()(x.spine, {
                    [x.cozy]: !i,
                    [x.systemMessageSpine]: c
                })
            }),
            (0, r.jsx)(o.P3F, {
                onClick: function (e) {
                    e.stopPropagation(), (0, g.ok)(t, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        r = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.which === _.yXg.SPACE || e.which === _.yXg.ENTER) && (e.preventDefault(), (n || r) && (0, g.ok)(t, r));
                },
                onContextMenu: function (e) {
                    (0, s.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('22356'), n.e('48334')]).then(n.bind(n, 422200));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                (function (e) {
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
                                })({ channel: t }, n)
                            );
                    });
                },
                'aria-roledescription': b.NW.string(b.t['8ipxiY']),
                className: a()(x.container, { [x.systemMessageContainer]: c }),
                children: (0, r.jsxs)(o.nuw, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: x.topLine,
                            children: [
                                (0, r.jsx)(o.nn4, { children: b.NW.string(b.t['7Xm5QE']) }),
                                (0, r.jsx)('span', {
                                    className: x.name,
                                    children: t.name
                                }),
                                (0, r.jsx)('span', {
                                    className: x.cta,
                                    'aria-hidden': !y,
                                    children: (0, p.WE)(u, t.id)
                                })
                            ]
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            'aria-hidden': !0,
                            lineClamp: 1,
                            color: 'header-secondary',
                            className: x.bottomLine,
                            children: d
                        })
                    ]
                })
            })
        ]
    });
}

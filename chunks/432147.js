n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    l = n(481060),
    s = n(239091),
    c = n(901461),
    d = n(592125),
    u = n(709054),
    p = n(723774),
    m = n(144140),
    f = n(91159),
    h = n(576799),
    g = n(488131),
    _ = n(981631),
    b = n(388032),
    v = n(98084);
function y(e) {
    let { message: t, compact: n } = e,
        i = (0, o.e7)([d.Z], () => d.Z.getChannel(u.default.castMessageIdAsChannelId(t.id)));
    return null == i
        ? null
        : (0, r.jsx)(x, {
              channel: i,
              compact: n,
              isSystemMessage: (0, c.Z)(t)
          });
}
function x(e) {
    let { channel: t, compact: i, isSystemMessage: c } = e,
        d = (0, o.e7)([m.Z], () => m.Z.getCount(t.id)),
        u = (function (e) {
            var t;
            let n = (0, o.e7)([m.Z], () => m.Z.getMostRecentMessage(e.id)),
                i = (0, o.e7)([m.Z], () => m.Z.getCount(e.id)),
                a = (0, f.Ok)(e);
            return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived)
                ? b.NW.string(b.t.ZTo4HR)
                : null == i || 0 === i
                  ? b.NW.string(b.t.HYtNyM)
                  : null == n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('span', { children: b.NW.string(b.t.ZTo4HR) }),
                              (0, r.jsx)('span', {
                                  className: v.timestamp,
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
                                  className: v.timestamp,
                                  children: (0, f.Ye)(a)
                              })
                          ]
                      });
        })(t),
        y = null != d && d > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: a()(v.spine, {
                    [v.cozy]: !i,
                    [v.systemMessageSpine]: c
                })
            }),
            (0, r.jsx)(l.P3F, {
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
                        let { default: e } = await Promise.all([n.e('38902'), n.e('22356'), n.e('74067')]).then(n.bind(n, 422200));
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
                className: a()(v.container, { [v.systemMessageContainer]: c }),
                children: (0, r.jsxs)(l.nuw, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.topLine,
                            children: [
                                (0, r.jsx)(l.nn4, { children: b.NW.string(b.t['7Xm5QE']) }),
                                (0, r.jsx)('span', {
                                    className: v.name,
                                    children: t.name
                                }),
                                (0, r.jsx)('span', {
                                    className: v.cta,
                                    'aria-hidden': !y,
                                    children: (0, p.WE)(d, t.id)
                                })
                            ]
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            'aria-hidden': !0,
                            lineClamp: 1,
                            color: 'header-secondary',
                            className: v.bottomLine,
                            children: u
                        })
                    ]
                })
            })
        ]
    });
}

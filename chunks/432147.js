n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(901461),
    d = n(592125),
    u = n(709054),
    m = n(723774),
    _ = n(144140),
    h = n(91159),
    p = n(576799),
    g = n(488131),
    f = n(981631),
    x = n(388032),
    C = n(363059);
function v(e) {
    let { message: t, compact: n } = e,
        l = (0, r.e7)([d.Z], () => d.Z.getChannel(u.default.castMessageIdAsChannelId(t.id)));
    return null == l
        ? null
        : (0, i.jsx)(E, {
              channel: l,
              compact: n,
              isSystemMessage: (0, c.Z)(t)
          });
}
function E(e) {
    let { channel: t, compact: l, isSystemMessage: c } = e,
        d = (0, r.e7)([_.Z], () => _.Z.getCount(t.id)),
        u = (function (e) {
            var t;
            let n = (0, r.e7)([_.Z], () => _.Z.getMostRecentMessage(e.id)),
                l = (0, r.e7)([_.Z], () => _.Z.getCount(e.id)),
                a = (0, h.Ok)(e);
            return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived)
                ? x.intl.string(x.t.ZTo4HR)
                : null == l || 0 === l
                  ? x.intl.string(x.t.HYtNyM)
                  : null == n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('span', { children: x.intl.string(x.t.ZTo4HR) }),
                              (0, i.jsx)('span', {
                                  className: C.timestamp,
                                  children: (0, h.Ye)(a)
                              })
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(p.Z, {
                                  message: n,
                                  channel: e
                              }),
                              (0, i.jsx)('span', {
                                  className: C.timestamp,
                                  children: (0, h.Ye)(a)
                              })
                          ]
                      });
        })(t),
        v = null != d && d > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: a()(C.spine, {
                    [C.cozy]: !l,
                    [C.systemMessageSpine]: c
                })
            }),
            (0, i.jsx)(s.P3F, {
                onClick: function (e) {
                    e.stopPropagation(), (0, g.ok)(t, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        i = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.which === f.yXg.SPACE || e.which === f.yXg.ENTER) && (e.preventDefault(), (n || i) && (0, g.ok)(t, i));
                },
                onContextMenu: function (e) {
                    (0, o.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('38902'), n.e('77564'), n.e('75206')]).then(n.bind(n, 422200));
                        return (n) =>
                            (0, i.jsx)(e, {
                                channel: t,
                                ...n
                            });
                    });
                },
                'aria-roledescription': x.intl.string(x.t['8ipxiY']),
                className: a()(C.container, { [C.systemMessageContainer]: c }),
                children: (0, i.jsxs)(s.nuw, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: C.topLine,
                            children: [
                                (0, i.jsx)(s.nn4, { children: x.intl.string(x.t['7Xm5QE']) }),
                                (0, i.jsx)('span', {
                                    className: C.name,
                                    children: t.name
                                }),
                                (0, i.jsx)('span', {
                                    className: C.cta,
                                    'aria-hidden': !v,
                                    children: (0, m.WE)(d, t.id)
                                })
                            ]
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            'aria-hidden': !0,
                            lineClamp: 1,
                            color: 'header-secondary',
                            className: C.bottomLine,
                            children: u
                        })
                    ]
                })
            })
        ]
    });
}

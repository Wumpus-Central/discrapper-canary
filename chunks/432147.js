n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    c = n(901461),
    u = n(592125),
    d = n(709054),
    m = n(723774),
    h = n(144140),
    f = n(91159),
    p = n(576799),
    _ = n(488131),
    g = n(981631),
    E = n(388032),
    C = n(363059);
function I(e) {
    let { message: t, compact: n } = e,
        r = (0, a.e7)([u.Z], () => u.Z.getChannel(d.default.castMessageIdAsChannelId(t.id)));
    return null == r
        ? null
        : (0, i.jsx)(x, {
              channel: r,
              compact: n,
              isSystemMessage: (0, c.Z)(t)
          });
}
function x(e) {
    let { channel: t, compact: r, isSystemMessage: c } = e,
        u = (0, a.e7)([h.Z], () => h.Z.getCount(t.id)),
        d = (function (e) {
            var t;
            let n = (0, a.e7)([h.Z], () => h.Z.getMostRecentMessage(e.id)),
                r = (0, a.e7)([h.Z], () => h.Z.getCount(e.id)),
                l = (0, f.Ok)(e);
            return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived)
                ? E.intl.string(E.t.ZTo4HR)
                : null == r || 0 === r
                  ? E.intl.string(E.t.HYtNyM)
                  : null == n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('span', { children: E.intl.string(E.t.ZTo4HR) }),
                              (0, i.jsx)('span', {
                                  className: C.timestamp,
                                  children: (0, f.Ye)(l)
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
                                  children: (0, f.Ye)(l)
                              })
                          ]
                      });
        })(t),
        I = null != u && u > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: l()(C.spine, {
                    [C.cozy]: !r,
                    [C.systemMessageSpine]: c
                })
            }),
            (0, i.jsx)(o.Clickable, {
                onClick: function (e) {
                    e.stopPropagation(), (0, _.ok)(t, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        i = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.which === g.yXg.SPACE || e.which === g.yXg.ENTER) && (e.preventDefault(), (n || i) && (0, _.ok)(t, i));
                },
                onContextMenu: function (e) {
                    (0, s.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('38902'), n.e('77564'), n.e('75206')]).then(n.bind(n, 422200));
                        return (n) =>
                            (0, i.jsx)(e, {
                                channel: t,
                                ...n
                            });
                    });
                },
                'aria-roledescription': E.intl.string(E.t['8ipxiY']),
                className: l()(C.container, { [C.systemMessageContainer]: c }),
                children: (0, i.jsxs)(o.BlockInteractions, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: C.topLine,
                            children: [
                                (0, i.jsx)(o.HiddenVisually, { children: E.intl.string(E.t['7Xm5QE']) }),
                                (0, i.jsx)('span', {
                                    className: C.name,
                                    children: t.name
                                }),
                                (0, i.jsx)('span', {
                                    className: C.cta,
                                    'aria-hidden': !I,
                                    children: (0, m.WE)(u, t.id)
                                })
                            ]
                        }),
                        (0, i.jsx)('span', {
                            'aria-hidden': !0,
                            className: l()(C.bottomLine),
                            children: d
                        })
                    ]
                })
            })
        ]
    });
}

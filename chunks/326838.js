(n.d(t, { Z: () => _ }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(913527),
    o = n.n(l),
    a = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(727637),
    d = n(782568),
    h = n(317632),
    p = n(174767),
    f = n(594174),
    g = n(55935),
    m = n(388032),
    b = n(8298);
function _(e) {
    let { invite: t, expired: n } = e,
        l = (0, a.e7)([f.default], () => {
            var e, n;
            return null != (n = null == (e = f.default.getUser(t.inviter_id)) ? void 0 : e.username) ? n : '';
        }),
        s = (0, g.vc)(o()(t.created_at), 'LT'),
        d = i.useRef(null),
        h = (0, u.Z)(d);
    return (
        i.useEffect(() => {
            n || (0, p.Br)(t);
        }, [t, n]),
        (0, r.jsxs)('div', {
            className: b.container,
            ref: d,
            children: [
                (0, r.jsxs)('div', {
                    className: b.primaryRow,
                    children: [
                        (0, r.jsx)('img', {
                            className: b.inviteImage,
                            src: t.application_asset,
                            alt: 'Game Invite'
                        }),
                        (0, r.jsx)(c.Text, {
                            className: b.title,
                            variant: 'text-md/semibold',
                            color: 'interactive-active',
                            children: m.intl.format(m.t.vtUO3d, { username: l })
                        }),
                        (0, r.jsxs)('div', {
                            className: b.buttonContainer,
                            children: [
                                (0, r.jsx)(O, {
                                    expired: n,
                                    invite: t,
                                    isHoveringInvite: h
                                }),
                                (0, r.jsx)(c.M0o, {
                                    className: b.deleteButton,
                                    tooltip: m.intl.string(m.t.oyYWHB),
                                    color: c.YX$.SECONDARY,
                                    icon: (0, r.jsx)(c.XHJ, { size: 'xs' }),
                                    onClick: () => {
                                        (0, p.UF)(t);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: b.divider }),
                (0, r.jsxs)('div', {
                    className: b.secondaryRow,
                    children: [
                        (0, r.jsxs)(c.Text, {
                            variant: 'text-xs/medium',
                            className: b.subtitle,
                            color: 'text-muted',
                            children: [t.application_name, ' \xB7 ', s]
                        }),
                        n &&
                            (0, r.jsx)('div', {
                                className: b.metaContainer,
                                children: (0, r.jsx)(c.Text, {
                                    variant: 'text-xxs/semibold',
                                    className: b.__invalid_metaText,
                                    color: 'text-muted',
                                    children: m.intl.string(m.t['//8Uqa'])
                                })
                            })
                    ]
                })
            ]
        })
    );
}
function O(e) {
    let { expired: t, invite: n, isHoveringInvite: l } = e,
        o = (0, a.e7)([h.Z], () => h.Z.isInviteGameInstalled(n)),
        u = (0, a.e7)([h.Z], () => h.Z.isInviteJoinable(n)),
        [f, g] = i.useState(!1),
        _ = i.useCallback(async () => {
            g(!0);
            try {
                await (0, p.MH)(n);
            } catch (e) {}
            g(!1);
        }, [n]),
        O = i.useCallback(async () => {
            g(!0);
            try {
                await (0, p.Ol)(n);
            } catch (e) {}
            g(!1);
        }, [n]);
    if (t)
        if (o && l)
            return (0, r.jsx)(s.zx, {
                className: b.primaryButton,
                color: s.Tt.TRANSPARENT,
                disabled: f,
                size: s.Ph.SMALL,
                onClick: _,
                children: m.intl.string(m.t['s+J8Dg'])
            });
        else return null;
    return o && u
        ? (0, r.jsx)(s.zx, {
              className: b.primaryButton,
              color: s.Tt.GREEN,
              disabled: f,
              size: s.Ph.SMALL,
              onClick: O,
              children: m.intl.string(m.t['/loN9/'])
          })
        : null != n.fallback_url
          ? (0, r.jsx)(s.zx, {
                className: b.primaryButton,
                disabled: f,
                size: s.Ph.SMALL,
                color: s.Tt.TRANSPARENT,
                onClick: () => (0, d.Z)(n.fallback_url),
                children: m.intl.string(m.t['27y8KC'])
            })
          : (0, r.jsx)(c.ua7, {
                text: m.intl.formatToPlainString(m.t.issFLC, { gameTitle: n.application_name }),
                children: (e) => {
                    var t, i;
                    return (0, r.jsx)(
                        s.zx,
                        ((t = (function (e) {
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
                        })({}, e)),
                        (i = i =
                            {
                                className: b.primaryButton,
                                disabled: !0,
                                size: s.Ph.SMALL,
                                color: s.Tt.TRANSPARENT,
                                onClick: () => (0, d.Z)(n.fallback_url),
                                children: (0, r.jsxs)('div', {
                                    className: b.launchToJoinContainer,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xxs/medium',
                                            className: b.launchToJoinText,
                                            color: 'text-muted',
                                            children: m.intl.string(m.t.dai1Oz)
                                        }),
                                        (0, r.jsx)(c.d3s, {
                                            size: 'xxs',
                                            color: c.TVs.colors.TEXT_MUTED.css
                                        })
                                    ]
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        t)
                    );
                }
            });
}

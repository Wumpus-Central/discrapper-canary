(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(913527),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(727637),
    u = n(782568),
    d = n(317632),
    h = n(174767),
    p = n(594174),
    f = n(55935),
    g = n(388032),
    m = n(8298);
function b(e) {
    let { invite: t, expired: n } = e,
        l = (0, s.e7)([p.default], () => {
            var e, n;
            return null != (n = null == (e = p.default.getUser(t.inviter_id)) ? void 0 : e.username) ? n : '';
        }),
        u = (0, f.vc)(o()(t.created_at), 'LT'),
        d = i.useRef(null),
        b = (0, c.Z)(d);
    return (
        i.useEffect(() => {
            n || (0, h.Br)(t);
        }, [t, n]),
        (0, r.jsxs)('div', {
            className: m.container,
            ref: d,
            children: [
                (0, r.jsxs)('div', {
                    className: m.primaryRow,
                    children: [
                        (0, r.jsx)('img', {
                            className: m.inviteImage,
                            src: t.application_asset,
                            alt: 'Game Invite'
                        }),
                        (0, r.jsx)(a.Text, {
                            className: m.title,
                            variant: 'text-md/semibold',
                            color: 'interactive-active',
                            children: g.intl.format(g.t.vtUO3d, { username: l })
                        }),
                        (0, r.jsxs)('div', {
                            className: m.buttonContainer,
                            children: [
                                (0, r.jsx)(_, {
                                    expired: n,
                                    invite: t,
                                    isHoveringInvite: b
                                }),
                                (0, r.jsx)(a.M0o, {
                                    className: m.deleteButton,
                                    tooltip: g.intl.string(g.t.oyYWHB),
                                    color: a.YX$.SECONDARY,
                                    icon: (0, r.jsx)(a.XHJ, { size: 'xs' }),
                                    onClick: () => {
                                        (0, h.UF)(t);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: m.divider }),
                (0, r.jsxs)('div', {
                    className: m.secondaryRow,
                    children: [
                        (0, r.jsxs)(a.Text, {
                            variant: 'text-xs/medium',
                            className: m.subtitle,
                            color: 'text-muted',
                            children: [t.application_name, ' \xB7 ', u]
                        }),
                        n &&
                            (0, r.jsx)('div', {
                                className: m.metaContainer,
                                children: (0, r.jsx)(a.Text, {
                                    variant: 'text-xxs/semibold',
                                    className: m.__invalid_metaText,
                                    color: 'text-muted',
                                    children: g.intl.string(g.t['//8Uqa'])
                                })
                            })
                    ]
                })
            ]
        })
    );
}
function _(e) {
    let { expired: t, invite: n, isHoveringInvite: l } = e,
        o = (0, s.e7)([d.Z], () => d.Z.isInviteGameInstalled(n)),
        c = (0, s.e7)([d.Z], () => d.Z.isInviteJoinable(n)),
        [p, f] = i.useState(!1),
        b = i.useCallback(async () => {
            f(!0);
            try {
                await (0, h.MH)(n);
            } catch (e) {}
            f(!1);
        }, [n]),
        _ = i.useCallback(async () => {
            f(!0);
            try {
                await (0, h.Ol)(n);
            } catch (e) {}
            f(!1);
        }, [n]);
    if (t)
        if (o && l)
            return (0, r.jsx)(a.zxk, {
                className: m.primaryButton,
                color: a.Ttl.TRANSPARENT,
                disabled: p,
                size: a.PhG.SMALL,
                onClick: b,
                children: g.intl.string(g.t['s+J8Dg'])
            });
        else return null;
    return o && c
        ? (0, r.jsx)(a.zxk, {
              className: m.primaryButton,
              color: a.Ttl.GREEN,
              disabled: p,
              size: a.PhG.SMALL,
              onClick: _,
              children: g.intl.string(g.t['/loN9/'])
          })
        : null != n.fallback_url
          ? (0, r.jsx)(a.zxk, {
                className: m.primaryButton,
                disabled: p,
                size: a.PhG.SMALL,
                color: a.Ttl.TRANSPARENT,
                onClick: () => (0, u.Z)(n.fallback_url),
                children: g.intl.string(g.t['27y8KC'])
            })
          : (0, r.jsx)(a.ua7, {
                text: g.intl.formatToPlainString(g.t.issFLC, { gameTitle: n.application_name }),
                children: (e) => {
                    var t, i;
                    return (0, r.jsx)(
                        a.zxk,
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
                                className: m.primaryButton,
                                disabled: !0,
                                size: a.PhG.SMALL,
                                color: a.Ttl.TRANSPARENT,
                                onClick: () => (0, u.Z)(n.fallback_url),
                                children: (0, r.jsxs)('div', {
                                    className: m.launchToJoinContainer,
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-xxs/medium',
                                            className: m.launchToJoinText,
                                            color: 'text-muted',
                                            children: g.intl.string(g.t.dai1Oz)
                                        }),
                                        (0, r.jsx)(a.d3s, {
                                            size: 'xxs',
                                            color: a.TVs.colors.TEXT_MUTED.css
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

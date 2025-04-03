n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(913527),
    l = n.n(a),
    o = n(442837),
    s = n(481060),
    c = n(727637),
    u = n(782568),
    d = n(317632),
    p = n(174767),
    m = n(594174),
    f = n(55935),
    h = n(388032),
    g = n(8298);
function _(e) {
    let { invite: t, expired: n } = e,
        a = (0, o.e7)([m.default], () => {
            var e, n;
            return null != (n = null == (e = m.default.getUser(t.inviter_id)) ? void 0 : e.username) ? n : '';
        }),
        u = (0, f.vc)(l()(t.created_at), 'LT'),
        d = i.useRef(null),
        _ = (0, c.Z)(d);
    return (
        i.useEffect(() => {
            n || (0, p.Br)(t);
        }, [t, n]),
        (0, r.jsxs)('div', {
            className: g.container,
            ref: d,
            children: [
                (0, r.jsxs)('div', {
                    className: g.primaryRow,
                    children: [
                        (0, r.jsx)('img', {
                            className: g.inviteImage,
                            src: t.application_asset,
                            alt: 'Game Invite'
                        }),
                        (0, r.jsx)(s.Text, {
                            className: g.title,
                            variant: 'text-md/semibold',
                            color: 'interactive-active',
                            children: h.NW.format(h.t.vtUO3d, { username: a })
                        }),
                        (0, r.jsxs)('div', {
                            className: g.buttonContainer,
                            children: [
                                (0, r.jsx)(b, {
                                    expired: n,
                                    invite: t,
                                    isHoveringInvite: _
                                }),
                                (0, r.jsx)(s.M0o, {
                                    className: g.deleteButton,
                                    tooltip: h.NW.string(h.t.oyYWHB),
                                    color: s.YX$.SECONDARY,
                                    icon: (0, r.jsx)(s.XHJ, { size: 'xs' }),
                                    onClick: () => {
                                        (0, p.UF)(t);
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)('div', { className: g.divider }),
                (0, r.jsxs)('div', {
                    className: g.secondaryRow,
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'text-xs/medium',
                            className: g.subtitle,
                            color: 'text-muted',
                            children: [t.application_name, ' \xB7 ', u]
                        }),
                        n &&
                            (0, r.jsx)('div', {
                                className: g.metaContainer,
                                children: (0, r.jsx)(s.Text, {
                                    variant: 'text-xxs/semibold',
                                    className: g.__invalid_metaText,
                                    color: 'text-muted',
                                    children: h.NW.string(h.t['//8Uqa'])
                                })
                            })
                    ]
                })
            ]
        })
    );
}
function b(e) {
    let { expired: t, invite: n, isHoveringInvite: a } = e,
        l = (0, o.e7)([d.Z], () => d.Z.isInviteGameInstalled(n)),
        c = (0, o.e7)([d.Z], () => d.Z.isInviteJoinable(n)),
        [m, f] = i.useState(!1),
        _ = i.useCallback(async () => {
            f(!0);
            try {
                await (0, p.MH)(n);
            } catch (e) {}
            f(!1);
        }, [n]),
        b = i.useCallback(async () => {
            f(!0);
            try {
                await (0, p.Ol)(n);
            } catch (e) {}
            f(!1);
        }, [n]);
    if (t)
        if (l && a)
            return (0, r.jsx)(s.zxk, {
                className: g.primaryButton,
                color: s.Ttl.TRANSPARENT,
                disabled: m,
                size: s.PhG.SMALL,
                onClick: _,
                children: h.NW.string(h.t['s+J8Dg'])
            });
        else return null;
    return l && c
        ? (0, r.jsx)(s.zxk, {
              className: g.primaryButton,
              color: s.Ttl.GREEN,
              disabled: m,
              size: s.PhG.SMALL,
              onClick: b,
              children: h.NW.string(h.t['/loN9/'])
          })
        : null != n.fallback_url
          ? (0, r.jsx)(s.zxk, {
                className: g.primaryButton,
                disabled: m,
                size: s.PhG.SMALL,
                color: s.Ttl.TRANSPARENT,
                onClick: () => (0, u.Z)(n.fallback_url),
                children: h.NW.string(h.t['27y8KC'])
            })
          : (0, r.jsx)(s.ua7, {
                text: h.NW.formatToPlainString(h.t.issFLC, { gameTitle: n.application_name }),
                children: (e) => {
                    var t, i;
                    return (0, r.jsx)(
                        s.zxk,
                        ((t = (function (e) {
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
                        })({}, e)),
                        (i = i =
                            {
                                className: g.primaryButton,
                                disabled: !0,
                                size: s.PhG.SMALL,
                                color: s.Ttl.TRANSPARENT,
                                onClick: () => (0, u.Z)(n.fallback_url),
                                children: (0, r.jsxs)('div', {
                                    className: g.launchToJoinContainer,
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-xxs/medium',
                                            className: g.launchToJoinText,
                                            color: 'text-muted',
                                            children: h.NW.string(h.t.dai1Oz)
                                        }),
                                        (0, r.jsx)(s.d3s, {
                                            size: 'xxs',
                                            color: s.TVs.colors.TEXT_MUTED.css
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

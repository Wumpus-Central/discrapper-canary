n.d(t, { Z: () => f });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(523751),
    c = n(706454),
    s = n(601964),
    u = n(709054),
    d = n(997431),
    m = n(388032),
    v = n(597089);
function f(e) {
    let { profile: t } = e,
        n = (0, i.e7)([c.default], () => c.default.locale),
        f = (0, d.M)(u.default.extractTimestamp(t.id), n),
        j = l.useMemo(() => {
            let e = new s.ZP(t);
            return (0, r.jsx)(o.Z, {
                guild: e,
                className: v.guildBadge,
                tooltipColor: a.ua7.Colors.NESTED,
                disableBoostClick: !0
            });
        }, [t]);
    return (0, r.jsxs)('div', {
        className: v.header,
        children: [
            (0, r.jsxs)('div', {
                className: v.nameContainer,
                children: [
                    (0, r.jsx)(a.ua7, {
                        text: t.name,
                        overflowOnly: !0,
                        children: (e) => {
                            var n, l;
                            return (0, r.jsx)(
                                a.X6q,
                                ((n = (function (e) {
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
                                (l = l =
                                    {
                                        className: v.guildName,
                                        variant: 'heading-lg/medium',
                                        color: 'header-primary',
                                        children: t.name
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                      }),
                                n)
                            );
                        }
                    }),
                    j
                ]
            }),
            (0, r.jsxs)('div', {
                className: v.members,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.memberCount,
                        children: [
                            (0, r.jsx)('div', { className: v.dot }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: m.NW.format(m.t.zRl6XV, { count: t.memberCount })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: v.memberCount,
                        children: [
                            (0, r.jsx)('div', { className: v.dotOnline }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: m.NW.format(m.t['LC+S+v'], { membersOnline: t.onlineCount })
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: v.established,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: m.NW.format(m.t['zb2Q5+'], { createdAtDate: f })
                })
            })
        ]
    });
}

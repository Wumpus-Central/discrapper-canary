n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(523751),
    l = n(706454),
    c = n(601964),
    u = n(709054),
    d = n(997431),
    f = n(388032),
    _ = n(50172);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { profile: t } = e,
        n = (0, o.e7)([l.default], () => l.default.locale),
        p = (0, d.M)(u.default.extractTimestamp(t.id), n),
        m = i.useMemo(() => {
            let e = new c.ZP(t);
            return (0, r.jsx)(s.Z, {
                guild: e,
                className: _.guildBadge,
                tooltipColor: a.ua7.Colors.NESTED,
                disableBoostClick: !0
            });
        }, [t]);
    return (0, r.jsxs)('div', {
        className: _.header,
        children: [
            (0, r.jsxs)('div', {
                className: _.nameContainer,
                children: [
                    (0, r.jsx)(a.ua7, {
                        text: t.name,
                        overflowOnly: !0,
                        children: (e) =>
                            (0, r.jsx)(
                                a.X6q,
                                g(h({}, e), {
                                    className: _.guildName,
                                    variant: 'heading-lg/medium',
                                    color: 'header-primary',
                                    children: t.name
                                })
                            )
                    }),
                    m
                ]
            }),
            (0, r.jsxs)('div', {
                className: _.members,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.memberCount,
                        children: [
                            (0, r.jsx)('div', { className: _.dot }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: f.NW.format(f.t.zRl6XV, { count: t.memberCount })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: _.memberCount,
                        children: [
                            (0, r.jsx)('div', { className: _.dotOnline }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: f.NW.format(f.t['LC+S+v'], { membersOnline: t.onlineCount })
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: _.established,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: f.NW.format(f.t['zb2Q5+'], { createdAtDate: p })
                })
            })
        ]
    });
}

n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(358555),
    l = n(769654),
    c = n(706454),
    u = n(314897),
    d = n(271383),
    f = n(411198),
    _ = n(709054),
    p = n(997431),
    h = n(388032),
    m = n(50172);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function I(e) {
    var { profile: t, disableGuildNameClick: n } = e,
        s = O(e, ['profile', 'disableGuildNameClick']);
    let c = t.id,
        f = (0, a.e7)(
            [d.ZP, u.default],
            () => {
                var e;
                return (null == (e = d.ZP.getMember(c, u.default.getId())) ? void 0 : e.joinedAt) != null;
            },
            [c]
        ),
        _ = i.useCallback(
            (e) => {
                f && (e.stopPropagation(), (0, l.X)(t.id));
            },
            [f, t.id]
        );
    return !f || n
        ? (0, r.jsx)(
              o.X6q,
              y(E({}, s), {
                  className: m.guildName,
                  variant: 'heading-md/semibold',
                  color: 'header-primary',
                  children: t.name
              })
          )
        : (0, r.jsx)(
              o.P3F,
              y(E({}, s), {
                  className: m.guildNameContainer,
                  onClick: _,
                  children: (0, r.jsx)(o.X6q, {
                      className: m.guildName,
                      variant: 'heading-md/semibold',
                      color: 'header-primary',
                      children: t.name
                  })
              })
          );
}
function S(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        l = (0, a.e7)([c.default], () => c.default.locale),
        u = (0, p.M)(_.default.extractTimestamp(t.id), l),
        d = i.useMemo(() => {
            let e = (0, f.$5)(t);
            return (0, r.jsx)(s.Z, {
                guild: e,
                isBannerVisible: !1
            });
        }, [t]);
    return (0, r.jsxs)('div', {
        className: m.header,
        children: [
            (0, r.jsxs)('div', {
                className: m.nameContainer,
                children: [
                    (0, r.jsx)(o.ua7, {
                        text: t.name,
                        overflowOnly: !0,
                        children: (e) =>
                            (0, r.jsx)(
                                I,
                                y(E({}, e), {
                                    profile: t,
                                    disableGuildNameClick: n
                                })
                            )
                    }),
                    d
                ]
            }),
            (0, r.jsxs)('div', {
                className: m.members,
                children: [
                    (0, r.jsxs)('div', {
                        className: m.memberCount,
                        children: [
                            (0, r.jsx)('div', { className: m.dotOnline }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: h.intl.format(h.t['LC+S+v'], { membersOnline: t.onlineCount })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: m.memberCount,
                        children: [
                            (0, r.jsx)('div', { className: m.dot }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: h.intl.format(h.t.zRl6XV, { count: t.memberCount })
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: m.established,
                children: (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: h.intl.format(h.t['zb2Q5+'], { createdAtDate: u })
                })
            })
        ]
    });
}

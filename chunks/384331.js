n.d(t, { ForwardFailedAlertModal: () => L });
var i = n(255367),
    r = n(73800),
    a = n(442837),
    l = n(755721),
    s = n(481060),
    c = n(700582),
    o = n(933557),
    u = n(266076),
    d = n(810123),
    f = n(592125),
    p = n(430824),
    b = n(158776),
    E = n(699516),
    I = n(594174),
    _ = n(51144),
    g = n(912332),
    y = n(388032),
    A = n(547754);
function S(e) {
    let { icon: t, label: n } = e;
    return (0, i.jsxs)('div', {
        className: A.failedRow,
        children: [
            t,
            (0, i.jsx)(s.Text, {
                className: A.label,
                variant: 'text-md/medium',
                lineClamp: 1,
                children: n
            })
        ]
    });
}
function O(e) {
    let { channel: t } = e,
        n = (0, o.ZP)(t);
    return (0, i.jsx)(S, {
        icon: (0, i.jsx)(u.Z, {
            'aria-hidden': !0,
            size: s.EFr.SIZE_32,
            channel: t,
            experimentLocation: 'forward-failed-retry-modal'
        }),
        label: n
    });
}
function h(e) {
    let { user: t } = e,
        n = _.ZP.useName(t),
        r = (0, a.e7)([E.Z], () => E.Z.getNickname(t.id)),
        l = (0, a.e7)([b.Z], () => b.Z.getStatus(t.id));
    return (0, i.jsx)(S, {
        icon: (0, i.jsx)(c.Z, {
            'aria-hidden': !0,
            size: s.EFr.SIZE_32,
            user: t,
            status: l
        }),
        label: null != r ? r : n
    });
}
function m(e) {
    let { channel: t } = e,
        n = (0, a.e7)([p.Z], () => p.Z.getGuild(null == t ? void 0 : t.guild_id)),
        r = (0, o.ZP)(t);
    return (0, i.jsx)(S, {
        icon: (0, i.jsx)(d.Z, {
            size: d.E.SMALL_32,
            guild: n,
            channel: t
        }),
        label: r
    });
}
function j(e) {
    let { destination: t } = e,
        { channel: n, user: r } = (0, a.cj)([f.Z, I.default], () => ({
            channel: 'channel' === t.type ? f.Z.getChannel(t.id) : null,
            user: 'user' === t.type ? I.default.getUser(t.id) : null
        }));
    return (null == n ? void 0 : n.isGroupDM()) ? (0, i.jsx)(O, { channel: n }) : null != r ? (0, i.jsx)(h, { user: r }) : null != n ? (0, i.jsx)(m, { channel: n }) : null;
}
function L(e) {
    var t,
        n,
        { message: a, failedDestinations: c, forwardOptions: o } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) ((n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++) ((n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['message', 'failedDestinations', 'forwardOptions']);
    let d = r.useCallback(() => {
        (0, g.l8)({
            message: a,
            source: 'retry-modal',
            initialSelectedDestinations: c,
            forwardOptions: o
        });
    }, [c, a, o]);
    return (0, i.jsxs)(
        s.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        ((i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i));
                    }));
            }
            return e;
        })(
            {
                header: y.intl.string(y.t['/OPIaG']),
                confirmText: y.intl.string(y.t['5911LS']),
                cancelText: y.intl.string(y.t['ETE/oK']),
                confirmButtonColor: l.zx.Colors.BRAND,
                onConfirm: d
            },
            u
        )),
        (n = n =
            {
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        children: y.intl.format(y.t.cn9vFR, { count: c.length })
                    }),
                    (0, i.jsx)('div', {
                        className: A.failedDestinations,
                        children: c.map((e, t) => (0, i.jsx)(j, { destination: e }, t))
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}

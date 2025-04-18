n.d(t, { ForwardFailedAlertModal: () => j });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    s = n(700582),
    c = n(933557),
    o = n(266076),
    u = n(810123),
    d = n(592125),
    f = n(430824),
    p = n(158776),
    b = n(699516),
    I = n(594174),
    E = n(51144),
    _ = n(912332),
    g = n(388032),
    y = n(547754);
function S(e) {
    let { icon: t, label: n } = e;
    return (0, i.jsxs)('div', {
        className: y.failedRow,
        children: [
            t,
            (0, i.jsx)(l.Text, {
                className: y.label,
                variant: 'text-md/medium',
                lineClamp: 1,
                children: n
            })
        ]
    });
}
function A(e) {
    let { channel: t } = e,
        n = (0, c.ZP)(t);
    return (0, i.jsx)(S, {
        icon: (0, i.jsx)(o.Z, {
            'aria-hidden': !0,
            size: l.EFr.SIZE_32,
            channel: t,
            experimentLocation: 'forward-failed-retry-modal'
        }),
        label: n
    });
}
function O(e) {
    let { user: t } = e,
        n = E.ZP.useName(t),
        r = (0, a.e7)([b.Z], () => b.Z.getNickname(t.id)),
        c = (0, a.e7)([p.Z], () => p.Z.getStatus(t.id));
    return (0, i.jsx)(S, {
        icon: (0, i.jsx)(s.Z, {
            'aria-hidden': !0,
            size: l.EFr.SIZE_32,
            user: t,
            status: c
        }),
        label: null != r ? r : n
    });
}
function h(e) {
    let { channel: t } = e,
        n = (0, a.e7)([f.Z], () => f.Z.getGuild(null == t ? void 0 : t.guild_id)),
        r = (0, c.ZP)(t);
    return (0, i.jsx)(S, {
        icon: (0, i.jsx)(u.Z, {
            size: u.E.SMALL_32,
            guild: n,
            channel: t
        }),
        label: r
    });
}
function m(e) {
    let { destination: t } = e,
        { channel: n, user: r } = (0, a.cj)([d.Z, I.default], () => ({
            channel: 'channel' === t.type ? d.Z.getChannel(t.id) : null,
            user: 'user' === t.type ? I.default.getUser(t.id) : null
        }));
    return (null == n ? void 0 : n.isGroupDM()) ? (0, i.jsx)(A, { channel: n }) : null != r ? (0, i.jsx)(O, { user: r }) : null != n ? (0, i.jsx)(h, { channel: n }) : null;
}
function j(e) {
    var t,
        n,
        { message: a, failedDestinations: s, forwardOptions: c } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++) (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['message', 'failedDestinations', 'forwardOptions']);
    let u = r.useCallback(() => {
        (0, _.l8)({
            message: a,
            source: 'retry-modal',
            initialSelectedDestinations: s,
            forwardOptions: c
        });
    }, [s, a, c]);
    return (0, i.jsxs)(
        l.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                header: g.NW.string(g.t['/OPIaG']),
                confirmText: g.NW.string(g.t['5911LS']),
                cancelText: g.NW.string(g.t['ETE/oK']),
                confirmButtonColor: l.zxk.Colors.BRAND,
                onConfirm: u
            },
            o
        )),
        (n = n =
            {
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        children: g.NW.format(g.t.cn9vFR, { count: s.length })
                    }),
                    (0, i.jsx)('div', {
                        className: y.failedDestinations,
                        children: s.map((e, t) => (0, i.jsx)(m, { destination: e }, t))
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

n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(194359),
    s = n(681678),
    l = n(699516),
    c = n(594174),
    u = n(981631),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { user: t, guildId: f, channelId: p, onBlock: m, onIgnore: g, onUnblock: E, location: b = 'ContextMenu', appContext: y = u.IlC.APP } = e,
        { id: v } = t,
        O = (0, i.e7)(
            [c.default],
            () => {
                var e;
                return (null == (e = c.default.getCurrentUser()) ? void 0 : e.id) === v;
            },
            [v]
        ),
        I = (0, i.e7)([l.Z], () => l.Z.isBlocked(v), [v]),
        S = I ? 'default' : 'danger';
    return O
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'block',
              color: null != S ? S : 'default',
              label: I ? d.NW.string(d.t.XyHpKC) : d.NW.string(d.t.l4EmaW),
              action: I
                  ? () => {
                        null == E || E(), a.Z.unblockUser(v, { location: b }), s.Z.showUnblockSuccessToast(v, null != p ? p : void 0);
                    }
                  : () => {
                        (0, o.ZDy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e('97652'), n.e('25784')]).then(n.bind(n, 478923));
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        h(_({}, n), {
                                            user: t,
                                            guildId: f,
                                            channelId: p,
                                            onBlock: m,
                                            onIgnore: g,
                                            location: b
                                        })
                                    );
                            },
                            { contextKey: (0, o.VnL)(y) }
                        );
                    }
          });
}

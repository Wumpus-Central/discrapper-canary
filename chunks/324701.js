n.d(t, {
    x: () => m,
    z: () => g
});
var r = n(255367),
    s = n(481060),
    l = n(668781),
    a = n(100527),
    o = n(585483),
    i = n(192720),
    c = n(768943),
    u = n(175006),
    h = n(981631),
    d = n(989925),
    p = n(388032);
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                s = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (s[n] = e[n]));
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]));
    }
    return s;
}
async function g(e) {
    var { displayToast: t = !1 } = e,
        g = f(e, ['displayToast']);
    if (null == c.Z.getSavedMessage(g.channelId, g.messageId) && !(0, u.Z)())
        return void (0, s.ZDy)(async () => {
            let { default: e } = await n.e('34906').then(n.bind(n, 639565));
            return (t) =>
                (0, r.jsx)(
                    e,
                    (function (e) {
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
                    })({ source: a.Z.FOR_LATER_HELPERS }, t)
                );
        });
    if (
        null !=
            (await (0, i.XA)(g).catch((e) => {
                var t, n, r;
                return (
                    (null == e || null == (t = e.body) ? void 0 : t.code) === h.evJ.TOO_MANY_SAVED_MESSAGES
                        ? l.Z.show({
                              title: p.intl.string(p.t.mlbiZW),
                              body: p.intl.formatToPlainString(p.t['1zVbEB'], { max: d.D }),
                              cancelText: p.intl.string(p.t.BddRzc),
                              confirmText: p.intl.string(p.t.ZGbTc3),
                              onConfirm: () => o.S.dispatch(h.CkL.TOGGLE_FOR_LATER)
                          })
                        : (0, s.showToast)((0, s.createToast)(null != (r = null == e || null == (n = e.body) ? void 0 : n.message) ? r : p.intl.string(p.t.R0RpRU), s.ToastType.FAILURE)),
                    null
                );
            })) &&
        t
    ) {
        let e = null != g.dueAt ? p.intl.string(p.t.i1IsOz) : p.intl.string(p.t['WQdL//']),
            t = null != g.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
        (0, s.showToast)((0, s.createToast)(e, t));
    }
}
async function m(e) {
    var { displayToast: t = !1 } = e,
        n = f(e, ['displayToast']);
    if (
        null !=
            (await (0, i.ep)(n).catch((e) => {
                var t, n;
                return ((0, s.showToast)((0, s.createToast)(null != (n = null == e || null == (t = e.body) ? void 0 : t.message) ? n : p.intl.string(p.t.R0RpRU), s.ToastType.FAILURE)), null);
            })) &&
        t
    ) {
        let e = null != n.dueAt ? p.intl.string(p.t.D0tS09) : p.intl.string(p.t['5KOMiY']),
            t = null != n.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
        (0, s.showToast)((0, s.createToast)(e, t));
    }
}

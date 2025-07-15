r.d(t, {
    x: () => m,
    z: () => g
});
var n = r(255367),
    s = r(481060),
    l = r(668781),
    a = r(100527),
    o = r(585483),
    i = r(192720),
    c = r(768943),
    u = r(175006),
    d = r(981631),
    h = r(989925),
    p = r(388032);
function f(e, t) {
    if (null == e) return {};
    var r,
        n,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (s[r] = e[r]));
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]));
    }
    return s;
}
async function g(e) {
    var { displayToast: t = !1 } = e,
        g = f(e, ['displayToast']);
    if (null == c.Z.getSavedMessage(g.channelId, g.messageId) && !(0, u.Z)())
        return void (0, s.ZDy)(async () => {
            let { default: e } = await r.e('34906').then(r.bind(r, 639565));
            return (t) =>
                (0, n.jsx)(
                    e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })({ source: a.Z.FOR_LATER_HELPERS }, t)
                );
        });
    if (
        null !=
            (await (0, i.XA)(g).catch((e) => {
                var t, r, n;
                return (
                    (null == e || null == (t = e.body) ? void 0 : t.code) === d.evJ.TOO_MANY_SAVED_MESSAGES
                        ? l.Z.show({
                              title: p.intl.string(p.t.mlbiZW),
                              body: p.intl.formatToPlainString(p.t['1zVbEB'], { max: h.D }),
                              cancelText: p.intl.string(p.t.BddRzc),
                              confirmText: p.intl.string(p.t.ZGbTc3),
                              onConfirm: () => o.S.dispatch(d.CkL.TOGGLE_FOR_LATER)
                          })
                        : (0, s.showToast)((0, s.createToast)(null != (n = null == e || null == (r = e.body) ? void 0 : r.message) ? n : p.intl.string(p.t.R0RpRU), s.ToastType.FAILURE)),
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
        r = f(e, ['displayToast']);
    if (
        null !=
            (await (0, i.ep)(r).catch((e) => {
                var t, r;
                return ((0, s.showToast)((0, s.createToast)(null != (r = null == e || null == (t = e.body) ? void 0 : t.message) ? r : p.intl.string(p.t.R0RpRU), s.ToastType.FAILURE)), null);
            })) &&
        t
    ) {
        let e = null != r.dueAt ? p.intl.string(p.t.D0tS09) : p.intl.string(p.t['5KOMiY']),
            t = null != r.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
        (0, s.showToast)((0, s.createToast)(e, t));
    }
}

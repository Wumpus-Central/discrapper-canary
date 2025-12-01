n.d(t, {
    x: () => b,
    z: () => E,
});
var r = n(54381),
    i = n(481060),
    a = n(668781),
    o = n(100527),
    s = n(585483),
    l = n(192720),
    c = n(768943),
    u = n(175006),
    d = n(981631),
    f = n(989925),
    p = n(388032);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
async function E(e) {
    var { displayToast: t = !1 } = e,
        _ = h(e, ["displayToast"]);
    if (null == c.Z.getSavedMessage(_.channelId, _.messageId) && !(0, u.Z)())
        return void (0, i.ZDy)(async () => {
            let { default: e } = await n.e("34906").then(n.bind(n, 639565));
            return (t) => (0, r.jsx)(e, m({ source: o.Z.FOR_LATER_HELPERS }, t));
        });
    if (
        null !=
            (await (0, l.XA)(_).catch((e) => {
                var t, n, r;
                return (
                    (null == e || null == (t = e.body) ? void 0 : t.code) === d.evJ.TOO_MANY_SAVED_MESSAGES
                        ? a.Z.show({
                              title: p.intl.string(p.t.mlbiZW),
                              body: p.intl.formatToPlainString(p.t["1zVbEG"], { max: f.D }),
                              cancelText: p.intl.string(p.t.BddRzS),
                              confirmText: p.intl.string(p.t.ZGbTcy),
                              onConfirm: () => s.S.dispatch(d.CkL.TOGGLE_FOR_LATER),
                          })
                        : (0, i.showToast)(
                              (0, i.createToast)(
                                  null != (r = null == e || null == (n = e.body) ? void 0 : n.message)
                                      ? r
                                      : p.intl.string(p.t.R0RpRX),
                                  i.ToastType.FAILURE,
                              ),
                          ),
                    null
                );
            })) &&
        t
    ) {
        let e = null != _.dueAt ? p.intl.string(p.t.i1IsOy) : p.intl.string(p.t["WQdL/6"]),
            t = null != _.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
        (0, i.showToast)((0, i.createToast)(e, t));
    }
}
async function b(e) {
    var { displayToast: t = !1 } = e,
        n = h(e, ["displayToast"]);
    if (
        null !=
            (await (0, l.ep)(n).catch((e) => {
                var t, n;
                return (
                    (0, i.showToast)(
                        (0, i.createToast)(
                            null != (n = null == e || null == (t = e.body) ? void 0 : t.message)
                                ? n
                                : p.intl.string(p.t.R0RpRX),
                            i.ToastType.FAILURE,
                        ),
                    ),
                    null
                );
            })) &&
        t
    ) {
        let e = null != n.dueAt ? p.intl.string(p.t.D0tS02) : p.intl.string(p.t["5KOMiV"]),
            t = null != n.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
        (0, i.showToast)((0, i.createToast)(e, t));
    }
}

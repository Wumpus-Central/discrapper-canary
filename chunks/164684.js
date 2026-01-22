n.d(t, {
    Y: () => g,
    x: () => E,
});
var r = n(627968),
    i = n(397927),
    a = n(157559),
    s = n(793574),
    o = n(203982),
    l = n(216623),
    c = n(85109),
    u = n(226017),
    d = n(652215);
n(811233);
var f = n(985018);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
async function g(e) {
    let { displayToast: t = !1 } = e,
        p = h(e, ["displayToast"]);
    if (null == c.A.getSavedMessage(p.channelId, p.messageId) && !(0, u.A)())
        return void (0, i.mMO)(async () => {
            let { default: e } = await n.e("22540").then(n.bind(n, 530951));
            return (t) => (0, r.jsx)(e, _({ source: s.A.FOR_LATER_HELPERS }, t));
        });
    if (
        null !=
            (await (0, l.oN)(p).catch((e) => {
                var t, n, r;
                return (
                    (null == e || null == (n = e.body) ? void 0 : n.code) === d.t02.TOO_MANY_SAVED_MESSAGES
                        ? a.A.show({
                              title: f.intl.string(f.t.mlbiZW),
                              body: f.intl.formatToPlainString(f.t["1zVbEG"], { max: 200 }),
                              cancelText: f.intl.string(f.t.BddRzS),
                              confirmText: f.intl.string(f.t.ZGbTcy),
                              onConfirm: () => o._.dispatch(d.jej.TOGGLE_FOR_LATER),
                          })
                        : (0, i.showToast)(
                              (0, i.createToast)(
                                  null != (t = null == e || null == (r = e.body) ? void 0 : r.message)
                                      ? t
                                      : f.intl.string(f.t.R0RpRX),
                                  i.ToastType.FAILURE,
                              ),
                          ),
                    null
                );
            })) &&
        t
    ) {
        let e = null != p.dueAt ? f.intl.string(f.t.i1IsOy) : f.intl.string(f.t["WQdL/6"]),
            t = null != p.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
        (0, i.showToast)((0, i.createToast)(e, t));
    }
}
async function E(e) {
    let { displayToast: t = !1 } = e,
        n = h(e, ["displayToast"]);
    if (
        null !=
            (await (0, l.cf)(n).catch((e) => {
                var t, n;
                return (
                    (0, i.showToast)(
                        (0, i.createToast)(
                            null != (t = null == e || null == (n = e.body) ? void 0 : n.message)
                                ? t
                                : f.intl.string(f.t.R0RpRX),
                            i.ToastType.FAILURE,
                        ),
                    ),
                    null
                );
            })) &&
        t
    ) {
        let e = null != n.dueAt ? f.intl.string(f.t.D0tS02) : f.intl.string(f.t["5KOMiV"]),
            t = null != n.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
        (0, i.showToast)((0, i.createToast)(e, t));
    }
}

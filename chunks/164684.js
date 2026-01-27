r.d(t, {
    Y: () => f,
    x: () => g,
});
var n = r(627968),
    l = r(397927),
    s = r(157559),
    a = r(793574),
    i = r(203982),
    o = r(216623),
    c = r(85109),
    u = r(226017),
    d = r(652215);
r(811233);
var h = r(985018);

function p(e, t) {
    if (null == e) return {};
    var r,
        n,
        l,
        s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
            (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s;
    }
    if (
        ((s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                s = Object.getOwnPropertyNames(e);
            for (n = 0; n < s.length; n++)
                (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
            (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    return s;
}
async function f(e) {
    let { displayToast: t = !1 } = e,
        f = p(e, ["displayToast"]);
    if (null == c.A.getSavedMessage(f.channelId, f.messageId) && !(0, u.A)())
        return void (0, l.mMO)(async () => {
            let { default: e } = await r.e("159").then(r.bind(r, 530951));
            return (t) =>
                (0, n.jsx)(
                    e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })(
                        {
                            source: a.A.FOR_LATER_HELPERS,
                        },
                        t,
                    ),
                );
        });
    if (
        null !=
            (await (0, o.oN)(f).catch((e) => {
                var t, r, n;
                return (
                    (null == e || null == (r = e.body) ? void 0 : r.code) === d.t02.TOO_MANY_SAVED_MESSAGES
                        ? s.A.show({
                              title: h.intl.string(h.t.mlbiZW),
                              body: h.intl.formatToPlainString(h.t["1zVbEG"], {
                                  max: 200,
                              }),
                              cancelText: h.intl.string(h.t.BddRzS),
                              confirmText: h.intl.string(h.t.ZGbTcy),
                              onConfirm: () => i._.dispatch(d.jej.TOGGLE_FOR_LATER),
                          })
                        : (0, l.showToast)(
                              (0, l.createToast)(
                                  null != (t = null == e || null == (n = e.body) ? void 0 : n.message)
                                      ? t
                                      : h.intl.string(h.t.R0RpRX),
                                  l.ToastType.FAILURE,
                              ),
                          ),
                    null
                );
            })) &&
        t
    ) {
        let e = null != f.dueAt ? h.intl.string(h.t.i1IsOy) : h.intl.string(h.t["WQdL/6"]),
            t = null != f.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t));
    }
}
async function g(e) {
    let { displayToast: t = !1 } = e,
        r = p(e, ["displayToast"]);
    if (
        null !=
            (await (0, o.cf)(r).catch((e) => {
                var t, r;
                return (
                    (0, l.showToast)(
                        (0, l.createToast)(
                            null != (t = null == e || null == (r = e.body) ? void 0 : r.message)
                                ? t
                                : h.intl.string(h.t.R0RpRX),
                            l.ToastType.FAILURE,
                        ),
                    ),
                    null
                );
            })) &&
        t
    ) {
        let e = null != r.dueAt ? h.intl.string(h.t.D0tS02) : h.intl.string(h.t["5KOMiV"]),
            t = null != r.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
        (0, l.showToast)((0, l.createToast)(e, t));
    }
}

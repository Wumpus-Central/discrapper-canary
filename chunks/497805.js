n.d(t, {
    Z: () => O,
    z: () => g,
}),
    n(388685);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(570140),
    o = n(317770),
    s = n(728285),
    l = n(594174),
    c = n(592183),
    u = n(224724),
    d = n(981631);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = new Set();
function g(e, t) {
    return "USER_PROFILE_MODAL_KEY:".concat(e, ":").concat(null == t ? "" : t);
}
async function E(e) {
    var t,
        {
            userId: a,
            tabSection: o,
            scrollTarget: f,
            guildId: m,
            channelId: E,
            showGuildProfile: b = !0,
            appContext: y,
            customStatusPrompt: O,
            disableActionsForPreview: v = !1,
        } = e,
        S = _(e, [
            "userId",
            "tabSection",
            "scrollTarget",
            "guildId",
            "channelId",
            "showGuildProfile",
            "appContext",
            "customStatusPrompt",
            "disableActionsForPreview",
        ]);
    let I = l.default.getUser(a);
    if (null == I) return;
    let T = l.default.getCurrentUser();
    if (null == T) return;
    let C = g(a, b ? m : void 0);
    h.add(
        await (0, i.ZDy)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("61924"),
                        n.e("62880"),
                        n.e("39380"),
                        n.e("74330"),
                        n.e("39442"),
                        n.e("93979"),
                    ]).then(n.bind(n, 866035))
                ).default;
                return (t) =>
                    (0, r.jsx)(
                        e,
                        p(
                            {
                                user: I,
                                currentUser: T,
                                guildId: m,
                                initialTabSection: o,
                                initialScrollTarget: f,
                                channelId: E,
                                showGuildProfile: b,
                                customStatusPrompt: O,
                                disableActionsForPreview: v,
                            },
                            t,
                            S,
                        ),
                    );
            },
            {
                modalKey: C,
                contextKey: (0, i.VnL)(null != (t = null != y ? y : (0, s.GB)()) ? t : d.IlC.APP),
                onCloseRequest: () => {
                    if (u.Z.hasUnsavedChanges()) return void c.Z.notifyUnsavedWidgets();
                    (0, i.Mr3)(C), h.delete(C), c.Z.clearPendingWidgets();
                },
            },
        ),
    );
}
function b() {
    if (0 !== h.size) {
        for (let e of h) (0, i.Mr3)(e);
        h.clear(), c.Z.clearPendingWidgets();
    }
}
class y extends o.Z {
    _initialize() {
        a.Z.subscribe("USER_PROFILE_MODAL_OPEN", E), a.Z.subscribe("USER_PROFILE_MODAL_CLOSE", b);
    }
    _terminate() {
        a.Z.unsubscribe("USER_PROFILE_MODAL_OPEN", E), a.Z.unsubscribe("USER_PROFILE_MODAL_CLOSE", b);
    }
}
let O = new y();

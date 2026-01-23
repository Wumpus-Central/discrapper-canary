n.d(t, {
    A: () => O,
    n: () => g,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(73153),
    s = n(272355),
    o = n(267102),
    l = n(287809),
    c = n(958805),
    u = n(61881),
    d = n(652215);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = new Set();

function g(e, t) {
    return "USER_PROFILE_MODAL_KEY:".concat(e, ":").concat(null == t ? "" : t);
}
async function E(e) {
    var t;
    let {
            userId: a,
            tabSection: s,
            scrollTarget: f,
            guildId: h,
            channelId: E,
            showGuildProfile: y = !0,
            appContext: b,
            customStatusPrompt: O,
            disableActionsForPreview: v = !1,
        } = e,
        A = _(e, [
            "userId",
            "tabSection",
            "scrollTarget",
            "guildId",
            "channelId",
            "showGuildProfile",
            "appContext",
            "customStatusPrompt",
            "disableActionsForPreview",
        ]),
        I = l.default.getUser(a);
    if (null == I) return;
    let S = l.default.getCurrentUser();
    if (null == S) return;
    let T = g(a, y ? h : void 0);
    m.add(
        await (0, i.mMO)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("10614"),
                        n.e("20088"),
                        n.e("42944"),
                        n.e("10117"),
                        n.e("13696"),
                        n.e("38663"),
                        n.e("64228"),
                    ]).then(n.bind(n, 293071))
                ).default;
                return (t) =>
                    (0, r.jsx)(
                        e,
                        p(
                            {
                                user: I,
                                currentUser: S,
                                guildId: h,
                                initialTabSection: s,
                                initialScrollTarget: f,
                                channelId: E,
                                showGuildProfile: y,
                                customStatusPrompt: O,
                                disableActionsForPreview: v,
                            },
                            t,
                            A,
                        ),
                    );
            },
            {
                modalKey: T,
                contextKey: (0, i.TId)(null != (t = null != b ? b : (0, o.zd)()) ? t : d.BRT.APP),
                onCloseRequest: () => {
                    u.A.hasUnsavedChanges()
                        ? c.A.notifyUnsavedWidgets()
                        : ((0, i.OoC)(T), m.delete(T), c.A.clearPendingWidgets());
                },
            },
        ),
    );
}

function y() {
    if (0 !== m.size) {
        for (let e of m) (0, i.OoC)(e);
        m.clear(), c.A.clearPendingWidgets();
    }
}
class b extends s.A {
    _initialize() {
        a.h.subscribe("USER_PROFILE_MODAL_OPEN", E), a.h.subscribe("USER_PROFILE_MODAL_CLOSE", y);
    }
    _terminate() {
        a.h.unsubscribe("USER_PROFILE_MODAL_OPEN", E), a.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", y);
    }
}
let O = new b();

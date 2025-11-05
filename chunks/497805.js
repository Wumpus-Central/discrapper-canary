n.d(t, {
    Z: () => O,
    z: () => g,
}),
    n(388685);
var r = n(951288);
n(647438);
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = new Set();
function g(e, t) {
    return "USER_PROFILE_MODAL_KEY:".concat(e, ":").concat(null == t ? "" : t);
}
async function E(e) {
    var t,
        {
            userId: a,
            section: o,
            subsection: f,
            guildId: h,
            channelId: E,
            showGuildProfile: b = !0,
            appContext: y,
            customStatusPrompt: O,
            disableActionsForPreview: v = !1,
        } = e,
        I = p(e, [
            "userId",
            "section",
            "subsection",
            "guildId",
            "channelId",
            "showGuildProfile",
            "appContext",
            "customStatusPrompt",
            "disableActionsForPreview",
        ]);
    let T = l.default.getUser(a);
    if (null == T) return;
    let S = l.default.getCurrentUser();
    if (null == S) return;
    let A = g(a, b ? h : void 0);
    m.add(
        await (0, i.ZDy)(
            async () => {
                let e = (
                    await Promise.all([
                        n.e("13599"),
                        n.e("96413"),
                        n.e("94072"),
                        n.e("39380"),
                        n.e("62880"),
                        n.e("52557"),
                        n.e("93979"),
                    ]).then(n.bind(n, 866035))
                ).default;
                return (t) =>
                    (0, r.jsx)(
                        e,
                        _(
                            {
                                user: T,
                                currentUser: S,
                                guildId: h,
                                initialSection: o,
                                initialSubsection: f,
                                channelId: E,
                                showGuildProfile: b,
                                customStatusPrompt: O,
                                disableActionsForPreview: v,
                            },
                            t,
                            I,
                        ),
                    );
            },
            {
                modalKey: A,
                contextKey: (0, i.VnL)(null != (t = null != y ? y : (0, s.GB)()) ? t : d.IlC.APP),
                onCloseRequest: () => {
                    if (u.Z.hasSaveablePendingChanges()) return void c.Z.notifyPendingWidgets();
                    (0, i.Mr3)(A), m.delete(A), c.Z.clearPendingWidgets();
                },
            },
        ),
    );
}
function b() {
    if (0 !== m.size) {
        for (let e of m) (0, i.Mr3)(e);
        m.clear(), c.Z.clearPendingWidgets();
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

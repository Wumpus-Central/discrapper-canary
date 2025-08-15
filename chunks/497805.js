n.d(t, {
    Z: () => O,
    z: () => g,
});
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(570140),
    o = n(317770),
    s = n(40851),
    l = n(594174),
    c = n(585483),
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
let m = null;
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
            showGuildProfile: y = !0,
            appContext: O,
            customStatusPrompt: v,
            disableActionsForPreview: I = !1,
        } = e,
        T = p(e, [
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
    let S = l.default.getUser(a);
    if (null == S) return;
    let A = l.default.getCurrentUser();
    null != A &&
        (m = await (0, i.ZDy)(
            async () => {
                let e = (
                    await Promise.all([n.e("79312"), n.e("1268"), n.e("82412"), n.e("62880"), n.e("12756")]).then(
                        n.bind(n, 866035),
                    )
                ).default;
                return (t) =>
                    (0, r.jsx)(
                        e,
                        _(
                            {
                                user: S,
                                currentUser: A,
                                guildId: h,
                                initialSection: o,
                                initialSubsection: f,
                                channelId: E,
                                showGuildProfile: y,
                                customStatusPrompt: v,
                                disableActionsForPreview: I,
                            },
                            t,
                            T,
                        ),
                    );
            },
            {
                modalKey: g(a, y ? h : void 0),
                contextKey: (0, i.VnL)(null != (t = null != O ? O : (0, s.GB)()) ? t : d.IlC.APP),
                onCloseRequest: () => {
                    if (u.Z.hasPendingChanges()) {
                        c.S.dispatch(d.CkL.SHAKE_PROFILE_MODAL), c.S.dispatch(d.CkL.EMPHASIZE_NOTICE);
                        return;
                    }
                    b();
                },
            },
        ));
}
function b() {
    null != m && (0, i.Mr3)(m), (m = null);
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

n.d(t, {
    Z: () => v,
    z: () => E,
});
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(570140),
    o = n(317770),
    s = n(40851),
    l = n(594174),
    c = n(585483),
    u = n(592183),
    d = n(224724),
    f = n(981631);
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
let g = null;
function E(e, t) {
    return "USER_PROFILE_MODAL_KEY:".concat(e, ":").concat(null == t ? "" : t);
}
async function b(e) {
    var t,
        {
            userId: a,
            section: o,
            subsection: u,
            guildId: _,
            channelId: m,
            showGuildProfile: b = !0,
            appContext: O,
            customStatusPrompt: v,
            disableActionsForPreview: I = !1,
        } = e,
        T = h(e, [
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
        (g = await (0, i.ZDy)(
            async () => {
                let e = (
                    await Promise.all([n.e("1268"), n.e("27069"), n.e("62880"), n.e("8853")]).then(n.bind(n, 866035))
                ).default;
                return (t) =>
                    (0, r.jsx)(
                        e,
                        p(
                            {
                                user: S,
                                currentUser: A,
                                guildId: _,
                                initialSection: o,
                                initialSubsection: u,
                                channelId: m,
                                showGuildProfile: b,
                                customStatusPrompt: v,
                                disableActionsForPreview: I,
                            },
                            t,
                            T,
                        ),
                    );
            },
            {
                modalKey: E(a, b ? _ : void 0),
                contextKey: (0, i.VnL)(null != (t = null != O ? O : (0, s.GB)()) ? t : f.IlC.APP),
                onCloseRequest: () => {
                    if (d.Z.hasSaveablePendingChanges()) {
                        c.S.dispatch(f.CkL.SHAKE_PROFILE_MODAL), c.S.dispatch(f.CkL.EMPHASIZE_NOTICE);
                        return;
                    }
                    y();
                },
            },
        ));
}
function y() {
    null != g && ((0, i.Mr3)(g), u.Z.clearPendingWidgets()), (g = null);
}
class O extends o.Z {
    _initialize() {
        a.Z.subscribe("USER_PROFILE_MODAL_OPEN", b), a.Z.subscribe("USER_PROFILE_MODAL_CLOSE", y);
    }
    _terminate() {
        a.Z.unsubscribe("USER_PROFILE_MODAL_OPEN", b), a.Z.unsubscribe("USER_PROFILE_MODAL_CLOSE", y);
    }
}
let v = new O();

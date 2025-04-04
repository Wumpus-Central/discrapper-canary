n.d(t, { Z: () => _ }), n(653041);
var r = n(97613),
    i = n.n(r),
    o = n(570140),
    a = n(777639),
    s = n(272423),
    l = n(808663),
    c = n(178535),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
let _ = {
    push(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()('modal'),
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.IlC.APP;
        return (
            (0, s.Ll)(
                f(
                    {
                        key: n,
                        modal: (0, c.Z)(e, {}, t, n)
                    },
                    r
                )
            ),
            o.Z.dispatch({
                type: 'MODAL_PUSH',
                modal: e,
                props: t,
                key: n,
                appContext: a
            }),
            n
        );
    },
    pushLazy(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()('modal'),
            r = arguments.length > 3 ? arguments[3] : void 0,
            o = (0, a.D)();
        return null != o && o.isReady()
            ? (e instanceof Promise
                  ? e.then((e) => {
                        let { default: t } = e;
                        return t;
                    })
                  : e()
              ).then((e) => this.push(e, t, n, r))
            : new Promise((i) => l.Z.enqueue(() => i(this.pushLazy(e, t, n, r))));
    },
    updateAnimation(e, t) {
        o.Z.dispatch({
            type: 'MODAL_UPDATE',
            key: e,
            props: {},
            partial: !0,
            animation: t
        });
    },
    pop() {
        (0, s.GZ)(), o.Z.dispatch({ type: 'MODAL_POP' });
    },
    popWithKey(e, t) {
        (0, s.GZ)(e, t),
            o.Z.dispatch({
                type: 'MODAL_POP',
                key: e,
                onExited: t
            });
    },
    popAll() {
        (0, s.lE)(), o.Z.dispatch({ type: 'MODAL_POP_ALL' }), o.Z.dispatch({ type: 'CHANNEL_SETTINGS_CLOSE' }), o.Z.dispatch({ type: 'EMAIL_VERIFICATION_MODAL_CLOSE' }), o.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' }), o.Z.dispatch({ type: 'HIDE_ACTION_SHEET' }), o.Z.dispatch({ type: 'DISPLAYED_INVITE_CLEAR' }), o.Z.dispatch({ type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE' }), o.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' }), o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), o.Z.dispatch({ type: 'CONNECTIONS_GRID_MODAL_HIDE' }), o.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
    }
};

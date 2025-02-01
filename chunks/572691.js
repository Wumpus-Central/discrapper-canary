n.d(t, { Z: () => d }), n(653041);
var i = n(97613),
    r = n.n(i),
    a = n(570140),
    s = n(777639),
    o = n(272423),
    l = n(808663),
    u = n(178535),
    c = n(981631);
let d = {
    push(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()('modal'),
            i = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c.IlC.APP;
        return (
            (0, o.Ll)({
                key: n,
                modal: (0, u.Z)(e, {}, t, n),
                ...i
            }),
            a.Z.dispatch({
                type: 'MODAL_PUSH',
                modal: e,
                props: t,
                key: n,
                appContext: s
            }),
            n
        );
    },
    pushLazy(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r()('modal'),
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = (0, s.D)();
        return null != a && a.isReady()
            ? (e instanceof Promise
                  ? e.then((e) => {
                        let { default: t } = e;
                        return t;
                    })
                  : e()
              ).then((e) => this.push(e, t, n, i))
            : new Promise((r) => l.Z.enqueue(() => r(this.pushLazy(e, t, n, i))));
    },
    updateAnimation(e, t) {
        a.Z.dispatch({
            type: 'MODAL_UPDATE',
            key: e,
            props: {},
            partial: !0,
            animation: t
        });
    },
    pop() {
        (0, o.GZ)(), a.Z.dispatch({ type: 'MODAL_POP' });
    },
    popWithKey(e, t) {
        (0, o.GZ)(e, t),
            a.Z.dispatch({
                type: 'MODAL_POP',
                key: e,
                onExited: t
            });
    },
    popAll() {
        (0, o.lE)(), a.Z.dispatch({ type: 'MODAL_POP_ALL' }), a.Z.dispatch({ type: 'CHANNEL_SETTINGS_CLOSE' }), a.Z.dispatch({ type: 'EMAIL_VERIFICATION_MODAL_CLOSE' }), a.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' }), a.Z.dispatch({ type: 'HIDE_ACTION_SHEET' }), a.Z.dispatch({ type: 'DISPLAYED_INVITE_CLEAR' }), a.Z.dispatch({ type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE' }), a.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' }), a.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), a.Z.dispatch({ type: 'CONNECTIONS_GRID_MODAL_HIDE' }), a.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
    }
};

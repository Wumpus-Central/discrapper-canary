var i = r(653041);
var a = r(97613),
    s = r.n(a),
    o = r(570140),
    l = r(777639),
    u = r(272423),
    c = r(808663),
    d = r(178535),
    f = r(981631);
n.Z = {
    push(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s()('modal'),
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : f.IlC.APP;
        return (
            (0, u.Ll)({
                key: r,
                modal: (0, d.Z)(e, {}, n, r),
                ...i
            }),
            o.Z.dispatch({
                type: 'MODAL_PUSH',
                modal: e,
                props: n,
                key: r,
                appContext: a
            }),
            r
        );
    },
    pushLazy(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s()('modal'),
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = (0, l.D)();
        return null != a && a.isReady()
            ? (e instanceof Promise
                  ? e.then((e) => {
                        let { default: n } = e;
                        return n;
                    })
                  : e()
              ).then((e) => this.push(e, n, r, i))
            : new Promise((a) => c.Z.enqueue(() => a(this.pushLazy(e, n, r, i))));
    },
    updateAnimation(e, n) {
        o.Z.dispatch({
            type: 'MODAL_UPDATE',
            key: e,
            props: {},
            partial: !0,
            animation: n
        });
    },
    pop() {
        (0, u.GZ)(), o.Z.dispatch({ type: 'MODAL_POP' });
    },
    popWithKey(e, n) {
        (0, u.GZ)(e, n),
            o.Z.dispatch({
                type: 'MODAL_POP',
                key: e,
                onExited: n
            });
    },
    popAll() {
        (0, u.lE)(), o.Z.dispatch({ type: 'MODAL_POP_ALL' }), o.Z.dispatch({ type: 'CHANNEL_SETTINGS_CLOSE' }), o.Z.dispatch({ type: 'EMAIL_VERIFICATION_MODAL_CLOSE' }), o.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' }), o.Z.dispatch({ type: 'HIDE_ACTION_SHEET' }), o.Z.dispatch({ type: 'DISPLAYED_INVITE_CLEAR' }), o.Z.dispatch({ type: 'NOTIFICATION_SETTINGS_MODAL_CLOSE' }), o.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' }), o.Z.dispatch({ type: 'USER_SETTINGS_MODAL_CLOSE' }), o.Z.dispatch({ type: 'CONNECTIONS_GRID_MODAL_HIDE' }), o.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
    }
};

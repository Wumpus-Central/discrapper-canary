n.d(t, {
    A: () => p,
}),
    n(321073);
var r = n(296489),
    i = n.n(r),
    a = n(73153),
    s = n(250953),
    o = n(33524),
    l = n(241943),
    c = n(830126),
    u = n(652215);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = {
    push(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()("modal"),
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.BRT.APP;
        return (
            (0, o.GR)(
                f(
                    {
                        key: n,
                        modal: (0, c.A)(e, {}, t, n),
                    },
                    r,
                ),
            ),
            a.h.dispatch({
                type: "MODAL_PUSH",
                modal: e,
                props: t,
                key: n,
                appContext: s,
            }),
            n
        );
    },
    pushLazy(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()("modal"),
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = (0, s.Y)();
        return null != a && a.isReady()
            ? (e instanceof Promise
                  ? e.then((e) => {
                        let { default: t } = e;
                        return t;
                    })
                  : e()
              ).then((e) => this.push(e, t, n, r))
            : new Promise((i) => l.A.enqueue(() => i(this.pushLazy(e, t, n, r))));
    },
    updateAnimation(e, t) {
        a.h.dispatch({
            type: "MODAL_UPDATE",
            key: e,
            props: {},
            partial: !0,
            animation: t,
        });
    },
    pop() {
        (0, o.tu)(),
            a.h.dispatch({
                type: "MODAL_POP",
            });
    },
    popWithKey(e, t) {
        (0, o.tu)(e, t),
            a.h.dispatch({
                type: "MODAL_POP",
                key: e,
                onExited: t,
            });
    },
    popAboveKey: (e) => (0, o.WR)(e),
    popAll() {
        (0, o.f3)(),
            a.h.dispatch({
                type: "MODAL_POP_ALL",
            }),
            a.h.dispatch({
                type: "EMAIL_VERIFICATION_MODAL_CLOSE",
            }),
            a.h.dispatch({
                type: "GUILD_SETTINGS_CLOSE",
            }),
            a.h.dispatch({
                type: "HIDE_ACTION_SHEET",
            }),
            a.h.dispatch({
                type: "DISPLAYED_INVITE_CLEAR",
            }),
            a.h.dispatch({
                type: "NOTIFICATION_SETTINGS_MODAL_CLOSE",
            }),
            a.h.dispatch({
                type: "QUICKSWITCHER_HIDE",
            }),
            a.h.dispatch({
                type: "USER_SETTINGS_MODAL_CLOSE",
            }),
            a.h.dispatch({
                type: "CONNECTIONS_GRID_MODAL_HIDE",
            }),
            a.h.dispatch({
                type: "USER_PROFILE_MODAL_CLOSE",
            });
    },
};

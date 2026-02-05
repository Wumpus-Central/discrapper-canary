"use strict";
n.d(t, { A: () => d }), n(321073);
var r = n(296489),
    i = n.n(r),
    a = n(73153),
    s = n(250953),
    o = n(33524),
    l = n(241943),
    u = n(830126),
    c = n(652215);
let d = {
    push(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i()("modal"),
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : c.BRT.APP;
        return (
            (0, o.GR)({ key: n, modal: (0, u.A)(e, {}, t, n), ...r }),
            a.h.dispatch({ type: "MODAL_PUSH", modal: e, props: t, key: n, appContext: s }),
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
        a.h.dispatch({ type: "MODAL_UPDATE", key: e, props: {}, partial: !0, animation: t });
    },
    pop() {
        (0, o.tu)(), a.h.dispatch({ type: "MODAL_POP" });
    },
    popWithKey(e, t) {
        (0, o.tu)(e, t), a.h.dispatch({ type: "MODAL_POP", key: e, onExited: t });
    },
    popAboveKey: (e) => (0, o.WR)(e),
    popAll() {
        (0, o.f3)(),
            a.h.dispatch({ type: "MODAL_POP_ALL" }),
            a.h.dispatch({ type: "EMAIL_VERIFICATION_MODAL_CLOSE" }),
            a.h.dispatch({ type: "GUILD_SETTINGS_CLOSE" }),
            a.h.dispatch({ type: "HIDE_ACTION_SHEET" }),
            a.h.dispatch({ type: "DISPLAYED_INVITE_CLEAR" }),
            a.h.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" }),
            a.h.dispatch({ type: "QUICKSWITCHER_HIDE" }),
            a.h.dispatch({ type: "USER_SETTINGS_MODAL_CLOSE" }),
            a.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_HIDE" }),
            a.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
    },
};

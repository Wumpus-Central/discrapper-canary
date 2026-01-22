n.d(t, {
    A: () => o,
});
var r = n(735438),
    i = n.n(r),
    l = n(179771),
    a = n(613057),
    s = n(652215);

function o(e, t) {
    return {
        [s.ZE4.VOICE_SETTINGS_UPDATE]: {
            scope: {
                [a.sm.ANY]: [l.F.RPC, l.F.RPC_VOICE_READ],
            },
            handler: () => (t) => {
                let { prevState: n, dispatch: r } = t,
                    l = e();
                return i().isEqual(l, n) || r(l), l;
            },
        },
        [s.ZE4.VOICE_SETTINGS_UPDATE_2]: {
            scope: a.hj,
            handler(e) {
                let { socket: n } = e;
                return (e) => {
                    let { prevState: r, dispatch: l } = e;
                    if (null == n.application.id) return r;
                    let a = t(n.application.id);
                    return i().isEqual(a, r) || l(a), a;
                };
            },
        },
    };
}

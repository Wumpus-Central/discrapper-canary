n.d(t, { A: () => o });
var i = n(735438),
    r = n.n(i),
    a = n(179771),
    l = n(613057),
    s = n(652215);
function o(e, t) {
    return {
        [s.ZE4.VOICE_SETTINGS_UPDATE]: {
            scope: { [l.sm.ANY]: [a.F.RPC, a.F.RPC_VOICE_READ] },
            handler: () => (t) => {
                let { prevState: n, dispatch: i } = t,
                    a = e();
                return r().isEqual(a, n) || i(a), a;
            },
        },
        [s.ZE4.VOICE_SETTINGS_UPDATE_2]: {
            scope: l.hj,
            handler(e) {
                let { socket: n } = e;
                return (e) => {
                    let { prevState: i, dispatch: a } = e;
                    if (null == n.application.id) return i;
                    let l = t(n.application.id);
                    return r().isEqual(l, i) || a(l), l;
                };
            },
        },
    };
}

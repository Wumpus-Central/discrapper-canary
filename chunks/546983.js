n.d(t, { Au: () => h, d5: () => A, j7: () => I, kS: () => u, l6: () => T });
var i = n(684013),
    a = n(833551),
    r = n(489277),
    s = n(19575),
    l = n(350535),
    o = n(636401),
    d = n(90924),
    c = n(613057),
    _ = n(652215);
let E = ["207646673902501888"];
function u(e) {
    return null != e && !!a.default.isOverlayOOPEnabledForPid(e) && r.A.isReady(e);
}
function A(e) {
    return null == e
        ? { lock: _.FXj, context: _.BRT.APP }
        : u(e)
          ? (i.A.setInputLocked(!1, e),
            {
                lock() {
                    i.A.setInputLocked(!0, e);
                },
                context: _.BRT.POPOUT,
            })
          : (s.Ay.focus(null, !0),
            {
                lock() {
                    s.Ay.setForegroundProcess(e);
                },
                context: _.BRT.APP,
            });
}
let I = async (e, t, n) => {
        if (((0, d.sq)(e, t), (null == n || "" === n) && (0, d.IR)(t)))
            return (e.authorization.scopes = [c.LQ, c.kw]), Promise.resolve();
        if (null == n || "" === n)
            return Promise.reject(new o.A({ closeCode: _.YI$.INVALID_CLIENTID }, "No Client ID Specified"));
        let i = s.Ay.releaseChannel !== _.BIo.CANARY && !E.includes(n) && e.transport !== c.z4.POST_MESSAGE;
        return await (0, d.e2)(n, i, e.abortController.signal), (0, d.uM)(e, n, t);
    },
    T = () =>
        (0, d.BB)((e) => {
            let t = [];
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = e.modeOptions.shortcut.map((e) => ({
                        type: e[0],
                        code: e[1],
                        name: (0, l.Qd)(e) ?? "unknown",
                    }))),
                t
            );
        }),
    h = (e) =>
        (0, d.Ub)(e, (e) => {
            let t = "";
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = (0, l.dI)(e.modeOptions.shortcut)),
                t
            );
        });

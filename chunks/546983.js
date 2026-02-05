n.d(t, { Au: () => g, d5: () => _, j7: () => m, kS: () => h, l6: () => p });
var i = n(684013),
    r = n(833551),
    a = n(395011),
    l = n(837921),
    s = n(350535),
    o = n(636401),
    d = n(90924),
    c = n(613057),
    u = n(652215);
let A = ["207646673902501888"];
function h(e) {
    return null != e && !!r.default.isOverlayOOPEnabledForPid(e) && a.A.isReady(e);
}
function _(e) {
    return null == e
        ? { lock: u.FXj, context: u.BRT.APP }
        : h(e)
          ? (i.A.setInputLocked(!1, e),
            {
                lock() {
                    i.A.setInputLocked(!0, e);
                },
                context: u.BRT.POPOUT,
            })
          : (l.Ay.focus(null, !0),
            {
                lock() {
                    l.Ay.setForegroundProcess(e);
                },
                context: u.BRT.APP,
            });
}
let m = async (e, t, n) => {
        if (((0, d.sq)(e, t), (null == n || "" === n) && (0, d.IR)(t)))
            return (e.authorization.scopes = [c.LQ, c.kw]), Promise.resolve();
        if (null == n || "" === n)
            return Promise.reject(new o.A({ closeCode: u.YI$.INVALID_CLIENTID }, "No Client ID Specified"));
        let i = l.Ay.releaseChannel !== u.BIo.CANARY && !A.includes(n) && e.transport !== c.z4.POST_MESSAGE;
        return await (0, d.e2)(n, i, e.abortController.signal), (0, d.uM)(e, n, t);
    },
    p = () =>
        (0, d.BB)((e) => {
            let t = [];
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = e.modeOptions.shortcut.map((e) => ({
                        type: e[0],
                        code: e[1],
                        name: (0, s.Qd)(e) ?? "unknown",
                    }))),
                t
            );
        }),
    g = (e) =>
        (0, d.Ub)(e, (e) => {
            let t = "";
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = (0, s.dI)(e.modeOptions.shortcut)),
                t
            );
        });

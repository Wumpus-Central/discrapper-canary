n.d(t, { Au: () => f, d5: () => g, j7: () => A, kS: () => p, l6: () => E });
var o = n(684013),
    r = n(296027),
    s = n(489277),
    i = n(19575),
    c = n(350535),
    l = n(636401),
    a = n(90924),
    d = n(613057),
    u = n(652215);
let h = ["207646673902501888"];
function p(e) {
    return null != e && !!r.default.isOverlayOOPEnabledForPid(e) && s.A.isReady(e);
}
function g(e) {
    return null == e
        ? { lock: u.FXj, context: u.BRT.APP }
        : p(e)
          ? (o.A.setInputLocked(!1, e),
            {
                lock() {
                    o.A.setInputLocked(!0, e);
                },
                context: u.BRT.POPOUT,
            })
          : (i.Ay.focus(null, !0),
            {
                lock() {
                    i.Ay.setForegroundProcess(e);
                },
                context: u.BRT.APP,
            });
}
let A = async (e, t, n) => {
        if (((0, a.sq)(e, t), (null == n || "" === n) && (0, a.IR)(t)))
            return (e.authorization.scopes = [d.LQ, d.kw]), Promise.resolve();
        if (null == n || "" === n)
            return Promise.reject(new l.A({ closeCode: u.YI$.INVALID_CLIENTID }, "No Client ID Specified"));
        let o = i.Ay.releaseChannel !== u.BIo.CANARY && !h.includes(n) && e.transport !== d.z4.POST_MESSAGE;
        return await (0, a.e2)(n, o, e.abortController.signal), (0, a.uM)(e, n, t);
    },
    E = () =>
        (0, a.BB)((e) => {
            let t = [];
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = e.modeOptions.shortcut.map((e) => ({
                        type: e[0],
                        code: e[1],
                        name: (0, c.Qd)(e) ?? "unknown",
                    }))),
                t
            );
        }),
    f = (e) =>
        (0, a.Ub)(e, (e) => {
            let t = "";
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = (0, c.dI)(e.modeOptions.shortcut)),
                t
            );
        });

n.d(t, { Au: () => f, d5: () => _, j7: () => A, kS: () => p, l6: () => m });
var o = n(684013),
    i = n(296027),
    r = n(489277),
    s = n(19575),
    l = n(350535),
    c = n(636401),
    a = n(90924),
    u = n(613057),
    d = n(652215);
let h = ["207646673902501888"];
function p(e) {
    return null != e && !!i.default.isOverlayOOPEnabledForPid(e) && r.A.isReady(e);
}
function _(e) {
    return null == e
        ? { lock: d.FXj, context: d.BRT.APP }
        : p(e)
          ? (o.A.setInputLocked(!1, e),
            {
                lock() {
                    o.A.setInputLocked(!0, e);
                },
                context: d.BRT.POPOUT,
            })
          : (s.Ay.focus(null, !0),
            {
                lock() {
                    s.Ay.setForegroundProcess(e);
                },
                context: d.BRT.APP,
            });
}
let A = async (e, t, n) => {
        if (((0, a.sq)(e, t), (null == n || "" === n) && (0, a.IR)(t)))
            return (e.authorization.scopes = [u.LQ, u.kw]), Promise.resolve();
        if (null == n || "" === n)
            return Promise.reject(new c.A({ closeCode: d.YI$.INVALID_CLIENTID }, "No Client ID Specified"));
        let o = s.Ay.releaseChannel !== d.BIo.CANARY && !h.includes(n) && e.transport !== u.z4.POST_MESSAGE;
        return await (0, a.e2)(n, o, e.abortController.signal), (0, a.uM)(e, n, t);
    },
    m = () =>
        (0, a.BB)((e) => {
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
    f = (e) =>
        (0, a.Ub)(e, (e) => {
            let t = "";
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = (0, l.dI)(e.modeOptions.shortcut)),
                t
            );
        });

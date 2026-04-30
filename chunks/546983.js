"use strict";
n.d(t, { Au: () => m, d5: () => h, j7: () => p, kS: () => f, l6: () => E });
var i = n(684013),
    r = n(296027),
    s = n(489277),
    a = n(19575),
    o = n(350535),
    l = n(636401),
    u = n(90924),
    c = n(613057),
    d = n(652215);
let _ = ["207646673902501888"];
function f(e) {
    return null != e && !!r.default.isOverlayOOPEnabledForPid(e) && s.A.isReady(e);
}
function h(e) {
    return null == e
        ? { lock: d.FXj, context: d.BRT.APP }
        : f(e)
          ? (i.A.setInputLocked(!1, e),
            {
                lock() {
                    i.A.setInputLocked(!0, e);
                },
                context: d.BRT.POPOUT,
            })
          : (a.Ay.focus(null, !0),
            {
                lock() {
                    a.Ay.setForegroundProcess(e);
                },
                context: d.BRT.APP,
            });
}
let p = async (e, t, n) => {
        if (((0, u.sq)(e, t), (null == n || "" === n) && (0, u.IR)(t)))
            return (e.authorization.scopes = [c.LQ, c.kw]), Promise.resolve();
        if (null == n || "" === n)
            return Promise.reject(new l.A({ closeCode: d.YI$.INVALID_CLIENTID }, "No Client ID Specified"));
        let i = a.Ay.releaseChannel !== d.BIo.CANARY && !_.includes(n) && e.transport !== c.z4.POST_MESSAGE;
        return await (0, u.e2)(n, i, e.abortController.signal), (0, u.uM)(e, n, t);
    },
    E = () =>
        (0, u.BB)((e) => {
            let t = [];
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = e.modeOptions.shortcut.map((e) => ({
                        type: e[0],
                        code: e[1],
                        name: (0, o.Qd)(e) ?? "unknown",
                    }))),
                t
            );
        }),
    m = (e) =>
        (0, u.Ub)(e, (e) => {
            let t = "";
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = (0, o.dI)(e.modeOptions.shortcut)),
                t
            );
        });

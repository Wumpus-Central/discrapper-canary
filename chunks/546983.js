n.d(t, {
    Au: () => m,
    d5: () => h,
    j7: () => A,
    kS: () => f,
    l6: () => g,
});
var r = n(684013),
    i = n(833551),
    l = n(395011),
    a = n(837921),
    s = n(350535),
    o = n(636401),
    c = n(90924),
    u = n(613057),
    d = n(652215);
let p = ["207646673902501888"];
function f(e) {
    return null != e && !!i.default.isOverlayOOPEnabledForPid(e) && l.A.isReady(e);
}
function h(e) {
    return null == e
        ? {
              lock: d.FXj,
              context: d.BRT.APP,
          }
        : f(e)
          ? (r.A.setInputLocked(!1, e),
            {
                lock() {
                    r.A.setInputLocked(!0, e);
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
let A = async (e, t, n) => {
        if (((0, c.sq)(e, t), (null == n || "" === n) && (0, c.IR)(t)))
            return (e.authorization.scopes = [u.LQ, u.kw]), Promise.resolve();
        if (null == n || "" === n)
            return Promise.reject(new o.A({ closeCode: d.YI$.INVALID_CLIENTID }, "No Client ID Specified"));
        let r = a.Ay.releaseChannel !== d.BIo.CANARY && !p.includes(n) && e.transport !== u.z4.POST_MESSAGE;
        return await (0, c.e2)(n, r), (0, c.uM)(e, n, t);
    },
    g = () =>
        (0, c.BB)((e) => {
            let t = [];
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = e.modeOptions.shortcut.map((e) => {
                        var t;
                        return {
                            type: e[0],
                            code: e[1],
                            name: null != (t = (0, s.Qd)(e)) ? t : "unknown",
                        };
                    })),
                t
            );
        }),
    m = (e) =>
        (0, c.Ub)(e, (e) => {
            let t = "";
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = (0, s.dI)(e.modeOptions.shortcut)),
                t
            );
        });

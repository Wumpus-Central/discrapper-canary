n.d(t, { Au: () => f, d5: () => h, j7: () => m, kS: () => _, l6: () => g });
var i = n(684013),
    o = n(296027),
    r = n(233741),
    s = n(19575),
    l = n(350535),
    a = n(636401),
    c = n(90924),
    u = n(613057),
    d = n(652215);
let p = ["207646673902501888"];
function _(e) {
    return null != e && !!o.default.isOverlayOOPEnabledForPid(e) && r.A.isReady(e);
}
function h(e) {
    return null == e
        ? { lock: d.FXj, context: d.BRT.APP }
        : _(e)
          ? (i.A.setInputLocked(!1, e),
            {
                lock() {
                    i.A.setInputLocked(!0, e);
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
let m = async (e, t, n) => {
        if (((0, c.sq)(e, t), (null == n || "" === n) && (0, c.IR)(t)))
            return ((e.authorization.scopes = new Set([u.LQ, u.kw])), Promise.resolve());
        if (null == n || "" === n)
            return Promise.reject(new a.A({ closeCode: d.YI$.INVALID_CLIENTID }, "No Client ID Specified"));
        let i = s.Ay.releaseChannel !== d.BIo.CANARY && !p.includes(n) && e.transport !== u.z4.POST_MESSAGE;
        return (await (0, c.e2)(n, i, e.abortController.signal), (0, c.uM)(e, n, t));
    },
    g = () =>
        (0, c.BB)((e) => {
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
        (0, c.Ub)(e, (e) => {
            let t = "";
            return (
                null != e.modeOptions.shortcut &&
                    Array.isArray(e.modeOptions.shortcut) &&
                    (t = (0, l.dI)(e.modeOptions.shortcut)),
                t
            );
        });

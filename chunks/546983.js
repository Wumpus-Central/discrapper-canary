var o = n(684013),
    r = n(861862),
    s = n(887287),
    i = n(253400),
    l = n(350535),
    c = n(636401),
    a = n(90924),
    d = n(613057),
    u = n(652215);
let h = ["207646673902501888"];
function p(e) {
    return null != e && !!r.default.isOverlayOOPEnabledForPid(e) && s.A.isReady(e);
}
n.d(
    t,
    {},
    {
        Au: (e) =>
            (0, a.Ub)(e, (e) => {
                let t = "";
                return (
                    null != e.modeOptions.shortcut &&
                        Array.isArray(e.modeOptions.shortcut) &&
                        (t = (0, l.dI)(e.modeOptions.shortcut)),
                    t
                );
            }),
        d5: function (e) {
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
        },
        j7: async (e, t, n) => {
            if (((0, a.sq)(e, t), (null == n || "" === n) && (0, a.IR)(t)))
                return ((e.authorization.scopes = new Set([d.LQ, d.kw])), Promise.resolve());
            if (null == n || "" === n)
                return Promise.reject(new c.A({ closeCode: u.YI$.INVALID_CLIENTID }, "No Client ID Specified"));
            let o = i.Ay.releaseChannel !== u.BIo.CANARY && !h.includes(n) && e.transport !== d.z4.POST_MESSAGE;
            return (await (0, a.e2)(n, o, e.abortController.signal), (0, a.uM)(e, n, t));
        },
        kS: p,
        l6: () =>
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
    },
);

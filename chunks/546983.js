var o = n(684013),
    r = n(861862),
    s = n(887287),
    i = n(222506),
    l = n(293432),
    c = n(253400),
    a = n(350535),
    d = n(636401),
    u = n(90924),
    h = n(673953),
    g = n(484697),
    p = n(613057),
    A = n(652215),
    E = n(392164);
let f = ["207646673902501888"];
function C(e) {
    return null != e && !!r.default.isOverlayOOPEnabledForPid(e) && s.A.isReady(e);
}
n.d(
    t,
    {},
    {
        Au: (e) =>
            (0, u.Ub)(e, (e) => {
                let t = "";
                return (
                    null != e.modeOptions.shortcut &&
                        Array.isArray(e.modeOptions.shortcut) &&
                        (t = (0, a.dI)(e.modeOptions.shortcut)),
                    t
                );
            }),
        Yc: function () {
            return !i.A.isInputLocked(s.A.getTargetPID());
        },
        d5: function (e) {
            return null == e
                ? { lock: A.FXj, context: A.BRT.APP }
                : C(e)
                  ? (o.A.setInputLocked(!1, e),
                    {
                        lock() {
                            o.A.setInputLocked(!0, e);
                        },
                        context: A.BRT.POPOUT,
                    })
                  : (c.Ay.focus(null, !0),
                    {
                        lock() {
                            c.Ay.setForegroundProcess(e);
                        },
                        context: A.BRT.APP,
                    });
        },
        j7: async (e, t, n) => {
            if (((0, u.sq)(e, t), (null == n || "" === n) && (0, u.IR)(t)))
                return ((e.authorization.scopes = new Set([p.LQ, p.kw])), Promise.resolve());
            if (null == n || "" === n)
                return Promise.reject(new d.A({ closeCode: A.YI$.INVALID_CLIENTID }, "No Client ID Specified"));
            let o = c.Ay.releaseChannel !== A.BIo.CANARY && !f.includes(n) && e.transport !== p.z4.POST_MESSAGE;
            return (await (0, u.e2)(n, o, e.abortController.signal), (0, u.uM)(e, n, t));
        },
        kS: C,
        l6: () =>
            (0, u.BB)((e) => {
                let t = [];
                return (
                    null != e.modeOptions.shortcut &&
                        Array.isArray(e.modeOptions.shortcut) &&
                        (t = e.modeOptions.shortcut.map((e) => ({
                            type: e[0],
                            code: e[1],
                            name: (0, a.Qd)(e) ?? "unknown",
                        }))),
                    t
                );
            }),
        yf: function (e) {
            let t = (0, g.fl)(e),
                n = l.A.getWindow(E.f);
            return null != t && null != n && (0, h.JH)(t) === n;
        },
    },
);

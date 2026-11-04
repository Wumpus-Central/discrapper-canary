var i = n(986322),
    l = n(887287);
let r = [i.Ay, l.A];
n.d(
    t,
    {},
    {
        V: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Ay,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
                n = t.getTargetPID(),
                r = n > 0 ? e.getGameOrTransformedSubgameForPID(n) : null;
            if (null != r) return r;
            let s = e.getVisibleGame();
            return null != s ? e.getGameOrTransformedSubgameForPID(s.pid) : null;
        },
        g: r,
    },
);

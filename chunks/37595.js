var i = n(644727),
    r = n(887287);
let l = [i.Ay, r.A];
n.d(
    t,
    {},
    {
        V: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Ay,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
                n = t.getTargetPID(),
                l = n > 0 ? e.getGameOrTransformedSubgameForPID(n) : null;
            if (null != l) return l;
            let s = e.getVisibleGame();
            return null != s ? e.getGameOrTransformedSubgameForPID(s.pid) : null;
        },
        g: l,
    },
);

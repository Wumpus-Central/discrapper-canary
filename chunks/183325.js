"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(205693),
    s = n(451988),
    a = n(684339),
    o = n(808180),
    l = n(927813),
    u = n(37965);
let c = 20 * l.A.Millis.SECOND;
function d(e) {
    let { streamId: t, userId: n, videoSpinnerContext: l, streamKey: d, loading: _, paused: f = !1 } = e,
        p = r.useRef(new s.Ep()),
        h = l === a.u.SELF_STREAM || l === a.u.REMOTE_STREAM ? i.x.STREAM : i.x.DEFAULT;
    return (
        r.useEffect(() => {
            if (!_ || f || !o.X.isIncomingVideoEnabled()) return;
            let e = p.current;
            return (
                e.start(c, () => {
                    (0, u.Z)(t, n, h, d);
                }),
                () => {
                    e.stop();
                }
            );
        }, [f, t, _, h, d, n]),
        {
            onReady: r.useCallback(() => {
                p.current.stop(), (0, u.W)(h, n);
            }, [n, h]),
        }
    );
}

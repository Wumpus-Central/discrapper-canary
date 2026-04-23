n.d(t, { A: () => u });
var i = n(64700),
    l = n(205693),
    a = n(451988),
    r = n(684339),
    s = n(808180),
    o = n(927813),
    d = n(37965);
let c = 20 * o.A.Millis.SECOND;
function u(e) {
    let { streamId: t, userId: n, videoSpinnerContext: o, streamKey: u, loading: _, paused: f = !1 } = e,
        m = i.useRef(new a.Ep()),
        p = o === r.u.SELF_STREAM || o === r.u.REMOTE_STREAM ? l.x.STREAM : l.x.DEFAULT;
    return (
        i.useEffect(() => {
            if (!_ || f || !s.X.isIncomingVideoEnabled()) return;
            let e = m.current;
            return (
                e.start(c, () => {
                    (0, d.Z)(t, n, p, u);
                }),
                () => {
                    e.stop();
                }
            );
        }, [f, t, _, p, u, n]),
        {
            onReady: i.useCallback(() => {
                m.current.stop(), (0, d.W)(p, n);
            }, [n, p]),
        }
    );
}

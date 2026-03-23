n.d(t, { A: () => u });
var i = n(64700),
    l = n(205693),
    s = n(451988),
    a = n(684339),
    r = n(808180),
    o = n(927813),
    c = n(37965);
let d = 20 * o.A.Millis.SECOND;
function u(e) {
    let { streamId: t, userId: n, videoSpinnerContext: o, streamKey: u, loading: h, paused: m = !1 } = e,
        A = i.useRef(new s.Ep()),
        g = o === a.u.SELF_STREAM || o === a.u.REMOTE_STREAM ? l.x.STREAM : l.x.DEFAULT;
    return (
        i.useEffect(() => {
            if (!h || m || !r.X.isIncomingVideoEnabled()) return;
            let e = A.current;
            return (
                e.start(d, () => {
                    (0, c.Z)(t, n, g, u);
                }),
                () => {
                    e.stop();
                }
            );
        }, [m, t, h, g, u, n]),
        {
            onReady: i.useCallback(() => {
                A.current.stop(), (0, c.W)(g, n);
            }, [n, g]),
        }
    );
}

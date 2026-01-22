n.d(t, { A: () => d });
var l = n(64700),
    r = n(205693),
    i = n(451988),
    a = n(684339),
    s = n(808180),
    o = n(927813),
    c = n(37965);
let u = 20 * o.A.Millis.SECOND;
function d(e) {
    let { streamId: t, userId: n, videoSpinnerContext: o, streamKey: d, loading: f, paused: p = !1 } = e,
        b = l.useRef(new i.Ep()),
        g = o === a.u.SELF_STREAM || o === a.u.REMOTE_STREAM ? r.x.STREAM : r.x.DEFAULT;
    return (
        l.useEffect(() => {
            if (!f || p || !s.X.isIncomingVideoEnabled()) return;
            let e = b.current;
            return (
                e.start(u, () => {
                    (0, c.Z)(t, n, g, d);
                }),
                () => {
                    e.stop();
                }
            );
        }, [p, t, f, g, d, n]),
        {
            onReady: l.useCallback(() => {
                b.current.stop(), (0, c.W)(g, n);
            }, [n, g]),
        }
    );
}

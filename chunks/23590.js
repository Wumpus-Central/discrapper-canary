n.d(t, { A: () => a });
var r = n(64700);
let l = new (n(941426).Vy)("useMuxTracking");
function a(e) {
    let { videoRef: t, hlsRef: a, contentMetadata: i, isHls: u, debug: s } = e,
        o = r.useRef(null),
        [c, d] = r.useState(() => null == i);
    return (
        r.useEffect(() => {
            if (null == t.current || null == i) return void d(!0);
            if (u && null == a.current) return void d(!1);
            d(!1);
            let e = !1;
            return (
                Promise.all([n.e("92868"), n.e("63408")])
                    .then(n.bind(n, 531443))
                    .then((n) => {
                        let { SimpleMuxWrapper: r } = n;
                        e ||
                            null == t.current ||
                            ((o.current = new r({
                                debug: s ?? !1,
                                videoElement: t.current,
                                hlsInstance: u ? (a.current ?? void 0) : void 0,
                                feature: i.contentType,
                                contentMetadata: i,
                            })),
                            o.current.initialize(),
                            d(!0));
                    })
                    .catch((t) => {
                        e || (l.warn("Failed to load Mux SDK; continuing without QoE tracking", t), d(!0));
                    }),
                () => {
                    (e = !0), null != o.current && (o.current.endSession(), o.current.destroy(), (o.current = null));
                }
            );
        }, [u, a, t, i, s]),
        { isReady: c }
    );
}

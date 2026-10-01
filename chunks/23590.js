n.d(t, { A: () => a });
var r = n(582128);
let l = new (n(941426).Vy)("useMuxTracking");
function a(e) {
    let { videoRef: t, hls: a, contentMetadata: i, isHls: u, debug: o } = e,
        s = r.useRef(null),
        [c, d] = r.useState(() => null == i);
    return (
        r.useEffect(() => {
            if (null == t.current || null == i) return void d(!0);
            if (u && null == a) return void d(!1);
            d(!1);
            let e = !1;
            return (
                Promise.all([n.e("392868"), n.e("263408")])
                    .then(n.bind(n, 531443))
                    .then((n) => {
                        let { SimpleMuxWrapper: r } = n;
                        e ||
                            null == t.current ||
                            ((s.current = new r({
                                debug: o ?? !1,
                                videoElement: t.current,
                                hlsInstance: u ? (a ?? void 0) : void 0,
                                feature: i.contentType,
                                contentMetadata: i,
                            })),
                            s.current.initialize(),
                            d(!0));
                    })
                    .catch((t) => {
                        e || (l.warn("Failed to load Mux SDK; continuing without QoE tracking", t), d(!0));
                    }),
                () => {
                    ((e = !0), null != s.current && (s.current.endSession(), s.current.destroy(), (s.current = null)));
                }
            );
        }, [u, a, t, i, o]),
        { isReady: c }
    );
}

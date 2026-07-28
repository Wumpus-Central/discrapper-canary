"use strict";
n.d(t, { A: () => a });
var i = n(582128);
let r = new (n(118356).Vy)("useMuxTracking");
function a(e) {
    let { videoRef: t, hls: a, contentMetadata: s, isHls: l, debug: o } = e,
        d = i.useRef(null),
        [c, u] = i.useState(() => null == s);
    return (
        i.useEffect(() => {
            if (null == t.current || null == s) return void u(!0);
            if (l && null == a) return void u(!1);
            u(!1);
            let e = !1;
            return (
                Promise.all([n.e("92868"), n.e("63408")])
                    .then(n.bind(n, 531443))
                    .then((n) => {
                        let { SimpleMuxWrapper: i } = n;
                        e ||
                            null == t.current ||
                            ((d.current = new i({
                                debug: o ?? !1,
                                videoElement: t.current,
                                hlsInstance: l ? (a ?? void 0) : void 0,
                                feature: s.contentType,
                                contentMetadata: s,
                            })),
                            d.current.initialize(),
                            u(!0));
                    })
                    .catch((t) => {
                        e || (r.warn("Failed to load Mux SDK; continuing without QoE tracking", t), u(!0));
                    }),
                () => {
                    (e = !0), null != d.current && (d.current.endSession(), d.current.destroy(), (d.current = null));
                }
            );
        }, [l, a, t, s, o]),
        { isReady: c }
    );
}

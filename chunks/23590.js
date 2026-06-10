"use strict";
n.d(t, { A: () => s });
var i = n(64700);
let r = new (n(941426).Vy)("useMuxTracking");
function s(e) {
    let { videoRef: t, hlsRef: s, contentMetadata: a, isHls: o, debug: l } = e,
        u = i.useRef(null),
        [c, d] = i.useState(() => null == a);
    return (
        i.useEffect(() => {
            if (null == t.current || null == a) return void d(!0);
            if (o && null == s.current) return void d(!1);
            d(!1);
            let e = !1;
            return (
                Promise.all([n.e("92868"), n.e("63408")])
                    .then(n.bind(n, 531443))
                    .then((n) => {
                        let { SimpleMuxWrapper: i } = n;
                        e ||
                            null == t.current ||
                            ((u.current = new i({
                                debug: l ?? !1,
                                videoElement: t.current,
                                hlsInstance: o ? (s.current ?? void 0) : void 0,
                                feature: a.contentType,
                                contentMetadata: a,
                            })),
                            u.current.initialize(),
                            d(!0));
                    })
                    .catch((t) => {
                        e || (r.warn("Failed to load Mux SDK; continuing without QoE tracking", t), d(!0));
                    }),
                () => {
                    (e = !0), null != u.current && (u.current.endSession(), u.current.destroy(), (u.current = null));
                }
            );
        }, [o, s, t, a, l]),
        { isReady: c }
    );
}

r.d(t, { _: () => c }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var a = r(64700),
    n = r(626584),
    i = r(346915),
    o = r(100846);
let l = new n.A("useAnimatedImageCheck");
function c(e) {
    let t = "image/gif" === e.type,
        r = "image/webp" === e.type,
        [n, c] = a.useState(!1),
        [s, f] = a.useState(null),
        u = r && s !== e;
    a.useEffect(() => {
        let a = !1;
        return (
            t
                ? ((0, i.A)(), c(!1), f(e))
                : r
                  ? (async () => {
                        try {
                            let t = await e.arrayBuffer(),
                                r = new Uint8Array(t),
                                n = await (0, o.Sf)(r);
                            a || (c(n), n && (0, o.L_)(), f(e));
                        } catch (t) {
                            a || (l.error("Error checking WebP animation", t), c(!1), f(e));
                        }
                    })()
                  : (c(!1), f(e)),
            () => {
                a = !0;
            }
        );
    }, [e, t, r]);
    let A = n && s === e,
        h = t || A;
    return { isGIF: t, isWebP: r, isAnimatedWebPFile: A, isCheckingAnimation: u, isEditableAnimatedImage: h };
}

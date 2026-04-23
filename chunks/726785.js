r.d(t, { _: () => s }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var a = r(64700),
    n = r(626584),
    i = r(346915),
    o = r(100846);
let l = new n.A("useAnimatedImageCheck");
function s(e) {
    let t = "image/gif" === e.type,
        r = "image/webp" === e.type,
        [n, s] = a.useState(!1),
        [h, c] = a.useState(null),
        f = r && h !== e;
    a.useEffect(() => {
        let a = !1;
        return (
            t
                ? ((0, i.A)(), s(!1), c(e))
                : r
                  ? (async () => {
                        try {
                            let t = await e.arrayBuffer(),
                                r = new Uint8Array(t),
                                n = await (0, o.Sf)(r);
                            a || (s(n), n && (0, o.L_)(), c(e));
                        } catch (t) {
                            a || (l.error("Error checking WebP animation", t), s(!1), c(e));
                        }
                    })()
                  : (s(!1), c(e)),
            () => {
                a = !0;
            }
        );
    }, [e, t, r]);
    let u = n && h === e,
        A = t || u;
    return { isGIF: t, isWebP: r, isAnimatedWebPFile: u, isCheckingAnimation: f, isEditableAnimatedImage: A };
}

n.d(t, { B: () => a });
var r = n(192379),
    i = n(396821),
    o = n(4242);
function a(e, t) {
    let { getImgCache: n, setImgCache: a } = (0, i.W_)();
    (0, r.useEffect)(() => {
        null != e &&
            null == n(e) &&
            (async () => {
                let t = await fetch(e),
                    n = await t.arrayBuffer();
                a(e, e, await (0, o.xh)(n));
            })();
    }, [e, n, a]);
    let s = n(e);
    if (null == s) return null;
    let { animatedUrl: l, staticUrl: c } = s;
    return t ? l : c;
}

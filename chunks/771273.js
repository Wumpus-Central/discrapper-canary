n.d(t, {
    Ay: () => h,
    B4: () => f,
    GD: () => p,
});
var r = n(627968),
    l = n(64700),
    a = n(299619),
    i = n(397927),
    s = n(475743),
    o = n(998304),
    c = n(854987),
    u = n(109138),
    d = n(207289),
    m = n(934658);
class f extends EventTarget {}
let p = l.createContext(new f());

function h(e) {
    var t;
    let { slide: n } = e,
        f = l.useRef(null),
        h = l.useRef(null),
        b = l.useRef(0),
        g = l.useRef(Date.now()),
        x = l.useContext(p),
        y = l.useContext(c.P),
        v = (0, i.rdh)(y.gradient[0]).hex(),
        j = (0, i.rdh)(y.gradient[1]).hex(),
        C = null != (t = (0, s.A)(y)) ? t : y,
        _ = (0, i.rdh)(C.gradient[0]).hex(),
        A = (0, i.rdh)(C.gradient[1]).hex();
    return (
        l.useEffect(() => {
            let e = () => {
                let t = f.current,
                    n = h.current,
                    r = null == t ? void 0 : t.getContext("2d");
                if (null != t && null != n && null != r) {
                    if (n.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
                        (t.width = window.innerWidth),
                            (t.height = window.innerHeight),
                            (0, u.A)(n, t, r),
                            x.dispatchEvent(
                                new CustomEvent("frame", {
                                    detail: {
                                        context: r,
                                        canvas: t,
                                    },
                                }),
                            ),
                            r.save();
                        let e = r.createLinearGradient(0, 0, t.width, t.height),
                            l = Math.min((Date.now() - g.current) / 500, 1),
                            a = l >= 1 ? v : (0, o.De)(_, v, l),
                            i = l >= 1 ? j : (0, o.De)(A, j, l);
                        e.addColorStop(0, a),
                            e.addColorStop(1, i),
                            (r.fillStyle = e),
                            (r.globalCompositeOperation = "multiply"),
                            r.fillRect(0, 0, t.width, t.height),
                            r.restore(),
                            x.dispatchEvent(
                                new CustomEvent("frameEnd", {
                                    detail: {
                                        context: r,
                                        canvas: t,
                                    },
                                }),
                            );
                    }
                    b.current = requestAnimationFrame(e);
                }
            };
            return e(), () => cancelAnimationFrame(b.current);
        }, [j, v, x, A, _]),
        l.useEffect(() => {
            g.current = Date.now();
        }, [n]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("canvas", {
                    className: d.J,
                    ref: f,
                }),
                (0, r.jsx)(a.A, {
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    className: d.R,
                    ref: h,
                    "aria-hidden": !0,
                    children: (0, r.jsx)("source", {
                        src: m.A,
                        type: "video/webm",
                    }),
                }),
            ],
        })
    );
}

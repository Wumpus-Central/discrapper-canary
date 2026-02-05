n.d(t, { default: () => C });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    c = n.n(i),
    o = n(158954),
    s = n(397927),
    p = n(954571),
    d = n(203982),
    h = n(231003),
    l = n(929488),
    u = n(652215),
    f = n(985018),
    y = n(996629),
    v = n(894101);
let m = new Set([s.ip4.ENTERING, s.ip4.ENTERED]);
function C(e) {
    let {
            onClose: t,
            onCaptchaVerify: n,
            onReject: i,
            transitionState: C,
            headerText: A,
            bodyText: E,
            rqtoken: b,
            serveInvisible: R,
            ..._
        } = e,
        g = (0, h.A)({ onReject: i });
    if (
        (r.useEffect(() => {
            d._.subscribe(u.jej.LAYER_POP_ESCAPE_KEY, t);
        }, [t]),
        r.useEffect(() => {
            p.default.track(u.HAw.OPEN_MODAL, { type: "Captcha Modal" });
        }, []),
        null == C || !m.has(C))
    )
        return null;
    let w = (0, a.jsxs)("div", {
        className: c()(y.GC, y.P),
        children: [
            R && (0, a.jsx)(s.y$y, { type: s.y$y.Type.SPINNING_CIRCLE }),
            (0, a.jsx)(l.A, {
                size: R ? "invisible" : void 0,
                onVerify: (e) => {
                    g(), n(e, b), t();
                },
                onClose: R ? t : void 0,
                ..._,
            }),
        ],
    });
    return (0, a.jsx)(o.ExpressiveModal, {
        transitionState: C,
        onClose: t,
        size: "sm",
        gradientColor: "blue",
        graphic: { type: "image", src: v },
        title: A ?? f.intl.string(f.t.FpoiHe),
        subtitle: E ?? f.intl.string(f.t["/CidxO"]),
        children: w,
    });
}

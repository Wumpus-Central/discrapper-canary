n.d(t, { default: () => E });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    c = n.n(i),
    o = n(772707),
    s = n(231723),
    d = n(289873),
    l = n(954571),
    p = n(203982),
    h = n(231003),
    u = n(929488),
    f = n(652215),
    m = n(985018),
    y = n(846762),
    v = n(894101);
let C = new Set([s.ip.ENTERING, s.ip.ENTERED]);
function E(e) {
    let {
            onClose: t,
            onCaptchaVerify: n,
            onReject: i,
            transitionState: s,
            headerText: E,
            bodyText: b,
            rqtoken: A,
            serveInvisible: g,
            ...w
        } = e,
        R = (0, h.A)({ onReject: i });
    if (
        (a.useEffect(() => {
            p._.subscribe(f.jej.LAYER_POP_ESCAPE_KEY, t);
        }, [t]),
        a.useEffect(() => {
            l.default.track(f.HAw.OPEN_MODAL, { type: "Captcha Modal" });
        }, []),
        null == s || !C.has(s))
    )
        return null;
    let _ = (0, r.jsxs)("div", {
        className: c()(y.GC, y.P),
        children: [
            g && (0, r.jsx)(d.y, { type: d.y.Type.SPINNING_CIRCLE }),
            (0, r.jsx)(u.A, {
                size: g ? "invisible" : void 0,
                onVerify: (e) => {
                    R(), n(e, A), t();
                },
                onClose: g ? t : void 0,
                ...w,
            }),
        ],
    });
    return (0, r.jsx)(o.k, {
        transitionState: s,
        onClose: t,
        size: "sm",
        gradientColor: "blue",
        graphic: { type: "image", src: v },
        title: E ?? m.intl.string(m.t.FpoiHe),
        subtitle: b ?? m.intl.string(m.t["/CidxO"]),
        children: _,
    });
}

n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    l = n(338854),
    a = n(807098),
    s = n(49999),
    o = n(375708);
function c(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: c, coachmarkConfig: u, children: d } = e,
        m = (0, a.T)(u?.asset),
        f = r.useRef(null),
        g = r.useRef(null),
        [p, h] = r.useState(0);
    r.useEffect(() => {
        function e() {
            let e = f.current,
                t = g.current;
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect(),
                i = t.getBoundingClientRect();
            h(n.left + n.width / 2 - (i.left + i.width / 2));
        }
        let t = new ResizeObserver(e),
            n = f.current,
            i = g.current;
        return null != n && t.observe(n), null != i && (t.observe(i), e()), () => t.disconnect();
    }, []);
    let T = {
        text: o.intl.string(o.t.RzWDqY),
        onClick: () => {
            n(), t(), c(s.i.TAKE_ACTION);
        },
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: f, children: d }),
            (0, i.jsx)(l.H, {
                targetElementRef: f,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: u?.header ?? "",
                body: u?.body ?? "",
                assetUrl: m ?? "",
                action: T,
                caretConfig: { align: "custom", customOffset: p },
                onRequestClose: function () {
                    t(), c(s.i.USER_DISMISS);
                },
                popoverRef: g,
            }),
        ],
    });
}

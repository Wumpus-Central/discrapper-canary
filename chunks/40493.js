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
        g = r.useRef(null),
        f = r.useRef(null),
        [p, h] = r.useState(0);
    r.useEffect(() => {
        let e = () => {
                let e = g.current,
                    t = f.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    i = t.getBoundingClientRect();
                h(n.left + n.width / 2 - (i.left + i.width / 2));
            },
            t = new ResizeObserver(e),
            n = g.current,
            i = f.current;
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
            (0, i.jsx)("div", { ref: g, children: d }),
            (0, i.jsx)(l.H, {
                targetElementRef: g,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: u?.header ?? "",
                body: u?.body ?? "",
                assetUrl: m ?? "",
                action: T,
                caretConfig: { align: "custom", customOffset: p },
                onRequestClose: () => {
                    t(), c(s.i.USER_DISMISS);
                },
                popoverRef: f,
            }),
        ],
    });
}

n.d(t, { A: () => c });
var l = n(627968),
    i = n(64700),
    a = n(338854),
    r = n(807098),
    o = n(49999),
    s = n(375708);
function c(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: c, coachmarkConfig: u, children: d } = e,
        C = (0, r.T)(u?.asset),
        A = i.useRef(null),
        g = i.useRef(null),
        [f, N] = i.useState(0);
    i.useEffect(() => {
        let e = () => {
                let e = A.current,
                    t = g.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    l = t.getBoundingClientRect();
                N(n.left + n.width / 2 - (l.left + l.width / 2));
            },
            t = new ResizeObserver(e),
            n = A.current,
            l = g.current;
        return null != n && t.observe(n), null != l && (t.observe(l), e()), () => t.disconnect();
    }, []);
    let m = {
        text: s.intl.string(s.t.RzWDqY),
        onClick: () => {
            n(), t(), c(o.i.TAKE_ACTION);
        },
    };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: A, children: d }),
            (0, l.jsx)(a.H, {
                targetElementRef: A,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: u?.header ?? "",
                body: u?.body ?? "",
                assetUrl: C ?? "",
                action: m,
                caretConfig: { align: "custom", customOffset: f },
                onRequestClose: () => {
                    t(), c(o.i.USER_DISMISS);
                },
                popoverRef: g,
            }),
        ],
    });
}

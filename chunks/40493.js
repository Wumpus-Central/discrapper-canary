"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(206248),
    r = n(807098),
    a = n(49999),
    o = n(985018);
function c(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: c, coachmarkConfig: u, children: d } = e,
        h = (0, r.T)(u?.asset),
        m = l.useRef(null),
        p = l.useRef(null),
        [f, g] = l.useState(0);
    l.useEffect(() => {
        let e = () => {
                let e = m.current,
                    t = p.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    i = t.getBoundingClientRect();
                g(n.left + n.width / 2 - (i.left + i.width / 2));
            },
            t = new ResizeObserver(e),
            n = m.current,
            i = p.current;
        return null != n && t.observe(n), null != i && (t.observe(i), e()), () => t.disconnect();
    }, []);
    let _ = {
        text: o.intl.string(o.t.RzWDqY),
        onClick: () => {
            n(), t(), c(a.i.TAKE_ACTION);
        },
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: m, children: d }),
            (0, i.jsx)(s.H, {
                targetElementRef: m,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: u?.header ?? "",
                body: u?.body ?? "",
                assetUrl: h ?? "",
                action: _,
                caretConfig: { align: "custom", customOffset: f },
                onRequestClose: () => {
                    t(), c(a.i.USER_DISMISS);
                },
                popoverRef: p,
            }),
        ],
    });
}

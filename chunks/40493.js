"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(206248),
    a = n(807098),
    o = n(49999),
    l = n(985018);
function u(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: u, coachmarkConfig: c, children: d } = e,
        _ = (0, a.T)(c?.asset),
        f = i.useRef(null),
        p = i.useRef(null),
        [h, E] = i.useState(0);
    i.useEffect(() => {
        let e = () => {
                let e = f.current,
                    t = p.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    r = t.getBoundingClientRect();
                E(n.left + n.width / 2 - (r.left + r.width / 2));
            },
            t = new ResizeObserver(e),
            n = f.current,
            r = p.current;
        return null != n && t.observe(n), null != r && (t.observe(r), e()), () => t.disconnect();
    }, []);
    let m = {
        text: l.intl.string(l.t.RzWDqY),
        onClick: () => {
            n(), t(), u(o.i.TAKE_ACTION);
        },
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { ref: f, children: d }),
            (0, r.jsx)(s.H, {
                targetElementRef: f,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: c?.header ?? "",
                body: c?.body ?? "",
                assetUrl: _ ?? "",
                action: m,
                caretConfig: { align: "custom", customOffset: h },
                onRequestClose: () => {
                    t(), u(o.i.USER_DISMISS);
                },
                popoverRef: p,
            }),
        ],
    });
}

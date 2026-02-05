"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(342494),
    s = n(807098),
    o = n(49999),
    l = n(985018);
function u(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: u, coachmarkConfig: c, children: d } = e,
        _ = (0, s.T)(c?.asset),
        f = i.useRef(null),
        p = i.useRef(null),
        [h, m] = i.useState(0);
    i.useEffect(() => {
        let e = () => {
                let e = f.current,
                    t = p.current;
                if (null == e || null == t) return;
                let n = e.getBoundingClientRect(),
                    r = t.getBoundingClientRect();
                m(n.left + n.width / 2 - (r.left + r.width / 2));
            },
            t = new ResizeObserver(e),
            n = f.current,
            r = p.current;
        return null != n && t.observe(n), null != r && (t.observe(r), e()), () => t.disconnect();
    }, []);
    let g = {
            text: l.intl.string(l.t.RzWDqY),
            onClick: () => {
                n(), t(), u(o.i.TAKE_ACTION);
            },
        },
        E = () => {
            t(), u(o.i.USER_DISMISS);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { ref: f, children: d }),
            (0, r.jsx)(a.HZ, {
                targetElementRef: f,
                shouldShow: !0,
                position: "top",
                align: "center",
                title: c?.header ?? "",
                body: c?.body ?? "",
                assetUrl: _ ?? "",
                action: g,
                caretConfig: { align: "custom", customOffset: h },
                onRequestClose: E,
                popoverRef: p,
            }),
        ],
    });
}

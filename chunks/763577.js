n.d(t, { Z: () => c });
var a = n(951288),
    i = n(647438),
    r = n(164617),
    l = n(793030),
    s = n(159691),
    o = n(481060);
function c() {
    let e = Object.keys(r).map((e) => (0, a.jsx)(d, { riveName: e }, e));
    return (0, a.jsx)(l.Kqy, {
        gap: 24,
        padding: 8,
        style: { boxSizing: "border-box" },
        children: e,
    });
}
function d(e) {
    let { riveName: t } = e,
        n = r[t].riveSrc,
        c = i.useRef(null),
        d = (0, o.o8M)(n);
    return (0, a.jsxs)(
        l.Kqy,
        {
            gap: 8,
            children: [
                (0, a.jsx)("label", { children: t }),
                (0, a.jsxs)(l.Kqy, {
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    children: [
                        (0, a.jsx)("input", {
                            type: "file",
                            accept: ".riv",
                            onChange: (e) => {
                                var t;
                                let a = null == (t = e.target.files) ? void 0 : t[0];
                                if (null == a) return;
                                let i = new FileReader();
                                (i.onload = (e) => {
                                    var t;
                                    let a = null == (t = e.target) ? void 0 : t.result;
                                    (0, o.JGI)(n, a);
                                }),
                                    i.readAsArrayBuffer(a);
                            },
                            ref: c,
                        }),
                        (0, a.jsx)(s.hU, {
                            "aria-label": "Clear override for ".concat(t),
                            onClick: () => {
                                null != c.current && (c.current.value = ""), (0, o.JGI)(n, null);
                            },
                            icon: o.XHJ,
                            variant: "critical-primary",
                            size: "sm",
                            disabled: null == d,
                        }),
                    ],
                }),
            ],
        },
        t,
    );
}

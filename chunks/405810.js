n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    s = n(821609),
    r = n(946274),
    a = n(577749);
function o(e) {
    let {
            onChange: t,
            onFileSizeError: n,
            multiple: o = !1,
            disabled: d = !1,
            maxFileSizeBytes: c,
            filters: u,
            ...m
        } = e,
        g = l.useRef(null);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)("div", {
                className: a.l,
                children: (0, i.jsx)(r.Ay, {
                    ref: g,
                    onChange: t,
                    onFileSizeError: n,
                    multiple: o,
                    maxFileSizeBytes: c,
                    filters: u,
                    disabled: d,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)(s.$, {
                ...m,
                disabled: d,
                onClick: () => {
                    g.current?.activateUploadDialogue();
                },
            }),
        ],
    });
}

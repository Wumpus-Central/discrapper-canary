i.d(s, { A: () => c });
var a = i(627968),
    n = i(64700),
    l = i(821609),
    o = i(946274),
    r = i(577749);
function c(e) {
    let {
            onChange: s,
            onFileSizeError: i,
            multiple: c = !1,
            disabled: t = !1,
            maxFileSizeBytes: d,
            filters: u,
            ...h
        } = e,
        m = n.useRef(null);
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)("div", {
                className: r.l,
                children: (0, a.jsx)(o.Ay, {
                    ref: m,
                    onChange: s,
                    onFileSizeError: i,
                    multiple: c,
                    maxFileSizeBytes: d,
                    filters: u,
                    disabled: t,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, a.jsx)(l.$, {
                ...h,
                disabled: t,
                onClick: function () {
                    m.current?.activateUploadDialogue();
                },
            }),
        ],
    });
}

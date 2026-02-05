n.d(t, { A: () => a });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(946274),
    o = n(872752);
function a(e) {
    let {
            onChange: t,
            onFileSizeError: n,
            multiple: a = !1,
            disabled: c = !1,
            maxFileSizeBytes: d,
            filters: u,
            ...h
        } = e,
        m = s.useRef(null);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)("div", {
                className: o.l,
                children: (0, i.jsx)(l.Ay, {
                    ref: m,
                    onChange: t,
                    onFileSizeError: n,
                    multiple: a,
                    maxFileSizeBytes: d,
                    filters: u,
                    disabled: c,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)(r.Button, {
                ...h,
                disabled: c,
                onClick: () => {
                    m.current?.activateUploadDialogue();
                },
            }),
        ],
    });
}

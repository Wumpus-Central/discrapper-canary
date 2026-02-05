"use strict";
n.d(t, { A: () => o });
var s = n(627968),
    i = n(64700),
    r = n(397927),
    l = n(946274),
    a = n(872752);
function o(e) {
    let {
            onChange: t,
            onFileSizeError: n,
            multiple: o = !1,
            disabled: d = !1,
            maxFileSizeBytes: h,
            filters: c,
            ...u
        } = e,
        g = i.useRef(null);
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)("div", {
                className: a.l,
                children: (0, s.jsx)(l.Ay, {
                    ref: g,
                    onChange: t,
                    onFileSizeError: n,
                    multiple: o,
                    maxFileSizeBytes: h,
                    filters: c,
                    disabled: d,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, s.jsx)(r.Button, {
                ...u,
                disabled: d,
                onClick: () => {
                    g.current?.activateUploadDialogue();
                },
            }),
        ],
    });
}

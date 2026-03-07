"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(946274),
    a = n(453610);
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
        g = s.useRef(null);
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
            (0, i.jsx)(l.Button, {
                ...m,
                disabled: d,
                onClick: () => {
                    g.current?.activateUploadDialogue();
                },
            }),
        ],
    });
}

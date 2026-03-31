"use strict";
s.d(t, { A: () => d });
var r = s(627968),
    i = s(64700),
    n = s(503698),
    a = s.n(n),
    l = s(990078),
    u = s(397927),
    c = s(854627),
    o = s(874793);
function d(e) {
    let { user: t, checked: s, onChange: n, disabled: d, tooltipConfig: E } = e,
        _ = i.useRef(null),
        { avatarSrc: R, eventHandlers: p } = (0, c.A)({ userId: t?.id, size: u._3J.SIZE_32 }),
        I = t.globalName ?? t.username;
    return (0, r.jsx)(l.m, {
        text: E?.isActive(t, d) ? E.text(t) : null,
        position: "top",
        anchorRef: _,
        asContainer: !0,
        children: (0, r.jsxs)(u.DUT, {
            className: a()(o.kL, { [o.vk]: !d }),
            onClick: () => {
                d || n(t, !s);
            },
            children: [
                (0, r.jsx)("div", {
                    className: o.dj,
                    children: (0, r.jsx)(u.euF, {
                        className: a()({ [o.SU]: d }),
                        src: R,
                        "aria-label": I,
                        size: u._3J.SIZE_32,
                        ...p,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: o.QV,
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: o.nT,
                            color: d ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: I,
                        }),
                        (0, r.jsx)(u.Text, {
                            className: o.nT,
                            color: d ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: t.username,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    ref: _,
                    className: o.kv,
                    children: (0, r.jsx)(u.Checkbox, { disabled: d, checked: s, label: "" }),
                }),
            ],
        }),
    });
}

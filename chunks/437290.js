"use strict";
s.d(t, { A: () => E });
var r = s(627968),
    i = s(64700),
    n = s(503698),
    a = s.n(n),
    l = s(990078),
    c = s(397927),
    u = s(854627),
    o = s(874793);
function E(e) {
    let { user: t, checked: s, onChange: n, disabled: E, tooltipConfig: d } = e,
        _ = i.useRef(null),
        { avatarSrc: R, eventHandlers: p } = (0, u.A)({ userId: t?.id, size: c._3J.SIZE_32 }),
        I = t.globalName ?? t.username;
    return (0, r.jsx)(l.m, {
        text: d?.isActive(t, E) ? d.text(t) : null,
        position: "top",
        anchorRef: _,
        asContainer: !0,
        children: (0, r.jsxs)(c.DUT, {
            className: a()(o.kL, { [o.vk]: !E }),
            onClick: () => {
                E || n(t, !s);
            },
            children: [
                (0, r.jsx)("div", {
                    className: o.dj,
                    children: (0, r.jsx)(c.euF, {
                        className: a()({ [o.SU]: E }),
                        src: R,
                        "aria-label": I,
                        size: c._3J.SIZE_32,
                        ...p,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: o.QV,
                    children: [
                        (0, r.jsx)(c.Text, {
                            className: o.nT,
                            color: E ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: I,
                        }),
                        (0, r.jsx)(c.Text, {
                            className: o.nT,
                            color: E ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: t.username,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    ref: _,
                    className: o.kv,
                    children: (0, r.jsx)(c.P7L, { checked: s, disabled: E }),
                }),
            ],
        }),
    });
}

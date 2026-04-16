s.d(t, { A: () => u });
var a = s(627968),
    r = s(64700),
    i = s(503698),
    n = s.n(i),
    c = s(990078),
    l = s(397927),
    _ = s(854627),
    d = s(3161);
function u(e) {
    let { user: t, checked: s, onChange: i, disabled: u, tooltipConfig: E } = e,
        m = r.useRef(null),
        { avatarSrc: o, eventHandlers: h } = (0, _.A)({ userId: t?.id, size: l._3J.SIZE_32 }),
        R = t.globalName ?? t.username;
    return (0, a.jsx)(c.m, {
        text: E?.isActive(t, u) ? E.text(t) : null,
        position: "top",
        anchorRef: m,
        asContainer: !0,
        children: (0, a.jsxs)(l.DUT, {
            className: n()(d.kL, { [d.vk]: !u }),
            onClick: () => {
                u || i(t, !s);
            },
            children: [
                (0, a.jsx)("div", {
                    className: d.dj,
                    children: (0, a.jsx)(l.euF, {
                        className: n()({ [d.SU]: u }),
                        src: o,
                        "aria-label": R,
                        size: l._3J.SIZE_32,
                        ...h,
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: d.QV,
                    children: [
                        (0, a.jsx)(l.Text, {
                            className: d.nT,
                            color: u ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: R,
                        }),
                        (0, a.jsx)(l.Text, {
                            className: d.nT,
                            color: u ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: t.username,
                        }),
                    ],
                }),
                (0, a.jsx)("div", {
                    ref: m,
                    className: d.kv,
                    children: (0, a.jsx)(l.P7L, { checked: s, disabled: u }),
                }),
            ],
        }),
    });
}

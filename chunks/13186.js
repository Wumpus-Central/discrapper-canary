n.d(t, {
    U: () => h,
    Z: () => f,
});
var r,
    i = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(990547),
    c = n(680018),
    u = n(481060),
    d = n(213609),
    p = n(452956),
    h = (((r = {}).TOP = "top"), (r.BOTTOM = "bottom"), r);
let f = l.forwardRef(function (e, t) {
    let { body: n, header: r, artClassName: l, buttonText: o, onClose: h, art: f, align: g } = e;
    return (
        (0, d.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.CHAT_WALLPAPER_DM_LIST_COACHMARK,
        }),
        (0, i.jsx)("div", {
            className: p.tooltip,
            ref: t,
            children: (0, i.jsxs)("div", {
                className: p.content,
                children: [
                    (0, i.jsx)("div", {
                        className: l,
                        children: f,
                    }),
                    (0, i.jsxs)("div", {
                        className: p.body,
                        children: [
                            (0, i.jsx)(u.X6q, {
                                className: p.header,
                                variant: "heading-md/bold",
                                color: "always-white",
                                children: r,
                            }),
                            null == n
                                ? null
                                : "string" == typeof n
                                  ? (0, i.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        color: "always-white",
                                        children: n,
                                    })
                                  : n,
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: p.buttonContainer,
                        children: (0, i.jsx)(c.z, {
                            variant: "primary",
                            text: o,
                            fullWidth: !0,
                            onClick: (e) => {
                                null == h || h(e);
                            },
                        }),
                    }),
                    (0, i.jsx)("div", { className: a()(p.pointer, { [p.pointerBottom]: "bottom" === g }) }),
                ],
            }),
        })
    );
});

n.d(t, { A: () => m });
var l = n(477900),
    r = n(582128),
    u = n(503698),
    a = n.n(u),
    o = n(17928),
    i = n(775602),
    s = n(291749),
    c = n(557637),
    d = n(963713),
    p = n(333949),
    f = n(53440);
function m() {
    let { imagePreview: e, videoPreview: t } = (0, d.o5)(),
        n = (0, o.bG)([i.Ay], () => i.Ay.useReducedMotion),
        [u, m] = r.useState(!1),
        x = r.useMemo(() => (null == t ? null : { url: t, mimetype: (0, s.vm)(t), isAnimated: !0 }), [t]),
        h = !n || u;
    return (0, l.jsxs)("div", {
        className: f.rf,
        onMouseEnter: () => {
            n && !u && m(!0);
        },
        onMouseLeave: () => {
            n && u && m(!1);
        },
        children: [
            null != e &&
                (0, l.jsx)(c._M, {
                    id: "QuestBarBounty_previewImage",
                    children: (t) => (0, l.jsx)("img", { ref: t, src: e, alt: "", className: f.$_ }),
                }),
            null != x &&
                (0, l.jsx)(c._M, {
                    id: "QuestBarBounty_previewVideo",
                    children: (t) =>
                        (0, l.jsx)(p.X, {
                            ref: t,
                            isHovered: u,
                            asset: x,
                            poster: e,
                            className: a()(f.$_, null != e && f.Ki, { [f.mv]: h || null == e }),
                        }),
                }),
        ],
    });
}

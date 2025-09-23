t.d(A, { s: () => U }), t(388685);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    a = t.n(l),
    i = t(28664),
    o = t(481060),
    s = t(205822),
    d = t(476326),
    u = t(377171),
    c = t(313201),
    g = t(374794),
    f = t(587123),
    p = t(863663),
    m = t(731994),
    q = t(629481),
    h = t(388032),
    v = t(45856);
let b = (0, c.hQ)();
function C(e) {
    var A;
    let { upload: t, progress: l = 0, onDeleteAttachment: s } = e,
        d = r.useCallback(() => {
            null == s || s(t.id);
        }, [s, t.id]),
        c = l >= 1,
        g = l < 0,
        f = c || g,
        m = null != (A = t.filename) ? A : t.id,
        q = (0, p.kg)(l);
    return (0, n.jsx)(i.u, {
        asContainer: !0,
        text: q,
        children: (0, n.jsxs)("div", {
            className: a()(v.attachedFileCard, {
                [v.attachedFileCardError]: g,
                [v.attachedFileCardUploading]: !f,
            }),
            children: [
                (0, n.jsx)(o.ZKT, {
                    size: "xs",
                    color: u.Z.INTERACTIVE_MUTED,
                }),
                (0, n.jsx)(o.LZC, {
                    size: 10,
                    horizontal: !0,
                }),
                (0, n.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: m,
                }),
                !f &&
                    (0, n.jsx)(o.$jN, {
                        className: v.attachedFileCardSpinner,
                        type: o.$jN.Type.SPINNING_CIRCLE,
                    }),
                f &&
                    null != s &&
                    (0, n.jsx)(o.P3F, {
                        onClick: d,
                        "aria-label": h.intl.formatToPlainString(h.t["1o5hyc"], { attachment: m }),
                        "aria-hidden": !1,
                        className: v.deleteButton,
                        children: (0, n.jsx)(o.Dio, {
                            size: "xxs",
                            color: "currentColor",
                            className: v.__invalid_deleteIcon,
                        }),
                    }),
            ],
        }),
    });
}
function U(e) {
    let { onFileAdded: A } = e,
        {
            uploads: t,
            canAttachFiles: l,
            canAttachArchives: a,
            addAttachment: i,
            deleteAttachment: u,
            fileUploadProgresses: c,
        } = (0, f.P)(),
        p = r.useRef(!1);
    function U(e) {
        try {
            for (let A of e)
                i({
                    platform: d.ow.WEB,
                    file: A,
                    origin: "unknown:guild_product_attachment",
                });
            p.current = !0;
        } catch (e) {}
    }
    return (
        r.useEffect(() => {
            p.current && (A(), (p.current = !1));
        }, [A]),
        (0, n.jsxs)("div", {
            className: v.container,
            children: [
                (0, n.jsx)(s.Z, {
                    className: v.uploadArea,
                    title: h.intl.string(h.t["5eTk2t"]),
                    description: h.intl.string(h.t.Ecxoxs),
                    icons: m.J6,
                    onDrop: U,
                }),
                (0, n.jsxs)(g.Z, {
                    className: v.addFileButtonLook,
                    innerClassName: v.addFileButton,
                    disabled: !l,
                    "aria-label": h.intl.string(h.t["23LeCA"]),
                    "aria-describedby": b,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && U(e.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(o.dZu, {
                            size: "xs",
                            color: "currentColor",
                            className: v.addFileButtonIcon,
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: h.intl.string(h.t["23LeCA"]),
                        }),
                    ],
                }),
                (0, n.jsx)(o.LZC, { size: 12 }),
                (0, n.jsx)(o.Text, {
                    id: b,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: a
                        ? h.intl.formatToPlainString(h.t.lvU6sr, { fileUploadLimit: q.TR })
                        : h.intl.formatToPlainString(h.t.DOXzIS, { fileUploadLimit: q.TR }),
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: v.separator }),
                            (0, n.jsx)("ul", {
                                className: v.attachedFilesContainer,
                                "aria-label": h.intl.string(h.t.YZ6cTU),
                                children: t.map((e) =>
                                    (0, n.jsx)(
                                        "li",
                                        {
                                            children: (0, n.jsx)(C, {
                                                upload: e,
                                                onDeleteAttachment: u,
                                                progress: c[e.id],
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
            ],
        })
    );
}

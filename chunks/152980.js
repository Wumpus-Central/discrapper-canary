t.d(e, { s: () => U }), t(388685);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    a = t.n(l),
    i = t(28664),
    o = t(481060),
    s = t(205822),
    d = t(476326),
    c = t(377171),
    u = t(313201),
    g = t(374794),
    f = t(587123),
    p = t(863663),
    m = t(731994),
    q = t(629481),
    h = t(388032),
    b = t(45856);
let C = (0, u.hQ)();
function v(A) {
    var e;
    let { upload: t, progress: l = 0, onDeleteAttachment: s } = A,
        d = r.useCallback(() => {
            null == s || s(t.id);
        }, [s, t.id]),
        u = l >= 1,
        g = l < 0,
        f = u || g,
        m = null != (e = t.filename) ? e : t.id,
        q = (0, p.kg)(l);
    return (0, n.jsx)(i.u, {
        asContainer: !0,
        text: q,
        children: (0, n.jsxs)("div", {
            className: a()(b.attachedFileCard, {
                [b.attachedFileCardError]: g,
                [b.attachedFileCardUploading]: !f,
            }),
            children: [
                (0, n.jsx)(o.ZKT, {
                    size: "xs",
                    color: c.Z.INTERACTIVE_MUTED,
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
                        className: b.attachedFileCardSpinner,
                        type: o.$jN.Type.SPINNING_CIRCLE,
                    }),
                f &&
                    null != s &&
                    (0, n.jsx)(o.P3F, {
                        onClick: d,
                        "aria-label": h.intl.formatToPlainString(h.t["1o5hyc"], { attachment: m }),
                        "aria-hidden": !1,
                        className: b.deleteButton,
                        children: (0, n.jsx)(o.Dio, {
                            size: "xxs",
                            color: "currentColor",
                            className: b.__invalid_deleteIcon,
                        }),
                    }),
            ],
        }),
    });
}
function U(A) {
    let { onFileAdded: e } = A,
        {
            uploads: t,
            canAttachFiles: l,
            canAttachArchives: a,
            addAttachment: i,
            deleteAttachment: c,
            fileUploadProgresses: u,
        } = (0, f.P)(),
        p = r.useRef(!1);
    function U(A) {
        try {
            for (let e of A)
                i({
                    platform: d.ow.WEB,
                    file: e,
                    origin: "unknown:guild_product_attachment",
                });
            p.current = !0;
        } catch (A) {}
    }
    return (
        r.useEffect(() => {
            p.current && (e(), (p.current = !1));
        }, [e]),
        (0, n.jsxs)("div", {
            className: b.container,
            children: [
                (0, n.jsx)(s.Z, {
                    className: b.uploadArea,
                    title: h.intl.string(h.t["5eTk2t"]),
                    description: h.intl.string(h.t.Ecxoxs),
                    icons: m.J6,
                    onDrop: U,
                }),
                (0, n.jsxs)(g.Z, {
                    className: b.addFileButtonLook,
                    innerClassName: b.addFileButton,
                    disabled: !l,
                    "aria-label": h.intl.string(h.t["23LeCA"]),
                    "aria-describedby": C,
                    multiple: !0,
                    onChange: function (A) {
                        null != A.currentTarget.files && U(A.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(o.dZu, {
                            size: "xs",
                            color: "currentColor",
                            className: b.addFileButtonIcon,
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
                    id: C,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: a
                        ? h.intl.formatToPlainString(h.t.lvU6sr, { fileUploadLimit: q.TR })
                        : h.intl.formatToPlainString(h.t.DOXzIS, { fileUploadLimit: q.TR }),
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: b.separator }),
                            (0, n.jsx)("ul", {
                                className: b.attachedFilesContainer,
                                "aria-label": h.intl.string(h.t.YZ6cTU),
                                children: t.map((A) =>
                                    (0, n.jsx)(
                                        "li",
                                        {
                                            children: (0, n.jsx)(v, {
                                                upload: A,
                                                onDeleteAttachment: c,
                                                progress: u[A.id],
                                            }),
                                        },
                                        A.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
            ],
        })
    );
}

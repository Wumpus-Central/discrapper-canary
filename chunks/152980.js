t.d(A, { s: () => U }), t(388685);
var n = t(951288),
    r = t(647438),
    a = t(120356),
    l = t.n(a),
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
    C = t(530521);
let b = (0, u.hQ)();
function v(e) {
    var A;
    let { upload: t, progress: a = 0, onDeleteAttachment: s } = e,
        d = r.useCallback(() => {
            null == s || s(t.id);
        }, [s, t.id]),
        u = a >= 1,
        g = a < 0,
        f = u || g,
        m = null != (A = t.filename) ? A : t.id,
        q = (0, p.kg)(a);
    return (0, n.jsx)(i.u, {
        asContainer: !0,
        text: q,
        children: (0, n.jsxs)("div", {
            className: l()(C.attachedFileCard, {
                [C.attachedFileCardError]: g,
                [C.attachedFileCardUploading]: !f,
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
                        className: C.attachedFileCardSpinner,
                        type: o.$jN.Type.SPINNING_CIRCLE,
                    }),
                f &&
                    null != s &&
                    (0, n.jsx)(o.P3F, {
                        onClick: d,
                        "aria-label": h.intl.formatToPlainString(h.t["1o5hyc"], { attachment: m }),
                        "aria-hidden": !1,
                        className: C.deleteButton,
                        children: (0, n.jsx)(o.Dio, {
                            size: "xxs",
                            color: "currentColor",
                            className: C.__invalid_deleteIcon,
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
            canAttachFiles: a,
            canAttachArchives: l,
            addAttachment: i,
            deleteAttachment: c,
            fileUploadProgresses: u,
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
            className: C.container,
            children: [
                (0, n.jsx)(s.Z, {
                    className: C.uploadArea,
                    title: h.intl.string(h.t["5eTk2t"]),
                    description: h.intl.string(h.t.Ecxoxs),
                    icons: m.J6,
                    onDrop: U,
                }),
                (0, n.jsxs)(g.Z, {
                    className: C.addFileButtonLook,
                    innerClassName: C.addFileButton,
                    disabled: !a,
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
                            className: C.addFileButtonIcon,
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
                    children: l
                        ? h.intl.formatToPlainString(h.t.lvU6sr, { fileUploadLimit: q.TR })
                        : h.intl.formatToPlainString(h.t.DOXzIS, { fileUploadLimit: q.TR }),
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: C.separator }),
                            (0, n.jsx)("ul", {
                                className: C.attachedFilesContainer,
                                "aria-label": h.intl.string(h.t.YZ6cTU),
                                children: t.map((e) =>
                                    (0, n.jsx)(
                                        "li",
                                        {
                                            children: (0, n.jsx)(v, {
                                                upload: e,
                                                onDeleteAttachment: c,
                                                progress: u[e.id],
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

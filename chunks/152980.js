A.d(t, { s: () => j }), A(388685);
var r = A(951288),
    n = A(647438),
    a = A(120356),
    l = A.n(a),
    i = A(28664),
    o = A(481060),
    s = A(205822),
    d = A(476326),
    c = A(377171),
    u = A(313201),
    g = A(374794),
    f = A(587123),
    p = A(863663),
    m = A(731994),
    h = A(629481),
    v = A(388032),
    q = A(530521);
let b = (0, u.hQ)();
function C(e) {
    var t;
    let { upload: A, progress: a = 0, onDeleteAttachment: s } = e,
        d = n.useCallback(() => {
            null == s || s(A.id);
        }, [s, A.id]),
        u = a >= 1,
        g = a < 0,
        f = u || g,
        m = null != (t = A.filename) ? t : A.id,
        h = (0, p.kg)(a);
    return (0, r.jsx)(i.u, {
        asContainer: !0,
        text: h,
        children: (0, r.jsxs)("div", {
            className: l()(q.attachedFileCard, {
                [q.attachedFileCardError]: g,
                [q.attachedFileCardUploading]: !f,
            }),
            children: [
                (0, r.jsx)(o.ZKT, {
                    size: "xs",
                    color: c.Z.INTERACTIVE_MUTED,
                }),
                (0, r.jsx)(o.LZC, {
                    size: 10,
                    horizontal: !0,
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: m,
                }),
                !f &&
                    (0, r.jsx)(o.$jN, {
                        className: q.attachedFileCardSpinner,
                        type: o.$jN.Type.SPINNING_CIRCLE,
                    }),
                f &&
                    null != s &&
                    (0, r.jsx)(o.P3F, {
                        onClick: d,
                        "aria-label": v.intl.formatToPlainString(v.t["1o5hyc"], { attachment: m }),
                        "aria-hidden": !1,
                        className: q.deleteButton,
                        children: (0, r.jsx)(o.Dio, {
                            size: "xxs",
                            color: "currentColor",
                            className: q.__invalid_deleteIcon,
                        }),
                    }),
            ],
        }),
    });
}
function j(e) {
    let { onFileAdded: t } = e,
        {
            uploads: A,
            canAttachFiles: a,
            canAttachArchives: l,
            addAttachment: i,
            deleteAttachment: c,
            fileUploadProgresses: u,
        } = (0, f.P)(),
        p = n.useRef(!1);
    function j(e) {
        try {
            for (let t of e)
                i({
                    platform: d.ow.WEB,
                    file: t,
                    origin: "unknown:guild_product_attachment",
                });
            p.current = !0;
        } catch (e) {}
    }
    return (
        n.useEffect(() => {
            p.current && (t(), (p.current = !1));
        }, [t]),
        (0, r.jsxs)("div", {
            className: q.container,
            children: [
                (0, r.jsx)(s.Z, {
                    className: q.uploadArea,
                    title: v.intl.string(v.t["5eTk2t"]),
                    description: v.intl.string(v.t.Ecxoxs),
                    icons: m.J6,
                    onDrop: j,
                }),
                (0, r.jsxs)(g.Z, {
                    className: q.addFileButtonLook,
                    innerClassName: q.addFileButton,
                    disabled: !a,
                    "aria-label": v.intl.string(v.t["23LeCA"]),
                    "aria-describedby": b,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && j(e.currentTarget.files);
                    },
                    children: [
                        (0, r.jsx)(o.dZu, {
                            size: "xs",
                            color: "currentColor",
                            className: q.addFileButtonIcon,
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: v.intl.string(v.t["23LeCA"]),
                        }),
                    ],
                }),
                (0, r.jsx)(o.LZC, { size: 12 }),
                (0, r.jsx)(o.Text, {
                    id: b,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: l
                        ? v.intl.formatToPlainString(v.t.lvU6sr, { fileUploadLimit: h.TR })
                        : v.intl.formatToPlainString(v.t.DOXzIS, { fileUploadLimit: h.TR }),
                }),
                A.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("div", { className: q.separator }),
                            (0, r.jsx)("ul", {
                                className: q.attachedFilesContainer,
                                "aria-label": v.intl.string(v.t.YZ6cTU),
                                children: A.map((e) =>
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(C, {
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

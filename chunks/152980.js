A.d(t, { s: () => U }), A(388685);
var n = A(951288),
    r = A(647438),
    a = A(120356),
    i = A.n(a),
    l = A(28664),
    o = A(481060),
    s = A(205822),
    d = A(476326),
    u = A(377171),
    c = A(313201),
    g = A(374794),
    f = A(587123),
    p = A(863663),
    m = A(731994),
    h = A(629481),
    v = A(388032),
    q = A(530521);
let b = (0, c.hQ)();
function C(e) {
    var t;
    let { upload: A, progress: a = 0, onDeleteAttachment: s } = e,
        d = r.useCallback(() => {
            null == s || s(A.id);
        }, [s, A.id]),
        c = a >= 1,
        g = a < 0,
        f = c || g,
        m = null != (t = A.filename) ? t : A.id,
        h = (0, p.kg)(a);
    return (0, n.jsx)(l.u, {
        asContainer: !0,
        text: h,
        children: (0, n.jsxs)("div", {
            className: i()(q.attachedFileCard, {
                [q.attachedFileCardError]: g,
                [q.attachedFileCardUploading]: !f,
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
                        className: q.attachedFileCardSpinner,
                        type: o.$jN.Type.SPINNING_CIRCLE,
                    }),
                f &&
                    null != s &&
                    (0, n.jsx)(o.P3F, {
                        onClick: d,
                        "aria-label": v.intl.formatToPlainString(v.t["1o5hyW"], { attachment: m }),
                        "aria-hidden": !1,
                        className: q.deleteButton,
                        children: (0, n.jsx)(o.Dio, {
                            size: "xxs",
                            color: "currentColor",
                            className: q.__invalid_deleteIcon,
                        }),
                    }),
            ],
        }),
    });
}
function U(e) {
    let { onFileAdded: t } = e,
        {
            uploads: A,
            canAttachFiles: a,
            canAttachArchives: i,
            addAttachment: l,
            deleteAttachment: u,
            fileUploadProgresses: c,
        } = (0, f.P)(),
        p = r.useRef(!1);
    function U(e) {
        try {
            for (let t of e)
                l({
                    platform: d.ow.WEB,
                    file: t,
                    origin: "unknown:guild_product_attachment",
                });
            p.current = !0;
        } catch (e) {}
    }
    return (
        r.useEffect(() => {
            p.current && (t(), (p.current = !1));
        }, [t]),
        (0, n.jsxs)("div", {
            className: q.container,
            children: [
                (0, n.jsx)(s.Z, {
                    className: q.uploadArea,
                    title: v.intl.string(v.t["5eTk2g"]),
                    description: v.intl.string(v.t.Ecxoxl),
                    icons: m.J6,
                    onDrop: U,
                }),
                (0, n.jsxs)(g.Z, {
                    className: q.addFileButtonLook,
                    innerClassName: q.addFileButton,
                    disabled: !a,
                    "aria-label": v.intl.string(v.t["23LeCD"]),
                    "aria-describedby": b,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && U(e.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(o.dZu, {
                            size: "xs",
                            color: "currentColor",
                            className: q.addFileButtonIcon,
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: v.intl.string(v.t["23LeCD"]),
                        }),
                    ],
                }),
                (0, n.jsx)(o.LZC, { size: 12 }),
                (0, n.jsx)(o.Text, {
                    id: b,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: i
                        ? v.intl.formatToPlainString(v.t.lvU6sr, { fileUploadLimit: h.TR })
                        : v.intl.formatToPlainString(v.t.DOXzIU, { fileUploadLimit: h.TR }),
                }),
                A.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: q.separator }),
                            (0, n.jsx)("ul", {
                                className: q.attachedFilesContainer,
                                "aria-label": v.intl.string(v.t.YZ6cTW),
                                children: A.map((e) =>
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

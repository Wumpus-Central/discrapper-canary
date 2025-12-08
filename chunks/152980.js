A.d(t, { s: () => U }), A(388685);
var n = A(54381),
    r = A(473749),
    a = A(120356),
    l = A.n(a),
    i = A(692547),
    o = A(28664),
    s = A(481060),
    d = A(205822),
    u = A(476326),
    c = A(313201),
    g = A(374794),
    f = A(587123),
    p = A(863663),
    m = A(731994),
    v = A(629481),
    h = A(388032),
    q = A(530521);
let b = (0, c.hQ)();
function C(e) {
    var t;
    let { upload: A, progress: a = 0, onDeleteAttachment: d } = e,
        u = r.useCallback(() => {
            null == d || d(A.id);
        }, [d, A.id]),
        c = a >= 1,
        g = a < 0,
        f = c || g,
        m = null != (t = A.filename) ? t : A.id,
        v = (0, p.kg)(a);
    return (0, n.jsx)(o.u, {
        asContainer: !0,
        text: v,
        children: (0, n.jsxs)("div", {
            className: l()(q.attachedFileCard, {
                [q.attachedFileCardError]: g,
                [q.attachedFileCardUploading]: !f,
            }),
            children: [
                (0, n.jsx)(s.ZKT, {
                    size: "xs",
                    color: i.Z.colors.INTERACTIVE_MUTED.css,
                }),
                (0, n.jsx)(s.LZC, {
                    size: 10,
                    horizontal: !0,
                }),
                (0, n.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: m,
                }),
                !f &&
                    (0, n.jsx)(s.$jN, {
                        className: q.attachedFileCardSpinner,
                        type: s.$jN.Type.SPINNING_CIRCLE,
                    }),
                f &&
                    null != d &&
                    (0, n.jsx)(s.P3F, {
                        onClick: u,
                        "aria-label": h.intl.formatToPlainString(h.t["1o5hyW"], { attachment: m }),
                        "aria-hidden": !1,
                        className: q.deleteButton,
                        children: (0, n.jsx)(s.Dio, {
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
            canAttachArchives: l,
            addAttachment: i,
            deleteAttachment: o,
            fileUploadProgresses: c,
        } = (0, f.P)(),
        p = r.useRef(!1);
    function U(e) {
        try {
            for (let t of e)
                i({
                    platform: u.ow.WEB,
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
                (0, n.jsx)(d.Z, {
                    className: q.uploadArea,
                    title: h.intl.string(h.t["5eTk2g"]),
                    description: h.intl.string(h.t.Ecxoxl),
                    icons: m.J6,
                    onDrop: U,
                }),
                (0, n.jsxs)(g.Z, {
                    className: q.addFileButtonLook,
                    innerClassName: q.addFileButton,
                    disabled: !a,
                    "aria-label": h.intl.string(h.t["23LeCD"]),
                    "aria-describedby": b,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && U(e.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(s.dZu, {
                            size: "xs",
                            color: "currentColor",
                            className: q.addFileButtonIcon,
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: h.intl.string(h.t["23LeCD"]),
                        }),
                    ],
                }),
                (0, n.jsx)(s.LZC, { size: 12 }),
                (0, n.jsx)(s.Text, {
                    id: b,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: l
                        ? h.intl.formatToPlainString(h.t.lvU6sr, { fileUploadLimit: v.TR })
                        : h.intl.formatToPlainString(h.t.DOXzIU, { fileUploadLimit: v.TR }),
                }),
                A.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: q.separator }),
                            (0, n.jsx)("ul", {
                                className: q.attachedFilesContainer,
                                "aria-label": h.intl.string(h.t.YZ6cTW),
                                children: A.map((e) =>
                                    (0, n.jsx)(
                                        "li",
                                        {
                                            children: (0, n.jsx)(C, {
                                                upload: e,
                                                onDeleteAttachment: o,
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

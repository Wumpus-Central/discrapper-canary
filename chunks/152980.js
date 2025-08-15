A.d(t, { s: () => x }), A(388685);
var n = A(951288),
    r = A(647438),
    a = A(120356),
    l = A.n(a),
    i = A(755721),
    o = A(481060),
    s = A(205822),
    c = A(476326),
    d = A(377171),
    u = A(313201),
    g = A(374794),
    f = A(587123),
    p = A(863663),
    h = A(731994),
    m = A(629481),
    v = A(388032),
    b = A(530521);
let C = (0, u.hQ)();
function q(e) {
    var t;
    let { upload: A, progress: a = 0, onDeleteAttachment: s } = e,
        c = r.useCallback(() => {
            null == s || s(A.id);
        }, [s, A.id]),
        u = a >= 1,
        g = a < 0,
        f = u || g,
        h = null != (t = A.filename) ? t : A.id,
        m = (0, p.kg)(a);
    return (0, n.jsx)(o.DY3, {
        text: m,
        children: (0, n.jsxs)("div", {
            className: l()(b.attachedFileCard, {
                [b.attachedFileCardError]: g,
                [b.attachedFileCardUploading]: !f,
            }),
            children: [
                (0, n.jsx)(o.ZKT, {
                    size: "xs",
                    color: d.Z.INTERACTIVE_MUTED,
                }),
                (0, n.jsx)(o.LZC, {
                    size: 10,
                    horizontal: !0,
                }),
                (0, n.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: h,
                }),
                !f &&
                    (0, n.jsx)(o.$jN, {
                        className: b.attachedFileCardSpinner,
                        type: o.$jN.Type.SPINNING_CIRCLE,
                    }),
                f &&
                    null != s &&
                    (0, n.jsx)(i.zx, {
                        "aria-label": v.intl.formatToPlainString(v.t["1o5hyc"], { attachment: h }),
                        className: b.deleteButton,
                        innerClassName: b.deleteButtonInner,
                        look: i.zx.Looks.BLANK,
                        size: i.zx.Sizes.NONE,
                        onClick: c,
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
function x(e) {
    let { onFileAdded: t } = e,
        {
            uploads: A,
            canAttachFiles: a,
            canAttachArchives: l,
            addAttachment: d,
            deleteAttachment: u,
            fileUploadProgresses: p,
        } = (0, f.P)(),
        x = r.useRef(!1);
    function j(e) {
        try {
            for (let t of e)
                d({
                    platform: c.ow.WEB,
                    file: t,
                    origin: "unknown:guild_product_attachment",
                });
            x.current = !0;
        } catch (e) {}
    }
    return (
        r.useEffect(() => {
            x.current && (t(), (x.current = !1));
        }, [t]),
        (0, n.jsxs)("div", {
            className: b.container,
            children: [
                (0, n.jsx)(s.Z, {
                    className: b.uploadArea,
                    title: v.intl.string(v.t["5eTk2t"]),
                    description: v.intl.string(v.t.Ecxoxs),
                    icons: h.J6,
                    onDrop: j,
                }),
                (0, n.jsxs)(g.Z, {
                    className: b.addFileButtonLook,
                    innerClassName: b.addFileButton,
                    color: i.zx.Colors.CUSTOM,
                    disabled: !a,
                    "aria-label": v.intl.string(v.t["23LeCA"]),
                    "aria-describedby": C,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && j(e.currentTarget.files);
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
                            children: v.intl.string(v.t["23LeCA"]),
                        }),
                    ],
                }),
                (0, n.jsx)(o.LZC, { size: 12 }),
                (0, n.jsx)(o.Text, {
                    id: C,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: l
                        ? v.intl.formatToPlainString(v.t.lvU6sr, { fileUploadLimit: m.TR })
                        : v.intl.formatToPlainString(v.t.DOXzIS, { fileUploadLimit: m.TR }),
                }),
                A.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: b.separator }),
                            (0, n.jsx)("ul", {
                                className: b.attachedFilesContainer,
                                "aria-label": v.intl.string(v.t.YZ6cTU),
                                children: A.map((e) =>
                                    (0, n.jsx)(
                                        "li",
                                        {
                                            children: (0, n.jsx)(q, {
                                                upload: e,
                                                onDeleteAttachment: u,
                                                progress: p[e.id],
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

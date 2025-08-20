A.d(t, { s: () => j }), A(388685);
var n = A(951288),
    r = A(647438),
    l = A(120356),
    a = A.n(l),
    o = A(755721),
    i = A(481060),
    s = A(205822),
    d = A(476326),
    c = A(377171),
    u = A(313201),
    f = A(374794),
    g = A(587123),
    p = A(863663),
    m = A(731994),
    h = A(629481),
    b = A(388032),
    q = A(530521);
let C = (0, u.hQ)();
function v(e) {
    var t;
    let { upload: A, progress: l = 0, onDeleteAttachment: s } = e,
        d = r.useCallback(() => {
            null == s || s(A.id);
        }, [s, A.id]),
        u = l >= 1,
        f = l < 0,
        g = u || f,
        m = null != (t = A.filename) ? t : A.id,
        h = (0, p.kg)(l);
    return (0, n.jsx)(i.DY3, {
        text: h,
        children: (0, n.jsxs)("div", {
            className: a()(q.attachedFileCard, {
                [q.attachedFileCardError]: f,
                [q.attachedFileCardUploading]: !g,
            }),
            children: [
                (0, n.jsx)(i.ZKT, {
                    size: "xs",
                    color: c.Z.INTERACTIVE_MUTED,
                }),
                (0, n.jsx)(i.LZC, {
                    size: 10,
                    horizontal: !0,
                }),
                (0, n.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    children: m,
                }),
                !g &&
                    (0, n.jsx)(i.$jN, {
                        className: q.attachedFileCardSpinner,
                        type: i.$jN.Type.SPINNING_CIRCLE,
                    }),
                g &&
                    null != s &&
                    (0, n.jsx)(o.zx, {
                        "aria-label": b.intl.formatToPlainString(b.t["1o5hyc"], { attachment: m }),
                        className: q.deleteButton,
                        innerClassName: q.deleteButtonInner,
                        look: o.zx.Looks.BLANK,
                        size: o.zx.Sizes.NONE,
                        onClick: d,
                        children: (0, n.jsx)(i.Dio, {
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
            canAttachFiles: l,
            canAttachArchives: a,
            addAttachment: c,
            deleteAttachment: u,
            fileUploadProgresses: p,
        } = (0, g.P)(),
        j = r.useRef(!1);
    function x(e) {
        try {
            for (let t of e)
                c({
                    platform: d.ow.WEB,
                    file: t,
                    origin: "unknown:guild_product_attachment",
                });
            j.current = !0;
        } catch (e) {}
    }
    return (
        r.useEffect(() => {
            j.current && (t(), (j.current = !1));
        }, [t]),
        (0, n.jsxs)("div", {
            className: q.container,
            children: [
                (0, n.jsx)(s.Z, {
                    className: q.uploadArea,
                    title: b.intl.string(b.t["5eTk2t"]),
                    description: b.intl.string(b.t.Ecxoxs),
                    icons: m.J6,
                    onDrop: x,
                }),
                (0, n.jsxs)(f.Z, {
                    className: q.addFileButtonLook,
                    innerClassName: q.addFileButton,
                    color: o.zx.Colors.CUSTOM,
                    disabled: !l,
                    "aria-label": b.intl.string(b.t["23LeCA"]),
                    "aria-describedby": C,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && x(e.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(i.dZu, {
                            size: "xs",
                            color: "currentColor",
                            className: q.addFileButtonIcon,
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: b.intl.string(b.t["23LeCA"]),
                        }),
                    ],
                }),
                (0, n.jsx)(i.LZC, { size: 12 }),
                (0, n.jsx)(i.Text, {
                    id: C,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: a
                        ? b.intl.formatToPlainString(b.t.lvU6sr, { fileUploadLimit: h.TR })
                        : b.intl.formatToPlainString(b.t.DOXzIS, { fileUploadLimit: h.TR }),
                }),
                A.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: q.separator }),
                            (0, n.jsx)("ul", {
                                className: q.attachedFilesContainer,
                                "aria-label": b.intl.string(b.t.YZ6cTU),
                                children: A.map((e) =>
                                    (0, n.jsx)(
                                        "li",
                                        {
                                            children: (0, n.jsx)(v, {
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

(A.d(t, { s: () => x }), A(388685));
var n = A(255367),
    r = A(73800),
    a = A(120356),
    l = A.n(a),
    i = A(755721),
    o = A(481060),
    s = A(205822),
    c = A(476326),
    d = A(377171),
    u = A(313201),
    f = A(374794),
    g = A(587123),
    p = A(863663),
    h = A(731994),
    m = A(629481),
    b = A(388032),
    v = A(48635);
let C = (0, u.hQ)();
function q(e) {
    var t;
    let { upload: A, progress: a = 0, onDeleteAttachment: s } = e,
        c = r.useCallback(() => {
            null == s || s(A.id);
        }, [s, A.id]),
        u = a >= 1,
        f = a < 0,
        g = u || f,
        h = null != (t = A.filename) ? t : A.id,
        m = (0, p.kg)(a);
    return (0, n.jsx)(o.DY3, {
        text: m,
        children: (0, n.jsxs)('div', {
            className: l()(v.attachedFileCard, {
                [v.attachedFileCardError]: f,
                [v.attachedFileCardUploading]: !g
            }),
            children: [
                (0, n.jsx)(o.ZKT, {
                    size: 'xs',
                    color: d.Z.INTERACTIVE_MUTED
                }),
                (0, n.jsx)(o.LZC, {
                    size: 10,
                    horizontal: !0
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: h
                }),
                !g &&
                    (0, n.jsx)(o.$jN, {
                        className: v.attachedFileCardSpinner,
                        type: o.$jN.Type.SPINNING_CIRCLE
                    }),
                g &&
                    null != s &&
                    (0, n.jsx)(i.zx, {
                        'aria-label': b.intl.formatToPlainString(b.t['1o5hyc'], { attachment: h }),
                        className: v.deleteButton,
                        innerClassName: v.deleteButtonInner,
                        look: i.zx.Looks.BLANK,
                        size: i.zx.Sizes.NONE,
                        onClick: c,
                        children: (0, n.jsx)(o.Dio, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: v.__invalid_deleteIcon
                        })
                    })
            ]
        })
    });
}
function x(e) {
    let { onFileAdded: t } = e,
        { uploads: A, canAttachFiles: a, canAttachArchives: l, addAttachment: d, deleteAttachment: u, fileUploadProgresses: p } = (0, g.P)(),
        x = r.useRef(!1);
    function j(e) {
        try {
            for (let t of e)
                d({
                    platform: c.ow.WEB,
                    file: t
                });
            x.current = !0;
        } catch (e) {}
    }
    return (
        r.useEffect(() => {
            x.current && (t(), (x.current = !1));
        }, [t]),
        (0, n.jsxs)('div', {
            className: v.container,
            children: [
                (0, n.jsx)(s.Z, {
                    className: v.uploadArea,
                    title: b.intl.string(b.t['5eTk2t']),
                    description: b.intl.string(b.t.Ecxoxs),
                    icons: h.J6,
                    onDrop: j
                }),
                (0, n.jsxs)(f.Z, {
                    className: v.addFileButtonLook,
                    innerClassName: v.addFileButton,
                    color: i.zx.Colors.CUSTOM,
                    disabled: !a,
                    'aria-label': b.intl.string(b.t['23LeCA']),
                    'aria-describedby': C,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && j(e.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(o.dZu, {
                            size: 'xs',
                            color: 'currentColor',
                            className: v.addFileButtonIcon,
                            'aria-hidden': !0
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: b.intl.string(b.t['23LeCA'])
                        })
                    ]
                }),
                (0, n.jsx)(o.LZC, { size: 12 }),
                (0, n.jsx)(o.Text, {
                    id: C,
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: l ? b.intl.formatToPlainString(b.t.lvU6sr, { fileUploadLimit: m.TR }) : b.intl.formatToPlainString(b.t.DOXzIS, { fileUploadLimit: m.TR })
                }),
                A.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('div', { className: v.separator }),
                            (0, n.jsx)('ul', {
                                className: v.attachedFilesContainer,
                                'aria-label': b.intl.string(b.t.YZ6cTU),
                                children: A.map((e) =>
                                    (0, n.jsx)(
                                        'li',
                                        {
                                            children: (0, n.jsx)(q, {
                                                upload: e,
                                                onDeleteAttachment: u,
                                                progress: p[e.id]
                                            })
                                        },
                                        e.id
                                    )
                                )
                            })
                        ]
                    })
            ]
        })
    );
}

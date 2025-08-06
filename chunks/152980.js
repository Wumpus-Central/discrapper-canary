(A.d(t, { s: () => x }), A(388685));
var n = A(255367),
    r = A(73800),
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
    C = A(388032),
    q = A(48635);
let b = (0, u.hQ)();
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
        children: (0, n.jsxs)('div', {
            className: a()(q.attachedFileCard, {
                [q.attachedFileCardError]: f,
                [q.attachedFileCardUploading]: !g
            }),
            children: [
                (0, n.jsx)(i.ZKT, {
                    size: 'xs',
                    color: c.Z.INTERACTIVE_MUTED
                }),
                (0, n.jsx)(i.LZC, {
                    size: 10,
                    horizontal: !0
                }),
                (0, n.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    children: m
                }),
                !g &&
                    (0, n.jsx)(i.$jN, {
                        className: q.attachedFileCardSpinner,
                        type: i.$jN.Type.SPINNING_CIRCLE
                    }),
                g &&
                    null != s &&
                    (0, n.jsx)(o.zx, {
                        'aria-label': C.intl.formatToPlainString(C.t['1o5hyc'], { attachment: m }),
                        className: q.deleteButton,
                        innerClassName: q.deleteButtonInner,
                        look: o.zx.Looks.BLANK,
                        size: o.zx.Sizes.NONE,
                        onClick: d,
                        children: (0, n.jsx)(i.Dio, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: q.__invalid_deleteIcon
                        })
                    })
            ]
        })
    });
}
function x(e) {
    let { onFileAdded: t } = e,
        { uploads: A, canAttachFiles: l, canAttachArchives: a, addAttachment: c, deleteAttachment: u, fileUploadProgresses: p } = (0, g.P)(),
        x = r.useRef(!1);
    function j(e) {
        try {
            for (let t of e)
                c({
                    platform: d.ow.WEB,
                    file: t,
                    origin: 'unknown:guild_product_attachment'
                });
            x.current = !0;
        } catch (e) {}
    }
    return (
        r.useEffect(() => {
            x.current && (t(), (x.current = !1));
        }, [t]),
        (0, n.jsxs)('div', {
            className: q.container,
            children: [
                (0, n.jsx)(s.Z, {
                    className: q.uploadArea,
                    title: C.intl.string(C.t['5eTk2t']),
                    description: C.intl.string(C.t.Ecxoxs),
                    icons: m.J6,
                    onDrop: j
                }),
                (0, n.jsxs)(f.Z, {
                    className: q.addFileButtonLook,
                    innerClassName: q.addFileButton,
                    color: o.zx.Colors.CUSTOM,
                    disabled: !l,
                    'aria-label': C.intl.string(C.t['23LeCA']),
                    'aria-describedby': b,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && j(e.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(i.dZu, {
                            size: 'xs',
                            color: 'currentColor',
                            className: q.addFileButtonIcon,
                            'aria-hidden': !0
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: C.intl.string(C.t['23LeCA'])
                        })
                    ]
                }),
                (0, n.jsx)(i.LZC, { size: 12 }),
                (0, n.jsx)(i.Text, {
                    id: b,
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: a ? C.intl.formatToPlainString(C.t.lvU6sr, { fileUploadLimit: h.TR }) : C.intl.formatToPlainString(C.t.DOXzIS, { fileUploadLimit: h.TR })
                }),
                A.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('div', { className: q.separator }),
                            (0, n.jsx)('ul', {
                                className: q.attachedFilesContainer,
                                'aria-label': C.intl.string(C.t.YZ6cTU),
                                children: A.map((e) =>
                                    (0, n.jsx)(
                                        'li',
                                        {
                                            children: (0, n.jsx)(v, {
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

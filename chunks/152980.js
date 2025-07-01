(A.d(t, { s: () => q }), A(388685));
var n = A(255367),
    r = A(73800),
    a = A(120356),
    l = A.n(a),
    i = A(481060),
    o = A(205822),
    s = A(476326),
    c = A(377171),
    d = A(313201),
    u = A(374794),
    f = A(587123),
    g = A(863663),
    p = A(731994),
    h = A(629481),
    m = A(388032),
    b = A(48635);
let v = (0, d.hQ)();
function C(e) {
    var t;
    let { upload: A, progress: a = 0, onDeleteAttachment: o } = e,
        s = r.useCallback(() => {
            null == o || o(A.id);
        }, [o, A.id]),
        d = a >= 1,
        u = a < 0,
        f = d || u,
        p = null != (t = A.filename) ? t : A.id,
        h = (0, g.kg)(a);
    return (0, n.jsx)(i.DY3, {
        text: h,
        children: (0, n.jsxs)('div', {
            className: l()(b.attachedFileCard, {
                [b.attachedFileCardError]: u,
                [b.attachedFileCardUploading]: !f
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
                    children: p
                }),
                !f &&
                    (0, n.jsx)(i.$jN, {
                        className: b.attachedFileCardSpinner,
                        type: i.$jN.Type.SPINNING_CIRCLE
                    }),
                f &&
                    null != o &&
                    (0, n.jsx)(i.zxk, {
                        'aria-label': m.intl.formatToPlainString(m.t['1o5hyc'], { attachment: p }),
                        className: b.deleteButton,
                        innerClassName: b.deleteButtonInner,
                        look: i.zxk.Looks.BLANK,
                        size: i.zxk.Sizes.NONE,
                        onClick: s,
                        children: (0, n.jsx)(i.Dio, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: b.__invalid_deleteIcon
                        })
                    })
            ]
        })
    });
}
function q(e) {
    let { onFileAdded: t } = e,
        { uploads: A, canAttachFiles: a, canAttachArchives: l, addAttachment: c, deleteAttachment: d, fileUploadProgresses: g } = (0, f.P)(),
        q = r.useRef(!1);
    function x(e) {
        try {
            for (let t of e)
                c({
                    platform: s.ow.WEB,
                    file: t
                });
            q.current = !0;
        } catch (e) {}
    }
    return (
        r.useEffect(() => {
            q.current && (t(), (q.current = !1));
        }, [t]),
        (0, n.jsxs)('div', {
            className: b.container,
            children: [
                (0, n.jsx)(o.Z, {
                    className: b.uploadArea,
                    title: m.intl.string(m.t['5eTk2t']),
                    description: m.intl.string(m.t.Ecxoxs),
                    icons: p.J6,
                    onDrop: x
                }),
                (0, n.jsxs)(u.Z, {
                    className: b.addFileButtonLook,
                    innerClassName: b.addFileButton,
                    color: i.zxk.Colors.CUSTOM,
                    disabled: !a,
                    'aria-label': m.intl.string(m.t['23LeCA']),
                    'aria-describedby': v,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && x(e.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(i.dZu, {
                            size: 'xs',
                            color: 'currentColor',
                            className: b.addFileButtonIcon,
                            'aria-hidden': !0
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: m.intl.string(m.t['23LeCA'])
                        })
                    ]
                }),
                (0, n.jsx)(i.LZC, { size: 12 }),
                (0, n.jsx)(i.Text, {
                    id: v,
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: l ? m.intl.formatToPlainString(m.t.lvU6sr, { fileUploadLimit: h.TR }) : m.intl.formatToPlainString(m.t.DOXzIS, { fileUploadLimit: h.TR })
                }),
                A.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('div', { className: b.separator }),
                            (0, n.jsx)('ul', {
                                className: b.attachedFilesContainer,
                                'aria-label': m.intl.string(m.t.YZ6cTU),
                                children: A.map((e) =>
                                    (0, n.jsx)(
                                        'li',
                                        {
                                            children: (0, n.jsx)(C, {
                                                upload: e,
                                                onDeleteAttachment: d,
                                                progress: g[e.id]
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

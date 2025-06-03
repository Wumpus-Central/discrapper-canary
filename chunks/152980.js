r.d(t, { s: () => x }), r(388685);
var n = r(255367),
    i = r(73800),
    a = r(120356),
    l = r.n(a),
    o = r(481060),
    A = r(205822),
    s = r(476326),
    c = r(377171),
    d = r(313201),
    u = r(374794),
    f = r(587123),
    g = r(863663),
    h = r(731994),
    p = r(629481),
    m = r(388032),
    b = r(48635);
let v = (0, d.hQ)();
function C(e) {
    var t;
    let { upload: r, progress: a = 0, onDeleteAttachment: A } = e,
        s = i.useCallback(() => {
            null == A || A(r.id);
        }, [A, r.id]),
        d = a >= 1,
        u = a < 0,
        f = d || u,
        h = null != (t = r.filename) ? t : r.id,
        p = (0, g.kg)(a);
    return (0, n.jsx)(o.DY3, {
        text: p,
        children: (0, n.jsxs)('div', {
            className: l()(b.attachedFileCard, {
                [b.attachedFileCardError]: u,
                [b.attachedFileCardUploading]: !f
            }),
            children: [
                (0, n.jsx)(o.ZKT, {
                    size: 'xs',
                    color: c.Z.INTERACTIVE_MUTED
                }),
                (0, n.jsx)(o.LZC, {
                    size: 10,
                    horizontal: !0
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    children: h
                }),
                !f &&
                    (0, n.jsx)(o.$jN, {
                        className: b.attachedFileCardSpinner,
                        type: o.$jN.Type.SPINNING_CIRCLE
                    }),
                f &&
                    null != A &&
                    (0, n.jsx)(o.zxk, {
                        'aria-label': m.intl.formatToPlainString(m.t['1o5hyc'], { attachment: h }),
                        className: b.deleteButton,
                        innerClassName: b.deleteButtonInner,
                        look: o.zxk.Looks.BLANK,
                        size: o.zxk.Sizes.NONE,
                        onClick: s,
                        children: (0, n.jsx)(o.Dio, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: b.__invalid_deleteIcon
                        })
                    })
            ]
        })
    });
}
function x(e) {
    let { onFileAdded: t } = e,
        { uploads: r, canAttachFiles: a, canAttachArchives: l, addAttachment: c, deleteAttachment: d, fileUploadProgresses: g } = (0, f.P)(),
        x = i.useRef(!1);
    function q(e) {
        try {
            for (let t of e)
                c({
                    platform: s.ow.WEB,
                    file: t
                });
            x.current = !0;
        } catch (e) {}
    }
    return (
        i.useEffect(() => {
            x.current && (t(), (x.current = !1));
        }, [t]),
        (0, n.jsxs)('div', {
            className: b.container,
            children: [
                (0, n.jsx)(A.Z, {
                    className: b.uploadArea,
                    title: m.intl.string(m.t['5eTk2t']),
                    description: m.intl.string(m.t.Ecxoxs),
                    icons: h.J6,
                    onDrop: q
                }),
                (0, n.jsxs)(u.Z, {
                    className: b.addFileButtonLook,
                    innerClassName: b.addFileButton,
                    color: o.zxk.Colors.CUSTOM,
                    disabled: !a,
                    'aria-label': m.intl.string(m.t['23LeCA']),
                    'aria-describedby': v,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && q(e.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(o.dZu, {
                            size: 'xs',
                            color: 'currentColor',
                            className: b.addFileButtonIcon,
                            'aria-hidden': !0
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: m.intl.string(m.t['23LeCA'])
                        })
                    ]
                }),
                (0, n.jsx)(o.LZC, { size: 12 }),
                (0, n.jsx)(o.Text, {
                    id: v,
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: l ? m.intl.formatToPlainString(m.t.lvU6sr, { fileUploadLimit: p.TR }) : m.intl.formatToPlainString(m.t.DOXzIS, { fileUploadLimit: p.TR })
                }),
                r.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('div', { className: b.separator }),
                            (0, n.jsx)('ul', {
                                className: b.attachedFilesContainer,
                                'aria-label': m.intl.string(m.t.YZ6cTU),
                                children: r.map((e) =>
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

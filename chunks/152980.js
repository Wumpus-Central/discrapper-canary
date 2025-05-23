r.d(t, { s: () => x }), r(388685);
var n = r(255367),
    A = r(73800),
    a = r(120356),
    l = r.n(a),
    o = r(481060),
    i = r(205822),
    s = r(476326),
    c = r(377171),
    d = r(313201),
    u = r(374794),
    g = r(587123),
    f = r(863663),
    p = r(731994),
    h = r(629481),
    m = r(388032),
    b = r(603936);
let v = (0, d.hQ)();
function C(e) {
    var t;
    let { upload: r, progress: a = 0, onDeleteAttachment: i } = e,
        s = A.useCallback(() => {
            null == i || i(r.id);
        }, [i, r.id]),
        d = a >= 1,
        u = a < 0,
        g = d || u,
        p = null != (t = r.filename) ? t : r.id,
        h = (0, f.kg)(a);
    return (0, n.jsx)(o.DY3, {
        text: h,
        children: (0, n.jsxs)('div', {
            className: l()(b.attachedFileCard, {
                [b.attachedFileCardError]: u,
                [b.attachedFileCardUploading]: !g
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
                    children: p
                }),
                !g &&
                    (0, n.jsx)(o.$jN, {
                        className: b.attachedFileCardSpinner,
                        type: o.$jN.Type.SPINNING_CIRCLE
                    }),
                g &&
                    null != i &&
                    (0, n.jsx)(o.zxk, {
                        'aria-label': m.intl.formatToPlainString(m.t['1o5hyc'], { attachment: p }),
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
        { uploads: r, canAttachFiles: a, canAttachArchives: l, addAttachment: c, deleteAttachment: d, fileUploadProgresses: f } = (0, g.P)(),
        x = A.useRef(!1);
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
        A.useEffect(() => {
            x.current && (t(), (x.current = !1));
        }, [t]),
        (0, n.jsxs)('div', {
            className: b.container,
            children: [
                (0, n.jsx)(i.Z, {
                    className: b.uploadArea,
                    title: m.intl.string(m.t['5eTk2t']),
                    description: m.intl.string(m.t.Ecxoxs),
                    icons: p.J6,
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
                    children: l ? m.intl.formatToPlainString(m.t.lvU6sr, { fileUploadLimit: h.TR }) : m.intl.formatToPlainString(m.t.DOXzIS, { fileUploadLimit: h.TR })
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
                                                progress: f[e.id]
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

r.d(t, { s: () => q }), r(388685);
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
    m = r(629481),
    h = r(388032),
    b = r(48635);
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
        m = (0, f.kg)(a);
    return (0, n.jsx)(o.DY3, {
        text: m,
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
                        'aria-label': h.intl.formatToPlainString(h.t['1o5hyc'], { attachment: p }),
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
function q(e) {
    let { onFileAdded: t } = e,
        { uploads: r, canAttachFiles: a, canAttachArchives: l, addAttachment: c, deleteAttachment: d, fileUploadProgresses: f } = (0, g.P)(),
        q = A.useRef(!1);
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
        A.useEffect(() => {
            q.current && (t(), (q.current = !1));
        }, [t]),
        (0, n.jsxs)('div', {
            className: b.container,
            children: [
                (0, n.jsx)(i.Z, {
                    className: b.uploadArea,
                    title: h.intl.string(h.t['5eTk2t']),
                    description: h.intl.string(h.t.Ecxoxs),
                    icons: p.J6,
                    onDrop: x
                }),
                (0, n.jsxs)(u.Z, {
                    className: b.addFileButtonLook,
                    innerClassName: b.addFileButton,
                    color: o.zxk.Colors.CUSTOM,
                    disabled: !a,
                    'aria-label': h.intl.string(h.t['23LeCA']),
                    'aria-describedby': v,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && x(e.currentTarget.files);
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
                            children: h.intl.string(h.t['23LeCA'])
                        })
                    ]
                }),
                (0, n.jsx)(o.LZC, { size: 12 }),
                (0, n.jsx)(o.Text, {
                    id: v,
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: l ? h.intl.formatToPlainString(h.t.lvU6sr, { fileUploadLimit: m.TR }) : h.intl.formatToPlainString(h.t.DOXzIS, { fileUploadLimit: m.TR })
                }),
                r.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('div', { className: b.separator }),
                            (0, n.jsx)('ul', {
                                className: b.attachedFilesContainer,
                                'aria-label': h.intl.string(h.t.YZ6cTU),
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

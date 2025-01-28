A.d(t, {
    s: function () {
        return x;
    }
}),
    A(47120);
var n = A(200651),
    r = A(192379),
    a = A(120356),
    i = A.n(a),
    l = A(481060),
    o = A(205822),
    s = A(476326),
    d = A(377171),
    c = A(313201),
    u = A(374794),
    g = A(587123),
    h = A(863663),
    p = A(731994),
    m = A(629481),
    f = A(388032),
    v = A(117779);
let C = (0, c.hQ)();
function q(e) {
    var t;
    let { upload: A, progress: a = 0, onDeleteAttachment: o } = e,
        s = r.useCallback(() => {
            null == o || o(A.id);
        }, [o, A.id]),
        c = a >= 1,
        u = a < 0,
        g = c || u,
        p = null !== (t = A.filename) && void 0 !== t ? t : A.id,
        m = (0, h.kg)(a);
    return (0, n.jsx)(l.TooltipContainer, {
        text: m,
        children: (0, n.jsxs)('div', {
            className: i()(v.attachedFileCard, {
                [v.attachedFileCardError]: u,
                [v.attachedFileCardUploading]: !g
            }),
            children: [
                (0, n.jsx)(l.ImageFileIcon, {
                    size: 'xs',
                    color: d.Z.INTERACTIVE_MUTED
                }),
                (0, n.jsx)(l.Spacer, {
                    size: 10,
                    horizontal: !0
                }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    children: p
                }),
                !g &&
                    (0, n.jsx)(l.Spinner, {
                        className: v.attachedFileCardSpinner,
                        type: l.Spinner.Type.SPINNING_CIRCLE
                    }),
                g &&
                    null != o &&
                    (0, n.jsx)(l.Button, {
                        'aria-label': f.intl.formatToPlainString(f.t['1o5hyc'], { attachment: p }),
                        className: v.deleteButton,
                        innerClassName: v.deleteButtonInner,
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.NONE,
                        onClick: s,
                        children: (0, n.jsx)(l.XSmallIcon, {
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
        { uploads: A, canAttachFiles: a, canAttachArchives: i, addAttachment: d, deleteAttachment: c, fileUploadProgresses: h } = (0, g.P)(),
        x = r.useRef(!1);
    function b(e) {
        try {
            for (let t of e)
                d({
                    platform: s.ow.WEB,
                    file: t
                });
            x.current = !0;
        } catch {}
    }
    return (
        r.useEffect(() => {
            x.current && (t(), (x.current = !1));
        }, [t]),
        (0, n.jsxs)('div', {
            className: v.container,
            children: [
                (0, n.jsx)(o.Z, {
                    className: v.uploadArea,
                    title: f.intl.string(f.t['5eTk2t']),
                    description: f.intl.string(f.t.Ecxoxs),
                    icons: p.J6,
                    onDrop: b
                }),
                (0, n.jsxs)(u.Z, {
                    className: v.addFileButtonLook,
                    innerClassName: v.addFileButton,
                    color: l.Button.Colors.CUSTOM,
                    disabled: !a,
                    'aria-label': f.intl.string(f.t['23LeCA']),
                    'aria-describedby': C,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && b(e.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(l.ImageFileUpIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: v.addFileButtonIcon,
                            'aria-hidden': !0
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: f.intl.string(f.t['23LeCA'])
                        })
                    ]
                }),
                (0, n.jsx)(l.Spacer, { size: 12 }),
                (0, n.jsx)(l.Text, {
                    id: C,
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: i ? f.intl.formatToPlainString(f.t.lvU6sr, { fileUploadLimit: m.TR }) : f.intl.formatToPlainString(f.t.DOXzIS, { fileUploadLimit: m.TR })
                }),
                A.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('div', { className: v.separator }),
                            (0, n.jsx)('ul', {
                                className: v.attachedFilesContainer,
                                'aria-label': f.intl.string(f.t.YZ6cTU),
                                children: A.map((e) =>
                                    (0, n.jsx)(
                                        'li',
                                        {
                                            children: (0, n.jsx)(q, {
                                                upload: e,
                                                onDeleteAttachment: c,
                                                progress: h[e.id]
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

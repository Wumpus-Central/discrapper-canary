n.d(t, {
    s: function () {
        return x;
    }
}),
    n(47120);
var A = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(205822),
    s = n(476326),
    d = n(377171),
    c = n(313201),
    u = n(374794),
    g = n(587123),
    h = n(863663),
    p = n(731994),
    m = n(629481),
    f = n(388032),
    v = n(117779);
let C = (0, c.hQ)();
function q(e) {
    var t;
    let { upload: n, progress: a = 0, onDeleteAttachment: o } = e,
        s = r.useCallback(() => {
            null == o || o(n.id);
        }, [o, n.id]),
        c = a >= 1,
        u = a < 0,
        g = c || u,
        p = null !== (t = n.filename) && void 0 !== t ? t : n.id,
        m = (0, h.kg)(a);
    return (0, A.jsx)(i.TooltipContainer, {
        text: m,
        children: (0, A.jsxs)('div', {
            className: l()(v.attachedFileCard, {
                [v.attachedFileCardError]: u,
                [v.attachedFileCardUploading]: !g
            }),
            children: [
                (0, A.jsx)(i.ImageFileIcon, {
                    size: 'xs',
                    color: d.Z.INTERACTIVE_MUTED
                }),
                (0, A.jsx)(i.Spacer, {
                    size: 10,
                    horizontal: !0
                }),
                (0, A.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    children: p
                }),
                !g &&
                    (0, A.jsx)(i.Spinner, {
                        className: v.attachedFileCardSpinner,
                        type: i.Spinner.Type.SPINNING_CIRCLE
                    }),
                g &&
                    null != o &&
                    (0, A.jsx)(i.Button, {
                        'aria-label': f.intl.formatToPlainString(f.t['1o5hyc'], { attachment: p }),
                        className: v.deleteButton,
                        innerClassName: v.deleteButtonInner,
                        look: i.Button.Looks.BLANK,
                        size: i.Button.Sizes.NONE,
                        onClick: s,
                        children: (0, A.jsx)(i.XSmallIcon, {
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
        { uploads: n, canAttachFiles: a, canAttachArchives: l, addAttachment: d, deleteAttachment: c, fileUploadProgresses: h } = (0, g.P)(),
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
        (0, A.jsxs)('div', {
            className: v.container,
            children: [
                (0, A.jsx)(o.Z, {
                    className: v.uploadArea,
                    title: f.intl.string(f.t['5eTk2t']),
                    description: f.intl.string(f.t.Ecxoxs),
                    icons: p.J6,
                    onDrop: b
                }),
                (0, A.jsxs)(u.Z, {
                    className: v.addFileButtonLook,
                    innerClassName: v.addFileButton,
                    color: i.Button.Colors.CUSTOM,
                    disabled: !a,
                    'aria-label': f.intl.string(f.t['23LeCA']),
                    'aria-describedby': C,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && b(e.currentTarget.files);
                    },
                    children: [
                        (0, A.jsx)(i.ImageFileUpIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: v.addFileButtonIcon,
                            'aria-hidden': !0
                        }),
                        (0, A.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: f.intl.string(f.t['23LeCA'])
                        })
                    ]
                }),
                (0, A.jsx)(i.Spacer, { size: 12 }),
                (0, A.jsx)(i.Text, {
                    id: C,
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: l ? f.intl.formatToPlainString(f.t.lvU6sr, { fileUploadLimit: m.TR }) : f.intl.formatToPlainString(f.t.DOXzIS, { fileUploadLimit: m.TR })
                }),
                n.length > 0 &&
                    (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)('div', { className: v.separator }),
                            (0, A.jsx)('ul', {
                                className: v.attachedFilesContainer,
                                'aria-label': f.intl.string(f.t.YZ6cTU),
                                children: n.map((e) =>
                                    (0, A.jsx)(
                                        'li',
                                        {
                                            children: (0, A.jsx)(q, {
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

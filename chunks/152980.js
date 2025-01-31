t.d(e, { s: () => x }), t(47120);
var n = t(200651),
    a = t(192379),
    l = t(120356),
    r = t.n(l),
    i = t(481060),
    o = t(205822),
    s = t(476326),
    d = t(377171),
    c = t(313201),
    u = t(374794),
    g = t(587123),
    m = t(863663),
    h = t(731994),
    f = t(629481),
    C = t(388032),
    p = t(117779);
let q = (0, c.hQ)();
function v(A) {
    var e;
    let { upload: t, progress: l = 0, onDeleteAttachment: o } = A,
        s = a.useCallback(() => {
            null == o || o(t.id);
        }, [o, t.id]),
        c = l >= 1,
        u = l < 0,
        g = c || u,
        h = null !== (e = t.filename) && void 0 !== e ? e : t.id,
        f = (0, m.kg)(l);
    return (0, n.jsx)(i.DY3, {
        text: f,
        children: (0, n.jsxs)('div', {
            className: r()(p.attachedFileCard, {
                [p.attachedFileCardError]: u,
                [p.attachedFileCardUploading]: !g
            }),
            children: [
                (0, n.jsx)(i.ZKT, {
                    size: 'xs',
                    color: d.Z.INTERACTIVE_MUTED
                }),
                (0, n.jsx)(i.LZC, {
                    size: 10,
                    horizontal: !0
                }),
                (0, n.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    children: h
                }),
                !g &&
                    (0, n.jsx)(i.$jN, {
                        className: p.attachedFileCardSpinner,
                        type: i.$jN.Type.SPINNING_CIRCLE
                    }),
                g &&
                    null != o &&
                    (0, n.jsx)(i.zxk, {
                        'aria-label': C.intl.formatToPlainString(C.t['1o5hyc'], { attachment: h }),
                        className: p.deleteButton,
                        innerClassName: p.deleteButtonInner,
                        look: i.zxk.Looks.BLANK,
                        size: i.zxk.Sizes.NONE,
                        onClick: s,
                        children: (0, n.jsx)(i.Dio, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: p.__invalid_deleteIcon
                        })
                    })
            ]
        })
    });
}
function x(A) {
    let { onFileAdded: e } = A,
        { uploads: t, canAttachFiles: l, canAttachArchives: r, addAttachment: d, deleteAttachment: c, fileUploadProgresses: m } = (0, g.P)(),
        x = a.useRef(!1);
    function U(A) {
        try {
            for (let e of A)
                d({
                    platform: s.ow.WEB,
                    file: e
                });
            x.current = !0;
        } catch {}
    }
    return (
        a.useEffect(() => {
            x.current && (e(), (x.current = !1));
        }, [e]),
        (0, n.jsxs)('div', {
            className: p.container,
            children: [
                (0, n.jsx)(o.Z, {
                    className: p.uploadArea,
                    title: C.intl.string(C.t['5eTk2t']),
                    description: C.intl.string(C.t.Ecxoxs),
                    icons: h.J6,
                    onDrop: U
                }),
                (0, n.jsxs)(u.Z, {
                    className: p.addFileButtonLook,
                    innerClassName: p.addFileButton,
                    color: i.zxk.Colors.CUSTOM,
                    disabled: !l,
                    'aria-label': C.intl.string(C.t['23LeCA']),
                    'aria-describedby': q,
                    multiple: !0,
                    onChange: function (A) {
                        null != A.currentTarget.files && U(A.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(i.dZu, {
                            size: 'xs',
                            color: 'currentColor',
                            className: p.addFileButtonIcon,
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
                    id: q,
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: r ? C.intl.formatToPlainString(C.t.lvU6sr, { fileUploadLimit: f.TR }) : C.intl.formatToPlainString(C.t.DOXzIS, { fileUploadLimit: f.TR })
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)('div', { className: p.separator }),
                            (0, n.jsx)('ul', {
                                className: p.attachedFilesContainer,
                                'aria-label': C.intl.string(C.t.YZ6cTU),
                                children: t.map((A) =>
                                    (0, n.jsx)(
                                        'li',
                                        {
                                            children: (0, n.jsx)(v, {
                                                upload: A,
                                                onDeleteAttachment: c,
                                                progress: m[A.id]
                                            })
                                        },
                                        A.id
                                    )
                                )
                            })
                        ]
                    })
            ]
        })
    );
}

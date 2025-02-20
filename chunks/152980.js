r.d(t, { s: () => q }), r(47120);
var A = r(200651),
    n = r(192379),
    o = r(120356),
    a = r.n(o),
    l = r(481060),
    i = r(205822),
    s = r(476326),
    c = r(377171),
    d = r(313201),
    u = r(374794),
    f = r(587123),
    g = r(863663),
    p = r(731994),
    m = r(629481),
    h = r(388032),
    b = r(274139);
let v = (0, d.hQ)();
function C(e) {
    var t;
    let { upload: r, progress: o = 0, onDeleteAttachment: i } = e,
        s = n.useCallback(() => {
            null == i || i(r.id);
        }, [i, r.id]),
        d = o >= 1,
        u = o < 0,
        f = d || u,
        p = null !== (t = r.filename) && void 0 !== t ? t : r.id,
        m = (0, g.kg)(o);
    return (0, A.jsx)(l.DY3, {
        text: m,
        children: (0, A.jsxs)('div', {
            className: a()(b.attachedFileCard, {
                [b.attachedFileCardError]: u,
                [b.attachedFileCardUploading]: !f
            }),
            children: [
                (0, A.jsx)(l.ZKT, {
                    size: 'xs',
                    color: c.Z.INTERACTIVE_MUTED
                }),
                (0, A.jsx)(l.LZC, {
                    size: 10,
                    horizontal: !0
                }),
                (0, A.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    children: p
                }),
                !f &&
                    (0, A.jsx)(l.$jN, {
                        className: b.attachedFileCardSpinner,
                        type: l.$jN.Type.SPINNING_CIRCLE
                    }),
                f &&
                    null != i &&
                    (0, A.jsx)(l.zxk, {
                        'aria-label': h.NW.formatToPlainString(h.t['1o5hyc'], { attachment: p }),
                        className: b.deleteButton,
                        innerClassName: b.deleteButtonInner,
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.NONE,
                        onClick: s,
                        children: (0, A.jsx)(l.Dio, {
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
        { uploads: r, canAttachFiles: o, canAttachArchives: a, addAttachment: c, deleteAttachment: d, fileUploadProgresses: g } = (0, f.P)(),
        q = n.useRef(!1);
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
        n.useEffect(() => {
            q.current && (t(), (q.current = !1));
        }, [t]),
        (0, A.jsxs)('div', {
            className: b.container,
            children: [
                (0, A.jsx)(i.Z, {
                    className: b.uploadArea,
                    title: h.NW.string(h.t['5eTk2t']),
                    description: h.NW.string(h.t.Ecxoxs),
                    icons: p.J6,
                    onDrop: x
                }),
                (0, A.jsxs)(u.Z, {
                    className: b.addFileButtonLook,
                    innerClassName: b.addFileButton,
                    color: l.zxk.Colors.CUSTOM,
                    disabled: !o,
                    'aria-label': h.NW.string(h.t['23LeCA']),
                    'aria-describedby': v,
                    multiple: !0,
                    onChange: function (e) {
                        null != e.currentTarget.files && x(e.currentTarget.files);
                    },
                    children: [
                        (0, A.jsx)(l.dZu, {
                            size: 'xs',
                            color: 'currentColor',
                            className: b.addFileButtonIcon,
                            'aria-hidden': !0
                        }),
                        (0, A.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: h.NW.string(h.t['23LeCA'])
                        })
                    ]
                }),
                (0, A.jsx)(l.LZC, { size: 12 }),
                (0, A.jsx)(l.Text, {
                    id: v,
                    color: 'text-muted',
                    variant: 'text-xs/normal',
                    children: a ? h.NW.formatToPlainString(h.t.lvU6sr, { fileUploadLimit: m.TR }) : h.NW.formatToPlainString(h.t.DOXzIS, { fileUploadLimit: m.TR })
                }),
                r.length > 0 &&
                    (0, A.jsxs)(A.Fragment, {
                        children: [
                            (0, A.jsx)('div', { className: b.separator }),
                            (0, A.jsx)('ul', {
                                className: b.attachedFilesContainer,
                                'aria-label': h.NW.string(h.t.YZ6cTU),
                                children: r.map((e) =>
                                    (0, A.jsx)(
                                        'li',
                                        {
                                            children: (0, A.jsx)(C, {
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

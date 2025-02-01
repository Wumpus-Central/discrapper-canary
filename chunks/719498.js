t.d(a, { default: () => x });
var i = t(200651),
    n = t(192379),
    r = t(481060),
    s = t(933557),
    l = t(925329),
    d = t(296023),
    o = t(388032),
    c = t(165998);
let x = (e) => {
    let { channel: a, application: x, onClose: h, transitionState: m } = e,
        k = (0, d.w)(a),
        j = n.useCallback(
            () => (
                h(),
                (0, r.ZDy)(async () => {
                    let { default: e } = await Promise.all([t.e('38902'), t.e('31907')]).then(t.bind(t, 366854));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            channelId: a.id,
                            application: x
                        });
                })
            ),
            [x, a.id, h]
        ),
        p = (0, s.ZP)(a, !0);
    return (0, i.jsxs)(r.Y0X, {
        transitionState: m,
        'aria-label': o.intl.string(o.t.OJknho),
        children: [
            (0, i.jsx)(r.xBx, {
                separator: !1,
                children: (0, i.jsx)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: o.intl.string(o.t.OJknho)
                })
            }),
            (0, i.jsxs)(r.hzk, {
                className: c.content,
                children: [
                    (0, i.jsx)(l.Z, {
                        game: x,
                        size: l.Z.Sizes.LARGE
                    }),
                    (0, i.jsxs)('div', {
                        className: c.metadata,
                        children: [
                            (0, i.jsxs)('div', {
                                className: c.metadataHeader,
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: x.name
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'header-secondary',
                                        children: o.intl.format(o.t['0NJZAQ'], { channelName: p })
                                    })
                                ]
                            }),
                            null != k &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('div', { className: c.divider }),
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-secondary',
                                            children: k
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)(r.mzw, {
                children: [
                    (0, i.jsx)(r.zxk, {
                        onClick: j,
                        color: r.zxk.Colors.RED,
                        children: o.intl.string(o.t.LLWaxc)
                    }),
                    (0, i.jsx)(r.zxk, {
                        onClick: h,
                        look: r.zxk.Looks.LINK,
                        color: r.zxk.Colors.PRIMARY,
                        children: o.intl.string(o.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};

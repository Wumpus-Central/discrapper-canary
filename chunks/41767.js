e.d(n, { default: () => j }), e(47120);
var r = e(200651),
    l = e(192379),
    i = e(481060),
    a = e(313201),
    s = e(556012),
    o = e(590433),
    u = e(388032),
    c = e(704409);
let d = (t) => {
    var n;
    let { duration: e, onSelectDuration: l } = t,
        a = (0, o.tr)(),
        s = a.find((t) => t.value === e);
    return (0, r.jsx)(i.xJW, {
        className: c.durationSelector,
        required: !0,
        children: (0, r.jsx)(i.VcW, {
            value: null !== (n = null == s ? void 0 : s.value) && void 0 !== n ? n : o.UK.DURATION_60_SEC,
            options: a,
            onChange: (t) => {
                let n = a.find((n) => n.value === t);
                null != n && l(n.value);
            },
            placeholder: u.intl.string(u.t.k7yo6u)
        })
    });
};
function j(t) {
    let { action: n, triggerType: e, isEdit: j, onUpdateDuration: A, onClose: E, transitionState: N } = t,
        _ = (0, a.Dt)(),
        [S, C] = l.useState(() => (null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : o.UK.DURATION_60_SEC)),
        h = (0, s.c)(n.type, n, e);
    if (null == h) return null;
    let { headerText: L } = h;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: N,
        'aria-labelledby': _,
        size: i.CgR.SMALL,
        children: [
            (0, r.jsxs)(i.hzk, {
                className: c.actionContentContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        id: _,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: c.header,
                        children: L
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: u.intl.string(u.t.DWGBAg)
                    }),
                    (0, r.jsx)(d, {
                        duration: S,
                        onSelectDuration: (t) => {
                            C(t);
                        }
                    })
                ]
            }),
            (0, r.jsxs)(i.mzw, {
                children: [
                    (0, r.jsx)(i.zxk, {
                        onClick: () => {
                            A(S);
                        },
                        color: i.zxk.Colors.BRAND,
                        size: i.zxk.Sizes.SMALL,
                        children: j ? u.intl.string(u.t.bt75u7) : u.intl.string(u.t.R3BPHx)
                    }),
                    (0, r.jsx)(i.zxk, {
                        onClick: () => {
                            E();
                        },
                        color: i.zxk.Colors.TRANSPARENT,
                        look: i.zxk.Looks.LINK,
                        children: u.intl.string(u.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

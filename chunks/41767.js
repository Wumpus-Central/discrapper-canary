(e.d(n, { default: () => j }), e(388685));
var r = e(255367),
    l = e(73800),
    a = e(481060),
    i = e(313201),
    s = e(556012),
    u = e(590433),
    o = e(388032),
    c = e(996248);
let d = (t) => {
    var n;
    let { duration: e, onSelectDuration: l } = t,
        i = (0, u.tr)(),
        s = i.find((t) => t.value === e);
    return (0, r.jsx)(a.xJW, {
        className: c.durationSelector,
        required: !0,
        children: (0, r.jsx)(a.VcW, {
            value: null != (n = null == s ? void 0 : s.value) ? n : u.UK.DURATION_60_SEC,
            options: i,
            onChange: (t) => {
                let n = i.find((n) => n.value === t);
                null != n && l(n.value);
            },
            placeholder: o.intl.string(o.t.k7yo6u)
        })
    });
};
function j(t) {
    let { action: n, triggerType: e, isEdit: j, onUpdateDuration: A, onClose: E, transitionState: N } = t,
        _ = (0, i.Dt)(),
        [S, C] = l.useState(() => (null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : u.UK.DURATION_60_SEC)),
        h = (0, s.c)(n.type, n, e);
    if (null == h) return null;
    let { headerText: L } = h;
    return (0, r.jsxs)(a.Y0X, {
        transitionState: N,
        'aria-labelledby': _,
        size: a.CgR.SMALL,
        parentComponent: 'AutomodActionUserCommunicationDisabledModal',
        children: [
            (0, r.jsxs)(a.hzk, {
                className: c.actionContentContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        id: _,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: c.header,
                        children: L
                    }),
                    (0, r.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: o.intl.string(o.t.DWGBAg)
                    }),
                    (0, r.jsx)(d, {
                        duration: S,
                        onSelectDuration: (t) => {
                            C(t);
                        }
                    })
                ]
            }),
            (0, r.jsxs)(a.mzw, {
                children: [
                    (0, r.jsx)(a.zxk, {
                        onClick: () => {
                            A(S);
                        },
                        color: a.zxk.Colors.BRAND,
                        size: a.zxk.Sizes.SMALL,
                        children: j ? o.intl.string(o.t.bt75u7) : o.intl.string(o.t.R3BPHx)
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: () => {
                            E();
                        },
                        color: a.zxk.Colors.TRANSPARENT,
                        look: a.zxk.Looks.LINK,
                        children: o.intl.string(o.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

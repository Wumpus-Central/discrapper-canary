(e.d(n, { default: () => A }), e(388685));
var r = e(255367),
    l = e(73800),
    a = e(755721),
    i = e(481060),
    s = e(313201),
    u = e(556012),
    c = e(590433),
    o = e(388032),
    d = e(996248);
let j = (t) => {
    var n;
    let { duration: e, onSelectDuration: l } = t,
        a = (0, c.tr)(),
        s = a.find((t) => t.value === e);
    return (0, r.jsx)(i.xJW, {
        className: d.durationSelector,
        required: !0,
        children: (0, r.jsx)(i.VcW, {
            value: null != (n = null == s ? void 0 : s.value) ? n : c.UK.DURATION_60_SEC,
            options: a,
            onChange: (t) => {
                let n = a.find((n) => n.value === t);
                null != n && l(n.value);
            },
            placeholder: o.intl.string(o.t.k7yo6u)
        })
    });
};
function A(t) {
    let { action: n, triggerType: e, isEdit: A, onUpdateDuration: E, onClose: _, transitionState: N } = t,
        S = (0, s.Dt)(),
        [C, h] = l.useState(() => (null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : c.UK.DURATION_60_SEC)),
        I = (0, u.c)(n.type, n, e);
    if (null == I) return null;
    let { headerText: L } = I;
    return (0, r.jsxs)(i.Y0X, {
        transitionState: N,
        'aria-labelledby': S,
        size: i.CgR.SMALL,
        parentComponent: 'AutomodActionUserCommunicationDisabledModal',
        children: [
            (0, r.jsxs)(i.hzk, {
                className: d.actionContentContainer,
                children: [
                    (0, r.jsx)(i.X6q, {
                        id: S,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: d.header,
                        children: L
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: o.intl.string(o.t.DWGBAg)
                    }),
                    (0, r.jsx)(j, {
                        duration: C,
                        onSelectDuration: (t) => {
                            h(t);
                        }
                    })
                ]
            }),
            (0, r.jsxs)(i.mzw, {
                children: [
                    (0, r.jsx)(i.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: A ? o.intl.string(o.t.bt75u7) : o.intl.string(o.t.R3BPHx),
                        onClick: () => {
                            E(C);
                        }
                    }),
                    (0, r.jsx)(a.zx, {
                        onClick: () => {
                            _();
                        },
                        color: a.zx.Colors.TRANSPARENT,
                        look: a.zx.Looks.LINK,
                        children: o.intl.string(o.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

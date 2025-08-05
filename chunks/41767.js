(e.d(n, { default: () => x }), e(388685));
var a = e(255367),
    i = e(73800),
    r = e(755721),
    o = e(481060),
    l = e(313201),
    s = e(556012),
    d = e(590433),
    c = e(388032),
    u = e(996248);
let h = (t) => {
    var n;
    let { duration: e, onSelectDuration: i } = t,
        r = (0, d.tr)(),
        l = r.find((t) => t.value === e);
    return (0, a.jsx)(o.xJW, {
        className: u.durationSelector,
        required: !0,
        children: (0, a.jsx)(o.VcW, {
            value: null != (n = null == l ? void 0 : l.value) ? n : d.UK.DURATION_60_SEC,
            options: r,
            onChange: (t) => {
                let n = r.find((n) => n.value === t);
                null != n && i(n.value);
            },
            placeholder: c.intl.string(c.t.k7yo6u)
        })
    });
};
function x(t) {
    let { action: n, triggerType: e, isEdit: x, onUpdateDuration: m, onClose: C, transitionState: p } = t,
        S = (0, l.Dt)(),
        [_, k] = i.useState(() => (null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : d.UK.DURATION_60_SEC)),
        v = (0, s.c)(n.type, n, e);
    if (null == v) return null;
    let { headerText: b } = v;
    return (0, a.jsxs)(o.Y0X, {
        transitionState: p,
        'aria-labelledby': S,
        size: o.CgR.SMALL,
        parentComponent: 'AutomodActionUserCommunicationDisabledModal',
        children: [
            (0, a.jsxs)(o.hzk, {
                className: u.actionContentContainer,
                children: [
                    (0, a.jsx)(o.X6q, {
                        id: S,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: u.header,
                        children: b
                    }),
                    (0, a.jsx)(o.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: c.intl.string(c.t.DWGBAg)
                    }),
                    (0, a.jsx)(h, {
                        duration: _,
                        onSelectDuration: (t) => {
                            k(t);
                        }
                    })
                ]
            }),
            (0, a.jsxs)(o.mzw, {
                children: [
                    (0, a.jsx)(o.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: x ? c.intl.string(c.t.bt75u7) : c.intl.string(c.t.R3BPHx),
                        onClick: () => {
                            m(_);
                        }
                    }),
                    (0, a.jsx)(r.zx, {
                        onClick: () => {
                            C();
                        },
                        color: r.zx.Colors.TRANSPARENT,
                        look: r.zx.Looks.LINK,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

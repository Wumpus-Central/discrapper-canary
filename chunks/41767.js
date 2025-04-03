n.d(e, { default: () => d }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(481060),
    s = n(313201),
    i = n(556012),
    u = n(590433),
    c = n(388032),
    o = n(996248);
let N = (t) => {
    var e;
    let { duration: n, onSelectDuration: l } = t,
        s = (0, u.tr)(),
        i = s.find((t) => t.value === n);
    return (0, r.jsx)(a.xJW, {
        className: o.durationSelector,
        required: !0,
        children: (0, r.jsx)(a.VcW, {
            value: null != (e = null == i ? void 0 : i.value) ? e : u.UK.DURATION_60_SEC,
            options: s,
            onChange: (t) => {
                let e = s.find((e) => e.value === t);
                null != e && l(e.value);
            },
            placeholder: c.NW.string(c.t.k7yo6u)
        })
    });
};
function d(t) {
    let { action: e, triggerType: n, isEdit: d, onUpdateDuration: j, onClose: A, transitionState: E } = t,
        _ = (0, s.Dt)(),
        [S, C] = l.useState(() => (null != e.metadata.durationSeconds && e.metadata.durationSeconds > 0 ? e.metadata.durationSeconds : u.UK.DURATION_60_SEC)),
        h = (0, i.c)(e.type, e, n);
    if (null == h) return null;
    let { headerText: L } = h;
    return (0, r.jsxs)(a.Y0X, {
        transitionState: E,
        'aria-labelledby': _,
        size: a.CgR.SMALL,
        children: [
            (0, r.jsxs)(a.hzk, {
                className: o.actionContentContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        id: _,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: o.header,
                        children: L
                    }),
                    (0, r.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: c.NW.string(c.t.DWGBAg)
                    }),
                    (0, r.jsx)(N, {
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
                            j(S);
                        },
                        color: a.zxk.Colors.BRAND,
                        size: a.zxk.Sizes.SMALL,
                        children: d ? c.NW.string(c.t.bt75u7) : c.NW.string(c.t.R3BPHx)
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: () => {
                            A();
                        },
                        color: a.zxk.Colors.TRANSPARENT,
                        look: a.zxk.Looks.LINK,
                        children: c.NW.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

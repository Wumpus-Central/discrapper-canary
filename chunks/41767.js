n.d(e, { default: () => N }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(481060),
    i = n(313201),
    s = n(556012),
    o = n(590433),
    u = n(388032),
    c = n(378141);
let d = (t) => {
    var e;
    let { duration: n, onSelectDuration: l } = t,
        i = (0, o.tr)(),
        s = i.find((t) => t.value === n);
    return (0, r.jsx)(a.xJW, {
        className: c.durationSelector,
        required: !0,
        children: (0, r.jsx)(a.VcW, {
            value: null !== (e = null == s ? void 0 : s.value) && void 0 !== e ? e : o.UK.DURATION_60_SEC,
            options: i,
            onChange: (t) => {
                let e = i.find((e) => e.value === t);
                null != e && l(e.value);
            },
            placeholder: u.NW.string(u.t.k7yo6u)
        })
    });
};
function N(t) {
    let { action: e, triggerType: n, isEdit: N, onUpdateDuration: j, onClose: A, transitionState: E } = t,
        _ = (0, i.Dt)(),
        [S, C] = l.useState(() => (null != e.metadata.durationSeconds && e.metadata.durationSeconds > 0 ? e.metadata.durationSeconds : o.UK.DURATION_60_SEC)),
        h = (0, s.c)(e.type, e, n);
    if (null == h) return null;
    let { headerText: L } = h;
    return (0, r.jsxs)(a.Y0X, {
        transitionState: E,
        'aria-labelledby': _,
        size: a.CgR.SMALL,
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
                        children: u.NW.string(u.t.DWGBAg)
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
                            j(S);
                        },
                        color: a.zxk.Colors.BRAND,
                        size: a.zxk.Sizes.SMALL,
                        children: N ? u.NW.string(u.t.bt75u7) : u.NW.string(u.t.R3BPHx)
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: () => {
                            A();
                        },
                        color: a.zxk.Colors.TRANSPARENT,
                        look: a.zxk.Looks.LINK,
                        children: u.NW.string(u.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

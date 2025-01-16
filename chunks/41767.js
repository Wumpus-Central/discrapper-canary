e.r(n),
    e.d(n, {
        default: function () {
            return j;
        }
    }),
    e(47120);
var r = e(200651),
    l = e(192379),
    i = e(481060),
    a = e(313201),
    o = e(556012),
    u = e(590433),
    c = e(388032),
    s = e(704409);
let d = (t) => {
    var n;
    let { duration: e, onSelectDuration: l } = t,
        a = (0, u.tr)(),
        o = a.find((t) => t.value === e);
    return (0, r.jsx)(i.FormItem, {
        className: s.durationSelector,
        required: !0,
        children: (0, r.jsx)(i.SearchableSelect, {
            value: null !== (n = null == o ? void 0 : o.value) && void 0 !== n ? n : u.UK.DURATION_60_SEC,
            options: a,
            onChange: (t) => {
                let n = a.find((n) => n.value === t);
                null != n && l(n.value);
            },
            placeholder: c.intl.string(c.t.k7yo6u)
        })
    });
};
function j(t) {
    let { action: n, triggerType: e, isEdit: j, onUpdateDuration: A, onClose: S, transitionState: E } = t,
        N = (0, a.Dt)(),
        [_, C] = l.useState(() => (null != n.metadata.durationSeconds && n.metadata.durationSeconds > 0 ? n.metadata.durationSeconds : u.UK.DURATION_60_SEC)),
        h = (0, o.c)(n.type, n, e);
    if (null == h) return null;
    let { headerText: I } = h;
    return (0, r.jsxs)(i.ModalRoot, {
        transitionState: E,
        'aria-labelledby': N,
        size: i.ModalSize.SMALL,
        children: [
            (0, r.jsxs)(i.ModalContent, {
                className: s.actionContentContainer,
                children: [
                    (0, r.jsx)(i.Heading, {
                        id: N,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: s.header,
                        children: I
                    }),
                    (0, r.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: c.intl.string(c.t.DWGBAg)
                    }),
                    (0, r.jsx)(d, {
                        duration: _,
                        onSelectDuration: (t) => {
                            C(t);
                        }
                    })
                ]
            }),
            (0, r.jsxs)(i.ModalFooter, {
                children: [
                    (0, r.jsx)(i.Button, {
                        onClick: () => {
                            A(_);
                        },
                        color: i.Button.Colors.BRAND,
                        size: i.Button.Sizes.SMALL,
                        children: j ? c.intl.string(c.t.bt75u7) : c.intl.string(c.t.R3BPHx)
                    }),
                    (0, r.jsx)(i.Button, {
                        onClick: () => {
                            S();
                        },
                        color: i.Button.Colors.TRANSPARENT,
                        look: i.Button.Looks.LINK,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

t.d(i, { default: () => _ }), t(388685);
var e = t(255367);
t(73800);
var s = t(512722),
    l = t.n(s),
    a = t(481060),
    o = t(935369),
    c = t(313201),
    r = t(53365),
    d = t(981631),
    u = t(388032),
    x = t(103858);
function _(n) {
    let { transitionState: i, guild: t, onClose: s } = n,
        _ = (0, c.Dt)(),
        [g, { loading: h, error: m }] = (0, o.Z)(r.oL),
        p = async () => {
            l()(null != t, 'no guild'), null != (await g(t.id)) && s();
        };
    return (0, e.jsxs)(a.Y0X, {
        transitionState: i,
        'aria-labelledby': _,
        parentComponent: 'RemoveMonetizationModal',
        children: [
            (0, e.jsxs)(a.xBx, {
                children: [
                    (0, e.jsx)(a.X6q, {
                        id: _,
                        variant: 'heading-md/semibold',
                        children: u.intl.string(u.t.rRpcEx)
                    }),
                    (0, e.jsx)(a.olH, {
                        className: x.closeButton,
                        onClick: s
                    })
                ]
            }),
            (0, e.jsxs)(a.hzk, {
                className: x.content,
                children: [
                    null != m
                        ? (0, e.jsxs)(e.Fragment, {
                              children: [(0, e.jsx)(a.kzN, { children: m.message }), (0, e.jsx)(a.LZC, { size: 24 })]
                          })
                        : null,
                    (0, e.jsx)(a.R94, {
                        type: a.R94.Types.ERROR,
                        children: u.intl.format(u.t['Oa5P6+'], {
                            guildName: t.toString(),
                            url: d.EYA.DEVELOPER_PORTAL_TEAMS
                        })
                    }),
                    (0, e.jsx)(a.LZC, { size: 16 })
                ]
            }),
            (0, e.jsx)(a.mzw, {
                className: x.__invalid_footer,
                children: (0, e.jsx)(a.zxk, {
                    color: a.zxk.Colors.RED,
                    className: x.__invalid_goBackButton,
                    submitting: h,
                    onClick: p,
                    children: u.intl.string(u.t.R3BPHx)
                })
            })
        ]
    });
}

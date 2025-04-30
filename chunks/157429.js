t.d(i, { default: () => _ }), t(388685);
var s = t(200651);
t(192379);
var l = t(512722),
    e = t.n(l),
    a = t(481060),
    c = t(935369),
    o = t(313201),
    r = t(53365),
    d = t(981631),
    u = t(388032),
    x = t(103858);
function _(n) {
    let { transitionState: i, guild: t, onClose: l } = n,
        _ = (0, o.Dt)(),
        [g, { loading: h, error: j }] = (0, c.Z)(r.oL),
        m = async () => {
            e()(null != t, 'no guild'), null != (await g(t.id)) && l();
        };
    return (0, s.jsxs)(a.Y0X, {
        transitionState: i,
        'aria-labelledby': _,
        children: [
            (0, s.jsxs)(a.xBx, {
                children: [
                    (0, s.jsx)(a.X6q, {
                        id: _,
                        variant: 'heading-md/semibold',
                        children: u.intl.string(u.t.rRpcEx)
                    }),
                    (0, s.jsx)(a.olH, {
                        className: x.closeButton,
                        onClick: l
                    })
                ]
            }),
            (0, s.jsxs)(a.hzk, {
                className: x.content,
                children: [
                    null != j
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [(0, s.jsx)(a.kzN, { children: j.message }), (0, s.jsx)(a.LZC, { size: 24 })]
                          })
                        : null,
                    (0, s.jsx)(a.R94, {
                        type: a.R94.Types.ERROR,
                        children: u.intl.format(u.t['Oa5P6+'], {
                            guildName: t.toString(),
                            url: d.EYA.DEVELOPER_PORTAL_TEAMS
                        })
                    }),
                    (0, s.jsx)(a.LZC, { size: 16 })
                ]
            }),
            (0, s.jsx)(a.mzw, {
                className: x.__invalid_footer,
                children: (0, s.jsx)(a.zxk, {
                    color: a.zxk.Colors.RED,
                    className: x.__invalid_goBackButton,
                    submitting: h,
                    onClick: m,
                    children: u.intl.string(u.t.R3BPHx)
                })
            })
        ]
    });
}

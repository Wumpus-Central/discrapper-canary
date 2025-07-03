(t.d(i, { default: () => _ }), t(388685));
var e = t(255367);
t(73800);
var s = t(512722),
    a = t.n(s),
    l = t(481060),
    o = t(935369),
    c = t(313201),
    r = t(53365),
    d = t(981631),
    u = t(388032),
    x = t(103858);
function _(n) {
    let { transitionState: i, guild: t, onClose: s } = n,
        _ = (0, c.Dt)(),
        [h, { loading: g, error: m }] = (0, o.Z)(r.oL),
        p = async () => {
            (a()(null != t, 'no guild'), null != (await h(t.id)) && s());
        };
    return (0, e.jsxs)(l.Y0X, {
        transitionState: i,
        'aria-labelledby': _,
        parentComponent: 'RemoveMonetizationModal',
        children: [
            (0, e.jsxs)(l.xBx, {
                children: [
                    (0, e.jsx)(l.X6q, {
                        id: _,
                        variant: 'heading-md/semibold',
                        children: u.intl.string(u.t.rRpcEx)
                    }),
                    (0, e.jsx)(l.olH, {
                        className: x.closeButton,
                        onClick: s
                    })
                ]
            }),
            (0, e.jsxs)(l.hzk, {
                className: x.content,
                children: [
                    null != m
                        ? (0, e.jsxs)(e.Fragment, {
                              children: [(0, e.jsx)(l.kzN, { children: m.message }), (0, e.jsx)(l.LZC, { size: 24 })]
                          })
                        : null,
                    (0, e.jsx)(l.R94, {
                        type: l.R94.Types.ERROR,
                        children: u.intl.format(u.t['Oa5P6+'], {
                            guildName: t.name,
                            url: d.EYA.DEVELOPER_PORTAL_TEAMS
                        })
                    }),
                    (0, e.jsx)(l.LZC, { size: 16 })
                ]
            }),
            (0, e.jsx)(l.mzw, {
                className: x.__invalid_footer,
                children: (0, e.jsx)(l.zxk, {
                    color: l.zxk.Colors.RED,
                    className: x.__invalid_goBackButton,
                    submitting: g,
                    onClick: p,
                    children: u.intl.string(u.t.R3BPHx)
                })
            })
        ]
    });
}

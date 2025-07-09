(t.d(i, { default: () => _ }), t(388685));
var a = t(255367);
t(73800);
var e = t(512722),
    s = t.n(e),
    l = t(481060),
    o = t(935369),
    r = t(313201),
    c = t(53365),
    d = t(981631),
    u = t(388032),
    x = t(103858);
function _(n) {
    let { transitionState: i, guild: t, onClose: e } = n,
        _ = (0, r.Dt)(),
        [h, { loading: m, error: p }] = (0, o.Z)(c.oL),
        g = async () => {
            (s()(null != t, 'no guild'), null != (await h(t.id)) && e());
        };
    return (0, a.jsxs)(l.Y0X, {
        transitionState: i,
        'aria-labelledby': _,
        parentComponent: 'RemoveMonetizationModal',
        children: [
            (0, a.jsxs)(l.xBx, {
                children: [
                    (0, a.jsx)(l.X6q, {
                        id: _,
                        variant: 'heading-md/semibold',
                        children: u.intl.string(u.t.rRpcEx)
                    }),
                    (0, a.jsx)(l.olH, {
                        className: x.closeButton,
                        onClick: e
                    })
                ]
            }),
            (0, a.jsxs)(l.hzk, {
                className: x.content,
                children: [
                    null != p
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(l.kzN, { children: p.message }), (0, a.jsx)(l.LZC, { size: 24 })]
                          })
                        : null,
                    (0, a.jsx)(l.R94, {
                        type: l.R94.Types.ERROR,
                        children: u.intl.format(u.t['Oa5P6+'], {
                            guildName: t.name,
                            url: d.EYA.DEVELOPER_PORTAL_TEAMS
                        })
                    }),
                    (0, a.jsx)(l.LZC, { size: 16 })
                ]
            }),
            (0, a.jsx)(l.mzw, {
                className: x.__invalid_footer,
                children: (0, a.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: x.__invalid_goBackButton,
                    children: (0, a.jsx)(l.zxk, {
                        variant: 'critical-primary',
                        text: u.intl.string(u.t.R3BPHx),
                        loading: m,
                        onClick: g
                    })
                })
            })
        ]
    });
}

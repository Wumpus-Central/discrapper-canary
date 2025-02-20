n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(570140),
    c = n(358820),
    d = n(841699),
    u = n(181348);
function h() {
    let [e, t] = a.useState(30),
        n = () => {
            s.Z.dispatch({
                type: 'VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME',
                timeInSeconds: e
            });
        };
    return (0, r.jsx)(o.zJl, {
        className: l()(d.panel),
        children: (0, r.jsxs)('div', {
            className: u.panelInner,
            children: [
                (0, r.jsx)(o.Text, {
                    className: u.panelHeader,
                    variant: 'text-lg/bold',
                    children: 'Voice Filters'
                }),
                (0, r.jsxs)('div', {
                    className: u.panelRow,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: 'Set number of seconds remaining in countdown'
                        }),
                        (0, r.jsx)(o.oil, {
                            defaultValue: 30,
                            onChange: (e) => {
                                t(parseInt(e));
                            }
                        }),
                        (0, r.jsx)(o.zxk, {
                            size: o.zxk.Sizes.SMALL,
                            onClick: () => n(),
                            children: 'Set'
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: u.panelRow,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset to API values'
                        }),
                        (0, r.jsx)(o.zxk, {
                            size: o.zxk.Sizes.SMALL,
                            onClick: () => {
                                (0, c.wV)();
                            },
                            children: 'Reset'
                        })
                    ]
                })
            ]
        })
    });
}

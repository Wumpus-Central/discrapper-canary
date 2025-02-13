n.d(t, { Z: () => h }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(570140),
    c = n(358820),
    d = n(658951),
    u = n(570434);
function h() {
    let [e, t] = r.useState(30),
        n = () => {
            s.Z.dispatch({
                type: 'VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME',
                timeInSeconds: e
            });
        };
    return (0, a.jsx)(o.zJl, {
        className: i()(d.panel),
        children: (0, a.jsxs)('div', {
            className: u.panelInner,
            children: [
                (0, a.jsx)(o.Text, {
                    className: u.panelHeader,
                    variant: 'text-lg/bold',
                    children: 'Voice Filters'
                }),
                (0, a.jsxs)('div', {
                    className: u.panelRow,
                    children: [
                        (0, a.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: 'Set number of seconds remaining in countdown'
                        }),
                        (0, a.jsx)(o.oil, {
                            defaultValue: 30,
                            onChange: (e) => {
                                t(parseInt(e));
                            }
                        }),
                        (0, a.jsx)(o.zxk, {
                            size: o.zxk.Sizes.SMALL,
                            onClick: () => n(),
                            children: 'Set'
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: u.panelRow,
                    children: [
                        (0, a.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset to API values'
                        }),
                        (0, a.jsx)(o.zxk, {
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

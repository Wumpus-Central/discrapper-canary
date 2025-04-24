n.d(t, { Z: () => d }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(481060),
    i = n(570140),
    s = n(358820),
    o = n(616257),
    c = n(493733);
function d() {
    let [e, t] = r.useState(30),
        n = () => {
            i.Z.dispatch({
                type: 'VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME',
                timeInSeconds: e
            });
        };
    return (0, a.jsx)(l.zJl, {
        className: o.panel,
        children: (0, a.jsxs)('div', {
            className: c.panelInner,
            children: [
                (0, a.jsx)(l.Text, {
                    className: c.panelHeader,
                    variant: 'text-lg/bold',
                    children: 'Voice Filters'
                }),
                (0, a.jsxs)('div', {
                    className: c.panelRow,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Set number of seconds remaining in countdown'
                        }),
                        (0, a.jsx)(l.oil, {
                            defaultValue: 30,
                            onChange: (e) => {
                                t(parseInt(e));
                            }
                        }),
                        (0, a.jsx)(l.zxk, {
                            size: l.zxk.Sizes.SMALL,
                            onClick: () => n(),
                            children: 'Set'
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: c.panelRow,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset to API values'
                        }),
                        (0, a.jsx)(l.zxk, {
                            size: l.zxk.Sizes.SMALL,
                            onClick: () => {
                                (0, s.wV)();
                            },
                            children: 'Reset'
                        })
                    ]
                })
            ]
        })
    });
}

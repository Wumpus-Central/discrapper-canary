n.d(t, { Z: () => m }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(481060),
    i = n(570140),
    s = n(358820),
    o = n(585483),
    c = n(981631),
    d = n(616257),
    u = n(493733);
function m() {
    let [e, t] = r.useState(30),
        n = () => {
            i.Z.dispatch({
                type: 'VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME',
                timeInSeconds: e
            });
        };
    return (0, a.jsx)(l.zJl, {
        className: d.panel,
        children: (0, a.jsxs)('div', {
            className: u.panelInner,
            children: [
                (0, a.jsx)(l.Text, {
                    className: u.panelHeader,
                    variant: 'text-lg/bold',
                    children: 'Voice Filters'
                }),
                (0, a.jsxs)('div', {
                    className: u.panelRow,
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
                    className: u.panelRow,
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
                }),
                (0, a.jsx)('div', {
                    className: u.panelRow,
                    children: (0, a.jsx)(l.zxk, {
                        size: l.zxk.Sizes.SMALL,
                        onClick: () => {
                            o.S.dispatch(c.CkL.OPEN_VOICE_FILTER_POPOUT);
                        },
                        children: 'Open voice filters panel'
                    })
                })
            ]
        })
    });
}

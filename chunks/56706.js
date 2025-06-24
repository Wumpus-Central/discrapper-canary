n.d(t, { Z: () => p }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(481060),
    i = n(570140),
    s = n(750180),
    o = n(358820),
    c = n(585483),
    d = n(981631),
    u = n(616257),
    m = n(493733);
function p() {
    let [e, t] = r.useState(30),
        n = () => {
            i.Z.dispatch({
                type: 'VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME',
                timeInSeconds: e
            });
        },
        p = r.useCallback(() => {
            i.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: s.O.LOADING
            });
        }, []);
    return (0, a.jsx)(l.zJl, {
        className: u.panel,
        children: (0, a.jsxs)('div', {
            className: m.panelInner,
            children: [
                (0, a.jsx)(l.Text, {
                    className: m.panelHeader,
                    variant: 'text-lg/bold',
                    children: 'Voice Filters'
                }),
                (0, a.jsxs)('div', {
                    className: m.panelRow,
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
                    className: m.panelRow,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset to API values'
                        }),
                        (0, a.jsx)(l.zxk, {
                            size: l.zxk.Sizes.SMALL,
                            onClick: () => {
                                (0, o.wV)();
                            },
                            children: 'Reset'
                        })
                    ]
                }),
                (0, a.jsxs)('div', {
                    className: m.panelRow,
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: "Pretend the native module is loading so when you close your app it'll look as if it crashed on load"
                        }),
                        (0, a.jsx)(l.zxk, {
                            size: l.zxk.Sizes.SMALL,
                            onClick: p,
                            children: 'Pretend'
                        })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: m.panelRow,
                    children: (0, a.jsx)(l.zxk, {
                        size: l.zxk.Sizes.SMALL,
                        onClick: () => {
                            c.S.dispatch(d.CkL.OPEN_VOICE_FILTER_POPOUT);
                        },
                        children: 'Open voice filters panel'
                    })
                })
            ]
        })
    });
}

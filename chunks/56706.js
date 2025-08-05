(a.d(t, { Z: () => p }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(481060),
    i = a(570140),
    s = a(750180),
    o = a(358820),
    c = a(585483),
    d = a(981631),
    u = a(616257),
    m = a(493733);
function p() {
    let [e, t] = r.useState(30),
        a = () => {
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
    return (0, n.jsx)(l.zJl, {
        className: u.panel,
        children: (0, n.jsxs)('div', {
            className: m.panelInner,
            children: [
                (0, n.jsx)(l.Text, {
                    className: m.panelHeader,
                    variant: 'text-lg/bold',
                    children: 'Voice Filters'
                }),
                (0, n.jsxs)('div', {
                    className: m.panelRow,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Set number of seconds remaining in countdown'
                        }),
                        (0, n.jsx)(l.oil, {
                            defaultValue: 30,
                            onChange: (e) => {
                                t(parseInt(e));
                            }
                        }),
                        (0, n.jsx)(l.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: 'Set',
                            onClick: () => a()
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: m.panelRow,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: 'Reset to API values'
                        }),
                        (0, n.jsx)(l.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: 'Reset',
                            onClick: () => {
                                (0, o.wV)();
                            }
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: m.panelRow,
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: "Pretend the native module is loading so when you close your app it'll look as if it crashed on load"
                        }),
                        (0, n.jsx)(l.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: 'Pretend',
                            onClick: p
                        })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: m.panelRow,
                    children: (0, n.jsx)(l.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: 'Open voice filters panel',
                        onClick: () => {
                            c.S.dispatch(d.CkL.OPEN_VOICE_FILTER_POPOUT);
                        }
                    })
                })
            ]
        })
    });
}

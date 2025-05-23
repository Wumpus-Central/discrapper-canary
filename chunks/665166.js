n.d(t, { Z: () => d }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(66685),
    l = n(481060),
    a = n(267631),
    o = n(639618),
    c = n(388032);
function d() {
    r.useSyncExternalStore(c.intl.onLocaleChange, () => c.intl.currentLocale);
    let [, e] = r.useState({});
    return (
        r.useEffect(() => {
            (0, s.waitForAllDefaultIntlMessagesLoaded)().then(() => {
                e({});
            });
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.PhF, {
                    options: [
                        {
                            value: 'en-US',
                            label: 'English'
                        },
                        {
                            value: 'fr',
                            label: 'French'
                        }
                    ],
                    isSelected: (e) => e === c.intl.currentLocale,
                    select: (e) => c.intl.setLocale(e),
                    serialize: (e) => e
                }),
                (0, i.jsx)(l.LZC, { size: 32 }),
                (0, i.jsxs)(l.hjN, {
                    tag: l.RB0.H1,
                    children: [
                        (0, i.jsx)(l.Text, {
                            tag: 'div',
                            variant: 'heading-lg/bold',
                            children: c.intl.format(o.Z.JJ0wpK, {})
                        }),
                        (0, i.jsx)(l.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(a.Z.swfLzc, {})
                        }),
                        (0, i.jsx)(l.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(o.Z['rmps8/'], {})
                        }),
                        (0, i.jsx)(l.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(o.Z.uczI4u, { linkTarget: console.log })
                        }),
                        (0, i.jsx)(l.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(o.Z.rdfRys, {})
                        }),
                        (0, i.jsx)(l.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(o.Z['Q+eyqq'], { count: 1 })
                        }),
                        (0, i.jsx)(l.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(o.Z.XOdbAw, {
                                username: 'some user',
                                usernameHook: (e) =>
                                    (0, i.jsx)('span', {
                                        style: {
                                            backgroundColor: 'green',
                                            color: 'white',
                                            borderRadius: 4,
                                            paddingInline: 6,
                                            paddingBlock: 0,
                                            lineHeight: 1,
                                            fontSize: '0.85em'
                                        },
                                        children: e
                                    })
                            })
                        })
                    ]
                })
            ]
        })
    );
}

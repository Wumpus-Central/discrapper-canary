n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(164484),
    a = n(481060),
    l = n(267631),
    o = n(639618),
    c = n(388032);
function d() {
    i.useSyncExternalStore(c.NW.onLocaleChange, () => c.NW.currentLocale);
    let [, e] = i.useState({});
    return (
        i.useEffect(() => {
            (0, s.waitForAllDefaultIntlMessagesLoaded)().then(() => {
                e({});
            });
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.PhF, {
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
                    isSelected: (e) => e === c.NW.currentLocale,
                    select: (e) => c.NW.setLocale(e),
                    serialize: (e) => e
                }),
                (0, r.jsx)(a.LZC, { size: 32 }),
                (0, r.jsxs)(a.hjN, {
                    tag: a.RB0.H1,
                    children: [
                        (0, r.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'heading-lg/bold',
                            children: c.NW.format(o.Z.JJ0wpK, {})
                        }),
                        (0, r.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.NW.format(l.Z.swfLzc, {})
                        }),
                        (0, r.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.NW.format(o.Z['rmps8/'], {})
                        }),
                        (0, r.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.NW.format(o.Z.uczI4u, { linkTarget: console.log })
                        }),
                        (0, r.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.NW.format(o.Z.rdfRys, {})
                        }),
                        (0, r.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.NW.format(o.Z['Q+eyqq'], { count: 1 })
                        }),
                        (0, r.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.NW.format(o.Z.XOdbAw, {
                                username: 'some user',
                                usernameHook: (e) =>
                                    (0, r.jsx)('span', {
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

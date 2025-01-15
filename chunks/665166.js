n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(969090),
    a = n(481060),
    l = n(759136),
    o = n(507182),
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
                (0, i.jsx)(a.Select, {
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
                (0, i.jsx)(a.Spacer, { size: 32 }),
                (0, i.jsxs)(a.FormSection, {
                    tag: a.FormTitleTags.H1,
                    children: [
                        (0, i.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'heading-lg/bold',
                            children: c.intl.format(o.Z.JJ0wpK, {})
                        }),
                        (0, i.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(l.Z.swfLzc, {})
                        }),
                        (0, i.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(o.Z['rmps8/'], {})
                        }),
                        (0, i.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(o.Z.uczI4u, { linkTarget: console.log })
                        }),
                        (0, i.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(o.Z.rdfRys, {})
                        }),
                        (0, i.jsx)(a.Text, {
                            tag: 'div',
                            variant: 'text-md/normal',
                            children: c.intl.format(o.Z['Q+eyqq'], { count: 1 })
                        }),
                        (0, i.jsx)(a.Text, {
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

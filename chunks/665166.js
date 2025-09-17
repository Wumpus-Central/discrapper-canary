n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(631562),
    o = n(481060),
    s = n(48480),
    l = n(931115),
    c = n(388032);
function u() {
    i.useSyncExternalStore(c.intl.onLocaleChange, () => c.intl.currentLocale);
    let [, e] = i.useState({});
    return (
        i.useEffect(() => {
            (0, a.waitForAllDefaultIntlMessagesLoaded)().then(() => {
                e({});
            });
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.PhF, {
                    options: [
                        {
                            value: "en-US",
                            label: "English",
                        },
                        {
                            value: "fr",
                            label: "French",
                        },
                    ],
                    isSelected: (e) => e === c.intl.currentLocale,
                    select: (e) => c.intl.setLocale(e),
                    serialize: (e) => e,
                }),
                (0, r.jsx)(o.LZC, { size: 32 }),
                (0, r.jsxs)(o.hjN, {
                    tag: o.RB0.H1,
                    children: [
                        (0, r.jsx)(o.Text, {
                            tag: "div",
                            variant: "heading-lg/bold",
                            children: c.intl.format(l.Z.JJ0wpK, {}),
                        }),
                        (0, r.jsx)(o.Text, {
                            tag: "div",
                            variant: "text-md/normal",
                            children: c.intl.format(s.Z.swfLzc, {}),
                        }),
                        (0, r.jsx)(o.Text, {
                            tag: "div",
                            variant: "text-md/normal",
                            children: c.intl.format(l.Z["rmps8/"], {}),
                        }),
                        (0, r.jsx)(o.Text, {
                            tag: "div",
                            variant: "text-md/normal",
                            children: c.intl.format(l.Z.uczI4u, { linkTarget: console.log }),
                        }),
                        (0, r.jsx)(o.Text, {
                            tag: "div",
                            variant: "text-md/normal",
                            children: c.intl.format(l.Z.rdfRys, {}),
                        }),
                        (0, r.jsx)(o.Text, {
                            tag: "div",
                            variant: "text-md/normal",
                            children: c.intl.format(l.Z["Q+eyqq"], { count: 1 }),
                        }),
                        (0, r.jsx)(o.Text, {
                            tag: "div",
                            variant: "text-md/normal",
                            children: c.intl.format(l.Z.XOdbAw, {
                                username: "some user",
                                usernameHook: (e) =>
                                    (0, r.jsx)("span", {
                                        style: {
                                            backgroundColor: "green",
                                            color: "white",
                                            borderRadius: 4,
                                            paddingInline: 6,
                                            paddingBlock: 0,
                                            lineHeight: 1,
                                            fontSize: "0.85em",
                                        },
                                        children: e,
                                    }),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}

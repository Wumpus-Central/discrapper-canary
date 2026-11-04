var d = a(561243),
    c = a(515718),
    n = a(84540),
    s = a(836602);
a.d(
    t,
    {},
    {
        T: async function () {
            let {
                    tryItOutAvatar: e,
                    tryItOutDisplayNameStyles: t,
                    tryItOutThemeColors: a,
                    tryItOutBanner: d,
                    tryItOutCustomTypingIndicatorStyle: r,
                } = s.A.getTryItOutChanges(),
                { pendingDisplayNameStyles: o, pendingCustomTypingIndicatorStyle: f } = s.A.getPendingChanges();
            if (
                ((0, n.p)({ avatar: e, themeColors: a }),
                void 0 === o && (0, n.p)({ displayNameStyles: t }),
                void 0 === f && (0, n.p)({ customTypingIndicatorStyle: r }),
                null != d)
            )
                if (d.imageUri.startsWith("https:"))
                    try {
                        let e = await (async function (e) {
                            let t = await fetch(e),
                                a = await t.blob();
                            return (0, c.We)(a);
                        })(d.imageUri);
                        (0, n.p)({ banner: { ...d, imageUri: e } });
                    } catch {}
                else (0, n.p)({ banner: d });
        },
        t: function () {
            let { tryItOutAvatar: e, tryItOutDisplayNameStyles: t } = s.A.getTryItOutChanges();
            (0, d.s)({ displayNameStyles: t, avatar: e });
        },
    },
);

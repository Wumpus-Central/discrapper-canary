a.d(t, { T: () => r });
var d = a(515718),
    c = a(84540),
    n = a(836602);
async function s(e) {
    let t = await fetch(e),
        a = await t.blob();
    return (0, d.We)(a);
}
async function r() {
    let {
            tryItOutAvatar: e,
            tryItOutDisplayNameStyles: t,
            tryItOutThemeColors: a,
            tryItOutBanner: d,
            tryItOutCustomTypingIndicatorStyle: r,
        } = n.A.getTryItOutChanges(),
        { pendingDisplayNameStyles: o, pendingCustomTypingIndicatorStyle: f } = n.A.getPendingChanges();
    if (
        ((0, c.p)({ avatar: e, themeColors: a }),
        void 0 === o && (0, c.p)({ displayNameStyles: t }),
        void 0 === f && (0, c.p)({ customTypingIndicatorStyle: r }),
        null != d)
    )
        if (d.imageUri.startsWith("https:"))
            try {
                let e = await s(d.imageUri);
                (0, c.p)({ banner: { ...d, imageUri: e } });
            } catch {}
        else (0, c.p)({ banner: d });
}

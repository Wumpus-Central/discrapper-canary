a.d(t, { T: () => r });
var d = a(515718),
    c = a(84540),
    s = a(836602);
async function n(e) {
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
        } = s.A.getTryItOutChanges(),
        { pendingDisplayNameStyles: r } = s.A.getPendingChanges();
    if (((0, c.p)({ avatar: e, themeColors: a }), void 0 === r && (0, c.p)({ displayNameStyles: t }), null != d))
        if (d.imageUri.startsWith("https:"))
            try {
                let e = await n(d.imageUri);
                (0, c.p)({ banner: { ...d, imageUri: e } });
            } catch {}
        else (0, c.p)({ banner: d });
}

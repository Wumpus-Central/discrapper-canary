a.d(t, { T: () => f, t: () => o });
var d = a(561243),
    c = a(515718),
    n = a(84540),
    s = a(836602);
async function r(e) {
    let t = await fetch(e),
        a = await t.blob();
    return (0, c.We)(a);
}
function o() {
    let { tryItOutAvatar: e, tryItOutDisplayNameStyles: t } = s.A.getTryItOutChanges();
    (0, d.s)({ displayNameStyles: t, avatar: e });
}
async function f() {
    let {
            tryItOutAvatar: e,
            tryItOutDisplayNameStyles: t,
            tryItOutThemeColors: a,
            tryItOutBanner: d,
            tryItOutCustomTypingIndicatorStyle: c,
        } = s.A.getTryItOutChanges(),
        { pendingDisplayNameStyles: o, pendingCustomTypingIndicatorStyle: f } = s.A.getPendingChanges();
    if (
        ((0, n.p)({ avatar: e, themeColors: a }),
        void 0 === o && (0, n.p)({ displayNameStyles: t }),
        void 0 === f && (0, n.p)({ customTypingIndicatorStyle: c }),
        null != d)
    )
        if (d.imageUri.startsWith("https:"))
            try {
                let e = await r(d.imageUri);
                (0, n.p)({ banner: { ...d, imageUri: e } });
            } catch {}
        else (0, n.p)({ banner: d });
}

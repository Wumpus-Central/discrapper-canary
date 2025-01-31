n.d(t, { K: () => r });
var i = n(998502);
async function r(e) {
    try {
        return (await i.ZP.getSetting('USERNAME_PREFIX', '')) + e;
    } catch (e) {}
    return e;
}

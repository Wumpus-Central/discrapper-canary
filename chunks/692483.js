n.d(t, { K: () => i });
var r = n(998502);
async function i(e) {
    try {
        return (await r.ZP.getSetting('USERNAME_PREFIX', '')) + e;
    } catch (e) {}
    return e;
}

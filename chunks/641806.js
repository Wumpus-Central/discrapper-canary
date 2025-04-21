n.d(t, { $: () => l });
var r = n(970648),
    i = n(981631);
async function l(e) {
    let t = r.Z.generateNonce();
    try {
        let n = await r.Z.createHandoffToken(t);
        return i.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, e);
    } catch (t) {
        return '//'.concat(window.GLOBAL_ENV.DEVELOPERS_ENDPOINT, '/').concat(e);
    }
}

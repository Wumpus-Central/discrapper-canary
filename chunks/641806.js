n.d(t, { $: () => l });
var i = n(970648),
    r = n(981631);
async function l(e) {
    let t = i.Z.generateNonce();
    try {
        let n = await i.Z.createHandoffToken(t);
        return r.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, e);
    } catch {
        return '//'.concat(window.GLOBAL_ENV.DEVELOPERS_ENDPOINT, '/').concat(e);
    }
}

n.d(t, { A: () => a });
var r = n(710845),
    i = n(998502);
let o = new r.Z('cleanupUnusedVoiceFilterFiles');
async function a(e) {
    try {
        let { deletedFiles: t, errors: n } = await i.ZP.cleanupUnusedVoiceFilterFiles(e);
        (t.length > 0 && o.info('VF cleanup completed', { deletedFiles: t }), n.length > 0 && o.warn('VF cleanup had errors', { errors: n }));
    } catch (e) {
        o.warn('VF cleanup failed', { error: e });
    }
}

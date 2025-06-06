n.d(t, { A: () => o });
var r = n(710845),
    i = n(998502);
let a = new r.Z('cleanupUnusedVoiceFilterFiles');
async function o(e) {
    try {
        let { deletedFiles: t, errors: n } = await i.ZP.cleanupUnusedVoiceFilterFiles(e);
        t.length > 0 && a.info('VF cleanup completed', { deletedFiles: t }), n.length > 0 && a.warn('VF cleanup had errors', { errors: n });
    } catch (e) {
        a.warn('VF cleanup failed', { error: e });
    }
}

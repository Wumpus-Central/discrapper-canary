n.d(t, {
    fz: () => h,
    ge: () => E,
    rk: () => m,
    wV: () => g
});
var i = n(512722),
    r = n.n(i),
    a = n(259443),
    s = n(570140),
    o = n(314897),
    l = n(626135),
    u = n(960048),
    c = n(998502),
    d = n(709706),
    f = n(750180);
let _ = new a.Yd('VoiceFilterActionCreators'),
    p = !1;
function h(e) {
    let { url: t, modelId: n, fileName: i } = e,
        r = d.Z.getModelState(n);
    (null == r ? void 0 : r.status) !== f.L.DOWNLOADING &&
        (s.Z.dispatch({
            type: 'VOICE_FILTER_DOWNLOAD_STARTED',
            ...e
        }),
        c.ZP.downloadVoiceFilterFile(t, i, (t) => {
            let { downloadedBytes: n, totalBytes: i } = t;
            s.Z.dispatch({
                type: 'VOICE_FILTER_DOWNLOAD_PROGRESS',
                ...e,
                downloadedBytes: n,
                totalBytes: i
            });
        })
            .then(() => {
                s.Z.dispatch({
                    type: 'VOICE_FILTER_DOWNLOAD_READY',
                    ...e
                });
            })
            .catch((t) => {
                (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD)
                    ? _.info('User canceled the download for Voice Filter dependency', e)
                    : _.error('Failed to fetch voice filter model', {
                          reason: t,
                          ...e
                      }),
                    s.Z.dispatch({
                        type: 'VOICE_FILTER_DOWNLOAD_FAILED',
                        ...e,
                        error: t
                    });
            }));
}
function m(e) {
    c.ZP.getVoiceFilters()
        .setVoiceFilter({ name: e })
        .then(
            () => {
                s.Z.dispatch({
                    type: 'VOICE_FILTER_APPLIED',
                    voiceFilterId: e
                });
            },
            (t) => {
                _.error('failed to set voice filter', t),
                    s.Z.dispatch({
                        type: 'VOICE_FILTER_APPLY_FAILED',
                        voiceFilterId: e,
                        error: t
                    });
            }
        );
}
async function g() {
    if (p) return;
    let e = o.default.getToken(),
        t = l.default.getSuperPropertiesBase64();
    r()(null != e, 'Authentication token must be available'), r()(null != t, 'Analytics superProperties must be available');
    try {
        p = !0;
        let n = c.ZP.getVoiceFilters(),
            i = await n.fetchCatalog(e, t);
        s.Z.dispatch({
            type: 'VOICE_FILTER_CATALOG_FETCH_SUCCESS',
            catalog: JSON.parse(i)
        });
    } catch (e) {
        _.warn('Failed to refresh voice filters catalog: '.concat(e.message)), u.Z.captureException(e);
    } finally {
        p = !1;
    }
}
function E() {
    s.Z.dispatch({ type: 'VOICE_FILTER_DOWNLOAD_CANCELED' });
}

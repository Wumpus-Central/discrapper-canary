n.d(t, {
    fz: () => v,
    ge: () => T,
    r5: () => b,
    rk: () => y,
    wV: () => I
});
var i = n(512722),
    r = n.n(i),
    a = n(259443),
    s = n(570140),
    o = n(314897),
    l = n(131951),
    u = n(626135),
    c = n(358085),
    d = n(960048),
    f = n(998502),
    _ = n(743498),
    p = n(709706),
    h = n(750180);
let m = new a.Yd('VoiceFilterActionCreators'),
    g = !1,
    E = !1;
function v(e) {
    let { url: t, modelId: n, fileName: i } = e,
        r = p.Z.getModelState(n);
    (null == r ? void 0 : r.status) !== h.L.DOWNLOADING &&
        (s.Z.dispatch({
            type: 'VOICE_FILTER_DOWNLOAD_STARTED',
            ...e
        }),
        f.ZP.downloadVoiceFilterFile(t, i, (t) => {
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
                    ? m.info('User canceled the download for Voice Filter dependency', e)
                    : m.error('Failed to fetch voice filter model', {
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
function y(e) {
    f.ZP.getVoiceFilters()
        .setVoiceFilter({ name: e })
        .then(
            () => {
                s.Z.dispatch({
                    type: 'VOICE_FILTER_APPLIED',
                    voiceFilterId: e
                });
            },
            (t) => {
                m.error('failed to set voice filter', t),
                    s.Z.dispatch({
                        type: 'VOICE_FILTER_APPLY_FAILED',
                        voiceFilterId: e,
                        error: t
                    });
            }
        );
}
async function I() {
    if (g) return;
    let e = o.default.getToken(),
        t = u.default.getSuperPropertiesBase64();
    r()(null != e, 'Authentication token must be available'), r()(null != t, 'Analytics superProperties must be available');
    try {
        g = !0;
        let n = f.ZP.getVoiceFilters(),
            i = await n.fetchCatalog(e, t);
        await s.Z.dispatch({
            type: 'VOICE_FILTER_CATALOG_FETCH_SUCCESS',
            catalog: JSON.parse(i)
        });
    } catch (e) {
        m.warn('Failed to refresh voice filters catalog: '.concat(e.message)), d.Z.captureException(e);
    } finally {
        g = !1;
    }
}
function T() {
    s.Z.dispatch({ type: 'VOICE_FILTER_DOWNLOAD_CANCELED' });
}
async function b() {
    if (!(E || __OVERLAY__)) {
        if (((E = !0), !(0, c.isWindows)() && !(0, c.isMac)())) {
            s.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: h.O.UNSUPPORTED
            });
            return;
        }
        try {
            s.Z.dispatch({
                type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                state: h.O.LOADING
            }),
                await f.ZP.ensureModule('discord_voice_filters');
            let e = f.ZP.getVoiceFilters();
            await e.setupResources(),
                await I(),
                (0, _.v6)(l.Z.getMostRecentlyRequestedVoiceFilter()),
                s.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: h.O.LOADED
                });
        } catch (e) {
            m.warn('Failed to load Voice Filters module: '.concat(e.message)),
                d.Z.captureException(e),
                s.Z.dispatch({
                    type: 'VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE',
                    state: h.O.FAILED
                }),
                (E = !1);
        }
    }
}

let r;
n.d(t, {
    K: () => c,
    M: () => u
}),
    n(388685),
    n(415506);
var i = n(710845),
    a = n(998502),
    o = n(987650);
let s = new i.Z('OverlayModuleUtils'),
    l = null;
function c() {
    function e(e) {
        for (let t of ['createHostProcess', 'connectProcess', 'disconnectProcess', 'destroyHostProcess']) null == e[t] && (s.info('polyfilling OverlayModule.'.concat(t, '(); Overlay module is probably out of date.')), (e[t] = () => void 0));
        return e;
    }
    async function t() {
        if (!o.iP) throw (s.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay is not supported on this platform.'));
        try {
            return await a.ZP.ensureModule('discord_overlay2'), (r = e(a.ZP.requireModule('discord_overlay2')));
        } catch (e) {
            s.error('failed ensuring discord_overlay2', e);
            return;
        }
    }
    return null != r ? Promise.resolve(r) : (null == l && (l = t()), l);
}
function u() {
    if (null == r)
        try {
            r = a.ZP.requireModule('discord_overlay2');
        } catch (e) {
            s.error('failed ensuring discord_overlay2', e);
            return;
        }
    return r;
}

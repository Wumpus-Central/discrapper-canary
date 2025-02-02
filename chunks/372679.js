let i;
n.d(t, {
    K: () => u,
    M: () => c
}),
    n(47120),
    n(411104);
var r = n(710845),
    a = n(998502),
    s = n(987650);
let o = new r.Z('OverlayModuleUtils'),
    l = null;
function u() {
    function e(e) {
        for (let t of ['createHostProcess', 'connectProcess', 'disconnectProcess', 'destroyHostProcess']) null == e[t] && (o.info('polyfilling OverlayModule.'.concat(t, '(); Overlay module is probably out of date.')), (e[t] = () => void 0));
        return e;
    }
    async function t() {
        if (!s.iP) throw (o.error('Attempted to load overlay on an unsupported platform.'), Error('Overlay is not supported on this platform.'));
        try {
            return await a.ZP.ensureModule('discord_overlay2'), (i = e(a.ZP.requireModule('discord_overlay2')));
        } catch (e) {
            o.error('failed ensuring discord_overlay2', e);
            return;
        }
    }
    return null != i ? Promise.resolve(i) : (null == l && (l = t()), l);
}
function c() {
    if (null == i)
        try {
            i = a.ZP.requireModule('discord_overlay2');
        } catch (e) {
            o.error('failed ensuring discord_overlay2', e);
            return;
        }
    return i;
}

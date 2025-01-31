n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(433517),
    a = n(481060),
    s = n(358085);
let o = {
    show(e) {
        (0, a.ZDy)(async () => {
            let { default: t } = await n.e('2435').then(n.bind(n, 821606));
            return (n) =>
                (0, i.jsx)(t, {
                    ...n,
                    url: e
                });
        });
    },
    getBlockedDomains() {
        if ((0, s.isDesktop)()) {
            let e = r.K.get('BlockedDomainsV2');
            return Promise.resolve(null == e ? [] : e.split('\n'));
        }
        return Promise.resolve([]);
    },
    saveBlockedDomains(e) {
        (0, s.isDesktop)() && r.K.set('BlockedDomainsV2', e.join('\n'));
    }
};

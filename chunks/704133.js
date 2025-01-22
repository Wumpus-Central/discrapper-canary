var i = r(200651);
r(192379);
var a = r(433517),
    o = r(481060),
    s = r(358085);
n.Z = {
    show(e) {
        (0, o.openModalLazy)(async () => {
            let { default: n } = await r.e('2435').then(r.bind(r, 821606));
            return (r) =>
                (0, i.jsx)(n, {
                    ...r,
                    url: e
                });
        });
    },
    getBlockedDomains() {
        if ((0, s.isDesktop)()) {
            let e = a.K.get('BlockedDomainsV2');
            return Promise.resolve(null == e ? [] : e.split('\n'));
        }
        return Promise.resolve([]);
    },
    saveBlockedDomains(e) {
        (0, s.isDesktop)() && a.K.set('BlockedDomainsV2', e.join('\n'));
    }
};

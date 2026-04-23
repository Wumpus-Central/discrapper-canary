n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(60501);
let r = {
    open() {
        (0, l.openModalLazy)(async () => {
            if (s.J.getConfig({ location: "EnableCommunityModalActionCreators" }).enabled) {
                let { default: e } = await Promise.all([n.e("20115"), n.e("1378")]).then(n.bind(n, 939006));
                return (t) => (0, i.jsx)(e, { ...t });
            }
            {
                let { default: e } = await n.e("92853").then(n.bind(n, 135668));
                return (t) => (0, i.jsx)(e, { ...t });
            }
        });
    },
};

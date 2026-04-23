s.d(t, { p: () => n });
var i = s(627968);
s(64700);
var r = s(192308);
let n = (e) => {
    let { analyticsLocation: t, onClose: n } = e;
    (0, r.openModalLazy)(async () => {
        let { default: e } = await s.e("18630").then(s.bind(s, 826789));
        return (s) => (0, i.jsx)(e, { ...s, analyticsSource: t, onClose: () => (n?.(), s.onClose?.()) });
    });
};

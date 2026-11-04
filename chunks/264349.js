var r = t(477900);
t(582128);
var i = t(192308);
function l(e) {
    return new Promise((n) => {
        (0, i.mM)(() =>
            e(
                function () {
                    n(!0);
                },
                (e) => (n(!1), e()),
            ),
        );
    });
}
t.d(
    n,
    {},
    {
        Zy: function (e, n) {
            return l(async (i, l) => {
                let { default: a } = await t.e(78785).then(t.bind(t, 92696));
                return (t) =>
                    (0, r.jsx)(a, {
                        ...t,
                        ruleName: e,
                        keyword: n,
                        onConfirm: i,
                        onClose: () => l(t.onClose),
                        onCancel: () => l(t.onClose),
                    });
            });
        },
        cT: function (e) {
            return (n) =>
                l(async (i, l) => {
                    let { default: a } = await t.e(299979).then(t.bind(t, 146502));
                    function s() {
                        (n(), i());
                    }
                    return (n) =>
                        (0, r.jsx)(a, {
                            ruleName: e,
                            ...n,
                            onConfirm: s,
                            onClose: () => l(n.onClose),
                            onCancel: () => l(n.onClose),
                        });
                });
        },
        ih: function (e) {
            return l(async (n, i) => {
                let { default: l } = await t.e(706322).then(t.bind(t, 49065));
                return (t) =>
                    (0, r.jsx)(l, {
                        ...t,
                        ruleName: e,
                        onConfirm: n,
                        onClose: () => i(t.onClose),
                        onCancel: () => i(t.onClose),
                    });
            });
        },
    },
);

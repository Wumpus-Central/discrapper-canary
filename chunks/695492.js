n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(607187),
    a = n(112560),
    s = n(981631),
    o = n(388032),
    c = n(414414),
    d = n(800350);
function u(e) {
    let { channel: t, guild: u, width: h, inPopout: p } = e;
    return (0, i.jsx)(r.Z, {
        className: c.root,
        children: (0, i.jsx)(a.Z, {
            artURL: d,
            size: (0, a.L)(h),
            header: o.intl.string(o.t.O4FiWl),
            onCTAClick: () =>
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: u,
                                channel: t,
                                source: s.t4x.CHANNEL_CALL
                            });
                    },
                    { contextKey: p ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT }
                ),
            callToAction: o.intl.string(o.t.VINpSE)
        })
    });
}

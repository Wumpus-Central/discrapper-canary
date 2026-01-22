n.d(t, {
    A: () => l,
});
var r = n(627968),
    i = n(361158),
    a = n(954571),
    s = n(535855),
    o = n(652215);

function l(e) {
    a.default.track(o.HAw.CHECKPOINT_STARTED, {
        source: e,
    }),
        (0, i.B8)(
            (e) => {
                let { closeLayer: t } = e;
                return (0, r.jsx)(s.A, {
                    onClose: t,
                });
            },
            {
                disableAnimation: !0,
                showAppUnderLayer: !0,
            },
        );
}

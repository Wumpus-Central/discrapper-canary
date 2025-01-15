let n, i;
var r = s(200651);
s(192379);
var o = s(481060),
    a = s(570140),
    l = s(341382),
    c = s(981631);
let d = null;
function u(e) {
    null != n && e ? n() : null != i && i(), (n = null), (i = null);
}
t.Z = {
    init() {
        a.Z.subscribe('PREMIUM_REQUIRED_MODAL_OPEN', (e) => {
            if ((u(!1), (d = e.context), (n = e.resolve), (i = e.reject), c.e3s === e.context)) {
                let e;
                (e = !1),
                    (0, o.openModalLazy)(
                        async () => {
                            let { default: t } = await s.e('29393').then(s.bind(s, 134817));
                            return (s) => {
                                let { onClose: n, ...i } = s;
                                return (0, r.jsx)(t, {
                                    ...i,
                                    onClose: (t) => {
                                        (e = t), n();
                                    }
                                });
                            };
                        },
                        {
                            onCloseCallback: () => {
                                (0, l.M)(e);
                            }
                        }
                    );
            }
        }),
            a.Z.subscribe('PREMIUM_REQUIRED_MODAL_CLOSE', (e) => {
                let { shouldContinue: t } = e;
                (d = null), u(t);
            }),
            a.Z.subscribe('OVERLAY_SET_INPUT_LOCKED', (e) => {
                let { locked: t } = e;
                t && null != d && ((d = null), u(!1));
            });
    }
};

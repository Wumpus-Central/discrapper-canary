"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(253932),
    a = n(652215);
function o(e, t) {
    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = () =>
            (0, i.mMO)(
                async () => {
                    let { default: t } = await Promise.all([n.e("95782"), n.e("5697")]).then(n.bind(n, 308229));
                    return (n) => (0, r.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
                },
                { modalKey: "camera-preview", contextKey: t === a.BRT.POPOUT ? i.KX8 : i.SYi },
            );
    s.bm.getSetting() || o ? l() : e?.();
}

"use strict";
n.d(t, { h: () => h });
var r = n(439372),
    i = n(436283),
    s = n(954571),
    a = n(490203),
    o = n(49807),
    l = n(652215);
let u = "interaction_iframe_modal";
async function c(e) {
    let { openInteractionModal: t } = await Promise.all([
        n.e("8555"),
        n.e("90365"),
        n.e("28936"),
        n.e("92414"),
        n.e("49559"),
        n.e("90565"),
    ]).then(n.bind(n, 121338));
    t(e), s.default.track(l.HAw.OPEN_MODAL, { type: "interaction_modal", application_id: e.application.id });
}
function d(e) {
    (0, o.A)(e), s.default.track(l.HAw.OPEN_MODAL, { type: u, application_id: e.application.id });
}
function _(e) {
    let { application: t } = e,
        n = i.Ay.getIFrameModalApplicationId(),
        r = i.Ay.getIFrameModalKey();
    t.id === n && null != n && (0, a.A)(n, r);
}
function f(e, t) {
    let n = null != t ? Date.now() - t : void 0;
    s.default.track(l.HAw.MODAL_DISMISSED, { type: u, application_id: e.applicationId, duration_open_ms: n });
}
class p extends r.A {
    iframeModalOpenTimeMs = void 0;
    actions = {
        INTERACTION_MODAL_CREATE: (e) => {
            c(e);
        },
        INTERACTION_IFRAME_MODAL_CREATE: (e) => {
            (this.iframeModalOpenTimeMs = Date.now()), d(e);
        },
        INTERACTION_IFRAME_MODAL_CLOSE: (e) => {
            f(e, this.iframeModalOpenTimeMs), (this.iframeModalOpenTimeMs = void 0);
        },
        RPC_APP_DISCONNECTED: (e) => {
            _(e);
        },
    };
}
let h = new p();

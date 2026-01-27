n.d(t, {
    h: () => m,
}),
    n(896048);
var r = n(439372),
    i = n(436283),
    a = n(954571),
    o = n(490203),
    s = n(49807),
    l = n(652215);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = "interaction_iframe_modal";
async function d(e) {
    let { openInteractionModal: t } = await Promise.all([
        n.e("87093"),
        n.e("28936"),
        n.e("40215"),
        n.e("13088"),
        n.e("92414"),
        n.e("20941"),
        n.e("80717"),
    ]).then(n.bind(n, 121338));
    t(e),
        a.default.track(l.HAw.OPEN_MODAL, {
            type: "interaction_modal",
            application_id: e.application.id,
        });
}

function f(e) {
    (0, s.A)(e),
        a.default.track(l.HAw.OPEN_MODAL, {
            type: u,
            application_id: e.application.id,
        });
}

function p(e) {
    let { application: t } = e,
        n = i.Ay.getIFrameModalApplicationId(),
        r = i.Ay.getIFrameModalKey();
    t.id === n && null != n && (0, o.A)(n, r);
}

function _(e, t) {
    let n = null != t ? Date.now() - t : void 0;
    a.default.track(l.HAw.MODAL_DISMISSED, {
        type: u,
        application_id: e.applicationId,
        duration_open_ms: n,
    });
}
class h extends r.A {
    constructor(...e) {
        super(...e),
            c(this, "iframeModalOpenTimeMs", void 0),
            c(this, "actions", {
                INTERACTION_MODAL_CREATE: (e) => {
                    d(e);
                },
                INTERACTION_IFRAME_MODAL_CREATE: (e) => {
                    (this.iframeModalOpenTimeMs = Date.now()), f(e);
                },
                INTERACTION_IFRAME_MODAL_CLOSE: (e) => {
                    _(e, this.iframeModalOpenTimeMs), (this.iframeModalOpenTimeMs = void 0);
                },
                RPC_APP_DISCONNECTED: (e) => {
                    p(e);
                },
            });
    }
}
let m = new h();

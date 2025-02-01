n.d(t, { Z: () => m }), n(47120);
var i = n(147913),
    r = n(282397),
    a = n(626135),
    s = n(131595),
    o = n(475774),
    l = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = 'interaction_iframe_modal';
async function d(e) {
    let { openInteractionModal: t } = await Promise.all([n.e('22878'), n.e('66711'), n.e('46097'), n.e('8739'), n.e('86282'), n.e('30243'), n.e('97020')]).then(n.bind(n, 440934));
    t(e),
        a.default.track(l.rMx.OPEN_MODAL, {
            type: 'interaction_modal',
            application_id: e.application.id
        });
}
function f(e) {
    (0, o.Z)(e),
        a.default.track(l.rMx.OPEN_MODAL, {
            type: c,
            application_id: e.application.id
        });
}
function _(e) {
    let { application: t } = e,
        n = r.ZP.getIFrameModalApplicationId(),
        i = r.ZP.getIFrameModalKey();
    t.id === n && null != n && (0, s.Z)(n, i);
}
function p(e, t) {
    let n = null != t ? Date.now() - t : void 0;
    a.default.track(l.rMx.MODAL_DISMISSED, {
        type: c,
        application_id: e.applicationId,
        duration_open_ms: n
    });
}
class h extends i.Z {
    constructor(...e) {
        super(...e),
            u(this, 'iframeModalOpenTimeMs', void 0),
            u(this, 'actions', {
                INTERACTION_MODAL_CREATE: (e) => {
                    d(e);
                },
                INTERACTION_IFRAME_MODAL_CREATE: (e) => {
                    (this.iframeModalOpenTimeMs = Date.now()), f(e);
                },
                INTERACTION_IFRAME_MODAL_CLOSE: (e) => {
                    p(e, this.iframeModalOpenTimeMs), (this.iframeModalOpenTimeMs = void 0);
                },
                RPC_APP_DISCONNECTED: (e) => {
                    _(e);
                }
            });
    }
}
let m = new h();

n.d(t, { Z: () => m }), n(47120);
var r = n(147913),
    i = n(282397),
    o = n(626135),
    a = n(131595),
    s = n(475774),
    l = n(981631);
function c(e, t, n) {
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
let u = 'interaction_iframe_modal';
async function d(e) {
    let { openInteractionModal: t } = await Promise.all([n.e('25292'), n.e('22878'), n.e('74891'), n.e('46097'), n.e('8739'), n.e('86282'), n.e('30243'), n.e('40617')]).then(n.bind(n, 440934));
    t(e),
        o.default.track(l.rMx.OPEN_MODAL, {
            type: 'interaction_modal',
            application_id: e.application.id
        });
}
function f(e) {
    (0, s.Z)(e),
        o.default.track(l.rMx.OPEN_MODAL, {
            type: u,
            application_id: e.application.id
        });
}
function _(e) {
    let { application: t } = e,
        n = i.ZP.getIFrameModalApplicationId(),
        r = i.ZP.getIFrameModalKey();
    t.id === n && null != n && (0, a.Z)(n, r);
}
function p(e, t) {
    let n = null != t ? Date.now() - t : void 0;
    o.default.track(l.rMx.MODAL_DISMISSED, {
        type: u,
        application_id: e.applicationId,
        duration_open_ms: n
    });
}
class h extends r.Z {
    constructor(...e) {
        super(...e),
            c(this, 'iframeModalOpenTimeMs', void 0),
            c(this, 'actions', {
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

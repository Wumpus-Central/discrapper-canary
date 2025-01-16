var i = r(47120);
var a = r(147913),
    s = r(282397),
    o = r(626135),
    l = r(131595),
    u = r(475774),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = 'interaction_iframe_modal';
async function _(e) {
    let { openInteractionModal: n } = await Promise.all([r.e('73503'), r.e('72181'), r.e('66711'), r.e('86282'), r.e('46097'), r.e('8739'), r.e('24391'), r.e('8041')]).then(r.bind(r, 440934));
    n(e),
        o.default.track(c.rMx.OPEN_MODAL, {
            type: 'interaction_modal',
            application_id: e.application.id
        });
}
function h(e) {
    (0, u.Z)(e),
        o.default.track(c.rMx.OPEN_MODAL, {
            type: f,
            application_id: e.application.id
        });
}
function p(e) {
    let { application: n } = e,
        r = s.ZP.getIFrameModalApplicationId(),
        i = s.ZP.getIFrameModalKey();
    n.id === r && null != r && (0, l.Z)(r, i);
}
function m(e, n) {
    let r = null != n ? Date.now() - n : void 0;
    o.default.track(c.rMx.MODAL_DISMISSED, {
        type: f,
        application_id: e.applicationId,
        duration_open_ms: r
    });
}
class g extends a.Z {
    constructor(...e) {
        super(...e),
            d(this, 'iframeModalOpenTimeMs', void 0),
            d(this, 'actions', {
                INTERACTION_MODAL_CREATE: (e) => {
                    _(e);
                },
                INTERACTION_IFRAME_MODAL_CREATE: (e) => {
                    (this.iframeModalOpenTimeMs = Date.now()), h(e);
                },
                INTERACTION_IFRAME_MODAL_CLOSE: (e) => {
                    m(e, this.iframeModalOpenTimeMs), (this.iframeModalOpenTimeMs = void 0);
                },
                RPC_APP_DISCONNECTED: (e) => {
                    p(e);
                }
            });
    }
}
n.Z = new g();

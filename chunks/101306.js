"use strict";
n.d(t, { h: () => E });
var r = n(155718),
    i = n(439372),
    s = n(587895),
    a = n(436283),
    o = n(548965),
    l = n(954571),
    u = n(728458),
    c = n(490203),
    d = n(49807),
    _ = n(652215);
let f = "interaction_iframe_modal";
async function p(e) {
    let { openInteractionModal: t } = await Promise.all([
        n.e("25412"),
        n.e("374"),
        n.e("8555"),
        n.e("28936"),
        n.e("92414"),
        n.e("16419"),
        n.e("45253"),
        n.e("21533"),
    ]).then(n.bind(n, 121338));
    if (
        (t(e),
        l.default.track(_.HAw.OPEN_MODAL, { type: "interaction_modal", application_id: e.application.id }),
        o.FH.getCurrentConfig().treatmentId >= 2)
    ) {
        let t,
            n,
            i,
            o =
                ((t = a.Ay.getInteractionDebugContext(e.nonce)),
                (n = t?.interaction.data),
                (i = s.A.getApplication(e.application.id)),
                {
                    interactionId: e.id,
                    nonce: e.nonce,
                    channelId: e.channelId,
                    applicationId: e.application.id,
                    hasApplicationRecord: null != i,
                    hasActionApplicationBot: null != e.application.bot,
                    componentCount: e.components.length,
                    componentTypes: e.components.map((e) => e.type),
                    sourceInteractionType: n?.interactionType,
                    sourceApplicationId: n?.applicationId,
                    sourceMessageId: t?.messageId,
                    hasSourceCustomId: n?.interactionType === r.G4.MESSAGE_COMPONENT ? null != n.customId : void 0,
                    hasSourceComponentId:
                        n?.interactionType === r.G4.MESSAGE_COMPONENT ? null != n.componentId : void 0,
                });
        u.A.addBreadcrumb({ category: "interaction_modal", message: "Interaction modal opened", data: o });
    }
}
class h extends i.A {
    iframeModalOpenTimeMs = void 0;
    actions = {
        INTERACTION_MODAL_CREATE: (e) => {
            p(e);
        },
        INTERACTION_IFRAME_MODAL_CREATE: (e) => {
            (this.iframeModalOpenTimeMs = Date.now()),
                (0, d.A)(e),
                l.default.track(_.HAw.OPEN_MODAL, { type: f, application_id: e.application.id });
        },
        INTERACTION_IFRAME_MODAL_CLOSE: (e) => {
            var t;
            let n;
            (n = null != (t = this.iframeModalOpenTimeMs) ? Date.now() - t : void 0),
                l.default.track(_.HAw.MODAL_DISMISSED, {
                    type: f,
                    application_id: e.applicationId,
                    duration_open_ms: n,
                }),
                (this.iframeModalOpenTimeMs = void 0);
        },
        RPC_APP_DISCONNECTED: (e) => {
            !(function (e) {
                let { application: t } = e,
                    n = a.Ay.getIFrameModalApplicationId(),
                    r = a.Ay.getIFrameModalKey();
                t.id === n && null != n && (0, c.A)(n, r);
            })(e);
        },
    };
}
let E = new h();

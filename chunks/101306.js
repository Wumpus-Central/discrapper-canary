"use strict";
n.d(t, { h: () => p });
var r = n(155718),
    i = n(439372),
    s = n(587895),
    a = n(436283),
    o = n(548965),
    l = n(954571),
    u = n(728458),
    d = n(490203),
    c = n(49807),
    _ = n(652215);
let f = "interaction_iframe_modal";
async function E(e) {
    let { openInteractionModal: t } = await Promise.all([
        n.e("24199"),
        n.e("57036"),
        n.e("70474"),
        n.e("61943"),
        n.e("76640"),
        n.e("7175"),
        n.e("55202"),
        n.e("23353"),
        n.e("73667"),
        n.e("11250"),
        n.e("14138"),
        n.e("3442"),
        n.e("85071"),
        n.e("88017"),
        n.e("70994"),
        n.e("17239"),
        n.e("24267"),
        n.e("51793"),
        n.e("58164"),
        n.e("81645"),
        n.e("36682"),
        n.e("63070"),
        n.e("25370"),
        n.e("28367"),
        n.e("96313"),
        n.e("27411"),
        n.e("49318"),
        n.e("12721"),
        n.e("58283"),
        n.e("17601"),
        n.e("8087"),
        n.e("55057"),
        n.e("60471"),
        n.e("42257"),
        n.e("48563"),
        n.e("27355"),
        n.e("67876"),
        n.e("37457"),
        n.e("374"),
        n.e("8555"),
        n.e("28936"),
        n.e("92414"),
        n.e("16419"),
        n.e("14504"),
        n.e("93278"),
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
            E(e);
        },
        INTERACTION_IFRAME_MODAL_CREATE: (e) => {
            (this.iframeModalOpenTimeMs = Date.now()),
                (0, c.A)(e),
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
                t.id === n && null != n && (0, d.A)(n, r);
            })(e);
        },
    };
}
let p = new h();

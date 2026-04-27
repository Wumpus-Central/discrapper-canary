"use strict";
n.d(t, { h: () => I });
var i = n(155718),
    r = n(439372),
    s = n(587895),
    a = n(436283),
    o = n(548965),
    l = n(954571),
    _ = n(38405),
    d = n(192308),
    u = n(228366),
    c = n(627968);
async function E(e) {
    let t = await (0, d.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("98765"), n.e("3666")]).then(n.bind(n, 144482));
            return (n) => (0, c.jsx)(t, { ...n, ...e });
        },
        {
            onCloseCallback: () => {
                u.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId: e.application.id });
            },
        },
    );
    u.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_KEY_CREATE", modalKey: t });
}
n(64700);
var h = n(652215);
let m = "interaction_iframe_modal";
async function f(e) {
    let { openInteractionModal: t } = await Promise.all([
        n.e("32292"),
        n.e("24199"),
        n.e("57036"),
        n.e("88394"),
        n.e("28367"),
        n.e("45174"),
        n.e("85519"),
        n.e("87963"),
        n.e("37266"),
        n.e("55057"),
        n.e("34717"),
        n.e("63229"),
        n.e("31988"),
        n.e("55343"),
        n.e("80527"),
        n.e("58710"),
        n.e("8555"),
        n.e("31825"),
        n.e("23353"),
        n.e("7175"),
        n.e("37249"),
        n.e("14138"),
        n.e("8971"),
        n.e("85071"),
        n.e("88017"),
        n.e("40142"),
        n.e("1040"),
        n.e("64615"),
        n.e("17239"),
        n.e("66950"),
        n.e("58164"),
        n.e("38229"),
        n.e("20861"),
        n.e("36682"),
        n.e("98765"),
        n.e("45723"),
        n.e("56871"),
        n.e("69601"),
        n.e("47511"),
        n.e("92414"),
        n.e("47417"),
        n.e("51444"),
        n.e("62290"),
        n.e("48900"),
        n.e("80973"),
        n.e("82731"),
        n.e("20735"),
        n.e("27846"),
        n.e("8306"),
        n.e("10567"),
        n.e("43436"),
        n.e("84317"),
        n.e("54865"),
        n.e("44575"),
        n.e("60482"),
    ]).then(n.bind(n, 121338));
    if (
        (t(e),
        l.default.track(h.HAw.OPEN_MODAL, { type: "interaction_modal", application_id: e.application.id }),
        o.FH.getCurrentConfig().treatmentId >= 2)
    ) {
        let t,
            n,
            r,
            o =
                ((t = a.Ay.getInteractionDebugContext(e.nonce)),
                (n = t?.interaction.data),
                (r = s.A.getApplication(e.application.id)),
                {
                    interactionId: e.id,
                    nonce: e.nonce,
                    channelId: e.channelId,
                    applicationId: e.application.id,
                    hasApplicationRecord: null != r,
                    hasActionApplicationBot: null != e.application.bot,
                    componentCount: e.components.length,
                    componentTypes: e.components.map((e) => e.type),
                    sourceInteractionType: n?.interactionType,
                    sourceApplicationId: n?.applicationId,
                    sourceMessageId: t?.messageId,
                    hasSourceCustomId: n?.interactionType === i.G4.MESSAGE_COMPONENT ? null != n.customId : void 0,
                    hasSourceComponentId:
                        n?.interactionType === i.G4.MESSAGE_COMPONENT ? null != n.componentId : void 0,
                });
        _.A.addBreadcrumb({ category: "interaction_modal", message: "Interaction modal opened", data: o });
    }
}
class g extends r.A {
    iframeModalOpenTimeMs = void 0;
    actions = {
        INTERACTION_MODAL_CREATE: (e) => {
            f(e);
        },
        INTERACTION_IFRAME_MODAL_CREATE: (e) => {
            (this.iframeModalOpenTimeMs = Date.now()),
                E(e),
                l.default.track(h.HAw.OPEN_MODAL, { type: m, application_id: e.application.id });
        },
        INTERACTION_IFRAME_MODAL_CLOSE: (e) => {
            var t;
            let n;
            (n = null != (t = this.iframeModalOpenTimeMs) ? Date.now() - t : void 0),
                l.default.track(h.HAw.MODAL_DISMISSED, {
                    type: m,
                    application_id: e.applicationId,
                    duration_open_ms: n,
                }),
                (this.iframeModalOpenTimeMs = void 0);
        },
        RPC_APP_DISCONNECTED: (e) => {
            !(function (e) {
                let { application: t } = e,
                    n = a.Ay.getIFrameModalApplicationId(),
                    i = a.Ay.getIFrameModalKey();
                t.id === n &&
                    null != n &&
                    (null != i && (0, d.closeModal)(i),
                    u.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId: n }));
            })(e);
        },
    };
}
let I = new g();

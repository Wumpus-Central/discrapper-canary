"use strict";
n.d(t, { h: () => p });
var i = n(155718),
    r = n(439372),
    s = n(587895),
    a = n(436283),
    o = n(548965),
    l = n(954571),
    d = n(38405),
    _ = n(192308),
    u = n(228366),
    c = n(627968);
async function E(e) {
    let t = await (0, _.openModalLazy)(
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
        n.e("44575"),
        n.e("8555"),
        n.e("49328"),
        n.e("69295"),
        n.e("98765"),
        n.e("92414"),
        n.e("92803"),
        n.e("25979"),
        n.e("21533"),
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
        d.A.addBreadcrumb({ category: "interaction_modal", message: "Interaction modal opened", data: o });
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
                    (null != i && (0, _.closeModal)(i),
                    u.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId: n }));
            })(e);
        },
    };
}
let p = new g();

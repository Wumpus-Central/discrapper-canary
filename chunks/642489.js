"use strict";
n.d(t, { h: () => g });
var i = n(155718),
    r = n(439372),
    s = n(587895),
    a = n(436283),
    o = n(892842),
    l = n(174459),
    u = n(38405),
    c = n(192308),
    d = n(228366),
    _ = n(627968);
async function h(e) {
    let t = await (0, c.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                n.e("59559"),
                n.e("82158"),
                n.e("21921"),
                n.e("98765"),
                n.e("45413"),
                n.e("29961"),
                n.e("29624"),
                n.e("18687"),
            ]).then(n.bind(n, 144482));
            return (n) => (0, _.jsx)(t, { ...n, ...e });
        },
        {
            onCloseCallback: () => {
                d.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId: e.application.id });
            },
        },
    );
    d.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_KEY_CREATE", modalKey: t });
}
n(64700);
var f = n(652215);
let p = "interaction_iframe_modal";
async function E(e) {
    let { openInteractionModal: t } = await Promise.all([
        n.e("18712"),
        n.e("99099"),
        n.e("98892"),
        n.e("97690"),
        n.e("87103"),
        n.e("46934"),
        n.e("812"),
        n.e("52865"),
        n.e("87960"),
        n.e("57215"),
        n.e("30593"),
        n.e("22535"),
        n.e("79154"),
        n.e("97782"),
        n.e("34454"),
        n.e("45588"),
        n.e("2499"),
        n.e("94970"),
        n.e("48997"),
        n.e("70486"),
        n.e("59135"),
        n.e("41603"),
        n.e("86274"),
        n.e("28367"),
        n.e("21921"),
        n.e("40258"),
        n.e("8555"),
        n.e("6949"),
        n.e("46070"),
        n.e("17249"),
        n.e("90365"),
        n.e("98765"),
        n.e("89088"),
        n.e("8891"),
        n.e("17989"),
        n.e("67861"),
        n.e("1518"),
        n.e("23354"),
        n.e("28083"),
        n.e("20590"),
        n.e("80830"),
        n.e("79745"),
        n.e("35395"),
        n.e("46844"),
        n.e("45413"),
        n.e("64850"),
        n.e("70104"),
        n.e("2564"),
        n.e("47417"),
        n.e("20287"),
        n.e("18997"),
        n.e("58337"),
        n.e("18024"),
        n.e("47177"),
        n.e("3131"),
        n.e("27272"),
        n.e("36149"),
        n.e("51778"),
        n.e("24914"),
        n.e("42714"),
        n.e("26437"),
        n.e("20382"),
        n.e("78050"),
        n.e("73165"),
        n.e("97069"),
        n.e("94607"),
        n.e("41250"),
        n.e("29961"),
        n.e("68802"),
        n.e("38695"),
        n.e("94055"),
    ]).then(n.bind(n, 121338));
    if (
        (t(e),
        l.default.track(f.HAw.OPEN_MODAL, { type: "interaction_modal", application_id: e.application.id }),
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
        u.A.addBreadcrumb({ category: "interaction_modal", message: "Interaction modal opened", data: o });
    }
}
class m extends r.A {
    iframeModalOpenTimeMs = void 0;
    actions = {
        INTERACTION_MODAL_CREATE: (e) => {
            E(e);
        },
        INTERACTION_IFRAME_MODAL_CREATE: (e) => {
            (this.iframeModalOpenTimeMs = Date.now()),
                h(e),
                l.default.track(f.HAw.OPEN_MODAL, { type: p, application_id: e.application.id });
        },
        INTERACTION_IFRAME_MODAL_CLOSE: (e) => {
            var t;
            let n;
            (n = null != (t = this.iframeModalOpenTimeMs) ? Date.now() - t : void 0),
                l.default.track(f.HAw.MODAL_DISMISSED, {
                    type: p,
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
                    (null != i && (0, c.closeModal)(i),
                    d.h.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId: n }));
            })(e);
        },
    };
}
let g = new m();

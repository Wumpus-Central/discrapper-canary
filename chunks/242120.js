"use strict";
n.d(t, { A: () => u });
var r = n(272355),
    i = n(954571),
    s = n(723702),
    a = n(837921),
    o = n(652215);
class l extends r.A {
    _initialize() {
        s.isPlatformEmbedded &&
            (a.Ay.on("APP_PUSH_ANALYTICS", (e, t) => {
                this._handleEventResponse(t);
            }),
            this.processModuleEvents());
    }
    _terminate() {}
    processModuleEvents() {
        try {
            a.Ay.send("APP_GET_ANALYTICS_EVENTS");
        } catch (e) {
            console.error(`[analytics] failed to send analytics events query: ${e}`);
        }
    }
    _handleEventResponse(e) {
        null != e &&
            e.forEach((e) => {
                "cdm" === e.type
                    ? e.name === o.HAw.CDM_LOAD_STATUS || e.name === o.HAw.CDM_READY_COMPLETE
                        ? i.default.track(e.name, e.data)
                        : console.log(`[analytics] received unknown cdm analytic event ${e.name}`)
                    : "desktop_tti" === e.type
                      ? e.name === o.HAw.DESKTOP_TTI
                          ? i.default.track(e.name, e.data)
                          : console.log(`[analytics] received unknown desktop_tti analytic event ${e.name}`)
                      : "desktop_tti_v2" === e.type &&
                        (e.name === o.HAw.DESKTOP_TTI_V2
                            ? i.default.track(e.name, e.data)
                            : console.log(`[analytics] received unknown desktop_tti_v2 analytic event ${e.name}`));
            });
    }
}
let u = new l();

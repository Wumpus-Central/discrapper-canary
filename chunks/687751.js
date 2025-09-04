n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(570140),
    a = n(317770),
    o = n(681678),
    s = n(944486),
    c = n(914010),
    u = n(622822),
    d = n(920644),
    p = n(723359),
    f = n(981631),
    h = n(484710);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
class m extends a.Z {
    _initialize() {
        l.Z.subscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            l.Z.subscribe("CHANNEL_SELECT", this.handleChannelSelect),
            l.Z.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            l.Z.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            l.Z.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            l.Z.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            l.Z.subscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    _terminate() {
        l.Z.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            l.Z.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect),
            l.Z.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            l.Z.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            l.Z.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            l.Z.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            l.Z.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        (0, u.T5)() && (0, u.I8)(t, n, p.L0.NSFW_CHANNEL);
    }
    handleConnectionOpen() {
        let e = c.Z.getGuildId(),
            t = s.Z.getChannelId();
        (0, u.T5)() && (0, u.I8)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("1716"), n.e("83737")]).then(n.bind(n, 746882));
                return (n) => (0, r.jsx)(e, g({ source: t }, n));
            },
            {
                modalKey: p.dG,
                onCloseRequest: f.dG4,
                backdropStyle: t === p.L0.NSFW_SERVER ? i.fCB.LIGHTBOX : void 0,
            },
        );
    }
    handleAgeGateSuccess() {
        o.Z.showSuccessToast(h.wQ.EXISTING_USER_AGE_GATE_SUCCESS), (0, i.Mr3)(p.dG);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, i.oav)(p.dG, (e) => (0, r.jsx)(d.default, g({ underageMessage: t }, e)));
    }
    handleAgeGateModalClose() {
        (0, i.Mr3)(p.dG);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = c.Z.getGuildId();
        if (null != n && t.id === n && t.nsfw_level === f.V_K.AGE_RESTRICTED) return void (0, u.I8)(t.id, null);
    }
}
let b = new m();

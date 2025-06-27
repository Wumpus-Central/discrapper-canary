n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(570140),
    a = n(317770),
    o = n(944486),
    s = n(914010),
    c = n(622822),
    u = n(920644),
    d = n(208381),
    p = n(723359),
    h = n(981631);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
class g extends a.Z {
    _initialize() {
        l.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), l.Z.subscribe('CHANNEL_SELECT', this.handleChannelSelect), l.Z.subscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), l.Z.subscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), l.Z.subscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), l.Z.subscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure), l.Z.subscribe('GUILD_UPDATE', this.handleGuildUpdate);
    }
    _terminate() {
        l.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), l.Z.unsubscribe('CHANNEL_SELECT', this.handleChannelSelect), l.Z.unsubscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), l.Z.unsubscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), l.Z.unsubscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), l.Z.unsubscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure), l.Z.unsubscribe('GUILD_UPDATE', this.handleGuildUpdate);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        (0, c.I8)(t, n, p.L0.NSFW_CHANNEL);
    }
    handleConnectionOpen() {
        let e = s.Z.getGuildId(),
            t = o.Z.getChannelId();
        (0, c.I8)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('6583'), n.e('1337'), n.e('33312')]).then(n.bind(n, 746882));
                return (n) => (0, r.jsx)(e, f({ source: t }, n));
            },
            {
                modalKey: p.dG,
                onCloseRequest: h.dG4,
                backdropStyle: t === p.L0.NSFW_SERVER ? i.fCB.LIGHTBOX : void 0
            }
        );
    }
    handleAgeGateSuccess() {
        (0, i.oav)(p.dG, (e) => (0, r.jsx)(d.Z, f({}, e)));
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, i.oav)(p.dG, (e) => (0, r.jsx)(u.Z, f({ underageMessage: t }, e)));
    }
    handleAgeGateModalClose() {
        (0, i.Mr3)(p.dG);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = s.Z.getGuildId();
        if (null != n && t.id === n && t.nsfw_level === h.V_K.AGE_RESTRICTED) return void (0, c.I8)(t.id, null);
    }
}
let m = new g();

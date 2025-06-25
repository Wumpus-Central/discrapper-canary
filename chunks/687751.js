n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(570140),
    a = n(317770),
    o = n(500496),
    s = n(592125),
    c = n(430824),
    u = n(944486),
    d = n(914010),
    p = n(594174),
    h = n(758119),
    f = n(920644),
    g = n(208381),
    m = n(723359),
    b = n(981631);
function _(e) {
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
function E(e, t) {
    var n;
    if (null == e) return;
    let r = c.Z.getGuild(e);
    if (
        (null == r ? void 0 : r.isNSFW()) &&
        (0, o.Tz)({
            guildId: e,
            location: 'age-gate-manager-web'
        })
    )
        return void (0, h.mN)(m.L0.NSFW_SERVER);
    let i = p.default.getCurrentUser();
    if ((null == (n = s.Z.getChannel(t)) ? void 0 : n.isNSFW()) && null != i && null == i.nsfwAllowed) return void (0, h.mN)(m.L0.NSFW_CHANNEL);
}
class O extends a.Z {
    _initialize() {
        l.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), l.Z.subscribe('CHANNEL_SELECT', this.handleChannelSelect), l.Z.subscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), l.Z.subscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), l.Z.subscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), l.Z.subscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure), l.Z.subscribe('GUILD_UPDATE', this.handleGuildUpdate);
    }
    _terminate() {
        l.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), l.Z.unsubscribe('CHANNEL_SELECT', this.handleChannelSelect), l.Z.unsubscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), l.Z.unsubscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), l.Z.unsubscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), l.Z.unsubscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure), l.Z.unsubscribe('GUILD_UPDATE', this.handleGuildUpdate);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        E(t, n);
    }
    handleConnectionOpen() {
        E(d.Z.getGuildId(), u.Z.getChannelId());
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('6583'), n.e('1337'), n.e('33312')]).then(n.bind(n, 746882));
                return (n) => (0, r.jsx)(e, _({ source: t }, n));
            },
            {
                modalKey: m.dG,
                onCloseRequest: b.dG4,
                backdropStyle: t === m.L0.NSFW_SERVER ? i.fCB.LIGHTBOX : void 0
            }
        );
    }
    handleAgeGateSuccess() {
        (0, i.oav)(m.dG, (e) => (0, r.jsx)(g.Z, _({}, e)));
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, i.oav)(m.dG, (e) => (0, r.jsx)(f.Z, _({ underageMessage: t }, e)));
    }
    handleAgeGateModalClose() {
        (0, i.Mr3)(m.dG);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = d.Z.getGuildId();
        if (null != n && t.id === n && t.nsfw_level === b.V_K.AGE_RESTRICTED) return void E(t.id, null);
    }
}
let y = new O();

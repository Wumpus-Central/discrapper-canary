n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(570140),
    a = n(317770),
    o = n(592125),
    s = n(944486),
    c = n(914010),
    u = n(594174),
    d = n(758119),
    p = n(920644),
    h = n(208381),
    f = n(723359),
    g = n(981631);
function m(e) {
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
function b(e, t) {
    var n;
    if (null == e) return;
    let r = u.default.getCurrentUser();
    (null == (n = o.Z.getChannel(t)) ? void 0 : n.isNSFW()) && null != r && null == r.nsfwAllowed && (0, d.mN)(f.L0.NSFW_CHANNEL);
}
class _ extends a.Z {
    _initialize() {
        l.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), l.Z.subscribe('CHANNEL_SELECT', this.handleChannelSelect), l.Z.subscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), l.Z.subscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), l.Z.subscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), l.Z.subscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure);
    }
    _terminate() {
        l.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), l.Z.unsubscribe('CHANNEL_SELECT', this.handleChannelSelect), l.Z.unsubscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), l.Z.unsubscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), l.Z.unsubscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), l.Z.unsubscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        b(t, n);
    }
    handleConnectionOpen() {
        b(c.Z.getGuildId(), s.Z.getChannelId());
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('63288'), n.e('1337'), n.e('33312')]).then(n.bind(n, 746882));
                return (n) => (0, r.jsx)(e, m({ source: t }, n));
            },
            {
                modalKey: f.dG,
                onCloseRequest: g.dG4
            }
        );
    }
    handleAgeGateSuccess() {
        (0, i.oav)(f.dG, (e) => (0, r.jsx)(h.Z, m({}, e)));
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, i.oav)(f.dG, (e) => (0, r.jsx)(p.Z, m({ underageMessage: t }, e)));
    }
    handleAgeGateModalClose() {
        (0, i.Mr3)(f.dG);
    }
}
let E = new _();

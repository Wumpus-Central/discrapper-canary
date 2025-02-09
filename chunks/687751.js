n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(317770),
    s = n(592125),
    o = n(944486),
    c = n(914010),
    d = n(594174),
    u = n(758119),
    h = n(920644),
    m = n(208381),
    p = n(723359),
    g = n(981631);
function _(e, t) {
    var n;
    if (null == e) return;
    let i = d.default.getCurrentUser();
    (null === (n = s.Z.getChannel(t)) || void 0 === n ? void 0 : n.isNSFW()) && null != i && null == i.nsfwAllowed && (0, u.mN)(p.L0.NSFW_CHANNEL);
}
class f extends a.Z {
    _initialize() {
        r.Z.subscribe('CONNECTION_OPEN', this.handleConnectionOpen), r.Z.subscribe('CHANNEL_SELECT', this.handleChannelSelect), r.Z.subscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), r.Z.subscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), r.Z.subscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), r.Z.subscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure);
    }
    _terminate() {
        r.Z.unsubscribe('CONNECTION_OPEN', this.handleConnectionOpen), r.Z.unsubscribe('CHANNEL_SELECT', this.handleChannelSelect), r.Z.unsubscribe('AGE_GATE_MODAL_OPEN', this.handleAgeGateModalOpen), r.Z.unsubscribe('AGE_GATE_MODAL_CLOSE', this.handleAgeGateModalClose), r.Z.unsubscribe('AGE_GATE_SUCCESS_MODAL_OPEN', this.handleAgeGateSuccess), r.Z.unsubscribe('AGE_GATE_FAILURE_MODAL_OPEN', this.handleAgeGateFailure);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        _(t, n);
    }
    handleConnectionOpen() {
        _(c.Z.getGuildId(), o.Z.getChannelId());
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, l.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('63288'), n.e('1337'), n.e('71034')]).then(n.bind(n, 746882));
                return (n) =>
                    (0, i.jsx)(e, {
                        source: t,
                        ...n
                    });
            },
            {
                modalKey: p.dG,
                onCloseRequest: g.dG4
            }
        );
    }
    handleAgeGateSuccess() {
        (0, l.oav)(p.dG, (e) => (0, i.jsx)(m.Z, { ...e }));
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, l.oav)(p.dG, (e) =>
            (0, i.jsx)(h.Z, {
                underageMessage: t,
                ...e
            })
        );
    }
    handleAgeGateModalClose() {
        (0, l.Mr3)(p.dG);
    }
}
let E = new f();

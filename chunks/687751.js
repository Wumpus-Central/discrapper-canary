n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(570140),
    a = n(317770),
    o = n(81643),
    s = n(681678),
    c = n(944486),
    u = n(914010),
    d = n(622822),
    p = n(920644),
    f = n(723359),
    h = n(981631),
    g = n(484710);
function m(e) {
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
class b extends a.Z {
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
        (0, d.I8)(t, n);
    }
    handleConnectionOpen() {
        let e = u.Z.getGuildId(),
            t = c.Z.getChannelId();
        (0, d.I8)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("1716"), n.e("70699")]).then(n.bind(n, 746882));
                return (n) => (0, r.jsx)(e, m({ source: t }, n));
            },
            {
                modalKey: f.dG,
                onCloseRequest: h.dG4,
                backdropStyle: (0, o.bj)(t) ? i.fCB.LIGHTBOX : void 0,
            },
        );
    }
    handleAgeGateSuccess() {
        s.Z.showSuccessToast(g.wQ.EXISTING_USER_AGE_GATE_SUCCESS), (0, i.Mr3)(f.dG);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, i.oav)(f.dG, (e) => (0, r.jsx)(p.default, m({ underageMessage: t }, e)));
    }
    handleAgeGateModalClose() {
        (0, i.Mr3)(f.dG);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = u.Z.getGuildId();
        if (null != n && t.id === n && t.owner_configured_content_level === h.V_K.AGE_RESTRICTED)
            return void (0, d.I8)(t.id, null);
    }
}
let _ = new b();

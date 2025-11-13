n.d(t, { Z: () => O });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(570140),
    a = n(317770),
    s = n(81643),
    o = n(681678),
    c = n(601964),
    u = n(944486),
    d = n(914010),
    p = n(622822),
    f = n(165540),
    h = n(920644),
    g = n(723359),
    m = n(981631),
    _ = n(484710);
function b(e) {
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
class E extends a.Z {
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
        (0, p.I8)(t, n);
    }
    handleConnectionOpen() {
        let e = d.Z.getGuildId(),
            t = u.Z.getChannelId();
        (0, p.I8)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("1716"), n.e("83737")]).then(n.bind(n, 701509));
                return (n) => (0, r.jsx)(e, b({ source: t }, n));
            },
            {
                modalKey: g.dG,
                onCloseRequest: m.dG4,
                backdropStyle: (0, s.bj)(t) ? i.fCB.LIGHTBOX : void 0,
            },
        );
    }
    handleAgeGateSuccess() {
        o.Z.showSuccessToast(_.wQ.EXISTING_USER_AGE_GATE_SUCCESS), (0, i.Mr3)(g.dG);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, i.oav)(g.dG, (e) => (0, r.jsx)(h.default, b({ underageMessage: t }, e)));
    }
    handleAgeGateModalClose() {
        (0, i.Mr3)(g.dG);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = d.Z.getGuildId();
        if (
            null != n &&
            t.id === n &&
            (t.owner_configured_content_level === m.V_K.AGE_RESTRICTED ||
                ((0, f.X)("age_gate_manager") && c.Ov.has(t.nsfw_level)))
        )
            return void (0, p.I8)(t.id, null);
    }
}
let O = new E();

let l = (0, n(839214).D)(() => ({ byChannel: {}, retainedDraftChannelId: null, finalizingByChannel: {} }));
function i(e, t) {
    let n = { ...l.getState().byChannel };
    (null == t ? delete n[e] : (n[e] = t), l.setState({ byChannel: n }));
}
n.d(
    t,
    {},
    {
        AL: function (e, t) {
            let n = l.getState().byChannel[e];
            n?.phase === "recorded" && i(e, { ...n, recordedDurationSecs: t });
        },
        CH: function () {
            let { byChannel: e } = l.getState();
            for (let t of Object.keys(e)) {
                let n = e[t]?.phase;
                if ("requesting" === n || "recording" === n) return t;
            }
            return null;
        },
        Mk: function (e) {
            return l.getState().byChannel[e];
        },
        Rz: function (e, t) {
            let n = { ...l.getState().finalizingByChannel };
            (t ? (n[e] = !0) : delete n[e], l.setState({ finalizingByChannel: n }));
        },
        nf: function () {
            l.setState({ byChannel: {}, retainedDraftChannelId: null, finalizingByChannel: {} });
        },
        o2: function (e, t) {
            let n = l.getState().byChannel[e];
            n?.phase === "recorded" && i(e, { ...n, recordedPlayback: t });
        },
        om: function (e) {
            return l.useState((t) => t.byChannel[e]);
        },
        tH: function (e, t) {
            let n = l.getState(),
                i = { ...n.byChannel };
            (null != n.retainedDraftChannelId && n.retainedDraftChannelId !== e && delete i[n.retainedDraftChannelId],
                (i[e] = { ...i[e], phase: "recorded", recordedDurationSecs: t, recordedPlayback: void 0 }),
                l.setState({ byChannel: i, retainedDraftChannelId: e }));
        },
        tO: function () {
            return Object.keys(l.getState().finalizingByChannel).length > 0;
        },
        wX: function () {
            return l.useState((e) => Object.keys(e.finalizingByChannel).length > 0);
        },
        yC: function () {
            return l.getState().retainedDraftChannelId;
        },
        z5: function (e, t, n) {
            let r = l.getState().byChannel[e];
            i(e, { ...r, phase: t, startTimeMillis: n ?? r?.startTimeMillis });
        },
        zh: function (e) {
            let t = l.getState(),
                n = { ...t.byChannel };
            (delete n[e],
                l.setState({
                    byChannel: n,
                    retainedDraftChannelId: t.retainedDraftChannelId === e ? null : t.retainedDraftChannelId,
                }));
        },
    },
);

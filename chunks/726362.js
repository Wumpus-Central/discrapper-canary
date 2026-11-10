var l = t(620632),
    i = t(73153),
    a = t(210470),
    r = t(603013),
    s = t(131904),
    d = t(22464);
function u(e) {
    return { channelId: e.channel_id, eligible: e.eligible, included: e.included };
}
function c(e) {
    return { enabled: e.enabled, channels: e.channels.map(u) };
}
function o(e) {
    return { [d.y.CHANNEL_SUMMARIES]: c(e[d.y.CHANNEL_SUMMARIES]), [d.y.CHANNEL_MESSAGES]: c(e[d.y.CHANNEL_MESSAGES]) };
}
let h = new Set();
t.d(
    n,
    {},
    {
        FD: async function (e) {
            if (!(null != s.A.getFeatures(e) || s.A.fetchFailed(e)) && !h.has(e)) {
                h.add(e);
                try {
                    let n = await l.Bo.get({ url: r.j.DISCOVERABLE_CONTENT(e), rejectWithError: !0 }),
                        t = o(n.body);
                    i.h.dispatch({ type: "PINOT_FETCH_SUCCESS", guildId: e, features: t });
                } catch {
                    i.h.dispatch({ type: "PINOT_FETCH_FAILURE", guildId: e });
                } finally {
                    h.delete(e);
                }
            }
        },
        Ug: function (e) {
            i.h.dispatch({ type: "PINOT_ADMIN_NOTICE_HIDE", guildId: e });
        },
        dM: function (e) {
            i.h.dispatch({ type: "PINOT_ADMIN_NOTICE_ACK", guildId: e });
        },
        lF: function (e) {
            i.h.dispatch({ type: "PINOT_OPEN_FEATURE", featureKey: e });
        },
        lv: function (e, n, t) {
            i.h.dispatch({ type: "PINOT_DRAFT_UPDATE", guildId: e, featureKey: n, draft: t });
        },
        um: async function (e) {
            let n = s.A.getFeatures(e);
            if (null == n || s.A.isSaving()) return;
            let t = {};
            for (let l of d.P) {
                let i = s.A.getDraft(e, l);
                if (null == i) continue;
                let r = (0, a.Pg)(n[l], i);
                Object.keys(r).length > 0 && (t[l] = r);
            }
            if (0 !== Object.keys(t).length) {
                i.h.dispatch({ type: "PINOT_SAVE_START", guildId: e });
                try {
                    let n = await l.Bo.patch({ url: r.j.DISCOVERABLE_CONTENT(e), body: t, rejectWithError: !0 });
                    i.h.dispatch({ type: "PINOT_SAVE_SUCCESS", guildId: e, features: o(n.body) });
                } catch {
                    i.h.dispatch({ type: "PINOT_SAVE_FAILURE", guildId: e });
                }
            }
        },
    },
);

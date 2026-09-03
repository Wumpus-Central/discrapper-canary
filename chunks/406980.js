n.d(a, { K: () => m }), n(321073);
var t = n(477900);
n(582128);
var i = n(192308),
    l = n(294454),
    s = n(118517),
    c = n(734057),
    o = n(31717),
    r = n(232835),
    u = n(518960),
    p = n(655180),
    d = n(589553),
    h = n(696016);
async function m(e, a) {
    let { channelId: m, analyticsLocations: A, messageReference: y, povTargetInformation: g } = a,
        C = c.A.getChannel(m);
    if (null != C) {
        if (null != y) {
            let e = r.A.getMessage(y.channel_id, y.message_id);
            null != e && (0, s.Yf)({ message: e, channel: C, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let a = [],
                n = [];
            for (let t of e) {
                let e = (function (e, a) {
                        if (null == a || null == e.syncTimestamp) return e;
                        let { duration: n, syncTimestamp: t } = a,
                            i = e.syncTimestamp - e.length,
                            l = e.syncTimestamp,
                            s = Math.max(i, t - 1e3 * n),
                            c = Math.min(l, t);
                        return s < c
                            ? {
                                  ...e,
                                  editMetadata: {
                                      applicationAudio: !0,
                                      voiceAudio: !0,
                                      soundboardAudio: !0,
                                      ...e.editMetadata,
                                      start: (s - i) / 1e3,
                                      end: (c - i) / 1e3,
                                  },
                              }
                            : e;
                    })(t, g),
                    i = await (0, p.VO)(e, { analyticsLocations: A, isTemporaryEdit: e !== t }),
                    l = (0, d.A)(e, e.type === h.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (t.type) {
                    case h.nQ.CLIP:
                    case h.nQ.VOICE_CLIP:
                        a.push(new File([i], l, { type: "video/mp4" })), n.push({ clip: e });
                        break;
                    case h.nQ.SCREENSHOT:
                        a.push(new File([i], l, { type: "image/jpeg" })), n.push({});
                        break;
                    default:
                        t.type;
                }
            }
            (0, u.R)(a, C, o.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), i.closeAllModals();
        } catch (e) {
            throw (h.nx.error(e), e);
        }
    } else
        (0, i.openModalLazy)(
            async () => {
                let { default: a } = await Promise.all([
                    n.e("267732"),
                    n.e("225307"),
                    n.e("332165"),
                    n.e("618416"),
                    n.e("524434"),
                    n.e("533158"),
                    n.e("721642"),
                    n.e("130891"),
                    n.e("224155"),
                    n.e("481647"),
                    n.e("776602"),
                    n.e("140402"),
                    n.e("844841"),
                    n.e("401518"),
                    n.e("323354"),
                    n.e("577084"),
                    n.e("844780"),
                    n.e("979630"),
                    n.e("236946"),
                    n.e("692639"),
                    n.e("565617"),
                    n.e("890480"),
                    n.e("440963"),
                    n.e("766031"),
                    n.e("394317"),
                    n.e("744385"),
                    n.e("523601"),
                    n.e("895008"),
                    n.e("92871"),
                ]).then(n.bind(n, 243258));
                return (n) => (0, t.jsx)(a, { ...n, clips: e, analyticsLocations: A });
            },
            { stackingBehavior: "stack", modalKey: l.aU },
        );
}

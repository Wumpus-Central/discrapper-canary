(t.d(a, { K: () => m }), t(321073));
var n = t(477900);
t(582128);
var l = t(192308),
    s = t(294454),
    i = t(118517),
    c = t(734057),
    r = t(31717),
    o = t(232835),
    h = t(518960),
    d = t(614584),
    p = t(589553),
    u = t(696016);
async function m(e, a) {
    let { channelId: m, analyticsLocations: A, messageReference: g, povTargetInformation: f } = a,
        w = c.A.getChannel(m);
    if (null != w) {
        if (null != g) {
            let e = o.A.getMessage(g.channel_id, g.message_id);
            null != e && (0, i.Yf)({ message: e, channel: w, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let a = [],
                t = [];
            for (let n of e) {
                let e = (function (e, a) {
                        if (null == a || null == e.syncTimestamp) return e;
                        let { duration: t, syncTimestamp: n } = a,
                            l = e.syncTimestamp - e.length,
                            s = e.syncTimestamp,
                            i = Math.max(l, n - 1e3 * t),
                            c = Math.min(s, n);
                        return i < c
                            ? {
                                  ...e,
                                  editMetadata: {
                                      applicationAudio: !0,
                                      voiceAudio: !0,
                                      soundboardAudio: !0,
                                      ...e.editMetadata,
                                      start: (i - l) / 1e3,
                                      end: (c - l) / 1e3,
                                  },
                              }
                            : e;
                    })(n, f),
                    l = await (0, d.VO)(e, { analyticsLocations: A, isTemporaryEdit: e !== n }),
                    s = (0, p.A)(e, e.type === u.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (n.type) {
                    case u.nQ.CLIP:
                    case u.nQ.VOICE_CLIP:
                        (a.push(new File([l], s, { type: "video/mp4" })), t.push({ clip: e }));
                        break;
                    case u.nQ.SCREENSHOT:
                        (a.push(new File([l], s, { type: "image/jpeg" })), t.push({}));
                        break;
                    default:
                        n.type;
                }
            }
            ((0, h.R)(a, w, r.C.ChannelMessage, { filesMetadata: t, origin: "unknown:clip_share" }),
                l.closeAllModals());
        } catch (e) {
            throw (u.nx.error(e), e);
        }
    } else
        (0, l.openModalLazy)(
            async () => {
                let { default: a } = await Promise.all([
                    t.e("267732"),
                    t.e("225307"),
                    t.e("332165"),
                    t.e("618416"),
                    t.e("524434"),
                    t.e("90343"),
                    t.e("842760"),
                    t.e("224155"),
                    t.e("481647"),
                    t.e("776602"),
                    t.e("140402"),
                    t.e("401518"),
                    t.e("854461"),
                    t.e("577084"),
                    t.e("844780"),
                    t.e("979630"),
                    t.e("236946"),
                    t.e("935948"),
                    t.e("464704"),
                    t.e("692639"),
                    t.e("890480"),
                    t.e("440963"),
                    t.e("565617"),
                    t.e("766031"),
                    t.e("394317"),
                    t.e("744385"),
                    t.e("84755"),
                    t.e("304329"),
                    t.e("895008"),
                    t.e("92871"),
                ]).then(t.bind(t, 243258));
                return (t) => (0, n.jsx)(a, { ...t, clips: e, analyticsLocations: A });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}

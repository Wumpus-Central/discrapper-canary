(l.d(e, { K: () => v }), l(321073));
var t = l(477900);
l(582128);
var n = l(192308),
    s = l(294454),
    i = l(118517),
    c = l(734057),
    h = l(31717),
    o = l(232835),
    r = l(518960),
    d = l(614584),
    p = l(589553),
    u = l(696016);
async function v(a, e) {
    let { channelId: v, analyticsLocations: m, messageReference: g, povTargetInformation: A } = e,
        w = c.A.getChannel(v);
    if (null != w) {
        if (null != g) {
            let a = o.A.getMessage(g.channel_id, g.message_id);
            null != a && (0, i.Yf)({ message: a, channel: w, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let e = [],
                l = [];
            for (let t of a) {
                let a = (function (a, e) {
                        if (null == e || null == a.syncTimestamp) return a;
                        let { duration: l, syncTimestamp: t } = e,
                            n = a.syncTimestamp - a.length,
                            s = a.syncTimestamp,
                            i = Math.max(n, t - 1e3 * l),
                            c = Math.min(s, t);
                        return i < c
                            ? {
                                  ...a,
                                  editMetadata: {
                                      applicationAudio: !0,
                                      voiceAudio: !0,
                                      soundboardAudio: !0,
                                      ...a.editMetadata,
                                      start: (i - n) / 1e3,
                                      end: (c - n) / 1e3,
                                  },
                              }
                            : a;
                    })(t, A),
                    n = await (0, d.VO)(a, { analyticsLocations: m, isTemporaryEdit: a !== t }),
                    s = (0, p.A)(a, a.type === u.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (t.type) {
                    case u.nQ.CLIP:
                    case u.nQ.VOICE_CLIP:
                        (e.push(new File([n], s, { type: "video/mp4" })), l.push({ clip: a }));
                        break;
                    case u.nQ.SCREENSHOT:
                        (e.push(new File([n], s, { type: "image/jpeg" })), l.push({}));
                        break;
                    default:
                        t.type;
                }
            }
            ((0, r.R)(e, w, h.C.ChannelMessage, { filesMetadata: l, origin: "unknown:clip_share" }),
                n.closeAllModals());
        } catch (a) {
            throw (u.nx.error(a), a);
        }
    } else
        (0, n.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    l.e("267732"),
                    l.e("225307"),
                    l.e("332165"),
                    l.e("618416"),
                    l.e("524434"),
                    l.e("90343"),
                    l.e("769281"),
                    l.e("224155"),
                    l.e("481647"),
                    l.e("776602"),
                    l.e("140402"),
                    l.e("401518"),
                    l.e("854461"),
                    l.e("577084"),
                    l.e("844780"),
                    l.e("979630"),
                    l.e("236946"),
                    l.e("935948"),
                    l.e("692639"),
                    l.e("890480"),
                    l.e("440963"),
                    l.e("565617"),
                    l.e("766031"),
                    l.e("394317"),
                    l.e("744385"),
                    l.e("84755"),
                    l.e("304329"),
                    l.e("895008"),
                    l.e("92871"),
                ]).then(l.bind(l, 243258));
                return (l) => (0, t.jsx)(e, { ...l, clips: a, analyticsLocations: m });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}

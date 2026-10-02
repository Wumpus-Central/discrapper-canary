(l.d(a, { K: () => v }), l(321073));
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
async function v(e, a) {
    let { channelId: v, analyticsLocations: m, messageReference: g, povTargetInformation: A } = a,
        w = c.A.getChannel(v);
    if (null != w) {
        if (null != g) {
            let e = o.A.getMessage(g.channel_id, g.message_id);
            null != e && (0, i.Yf)({ message: e, channel: w, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let a = [],
                l = [];
            for (let t of e) {
                let e = (function (e, a) {
                        if (null == a || null == e.syncTimestamp) return e;
                        let { duration: l, syncTimestamp: t } = a,
                            n = e.syncTimestamp - e.length,
                            s = e.syncTimestamp,
                            i = Math.max(n, t - 1e3 * l),
                            c = Math.min(s, t);
                        return i < c
                            ? {
                                  ...e,
                                  editMetadata: {
                                      applicationAudio: !0,
                                      voiceAudio: !0,
                                      soundboardAudio: !0,
                                      ...e.editMetadata,
                                      start: (i - n) / 1e3,
                                      end: (c - n) / 1e3,
                                  },
                              }
                            : e;
                    })(t, A),
                    n = await (0, d.VO)(e, { analyticsLocations: m, isTemporaryEdit: e !== t }),
                    s = (0, p.A)(e, e.type === u.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (t.type) {
                    case u.nQ.CLIP:
                    case u.nQ.VOICE_CLIP:
                        (a.push(new File([n], s, { type: "video/mp4" })), l.push({ clip: e }));
                        break;
                    case u.nQ.SCREENSHOT:
                        (a.push(new File([n], s, { type: "image/jpeg" })), l.push({}));
                        break;
                    default:
                        t.type;
                }
            }
            ((0, r.R)(a, w, h.C.ChannelMessage, { filesMetadata: l, origin: "unknown:clip_share" }),
                n.closeAllModals());
        } catch (e) {
            throw (u.nx.error(e), e);
        }
    } else
        (0, n.openModalLazy)(
            async () => {
                let { default: a } = await Promise.all([
                    l.e("325522"),
                    l.e("790340"),
                    l.e("147119"),
                    l.e("425292"),
                    l.e("209994"),
                    l.e("116815"),
                    l.e("582012"),
                    l.e("495296"),
                    l.e("608500"),
                    l.e("201074"),
                    l.e("879641"),
                    l.e("590600"),
                    l.e("681801"),
                    l.e("179652"),
                    l.e("916885"),
                    l.e("826139"),
                    l.e("405714"),
                    l.e("360732"),
                    l.e("352456"),
                    l.e("638781"),
                    l.e("678906"),
                    l.e("358931"),
                    l.e("168248"),
                    l.e("533240"),
                    l.e("962953"),
                    l.e("216870"),
                    l.e("89100"),
                    l.e("340363"),
                    l.e("459086"),
                    l.e("720210"),
                    l.e("61531"),
                    l.e("177086"),
                    l.e("319714"),
                    l.e("189281"),
                    l.e("896995"),
                    l.e("385663"),
                    l.e("560570"),
                    l.e("896691"),
                    l.e("779367"),
                    l.e("992956"),
                    l.e("7452"),
                    l.e("60002"),
                    l.e("189423"),
                    l.e("225307"),
                    l.e("332165"),
                    l.e("618416"),
                    l.e("524434"),
                    l.e("90343"),
                    l.e("866475"),
                    l.e("224155"),
                    l.e("888326"),
                    l.e("695765"),
                    l.e("777489"),
                    l.e("188941"),
                    l.e("481647"),
                    l.e("776602"),
                    l.e("140402"),
                    l.e("695445"),
                    l.e("161379"),
                    l.e("890027"),
                    l.e("592028"),
                    l.e("425906"),
                    l.e("123216"),
                    l.e("401518"),
                    l.e("776750"),
                    l.e("147786"),
                    l.e("854461"),
                    l.e("958428"),
                    l.e("124060"),
                    l.e("146566"),
                    l.e("317225"),
                    l.e("444376"),
                    l.e("346102"),
                    l.e("463095"),
                    l.e("696123"),
                    l.e("843719"),
                    l.e("643612"),
                    l.e("577084"),
                    l.e("334127"),
                    l.e("318546"),
                    l.e("41991"),
                    l.e("8563"),
                    l.e("499941"),
                    l.e("693832"),
                    l.e("710638"),
                    l.e("193158"),
                    l.e("959669"),
                    l.e("73500"),
                    l.e("418943"),
                    l.e("959134"),
                    l.e("377766"),
                    l.e("565065"),
                    l.e("834386"),
                    l.e("4780"),
                    l.e("757598"),
                    l.e("130674"),
                    l.e("124006"),
                    l.e("371482"),
                    l.e("126780"),
                    l.e("455924"),
                    l.e("844780"),
                    l.e("360781"),
                    l.e("631825"),
                    l.e("851243"),
                    l.e("220518"),
                    l.e("278424"),
                    l.e("237834"),
                    l.e("807771"),
                    l.e("478476"),
                    l.e("496715"),
                    l.e("681541"),
                    l.e("406357"),
                    l.e("115754"),
                    l.e("680986"),
                    l.e("600330"),
                    l.e("982699"),
                    l.e("177104"),
                    l.e("90373"),
                    l.e("250478"),
                    l.e("462276"),
                    l.e("293697"),
                    l.e("568980"),
                    l.e("979630"),
                    l.e("168177"),
                    l.e("260218"),
                    l.e("236946"),
                    l.e("935948"),
                    l.e("692639"),
                    l.e("565617"),
                    l.e("890480"),
                    l.e("440963"),
                    l.e("766031"),
                    l.e("394317"),
                    l.e("744385"),
                    l.e("304329"),
                    l.e("84755"),
                    l.e("895008"),
                    l.e("92871"),
                ]).then(l.bind(l, 243258));
                return (l) => (0, t.jsx)(a, { ...l, clips: e, analyticsLocations: m });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}

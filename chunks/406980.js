(a.d(e, { K: () => f }), a(321073));
var n = a(477900);
a(582128);
var t = a(192308),
    i = a(294454),
    d = a(118517),
    o = a(734057),
    r = a(31717),
    s = a(232835),
    c = a(518960),
    u = a(614584),
    h = a(132319),
    m = a(589553),
    g = a(696016);
async function f(l, e) {
    let { channelId: f, analyticsLocations: C, messageReference: p, povTargetInformation: v, onShared: _ } = e,
        I = o.A.getChannel(f);
    if (null != I) {
        if (null != p) {
            let l = s.A.getMessage(p.channel_id, p.message_id);
            null != l && (0, d.Yf)({ message: l, channel: I, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let e = [],
                a = [];
            for (let n of l) {
                let l = (function (l, e) {
                        if (null == e || null == l.syncTimestamp) return l;
                        let { duration: a, syncTimestamp: n } = e,
                            t = l.syncTimestamp - l.length,
                            i = l.syncTimestamp,
                            d = Math.max(t, n - 1e3 * a),
                            o = Math.min(i, n);
                        return d < o
                            ? {
                                  ...l,
                                  editMetadata: {
                                      applicationAudio: !0,
                                      voiceAudio: !0,
                                      soundboardAudio: !0,
                                      ...l.editMetadata,
                                      start: (d - t) / 1e3,
                                      end: (o - t) / 1e3,
                                  },
                              }
                            : l;
                    })(n, v),
                    t = await (0, u.VO)(l, { analyticsLocations: C, isTemporaryEdit: l !== n }),
                    i = (0, m.A)(l, l.type === g.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (n.type) {
                    case g.nQ.CLIP:
                    case g.nQ.VOICE_CLIP:
                        (e.push(new File([t], i, { type: "video/mp4" })), a.push({ clip: (0, h.J)(l) }));
                        break;
                    case g.nQ.SCREENSHOT:
                        (e.push(new File([t], i, { type: "image/jpeg" })), a.push({}));
                        break;
                    default:
                        n.type;
                }
            }
            ((0, c.R)(e, I, r.C.ChannelMessage, { filesMetadata: a, origin: "unknown:clip_share" }),
                _?.(),
                t.closeAllModals());
        } catch (l) {
            throw (g.nx.error(l), l);
        }
    } else
        (0, t.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    a.e("325522"),
                    a.e("790340"),
                    a.e("147119"),
                    a.e("425292"),
                    a.e("209994"),
                    a.e("116815"),
                    a.e("582012"),
                    a.e("166336"),
                    a.e("113658"),
                    a.e("162182"),
                    a.e("860640"),
                    a.e("681801"),
                    a.e("570385"),
                    a.e("67909"),
                    a.e("916885"),
                    a.e("272804"),
                    a.e("449933"),
                    a.e("985236"),
                    a.e("352456"),
                    a.e("678906"),
                    a.e("799357"),
                    a.e("491899"),
                    a.e("50466"),
                    a.e("999272"),
                    a.e("701406"),
                    a.e("216112"),
                    a.e("490514"),
                    a.e("962953"),
                    a.e("550929"),
                    a.e("358931"),
                    a.e("168248"),
                    a.e("245420"),
                    a.e("216870"),
                    a.e("841136"),
                    a.e("560338"),
                    a.e("340363"),
                    a.e("459086"),
                    a.e("720210"),
                    a.e("601152"),
                    a.e("319714"),
                    a.e("331249"),
                    a.e("257472"),
                    a.e("921611"),
                    a.e("686889"),
                    a.e("560570"),
                    a.e("896691"),
                    a.e("779367"),
                    a.e("992956"),
                    a.e("7452"),
                    a.e("189423"),
                    a.e("592000"),
                    a.e("524434"),
                    a.e("933947"),
                    a.e("866475"),
                    a.e("224155"),
                    a.e("125729"),
                    a.e("113187"),
                    a.e("695765"),
                    a.e("481647"),
                    a.e("205596"),
                    a.e("776602"),
                    a.e("828111"),
                    a.e("890027"),
                    a.e("140402"),
                    a.e("161379"),
                    a.e("844780"),
                    a.e("592028"),
                    a.e("776750"),
                    a.e("425906"),
                    a.e("123216"),
                    a.e("147786"),
                    a.e("770291"),
                    a.e("854461"),
                    a.e("508699"),
                    a.e("398793"),
                    a.e("958428"),
                    a.e("317225"),
                    a.e("463095"),
                    a.e("256616"),
                    a.e("124060"),
                    a.e("146566"),
                    a.e("32661"),
                    a.e("346102"),
                    a.e("696123"),
                    a.e("133179"),
                    a.e("8563"),
                    a.e("444376"),
                    a.e("499941"),
                    a.e("334127"),
                    a.e("693832"),
                    a.e("577084"),
                    a.e("193158"),
                    a.e("318546"),
                    a.e("73500"),
                    a.e("846523"),
                    a.e("710638"),
                    a.e("919307"),
                    a.e("565617"),
                    a.e("418943"),
                    a.e("455924"),
                    a.e("41991"),
                    a.e("959134"),
                    a.e("872648"),
                    a.e("174347"),
                    a.e("565065"),
                    a.e("834386"),
                    a.e("130674"),
                    a.e("959669"),
                    a.e("220518"),
                    a.e("371482"),
                    a.e("875842"),
                    a.e("126780"),
                    a.e("360781"),
                    a.e("237834"),
                    a.e("631825"),
                    a.e("851243"),
                    a.e("748015"),
                    a.e("952577"),
                    a.e("807771"),
                    a.e("478476"),
                    a.e("496715"),
                    a.e("521570"),
                    a.e("115754"),
                    a.e("15499"),
                    a.e("744385"),
                    a.e("59413"),
                    a.e("793394"),
                    a.e("546745"),
                    a.e("250478"),
                    a.e("192440"),
                    a.e("462276"),
                    a.e("680986"),
                    a.e("90373"),
                    a.e("979630"),
                    a.e("981237"),
                    a.e("168177"),
                    a.e("97210"),
                    a.e("236946"),
                    a.e("935948"),
                    a.e("692639"),
                    a.e("890480"),
                    a.e("593020"),
                    a.e("440963"),
                    a.e("657003"),
                    a.e("766031"),
                    a.e("394317"),
                    a.e("304329"),
                    a.e("207960"),
                    a.e("895008"),
                    a.e("92871"),
                ]).then(a.bind(a, 243258));
                return (a) => (0, n.jsx)(e, { ...a, clips: l, analyticsLocations: C, onShared: _ });
            },
            { stackingBehavior: "stack", modalKey: i.aU },
        );
}

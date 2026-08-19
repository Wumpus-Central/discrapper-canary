a.d(n, { K: () => A }), a(321073);
var t = a(477900);
a(582128);
var l = a(192308),
    s = a(294454),
    i = a(118517),
    c = a(734057),
    r = a(31717),
    o = a(232835),
    h = a(518960),
    p = a(539572),
    u = a(589553),
    d = a(696016);
async function A(e, n) {
    let { channelId: A, analyticsLocations: g, messageReference: C } = n,
        y = c.A.getChannel(A);
    if (null != y) {
        if (null != C) {
            let e = o.A.getMessage(C.channel_id, C.message_id);
            null != e && (0, i.Yf)({ message: e, channel: y, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let n = [],
                a = [];
            for (let t of e) {
                let e = await (0, p.VO)(t, { analyticsLocations: g }),
                    l = (0, u.A)(t, t.type === d.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (t.type) {
                    case d.nQ.CLIP:
                    case d.nQ.VOICE_CLIP:
                        n.push(new File([e], l, { type: "video/mp4" })), a.push({ clip: t });
                        break;
                    case d.nQ.SCREENSHOT:
                        n.push(new File([e], l, { type: "image/jpeg" })), a.push({});
                        break;
                    default:
                        t.type;
                }
            }
            (0, h.R)(n, y, r.C.ChannelMessage, { filesMetadata: a, origin: "unknown:clip_share" }), l.closeAllModals();
        } catch (e) {
            throw (d.nx.error(e), e);
        }
    } else
        (0, l.openModalLazy)(
            async () => {
                let { default: n } = await Promise.all([
                    a.e("267732"),
                    a.e("461815"),
                    a.e("618416"),
                    a.e("524434"),
                    a.e("533158"),
                    a.e("721642"),
                    a.e("130891"),
                    a.e("224155"),
                    a.e("481647"),
                    a.e("776602"),
                    a.e("140402"),
                    a.e("385653"),
                    a.e("401518"),
                    a.e("323354"),
                    a.e("577084"),
                    a.e("844780"),
                    a.e("979630"),
                    a.e("236946"),
                    a.e("692639"),
                    a.e("565617"),
                    a.e("890480"),
                    a.e("440963"),
                    a.e("766031"),
                    a.e("394317"),
                    a.e("744385"),
                    a.e("523601"),
                    a.e("895008"),
                    a.e("92871"),
                ]).then(a.bind(a, 243258));
                return (a) => (0, t.jsx)(n, { ...a, clips: e, analyticsLocations: g });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}

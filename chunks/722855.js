"use strict";
n.d(t, { A: () => N });
var r = n(687123),
    i = n(508602),
    a = n(843472),
    s = n(155718),
    o = n(439372),
    l = n(128265),
    u = n(626584),
    c = n(473503),
    d = n(207560),
    _ = n(662502),
    f = n(64313),
    p = n(734057),
    h = n(320501),
    m = n(309010),
    g = n(287809),
    E = n(847599),
    A = n(36149),
    I = n(652215),
    T = n(835002);
let y = new u.A("AgeVerificationManager");
function S(e) {
    let { channelId: t, message: n } = e,
        r = h.A.getMessage(t, n.id);
    if (r?.embeds?.[0]?.type === i.A.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
        let e = r.embeds[0].fields?.find((e) => e.rawName === A.uN.CONTENT_TYPE);
        e?.rawValue === A.Wv.ERROR
            ? (_.A.showFailedToast(T.OB.TIGGER_PAWTECT_ERROR), (0, E.Vh)(E.oQ.ERROR))
            : e?.rawValue === A.Wv.VERIFIED_ADULT
              ? (_.A.showSuccessToast(T.OB.TIGGER_PAWTECT_VERIFIED), (0, E.Vh)(E.oQ.VERIFIED_ADULT))
              : e?.rawValue === A.Wv.VERIFIED_TEEN &&
                (_.A.showSuccessToast(T.OB.TIGGER_PAWTECT_VERIFIED), (0, E.Vh)(E.oQ.VERIFIED_TEEN));
    }
}
function v(e) {
    a.A.fetchMessages({ channelId: e, limit: I.EMb });
}
function C(e) {
    let t = p.A.getChannel(e);
    (t?.type === I.rbe.GUILD_FORUM || t?.type === I.rbe.GUILD_MEDIA) && (0, c.kB)(t);
}
class b extends o.A {
    _previousAgeVerificationStatus = null;
    handlePostConnectionOpen = () => {
        this._previousAgeVerificationStatus = g.default.getCurrentUser()?.ageVerificationStatus ?? null;
    };
    handleCurrentUserUpdate = (e) => {
        let { user: t } = e,
            n = (0, g.transformUser)(t).ageVerificationStatus ?? null,
            i = this._previousAgeVerificationStatus !== n && n === s.Tk.VERIFIED_ADULT,
            a = (0, f.o)("age-verification-manager"),
            o = i && ((0, d.d6)(r.t.AGE_GATED_SPACES) || a);
        try {
            if (o) {
                let e = m.A.getChannelId(),
                    t = !1;
                l.A.forEach((n) => {
                    let { channelId: r } = n,
                        i = p.A.getChannel(r);
                    i?.nsfw && (l.A.clear(r), r === e && (t = !0));
                }),
                    t && null != e && (v(e), C(e));
            }
        } catch (e) {
            y.warn("Error clearing cache and refetching messages", e);
        } finally {
            this._previousAgeVerificationStatus = n;
        }
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
        MESSAGE_CREATE: S,
    };
}
let N = new b();

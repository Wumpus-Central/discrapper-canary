"use strict";
n.d(t, { A: () => C });
var r = n(687123),
    i = n(508602),
    s = n(843472),
    a = n(155718),
    o = n(439372),
    l = n(128265),
    u = n(626584),
    c = n(473503),
    d = n(207560),
    _ = n(662502),
    f = n(734057),
    p = n(320501),
    h = n(309010),
    m = n(287809),
    E = n(847599),
    g = n(36149),
    A = n(652215),
    I = n(835002);
let T = new u.A("AgeVerificationManager");
function S(e) {
    let { channelId: t, message: n } = e,
        r = p.A.getMessage(t, n.id);
    if (r?.embeds?.[0]?.type === i.A.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
        let e = r.embeds[0].fields?.find((e) => e.rawName === g.uN.CONTENT_TYPE);
        e?.rawValue === g.Wv.ERROR
            ? (_.A.showFailedToast(I.OB.TIGGER_PAWTECT_ERROR), (0, E.Vh)(E.oQ.ERROR))
            : e?.rawValue === g.Wv.VERIFIED_ADULT
              ? (_.A.showSuccessToast(I.OB.TIGGER_PAWTECT_VERIFIED), (0, E.Vh)(E.oQ.VERIFIED_ADULT))
              : e?.rawValue === g.Wv.VERIFIED_TEEN &&
                (_.A.showSuccessToast(I.OB.TIGGER_PAWTECT_VERIFIED), (0, E.Vh)(E.oQ.VERIFIED_TEEN));
    }
}
function y(e) {
    s.A.fetchMessages({ channelId: e, limit: A.EMb });
}
function v(e) {
    let t = f.A.getChannel(e);
    (t?.type === A.rbe.GUILD_FORUM || t?.type === A.rbe.GUILD_MEDIA) && (0, c.kB)(t);
}
class N extends o.A {
    _previousAgeVerificationStatus = null;
    handlePostConnectionOpen = () => {
        this._previousAgeVerificationStatus = m.default.getCurrentUser()?.ageVerificationStatus ?? null;
    };
    handleCurrentUserUpdate = (e) => {
        let { user: t } = e,
            n = (0, m.transformUser)(t).ageVerificationStatus ?? null,
            i =
                this._previousAgeVerificationStatus !== n &&
                n === a.Tk.VERIFIED_ADULT &&
                (0, d.d6)(r.t.AGE_GATED_SPACES);
        try {
            if (i) {
                let e = h.A.getChannelId(),
                    t = !1;
                l.A.forEach((n) => {
                    let { channelId: r } = n,
                        i = f.A.getChannel(r);
                    i?.nsfw && (l.A.clear(r), r === e && (t = !0));
                }),
                    t && null != e && (y(e), v(e));
            }
        } catch (e) {
            T.warn("Error clearing cache and refetching messages", e);
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
let C = new N();

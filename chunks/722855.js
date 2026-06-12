"use strict";
n.d(t, { A: () => N });
var i = n(687123),
    r = n(508602),
    s = n(720149),
    a = n(155718),
    o = n(439372),
    l = n(292446),
    u = n(626584),
    c = n(473503),
    d = n(207560),
    _ = n(381689),
    h = n(734057),
    f = n(232835),
    p = n(309010),
    E = n(287809),
    m = n(847599),
    g = n(36149),
    A = n(652215),
    I = n(835002);
let T = new u.A("AgeVerificationManager");
function S(e) {
    let { channelId: t, message: n } = e,
        i = f.A.getMessage(t, n.id);
    if (i?.embeds?.[0]?.type === r.A.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
        let e = i.embeds[0].fields?.find((e) => e.rawName === g.uN.CONTENT_TYPE);
        e?.rawValue === g.Wv.ERROR
            ? (_.A.showFailedToast(I.OB.TIGGER_PAWTECT_ERROR), (0, m.Vh)(m.oQ.ERROR))
            : e?.rawValue === g.Wv.VERIFIED_ADULT
              ? (_.A.showSuccessToast(I.OB.TIGGER_PAWTECT_VERIFIED), (0, m.Vh)(m.oQ.VERIFIED_ADULT))
              : e?.rawValue === g.Wv.VERIFIED_TEEN &&
                (_.A.showSuccessToast(I.OB.TIGGER_PAWTECT_VERIFIED), (0, m.Vh)(m.oQ.VERIFIED_TEEN));
    }
}
class y extends o.A {
    _previousAgeVerificationStatus = null;
    handlePostConnectionOpen = () => {
        this._previousAgeVerificationStatus = E.default.getCurrentUser()?.ageVerificationStatus ?? null;
    };
    handleCurrentUserUpdate = (e) => {
        let { user: t } = e,
            n = (0, E.transformUser)(t).ageVerificationStatus ?? null,
            r =
                this._previousAgeVerificationStatus !== n &&
                n === a.Tk.VERIFIED_ADULT &&
                (0, d.d6)(i.t.AGE_GATED_SPACES);
        try {
            if (r) {
                let e = p.A.getChannelId(),
                    t = !1;
                if (
                    (l.A.forEach((n) => {
                        let { channelId: i } = n,
                            r = h.A.getChannel(i);
                        r?.nsfw && (l.A.clear(i), i === e && (t = !0));
                    }),
                    t && null != e)
                ) {
                    let t;
                    s.A.fetchMessages({ channelId: e, limit: A.EMb }),
                        (t = h.A.getChannel(e)),
                        (t?.type === A.rbe.GUILD_FORUM || t?.type === A.rbe.GUILD_MEDIA) && (0, c.kB)(t);
                }
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
let N = new y();

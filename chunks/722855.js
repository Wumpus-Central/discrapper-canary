"use strict";
n.d(t, { A: () => C });
var i = n(687123),
    r = n(508602),
    a = n(493336),
    s = n(155718),
    l = n(439372),
    o = n(292446),
    d = n(626584),
    c = n(473503),
    u = n(207560),
    _ = n(381689),
    E = n(734057),
    A = n(232835),
    h = n(309010),
    I = n(287809),
    f = n(847599),
    p = n(36149),
    T = n(652215),
    m = n(835002);
let g = new d.A("AgeVerificationManager");
function S(e) {
    let { channelId: t, message: n } = e,
        i = A.A.getMessage(t, n.id);
    if (i?.embeds?.[0]?.type === r.A.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
        let e = i.embeds[0].fields?.find((e) => e.rawName === p.uN.CONTENT_TYPE);
        e?.rawValue === p.Wv.ERROR
            ? (_.A.showFailedToast(m.OB.TIGGER_PAWTECT_ERROR), (0, f.Vh)(f.oQ.ERROR))
            : e?.rawValue === p.Wv.VERIFIED_ADULT
              ? (_.A.showSuccessToast(m.OB.TIGGER_PAWTECT_VERIFIED), (0, f.Vh)(f.oQ.VERIFIED_ADULT))
              : e?.rawValue === p.Wv.VERIFIED_TEEN &&
                (_.A.showSuccessToast(m.OB.TIGGER_PAWTECT_VERIFIED), (0, f.Vh)(f.oQ.VERIFIED_TEEN));
    }
}
class N extends l.A {
    _previousAgeVerificationStatus = null;
    handlePostConnectionOpen = () => {
        this._previousAgeVerificationStatus = I.default.getCurrentUser()?.ageVerificationStatus ?? null;
    };
    handleCurrentUserUpdate = (e) => {
        let { user: t } = e,
            n = (0, I.transformUser)(t).ageVerificationStatus ?? null,
            r =
                this._previousAgeVerificationStatus !== n &&
                n === s.Tk.VERIFIED_ADULT &&
                (0, u.d6)(i.t.AGE_GATED_SPACES);
        try {
            if (r) {
                let e = h.Ay.getChannelId(),
                    t = !1;
                if (
                    (o.A.forEach((n) => {
                        let { channelId: i } = n,
                            r = E.A.getChannel(i);
                        r?.nsfw && (o.A.clear(i), i === e && (t = !0));
                    }),
                    t && null != e)
                ) {
                    let t;
                    a.A.fetchMessages({ channelId: e, limit: T.EMb }),
                        (t = E.A.getChannel(e)),
                        (t?.type === T.rbe.GUILD_FORUM || t?.type === T.rbe.GUILD_MEDIA) && (0, c.kB)(t);
                }
            }
        } catch (e) {
            g.warn("Error clearing cache and refetching messages", e);
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

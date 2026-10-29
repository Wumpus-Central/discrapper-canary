n.d(t, { A: () => O });
var i = n(508602),
    r = n(148494),
    a = n(439372),
    s = n(868207),
    l = n(626584),
    o = n(473503),
    d = n(662502),
    c = n(358047),
    u = n(734057),
    _ = n(232835),
    E = n(309010),
    A = n(287809),
    h = n(306537),
    f = n(424743),
    I = n(36149),
    p = n(277861),
    T = n(652215),
    m = n(835002);
let g = new l.A("AgeVerificationManager");
function S(e) {
    let { channelId: t, message: n } = e,
        r = _.A.getMessage(t, n.id);
    if (r?.embeds?.[0]?.type !== i.A.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return;
    let a = r?.embeds?.[0]?.fields?.find((e) => e.rawName === f.uN.CONTENT_TYPE);
    (a?.rawValue === f.Wv.MANUAL_REVIEW_SUBMITTED && (0, p.xf)(),
        a?.rawValue === f.Wv.ERROR
            ? (d.A.showFailedToast(m.OB.TIGGER_PAWTECT_ERROR), (0, h.Vh)(h.oQ.ERROR))
            : a?.rawValue === f.Wv.FAE_FAILED
              ? (d.A.showFailedToast(m.OB.AGE_VERIFICATION_FAE_FAILED), (0, h.Vh)(h.oQ.FAE_FAILED))
              : a?.rawValue === f.Wv.ID_FAILED
                ? (d.A.showFailedToast(m.OB.AGE_VERIFICATION_ID_FAILED), (0, h.Vh)(h.oQ.ID_FAILED))
                : a?.rawValue === f.Wv.UNDERAGE
                  ? (d.A.showFailedToast(m.OB.AGE_VERIFICATION_UNDERAGE), (0, h.Vh)(h.oQ.UNDERAGE))
                  : a?.rawValue === f.Wv.VERIFIED_ADULT
                    ? (d.A.showSuccessToast(m.OB.TIGGER_PAWTECT_VERIFIED), (0, h.Vh)(h.oQ.VERIFIED_ADULT))
                    : a?.rawValue === f.Wv.VERIFIED_TEEN &&
                      (d.A.showSuccessToast(m.OB.TIGGER_PAWTECT_VERIFIED), (0, h.Vh)(h.oQ.VERIFIED_TEEN)));
}
function N(e) {
    r.A.fetchMessages({ channelId: e, limit: T.EMb });
}
class C extends a.A {
    _previousAgeVerificationStatus = null;
    handlePostConnectionOpen = () => {
        this._previousAgeVerificationStatus = A.default.getCurrentUser()?.ageVerificationStatus ?? null;
    };
    handleCurrentUserUpdate = (e) => {
        let { user: t } = e,
            n = (0, A.transformUser)(t).ageVerificationStatus ?? null,
            i = this._previousAgeVerificationStatus !== n,
            r = i && (0, I.Lb)(n);
        i && (0, p.a6)();
        try {
            if (r) {
                s.A.forEach((e) => {
                    let { channelId: t } = e;
                    return s.A.clear(t);
                });
                let e = E.Ay.getChannelId();
                if (null != e) {
                    let t;
                    (N(e),
                        (t = u.A.getChannel(e)),
                        (t?.type === T.rbe.GUILD_FORUM || t?.type === T.rbe.GUILD_MEDIA) && (0, o.kB)(t));
                    let n = c.Ay.getCurrentSidebarChannelId(e);
                    null != n && N(n);
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
let O = new C();

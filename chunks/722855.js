var i = n(508602),
    r = n(138399),
    a = n(439372),
    s = n(755364),
    l = n(626584),
    o = n(473503),
    d = n(662502),
    c = n(799704),
    u = n(734057),
    _ = n(596344),
    E = n(309010),
    A = n(287809),
    f = n(171576),
    h = n(424743),
    I = n(36149),
    p = n(277861),
    m = n(652215),
    T = n(835002);
let g = new l.A("AgeVerificationManager");
function S(e) {
    let { channelId: t, message: n } = e,
        r = _.A.getMessage(t, n.id);
    if (r?.embeds?.[0]?.type !== i.A.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return;
    let a = r?.embeds?.[0]?.fields?.find((e) => e.rawName === h.uN.CONTENT_TYPE);
    (a?.rawValue === h.Wv.MANUAL_REVIEW_SUBMITTED && (0, p.xf)(),
        a?.rawValue === h.Wv.ERROR
            ? (d.A.showFailedToast(T.OB.AGE_VERIFICATION_ERROR), (0, f.Vh)(f.oQ.ERROR))
            : a?.rawValue === h.Wv.FAE_FAILED
              ? (d.A.showFailedToast(T.OB.AGE_VERIFICATION_FAE_FAILED), (0, f.Vh)(f.oQ.FAE_FAILED))
              : a?.rawValue === h.Wv.ID_FAILED
                ? (d.A.showFailedToast(T.OB.AGE_VERIFICATION_ID_FAILED), (0, f.Vh)(f.oQ.ID_FAILED))
                : a?.rawValue === h.Wv.UNDERAGE
                  ? (d.A.showFailedToast(T.OB.AGE_VERIFICATION_UNDERAGE), (0, f.Vh)(f.oQ.UNDERAGE))
                  : a?.rawValue === h.Wv.VERIFIED_ADULT
                    ? (d.A.showSuccessToast(T.OB.AGE_VERIFICATION_VERIFIED), (0, f.Vh)(f.oQ.VERIFIED_ADULT))
                    : a?.rawValue === h.Wv.VERIFIED_TEEN &&
                      (d.A.showSuccessToast(T.OB.AGE_VERIFICATION_VERIFIED), (0, f.Vh)(f.oQ.VERIFIED_TEEN)));
}
function N(e) {
    r.A.fetchMessages({ channelId: e, limit: 30 });
}
class C extends a.A {
    _previousAgeVerificationStatus = null;
    handlePostConnectionOpen = () => {
        this._previousAgeVerificationStatus = A.default.getCurrentUser()?.ageVerificationStatus ?? null;
    };
    handleCurrentUserUpdate = (e) => {
        let { user: t } = e,
            n = (0, A.oV)(t).ageVerificationStatus ?? null,
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
                        (t?.type === m.rbe.GUILD_FORUM || t?.type === m.rbe.GUILD_MEDIA) && (0, o.kB)(t));
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
n.d(t, {}, { A: O });

var i = n(508602),
    r = n(138399),
    a = n(439372),
    s = n(755364),
    l = n(626584),
    o = n(473503),
    d = n(799704),
    c = n(734057),
    u = n(596344),
    _ = n(309010),
    E = n(287809),
    A = n(424743),
    f = n(36149),
    h = n(277861),
    I = n(652215);
let p = new l.A("AgeVerificationManager");
function m(e) {
    let { channelId: t, message: n } = e,
        r = u.A.getMessage(t, n.id);
    if (r?.embeds?.[0]?.type !== i.A.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return;
    let a = r?.embeds?.[0]?.fields?.find((e) => e.rawName === A.uN.CONTENT_TYPE);
    a?.rawValue === A.Wv.MANUAL_REVIEW_SUBMITTED && (0, h.xf)();
}
function T(e) {
    r.A.fetchMessages({ channelId: e, limit: 30 });
}
class g extends a.A {
    _previousAgeVerificationStatus = null;
    handlePostConnectionOpen = () => {
        this._previousAgeVerificationStatus = E.default.getCurrentUser()?.ageVerificationStatus ?? null;
    };
    handleCurrentUserUpdate = (e) => {
        let { user: t } = e,
            n = (0, E.oV)(t).ageVerificationStatus ?? null,
            i = this._previousAgeVerificationStatus !== n,
            r = i && (0, f.Lb)(n);
        i && (0, h.a6)();
        try {
            if (r) {
                s.A.forEach((e) => {
                    let { channelId: t } = e;
                    return s.A.clear(t);
                });
                let e = _.Ay.getChannelId();
                if (null != e) {
                    let t;
                    (T(e),
                        (t = c.A.getChannel(e)),
                        (t?.type === I.rbe.GUILD_FORUM || t?.type === I.rbe.GUILD_MEDIA) && (0, o.kB)(t));
                    let n = d.Ay.getCurrentSidebarChannelId(e);
                    null != n && T(n);
                }
            }
        } catch (e) {
            p.warn("Error clearing cache and refetching messages", e);
        } finally {
            this._previousAgeVerificationStatus = n;
        }
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
        MESSAGE_CREATE: m,
    };
}
let S = new g();
n.d(t, {}, { A: S });

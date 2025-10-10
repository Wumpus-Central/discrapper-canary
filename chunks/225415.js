n.d(t, { Z: () => A }), n(388685);
var r = n(470167),
    i = n(904245),
    a = n(911969),
    o = n(147913),
    s = n(89892),
    l = n(710845),
    c = n(109590),
    u = n(681678),
    d = n(128064),
    f = n(592125),
    _ = n(375954),
    p = n(944486),
    h = n(594174),
    m = n(480916),
    g = n(81643),
    E = n(981631),
    b = n(484710);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let O = new l.Z("AgeVerificationManager");
function v(e) {
    var t, n, i;
    let { channelId: a, message: o } = e,
        s = _.Z.getMessage(a, o.id);
    if (
        (null == s || null == (n = s.embeds) || null == (t = n[0]) ? void 0 : t.type) ===
        r.h.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    ) {
        let e = null == (i = s.embeds[0].fields) ? void 0 : i.find((e) => e.rawName === g.g0.CONTENT_TYPE);
        (null == e ? void 0 : e.rawValue) === g.L0.ERROR
            ? (u.Z.showFailedToast(b.wQ.TIGGER_PAWTECT_ERROR), (0, m.zi)(m.o6.ERROR))
            : (null == e ? void 0 : e.rawValue) === g.L0.VERIFIED_ADULT
              ? (u.Z.showSuccessToast(b.wQ.TIGGER_PAWTECT_VERIFIED), (0, m.zi)(m.o6.VERIFIED_ADULT))
              : (null == e ? void 0 : e.rawValue) === g.L0.VERIFIED_TEEN &&
                (u.Z.showSuccessToast(b.wQ.TIGGER_PAWTECT_VERIFIED), (0, m.zi)(m.o6.VERIFIED_TEEN));
    }
}
function I(e) {
    i.Z.fetchMessages({
        channelId: e,
        limit: E.AQB,
    });
}
function T(e) {
    let t = f.Z.getChannel(e);
    ((null == t ? void 0 : t.type) === E.d4z.GUILD_FORUM || (null == t ? void 0 : t.type) === E.d4z.GUILD_MEDIA) &&
        (0, c.EB)(t);
}
class S extends o.Z {
    constructor(...e) {
        super(...e),
            y(this, "_previousAgeVerificationStatus", null),
            y(this, "handlePostConnectionOpen", () => {
                var e, t;
                this._previousAgeVerificationStatus =
                    null != (t = null == (e = h.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus)
                        ? t
                        : null;
            }),
            y(this, "handleCurrentUserUpdate", (e) => {
                var t;
                let { user: n } = e,
                    r = null != (t = (0, h.transformUser)(n).ageVerificationStatus) ? t : null,
                    i =
                        this._previousAgeVerificationStatus !== r &&
                        r === a.F$.VERIFIED_ADULT &&
                        (0, d.c_)("age-verification-manager");
                try {
                    if (i) {
                        let e = p.Z.getChannelId(),
                            t = !1;
                        s.Z.forEach((n) => {
                            let { channelId: r } = n,
                                i = f.Z.getChannel(r);
                            (null == i ? void 0 : i.nsfw) && (s.Z.clear(r), r === e && (t = !0));
                        }),
                            t && null != e && (I(e), T(e));
                    }
                } catch (e) {
                    O.warn("Error clearing cache and refetching messages", e);
                } finally {
                    this._previousAgeVerificationStatus = r;
                }
            }),
            y(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
                MESSAGE_CREATE: v,
            });
    }
}
let A = new S();

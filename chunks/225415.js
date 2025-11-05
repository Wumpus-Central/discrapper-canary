n.d(t, { Z: () => C }), n(388685);
var r = n(470167),
    i = n(904245),
    a = n(911969),
    o = n(147913),
    s = n(89892),
    l = n(710845),
    c = n(109590),
    u = n(681678),
    d = n(128064),
    f = n(312870),
    _ = n(592125),
    p = n(375954),
    h = n(944486),
    m = n(594174),
    g = n(480916),
    E = n(81643),
    b = n(981631),
    y = n(484710);
function O(e, t, n) {
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
let v = new l.Z("AgeVerificationManager");
function I(e) {
    var t, n, i;
    let { channelId: a, message: o } = e,
        s = p.Z.getMessage(a, o.id);
    if (
        (null == s || null == (n = s.embeds) || null == (t = n[0]) ? void 0 : t.type) ===
        r.h.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    ) {
        let e = null == (i = s.embeds[0].fields) ? void 0 : i.find((e) => e.rawName === E.g0.CONTENT_TYPE);
        (null == e ? void 0 : e.rawValue) === E.L0.ERROR
            ? (u.Z.showFailedToast(y.wQ.TIGGER_PAWTECT_ERROR), (0, g.zi)(g.o6.ERROR))
            : (null == e ? void 0 : e.rawValue) === E.L0.VERIFIED_ADULT
              ? (u.Z.showSuccessToast(y.wQ.TIGGER_PAWTECT_VERIFIED), (0, g.zi)(g.o6.VERIFIED_ADULT))
              : (null == e ? void 0 : e.rawValue) === E.L0.VERIFIED_TEEN &&
                (u.Z.showSuccessToast(y.wQ.TIGGER_PAWTECT_VERIFIED), (0, g.zi)(g.o6.VERIFIED_TEEN));
    }
}
function T(e) {
    i.Z.fetchMessages({
        channelId: e,
        limit: b.AQB,
    });
}
function S(e) {
    let t = _.Z.getChannel(e);
    ((null == t ? void 0 : t.type) === b.d4z.GUILD_FORUM || (null == t ? void 0 : t.type) === b.d4z.GUILD_MEDIA) &&
        (0, c.EB)(t);
}
class A extends o.Z {
    constructor(...e) {
        super(...e),
            O(this, "_previousAgeVerificationStatus", null),
            O(this, "handlePostConnectionOpen", () => {
                var e, t;
                this._previousAgeVerificationStatus =
                    null != (t = null == (e = m.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus)
                        ? t
                        : null;
            }),
            O(this, "handleCurrentUserUpdate", (e) => {
                var t;
                let { user: n } = e,
                    r = null != (t = (0, m.transformUser)(n).ageVerificationStatus) ? t : null,
                    i = this._previousAgeVerificationStatus !== r && r === a.F$.VERIFIED_ADULT,
                    o = (0, f.U)("age-verification-manager"),
                    l = i && ((0, d.c_)("age-verification-manager") || o);
                try {
                    if (l) {
                        let e = h.Z.getChannelId(),
                            t = !1;
                        s.Z.forEach((n) => {
                            let { channelId: r } = n,
                                i = _.Z.getChannel(r);
                            (null == i ? void 0 : i.nsfw) && (s.Z.clear(r), r === e && (t = !0));
                        }),
                            t && null != e && (T(e), S(e));
                    }
                } catch (e) {
                    v.warn("Error clearing cache and refetching messages", e);
                } finally {
                    this._previousAgeVerificationStatus = r;
                }
            }),
            O(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
                MESSAGE_CREATE: I,
            });
    }
}
let C = new A();

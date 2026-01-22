n.d(t, { Z: () => N }), n(388685);
var r = n(310882),
    i = n(470167),
    a = n(904245),
    o = n(911969),
    s = n(147913),
    l = n(89892),
    c = n(710845),
    u = n(109590),
    d = n(980945),
    f = n(681678),
    p = n(312870),
    _ = n(592125),
    h = n(375954),
    m = n(944486),
    g = n(594174),
    E = n(480916),
    b = n(81643),
    y = n(981631),
    O = n(484710);
function v(e, t, n) {
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
let S = new c.Z("AgeVerificationManager");
function I(e) {
    var t, n, r;
    let { channelId: a, message: o } = e,
        s = h.Z.getMessage(a, o.id);
    if (
        (null == s || null == (n = s.embeds) || null == (t = n[0]) ? void 0 : t.type) ===
        i.h.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    ) {
        let e = null == (r = s.embeds[0].fields) ? void 0 : r.find((e) => e.rawName === b.g0.CONTENT_TYPE);
        (null == e ? void 0 : e.rawValue) === b.L0.ERROR
            ? (f.Z.showFailedToast(O.wQ.TIGGER_PAWTECT_ERROR), (0, E.zi)(E.o6.ERROR))
            : (null == e ? void 0 : e.rawValue) === b.L0.VERIFIED_ADULT
              ? (f.Z.showSuccessToast(O.wQ.TIGGER_PAWTECT_VERIFIED), (0, E.zi)(E.o6.VERIFIED_ADULT))
              : (null == e ? void 0 : e.rawValue) === b.L0.VERIFIED_TEEN &&
                (f.Z.showSuccessToast(O.wQ.TIGGER_PAWTECT_VERIFIED), (0, E.zi)(E.o6.VERIFIED_TEEN));
    }
}
function T(e) {
    a.Z.fetchMessages({
        channelId: e,
        limit: y.AQB,
    });
}
function C(e) {
    let t = _.Z.getChannel(e);
    ((null == t ? void 0 : t.type) === y.d4z.GUILD_FORUM || (null == t ? void 0 : t.type) === y.d4z.GUILD_MEDIA) &&
        (0, u.EB)(t);
}
class A extends s.Z {
    constructor(...e) {
        super(...e),
            v(this, "_previousAgeVerificationStatus", null),
            v(this, "handlePostConnectionOpen", () => {
                var e, t;
                this._previousAgeVerificationStatus =
                    null != (t = null == (e = g.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus)
                        ? t
                        : null;
            }),
            v(this, "handleCurrentUserUpdate", (e) => {
                var t;
                let { user: n } = e,
                    i = null != (t = (0, g.transformUser)(n).ageVerificationStatus) ? t : null,
                    a = this._previousAgeVerificationStatus !== i && i === o.F$.VERIFIED_ADULT,
                    s = (0, p.U)("age-verification-manager"),
                    c = a && ((0, d.ML)(r.X.AGE_GATED_SPACES) || s);
                try {
                    if (c) {
                        let e = m.Z.getChannelId(),
                            t = !1;
                        l.Z.forEach((n) => {
                            let { channelId: r } = n,
                                i = _.Z.getChannel(r);
                            (null == i ? void 0 : i.nsfw) && (l.Z.clear(r), r === e && (t = !0));
                        }),
                            t && null != e && (T(e), C(e));
                    }
                } catch (e) {
                    S.warn("Error clearing cache and refetching messages", e);
                } finally {
                    this._previousAgeVerificationStatus = i;
                }
            }),
            v(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
                MESSAGE_CREATE: I,
            });
    }
}
let N = new A();

n.d(t, {
    A: () => N,
}),
    n(896048);
var r = n(687123),
    i = n(508602),
    a = n(843472),
    s = n(155718),
    o = n(439372),
    l = n(128265),
    c = n(626584),
    u = n(473503),
    d = n(207560),
    f = n(662502),
    p = n(64313),
    _ = n(734057),
    h = n(320501),
    m = n(309010),
    g = n(287809),
    E = n(847599),
    b = n(36149),
    y = n(652215),
    O = n(835002);

function A(e, t, n) {
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
let v = new c.A("AgeVerificationManager");

function S(e) {
    var t, n, r;
    let { channelId: a, message: s } = e,
        o = h.A.getMessage(a, s.id);
    if (
        (null == o || null == (n = o.embeds) || null == (t = n[0]) ? void 0 : t.type) ===
        i.A.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    ) {
        let e = null == (r = o.embeds[0].fields) ? void 0 : r.find((e) => e.rawName === b.uN.CONTENT_TYPE);
        (null == e ? void 0 : e.rawValue) === b.Wv.ERROR
            ? (f.A.showFailedToast(O.OB.TIGGER_PAWTECT_ERROR), (0, E.Vh)(E.oQ.ERROR))
            : (null == e ? void 0 : e.rawValue) === b.Wv.VERIFIED_ADULT
              ? (f.A.showSuccessToast(O.OB.TIGGER_PAWTECT_VERIFIED), (0, E.Vh)(E.oQ.VERIFIED_ADULT))
              : (null == e ? void 0 : e.rawValue) === b.Wv.VERIFIED_TEEN &&
                (f.A.showSuccessToast(O.OB.TIGGER_PAWTECT_VERIFIED), (0, E.Vh)(E.oQ.VERIFIED_TEEN));
    }
}

function I(e) {
    a.A.fetchMessages({
        channelId: e,
        limit: y.EMb,
    });
}

function T(e) {
    let t = _.A.getChannel(e);
    ((null == t ? void 0 : t.type) === y.rbe.GUILD_FORUM || (null == t ? void 0 : t.type) === y.rbe.GUILD_MEDIA) &&
        (0, u.kB)(t);
}
class C extends o.A {
    constructor(...e) {
        super(...e),
            A(this, "_previousAgeVerificationStatus", null),
            A(this, "handlePostConnectionOpen", () => {
                var e, t;
                this._previousAgeVerificationStatus =
                    null != (e = null == (t = g.default.getCurrentUser()) ? void 0 : t.ageVerificationStatus)
                        ? e
                        : null;
            }),
            A(this, "handleCurrentUserUpdate", (e) => {
                var t;
                let { user: n } = e,
                    i = null != (t = (0, g.transformUser)(n).ageVerificationStatus) ? t : null,
                    a = this._previousAgeVerificationStatus !== i && i === s.Tk.VERIFIED_ADULT,
                    o = (0, p.o)("age-verification-manager"),
                    c = a && ((0, d.d6)(r.t.AGE_GATED_SPACES) || o);
                try {
                    if (c) {
                        let e = m.A.getChannelId(),
                            t = !1;
                        l.A.forEach((n) => {
                            let { channelId: r } = n,
                                i = _.A.getChannel(r);
                            (null == i ? void 0 : i.nsfw) && (l.A.clear(r), r === e && (t = !0));
                        }),
                            t && null != e && (I(e), T(e));
                    }
                } catch (e) {
                    v.warn("Error clearing cache and refetching messages", e);
                } finally {
                    this._previousAgeVerificationStatus = i;
                }
            }),
            A(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
                MESSAGE_CREATE: S,
            });
    }
}
let N = new C();

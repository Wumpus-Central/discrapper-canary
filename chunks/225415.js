(n.d(t, { Z: () => I }), n(388685));
var r = n(470167),
    i = n(904245),
    a = n(911969),
    o = n(147913),
    s = n(89892),
    l = n(710845),
    c = n(681678),
    u = n(128064),
    d = n(592125),
    f = n(375954),
    _ = n(944486),
    p = n(594174),
    h = n(480916),
    m = n(81643),
    g = n(981631),
    E = n(484710);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let y = new l.Z('AgeVerificationManager');
function O(e) {
    var t, n, i;
    let { channelId: a, message: o } = e,
        s = f.Z.getMessage(a, o.id);
    if ((null == s || null == (n = s.embeds) || null == (t = n[0]) ? void 0 : t.type) === r.h.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
        let e = null == (i = s.embeds[0].fields) ? void 0 : i.find((e) => e.rawName === m.g0.CONTENT_TYPE);
        (null == e ? void 0 : e.rawValue) === m.L0.ERROR ? (c.Z.showFailedToast(E.wQ.TIGGER_PAWTECT_ERROR), (0, h.zi)(h.o6.ERROR)) : (null == e ? void 0 : e.rawValue) === m.L0.VERIFIED_ADULT ? (c.Z.showSuccessToast(E.wQ.TIGGER_PAWTECT_VERIFIED), (0, h.zi)(h.o6.VERIFIED_ADULT)) : (null == e ? void 0 : e.rawValue) === m.L0.VERIFIED_TEEN && (c.Z.showSuccessToast(E.wQ.TIGGER_PAWTECT_VERIFIED), (0, h.zi)(h.o6.VERIFIED_TEEN));
    }
}
class v extends o.Z {
    constructor(...e) {
        (super(...e),
            b(this, '_previousAgeVerificationStatus', null),
            b(this, 'handlePostConnectionOpen', () => {
                var e, t;
                this._previousAgeVerificationStatus = null != (t = null == (e = p.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus) ? t : null;
            }),
            b(this, 'handleCurrentUserUpdate', (e) => {
                var t;
                let { user: n } = e,
                    r = null != (t = (0, p.transformUser)(n).ageVerificationStatus) ? t : null;
                try {
                    if (this._previousAgeVerificationStatus !== r && r === a.F$.VERIFIED_ADULT && (0, u.c_)('age-verification-manager')) {
                        let e = _.Z.getChannelId(),
                            t = !1;
                        (s.Z.forEach((n) => {
                            let { channelId: r } = n,
                                i = d.Z.getChannel(r);
                            (null == i ? void 0 : i.nsfw) && (s.Z.clear(r), r === e && (t = !0));
                        }),
                            t &&
                                null != e &&
                                i.Z.fetchMessages({
                                    channelId: e,
                                    limit: g.AQB
                                }));
                    }
                } catch (e) {
                    y.warn('Error clearing cache and refetching messages', e);
                } finally {
                    this._previousAgeVerificationStatus = r;
                }
            }),
            b(this, 'actions', {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
                MESSAGE_CREATE: O
            }));
    }
}
let I = new v();

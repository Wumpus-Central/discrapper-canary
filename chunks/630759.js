n.d(e, {
    J6: () => k,
    LO: () => K,
    TQ: () => F,
    UB: () => W,
    ZU: () => P,
    Zn: () => w,
    aZ: () => D,
    bo: () => L,
    fz: () => H,
    kK: () => V,
    lg: () => G,
    om: () => x,
    pL: () => M,
    uV: () => Z,
    uX: () => B
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(47120);
var r = n(250683),
    i = n(512722),
    a = n.n(i),
    o = n(913527),
    l = n.n(o),
    c = n(544891),
    u = n(253135),
    E = n(668781),
    s = n(314897),
    d = n(131951),
    _ = n(19780),
    f = n(959457),
    S = n(594174),
    h = n(70956),
    y = n(63063),
    g = n(5192),
    I = n(960048),
    T = n(51144),
    R = n(90641),
    p = n(615830),
    U = n(352954),
    C = n(571826),
    A = n(760373),
    m = n(981631),
    N = n(388032);
function Z() {
    return y.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
}
function D() {
    return y.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
}
function M() {
    return y.Z.getArticleURL(m.BhN.END_TO_END_ENCRYPTION);
}
function F(t, e, n, r, i) {
    n ? R.Z.createSecureFramesVerifiedKey(t, e) : R.Z.createSecureFramesTransientKey(t, e),
        (0, C.M1)({
            channelId: r,
            userId: t,
            analyticsLocation: i
        });
}
function K(t, e, n) {
    if (n) {
        let n = (0, u.MK)(new Uint8Array(e));
        R.Z.deleteSecureFramesVerifiedKey(t, n);
    } else R.Z.deleteSecureFramesTransientKey(t);
}
function P(t, e) {
    U.Z.openSecureFramesUpdateConfirmation({
        title: N.intl.string(N.t['hdL15+']),
        subtitle: N.intl.string(N.t['8VGYKi']),
        onConfirm: () => {
            R.Z.deleteSecureFramesVerifiedKey(t, e), (0, C.Pn)();
        }
    });
}
function w(t) {
    let e = S.default.getUser(t),
        n = T.ZP.getName(e);
    U.Z.openSecureFramesUpdateConfirmation({
        title: N.intl.formatToPlainString(N.t.K6NGBw, { username: n }),
        subtitle: N.intl.string(N.t.F1BQKy),
        onConfirm: () => {
            R.Z.deleteSecureFramesUserVerifiedKeys(t), (0, C.DF)();
        }
    });
}
function L(t) {
    let e = l()(t),
        n = l()().diff(e, 's');
    if (n > 12 * h.Z.Seconds.DAYS_30) {
        let t = Math.round(n / (12 * h.Z.Seconds.DAYS_30));
        return N.intl.formatToPlainString(N.t.F1wqkJ, { count: t });
    }
    if (n > h.Z.Seconds.DAYS_30) {
        let t = Math.round(n / h.Z.Seconds.DAYS_30);
        return N.intl.formatToPlainString(N.t['iT+b+/'], { count: t });
    }
    if (n > 7 * h.Z.Seconds.DAY) {
        let t = Math.round(n / (7 * h.Z.Seconds.DAY));
        return N.intl.formatToPlainString(N.t.dLurKS, { count: t });
    }
    if (n > h.Z.Seconds.DAY) {
        let t = Math.round(n / h.Z.Seconds.DAY);
        return N.intl.formatToPlainString(N.t.LE8a2N, { count: t });
    }
    if (n > h.Z.Seconds.HOUR) {
        let t = Math.round(n / h.Z.Seconds.HOUR);
        return N.intl.formatToPlainString(N.t.KULxVV, { count: t });
    } else {
        if (!(n > h.Z.Seconds.MINUTE)) return N.intl.formatToPlainString(N.t['/w0Qp6'], { count: n });
        let t = Math.round(n / h.Z.Seconds.MINUTE);
        return N.intl.formatToPlainString(N.t.ws6rWl, { count: t });
    }
}
function V(t) {
    let { isCurrentUserKeyPersistent: e, isOtherUserKeyPersistent: n, otherUserNickname: r } = t;
    return e && n
        ? N.intl.format(N.t['FJN+kp'], { helpArticle: Z() })
        : e
          ? N.intl.format(N.t['p/9PGh'], {
                username: r,
                helpArticle: Z()
            })
          : n
            ? N.intl.format(N.t['qT5z8/'], { helpArticle: Z() })
            : N.intl.format(N.t['6JLy+v'], { helpArticle: Z() });
}
async function b(t) {
    let e = s.default.getStaticAuthSessionId();
    return a()(null != e, '[getCurrentUserPublicKey] session id should not be null'), await d.Z.getMLSSigningKey(e, t);
}
function O(t) {
    let e = r.fromByteArray(new Uint8Array(t));
    return 'data:application/octet-stream;base64,'.concat(e);
}
async function k(t, e, n) {
    try {
        return (
            await c.tn.post({
                url: m.ANM.VOICE_MATCH_PUBLIC_KEY(t),
                body: {
                    public_key: O(e),
                    key_version: n
                },
                rejectWithError: !1
            })
        ).body.is_match;
    } catch (t) {
        throw (I.Z.captureException(t), t);
    }
}
async function Y(t) {
    let { key: e, signature: n } = await b(t);
    try {
        await c.tn.put({
            url: m.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: O(e),
                signature: O(n),
                key_version: t
            },
            rejectWithError: !1
        }),
            R.Z.addUploadedKeyVersion(t);
    } catch (t) {
        throw (I.Z.captureException(t), t);
    }
}
function v(t) {
    return p.Z.getUploadedKeyVersionsCached().includes(t);
}
async function x(t) {
    v(t) || (await Y(t));
}
async function B(t) {
    if (!v(t)) return await Y(t), !0;
    let e = s.default.getId(),
        { key: n } = await b(t),
        r = await k(e, n, t);
    return r || (0, C.KA)(t), r;
}
function W(t, e) {
    let [n, r] = e;
    if (!n.isUserConnected(t)) return !1;
    let i = n.getSecureFramesRosterMapEntry(t);
    if (null == i) return !1;
    let a = new Uint8Array(i);
    for (let e of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(e, t)) continue;
        let n = f.Z.getSecureFramesRosterMapEntry(e, t);
        if (null == n) return !0;
        let i = new Uint8Array(n);
        for (let t = 0; t < a.length; t++) if (a[t] !== i[t]) return !0;
    }
    return !1;
}
function G(t) {
    let { userId: e, channelId: n, nickname: r } = t;
    (0, C.CW)({
        userId: e,
        channelId: n,
        keyVersion: A.GB,
        reason: A.Xe.OTHER_USER_INCONSISTENT_KEYS
    }),
        E.Z.show({
            title: N.intl.string(N.t.mznLyc),
            body: N.intl.format(N.t.WY6IKS, { username: r })
        });
}
function H(t) {
    let { userId: e, guildId: n, channelId: r } = t;
    if (!W(e, [_.Z, f.Z])) return !0;
    {
        let t = S.default.getUser(e),
            i = g.ZP.getName(n, r, t);
        return (
            G({
                userId: e,
                channelId: r,
                nickname: i
            }),
            !1
        );
    }
}

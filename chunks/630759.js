n.d(t, {
    J6: () => V,
    LO: () => P,
    TQ: () => Z,
    UB: () => j,
    ZU: () => w,
    Zn: () => M,
    aZ: () => O,
    bo: () => F,
    fz: () => G,
    kK: () => K,
    lg: () => B,
    om: () => Y,
    pL: () => D,
    uV: () => b,
    uX: () => x
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
    n(610885),
    n(126298),
    n(47120);
var r = n(250683),
    i = n(512722),
    a = n.n(i),
    o = n(913527),
    c = n.n(o),
    u = n(544891),
    l = n(253135),
    s = n(668781),
    E = n(314897),
    d = n(131951),
    f = n(19780),
    _ = n(959457),
    S = n(594174),
    y = n(70956),
    h = n(63063),
    p = n(5192),
    g = n(960048),
    N = n(51144),
    I = n(90641),
    m = n(615830),
    T = n(352954),
    R = n(571826),
    U = n(760373),
    C = n(981631),
    A = n(388032);
function b() {
    return h.Z.getArticleURL(C.BhN.END_TO_END_ENCRYPTION);
}
function O() {
    return h.Z.getArticleURL(C.BhN.END_TO_END_ENCRYPTION);
}
function D() {
    return h.Z.getArticleURL(C.BhN.END_TO_END_ENCRYPTION);
}
function Z(e, t, n, r, i) {
    n ? I.Z.createSecureFramesVerifiedKey(e, t) : I.Z.createSecureFramesTransientKey(e, t),
        (0, R.M1)({
            channelId: r,
            userId: e,
            analyticsLocation: i
        });
}
function P(e, t, n) {
    if (n) {
        let n = (0, l.MK)(new Uint8Array(t));
        I.Z.deleteSecureFramesVerifiedKey(e, n);
    } else I.Z.deleteSecureFramesTransientKey(e);
}
function w(e, t) {
    T.Z.openSecureFramesUpdateConfirmation({
        title: A.NW.string(A.t['hdL15+']),
        subtitle: A.NW.string(A.t['8VGYKi']),
        onConfirm: () => {
            I.Z.deleteSecureFramesVerifiedKey(e, t), (0, R.Pn)();
        }
    });
}
function M(e) {
    let t = S.default.getUser(e),
        n = N.ZP.getName(t);
    T.Z.openSecureFramesUpdateConfirmation({
        title: A.NW.formatToPlainString(A.t.K6NGBw, { username: n }),
        subtitle: A.NW.string(A.t.F1BQKy),
        onConfirm: () => {
            I.Z.deleteSecureFramesUserVerifiedKeys(e), (0, R.DF)();
        }
    });
}
function F(e) {
    let t = c()(e),
        n = c()().diff(t, 's');
    if (n > 12 * y.Z.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * y.Z.Seconds.DAYS_30));
        return A.NW.formatToPlainString(A.t.F1wqkJ, { count: e });
    }
    if (n > y.Z.Seconds.DAYS_30) {
        let e = Math.round(n / y.Z.Seconds.DAYS_30);
        return A.NW.formatToPlainString(A.t['iT+b+/'], { count: e });
    }
    if (n > 7 * y.Z.Seconds.DAY) {
        let e = Math.round(n / (7 * y.Z.Seconds.DAY));
        return A.NW.formatToPlainString(A.t.dLurKS, { count: e });
    }
    if (n > y.Z.Seconds.DAY) {
        let e = Math.round(n / y.Z.Seconds.DAY);
        return A.NW.formatToPlainString(A.t.LE8a2N, { count: e });
    }
    if (n > y.Z.Seconds.HOUR) {
        let e = Math.round(n / y.Z.Seconds.HOUR);
        return A.NW.formatToPlainString(A.t.KULxVV, { count: e });
    } else {
        if (!(n > y.Z.Seconds.MINUTE)) return A.NW.formatToPlainString(A.t['/w0Qp6'], { count: n });
        let e = Math.round(n / y.Z.Seconds.MINUTE);
        return A.NW.formatToPlainString(A.t.ws6rWl, { count: e });
    }
}
function K(e) {
    let { isCurrentUserKeyPersistent: t, isOtherUserKeyPersistent: n, otherUserNickname: r } = e;
    return t && n
        ? A.NW.format(A.t['FJN+kp'], { helpArticle: b() })
        : t
          ? A.NW.format(A.t['p/9PGh'], {
                username: r,
                helpArticle: b()
            })
          : n
            ? A.NW.format(A.t['qT5z8/'], { helpArticle: b() })
            : A.NW.format(A.t['6JLy+v'], { helpArticle: b() });
}
async function L(e) {
    let t = E.default.getStaticAuthSessionId();
    return a()(null != t, '[getCurrentUserPublicKey] session id should not be null'), await d.Z.getMLSSigningKey(t, e);
}
function W(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return 'data:application/octet-stream;base64,'.concat(t);
}
async function V(e, t, n) {
    try {
        return (
            await u.tn.post({
                url: C.ANM.VOICE_MATCH_PUBLIC_KEY(e),
                body: {
                    public_key: W(t),
                    key_version: n
                },
                rejectWithError: !1
            })
        ).body.is_match;
    } catch (e) {
        throw (g.Z.captureException(e), e);
    }
}
async function v(e) {
    let { key: t, signature: n } = await L(e);
    try {
        await u.tn.put({
            url: C.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: W(t),
                signature: W(n),
                key_version: e
            },
            rejectWithError: !1
        }),
            I.Z.addUploadedKeyVersion(e);
    } catch (e) {
        throw (g.Z.captureException(e), e);
    }
}
function k(e) {
    return m.Z.getUploadedKeyVersionsCached().includes(e);
}
async function Y(e) {
    k(e) || (await v(e));
}
async function x(e) {
    if (!k(e)) return await v(e), !0;
    let t = E.default.getId(),
        { key: n } = await L(e),
        r = await V(t, n, e);
    return r || (0, R.KA)(e), r;
}
function j(e, t) {
    let [n, r] = t;
    if (!n.isUserConnected(e)) return !1;
    let i = n.getSecureFramesRosterMapEntry(e);
    if (null == i) return !1;
    let a = new Uint8Array(i);
    for (let t of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(t, e)) continue;
        let n = _.Z.getSecureFramesRosterMapEntry(t, e);
        if (null == n) return !0;
        let i = new Uint8Array(n);
        for (let e = 0; e < a.length; e++) if (a[e] !== i[e]) return !0;
    }
    return !1;
}
function B(e) {
    let { userId: t, channelId: n, nickname: r } = e;
    (0, R.CW)({
        userId: t,
        channelId: n,
        keyVersion: U.GB,
        reason: U.Xe.OTHER_USER_INCONSISTENT_KEYS
    }),
        s.Z.show({
            title: A.NW.string(A.t.mznLyc),
            body: A.NW.format(A.t.WY6IKS, { username: r })
        });
}
function G(e) {
    let { userId: t, guildId: n, channelId: r } = e;
    if (!j(t, [f.Z, _.Z])) return !0;
    {
        let e = S.default.getUser(t),
            i = p.ZP.getName(n, r, e);
        return (
            B({
                userId: t,
                channelId: r,
                nickname: i
            }),
            !1
        );
    }
}

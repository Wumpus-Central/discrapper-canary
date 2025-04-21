n.d(t, {
    J6: () => v,
    LO: () => P,
    TQ: () => Z,
    UB: () => B,
    ZU: () => w,
    Zn: () => M,
    aZ: () => D,
    bo: () => F,
    fz: () => G,
    kK: () => K,
    lg: () => W,
    om: () => x,
    pL: () => N,
    uV: () => O,
    uX: () => j
}),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(388685);
var r = n(250683),
    i = n(512722),
    a = n.n(i),
    o = n(913527),
    c = n.n(o),
    l = n(544891),
    u = n(253135),
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
    I = n(51144),
    m = n(90641),
    T = n(615830),
    R = n(352954),
    U = n(571826),
    C = n(760373),
    A = n(981631),
    b = n(388032);
function O() {
    return h.Z.getArticleURL(A.BhN.END_TO_END_ENCRYPTION);
}
function D() {
    return h.Z.getArticleURL(A.BhN.END_TO_END_ENCRYPTION);
}
function N() {
    return h.Z.getArticleURL(A.BhN.END_TO_END_ENCRYPTION);
}
function Z(e, t, n, r, i) {
    n ? m.Z.createSecureFramesVerifiedKey(e, t) : m.Z.createSecureFramesTransientKey(e, t),
        (0, U.M1)({
            channelId: r,
            userId: e,
            analyticsLocation: i
        });
}
function P(e, t, n) {
    if (n) {
        let n = (0, u.MK)(new Uint8Array(t));
        m.Z.deleteSecureFramesVerifiedKey(e, n);
    } else m.Z.deleteSecureFramesTransientKey(e);
}
function w(e, t) {
    R.Z.openSecureFramesUpdateConfirmation({
        title: b.intl.string(b.t['hdL15+']),
        subtitle: b.intl.string(b.t['8VGYKi']),
        onConfirm: () => {
            m.Z.deleteSecureFramesVerifiedKey(e, t), (0, U.Pn)();
        }
    });
}
function M(e) {
    let t = S.default.getUser(e),
        n = I.ZP.getName(t);
    R.Z.openSecureFramesUpdateConfirmation({
        title: b.intl.formatToPlainString(b.t.K6NGBw, { username: n }),
        subtitle: b.intl.string(b.t.F1BQKy),
        onConfirm: () => {
            m.Z.deleteSecureFramesUserVerifiedKeys(e), (0, U.DF)();
        }
    });
}
function F(e) {
    let t = c()(e),
        n = c()().diff(t, 's');
    if (n > 12 * y.Z.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * y.Z.Seconds.DAYS_30));
        return b.intl.formatToPlainString(b.t.F1wqkJ, { count: e });
    }
    if (n > y.Z.Seconds.DAYS_30) {
        let e = Math.round(n / y.Z.Seconds.DAYS_30);
        return b.intl.formatToPlainString(b.t['iT+b+/'], { count: e });
    }
    if (n > 7 * y.Z.Seconds.DAY) {
        let e = Math.round(n / (7 * y.Z.Seconds.DAY));
        return b.intl.formatToPlainString(b.t.dLurKS, { count: e });
    }
    if (n > y.Z.Seconds.DAY) {
        let e = Math.round(n / y.Z.Seconds.DAY);
        return b.intl.formatToPlainString(b.t.LE8a2N, { count: e });
    }
    if (n > y.Z.Seconds.HOUR) {
        let e = Math.round(n / y.Z.Seconds.HOUR);
        return b.intl.formatToPlainString(b.t.KULxVV, { count: e });
    } else {
        if (!(n > y.Z.Seconds.MINUTE)) return b.intl.formatToPlainString(b.t['/w0Qp6'], { count: n });
        let e = Math.round(n / y.Z.Seconds.MINUTE);
        return b.intl.formatToPlainString(b.t.ws6rWl, { count: e });
    }
}
function K(e) {
    let { isCurrentUserKeyPersistent: t, isOtherUserKeyPersistent: n, otherUserNickname: r } = e;
    return t && n
        ? b.intl.format(b.t['FJN+kp'], { helpArticle: O() })
        : t
          ? b.intl.format(b.t['p/9PGh'], {
                username: r,
                helpArticle: O()
            })
          : n
            ? b.intl.format(b.t['qT5z8/'], { helpArticle: O() })
            : b.intl.format(b.t['6JLy+v'], { helpArticle: O() });
}
async function L(e) {
    let t = E.default.getStaticAuthSessionId();
    return a()(null != t, '[getCurrentUserPublicKey] session id should not be null'), await d.Z.getMLSSigningKey(t, e);
}
function V(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return 'data:application/octet-stream;base64,'.concat(t);
}
async function v(e, t, n) {
    try {
        return (
            await l.tn.post({
                url: A.ANM.VOICE_MATCH_PUBLIC_KEY(e),
                body: {
                    public_key: V(t),
                    key_version: n
                },
                rejectWithError: !1
            })
        ).body.is_match;
    } catch (e) {
        throw (g.Z.captureException(e), e);
    }
}
async function k(e) {
    let { key: t, signature: n } = await L(e);
    try {
        await l.tn.put({
            url: A.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: V(t),
                signature: V(n),
                key_version: e
            },
            rejectWithError: !1
        }),
            m.Z.addUploadedKeyVersion(e);
    } catch (e) {
        throw (g.Z.captureException(e), e);
    }
}
function Y(e) {
    return T.Z.getUploadedKeyVersionsCached().includes(e);
}
async function x(e) {
    Y(e) || (await k(e));
}
async function j(e) {
    if (!Y(e)) return await k(e), !0;
    let t = E.default.getId(),
        { key: n } = await L(e),
        r = await v(t, n, e);
    return r || (0, U.KA)(e), r;
}
function B(e, t) {
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
function W(e) {
    let { userId: t, channelId: n, nickname: r } = e;
    (0, U.CW)({
        userId: t,
        channelId: n,
        keyVersion: C.GB,
        reason: C.Xe.OTHER_USER_INCONSISTENT_KEYS
    }),
        s.Z.show({
            title: b.intl.string(b.t.mznLyc),
            body: b.intl.format(b.t.WY6IKS, { username: r })
        });
}
function G(e) {
    let { userId: t, guildId: n, channelId: r } = e;
    if (!B(t, [f.Z, _.Z])) return !0;
    {
        let e = S.default.getUser(t),
            i = p.ZP.getName(n, r, e);
        return (
            W({
                userId: t,
                channelId: r,
                nickname: i
            }),
            !1
        );
    }
}

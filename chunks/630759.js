(n.d(t, {
    J6: () => G,
    LO: () => D,
    TQ: () => P,
    UB: () => H,
    ZU: () => L,
    Zn: () => x,
    aZ: () => w,
    bo: () => k,
    fz: () => W,
    kK: () => j,
    lg: () => Y,
    om: () => F,
    pL: () => R,
    uV: () => C,
    uX: () => V
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
    n(388685));
var r = n(250683),
    i = n(512722),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(544891),
    c = n(974167),
    u = n(668781),
    d = n(314897),
    f = n(131951),
    _ = n(19780),
    p = n(959457),
    h = n(594174),
    m = n(70956),
    g = n(63063),
    E = n(5192),
    b = n(960048),
    y = n(51144),
    O = n(90641),
    v = n(615830),
    I = n(352954),
    T = n(571826),
    S = n(760373),
    A = n(981631),
    N = n(388032);
function C() {
    return g.Z.getArticleURL(A.BhN.END_TO_END_ENCRYPTION);
}
function w() {
    return g.Z.getArticleURL(A.BhN.END_TO_END_ENCRYPTION);
}
function R() {
    return g.Z.getArticleURL(A.BhN.END_TO_END_ENCRYPTION);
}
function P(e, t, n, r, i) {
    (n ? O.Z.createSecureFramesVerifiedKey(e, t) : O.Z.createSecureFramesTransientKey(e, t),
        (0, T.M1)({
            channelId: r,
            userId: e,
            analyticsLocation: i
        }));
}
function D(e, t, n) {
    if (n) {
        let n = (0, c.MK)(new Uint8Array(t));
        O.Z.deleteSecureFramesVerifiedKey(e, n);
    } else O.Z.deleteSecureFramesTransientKey(e);
}
function L(e, t) {
    I.Z.openSecureFramesUpdateConfirmation({
        title: N.intl.string(N.t['hdL15+']),
        subtitle: N.intl.string(N.t['8VGYKi']),
        onConfirm: () => {
            (O.Z.deleteSecureFramesVerifiedKey(e, t), (0, T.Pn)());
        }
    });
}
function x(e) {
    let t = h.default.getUser(e),
        n = y.ZP.getName(t);
    I.Z.openSecureFramesUpdateConfirmation({
        title: N.intl.formatToPlainString(N.t.K6NGBw, { username: n }),
        subtitle: N.intl.string(N.t.F1BQKy),
        onConfirm: () => {
            (O.Z.deleteSecureFramesUserVerifiedKeys(e), (0, T.DF)());
        }
    });
}
function k(e) {
    let t = s()(e),
        n = s()().diff(t, 's');
    if (n > 12 * m.Z.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * m.Z.Seconds.DAYS_30));
        return N.intl.formatToPlainString(N.t.F1wqkJ, { count: e });
    }
    if (n > m.Z.Seconds.DAYS_30) {
        let e = Math.round(n / m.Z.Seconds.DAYS_30);
        return N.intl.formatToPlainString(N.t['iT+b+/'], { count: e });
    }
    if (n > 7 * m.Z.Seconds.DAY) {
        let e = Math.round(n / (7 * m.Z.Seconds.DAY));
        return N.intl.formatToPlainString(N.t.dLurKS, { count: e });
    }
    if (n > m.Z.Seconds.DAY) {
        let e = Math.round(n / m.Z.Seconds.DAY);
        return N.intl.formatToPlainString(N.t.LE8a2N, { count: e });
    }
    if (n > m.Z.Seconds.HOUR) {
        let e = Math.round(n / m.Z.Seconds.HOUR);
        return N.intl.formatToPlainString(N.t.KULxVV, { count: e });
    } else {
        if (!(n > m.Z.Seconds.MINUTE)) return N.intl.formatToPlainString(N.t['/w0Qp6'], { count: n });
        let e = Math.round(n / m.Z.Seconds.MINUTE);
        return N.intl.formatToPlainString(N.t.ws6rWl, { count: e });
    }
}
function j(e) {
    let { isCurrentUserKeyPersistent: t, isOtherUserKeyPersistent: n, otherUserNickname: r } = e;
    return t && n
        ? N.intl.format(N.t['FJN+kp'], { helpArticle: C() })
        : t
          ? N.intl.format(N.t['p/9PGh'], {
                username: r,
                helpArticle: C()
            })
          : n
            ? N.intl.format(N.t['qT5z8/'], { helpArticle: C() })
            : N.intl.format(N.t['6JLy+v'], { helpArticle: C() });
}
async function M(e) {
    let t = d.default.getStaticAuthSessionId();
    return (a()(null != t, '[getCurrentUserPublicKey] session id should not be null'), await f.Z.getMLSSigningKey(t, e));
}
function U(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return 'data:application/octet-stream;base64,'.concat(t);
}
async function G(e, t, n) {
    try {
        return (
            await l.tn.post({
                url: A.ANM.VOICE_MATCH_PUBLIC_KEY(e),
                body: {
                    public_key: U(t),
                    key_version: n
                },
                rejectWithError: !1
            })
        ).body.is_match;
    } catch (e) {
        throw (b.Z.captureException(e), e);
    }
}
async function B(e) {
    let { key: t, signature: n } = await M(e);
    try {
        (await l.tn.put({
            url: A.ANM.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: U(t),
                signature: U(n),
                key_version: e
            },
            rejectWithError: !1
        }),
            O.Z.addUploadedKeyVersion(e));
    } catch (e) {
        throw (b.Z.captureException(e), e);
    }
}
function Z(e) {
    return v.Z.getUploadedKeyVersionsCached().includes(e);
}
async function F(e) {
    Z(e) || (await B(e));
}
async function V(e) {
    if (!Z(e)) return (await B(e), !0);
    let t = d.default.getId(),
        { key: n } = await M(e),
        r = await G(t, n, e);
    return (r || (0, T.KA)(e), r);
}
function H(e, t) {
    let [n, r] = t;
    if (!n.isUserConnected(e)) return !1;
    let i = n.getSecureFramesRosterMapEntry(e);
    if (null == i) return !1;
    let a = new Uint8Array(i);
    for (let t of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(t, e)) continue;
        let n = p.Z.getSecureFramesRosterMapEntry(t, e);
        if (null == n) return !0;
        let i = new Uint8Array(n);
        for (let e = 0; e < a.length; e++) if (a[e] !== i[e]) return !0;
    }
    return !1;
}
function Y(e) {
    let { userId: t, channelId: n, nickname: r } = e;
    ((0, T.CW)({
        userId: t,
        channelId: n,
        keyVersion: S.GB,
        reason: S.Xe.OTHER_USER_INCONSISTENT_KEYS
    }),
        u.Z.show({
            title: N.intl.string(N.t.mznLyc),
            body: N.intl.format(N.t.WY6IKS, { username: r })
        }));
}
function W(e) {
    let { userId: t, guildId: n, channelId: r } = e;
    if (!H(t, [_.Z, p.Z])) return !0;
    {
        let e = h.default.getUser(t),
            i = E.ZP.getName(n, r, e);
        return (
            Y({
                userId: t,
                channelId: r,
                nickname: i
            }),
            !1
        );
    }
}

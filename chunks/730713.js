n.d(t, { default: () => O });
var r = n(477900),
    l = n(582128),
    u = n(855986),
    s = n(189213),
    a = n(805251),
    i = n(683071),
    c = n(534514),
    o = n(646514),
    f = n(289873),
    m = n(834730),
    y = n(734057),
    d = n(287809),
    g = n(562153),
    A = n(798286),
    p = n(814278);
n(603266);
var b = n(495867),
    h = n(753181),
    E = n(665691),
    x = n(998759);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var k = n(827762),
    w = n(284009),
    C = n.n(w),
    R = n(46653),
    S = n(754712),
    N = n(843069);
let j = new Map();
var T = n(731854),
    U = n(787392),
    F = n(75811),
    v = n(930840),
    I = n(652215),
    M = n(792996),
    G = n(686418);
function _(e) {
    let { badgeText: t, badgeVariant: n } = e,
        u = l.useRef(t),
        s = l.useRef(n);
    return (0, r.jsx)(a.E, { type: { text: u.current }, variant: s.current });
}
function O(e) {
    let { transitionState: t, userId: n, channelId: a, onClose: w } = e,
        O = (0, u.bG)([d.default], () => d.default.getUser(n)),
        P = (0, u.bG)([y.A], () => y.A.getChannel(a)?.getGuildId()),
        z = g.Ay.useName(P, null, O),
        { fingerprint: L, fingerprintUserKey: B } = (function (e) {
            let { userId: t, mode: n = "frozen" } = e,
                r = (0, u.bG)([R.default], () => R.default.getId());
            C()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
            let [s, a] = l.useState(null),
                [i, c] = l.useState(!1),
                o = (0, u.bG)([b.A], () => b.A.getSecureFramesRosterMapEntry(t)),
                f = (0, u.bG)([b.A], () => b.A.getSecureFramesRosterMapEntry(r)),
                m = l.useCallback(
                    async () =>
                        S.Ay.supports(T.O5.MLS_PAIRWISE_FINGERPRINTS)
                            ? await (async function (e) {
                                  let t = b.A.getSecureFramesRosterMapEntry(e),
                                      n = b.A.getRTCConnection();
                                  if (null == t || null == n) return null;
                                  let r = await new Promise((t) => {
                                      n.getMLSPairwiseFingerprint(0, e, (e) => t(new Uint8Array(e)));
                                  });
                                  return { fingerprint: k.fromByteArray(r), fingerprintUserKey: t };
                              })(t)
                            : await (async function (e) {
                                  let t = R.default.getId(),
                                      n = b.A.getSecureFramesRosterMapEntry(e),
                                      r = b.A.getSecureFramesRosterMapEntry(t);
                                  return null == n || null == r
                                      ? null
                                      : {
                                            fingerprint: await (function (e, t, n, r) {
                                                let l = [
                                                        0,
                                                        e,
                                                        k.fromByteArray(new Uint8Array(t)),
                                                        n,
                                                        k.fromByteArray(new Uint8Array(r)),
                                                    ].join(":"),
                                                    u = j.get(l);
                                                if (null != u) return u;
                                                let s = (0, N._x)(0, new Uint8Array(t), e, new Uint8Array(r), n).then(
                                                    (e) => k.fromByteArray(e),
                                                );
                                                if (j.size >= 16) {
                                                    let e = j.keys().next().value;
                                                    null != e && j.delete(e);
                                                }
                                                return (j.set(l, s), s.catch(() => j.delete(l)), s);
                                            })(t, r, e, n),
                                            fingerprintUserKey: n,
                                        };
                              })(t),
                    [t],
                ),
                y = l.useRef(0),
                d = l.useRef(null),
                g = l.useRef(!1);
            return (
                l.useEffect(() => {
                    if (null == o || null == f || ("frozen" === n && g.current)) return;
                    g.current = !0;
                    let e = ++y.current;
                    d.current = setTimeout(() => {
                        (c(!0),
                            m().then((t) => {
                                e === y.current && (null != t && a(t), c(!1));
                            }));
                    }, 0);
                }, [n, m, o, f]),
                l.useEffect(
                    () => () => {
                        null != d.current && clearTimeout(d.current);
                    },
                    [],
                ),
                l.useMemo(
                    () => ({
                        fingerprint: s?.fingerprint ?? null,
                        fingerprintUserKey: s?.fingerprintUserKey ?? null,
                        loading: i,
                    }),
                    [s, i],
                )
            );
        })({ userId: n }),
        D = (0, x.z)({ fingerprintBase64: L, chunkSize: 5, desiredLength: 45 }),
        K = l.useCallback(() => {
            (0, A.Hb)({ userId: n, channelId: a });
        }, [a, n]),
        V = (0, E.UF)({ userId: n, channelId: a, userKey: B });
    !(function (e) {
        let { channelId: t, userId: n, nickname: r, onAlertOpen: s } = e,
            a = (function (e) {
                let { userId: t } = e;
                return (0, u.bG)([b.A, h.A], () => (0, p.m8)(t, [b.A, h.A]));
            })({ userId: n }),
            i = l.useRef(null);
        l.useEffect(() => {
            a && null == i.current
                ? (i.current = setTimeout(() => {
                      (s(), (0, p.Vw)({ userId: n, channelId: t, nickname: r }));
                  }, 1e3))
                : (clearTimeout(i.current), (i.current = null));
            let e = i.current;
            return () => {
                clearTimeout(e);
            };
        }, [t, a, r, s, n]);
    })({ channelId: a, userId: n, nickname: z, onAlertOpen: w });
    let {
            isCurrentUserKeyPersistent: H,
            isOtherUserKeyPersistent: W,
            loading: Z,
        } = (function (e) {
            let { userId: t, userKey: n } = e,
                [r, u] = l.useState(!0),
                [s, a] = l.useState(!1),
                [i, c] = l.useState(!1),
                o = l.useCallback(async (e, t) => {
                    u(!0);
                    try {
                        let n = await (0, p.A5)(1),
                            r = await (0, p.iO)(e, t, 1);
                        (a(n), c(r));
                    } catch (e) {
                        (a(!1), c(!1));
                    } finally {
                        u(!1);
                    }
                }, []);
            return (
                l.useEffect(() => {
                    null == n ? (a(!1), c(!1), u(!1)) : o(t, n);
                }, [n, o, t]),
                { loading: r, isCurrentUserKeyPersistent: s, isOtherUserKeyPersistent: i }
            );
        })({ userId: n, userKey: B }),
        J = l.useCallback(() => {
            null != B && ((0, p.bk)(n, B, W, a, I.ThZ.E2EE_USER_VERIFY_MODAL), w());
        }, [B, n, W, a, w]),
        Y = l.useCallback(() => {
            null != B && ((0, p.Dh)(n, B, W), w());
        }, [B, n, W, w]),
        [q, X] = l.useMemo(
            () => (V ? [M.intl.string(M.t.UNUuem), "primary"] : [M.intl.string(M.t.y2b7CA), "critical"]),
            [V],
        ),
        Q = l.useMemo(
            () => (0, p.Z1)({ isCurrentUserKeyPersistent: H, isOtherUserKeyPersistent: W, otherUserNickname: z }),
            [H, W, z],
        ),
        $ = (function (e) {
            let { userId: t, keyToOmit: n } = e,
                r = l.useMemo(() => {
                    if (null == n) return null;
                    let e = new Uint8Array(n);
                    return (0, N.uo)(e);
                }, [n]);
            return (0, u.bG)(
                [U.A],
                () => {
                    let e = U.A.getUserVerifiedKeys(t);
                    return null == e ? 0 : Object.keys(e).filter((e) => e !== r).length;
                },
                [r, t],
            );
        })({ userId: n, keyToOmit: B });
    l.useEffect(() => {
        (0, A.HJ)({ userId: n, channelId: a });
    }, [a, n]);
    let ee = {
            transitionState: t,
            title: M.intl.string(M.t["/WPGnF"]),
            subtitle: M.intl.format(M.t.oc2kce, { username: z }),
        },
        et = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: G.Ot,
                    children: [
                        $ > 0 &&
                            (0, r.jsx)("div", {
                                className: G.Ht,
                                children: (0, r.jsx)(i.w, {
                                    type: "info",
                                    message: M.intl.format(M.t.uZDkz0, { count: $ }),
                                    role: "none",
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: G.wx,
                            children: [
                                (0, r.jsx)(c.D, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    children: M.intl.string(M.t["/WPGnF"]),
                                }),
                                null != D &&
                                    (0, r.jsx)(v.c, {
                                        className: G.nJ,
                                        chunks: D,
                                        color: o.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: K,
                                    }),
                                (0, r.jsx)("div", {
                                    className: G.ub,
                                    children:
                                        null == D
                                            ? (0, r.jsx)(f.y, { className: G.u1, type: f.t.SPINNING_CIRCLE })
                                            : (0, r.jsx)(_, { badgeText: q, badgeVariant: X }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(F.j, { className: G.aY, chunks: D, columns: 3 }),
                    ],
                }),
                (0, r.jsx)(m.E, { className: G.qr, variant: "body-sm/normal", color: "text-muted", children: Q }),
            ],
        }),
        en = {
            text: V ? M.intl.string(M.t["Osb+/n"]) : M.intl.string(M.t["0tvNAn"]),
            disabled: null == D || Z,
            onClick: V ? Y : J,
        },
        er = { text: M.intl.string(M.t["ETE/oC"]), onClick: w, variant: "secondary" };
    return (0, r.jsx)(s.a, { onClose: w, ...ee, actions: [er, en], children: et });
}

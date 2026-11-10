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
    d = n(834730),
    m = n(734057),
    y = n(287809),
    g = n(562153),
    A = n(798286),
    h = n(814278);
n(603266);
var p = n(495867),
    b = n(753181),
    E = n(665691),
    x = n(998759),
    k = n(284009),
    N = n.n(k),
    j = n(46653);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var w = n(827762),
    C = n(843069),
    R = n(754712),
    U = n(731854);
let v = new Map();
var S = n(787392),
    T = n(75811),
    F = n(930840),
    I = n(652215),
    G = n(792996),
    M = n(686418);
function _(e) {
    let { badgeText: t, badgeVariant: n } = e,
        u = l.useRef(t),
        s = l.useRef(n);
    return (0, r.jsx)(a.E, { type: { text: u.current }, variant: s.current });
}
function O(e) {
    let { transitionState: t, userId: n, channelId: a, onClose: k } = e,
        O = (0, u.bG)([y.default], () => y.default.getUser(n)),
        D = (0, u.bG)([m.A], () => m.A.getChannel(a)?.getGuildId()),
        P = g.Ay.useName(D, null, O),
        { fingerprint: z, fingerprintUserKey: V } = (function (e) {
            let { userId: t, mode: n = "frozen" } = e,
                r = (0, u.bG)([j.default], () => j.default.getId());
            N()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
            let [s, a] = l.useState(null),
                [i, c] = l.useState(!1),
                o = (0, u.bG)([p.A], () => p.A.getSecureFramesRosterMapEntry(t)),
                f = (0, u.bG)([p.A], () => p.A.getSecureFramesRosterMapEntry(r)),
                d = l.useCallback(
                    () =>
                        (async function (e) {
                            let t = j.default.getId(),
                                n = p.A.getSecureFramesRosterMapEntry(e),
                                r = p.A.getSecureFramesRosterMapEntry(t);
                            if (null == n || null == r) return null;
                            try {
                                return {
                                    fingerprint: await (function (e, t, n, r) {
                                        let l = [
                                                0,
                                                e,
                                                w.fromByteArray(new Uint8Array(t)),
                                                n,
                                                w.fromByteArray(new Uint8Array(r)),
                                            ].join(":"),
                                            u = v.get(l);
                                        if (null != u) return u;
                                        let s = (
                                            R.Ay.supports(U.O5.DAVE_PAIRWISE_FINGERPRINT)
                                                ? R.Ay.getMediaEngine()
                                                      .generateDavePairwiseFingerprint(0, t, e, r, n)
                                                      .then((e) => new Uint8Array(e))
                                                : (0, C._x)(0, new Uint8Array(t), e, new Uint8Array(r), n)
                                        ).then((e) => w.fromByteArray(e));
                                        if (v.size >= 16) {
                                            let e = v.keys().next().value;
                                            null != e && v.delete(e);
                                        }
                                        return (v.set(l, s), s.catch(() => v.delete(l)), s);
                                    })(t, r, e, n),
                                    fingerprintUserKey: n,
                                };
                            } catch {
                                return null;
                            }
                        })(t),
                    [t],
                ),
                m = l.useRef(0),
                y = l.useRef(null),
                g = l.useRef(!1);
            return (
                l.useEffect(() => {
                    if (null == o || null == f || ("frozen" === n && g.current)) return;
                    g.current = !0;
                    let e = ++m.current;
                    y.current = setTimeout(() => {
                        (c(!0),
                            d().then((t) => {
                                e === m.current && (null != t && a(t), c(!1));
                            }));
                    }, 0);
                }, [n, d, o, f]),
                l.useEffect(
                    () => () => {
                        null != y.current && clearTimeout(y.current);
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
        K = (0, x.z)({ fingerprintBase64: z, chunkSize: 5, desiredLength: 45 }),
        B = l.useCallback(() => {
            (0, A.Hb)({ userId: n, channelId: a });
        }, [a, n]),
        L = (0, E.UF)({ userId: n, channelId: a, userKey: V });
    !(function (e) {
        let { channelId: t, userId: n, nickname: r, onAlertOpen: s } = e,
            a = (function (e) {
                let { userId: t } = e;
                return (0, u.bG)([p.A, b.A], () => (0, h.m8)(t, [p.A, b.A]));
            })({ userId: n }),
            i = l.useRef(null);
        l.useEffect(() => {
            a && null == i.current
                ? (i.current = setTimeout(() => {
                      (s(), (0, h.Vw)({ userId: n, channelId: t, nickname: r }));
                  }, 1e3))
                : (clearTimeout(i.current), (i.current = null));
            let e = i.current;
            return () => {
                clearTimeout(e);
            };
        }, [t, a, r, s, n]);
    })({ channelId: a, userId: n, nickname: P, onAlertOpen: k });
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
                        let n = await (0, h.A5)(1),
                            r = await (0, h.iO)(e, t, 1);
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
        })({ userId: n, userKey: V }),
        J = l.useCallback(() => {
            null != V && ((0, h.bk)(n, V, W, a, I.ThZ.E2EE_USER_VERIFY_MODAL), k());
        }, [V, n, W, a, k]),
        Y = l.useCallback(() => {
            null != V && ((0, h.Dh)(n, V, W), k());
        }, [V, n, W, k]),
        [q, X] = l.useMemo(
            () => (L ? [G.intl.string(G.t.UNUuem), "primary"] : [G.intl.string(G.t.y2b7CA), "critical"]),
            [L],
        ),
        Q = l.useMemo(
            () => (0, h.Z1)({ isCurrentUserKeyPersistent: H, isOtherUserKeyPersistent: W, otherUserNickname: P }),
            [H, W, P],
        ),
        $ = (function (e) {
            let { userId: t, keyToOmit: n } = e,
                r = l.useMemo(() => {
                    if (null == n) return null;
                    let e = new Uint8Array(n);
                    return (0, C.uo)(e);
                }, [n]);
            return (0, u.bG)(
                [S.A],
                () => {
                    let e = S.A.getUserVerifiedKeys(t);
                    return null == e ? 0 : Object.keys(e).filter((e) => e !== r).length;
                },
                [r, t],
            );
        })({ userId: n, keyToOmit: V });
    l.useEffect(() => {
        (0, A.HJ)({ userId: n, channelId: a });
    }, [a, n]);
    let ee = {
            transitionState: t,
            title: G.intl.string(G.t["/WPGnF"]),
            subtitle: G.intl.format(G.t.oc2kce, { username: P }),
        },
        et = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: M.Ot,
                    children: [
                        $ > 0 &&
                            (0, r.jsx)("div", {
                                className: M.Ht,
                                children: (0, r.jsx)(i.w, {
                                    type: "info",
                                    message: G.intl.format(G.t.uZDkz0, { count: $ }),
                                    role: "none",
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: M.wx,
                            children: [
                                (0, r.jsx)(c.D, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    children: G.intl.string(G.t["/WPGnF"]),
                                }),
                                null != K &&
                                    (0, r.jsx)(F.c, {
                                        className: M.nJ,
                                        chunks: K,
                                        color: o.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: B,
                                    }),
                                (0, r.jsx)("div", {
                                    className: M.ub,
                                    children:
                                        null == K
                                            ? (0, r.jsx)(f.y, { className: M.u1, type: f.t.SPINNING_CIRCLE })
                                            : (0, r.jsx)(_, { badgeText: q, badgeVariant: X }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(T.j, { className: M.aY, chunks: K, columns: 3 }),
                    ],
                }),
                (0, r.jsx)(d.E, { className: M.qr, variant: "body-sm/normal", color: "text-muted", children: Q }),
            ],
        }),
        en = {
            text: L ? G.intl.string(G.t["Osb+/n"]) : G.intl.string(G.t["0tvNAn"]),
            disabled: null == K || Z,
            onClick: L ? Y : J,
        },
        er = { text: G.intl.string(G.t["ETE/oC"]), onClick: k, variant: "secondary" };
    return (0, r.jsx)(s.a, { onClose: k, ...ee, actions: [er, en], children: et });
}

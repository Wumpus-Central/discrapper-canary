(n.r(t), n.d(t, { default: () => D }));
var r = n(477900),
    l = n(582128),
    u = n(17928),
    s = n(189213),
    a = n(812993),
    i = n(661531),
    c = n(683071),
    o = n(297264),
    f = n(289873),
    A = n(834730),
    m = n(734057),
    d = n(287809),
    y = n(562153),
    g = n(798286),
    p = n(814278);
n(603266);
var h = n(763827),
    E = n(116956),
    b = n(665691),
    x = n(998759);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var C = n(827762),
    N = n(284009),
    R = n.n(N),
    k = n(280450),
    w = n(192820),
    S = n(277515);
let T = new Map();
async function U(e) {
    let t = k.default.getId(),
        n = h.A.getSecureFramesRosterMapEntry(e),
        r = h.A.getSecureFramesRosterMapEntry(t);
    return null == n || null == r
        ? null
        : {
              fingerprint: await (function (e, t, n, r) {
                  let l = [0, e, C.fromByteArray(new Uint8Array(t)), n, C.fromByteArray(new Uint8Array(r))].join(":"),
                      u = T.get(l);
                  if (null != u) return u;
                  let s = (0, S._x)(0, new Uint8Array(t), e, new Uint8Array(r), n).then((e) => C.fromByteArray(e));
                  if (T.size >= 16) {
                      let e = T.keys().next().value;
                      null != e && T.delete(e);
                  }
                  return (T.set(l, s), s.catch(() => T.delete(l)), s);
              })(t, r, e, n),
              fingerprintUserKey: n,
          };
}
var j = n(731854);
async function F(e) {
    let t = h.A.getSecureFramesRosterMapEntry(e),
        n = h.A.getRTCConnection();
    if (null == t || null == n) return null;
    let r = await new Promise((t) => {
        n.getMLSPairwiseFingerprint(0, e, (e) => t(new Uint8Array(e)));
    });
    return { fingerprint: C.fromByteArray(r), fingerprintUserKey: t };
}
var I = n(787392),
    v = n(75811),
    G = n(930840),
    _ = n(652215),
    M = n(105292),
    O = n(686418);
function B(e) {
    let { badgeText: t, badgeColor: n } = e,
        u = l.useRef(t),
        s = l.useRef(n);
    return (0, r.jsx)(a.Lp, { text: u.current, color: s.current });
}
function D(e) {
    let { transitionState: t, userId: n, channelId: a, onClose: C } = e,
        N = (0, u.bG)([d.default], () => d.default.getUser(n)),
        T = (0, u.bG)([m.A], () => m.A.getChannel(a)?.getGuildId()),
        D = y.Ay.useName(T, null, N),
        { fingerprint: K, fingerprintUserKey: P } = (function (e) {
            let { userId: t, mode: n = "frozen" } = e,
                r = (0, u.bG)([k.default], () => k.default.getId());
            R()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
            let [s, a] = l.useState(null),
                [i, c] = l.useState(!1),
                o = (0, u.bG)([h.A], () => h.A.getSecureFramesRosterMapEntry(t)),
                f = (0, u.bG)([h.A], () => h.A.getSecureFramesRosterMapEntry(r)),
                A = l.useCallback(
                    async () => (w.Ay.supports(j.O5.MLS_PAIRWISE_FINGERPRINTS) ? await F(t) : await U(t)),
                    [t],
                ),
                m = l.useRef(0),
                d = l.useRef(null),
                y = l.useRef(!1);
            return (
                l.useEffect(() => {
                    if (null == o || null == f || ("frozen" === n && y.current)) return;
                    y.current = !0;
                    let e = ++m.current;
                    d.current = setTimeout(() => {
                        (c(!0),
                            A().then((t) => {
                                e === m.current && (null != t && a(t), c(!1));
                            }));
                    }, 0);
                }, [n, A, o, f]),
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
        L = (0, x.z)({ fingerprintBase64: K, chunkSize: 5, desiredLength: 45 }),
        z = l.useCallback(() => {
            (0, g.Hb)({ userId: n, channelId: a });
        }, [a, n]),
        V = (0, b.UF)({ userId: n, channelId: a, userKey: P });
    !(function (e) {
        let { channelId: t, userId: n, nickname: r, onAlertOpen: s } = e,
            a = (function (e) {
                let { userId: t } = e;
                return (0, u.bG)([h.A, E.A], () => (0, p.m8)(t, [h.A, E.A]));
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
    })({ channelId: a, userId: n, nickname: D, onAlertOpen: C });
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
        })({ userId: n, userKey: P }),
        J = l.useCallback(() => {
            null != P && ((0, p.bk)(n, P, W, a, _.ThZ.E2EE_USER_VERIFY_MODAL), C());
        }, [P, n, W, a, C]),
        Y = l.useCallback(() => {
            null != P && ((0, p.Dh)(n, P, W), C());
        }, [P, n, W, C]),
        [q, X] = l.useMemo(
            () =>
                V
                    ? [M.intl.string(M.t.UNUuem), i.A.colors.BACKGROUND_BRAND.css]
                    : [M.intl.string(M.t.y2b7CA), i.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css],
            [V],
        ),
        Q = l.useMemo(
            () => (0, p.Z1)({ isCurrentUserKeyPersistent: H, isOtherUserKeyPersistent: W, otherUserNickname: D }),
            [H, W, D],
        ),
        $ = (function (e) {
            let { userId: t, keyToOmit: n } = e,
                r = l.useMemo(() => {
                    if (null == n) return null;
                    let e = new Uint8Array(n);
                    return (0, S.uo)(e);
                }, [n]);
            return (0, u.bG)(
                [I.A],
                () => {
                    let e = I.A.getUserVerifiedKeys(t);
                    return null == e ? 0 : Object.keys(e).filter((e) => e !== r).length;
                },
                [r, t],
            );
        })({ userId: n, keyToOmit: P });
    l.useEffect(() => {
        (0, g.HJ)({ userId: n, channelId: a });
    }, [a, n]);
    let ee = {
            transitionState: t,
            title: M.intl.string(M.t["/WPGnF"]),
            subtitle: M.intl.format(M.t.oc2kce, { username: D }),
        },
        et = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: O.Ot,
                    children: [
                        $ > 0 &&
                            (0, r.jsx)("div", {
                                className: O.Ht,
                                children: (0, r.jsx)(c.w, {
                                    type: "info",
                                    message: M.intl.format(M.t.uZDkz0, { count: $ }),
                                    role: "none",
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: O.wx,
                            children: [
                                (0, r.jsx)(o.D, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: M.intl.string(M.t["/WPGnF"]),
                                }),
                                null != L &&
                                    (0, r.jsx)(G.c, {
                                        className: O.nJ,
                                        chunks: L,
                                        color: i.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: z,
                                    }),
                                (0, r.jsx)("div", {
                                    className: O.ub,
                                    children:
                                        null == L
                                            ? (0, r.jsx)(f.y, { className: O.u1, type: f.t.SPINNING_CIRCLE })
                                            : (0, r.jsx)(B, { badgeText: q, badgeColor: X }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(v.j, { className: O.aY, chunks: L, columns: 3 }),
                    ],
                }),
                (0, r.jsx)(A.E, { className: O.qr, variant: "text-sm/normal", color: "text-muted", children: Q }),
            ],
        }),
        en = {
            text: V ? M.intl.string(M.t["Osb+/n"]) : M.intl.string(M.t["0tvNAn"]),
            disabled: null == L || Z,
            onClick: V ? Y : J,
        },
        er = { text: M.intl.string(M.t["ETE/oC"]), onClick: C, variant: "secondary" };
    return (0, r.jsx)(s.a, { onClose: C, ...ee, actions: [er, en], children: et });
}

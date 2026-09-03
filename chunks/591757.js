r.r(t), r.d(t, { default: () => D });
var n = r(477900),
    l = r(582128),
    u = r(189213),
    s = r(17928),
    a = r(812993),
    i = r(661531),
    c = r(512950),
    o = r(297264),
    f = r(289873),
    A = r(834730),
    m = r(734057),
    d = r(287809),
    y = r(562153),
    g = r(798286),
    p = r(814278);
r(603266);
var h = r(763827),
    E = r(116956),
    b = r(665691),
    x = r(998759);
r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var C = r(827762),
    N = r(284009),
    R = r.n(N),
    k = r(280450),
    w = r(916546),
    S = r(277515);
let T = new Map();
async function F(e) {
    let t = k.default.getId(),
        r = h.A.getSecureFramesRosterMapEntry(e),
        n = h.A.getSecureFramesRosterMapEntry(t);
    return null == r || null == n
        ? null
        : {
              fingerprint: await (function (e, t, r, n) {
                  let l = [0, e, C.fromByteArray(new Uint8Array(t)), r, C.fromByteArray(new Uint8Array(n))].join(":"),
                      u = T.get(l);
                  if (null != u) return u;
                  let s = (0, S._x)(0, new Uint8Array(t), e, new Uint8Array(n), r).then((e) => C.fromByteArray(e));
                  if (T.size >= 16) {
                      let e = T.keys().next().value;
                      null != e && T.delete(e);
                  }
                  return T.set(l, s), s.catch(() => T.delete(l)), s;
              })(t, n, e, r),
              fingerprintUserKey: r,
          };
}
var U = r(731854);
async function I(e) {
    let t = h.A.getSecureFramesRosterMapEntry(e),
        r = h.A.getRTCConnection();
    if (null == t || null == r) return null;
    let n = await new Promise((t) => {
        r.getMLSPairwiseFingerprint(0, e, (e) => t(new Uint8Array(e)));
    });
    return { fingerprint: C.fromByteArray(n), fingerprintUserKey: t };
}
var j = r(787392),
    G = r(75811),
    M = r(930840),
    _ = r(652215),
    v = r(375708),
    O = r(686418);
function B(e) {
    let { badgeText: t, badgeColor: r } = e,
        u = l.useRef(t),
        s = l.useRef(r);
    return (0, n.jsx)(a.Lp, { text: u.current, color: s.current });
}
function D(e) {
    let { transitionState: t, userId: r, channelId: a, onClose: C } = e,
        N = (0, s.bG)([d.default], () => d.default.getUser(r)),
        T = (0, s.bG)([m.A], () => m.A.getChannel(a)?.getGuildId()),
        D = y.Ay.useName(T, null, N),
        { fingerprint: K, fingerprintUserKey: P } = (function (e) {
            let { userId: t, mode: r = "frozen" } = e,
                n = (0, s.bG)([k.default], () => k.default.getId());
            R()(n !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
            let [u, a] = l.useState(null),
                [i, c] = l.useState(!1),
                o = (0, s.bG)([h.A], () => h.A.getSecureFramesRosterMapEntry(t)),
                f = (0, s.bG)([h.A], () => h.A.getSecureFramesRosterMapEntry(n)),
                A = l.useCallback(
                    async () => (w.Ay.supports(U.O5.MLS_PAIRWISE_FINGERPRINTS) ? await I(t) : await F(t)),
                    [t],
                ),
                m = l.useRef(0),
                d = l.useRef(null),
                y = l.useRef(!1);
            return (
                l.useEffect(() => {
                    if (null == o || null == f || ("frozen" === r && y.current)) return;
                    y.current = !0;
                    let e = ++m.current;
                    d.current = setTimeout(() => {
                        c(!0),
                            A().then((t) => {
                                e === m.current && (null != t && a(t), c(!1));
                            });
                    }, 0);
                }, [r, A, o, f]),
                l.useEffect(
                    () => () => {
                        null != d.current && clearTimeout(d.current);
                    },
                    [],
                ),
                l.useMemo(
                    () => ({
                        fingerprint: u?.fingerprint ?? null,
                        fingerprintUserKey: u?.fingerprintUserKey ?? null,
                        loading: i,
                    }),
                    [u, i],
                )
            );
        })({ userId: r }),
        L = (0, x.z)({ fingerprintBase64: K, chunkSize: 5, desiredLength: 45 }),
        z = l.useCallback(() => {
            (0, g.Hb)({ userId: r, channelId: a });
        }, [a, r]),
        V = (0, b.UF)({ userId: r, channelId: a, userKey: P });
    !(function (e) {
        let { channelId: t, userId: r, nickname: n, onAlertOpen: u } = e,
            a = (function (e) {
                let { userId: t } = e;
                return (0, s.bG)([h.A, E.A], () => (0, p.m8)(t, [h.A, E.A]));
            })({ userId: r }),
            i = l.useRef(null);
        l.useEffect(() => {
            a && null == i.current
                ? (i.current = setTimeout(() => {
                      u(), (0, p.Vw)({ userId: r, channelId: t, nickname: n });
                  }, 1e3))
                : (clearTimeout(i.current), (i.current = null));
            let e = i.current;
            return () => {
                clearTimeout(e);
            };
        }, [t, a, n, u, r]);
    })({ channelId: a, userId: r, nickname: D, onAlertOpen: C });
    let {
            isCurrentUserKeyPersistent: H,
            isOtherUserKeyPersistent: W,
            loading: Y,
        } = (function (e) {
            let { userId: t, userKey: r } = e,
                [n, u] = l.useState(!0),
                [s, a] = l.useState(!1),
                [i, c] = l.useState(!1),
                o = l.useCallback(async (e, t) => {
                    u(!0);
                    try {
                        let r = await (0, p.A5)(1),
                            n = await (0, p.iO)(e, t, 1);
                        a(r), c(n);
                    } catch (e) {
                        a(!1), c(!1);
                    } finally {
                        u(!1);
                    }
                }, []);
            return (
                l.useEffect(() => {
                    null == r ? (a(!1), c(!1), u(!1)) : o(t, r);
                }, [r, o, t]),
                { loading: n, isCurrentUserKeyPersistent: s, isOtherUserKeyPersistent: i }
            );
        })({ userId: r, userKey: P }),
        Z = l.useCallback(() => {
            null != P && ((0, p.bk)(r, P, W, a, _.ThZ.E2EE_USER_VERIFY_MODAL), C());
        }, [P, r, W, a, C]),
        J = l.useCallback(() => {
            null != P && ((0, p.Dh)(r, P, W), C());
        }, [P, r, W, C]),
        [q, X] = l.useMemo(
            () =>
                V
                    ? [v.intl.string(v.t.UNUuem), i.A.colors.BACKGROUND_BRAND.css]
                    : [v.intl.string(v.t.y2b7CA), i.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css],
            [V],
        ),
        Q = l.useMemo(
            () => (0, p.Z1)({ isCurrentUserKeyPersistent: H, isOtherUserKeyPersistent: W, otherUserNickname: D }),
            [H, W, D],
        ),
        $ = (function (e) {
            let { userId: t, keyToOmit: r } = e,
                n = l.useMemo(() => {
                    if (null == r) return null;
                    let e = new Uint8Array(r);
                    return (0, S.uo)(e);
                }, [r]);
            return (0, s.bG)([j.A], () => {
                let e = j.A.getUserVerifiedKeys(t);
                return null == e ? 0 : Object.keys(e).filter((e) => e !== n).length;
            }, [n, t]);
        })({ userId: r, keyToOmit: P });
    l.useEffect(() => {
        (0, g.HJ)({ userId: r, channelId: a });
    }, [a, r]);
    let ee = {
            transitionState: t,
            title: v.intl.string(v.t["/WPGnF"]),
            subtitle: v.intl.format(v.t.oc2kce, { username: D }),
        },
        et = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: O.Ot,
                    children: [
                        $ > 0 &&
                            (0, n.jsx)(c.p, {
                                messageType: c.Y.INFO,
                                className: O.Ht,
                                children: v.intl.format(v.t.uZDkz0, { count: $ }),
                            }),
                        (0, n.jsxs)("div", {
                            className: O.wx,
                            children: [
                                (0, n.jsx)(o.D, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: v.intl.string(v.t["/WPGnF"]),
                                }),
                                null != L &&
                                    (0, n.jsx)(M.c, {
                                        className: O.nJ,
                                        chunks: L,
                                        color: i.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: z,
                                    }),
                                (0, n.jsx)("div", {
                                    className: O.ub,
                                    children:
                                        null == L
                                            ? (0, n.jsx)(f.y, { className: O.u1, type: f.t.SPINNING_CIRCLE })
                                            : (0, n.jsx)(B, { badgeText: q, badgeColor: X }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(G.j, { className: O.aY, chunks: L, columns: 3 }),
                    ],
                }),
                (0, n.jsx)(A.E, { className: O.qr, variant: "text-sm/normal", color: "text-muted", children: Q }),
            ],
        }),
        er = {
            text: V ? v.intl.string(v.t["Osb+/n"]) : v.intl.string(v.t["0tvNAn"]),
            disabled: null == L || Y,
            onClick: V ? J : Z,
        },
        en = { text: v.intl.string(v.t["ETE/oC"]), onClick: C, variant: "secondary" };
    return (0, n.jsx)(u.Modal, { onClose: C, ...ee, actions: [en, er], children: et });
}

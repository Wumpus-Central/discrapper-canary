(n.r(t), n.d(t, { default: () => z }));
var r = n(477900),
    l = n(582128),
    u = n(17928),
    s = n(189213),
    a = n(62010),
    i = n(683071),
    c = n(297264),
    o = n(661531),
    f = n(289873),
    m = n(834730),
    y = n(734057),
    d = n(287809),
    g = n(562153),
    A = n(798286),
    p = n(814278);
n(603266);
var h = n(763827),
    E = n(116956),
    b = n(665691),
    x = n(998759);
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var k = n(827762),
    w = n(284009),
    C = n.n(w),
    R = n(280450),
    S = n(999926),
    N = n(277515);
let j = new Map();
async function T(e) {
    let t = R.default.getId(),
        n = h.A.getSecureFramesRosterMapEntry(e),
        r = h.A.getSecureFramesRosterMapEntry(t);
    return null == n || null == r
        ? null
        : {
              fingerprint: await (function (e, t, n, r) {
                  let l = [0, e, k.fromByteArray(new Uint8Array(t)), n, k.fromByteArray(new Uint8Array(r))].join(":"),
                      u = j.get(l);
                  if (null != u) return u;
                  let s = (0, N._x)(0, new Uint8Array(t), e, new Uint8Array(r), n).then((e) => k.fromByteArray(e));
                  if (j.size >= 16) {
                      let e = j.keys().next().value;
                      null != e && j.delete(e);
                  }
                  return (j.set(l, s), s.catch(() => j.delete(l)), s);
              })(t, r, e, n),
              fingerprintUserKey: n,
          };
}
var U = n(731854);
async function v(e) {
    let t = h.A.getSecureFramesRosterMapEntry(e),
        n = h.A.getRTCConnection();
    if (null == t || null == n) return null;
    let r = await new Promise((t) => {
        n.getMLSPairwiseFingerprint(0, e, (e) => t(new Uint8Array(e)));
    });
    return { fingerprint: k.fromByteArray(r), fingerprintUserKey: t };
}
var F = n(787392),
    I = n(75811),
    M = n(930840),
    G = n(652215),
    _ = n(105292),
    O = n(686418);
function P(e) {
    let { badgeText: t, badgeVariant: n } = e,
        u = l.useRef(t),
        s = l.useRef(n);
    return (0, r.jsx)(a.E, { type: { text: u.current }, variant: s.current });
}
function z(e) {
    let { transitionState: t, userId: n, channelId: a, onClose: k } = e,
        w = (0, u.bG)([d.default], () => d.default.getUser(n)),
        j = (0, u.bG)([y.A], () => y.A.getChannel(a)?.getGuildId()),
        z = g.Ay.useName(j, null, w),
        { fingerprint: L, fingerprintUserKey: B } = (function (e) {
            let { userId: t, mode: n = "frozen" } = e,
                r = (0, u.bG)([R.default], () => R.default.getId());
            C()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
            let [s, a] = l.useState(null),
                [i, c] = l.useState(!1),
                o = (0, u.bG)([h.A], () => h.A.getSecureFramesRosterMapEntry(t)),
                f = (0, u.bG)([h.A], () => h.A.getSecureFramesRosterMapEntry(r)),
                m = l.useCallback(
                    async () => (S.Ay.supports(U.O5.MLS_PAIRWISE_FINGERPRINTS) ? await v(t) : await T(t)),
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
        V = (0, b.UF)({ userId: n, channelId: a, userKey: B });
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
    })({ channelId: a, userId: n, nickname: z, onAlertOpen: k });
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
            null != B && ((0, p.bk)(n, B, W, a, G.ThZ.E2EE_USER_VERIFY_MODAL), k());
        }, [B, n, W, a, k]),
        Y = l.useCallback(() => {
            null != B && ((0, p.Dh)(n, B, W), k());
        }, [B, n, W, k]),
        [q, X] = l.useMemo(
            () => (V ? [_.intl.string(_.t.UNUuem), "primary"] : [_.intl.string(_.t.y2b7CA), "critical"]),
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
                [F.A],
                () => {
                    let e = F.A.getUserVerifiedKeys(t);
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
            title: _.intl.string(_.t["/WPGnF"]),
            subtitle: _.intl.format(_.t.oc2kce, { username: z }),
        },
        et = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: O.Ot,
                    children: [
                        $ > 0 &&
                            (0, r.jsx)("div", {
                                className: O.Ht,
                                children: (0, r.jsx)(i.w, {
                                    type: "info",
                                    message: _.intl.format(_.t.uZDkz0, { count: $ }),
                                    role: "none",
                                }),
                            }),
                        (0, r.jsxs)("div", {
                            className: O.wx,
                            children: [
                                (0, r.jsx)(c.D, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: _.intl.string(_.t["/WPGnF"]),
                                }),
                                null != D &&
                                    (0, r.jsx)(M.c, {
                                        className: O.nJ,
                                        chunks: D,
                                        color: o.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: K,
                                    }),
                                (0, r.jsx)("div", {
                                    className: O.ub,
                                    children:
                                        null == D
                                            ? (0, r.jsx)(f.y, { className: O.u1, type: f.t.SPINNING_CIRCLE })
                                            : (0, r.jsx)(P, { badgeText: q, badgeVariant: X }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(I.j, { className: O.aY, chunks: D, columns: 3 }),
                    ],
                }),
                (0, r.jsx)(m.E, { className: O.qr, variant: "text-sm/normal", color: "text-muted", children: Q }),
            ],
        }),
        en = {
            text: V ? _.intl.string(_.t["Osb+/n"]) : _.intl.string(_.t["0tvNAn"]),
            disabled: null == D || Z,
            onClick: V ? Y : J,
        },
        er = { text: _.intl.string(_.t["ETE/oC"]), onClick: k, variant: "secondary" };
    return (0, r.jsx)(s.a, { onClose: k, ...ee, actions: [er, en], children: et });
}

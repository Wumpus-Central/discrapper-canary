r.r(t), r.d(t, { default: () => j }), r(896048);
var n = r(627968),
    l = r(64700),
    u = r(158954),
    a = r(311907),
    i = r(397927),
    c = r(734057),
    s = r(287809),
    o = r(562153),
    f = r(798286),
    d = r(814278),
    b = r(636153),
    E = r(204459),
    y = r(665691),
    A = r(998759),
    p = r(50299),
    g = r(82821),
    O = r(75811),
    m = r(930840);
r(603266);
var S = r(652215),
    _ = r(985018),
    C = r(42768);
function T(e) {
    let { badgeText: t, badgeColor: r } = e,
        u = l.useRef(t),
        a = l.useRef(r);
    return (0, n.jsx)(i.LpS, {
        text: u.current,
        color: a.current,
    });
}
function j(e) {
    var t, r;
    let { transitionState: j, userId: N, channelId: h, onClose: R } = e,
        v = (0, a.bG)([s.default], () => s.default.getUser(N)),
        w = (0, a.bG)([c.A], () => {
            var e;
            return null == (e = c.A.getChannel(h)) ? void 0 : e.getGuildId();
        }),
        I = o.Ay.useName(w, null, v),
        { fingerprint: x, userKey: U } = (0, p.R)({ userId: N }),
        F = (0, A.z)({
            fingerprintBase64: x,
            chunkSize: 5,
            desiredLength: 45,
        }),
        P = l.useCallback(() => {
            (0, f.Hb)({
                userId: N,
                channelId: h,
            });
        }, [h, N]),
        k = (0, y.UF)({
            userId: N,
            channelId: h,
        });
    (0, E.w)({
        channelId: h,
        userId: N,
        nickname: I,
        onAlertOpen: R,
    });
    let { isCurrentUserKeyPersistent: D, isOtherUserKeyPersistent: M, loading: V } = (0, b.q)({ userId: N }),
        G = l.useCallback(() => {
            null != U && ((0, d.bk)(N, U, M, h, S.ThZ.E2EE_USER_VERIFY_MODAL), R());
        }, [U, N, M, h, R]),
        L = l.useCallback(() => {
            null != U && ((0, d.Dh)(N, U, M), R());
        }, [U, N, M, R]),
        [K, Y] = l.useMemo(
            () =>
                k
                    ? [_.intl.string(_.t.UNUuem), i.LU0.colors.BACKGROUND_BRAND.css]
                    : [_.intl.string(_.t.y2b7CA), i.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css],
            [k],
        ),
        B = l.useMemo(
            () =>
                (0, d.Z1)({
                    isCurrentUserKeyPersistent: D,
                    isOtherUserKeyPersistent: M,
                    otherUserNickname: I,
                }),
            [D, M, I],
        ),
        z = (0, g.H)({
            userId: N,
            keyToOmit: U,
        });
    l.useEffect(() => {
        (0, f.HJ)({
            userId: N,
            channelId: h,
        });
    }, [h, N]);
    let H = {
            transitionState: j,
            title: _.intl.string(_.t["/WPGnF"]),
            subtitle: _.intl.format(_.t.oc2kce, { username: I }),
        },
        q = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: C.Ot,
                    children: [
                        z > 0 &&
                            (0, n.jsx)(i.po8, {
                                messageType: i.YCn.INFO,
                                className: C.Ht,
                                children: _.intl.format(_.t.uZDkz0, { count: z }),
                            }),
                        (0, n.jsxs)("div", {
                            className: C.wx,
                            children: [
                                (0, n.jsx)(i.Heading, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: _.intl.string(_.t["/WPGnF"]),
                                }),
                                null != F &&
                                    (0, n.jsx)(m.c, {
                                        className: C.nJ,
                                        chunks: F,
                                        color: i.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: P,
                                    }),
                                (0, n.jsx)("div", {
                                    className: C.ub,
                                    children:
                                        null == F
                                            ? (0, n.jsx)(i.y$y, {
                                                  className: C.u1,
                                                  type: i.tVU.SPINNING_CIRCLE,
                                              })
                                            : (0, n.jsx)(T, {
                                                  badgeText: K,
                                                  badgeColor: Y,
                                              }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(O.j, {
                            className: C.aY,
                            chunks: F,
                            columns: 3,
                        }),
                    ],
                }),
                (0, n.jsx)(i.Text, {
                    className: C.qr,
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: B,
                }),
            ],
        }),
        Z = {
            text: k ? _.intl.string(_.t["Osb+/n"]) : _.intl.string(_.t["0tvNAn"]),
            disabled: null == F || V,
            onClick: k ? L : G,
        },
        J = {
            text: _.intl.string(_.t["ETE/oC"]),
            onClick: R,
            variant: "secondary",
        };
    return (0, n.jsx)(
        u.Modal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({ onClose: R }, H)),
        (r = r =
            {
                actions: [J, Z],
                children: q,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}

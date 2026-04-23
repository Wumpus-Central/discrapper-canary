r.r(t), r.d(t, { default: () => b });
var n = r(627968),
    l = r(64700),
    s = r(189213),
    u = r(311907),
    i = r(777666),
    a = r(827734),
    c = r(512950),
    o = r(534514),
    d = r(289873),
    E = r(834730),
    f = r(734057),
    A = r(287809),
    _ = r(562153),
    S = r(798286),
    R = r(814278),
    g = r(636153),
    T = r(204459),
    m = r(665691),
    C = r(998759),
    y = r(50299),
    N = r(82821),
    I = r(75811),
    h = r(930840);
r(603266);
var x = r(652215),
    F = r(985018),
    p = r(751005);
function U(e) {
    let { badgeText: t, badgeColor: r } = e,
        s = l.useRef(t),
        u = l.useRef(r);
    return (0, n.jsx)(i.Lp, { text: s.current, color: u.current });
}
function b(e) {
    let { transitionState: t, userId: r, channelId: i, onClose: b } = e,
        k = (0, u.bG)([A.default], () => A.default.getUser(r)),
        w = (0, u.bG)([f.A], () => f.A.getChannel(i)?.getGuildId()),
        v = _.Ay.useName(w, null, k),
        { fingerprint: D, userKey: M } = (0, y.R)({ userId: r }),
        O = (0, C.z)({ fingerprintBase64: D, chunkSize: 5, desiredLength: 45 }),
        j = l.useCallback(() => {
            (0, S.Hb)({ userId: r, channelId: i });
        }, [i, r]),
        K = (0, m.UF)({ userId: r, channelId: i });
    (0, T.w)({ channelId: i, userId: r, nickname: v, onAlertOpen: b });
    let { isCurrentUserKeyPersistent: V, isOtherUserKeyPersistent: G, loading: L } = (0, g.q)({ userId: r }),
        Y = l.useCallback(() => {
            null != M && ((0, R.bk)(r, M, G, i, x.ThZ.E2EE_USER_VERIFY_MODAL), b());
        }, [M, r, G, i, b]),
        P = l.useCallback(() => {
            null != M && ((0, R.Dh)(r, M, G), b());
        }, [M, r, G, b]),
        [z, B] = l.useMemo(
            () =>
                K
                    ? [F.intl.string(F.t.UNUuem), a.A.colors.BACKGROUND_BRAND.css]
                    : [F.intl.string(F.t.y2b7CA), a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css],
            [K],
        ),
        H = l.useMemo(
            () => (0, R.Z1)({ isCurrentUserKeyPersistent: V, isOtherUserKeyPersistent: G, otherUserNickname: v }),
            [V, G, v],
        ),
        q = (0, N.H)({ userId: r, keyToOmit: M });
    l.useEffect(() => {
        (0, S.HJ)({ userId: r, channelId: i });
    }, [i, r]);
    let Z = {
            transitionState: t,
            title: F.intl.string(F.t["/WPGnF"]),
            subtitle: F.intl.format(F.t.oc2kce, { username: v }),
        },
        J = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: p.Ot,
                    children: [
                        q > 0 &&
                            (0, n.jsx)(c.p, {
                                messageType: c.Y.INFO,
                                className: p.Ht,
                                children: F.intl.format(F.t.uZDkz0, { count: q }),
                            }),
                        (0, n.jsxs)("div", {
                            className: p.wx,
                            children: [
                                (0, n.jsx)(o.D, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: F.intl.string(F.t["/WPGnF"]),
                                }),
                                null != O &&
                                    (0, n.jsx)(h.c, {
                                        className: p.nJ,
                                        chunks: O,
                                        color: a.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: j,
                                    }),
                                (0, n.jsx)("div", {
                                    className: p.ub,
                                    children:
                                        null == O
                                            ? (0, n.jsx)(d.y, { className: p.u1, type: d.t.SPINNING_CIRCLE })
                                            : (0, n.jsx)(U, { badgeText: z, badgeColor: B }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(I.j, { className: p.aY, chunks: O, columns: 3 }),
                    ],
                }),
                (0, n.jsx)(E.E, { className: p.qr, variant: "text-sm/normal", color: "text-muted", children: H }),
            ],
        }),
        W = {
            text: K ? F.intl.string(F.t["Osb+/n"]) : F.intl.string(F.t["0tvNAn"]),
            disabled: null == O || L,
            onClick: K ? P : Y,
        },
        X = { text: F.intl.string(F.t["ETE/oC"]), onClick: b, variant: "secondary" };
    return (0, n.jsx)(s.Modal, { onClose: b, ...Z, actions: [X, W], children: J });
}

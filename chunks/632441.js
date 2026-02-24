r.r(t), r.d(t, { default: () => h });
var n = r(627968),
    l = r(64700),
    u = r(158954),
    s = r(311907),
    i = r(397927),
    a = r(734057),
    c = r(287809),
    o = r(562153),
    d = r(798286),
    E = r(814278),
    f = r(636153),
    A = r(204459),
    _ = r(665691),
    S = r(998759),
    g = r(50299),
    T = r(82821),
    C = r(75811),
    R = r(930840);
r(603266);
var y = r(652215),
    m = r(985018),
    N = r(250950);
function I(e) {
    let { badgeText: t, badgeColor: r } = e,
        u = l.useRef(t),
        s = l.useRef(r);
    return (0, n.jsx)(i.LpS, { text: u.current, color: s.current });
}
function h(e) {
    let { transitionState: t, userId: r, channelId: h, onClose: U } = e,
        x = (0, s.bG)([c.default], () => c.default.getUser(r)),
        F = (0, s.bG)([a.A], () => a.A.getChannel(h)?.getGuildId()),
        p = o.Ay.useName(F, null, x),
        { fingerprint: b, userKey: k } = (0, g.R)({ userId: r }),
        v = (0, S.z)({ fingerprintBase64: b, chunkSize: 5, desiredLength: 45 }),
        w = l.useCallback(() => {
            (0, d.Hb)({ userId: r, channelId: h });
        }, [h, r]),
        M = (0, _.UF)({ userId: r, channelId: h });
    (0, A.w)({ channelId: h, userId: r, nickname: p, onAlertOpen: U });
    let { isCurrentUserKeyPersistent: D, isOtherUserKeyPersistent: O, loading: V } = (0, f.q)({ userId: r }),
        K = l.useCallback(() => {
            null != k && ((0, E.bk)(r, k, O, h, y.ThZ.E2EE_USER_VERIFY_MODAL), U());
        }, [k, r, O, h, U]),
        j = l.useCallback(() => {
            null != k && ((0, E.Dh)(r, k, O), U());
        }, [k, r, O, U]),
        [L, G] = l.useMemo(
            () =>
                M
                    ? [m.intl.string(m.t.UNUuem), i.LU0.colors.BACKGROUND_BRAND.css]
                    : [m.intl.string(m.t.y2b7CA), i.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css],
            [M],
        ),
        Y = l.useMemo(
            () => (0, E.Z1)({ isCurrentUserKeyPersistent: D, isOtherUserKeyPersistent: O, otherUserNickname: p }),
            [D, O, p],
        ),
        P = (0, T.H)({ userId: r, keyToOmit: k });
    l.useEffect(() => {
        (0, d.HJ)({ userId: r, channelId: h });
    }, [h, r]);
    let z = {
            transitionState: t,
            title: m.intl.string(m.t["/WPGnF"]),
            subtitle: m.intl.format(m.t.oc2kce, { username: p }),
        },
        B = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: N.Ot,
                    children: [
                        P > 0 &&
                            (0, n.jsx)(i.po8, {
                                messageType: i.YCn.INFO,
                                className: N.Ht,
                                children: m.intl.format(m.t.uZDkz0, { count: P }),
                            }),
                        (0, n.jsxs)("div", {
                            className: N.wx,
                            children: [
                                (0, n.jsx)(i.Heading, {
                                    variant: "text-sm/bold",
                                    color: "text-strong",
                                    children: m.intl.string(m.t["/WPGnF"]),
                                }),
                                null != v &&
                                    (0, n.jsx)(R.c, {
                                        className: N.nJ,
                                        chunks: v,
                                        color: i.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                        onCopy: w,
                                    }),
                                (0, n.jsx)("div", {
                                    className: N.ub,
                                    children:
                                        null == v
                                            ? (0, n.jsx)(i.y$y, { className: N.u1, type: i.tVU.SPINNING_CIRCLE })
                                            : (0, n.jsx)(I, { badgeText: L, badgeColor: G }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(C.j, { className: N.aY, chunks: v, columns: 3 }),
                    ],
                }),
                (0, n.jsx)(i.Text, { className: N.qr, variant: "text-sm/normal", color: "text-muted", children: Y }),
            ],
        }),
        H = {
            text: M ? m.intl.string(m.t["Osb+/n"]) : m.intl.string(m.t["0tvNAn"]),
            disabled: null == v || V,
            onClick: M ? j : K,
        },
        q = { text: m.intl.string(m.t["ETE/oC"]), onClick: U, variant: "secondary" };
    return (0, n.jsx)(u.Modal, { onClose: U, ...z, actions: [q, H], children: B });
}

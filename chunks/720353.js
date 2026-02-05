n.d(t, { MFAModal: () => f, a: () => x, t: () => m });
var l = n(627968),
    s = n(64700),
    r = n(397927),
    i = n(83726),
    a = n(815502),
    o = n(947737),
    d = n(314428),
    c = n(542229),
    u = n(467181),
    h = n(365126),
    g = n(985018);
function m(e) {
    let { mfaChallenge: t, mfaFinish: n, onEarlyClose: g, onClose: m, headerAlignStart: f, width: x = 440 } = e,
        [S, p] = s.useState(t.methods[0]?.type ?? "select"),
        [j, b] = s.useState(S),
        A = async (e) => {
            let { mfaType: l, data: s } = e;
            await n({ mfaType: l, data: s, ticket: t.ticket }), null != m && m();
        },
        y = { mfaChallenge: t, finish: A, setSlide: p, onClose: g, headerAlignStart: f };
    return (0, l.jsxs)(r.tN_, {
        activeSlide: S,
        width: x,
        onSlideReady: b,
        children: [
            (0, l.jsx)(r.q7S, { id: "select", children: (0, l.jsx)(d.A, { ...y }) }),
            (0, l.jsx)(r.q7S, { id: "webauthn", children: (0, l.jsx)(h.A, { ...y }) }),
            (0, l.jsx)(r.q7S, { id: "totp", children: (0, l.jsx)(u.A, { ...y, isSlideReady: "totp" === j }) }),
            (0, l.jsx)(r.q7S, { id: "sms", children: (0, l.jsx)(c.A, { ...y, isSlideReady: "sms" === j }) }),
            (0, l.jsx)(r.q7S, { id: "backup", children: (0, l.jsx)(i.A, { ...y }) }),
            (0, l.jsx)(r.q7S, {
                id: "backup_ack",
                children: (0, l.jsx)(a.A, { ...y, isSlideReady: "backup_ack" === j }),
            }),
            (0, l.jsx)(r.q7S, { id: "password", children: (0, l.jsx)(o.A, { ...y, isSlideReady: "password" === j }) }),
        ],
    });
}
function f(e) {
    let { mfaChallenge: t, finish: n, transitionState: s, onClose: i } = e;
    return (0, l.jsx)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: s,
        size: r.rIJ.SMALL,
        "aria-label": g.intl.string(g.t.saHocI),
        parentComponent: "MFAModal",
        children: (0, l.jsx)(m, { mfaChallenge: t, mfaFinish: n, onClose: i, onEarlyClose: i }),
    });
}
function x(e, t, n) {
    (0, r.qfG)((n) => (0, l.jsx)(f, { finish: t, mfaChallenge: e, ...n }), {
        onCloseCallback: () => {
            n(Error(g.intl.string(g.t.N2yb9a)));
        },
    });
}

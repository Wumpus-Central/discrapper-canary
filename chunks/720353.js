n.d(t, { MFAModal: () => x, a: () => S, t: () => f });
var a = n(627968),
    r = n(64700),
    i = n(430690),
    s = n(935462),
    l = n(192308),
    o = n(83726),
    d = n(815502),
    c = n(947737),
    u = n(314428),
    h = n(542229),
    g = n(467181),
    m = n(365126),
    p = n(985018);
function f(e) {
    let { mfaChallenge: t, mfaFinish: n, onEarlyClose: s, onClose: l, headerAlignStart: p, width: f = 440 } = e,
        [x, S] = r.useState(t.methods[0]?.type ?? "select"),
        [b, A] = r.useState(x),
        j = async (e) => {
            let { mfaType: a, data: r } = e;
            await n({ mfaType: a, data: r, ticket: t.ticket }), null != l && l();
        },
        y = { mfaChallenge: t, finish: j, setSlide: S, onClose: s, headerAlignStart: p };
    return (0, a.jsxs)(i.t, {
        activeSlide: x,
        width: f,
        onSlideReady: A,
        children: [
            (0, a.jsx)(i.q, { id: "select", children: (0, a.jsx)(u.A, { ...y }) }),
            (0, a.jsx)(i.q, { id: "webauthn", children: (0, a.jsx)(m.A, { ...y }) }),
            (0, a.jsx)(i.q, { id: "totp", children: (0, a.jsx)(g.A, { ...y, isSlideReady: "totp" === b }) }),
            (0, a.jsx)(i.q, { id: "sms", children: (0, a.jsx)(h.A, { ...y, isSlideReady: "sms" === b }) }),
            (0, a.jsx)(i.q, { id: "backup", children: (0, a.jsx)(o.A, { ...y }) }),
            (0, a.jsx)(i.q, {
                id: "backup_ack",
                children: (0, a.jsx)(d.A, { ...y, isSlideReady: "backup_ack" === b }),
            }),
            (0, a.jsx)(i.q, { id: "password", children: (0, a.jsx)(c.A, { ...y, isSlideReady: "password" === b }) }),
        ],
    });
}
function x(e) {
    let { mfaChallenge: t, finish: n, transitionState: r, onClose: i } = e;
    return (0, a.jsx)(s.EO, {
        "data-migration-pending": !0,
        transitionState: r,
        size: s.rI.SMALL,
        "aria-label": p.intl.string(p.t.saHocI),
        parentComponent: "MFAModal",
        children: (0, a.jsx)(f, { mfaChallenge: t, mfaFinish: n, onClose: i, onEarlyClose: i }),
    });
}
function S(e, t, n) {
    (0, l.openModal)((n) => (0, a.jsx)(x, { finish: t, mfaChallenge: e, ...n }), {
        onCloseCallback: () => {
            n(Error(p.intl.string(p.t.N2yb9a)));
        },
    });
}

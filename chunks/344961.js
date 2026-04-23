"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    r = n(417597),
    l = n(765178),
    a = n(289873),
    o = n(834730),
    c = n(331322),
    d = n(123292),
    u = n(778712),
    _ = n(685094),
    h = n(830215),
    m = n(730134),
    g = n(598047),
    p = n(854378),
    A = n(414121),
    f = n(525711),
    E = n(787610),
    x = n(293731),
    I = n(961350),
    v = n(723702),
    N = n(427262),
    j = n(837921),
    C = n(652215),
    T = n(818348),
    y = n(985018),
    b = n(611008),
    S = n(818050);
let R = n(906118);
function O(e) {
    let { text: t = "" } = e,
        [n, r] = s.useState(!1);
    return (
        s.useEffect(() => {
            let e = new Image();
            (e.src = R), (e.onload = () => r(!0)), (e.onerror = () => r(!0));
        }, [R]),
        s.useEffect(() => {
            n && l.O.announce(y.intl.string(y.t.j2p125));
        }, [n]),
        (0, i.jsx)("div", {
            className: b.Ac,
            children:
                "" !== t && n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(A.Ay, { className: b.JB, size: 160, text: t }),
                              (0, i.jsx)("div", { className: b.R6, children: (0, i.jsx)("img", { src: R, alt: "" }) }),
                          ],
                      })
                    : (0, i.jsx)("div", {
                          className: b.R6,
                          "aria-label": y.intl.string(y.t.BUGkVF),
                          "aria-busy": !0,
                          children: (0, i.jsx)(a.y, {
                              className: b.JB,
                              type: a.y.Type.WANDERING_CUBES,
                              "aria-hidden": !0,
                          }),
                      }),
        })
    );
}
let L = (e) => {
    let { className: t, children: n } = e;
    return (0, i.jsx)(o.E, { variant: "text-md/normal", color: "text-feedback-critical", className: t, children: n });
};
function w(e) {
    let { state: t, cancel: n, errorMessage: s, conditionalMediationAbortController: r, isPasswordlessActive: l } = e;
    switch (t.step) {
        case f.b.INITIALIZING:
        case f.b.PENDING_REMOTE_INIT:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(O, {
                        text: t.step === f.b.PENDING_REMOTE_INIT ? `https://discord.com/ra/${t.fingerprint}` : "",
                    }),
                    (0, i.jsx)(p.hE, { className: S.QB, children: y.intl.string(y.t.UPiHaL) }),
                    null != s
                        ? (0, i.jsx)(L, { children: s })
                        : (0, i.jsx)(p.tK, { children: y.intl.format(y.t["Qq+A6i"], {}) }),
                    (0, i.jsx)(c.B, {
                        padding: 8,
                        align: "center",
                        children: (0, i.jsx)(d.Q, {
                            text: y.intl.string(y.t["/kpMDt"]),
                            textVariant: "text-sm/normal",
                            onClick: () => {
                                let e;
                                return (
                                    (e =
                                        v.isPlatformEmbedded && j.Ay.supportsFeature(C.BYE.WEBAUTHN)
                                            ? j.Ay.webAuthnAuthenticate
                                            : x.J),
                                    void h.A.authenticatePasswordless({
                                        authenticateFunc: e,
                                        conditionalMediationAbortController: r,
                                    }).catch(() => {})
                                );
                            },
                            disabled: l,
                        }),
                    }),
                ],
            });
        case f.b.PENDING_TICKET: {
            let { user: e } = t;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(m.A, {
                        className: b.b4,
                        user: e,
                        size: u._3.SIZE_120,
                        isMobile: !0,
                        status: T.cl.ONLINE,
                    }),
                    (0, i.jsx)(p.hE, { className: S.QB, children: y.intl.string(y.t.apGCUT) }),
                    (0, i.jsx)(p.tK, { children: y.intl.format(y.t.Cbl5JK, { username: `${N.Ay.getUserTag(e)}` }) }),
                    (0, i.jsx)("div", {
                        className: b.Z,
                        children: (0, i.jsx)(d.Q, {
                            text: y.intl.string(y.t.nOOhwo),
                            textVariant: "text-sm/normal",
                            onClick: n,
                        }),
                    }),
                ],
            });
        }
        case f.b.PENDING_LOGIN:
        case f.b.FINISH:
            return (0, i.jsx)(a.y, { type: a.y.Type.WANDERING_CUBES });
    }
}
function k(e) {
    let { onAuthenticateSuccess: t, conditionalMediationAbortController: n } = e,
        s = (0, r.bG)([I.default], () => I.default.getIsPasswordlessActive()),
        l = (0, g.A)(),
        { state: a, cancel: o } = (0, E.H)(t, l),
        c = (function (e) {
            switch (e) {
                case f.b.INITIALIZING:
                case f.b.PENDING_REMOTE_INIT:
                    return 0;
                case f.b.PENDING_TICKET:
                case f.b.PENDING_LOGIN:
                case f.b.FINISH:
                    return 1;
            }
        })(a.step);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: b.AC }),
            (0, i.jsx)(_.Y, {
                fillParent: !0,
                className: b.ZF,
                step: c,
                steps: [0, 1],
                children: (0, i.jsx)("div", {
                    className: b.vP,
                    children: (0, i.jsx)(w, {
                        state: a,
                        cancel: o,
                        conditionalMediationAbortController: n,
                        isPasswordlessActive: s,
                    }),
                }),
            }),
        ],
    });
}

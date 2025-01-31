n.d(t, {
    Cd: () => m,
    YR: () => x
}),
    n(47120),
    n(411104);
var l = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(447097),
    o = n(873124),
    a = n(248902),
    d = n(160511),
    u = n(51693),
    c = n(973810),
    h = n(388032);
function m(e) {
    var t, n;
    let { mfaChallenge: h, mfaFinish: m, onEarlyClose: f, onClose: x, width: g = 440 } = e,
        [S, v] = i.useState(null !== (n = null === (t = h.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== n ? n : 'select'),
        [p, j] = i.useState(S),
        b = async (e) => {
            let { mfaType: t, data: n } = e;
            await m({
                mfaType: t,
                data: n,
                ticket: h.ticket
            }),
                null != x && x();
        },
        C = {
            mfaChallenge: h,
            finish: b,
            setSlide: v,
            onClose: f
        };
    return (0, l.jsxs)(s.MyZ, {
        activeSlide: S,
        width: g,
        onSlideReady: j,
        children: [
            (0, l.jsx)(s.Mi4, {
                id: 'select',
                children: (0, l.jsx)(a.Z, { ...C })
            }),
            (0, l.jsx)(s.Mi4, {
                id: 'webauthn',
                children: (0, l.jsx)(c.Z, { ...C })
            }),
            (0, l.jsx)(s.Mi4, {
                id: 'totp',
                children: (0, l.jsx)(u.Z, {
                    ...C,
                    isSlideReady: 'totp' === p
                })
            }),
            (0, l.jsx)(s.Mi4, {
                id: 'sms',
                children: (0, l.jsx)(d.Z, {
                    ...C,
                    isSlideReady: 'sms' === p
                })
            }),
            (0, l.jsx)(s.Mi4, {
                id: 'backup',
                children: (0, l.jsx)(r.Z, {
                    ...C,
                    isSlideReady: 'backup' === p
                })
            }),
            (0, l.jsx)(s.Mi4, {
                id: 'password',
                children: (0, l.jsx)(o.Z, {
                    ...C,
                    isSlideReady: 'password' === p
                })
            })
        ]
    });
}
function f(e) {
    let { mfaChallenge: t, finish: n, transitionState: i, onClose: r } = e;
    return (0, l.jsx)(s.Y0X, {
        transitionState: i,
        size: s.CgR.SMALL,
        'aria-label': h.intl.string(h.t.saHocH),
        children: (0, l.jsx)(m, {
            mfaChallenge: t,
            mfaFinish: n,
            onClose: r,
            onEarlyClose: r
        })
    });
}
function x(e, t, n) {
    (0, s.h7j)(
        (n) =>
            (0, l.jsx)(f, {
                finish: t,
                mfaChallenge: e,
                ...n
            }),
        {
            onCloseCallback: () => {
                n(Error(h.intl.string(h.t.N2yb9f)));
            }
        }
    );
}

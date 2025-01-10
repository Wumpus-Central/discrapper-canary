n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120),
    n(411104);
var i,
    r,
    s,
    l,
    a = n(200651),
    o = n(192379),
    c = n(533126),
    u = n(261470),
    d = n(399606),
    h = n(544891),
    g = n(481060),
    m = n(893776),
    p = n(99690),
    f = n(937154),
    _ = n(448986),
    x = n(388905),
    E = n(198993),
    I = n(710845),
    v = n(314897),
    N = n(585483),
    b = n(358085),
    C = n(172517),
    S = n(51144),
    A = n(998502),
    T = n(981631),
    j = n(231338),
    Z = n(388032),
    R = n(360860),
    L = n(232186);
((s = i || (i = {}))[(s.INITIALIZING = 0)] = 'INITIALIZING'), (s[(s.PENDING_REMOTE_INIT = 1)] = 'PENDING_REMOTE_INIT'), (s[(s.PENDING_FINISH = 2)] = 'PENDING_FINISH'), (s[(s.PENDING_TICKET = 3)] = 'PENDING_TICKET'), (s[(s.PENDING_LOGIN = 4)] = 'PENDING_LOGIN'), (s[(s.FINISH = 5)] = 'FINISH'), ((l = r || (r = {}))[(l.QR_CODE = 0)] = 'QR_CODE'), (l[(l.CONFIRM = 1)] = 'CONFIRM');
let P = n(515695),
    O = new I.Z('LoginQRSocket');
function D(e) {
    let { text: t = '' } = e,
        [n, i] = o.useState(!1);
    return (
        o.useEffect(() => {
            let e = new Image();
            (e.src = P), (e.onload = () => i(!0)), (e.onerror = () => i(!0));
        }, [P]),
        o.useEffect(() => {
            n && g.AccessibilityAnnouncer.announce(Z.intl.string(Z.t.j2p129));
        }, [n]),
        (0, a.jsx)('div', {
            className: R.qrCodeContainer,
            children:
                '' !== t && n
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(E.ZP, {
                                  className: R.qrCode,
                                  size: 160,
                                  text: t
                              }),
                              (0, a.jsx)('div', {
                                  className: R.qrCodeOverlay,
                                  children: (0, a.jsx)('img', {
                                      src: P,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, a.jsx)('div', {
                          className: R.qrCodeOverlay,
                          'aria-label': Z.intl.string(Z.t.BUGkVF),
                          'aria-busy': !0,
                          children: (0, a.jsx)(g.Spinner, {
                              className: R.qrCode,
                              type: g.Spinner.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let y = (e) => {
    let { className: t, children: n } = e;
    return (0, a.jsx)(g.Text, {
        variant: 'text-md/normal',
        color: 'text-danger',
        className: t,
        children: n
    });
};
function k(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: r, isPasswordlessActive: s } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(D, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, a.jsx)(x.Dx, {
                        className: L.marginBottom8,
                        children: Z.intl.string(Z.t.UPiHaG)
                    }),
                    null != i ? (0, a.jsx)(y, { children: i }) : (0, a.jsx)(x.DK, { children: Z.intl.format(Z.t['Qq+A6u'], {}) }),
                    (0, a.jsx)(g.Button, {
                        size: g.ButtonSizes.LARGE,
                        look: g.ButtonLooks.LINK,
                        color: g.ButtonColors.LINK,
                        disabled: s,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    b.isPlatformEmbedded && A.ZP.supportsFeature(T.eRX.WEBAUTHN)
                                        ? A.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, c.wz)(JSON.parse(e));
                                              return (0, c.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                m.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e
                                }).catch(() => {});
                            })(r),
                        children: Z.intl.string(Z.t['/kpMDg'])
                    })
                ]
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(p.Z, {
                        className: R.qrAvatar,
                        user: e,
                        size: g.AvatarSizes.SIZE_120,
                        isMobile: !0,
                        status: j.Sk.ONLINE
                    }),
                    (0, a.jsx)(x.Dx, {
                        className: L.marginBottom8,
                        children: Z.intl.string(Z.t.apGCUV)
                    }),
                    (0, a.jsx)(x.DK, { children: Z.intl.format(Z.t.Cbl5JC, { username: ''.concat(S.ZP.getUserTag(e)) }) }),
                    (0, a.jsx)(g.Button, {
                        look: g.Button.Looks.BLANK,
                        color: g.Button.Colors.LINK,
                        size: g.Button.Sizes.MIN,
                        onClick: n,
                        className: R.startOverButton,
                        children: Z.intl.string(Z.t.nOOhws)
                    })
                ]
            });
        }
        case 4:
        case 5:
            return (0, a.jsx)(g.Spinner, { type: g.Spinner.Type.WANDERING_CUBES });
    }
}
function B(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        i = (0, d.e7)([v.default], () => v.default.getIsPasswordlessActive()),
        {
            state: r,
            rsaKeyPair: s,
            cancel: l,
            handleFailure: c
        } = (function (e) {
            let [t, n] = o.useState(0),
                [i, r] = o.useState(!1),
                [s, l] = o.useState({ step: 0 }),
                [a, c] = o.useState(null),
                d = (0, f.Z)(),
                h = o.useMemo(() => new u.Z(1500, 30000), []),
                g = (0, _.Z)(() => {
                    l({ step: 0 }), d ? n((e) => e + 1) : (O.info('document is not visible, will defer reconnection when document becomes visible.'), r(!0));
                }),
                m = o.useCallback(() => {
                    O.error('Could not complete QR code login, trying to restart with a new QR code.'), l({ step: 0 }), !h.pending && h.fail(g);
                }, [g, h]);
            return (
                o.useEffect(() => {
                    d && i && 0 === s.step && (O.info('reconnecting, now that document is visible'), r(!1), n((e) => e + 1));
                }, [s, d, i, r]),
                o.useEffect(() => {
                    let t = Date.now(),
                        n = () => ''.concat(Date.now() - t, 'ms'),
                        i = 'wss:'.concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, '/?v=2'),
                        r = new WebSocket(i);
                    O.info('[0ms] connecting to '.concat(i));
                    let s = (e) => O.info('['.concat(n(), '] ').concat(e)),
                        a = null,
                        o = null,
                        u = null,
                        d = null,
                        p = !0;
                    function f() {
                        if (null != a) return a;
                        throw Error('No key pair set');
                    }
                    let _ = () => {
                        p ? ((p = !1), r.send(JSON.stringify({ op: 'heartbeat' }))) : (s('heartbeat timeout, reconnecting.'), r.close(), m());
                    };
                    return (
                        (r.onmessage = async (t) => {
                            let { data: n } = t,
                                i = JSON.parse(n);
                            switch (i.op) {
                                case 'nonce_proof': {
                                    let e = i.encrypted_nonce,
                                        t = await (0, C.qd)(f(), e);
                                    s('computed nonce proof'),
                                        r.send(
                                            JSON.stringify({
                                                op: 'nonce_proof',
                                                nonce: t
                                            })
                                        );
                                    return;
                                }
                                case 'pending_remote_init': {
                                    h.succeed(), N.S.dispatch(T.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, C.Pk)(f());
                                    if (e !== i.fingerprint) throw Error('bad fingerprint '.concat(e, ' !== ').concat(i.fingerprint));
                                    s('handshake complete awaiting remote auth.'),
                                        l({
                                            step: 1,
                                            fingerprint: e
                                        });
                                    return;
                                }
                                case 'pending_login': {
                                    let e = i.ticket;
                                    null == e && m(),
                                        l({
                                            step: 4,
                                            ticket: e
                                        });
                                    return;
                                }
                                case 'pending_ticket': {
                                    N.S.dispatch(T.CkL.WAVE_EMPHASIZE), s('remote auth handshake started, awaiting ticket/cancel.');
                                    let e = i.encrypted_user_payload;
                                    l({
                                        step: 3,
                                        user: await (0, C.Rq)(f(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    N.S.dispatch(T.CkL.WAVE_EMPHASIZE), s('remote auth handshake started, awaiting finish/cancel.');
                                    let e = i.encrypted_user_payload;
                                    l({
                                        step: 2,
                                        user: await (0, C.Rq)(f(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    N.S.dispatch(T.CkL.WAVE_EMPHASIZE), s('remote auth handshake finished.');
                                    let t = i.encrypted_token;
                                    l({ step: 5 }), e(await (0, C.FW)(f(), t));
                                    return;
                                }
                                case 'cancel':
                                    s('remote auth handshake cancelled.'), g();
                                    return;
                                case 'hello': {
                                    s('got hello, auth timeout='.concat(i.timeout_ms, 'ms'));
                                    let e = i.heartbeat_interval;
                                    d = setTimeout(
                                        () => {
                                            (d = null), _(), (u = setInterval(_, e));
                                        },
                                        Math.floor(e * Math.random())
                                    );
                                    return;
                                }
                                case 'heartbeat_ack':
                                    p = !0;
                            }
                        }),
                        (r.onopen = async () => {
                            (a = await (0, C.W_)()), (o = await (0, C.dK)(a));
                            let e = await (0, C.Pk)(a);
                            s('connected, handshaking with fingerprint: '.concat(e)),
                                r.send(
                                    JSON.stringify({
                                        op: 'init',
                                        encoded_public_key: o
                                    })
                                ),
                                c(a);
                        }),
                        (r.onclose = (e) => {
                            s('disconnected, code: '.concat(e.code, ' ').concat(e.reason)), m();
                        }),
                        (r.onerror = (e) => {
                            s('disconnected, error: '.concat(JSON.stringify(e))), m();
                        }),
                        () => {
                            s('cleaning up'), (r.onopen = () => null), (r.onmessage = () => null), (r.onclose = () => null), (r.onerror = () => null), r.close(1000), h.cancel(), null != d && clearTimeout(d), null != u && clearInterval(u);
                        }
                    );
                }, [g, e, t, h, m]),
                {
                    state: s,
                    rsaKeyPair: a,
                    cancel: g,
                    handleFailure: m
                }
            );
        })(t),
        m = (function (e) {
            switch (e) {
                case 0:
                case 1:
                    return 0;
                case 3:
                case 2:
                case 4:
                case 5:
                    return 1;
            }
        })(r.step);
    return (
        o.useEffect(() => {
            4 === r.step &&
                null != r.ticket &&
                h.tn
                    .post({
                        url: T.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: r.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(async (e) => {
                        if (null != s)
                            try {
                                let n = await (0, C.FW)(s, e.body.encrypted_token);
                                t(n);
                            } catch (e) {
                                c();
                            }
                        else c();
                    })
                    .catch(() => {
                        c();
                    });
        }, [r, t, s, c]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)('div', { className: R.verticalSeparator }),
                (0, a.jsx)(g.Sequencer, {
                    fillParent: !0,
                    className: R.qrLogin,
                    step: m,
                    steps: [0, 1],
                    children: (0, a.jsx)('div', {
                        className: R.qrLoginInner,
                        children: (0, a.jsx)(k, {
                            state: r,
                            cancel: l,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: i
                        })
                    })
                })
            ]
        })
    );
}

n.d(t, { Z: () => R }), n(388685), n(415506), n(49124);
var r = n(255367),
    i = n(73800),
    l = n(533126),
    a = n(261470),
    o = n(399606),
    s = n(544891),
    c = n(481060),
    u = n(893776),
    d = n(99690),
    h = n(937154),
    p = n(448986),
    g = n(388905),
    m = n(198993),
    f = n(710845),
    _ = n(314897),
    E = n(585483),
    x = n(358085),
    b = n(172517),
    v = n(51144),
    I = n(998502),
    O = n(981631),
    S = n(231338),
    N = n(388032),
    y = n(84879),
    j = n(20493);
let C = n(515695),
    T = new f.Z('LoginQRSocket');
function A(e) {
    let { text: t = '' } = e,
        [n, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            (e.src = C), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
        }, [C]),
        i.useEffect(() => {
            n && c.uvj.announce(N.intl.string(N.t.j2p129));
        }, [n]),
        (0, r.jsx)('div', {
            className: y.qrCodeContainer,
            children:
                '' !== t && n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.ZP, {
                                  className: y.qrCode,
                                  size: 160,
                                  text: t
                              }),
                              (0, r.jsx)('div', {
                                  className: y.qrCodeOverlay,
                                  children: (0, r.jsx)('img', {
                                      src: C,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: y.qrCodeOverlay,
                          'aria-label': N.intl.string(N.t.BUGkVF),
                          'aria-busy': !0,
                          children: (0, r.jsx)(c.$jN, {
                              className: y.qrCode,
                              type: c.$jN.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let P = (e) => {
    let { className: t, children: n } = e;
    return (0, r.jsx)(c.Text, {
        variant: 'text-md/normal',
        color: 'text-danger',
        className: t,
        children: n
    });
};
function Z(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: a, isPasswordlessActive: o } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, r.jsx)(g.Dx, {
                        className: j.marginBottom8,
                        children: N.intl.string(N.t.UPiHaG)
                    }),
                    null != i ? (0, r.jsx)(P, { children: i }) : (0, r.jsx)(g.DK, { children: N.intl.format(N.t['Qq+A6u'], {}) }),
                    (0, r.jsx)(c.zxk, {
                        size: c.PhG.LARGE,
                        look: c.iLD.LINK,
                        color: c.Ttl.LINK,
                        disabled: o,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    x.isPlatformEmbedded && I.ZP.supportsFeature(O.eRX.WEBAUTHN)
                                        ? I.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, l.wz)(JSON.parse(e));
                                              return (0, l.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                u.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e
                                }).catch(() => {});
                            })(a),
                        children: N.intl.string(N.t['/kpMDg'])
                    })
                ]
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Z, {
                        className: y.qrAvatar,
                        user: e,
                        size: c.EFr.SIZE_120,
                        isMobile: !0,
                        status: S.Sk.ONLINE
                    }),
                    (0, r.jsx)(g.Dx, {
                        className: j.marginBottom8,
                        children: N.intl.string(N.t.apGCUV)
                    }),
                    (0, r.jsx)(g.DK, { children: N.intl.format(N.t.Cbl5JC, { username: ''.concat(v.ZP.getUserTag(e)) }) }),
                    (0, r.jsx)(c.zxk, {
                        look: c.zxk.Looks.BLANK,
                        color: c.zxk.Colors.LINK,
                        size: c.zxk.Sizes.MIN,
                        onClick: n,
                        className: y.startOverButton,
                        children: N.intl.string(N.t.nOOhws)
                    })
                ]
            });
        }
        case 4:
        case 5:
            return (0, r.jsx)(c.$jN, { type: c.$jN.Type.WANDERING_CUBES });
    }
}
function R(e) {
    let { authTokenCallback: t, conditionalMediationAbortController: n } = e,
        l = (0, o.e7)([_.default], () => _.default.getIsPasswordlessActive()),
        {
            state: u,
            rsaKeyPair: d,
            cancel: g,
            handleFailure: m
        } = (function (e) {
            let [t, n] = i.useState(0),
                [r, l] = i.useState(!1),
                [o, s] = i.useState({ step: 0 }),
                [c, u] = i.useState(null),
                d = (0, h.Z)(),
                g = i.useMemo(() => new a.Z(1500, 30000), []),
                m = (0, p.Z)(() => {
                    s({ step: 0 }), d ? n((e) => e + 1) : (T.info('document is not visible, will defer reconnection when document becomes visible.'), l(!0));
                }),
                f = i.useCallback(() => {
                    T.error('Could not complete QR code login, trying to restart with a new QR code.'), s({ step: 0 }), g.pending || g.fail(m);
                }, [m, g]);
            return (
                i.useEffect(() => {
                    d && r && 0 === o.step && (T.info('reconnecting, now that document is visible'), l(!1), n((e) => e + 1));
                }, [o, d, r, l]),
                i.useEffect(() => {
                    let t = Date.now(),
                        n = () => ''.concat(Date.now() - t, 'ms'),
                        r = 'wss:'.concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, '/?v=2'),
                        i = new WebSocket(r);
                    T.info('[0ms] connecting to '.concat(r));
                    let l = (e) => T.info('['.concat(n(), '] ').concat(e)),
                        a = null,
                        o = null,
                        c = null,
                        d = null,
                        h = !0;
                    function p() {
                        if (null != a) return a;
                        throw Error('No key pair set');
                    }
                    let _ = () => {
                        h ? ((h = !1), i.send(JSON.stringify({ op: 'heartbeat' }))) : (l('heartbeat timeout, reconnecting.'), i.close(), f());
                    };
                    return (
                        (i.onmessage = async (t) => {
                            let { data: n } = t,
                                r = JSON.parse(n);
                            switch (r.op) {
                                case 'nonce_proof': {
                                    let e = r.encrypted_nonce,
                                        t = await (0, b.qd)(p(), e);
                                    l('computed nonce proof'),
                                        i.send(
                                            JSON.stringify({
                                                op: 'nonce_proof',
                                                nonce: t
                                            })
                                        );
                                    return;
                                }
                                case 'pending_remote_init': {
                                    g.succeed(), E.S.dispatch(O.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, b.Pk)(p());
                                    if (e !== r.fingerprint) throw Error('bad fingerprint '.concat(e, ' !== ').concat(r.fingerprint));
                                    l('handshake complete awaiting remote auth.'),
                                        s({
                                            step: 1,
                                            fingerprint: e
                                        });
                                    return;
                                }
                                case 'pending_login': {
                                    let e = r.ticket;
                                    null == e && f(),
                                        s({
                                            step: 4,
                                            ticket: e
                                        });
                                    return;
                                }
                                case 'pending_ticket': {
                                    E.S.dispatch(O.CkL.WAVE_EMPHASIZE), l('remote auth handshake started, awaiting ticket/cancel.');
                                    let e = r.encrypted_user_payload;
                                    s({
                                        step: 3,
                                        user: await (0, b.Rq)(p(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    E.S.dispatch(O.CkL.WAVE_EMPHASIZE), l('remote auth handshake started, awaiting finish/cancel.');
                                    let e = r.encrypted_user_payload;
                                    s({
                                        step: 2,
                                        user: await (0, b.Rq)(p(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    E.S.dispatch(O.CkL.WAVE_EMPHASIZE), l('remote auth handshake finished.');
                                    let t = r.encrypted_token;
                                    s({ step: 5 }), e(await (0, b.FW)(p(), t));
                                    return;
                                }
                                case 'cancel':
                                    l('remote auth handshake cancelled.'), m();
                                    return;
                                case 'hello': {
                                    l('got hello, auth timeout='.concat(r.timeout_ms, 'ms'));
                                    let e = r.heartbeat_interval;
                                    d = setTimeout(
                                        () => {
                                            (d = null), _(), (c = setInterval(_, e));
                                        },
                                        Math.floor(e * Math.random())
                                    );
                                    return;
                                }
                                case 'heartbeat_ack':
                                    h = !0;
                            }
                        }),
                        (i.onopen = async () => {
                            (a = await (0, b.W_)()), (o = await (0, b.dK)(a));
                            let e = await (0, b.Pk)(a);
                            l('connected, handshaking with fingerprint: '.concat(e)),
                                i.send(
                                    JSON.stringify({
                                        op: 'init',
                                        encoded_public_key: o
                                    })
                                ),
                                u(a);
                        }),
                        (i.onclose = (e) => {
                            l('disconnected, code: '.concat(e.code, ' ').concat(e.reason)), f();
                        }),
                        (i.onerror = (e) => {
                            l('disconnected, error: '.concat(JSON.stringify(e))), f();
                        }),
                        () => {
                            l('cleaning up'), (i.onopen = () => null), (i.onmessage = () => null), (i.onclose = () => null), (i.onerror = () => null), i.close(1000), g.cancel(), null != d && clearTimeout(d), null != c && clearInterval(c);
                        }
                    );
                }, [m, e, t, g, f]),
                {
                    state: o,
                    rsaKeyPair: c,
                    cancel: m,
                    handleFailure: f
                }
            );
        })(t),
        f = (function (e) {
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
        })(u.step);
    return (
        i.useEffect(() => {
            4 === u.step &&
                null != u.ticket &&
                s.tn
                    .post({
                        url: O.ANM.REMOTE_AUTH_LOGIN,
                        body: { ticket: u.ticket },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(async (e) => {
                        if (null != d)
                            try {
                                let n = await (0, b.FW)(d, e.body.encrypted_token);
                                t(n);
                            } catch (e) {
                                m();
                            }
                        else m();
                    })
                    .catch(() => {
                        m();
                    });
        }, [u, t, d, m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', { className: y.verticalSeparator }),
                (0, r.jsx)(c.qBt, {
                    fillParent: !0,
                    className: y.qrLogin,
                    step: f,
                    steps: [0, 1],
                    children: (0, r.jsx)('div', {
                        className: y.qrLoginInner,
                        children: (0, r.jsx)(Z, {
                            state: u,
                            cancel: g,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: l
                        })
                    })
                })
            ]
        })
    );
}

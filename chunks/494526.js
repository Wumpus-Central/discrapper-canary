n.d(t, { Z: () => R }), n(388685), n(415506), n(49124);
var r = n(200651),
    i = n(192379),
    s = n(533126),
    o = n(261470),
    l = n(399606),
    a = n(544891),
    c = n(481060),
    u = n(893776),
    d = n(99690),
    h = n(937154),
    g = n(448986),
    p = n(388905),
    m = n(198993),
    f = n(710845),
    _ = n(314897),
    x = n(585483),
    N = n(358085),
    b = n(172517),
    E = n(51144),
    v = n(998502),
    j = n(981631),
    I = n(231338),
    O = n(388032),
    S = n(84879),
    y = n(20493);
let C = n(515695),
    P = new f.Z('LoginQRSocket');
function A(e) {
    let { text: t = '' } = e,
        [n, s] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = new Image();
            (e.src = C), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
        }, [C]),
        i.useEffect(() => {
            n && c.uvj.announce(O.NW.string(O.t.j2p129));
        }, [n]),
        (0, r.jsx)('div', {
            className: S.qrCodeContainer,
            children:
                '' !== t && n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.ZP, {
                                  className: S.qrCode,
                                  size: 160,
                                  text: t
                              }),
                              (0, r.jsx)('div', {
                                  className: S.qrCodeOverlay,
                                  children: (0, r.jsx)('img', {
                                      src: C,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, r.jsx)('div', {
                          className: S.qrCodeOverlay,
                          'aria-label': O.NW.string(O.t.BUGkVF),
                          'aria-busy': !0,
                          children: (0, r.jsx)(c.$jN, {
                              className: S.qrCode,
                              type: c.$jN.Type.WANDERING_CUBES,
                              'aria-hidden': !0
                          })
                      })
        })
    );
}
let T = (e) => {
    let { className: t, children: n } = e;
    return (0, r.jsx)(c.Text, {
        variant: 'text-md/normal',
        color: 'text-danger',
        className: t,
        children: n
    });
};
function Z(e) {
    let { state: t, cancel: n, errorMessage: i, conditionalMediationAbortController: o, isPasswordlessActive: l } = e;
    switch (t.step) {
        case 0:
        case 1:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A, { text: 1 === t.step ? 'https://discord.com/ra/'.concat(t.fingerprint) : '' }),
                    (0, r.jsx)(p.Dx, {
                        className: y.marginBottom8,
                        children: O.NW.string(O.t.UPiHaG)
                    }),
                    null != i ? (0, r.jsx)(T, { children: i }) : (0, r.jsx)(p.DK, { children: O.NW.format(O.t['Qq+A6u'], {}) }),
                    (0, r.jsx)(c.zxk, {
                        size: c.PhG.LARGE,
                        look: c.iLD.LINK,
                        color: c.Ttl.LINK,
                        disabled: l,
                        onClick: () =>
                            (function (e) {
                                let t =
                                    N.isPlatformEmbedded && v.ZP.supportsFeature(j.eRX.WEBAUTHN)
                                        ? v.ZP.webAuthnAuthenticate
                                        : (e) => {
                                              let t = (0, s.wz)(JSON.parse(e));
                                              return (0, s.U2)(t).then((e) => JSON.stringify(e));
                                          };
                                u.Z.authenticatePasswordless({
                                    authenticateFunc: t,
                                    conditionalMediationAbortController: e
                                }).catch(() => {});
                            })(o),
                        children: O.NW.string(O.t['/kpMDg'])
                    })
                ]
            });
        case 3:
        case 2: {
            let { user: e } = t;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(d.Z, {
                        className: S.qrAvatar,
                        user: e,
                        size: c.EFr.SIZE_120,
                        isMobile: !0,
                        status: I.Sk.ONLINE
                    }),
                    (0, r.jsx)(p.Dx, {
                        className: y.marginBottom8,
                        children: O.NW.string(O.t.apGCUV)
                    }),
                    (0, r.jsx)(p.DK, { children: O.NW.format(O.t.Cbl5JC, { username: ''.concat(E.ZP.getUserTag(e)) }) }),
                    (0, r.jsx)(c.zxk, {
                        look: c.zxk.Looks.BLANK,
                        color: c.zxk.Colors.LINK,
                        size: c.zxk.Sizes.MIN,
                        onClick: n,
                        className: S.startOverButton,
                        children: O.NW.string(O.t.nOOhws)
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
        s = (0, l.e7)([_.default], () => _.default.getIsPasswordlessActive()),
        {
            state: u,
            rsaKeyPair: d,
            cancel: p,
            handleFailure: m
        } = (function (e) {
            let [t, n] = i.useState(0),
                [r, s] = i.useState(!1),
                [l, a] = i.useState({ step: 0 }),
                [c, u] = i.useState(null),
                d = (0, h.Z)(),
                p = i.useMemo(() => new o.Z(1500, 30000), []),
                m = (0, g.Z)(() => {
                    a({ step: 0 }), d ? n((e) => e + 1) : (P.info('document is not visible, will defer reconnection when document becomes visible.'), s(!0));
                }),
                f = i.useCallback(() => {
                    P.error('Could not complete QR code login, trying to restart with a new QR code.'), a({ step: 0 }), p.pending || p.fail(m);
                }, [m, p]);
            return (
                i.useEffect(() => {
                    d && r && 0 === l.step && (P.info('reconnecting, now that document is visible'), s(!1), n((e) => e + 1));
                }, [l, d, r, s]),
                i.useEffect(() => {
                    let t = Date.now(),
                        n = () => ''.concat(Date.now() - t, 'ms'),
                        r = 'wss:'.concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, '/?v=2'),
                        i = new WebSocket(r);
                    P.info('[0ms] connecting to '.concat(r));
                    let s = (e) => P.info('['.concat(n(), '] ').concat(e)),
                        o = null,
                        l = null,
                        c = null,
                        d = null,
                        h = !0;
                    function g() {
                        if (null != o) return o;
                        throw Error('No key pair set');
                    }
                    let _ = () => {
                        h ? ((h = !1), i.send(JSON.stringify({ op: 'heartbeat' }))) : (s('heartbeat timeout, reconnecting.'), i.close(), f());
                    };
                    return (
                        (i.onmessage = async (t) => {
                            let { data: n } = t,
                                r = JSON.parse(n);
                            switch (r.op) {
                                case 'nonce_proof': {
                                    let e = r.encrypted_nonce,
                                        t = await (0, b.qd)(g(), e);
                                    s('computed nonce proof'),
                                        i.send(
                                            JSON.stringify({
                                                op: 'nonce_proof',
                                                nonce: t
                                            })
                                        );
                                    return;
                                }
                                case 'pending_remote_init': {
                                    p.succeed(), x.S.dispatch(j.CkL.WAVE_EMPHASIZE);
                                    let e = await (0, b.Pk)(g());
                                    if (e !== r.fingerprint) throw Error('bad fingerprint '.concat(e, ' !== ').concat(r.fingerprint));
                                    s('handshake complete awaiting remote auth.'),
                                        a({
                                            step: 1,
                                            fingerprint: e
                                        });
                                    return;
                                }
                                case 'pending_login': {
                                    let e = r.ticket;
                                    null == e && f(),
                                        a({
                                            step: 4,
                                            ticket: e
                                        });
                                    return;
                                }
                                case 'pending_ticket': {
                                    x.S.dispatch(j.CkL.WAVE_EMPHASIZE), s('remote auth handshake started, awaiting ticket/cancel.');
                                    let e = r.encrypted_user_payload;
                                    a({
                                        step: 3,
                                        user: await (0, b.Rq)(g(), e)
                                    });
                                    return;
                                }
                                case 'pending_finish': {
                                    x.S.dispatch(j.CkL.WAVE_EMPHASIZE), s('remote auth handshake started, awaiting finish/cancel.');
                                    let e = r.encrypted_user_payload;
                                    a({
                                        step: 2,
                                        user: await (0, b.Rq)(g(), e)
                                    });
                                    return;
                                }
                                case 'finish': {
                                    x.S.dispatch(j.CkL.WAVE_EMPHASIZE), s('remote auth handshake finished.');
                                    let t = r.encrypted_token;
                                    a({ step: 5 }), e(await (0, b.FW)(g(), t));
                                    return;
                                }
                                case 'cancel':
                                    s('remote auth handshake cancelled.'), m();
                                    return;
                                case 'hello': {
                                    s('got hello, auth timeout='.concat(r.timeout_ms, 'ms'));
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
                            (o = await (0, b.W_)()), (l = await (0, b.dK)(o));
                            let e = await (0, b.Pk)(o);
                            s('connected, handshaking with fingerprint: '.concat(e)),
                                i.send(
                                    JSON.stringify({
                                        op: 'init',
                                        encoded_public_key: l
                                    })
                                ),
                                u(o);
                        }),
                        (i.onclose = (e) => {
                            s('disconnected, code: '.concat(e.code, ' ').concat(e.reason)), f();
                        }),
                        (i.onerror = (e) => {
                            s('disconnected, error: '.concat(JSON.stringify(e))), f();
                        }),
                        () => {
                            s('cleaning up'), (i.onopen = () => null), (i.onmessage = () => null), (i.onclose = () => null), (i.onerror = () => null), i.close(1000), p.cancel(), null != d && clearTimeout(d), null != c && clearInterval(c);
                        }
                    );
                }, [m, e, t, p, f]),
                {
                    state: l,
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
                a.tn
                    .post({
                        url: j.ANM.REMOTE_AUTH_LOGIN,
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
                (0, r.jsx)('div', { className: S.verticalSeparator }),
                (0, r.jsx)(c.qBt, {
                    fillParent: !0,
                    className: S.qrLogin,
                    step: f,
                    steps: [0, 1],
                    children: (0, r.jsx)('div', {
                        className: S.qrLoginInner,
                        children: (0, r.jsx)(Z, {
                            state: u,
                            cancel: p,
                            conditionalMediationAbortController: n,
                            isPasswordlessActive: s
                        })
                    })
                })
            ]
        })
    );
}

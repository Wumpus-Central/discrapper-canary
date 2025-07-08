(n.d(t, {
    Jh: () => j,
    Lk: () => F,
    Mx: () => B,
    Xg: () => Z,
    ZP: () => M,
    _0: () => G,
    _Z: () => U,
    c7: () => k,
    j3: () => H,
    qN: () => V
}),
    n(358797),
    n(35282));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(593473),
    l = n(114858),
    c = n(442837),
    u = n(922770),
    d = n(993365),
    f = n(481060),
    _ = n(686546),
    p = n(252618),
    h = n(258971),
    m = n(703656),
    g = n(769654),
    E = n(592125),
    b = n(496675),
    y = n(944486),
    O = n(626135),
    v = n(768581),
    I = n(585483),
    T = n(591759),
    S = n(787025),
    A = n(981631),
    N = n(388032),
    C = n(986335);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            }));
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function M(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: a, spinner: s } = e;
    return (
        (0, p.Tt)({ location: N.intl.string(N.t['3S249/']) }),
        (0, r.jsxs)('div', {
            className: C.wrapper,
            children: [
                s ? (0, r.jsx)(u.$, {}) : null,
                (0, r.jsx)('div', { className: o()(C.header, i) }),
                (0, r.jsx)(f.X6q, {
                    variant: 'heading-lg/bold',
                    className: C.text,
                    children: t
                }),
                null != n ? n : null,
                a
                    ? (0, r.jsx)(d.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: C.cta,
                          children: N.intl.string(N.t['k7J/w8'])
                      })
                    : null
            ]
        })
    );
}
function k(e) {
    return (0, r.jsx)(M, D(P({}, e), { headerClassName: C.headerSuccess }));
}
function j(e) {
    var { guild: t, application: n } = e,
        a = L(e, ['guild', 'application']);
    let o = N.intl.string(N.t.se5gLi);
    i.useEffect(() => {
        O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
    }, [null == n ? void 0 : n.id]);
    let s = i.useMemo(
            () =>
                null != n
                    ? null != t
                        ? N.intl.format(N.t.IlF6IS, {
                              installedApplicationName: null == n ? void 0 : n.name,
                              guildName: null == t ? void 0 : t.name
                          })
                        : N.intl.format(N.t.vTVC5e, { installedApplicationName: null == n ? void 0 : n.name })
                    : N.intl.string(N.t['Dp+rgI']),
            [n, t]
        ),
        l = (0, r.jsx)(d.x, {
            variant: 'text-md/normal',
            className: C.authorizedSuccessSubtext,
            children: s
        });
    return (0, r.jsx)('div', {
        className: C.authorizedSuccessWrapper,
        children: (0, r.jsx)(
            k,
            P(
                {
                    message: o,
                    footer: l
                },
                a
            )
        )
    });
}
function U(e) {
    var { guild: t, application: n } = e;
    let { onClose: a } = L(e, ['guild', 'application']),
        o = i.useCallback(() => {
            (null == t ? void 0 : t.id) != null &&
                ((0, g.X)(null == t ? void 0 : t.id),
                null == a || a(),
                O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: null == n ? void 0 : n.id,
                    guild_id: null == t ? void 0 : t.id
                }));
        }, [a, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        s = h.z8.getField('entrypoint'),
        l = i.useCallback(() => {
            (null == a || a(), O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id }));
        }, [a, null == n ? void 0 : n.id]),
        u = window.location.pathname.startsWith(A.Z5c.APPLICATION_DIRECTORY),
        d = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                (null == a || a(),
                null != s && (0, m.uL)(''),
                setImmediate(() => {
                    (I.S.dispatchToLastSubscribed(A.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id }));
                }));
        }, [null == n ? void 0 : n.id, a, s]),
        _ = (0, c.e7)([y.Z, E.Z], () => E.Z.getChannel(y.Z.getChannelId())),
        p = (0, c.e7)([b.Z], () => b.Z.can(A.Plq.SEND_MESSAGES, _)),
        v = null != t,
        T = null == t && p && (!u || null != s);
    return null != t || null != a
        ? (0, r.jsxs)('div', {
              className: C.buttonsContainer,
              children: [
                  null != a
                      ? v || T
                          ? (0, r.jsx)(f.zxk, {
                                size: f.zxk.Sizes.SMALL,
                                look: f.zxk.Looks.LINK,
                                color: f.zxk.Colors.PRIMARY,
                                onClick: l,
                                children: N.intl.string(N.t.cpT0Cg)
                            })
                          : (0, r.jsx)(f.zxk, {
                                fullWidth: !0,
                                color: f.zxk.Colors.PRIMARY,
                                onClick: l,
                                children: N.intl.string(N.t.cpT0Cg)
                            })
                      : void 0,
                  v &&
                      (0, r.jsx)(f.zxk, {
                          color: f.zxk.Colors.BRAND,
                          onClick: o,
                          children: (null == t ? void 0 : t.name.length) > 30 ? N.intl.string(N.t.M35zFB) : N.intl.format(N.t.UdYYPz, { guildName: null == t ? void 0 : t.name })
                      }),
                  T &&
                      (0, r.jsx)(f.zxk, {
                          color: f.zxk.Colors.BRAND,
                          onClick: d,
                          children: N.intl.string(N.t['0cCDKC'])
                      })
              ]
          })
        : null;
}
function G(e) {
    let { application: t } = e;
    return (
        i.useEffect(() => {
            O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: t.id });
        }, [t.id]),
        (0, r.jsxs)('div', {
            className: C.authorizedSuccessExternal,
            children: [
                (0, r.jsx)(_.ZP, {
                    mask: _.QS.SQUIRCLE,
                    className: C.authorizedSuccessExternalIcon,
                    children: (0, r.jsx)('img', {
                        alt: t.name,
                        src: v.ZP.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon
                        })
                    })
                }),
                (0, r.jsxs)('div', {
                    className: C.authorizedSuccessExternalCopy,
                    children: [
                        (0, r.jsx)(f.X6q, {
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            children: N.intl.format(N.t['1Q+p1t'], { appName: t.name })
                        }),
                        (0, r.jsx)(d.x, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: N.intl.format(N.t.Mr7x5e, { appName: t.name })
                        })
                    ]
                })
            ]
        })
    );
}
function B() {
    return (0, r.jsx)(F, { message: N.intl.string(N.t['/B7kX1']) });
}
function V(e) {
    let { application: t, onClose: n, message: a } = e,
        o = i.useCallback(() => {
            (null == n || n(), O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: t.id }));
        }, [n, t.id]);
    return (0, r.jsx)('div', {
        className: C.buttonsContainer,
        children: (0, r.jsxs)(f.zxk, {
            color: f.zxk.Colors.BRAND,
            onClick: o,
            className: C.authorizedExternalCta,
            innerClassName: C.authorizedExternalCtaInner,
            children: [
                a,
                ' ',
                (0, r.jsx)(f.rgF, {
                    color: f.TVs.unsafe_rawColors.WHITE_500.css,
                    size: 'xs'
                })
            ]
        })
    });
}
function F(e) {
    return (0, r.jsx)('div', {
        className: C.errorWrapper,
        children: (0, r.jsx)(M, D(P({}, e), { headerClassName: C.headerFailure }))
    });
}
function Z() {
    var e, t;
    let n = (0, l.TH)();
    return (0, r.jsx)(S.G, {
        children: (0, r.jsx)(j, {
            guild: null == (e = n.state) ? void 0 : e.guild,
            application: null == (t = n.state) ? void 0 : t.application,
            showsCloseWindowText: !0
        })
    });
}
function H(e) {
    var t, n;
    let { location: a } = e;
    i.useEffect(() => {
        if (null == a || '' === a.search) return;
        let e = null != document.referrer && '' !== document.referrer ? T.Z.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== A.Z5c.OAUTH2_AUTHORIZE) && (0, m.uL)(A.Z5c.INDEX);
    }, [a]);
    let o = null != a ? (0, s.parse)(a.search) : {},
        l = null != (n = null != (t = o.error_description) ? t : o.error) ? n : N.intl.string(N.t['mqn87+']);
    return (0, r.jsx)(S.G, {
        children: (0, r.jsx)(F, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}

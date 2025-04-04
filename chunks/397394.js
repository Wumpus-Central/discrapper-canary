n.d(t, {
    Jh: () => M,
    Lk: () => j,
    Xg: () => U,
    ZP: () => L,
    _Z: () => k,
    c7: () => x,
    j3: () => G
}),
    n(177593),
    n(301563);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(593473),
    l = n(512969),
    c = n(442837),
    u = n(922770),
    d = n(993365),
    f = n(481060),
    _ = n(252618),
    p = n(258971),
    h = n(703656),
    m = n(769654),
    g = n(592125),
    E = n(496675),
    b = n(944486),
    y = n(626135),
    v = n(585483),
    O = n(591759),
    I = n(787025),
    S = n(981631),
    T = n(388032),
    N = n(986335);
function A(e, t, n) {
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
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function L(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: o, spinner: s } = e;
    return (
        (0, _.Tt)({ location: T.NW.string(T.t['3S249/']) }),
        (0, r.jsxs)('div', {
            className: N.wrapper,
            children: [
                s ? (0, r.jsx)(u.$, {}) : null,
                (0, r.jsx)('div', { className: a()(N.header, i) }),
                (0, r.jsx)(f.X6q, {
                    variant: 'heading-lg/bold',
                    className: N.text,
                    children: t
                }),
                null != n ? n : null,
                o
                    ? (0, r.jsx)(d.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: N.cta,
                          children: T.NW.string(T.t['k7J/w8'])
                      })
                    : null
            ]
        })
    );
}
function x(e) {
    return (0, r.jsx)(L, P(C({}, e), { headerClassName: N.headerSuccess }));
}
function M(e) {
    var { guild: t, application: n } = e,
        o = w(e, ['guild', 'application']);
    let a = T.NW.string(T.t.se5gLi);
    i.useEffect(() => {
        y.default.track(S.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
    }, [null == n ? void 0 : n.id]);
    let s = i.useMemo(
            () =>
                null != n
                    ? null != t
                        ? T.NW.format(T.t.IlF6IS, {
                              installedApplicationName: null == n ? void 0 : n.name,
                              guildName: null == t ? void 0 : t.name
                          })
                        : T.NW.format(T.t.vTVC5e, { installedApplicationName: null == n ? void 0 : n.name })
                    : T.NW.string(T.t['Dp+rgI']),
            [n, t]
        ),
        l = (0, r.jsx)(d.x, {
            variant: 'text-md/normal',
            className: N.authorizedSuccessSubtext,
            children: s
        });
    return (0, r.jsx)('div', {
        className: N.authorizedSuccessWrapper,
        children: (0, r.jsx)(
            x,
            C(
                {
                    message: a,
                    footer: l
                },
                o
            )
        )
    });
}
function k(e) {
    var { guild: t, application: n } = e;
    let { onClose: o } = w(e, ['guild', 'application']),
        a = i.useCallback(() => {
            (null == t ? void 0 : t.id) != null &&
                ((0, m.X)(null == t ? void 0 : t.id),
                null == o || o(),
                y.default.track(S.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: null == n ? void 0 : n.id,
                    guild_id: null == t ? void 0 : t.id
                }));
        }, [o, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        s = p.z8.getField('entrypoint'),
        l = i.useCallback(() => {
            null == o || o(), y.default.track(S.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [o, null == n ? void 0 : n.id]),
        u = window.location.pathname.startsWith(S.Z5c.APPLICATION_DIRECTORY),
        d = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null &&
                (null == o || o(),
                null != s && (0, h.uL)(''),
                setImmediate(() => {
                    v.S.dispatchToLastSubscribed(S.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), y.default.track(S.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                }));
        }, [null == n ? void 0 : n.id, o, s]),
        _ = (0, c.e7)([b.Z, g.Z], () => g.Z.getChannel(b.Z.getChannelId())),
        O = (0, c.e7)([E.Z], () => E.Z.can(S.Plq.SEND_MESSAGES, _)),
        I = null != t,
        A = null == t && O && (!u || null != s);
    return null != t || null != o
        ? (0, r.jsxs)('div', {
              className: N.buttonsContainer,
              children: [
                  null != o
                      ? I || A
                          ? (0, r.jsx)(f.zxk, {
                                size: f.zxk.Sizes.SMALL,
                                look: f.zxk.Looks.LINK,
                                color: f.zxk.Colors.PRIMARY,
                                onClick: l,
                                children: T.NW.string(T.t.cpT0Cg)
                            })
                          : (0, r.jsx)(f.zxk, {
                                fullWidth: !0,
                                color: f.zxk.Colors.PRIMARY,
                                onClick: l,
                                children: T.NW.string(T.t.cpT0Cg)
                            })
                      : void 0,
                  I &&
                      (0, r.jsx)(f.zxk, {
                          color: f.zxk.Colors.BRAND,
                          onClick: a,
                          children: (null == t ? void 0 : t.name.length) > 30 ? T.NW.string(T.t.M35zFB) : T.NW.format(T.t.UdYYPz, { guildName: null == t ? void 0 : t.name })
                      }),
                  A &&
                      (0, r.jsx)(f.zxk, {
                          color: f.zxk.Colors.BRAND,
                          onClick: d,
                          children: T.NW.string(T.t['0cCDKC'])
                      })
              ]
          })
        : null;
}
function j(e) {
    return (0, r.jsx)(L, P(C({}, e), { headerClassName: N.headerFailure }));
}
function U() {
    var e, t;
    let n = (0, l.TH)();
    return (0, r.jsx)(I.G, {
        children: (0, r.jsx)(M, {
            guild: null == (e = n.state) ? void 0 : e.guild,
            application: null == (t = n.state) ? void 0 : t.application,
            showsCloseWindowText: !0
        })
    });
}
function G(e) {
    var t, n;
    let { location: o } = e;
    i.useEffect(() => {
        if (null == o || '' === o.search) return;
        let e = null != document.referrer && '' !== document.referrer ? O.Z.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== S.Z5c.OAUTH2_AUTHORIZE) && (0, h.uL)(S.Z5c.INDEX);
    }, [o]);
    let a = null != o ? (0, s.parse)(o.search) : {},
        l = null != (n = null != (t = a.error_description) ? t : a.error) ? n : T.NW.string(T.t['mqn87+']);
    return (0, r.jsx)(I.G, {
        children: (0, r.jsx)(j, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}

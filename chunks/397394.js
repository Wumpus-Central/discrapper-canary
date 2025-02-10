n.d(t, {
    Jh: () => O,
    Lk: () => L,
    Xg: () => x,
    ZP: () => C,
    _Z: () => D,
    c7: () => R,
    j3: () => w
}),
    n(177593);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(593473),
    l = n(512969),
    u = n(442837),
    c = n(922770),
    d = n(993365),
    f = n(481060),
    _ = n(132871),
    p = n(252618),
    h = n(703656),
    m = n(769654),
    g = n(592125),
    E = n(496675),
    v = n(944486),
    y = n(626135),
    I = n(585483),
    T = n(591759),
    b = n(787025),
    S = n(981631),
    A = n(388032),
    N = n(147978);
function C(e) {
    let { message: t, footer: n, headerClassName: r, showsCloseWindowText: a, spinner: o } = e;
    return (
        (0, p.Tt)({ location: A.intl.string(A.t['3S249/']) }),
        (0, i.jsxs)('div', {
            className: N.wrapper,
            children: [
                o ? (0, i.jsx)(c.$, {}) : null,
                (0, i.jsx)('div', { className: s()(N.header, r) }),
                (0, i.jsx)(f.X6q, {
                    variant: 'heading-lg/bold',
                    className: N.text,
                    children: t
                }),
                null != n ? n : null,
                a
                    ? (0, i.jsx)(d.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: N.cta,
                          children: A.intl.string(A.t['k7J/w8'])
                      })
                    : null
            ]
        })
    );
}
function R(e) {
    return (0, i.jsx)(C, {
        ...e,
        headerClassName: N.headerSuccess
    });
}
function O(e) {
    let { guild: t, application: n, ...a } = e,
        s = A.intl.string(A.t.se5gLi);
    r.useEffect(() => {
        y.default.track(S.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
    }, [null == n ? void 0 : n.id]);
    let o = r.useMemo(
            () =>
                null != n
                    ? null != t
                        ? A.intl.format(A.t.IlF6IS, {
                              installedApplicationName: null == n ? void 0 : n.name,
                              guildName: null == t ? void 0 : t.name
                          })
                        : A.intl.format(A.t.vTVC5e, { installedApplicationName: null == n ? void 0 : n.name })
                    : A.intl.string(A.t['Dp+rgI']),
            [n, t]
        ),
        l = (0, i.jsx)(d.x, {
            variant: 'text-md/normal',
            className: N.authorizedSuccessSubtext,
            children: o
        });
    return (0, i.jsx)('div', {
        className: N.authorizedSuccessWrapper,
        children: (0, i.jsx)(R, {
            message: s,
            footer: l,
            ...a
        })
    });
}
function D(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        o = r.useCallback(() => {
            (null == t ? void 0 : t.id) != null &&
                ((0, m.X)(null == t ? void 0 : t.id),
                null == s || s(),
                y.default.track(S.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: null == n ? void 0 : n.id,
                    guild_id: null == t ? void 0 : t.id
                }));
        }, [s, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        l = (0, _.g8)((e) => e.entrypoint),
        c = r.useCallback(() => {
            null == s || s(), y.default.track(S.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [s, null == n ? void 0 : n.id]),
        d = window.location.pathname.startsWith(S.Z5c.APPLICATION_DIRECTORY),
        p = r.useCallback(() => {
            var e;
            (null == n ? void 0 : n.id) != null &&
                (null == s || s(),
                null != l && (0, h.uL)(null !== (e = l.pathname) && void 0 !== e ? e : ''),
                setImmediate(() => {
                    I.S.dispatchToLastSubscribed(S.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), y.default.track(S.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                }));
        }, [null == n ? void 0 : n.id, s, l]),
        T = (0, u.e7)([v.Z, g.Z], () => g.Z.getChannel(v.Z.getChannelId())),
        b = (0, u.e7)([E.Z], () => E.Z.can(S.Plq.SEND_MESSAGES, T)),
        C = null != t,
        R = null == t && b && (!d || null != l);
    return null != t || null != s
        ? (0, i.jsxs)('div', {
              className: N.buttonsContainer,
              children: [
                  null != s
                      ? C || R
                          ? (0, i.jsx)(f.zxk, {
                                size: f.zxk.Sizes.SMALL,
                                look: f.zxk.Looks.LINK,
                                color: f.zxk.Colors.PRIMARY,
                                onClick: c,
                                children: A.intl.string(A.t.cpT0Cg)
                            })
                          : (0, i.jsx)(f.zxk, {
                                fullWidth: !0,
                                color: f.zxk.Colors.PRIMARY,
                                onClick: c,
                                children: A.intl.string(A.t.cpT0Cg)
                            })
                      : void 0,
                  C &&
                      (0, i.jsx)(f.zxk, {
                          color: f.zxk.Colors.BRAND,
                          onClick: o,
                          children: (null == t ? void 0 : t.name.length) > 30 ? A.intl.string(A.t.M35zFB) : A.intl.format(A.t.UdYYPz, { guildName: null == t ? void 0 : t.name })
                      }),
                  R &&
                      (0, i.jsx)(f.zxk, {
                          color: f.zxk.Colors.BRAND,
                          onClick: p,
                          children: A.intl.string(A.t['0cCDKC'])
                      })
              ]
          })
        : null;
}
function L(e) {
    return (0, i.jsx)(C, {
        ...e,
        headerClassName: N.headerFailure
    });
}
function x() {
    var e, t;
    let n = (0, l.TH)();
    return (0, i.jsx)(b.G, {
        children: (0, i.jsx)(O, {
            guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
            application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
            showsCloseWindowText: !0
        })
    });
}
function w(e) {
    var t, n;
    let { location: a } = e;
    r.useEffect(() => {
        if (null == a || '' === a.search) return;
        let e = null != document.referrer && '' !== document.referrer ? T.Z.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== S.Z5c.OAUTH2_AUTHORIZE) && (0, h.uL)(S.Z5c.INDEX);
    }, [a]);
    let s = null != a ? (0, o.parse)(a.search) : {},
        l = null !== (n = null !== (t = s.error_description) && void 0 !== t ? t : s.error) && void 0 !== n ? n : A.intl.string(A.t['mqn87+']);
    return (0, i.jsx)(b.G, {
        children: (0, i.jsx)(L, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}

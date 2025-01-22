r.d(n, {
    Jh: function () {
        return x;
    },
    Lk: function () {
        return w;
    },
    Xg: function () {
        return P;
    },
    ZP: function () {
        return O;
    },
    _Z: function () {
        return L;
    },
    c7: function () {
        return D;
    },
    j3: function () {
        return M;
    }
});
var i = r(177593);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(593473),
    c = r(512969),
    d = r(442837),
    f = r(922770),
    p = r(993365),
    h = r(481060),
    _ = r(132871),
    m = r(252618),
    g = r(703656),
    E = r(769654),
    v = r(592125),
    y = r(496675),
    b = r(944486),
    I = r(626135),
    T = r(585483),
    S = r(591759),
    A = r(787025),
    C = r(981631),
    N = r(388032),
    R = r(553410);
function O(e) {
    let { message: n, footer: r, headerClassName: i, showsCloseWindowText: o, spinner: s } = e;
    return (
        (0, m.Tt)({ location: N.intl.string(N.t['3S249/']) }),
        (0, a.jsxs)('div', {
            className: R.wrapper,
            children: [
                s ? (0, a.jsx)(f.$, {}) : null,
                (0, a.jsx)('div', { className: l()(R.header, i) }),
                (0, a.jsx)(h.Heading, {
                    variant: 'heading-lg/bold',
                    className: R.text,
                    children: n
                }),
                null != r ? r : null,
                o
                    ? (0, a.jsx)(p.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: R.cta,
                          children: N.intl.string(N.t['k7J/w8'])
                      })
                    : null
            ]
        })
    );
}
function D(e) {
    return (0, a.jsx)(O, {
        ...e,
        headerClassName: R.headerSuccess
    });
}
function x(e) {
    let { guild: n, application: r, ...i } = e,
        s = N.intl.string(N.t.se5gLi);
    o.useEffect(() => {
        I.default.track(C.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == r ? void 0 : r.id });
    }, [null == r ? void 0 : r.id]);
    let l = o.useMemo(() => {
            if (null != r)
                return null != n
                    ? N.intl.format(N.t.IlF6IS, {
                          installedApplicationName: null == r ? void 0 : r.name,
                          guildName: null == n ? void 0 : n.name
                      })
                    : N.intl.format(N.t.vTVC5e, { installedApplicationName: null == r ? void 0 : r.name });
            return N.intl.string(N.t['Dp+rgI']);
        }, [r, n]),
        u = (0, a.jsx)(p.x, {
            variant: 'text-md/normal',
            className: R.authorizedSuccessSubtext,
            children: l
        });
    return (0, a.jsx)('div', {
        className: R.authorizedSuccessWrapper,
        children: (0, a.jsx)(D, {
            message: s,
            footer: u,
            ...i
        })
    });
}
function L(e) {
    let { guild: n, application: r, ...i } = e,
        { onClose: s } = i,
        l = o.useCallback(() => {
            if ((null == n ? void 0 : n.id) != null)
                (0, E.X)(null == n ? void 0 : n.id),
                    null == s || s(),
                    I.default.track(C.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == r ? void 0 : r.id,
                        guild_id: null == n ? void 0 : n.id
                    });
        }, [s, null == r ? void 0 : r.id, null == n ? void 0 : n.id]),
        u = (0, _.useApplicationDirectoryHistory)((e) => e.entrypoint),
        c = o.useCallback(() => {
            null == s || s(), I.default.track(C.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == r ? void 0 : r.id });
        }, [s, null == r ? void 0 : r.id]),
        f = window.location.pathname.startsWith(C.Z5c.APPLICATION_DIRECTORY),
        p = o.useCallback(() => {
            var e;
            if ((null == r ? void 0 : r.id) != null)
                null == s || s(),
                    null != u && (0, g.uL)(null !== (e = u.pathname) && void 0 !== e ? e : ''),
                    setImmediate(() => {
                        T.S.dispatchToLastSubscribed(C.CkL.OPEN_APP_LAUNCHER, { applicationId: r.id }), I.default.track(C.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: r.id });
                    });
        }, [null == r ? void 0 : r.id, s, u]),
        m = (0, d.e7)([b.Z, v.Z], () => v.Z.getChannel(b.Z.getChannelId())),
        S = (0, d.e7)([y.Z], () => y.Z.can(C.Plq.SEND_MESSAGES, m)),
        A = null != n,
        O = null == n && S && (!f || null != u);
    return null != n || null != s
        ? (0, a.jsxs)('div', {
              className: R.buttonsContainer,
              children: [
                  null != s
                      ? A || O
                          ? (0, a.jsx)(h.Button, {
                                size: h.Button.Sizes.SMALL,
                                look: h.Button.Looks.LINK,
                                color: h.Button.Colors.PRIMARY,
                                onClick: c,
                                children: N.intl.string(N.t.cpT0Cg)
                            })
                          : (0, a.jsx)(h.Button, {
                                fullWidth: !0,
                                color: h.Button.Colors.PRIMARY,
                                onClick: c,
                                children: N.intl.string(N.t.cpT0Cg)
                            })
                      : void 0,
                  A &&
                      (0, a.jsx)(h.Button, {
                          color: h.Button.Colors.BRAND,
                          onClick: l,
                          children: (null == n ? void 0 : n.name.length) > 30 ? N.intl.string(N.t.M35zFB) : N.intl.format(N.t.UdYYPz, { guildName: null == n ? void 0 : n.name })
                      }),
                  O &&
                      (0, a.jsx)(h.Button, {
                          color: h.Button.Colors.BRAND,
                          onClick: p,
                          children: N.intl.string(N.t['0cCDKC'])
                      })
              ]
          })
        : null;
}
function w(e) {
    return (0, a.jsx)(O, {
        ...e,
        headerClassName: R.headerFailure
    });
}
function P() {
    var e, n;
    let r = (0, c.TH)();
    return (0, a.jsx)(A.G, {
        children: (0, a.jsx)(x, {
            guild: null === (e = r.state) || void 0 === e ? void 0 : e.guild,
            application: null === (n = r.state) || void 0 === n ? void 0 : n.application,
            showsCloseWindowText: !0
        })
    });
}
function M(e) {
    var n, r;
    let { location: i } = e;
    o.useEffect(() => {
        if (null == i || '' === i.search) return;
        let e = null != document.referrer && '' !== document.referrer ? S.Z.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== C.Z5c.OAUTH2_AUTHORIZE) && (0, g.uL)(C.Z5c.INDEX);
    }, [i]);
    let s = null != i ? (0, u.parse)(i.search) : {},
        l = null !== (r = null !== (n = s.error_description) && void 0 !== n ? n : s.error) && void 0 !== r ? r : N.intl.string(N.t['mqn87+']);
    return (0, a.jsx)(A.G, {
        children: (0, a.jsx)(w, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}

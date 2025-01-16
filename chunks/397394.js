r.d(n, {
    Jh: function () {
        return L;
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
        return x;
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
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(593473),
    c = r(512969),
    d = r(442837),
    f = r(922770),
    _ = r(993365),
    h = r(481060),
    p = r(132871),
    m = r(252618),
    g = r(703656),
    E = r(769654),
    v = r(592125),
    I = r(496675),
    T = r(944486),
    b = r(626135),
    y = r(585483),
    S = r(591759),
    A = r(787025),
    N = r(981631),
    C = r(388032),
    R = r(553410);
function O(e) {
    let { message: n, footer: r, headerClassName: i, showsCloseWindowText: s, spinner: o } = e;
    return (
        (0, m.Tt)({ location: C.intl.string(C.t['3S249/']) }),
        (0, a.jsxs)('div', {
            className: R.wrapper,
            children: [
                o ? (0, a.jsx)(f.$, {}) : null,
                (0, a.jsx)('div', { className: l()(R.header, i) }),
                (0, a.jsx)(h.Heading, {
                    variant: 'heading-lg/bold',
                    className: R.text,
                    children: n
                }),
                null != r ? r : null,
                s
                    ? (0, a.jsx)(_.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: R.cta,
                          children: C.intl.string(C.t['k7J/w8'])
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
function L(e) {
    let { guild: n, application: r, ...i } = e,
        o = C.intl.string(C.t.se5gLi);
    s.useEffect(() => {
        b.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == r ? void 0 : r.id });
    }, [null == r ? void 0 : r.id]);
    let l = s.useMemo(() => {
            if (null != r)
                return null != n
                    ? C.intl.format(C.t.IlF6IS, {
                          installedApplicationName: null == r ? void 0 : r.name,
                          guildName: null == n ? void 0 : n.name
                      })
                    : C.intl.format(C.t.vTVC5e, { installedApplicationName: null == r ? void 0 : r.name });
            return C.intl.string(C.t['Dp+rgI']);
        }, [r, n]),
        u = (0, a.jsx)(_.x, {
            variant: 'text-md/normal',
            className: R.authorizedSuccessSubtext,
            children: l
        });
    return (0, a.jsx)('div', {
        className: R.authorizedSuccessWrapper,
        children: (0, a.jsx)(D, {
            message: o,
            footer: u,
            ...i
        })
    });
}
function x(e) {
    let { guild: n, application: r, ...i } = e,
        { onClose: o } = i,
        l = s.useCallback(() => {
            if ((null == n ? void 0 : n.id) != null)
                (0, E.X)(null == n ? void 0 : n.id),
                    null == o || o(),
                    b.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == r ? void 0 : r.id,
                        guild_id: null == n ? void 0 : n.id
                    });
        }, [o, null == r ? void 0 : r.id, null == n ? void 0 : n.id]),
        u = (0, p.useApplicationDirectoryHistory)((e) => e.entrypoint),
        c = s.useCallback(() => {
            null == o || o(), b.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == r ? void 0 : r.id });
        }, [o, null == r ? void 0 : r.id]),
        f = window.location.pathname.startsWith(N.Z5c.APPLICATION_DIRECTORY),
        _ = s.useCallback(() => {
            var e;
            if ((null == r ? void 0 : r.id) != null)
                null == o || o(),
                    null != u && (0, g.uL)(null !== (e = u.pathname) && void 0 !== e ? e : ''),
                    setImmediate(() => {
                        y.S.dispatchToLastSubscribed(N.CkL.OPEN_APP_LAUNCHER, { applicationId: r.id }), b.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: r.id });
                    });
        }, [null == r ? void 0 : r.id, o, u]),
        m = (0, d.e7)([T.Z, v.Z], () => v.Z.getChannel(T.Z.getChannelId())),
        S = (0, d.e7)([I.Z], () => I.Z.can(N.Plq.SEND_MESSAGES, m)),
        A = null != n,
        O = null == n && S && (!f || null != u);
    return null != n || null != o
        ? (0, a.jsxs)('div', {
              className: R.buttonsContainer,
              children: [
                  null != o
                      ? A || O
                          ? (0, a.jsx)(h.Button, {
                                size: h.Button.Sizes.SMALL,
                                look: h.Button.Looks.LINK,
                                color: h.Button.Colors.PRIMARY,
                                onClick: c,
                                children: C.intl.string(C.t.cpT0Cg)
                            })
                          : (0, a.jsx)(h.Button, {
                                fullWidth: !0,
                                color: h.Button.Colors.PRIMARY,
                                onClick: c,
                                children: C.intl.string(C.t.cpT0Cg)
                            })
                      : void 0,
                  A &&
                      (0, a.jsx)(h.Button, {
                          color: h.Button.Colors.BRAND,
                          onClick: l,
                          children: (null == n ? void 0 : n.name.length) > 30 ? C.intl.string(C.t.M35zFB) : C.intl.format(C.t.UdYYPz, { guildName: null == n ? void 0 : n.name })
                      }),
                  O &&
                      (0, a.jsx)(h.Button, {
                          color: h.Button.Colors.BRAND,
                          onClick: _,
                          children: C.intl.string(C.t['0cCDKC'])
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
        children: (0, a.jsx)(L, {
            guild: null === (e = r.state) || void 0 === e ? void 0 : e.guild,
            application: null === (n = r.state) || void 0 === n ? void 0 : n.application,
            showsCloseWindowText: !0
        })
    });
}
function M(e) {
    var n, r;
    let { location: i } = e;
    s.useEffect(() => {
        if (null == i || '' === i.search) return;
        let e = null != document.referrer && '' !== document.referrer ? S.Z.toURLSafe(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== N.Z5c.OAUTH2_AUTHORIZE) && (0, g.uL)(N.Z5c.INDEX);
    }, [i]);
    let o = null != i ? (0, u.parse)(i.search) : {},
        l = null !== (r = null !== (n = o.error_description) && void 0 !== n ? n : o.error) && void 0 !== r ? r : C.intl.string(C.t['mqn87+']);
    return (0, a.jsx)(A.G, {
        children: (0, a.jsx)(w, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}

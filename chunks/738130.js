n.d(t, {
    Z: function () {
        return k;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    c = n.n(l),
    s = n(392711),
    o = n(772848),
    a = n(873546),
    C = n(481060),
    u = n(425493),
    d = n(612226),
    p = n(714338),
    h = n(782568),
    f = n(252618),
    A = n(434404),
    E = n(677726),
    v = n(703656),
    g = n(671533),
    y = n(626135),
    x = n(63063),
    T = n(674588),
    Z = n(463571),
    m = n(887706),
    j = n(132871),
    N = n(147890),
    P = n(981631),
    _ = n(420212),
    L = n(388032),
    S = n(260346);
let O = x.Z.getAppsSupportURL(P.BhN.APPS_LEARN_MORE);
function I(e) {
    let { onClose: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)('div', {
        ref: n,
        className: S.closeWrapper,
        children: (0, i.jsx)(C.FocusRingScope, {
            containerRef: n,
            children: (0, i.jsx)('div', {
                className: S.closeContent,
                children: (0, i.jsx)(u.Z, {
                    className: S.closeIcon,
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function R(e) {
    let { onTitleClick: t, showsLearnMoreCta: n, guildId: l, children: s } = e,
        o = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.Z, { title: L.intl.string(L.t.AKcFUl) }),
                n &&
                    (0, i.jsx)(C.Anchor, {
                        onClick: function () {
                            y.default.track(P.rMx.APP_DIRECTORY_CTA_CLICKED, {
                                cta: 'directory-help-center',
                                current_page: j.ApplicationDirectoryViews.HOME,
                                guild_id: l
                            }),
                                (0, h.Z)(O);
                        },
                        children: L.intl.string(L.t.hvVgAQ)
                    })
            ]
        });
    return (0, i.jsxs)('div', {
        className: S.header,
        children: [
            null != t
                ? (0, i.jsx)(Z.Z, {
                      href: P.Z5c.APPLICATION_DIRECTORY,
                      children: (0, i.jsx)(C.Clickable, {
                          onClick: t,
                          className: c()(S.titleContainer, S.clickable),
                          children: o
                      })
                  })
                : (0, i.jsx)('div', {
                      className: S.titleContainer,
                      children: o
                  }),
            s
        ]
    });
}
function D(e) {
    let t,
        { view: n, onClick: r } = e;
    if (null == n) return null;
    switch (n.type) {
        case j.ApplicationDirectoryViews.HOME:
            t = L.intl.string(L.t.Ym2Ri4);
            break;
        case j.ApplicationDirectoryViews.SEARCH:
            t = L.intl.string(L.t['5h0QOD']);
            break;
        case j.ApplicationDirectoryViews.APPLICATION:
            var l;
            t = null !== (l = null == n ? void 0 : n.applicationName) && void 0 !== l ? l : L.intl.string(L.t['13/7kZ']);
            break;
        default:
            t = L.intl.string(L.t['13/7kZ']);
    }
    return (0, i.jsxs)(C.Clickable, {
        className: S.back,
        onClick: r,
        children: [
            (0, i.jsx)(g.Z, {
                direction: g.Z.Directions.LEFT,
                className: S.backIcon
            }),
            (0, i.jsx)(C.Heading, {
                className: S.backHeader,
                variant: 'heading-sm/semibold',
                children: t
            })
        ]
    });
}
let H = (0, s.debounce)((e) => {
    let { scrollTop: t, scrollOffset: n, scrollHeight: i, location: r, guildId: l, sessionId: c } = e;
    t > 0 &&
        y.default.track(P.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
            scroll_visible_percentile: (t + n) / i,
            guild_id: l,
            location: r,
            directory_session_id: c
        });
}, 200);
function k(e) {
    let { children: t } = e,
        n = r.useRef(null),
        l = (0, m.Z)(),
        s = (0, j.useApplicationDirectoryHistory)((e) => e.guildId),
        u = (0, j.useApplicationDirectoryHistory)((e) => e.entrypoint),
        h = (0, j.useApplicationDirectoryHistory)((e) => e.trackedOpenedFromExternalEntrypoint),
        E = (0, j.getCurrentView)(),
        g = (0, j.getPreviousView)(),
        x = r.useRef(),
        Z = (null == E ? void 0 : E.type) !== j.ApplicationDirectoryViews.HOME,
        O = (null == E ? void 0 : E.type) === j.ApplicationDirectoryViews.APPLICATION ? (null == E ? void 0 : E.applicationId) : void 0;
    (0, f.Tt)({ location: L.intl.string(L.t.AKcFUl) });
    let k = (null == E ? void 0 : E.type) !== j.ApplicationDirectoryViews.HOME && null != g;
    r.useEffect(() => {
        !h && null == u && (y.default.track(P.rMx.APP_DIRECTORY_OPENED, { source: j.ApplicationDirectoryEntrypointNames.EXTERNAL }), (0, j.setTrackedOpenedFromExternalEntrypoint)(!0));
    }, [u, h]),
        r.useEffect(() => {
            if (l) return p.Z.setLayout(d.ZP), p.Z.enable(), () => p.Z.disable();
        }, [l]),
        r.useEffect(() => {
            T.CP();
        }, []),
        r.useEffect(() => {
            l && T.g5();
        }, [l]),
        r.useEffect(() => {
            x.current = (0, o.Z)();
        }, [null == E ? void 0 : E.type, O]);
    let w = r.useCallback(() => {
        var e, t;
        (0, v.uL)(null !== (e = null == u ? void 0 : u.pathname) && void 0 !== e ? e : ''), null != u && u.name === j.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != s && A.Z.open(s, null !== (t = u.guildSettingsSection) && void 0 !== t ? t : void 0);
    }, [u, s]);
    return (
        r.useEffect(() => {
            let e = (e) => {
                e.key === _.vn.ESCAPE && (e.stopPropagation(), w());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [w]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(C.AdvancedScroller, {
                className: c()(S.directoryContainer, {
                    [S.directoryContainerMobile]: a.tq,
                    [S.directoryContainerTablet]: a.Em
                }),
                ref: n,
                onScroll: () => {
                    var e, t, i;
                    return H({
                        scrollTop: null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                        scrollOffset: null === (t = n.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
                        scrollHeight: null === (i = n.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
                        location: null == E ? void 0 : E.type,
                        guildId: s,
                        sessionId: x.current
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: S.content,
                    children: [
                        (0, i.jsx)(R, {
                            onTitleClick: Z ? N.goHome : void 0,
                            showsLearnMoreCta: (null == E ? void 0 : E.type) === j.ApplicationDirectoryViews.HOME,
                            guildId: s,
                            children: l ? (0, i.jsx)(I, { onClose: w }) : null
                        }),
                        k &&
                            (0, i.jsx)(D, {
                                view: g,
                                onClick: () => {
                                    (0, v.op)();
                                }
                            }),
                        t
                    ]
                })
            })
        })
    );
}

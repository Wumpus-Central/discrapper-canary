n.d(t, {
    Z: function () {
        return V;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    c = n.n(l),
    o = n(392711),
    s = n(772848),
    C = n(873546),
    a = n(481060),
    u = n(425493),
    d = n(612226),
    p = n(714338),
    h = n(782568),
    f = n(252618),
    v = n(434404),
    E = n(677726),
    A = n(703656),
    x = n(671533),
    y = n(626135),
    g = n(63063),
    Z = n(674588),
    j = n(463571),
    m = n(887706),
    N = n(132871),
    D = n(147890),
    L = n(981631),
    T = n(420212),
    _ = n(388032),
    H = n(260346);
let R = g.Z.getAppsSupportURL(L.BhN.APPS_LEARN_MORE);
function k(e) {
    let { onClose: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)('div', {
        ref: n,
        className: H.closeWrapper,
        children: (0, i.jsx)(a.FocusRingScope, {
            containerRef: n,
            children: (0, i.jsx)('div', {
                className: H.closeContent,
                children: (0, i.jsx)(u.Z, {
                    className: H.closeIcon,
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
function O(e) {
    let { onTitleClick: t, showsLearnMoreCta: n, guildId: l, children: o } = e,
        s = (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.Z, { title: _.intl.string(_.t.AKcFUl) }),
                n &&
                    (0, i.jsx)(a.Anchor, {
                        onClick: function () {
                            y.default.track(L.rMx.APP_DIRECTORY_CTA_CLICKED, {
                                cta: 'directory-help-center',
                                current_page: N.ApplicationDirectoryViews.HOME,
                                guild_id: l
                            }),
                                (0, h.Z)(R);
                        },
                        children: _.intl.string(_.t.hvVgAQ)
                    })
            ]
        });
    return (0, i.jsxs)('div', {
        className: H.header,
        children: [
            null != t
                ? (0, i.jsx)(j.Z, {
                      href: L.Z5c.APPLICATION_DIRECTORY,
                      children: (0, i.jsx)(a.Clickable, {
                          onClick: t,
                          className: c()(H.titleContainer, H.clickable),
                          children: s
                      })
                  })
                : (0, i.jsx)('div', {
                      className: H.titleContainer,
                      children: s
                  }),
            o
        ]
    });
}
function P(e) {
    let t,
        { view: n, onClick: r } = e;
    if (null == n) return null;
    switch (n.type) {
        case N.ApplicationDirectoryViews.HOME:
            t = _.intl.string(_.t.Ym2Ri4);
            break;
        case N.ApplicationDirectoryViews.SEARCH:
            t = _.intl.string(_.t['5h0QOD']);
            break;
        case N.ApplicationDirectoryViews.APPLICATION:
            var l;
            t = null !== (l = null == n ? void 0 : n.applicationName) && void 0 !== l ? l : _.intl.string(_.t['13/7kZ']);
            break;
        default:
            t = _.intl.string(_.t['13/7kZ']);
    }
    return (0, i.jsxs)(a.Clickable, {
        className: H.back,
        onClick: r,
        children: [
            (0, i.jsx)(x.Z, {
                direction: x.Z.Directions.LEFT,
                className: H.backIcon
            }),
            (0, i.jsx)(a.Heading, {
                className: H.backHeader,
                variant: 'heading-sm/semibold',
                children: t
            })
        ]
    });
}
let I = (0, o.debounce)((e) => {
    let { scrollTop: t, scrollOffset: n, scrollHeight: i, location: r, guildId: l, sessionId: c } = e;
    t > 0 &&
        y.default.track(L.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
            scroll_visible_percentile: (t + n) / i,
            guild_id: l,
            location: r,
            directory_session_id: c
        });
}, 200);
function V(e) {
    let { children: t } = e,
        n = r.useRef(null),
        l = (0, m.Z)(),
        o = (0, N.useApplicationDirectoryHistory)((e) => e.guildId),
        u = (0, N.useApplicationDirectoryHistory)((e) => e.entrypoint),
        h = (0, N.useApplicationDirectoryHistory)((e) => e.trackedOpenedFromExternalEntrypoint),
        E = (0, N.getCurrentView)(),
        x = (0, N.getPreviousView)(),
        g = r.useRef(),
        j = (null == E ? void 0 : E.type) !== N.ApplicationDirectoryViews.HOME,
        R = (null == E ? void 0 : E.type) === N.ApplicationDirectoryViews.APPLICATION ? (null == E ? void 0 : E.applicationId) : void 0;
    (0, f.Tt)({ location: _.intl.string(_.t.AKcFUl) });
    let V = (null == E ? void 0 : E.type) !== N.ApplicationDirectoryViews.HOME && null != x;
    r.useEffect(() => {
        !h && null == u && (y.default.track(L.rMx.APP_DIRECTORY_OPENED, { source: N.ApplicationDirectoryEntrypointNames.EXTERNAL }), (0, N.setTrackedOpenedFromExternalEntrypoint)(!0));
    }, [u, h]),
        r.useEffect(() => {
            if (l) return p.Z.setLayout(d.ZP), p.Z.enable(), () => p.Z.disable();
        }, [l]),
        r.useEffect(() => {
            Z.CP();
        }, []),
        r.useEffect(() => {
            l && Z.g5();
        }, [l]),
        r.useEffect(() => {
            g.current = (0, s.Z)();
        }, [null == E ? void 0 : E.type, R]);
    let w = r.useCallback(() => {
        var e, t;
        (0, A.uL)(null !== (e = null == u ? void 0 : u.pathname) && void 0 !== e ? e : ''), null != u && u.name === N.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != o && v.Z.open(o, null !== (t = u.guildSettingsSection) && void 0 !== t ? t : void 0);
    }, [u, o]);
    return (
        r.useEffect(() => {
            let e = (e) => {
                e.key === T.vn.ESCAPE && (e.stopPropagation(), w());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [w]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(a.AdvancedScroller, {
                className: c()(H.directoryContainer, {
                    [H.directoryContainerMobile]: C.tq,
                    [H.directoryContainerTablet]: C.Em
                }),
                ref: n,
                onScroll: () => {
                    var e, t, i;
                    return I({
                        scrollTop: null === (e = n.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                        scrollOffset: null === (t = n.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
                        scrollHeight: null === (i = n.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
                        location: null == E ? void 0 : E.type,
                        guildId: o,
                        sessionId: g.current
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: H.content,
                    children: [
                        (0, i.jsx)(O, {
                            onTitleClick: j ? D.goHome : void 0,
                            showsLearnMoreCta: (null == E ? void 0 : E.type) === N.ApplicationDirectoryViews.HOME,
                            guildId: o,
                            children: l ? (0, i.jsx)(k, { onClose: w }) : null
                        }),
                        V &&
                            (0, i.jsx)(P, {
                                view: x,
                                onClick: () => {
                                    (0, A.op)();
                                }
                            }),
                        t
                    ]
                })
            })
        })
    );
}

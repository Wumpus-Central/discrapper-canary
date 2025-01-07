n.r(t),
    n.d(t, {
        default: function () {
            return eS;
        }
    }),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(789020),
    n(653041);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    o = n.n(r),
    l = n(525654),
    s = n.n(l),
    c = n(477660),
    d = n.n(c),
    u = n(873546),
    p = n(149765),
    m = n(468194),
    _ = n(442837),
    f = n(692547),
    g = n(477690),
    h = n(481060),
    I = n(995648),
    b = n(445986),
    v = n(9807),
    x = n(330726),
    C = n(782568),
    S = n(581364),
    N = n(970321),
    T = n(283836),
    y = n(220082),
    j = n(252618),
    P = n(299206),
    E = n(241209),
    A = n(341176),
    L = n(312097),
    k = n(422559),
    R = n(703656),
    B = n(280885),
    O = n(706454),
    w = n(314897),
    Z = n(451478),
    H = n(626135),
    D = n(768581),
    F = n(572004),
    M = n(823379),
    U = n(900849),
    G = n(135431),
    V = n(674588),
    W = n(264043),
    z = n(303383),
    Y = n(887706),
    K = n(738130),
    q = n(4461),
    X = n(34674),
    J = n(576958),
    Q = n(924489),
    $ = n(125909),
    ee = n(409425),
    et = n(132871),
    en = n(147890),
    ei = n(824606),
    ea = n(527564),
    er = n(326135),
    eo = n(940064),
    el = n(626004),
    es = n(939893),
    ec = n(430913),
    ed = n(606183),
    eu = n(272242),
    ep = n(981631),
    em = n(558921),
    e_ = n(388032),
    ef = n(669761),
    eg = n(902294);
let eh = d().parserFor(es.Z),
    eI = d().reactFor(d().ruleOutput(es.Z, 'react')),
    eb = (0, m.Mg)(g.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    ev = 'redirect_to_support_server',
    ex = 'start_application_install',
    eC = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e));
function eS(e) {
    var t, r, l, c;
    let d,
        {
            match: {
                params: { applicationId: m, section: f = eu.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        g = (0, et.useApplicationDirectoryHistory)((e) => e.guildId),
        y = (0, Y.Z)(),
        es = (0, _.e7)(
            [z.Z],
            () =>
                z.Z.getFetchState({
                    applicationId: m,
                    guildId: g
                }) === z.M.FETCHING
        ),
        eS = a.useRef({
            applicationId: void 0,
            guildId: void 0
        }),
        { similarApplications: eT, similarLoadId: ej } = (0, _.cj)([z.Z], () => {
            let e = {
                    applicationId: m,
                    guildId: g
                },
                t = z.Z.getSimilarApplications(e);
            return (
                null == t ? (t = z.Z.getSimilarApplications(eS.current)) : (eS.current = e),
                {
                    similarApplications: null == t ? void 0 : t.applications,
                    similarLoadId: null == t ? void 0 : t.loadId
                }
            );
        }),
        eP = a.useMemo(() => (null == eT ? void 0 : eT.slice(0, 3)), [eT]),
        eE = (0, _.e7)([W.Z], () => W.Z.getApplicationFetchState(m)),
        [eA, eL] = a.useState(void 0),
        ek = a.useCallback(
            (e) => {
                if (null != m) {
                    if (e === eu.ApplicationDirectoryProfileSections.GENERAL) {
                        (0, en.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(m));
                        return;
                    }
                    (0, en.replaceAppDirectoryURLWith)(ep.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(m, e));
                }
            },
            [m]
        ),
        eR = (0, _.e7)([Z.Z], () => Z.Z.isFocused()),
        eB = (0, _.e7)([O.default], () => O.default.locale),
        eO = a.useRef(m),
        ew = (0, _.e7)([W.Z], () => {
            let e = W.Z.getApplication(m);
            return null == e ? (e = W.Z.getApplication(eO.current)) : (eO.current = m), e;
        }),
        eZ = (0, ei.Z)({ application: ew }),
        eH = (0, _.e7)([w.default], () => w.default.getSessionId());
    (0, j.Tt)({ location: null == ew ? void 0 : ew.name });
    let eD = a.useCallback(async () => {
        try {
            var e;
            let t = null == ew ? void 0 : null === (e = ew.guild) || void 0 === e ? void 0 : e.id;
            if (null != t) {
                (null == ew ? void 0 : ew.id) != null &&
                    H.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: ew.id,
                        guild_id: g,
                        support_guild_id: t
                    });
                let e = { page: ep.ZY5.APPLICATION_DIRECTORY };
                await (0, U.Ub)(t, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [ew, g]);
    a.useEffect(() => {
        if (null == ew) return;
        let e = new URL(location.href);
        if (y && null != eH && 'true' === e.searchParams.get(ev)) {
            e.searchParams.delete(ev);
            let t = e.pathname + e.search;
            (0, R.dL)(t), eD();
        }
    }, [y, eD, eH, ew]);
    let eF = a.useCallback(() => {
            var e;
            null != (null == ew ? void 0 : null === (e = ew.guild) || void 0 === e ? void 0 : e.id) && (y ? eD() : (0, X.rf)({ [ev]: 'true' }));
        }, [ew, y, eD]),
        eM = a.useCallback(() => {
            (0, en.replaceAppDirectoryURLWith)(''.concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(m)).concat(location.search));
        }, [m]);
    a.useEffect(() => {
        f === eu.ApplicationDirectoryProfileSections.GENERAL && eM();
    }, [eM, f]),
        a.useEffect(() => {
            if (null != m) {
                let e = 'true' === new URLSearchParams(location.search).get('preview') || void 0;
                V.i6(m, { noCache: e });
            }
        }, [m]),
        a.useEffect(() => {
            if ((null == ew ? void 0 : ew.directory_entry) != null) {
                let e = ew.directory_entry,
                    t = null == e ? void 0 : e.popular_application_commands;
                null != t
                    ? eL(
                          t.map((e) =>
                              (0, S.Z8)({
                                  rootCommand: e,
                                  command: e,
                                  applicationId: e.application_id
                              })
                          )
                      )
                    : eL(void 0);
            }
        }, [ew]);
    let eU = D.ZP.getApplicationIconURL({
            id: null !== (l = null == ew ? void 0 : ew.id) && void 0 !== l ? l : '-1',
            icon: null == ew ? void 0 : ew.icon,
            size: eb
        }),
        eG = (0, P.Z)({
            id: null !== (c = null == ew ? void 0 : ew.id) && void 0 !== c ? c : '',
            label: e_.intl.string(e_.t['FfCL+/'])
        }),
        { canInstall: eV, install: eW } = (0, q.P)(ew, g),
        ez = {
            previousViewType: null === (t = (0, et.getPreviousView)()) || void 0 === t ? void 0 : t.type,
            selectedSection: f
        },
        eY = a.useRef(ez);
    a.useEffect(() => {
        eY.current = ez;
    }),
        a.useEffect(() => {
            let { previousViewType: e, selectedSection: t } = eY.current;
            (null == ew ? void 0 : ew.id) != null &&
                H.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: 'product',
                    previous_page: e,
                    application_id: ew.id,
                    guild_id: g,
                    shown_mutual_guilds_count: eZ.length,
                    profile_section: t,
                    referrer: document.referrer
                });
        }, [null == ew ? void 0 : ew.id, g, eZ]);
    let eK = a.useMemo(() => {
            var e;
            let t = null == ew ? void 0 : null === (e = ew.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != t) return k.VY.filter((e) => p.e$(p.vB(t), e));
        }, [null == ew ? void 0 : null === (r = ew.install_params) || void 0 === r ? void 0 : r.permissions]),
        eq = a.useCallback(
            (e) => {
                ek(e),
                    (null == ew ? void 0 : ew.id) != null &&
                        H.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: ew.id,
                            guild_id: g,
                            tab_name: e
                        });
            },
            [null == ew ? void 0 : ew.id, g, ek]
        ),
        eX = a.useMemo(() => {
            var e, t, n;
            return null !== (n = (null !== (t = null == ew ? void 0 : null === (e = ew.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(X.RF).filter(M.lm)) && void 0 !== n ? n : [];
        }, [ew]),
        eJ = a.useCallback(
            (e, t) => {
                if (e.type === ep.s9s.IMG) {
                    let t = eX.filter((e) => e.type === ep.s9s.IMG),
                        n = t.findIndex((t) => t === e);
                    if (n < 0) return;
                    let i = t.map((e) => ({
                        url: (0, b.Q)(e.src),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: 'IMAGE'
                    }));
                    (0, L.K)({
                        items: i,
                        startingIndex: n,
                        fit: A.D.CONTAIN,
                        shouldHideMediaOptions: !0,
                        shouldAnimateCarousel: !0,
                        location: 'ApplicationDirectoryProfile'
                    });
                }
            },
            [eX]
        ),
        eQ = a.useCallback(
            (e) => {
                (null == ew ? void 0 : ew.id) != null &&
                    H.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: ew.id,
                        guild_id: g
                    }),
                    (0, en.goToCategory)({ categoryId: e.id });
            },
            [ew, g]
        );
    a.useEffect(() => {
        if (null != m)
            V.T4({
                applicationId: m,
                guildId: g
            });
    }, [m, g]);
    let e$ = a.useCallback(
            (e) => {
                let { application: t, mutualGuilds: n, index: i } = e;
                (null == ew ? void 0 : ew.id) != null &&
                    H.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: ew.id,
                        suggested_application_id: t.id,
                        position: i,
                        load_id: ej,
                        guild_id: g,
                        shown_mutual_guilds_count: n.length
                    }),
                    (0, en.goToApplication)({ applicationId: t.id });
            },
            [null == ew ? void 0 : ew.id, ej, g]
        ),
        e0 = a.useCallback(() => {
            null != ew &&
                (0, C.Z)(
                    (0, er.G)({
                        id: ew.id,
                        name: ew.name,
                        locale: eB
                    })
                );
        }, [eB, ew]),
        e6 = a.useCallback(
            (e) =>
                (0, i.jsxs)(h.Menu, {
                    navId: 'application-directory-profile',
                    'aria-label': e_.intl.string(e_.t['/7I4/P']),
                    onClose: e,
                    onSelect: void 0,
                    children: [
                        (0, i.jsx)(h.MenuGroup, {
                            children: (0, i.jsx)(h.MenuItem, {
                                id: 'report',
                                label: e_.intl.string(e_.t.NgA5vr),
                                color: 'danger',
                                action: e0
                            })
                        }),
                        null != eG ? (0, i.jsx)(h.MenuGroup, { children: eG }) : null
                    ]
                }),
            [eG, e0]
        ),
        [e1, e2] = (0, x.Z)(!1, 1000),
        e3 = a.useCallback(() => {
            if (null != ew)
                H.default.track(ep.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
                    application_id: ew.id,
                    guild_id: g
                }),
                    (0, F.JG)(eC(ew.id)),
                    e2(!0);
        }, [ew, e2, g]);
    a.useEffect(() => {
        let e = new URL(location.href);
        if (y && 'true' === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let t = e.pathname + e.search;
            (0, R.dL)(t), eW('product_page');
        }
    }, [y, eW]);
    let e5 = a.useCallback(() => {
            if (null != ew) {
                if ((u.tq || u.Em) && null == ew.custom_install_url) {
                    let e = (0, G.Er)({
                        applicationId: ew.id,
                        customInstallUrl: ew.custom_install_url,
                        installParams: ew.install_params,
                        integrationTypesConfig: ew.integration_types_config
                    });
                    if (null != e) {
                        window.open(e, '_blank');
                        return;
                    }
                }
                y
                    ? eW('product_page')
                    : (H.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: m,
                          guild_id: g,
                          auth_type: null != ew.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, X.rf)({ [ex]: 'true' }));
            }
        }, [ew, y, eW, m, g]),
        e8 = (null == ew ? void 0 : ew.id) === em.g,
        [e9, e4] = a.useState(!1),
        [e7, te] = a.useState(!1),
        [tt, tn] = a.useState(!0),
        ti = (e) => {
            null != e && e4(e.scrollHeight > e.clientHeight);
        },
        ta = null != eK && eK.length > 0,
        tr = (null == ew ? void 0 : ew.flags) != null,
        to = (0, N.R)(null != m ? m : '');
    a.useEffect(() => {
        to && null != m && (0, T.Z)(m);
    }, [to, m]);
    let tl = a.useMemo(() => {
            let e = [],
                t = !0;
            switch (f) {
                case eu.ApplicationDirectoryProfileSections.GENERAL: {
                    var n, a;
                    let r = null == ew ? void 0 : null === (n = ew.directory_entry) || void 0 === n ? void 0 : n.detailed_description;
                    null != r && r.length > 0
                        ? (e.push(
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(h.Heading, {
                                          className: ef.sectionHeader,
                                          variant: 'heading-md/semibold',
                                          children: e_.intl.string(e_.t.txraKS)
                                      }),
                                      (0, i.jsx)('div', {
                                          ref: ti,
                                          className: o()({
                                              [ef.descriptionClamp]: !e7,
                                              [ef.descriptionClampSafari]: !e7 && 'Safari' === s().name
                                          }),
                                          children: (0, i.jsx)(E.Z, {
                                              className: ef.detailedDescription,
                                              parser: eh,
                                              output: eI,
                                              state: { allowLinks: !0 },
                                              children: r
                                          })
                                      }),
                                      (e9 || e7) &&
                                          (0, i.jsx)(eN, {
                                              isViewAll: e7,
                                              onToggle: () => {
                                                  te((e) => !e);
                                              }
                                          })
                                  ]
                              })
                          ),
                          (t = !1))
                        : (null == ew ? void 0 : null === (a = ew.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.txraKS)
                                        }),
                                        (0, i.jsx)('span', { children: ew.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == ew ? void 0 : ew.description) != null &&
                            e.push(
                                (0, i.jsx)(B.Z, {
                                    className: ef.description,
                                    userBio: ew.description
                                })
                            ),
                        null != eA &&
                            eA.length > 0 &&
                            (e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.swIgTE)
                                        }),
                                        (0, i.jsx)(eo.Z, {
                                            className: ef.commandList,
                                            commands: eA
                                        })
                                    ]
                                })
                            ),
                            (t = !0));
                    break;
                }
                case eu.ApplicationDirectoryProfileSections.IMAGES: {
                    if (0 === eX.length) break;
                    let t = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('img', {
                                className: ef.errorImage,
                                src: eg,
                                'aria-hidden': !0,
                                alt: ''
                            }),
                            (0, i.jsx)(h.Heading, {
                                variant: 'heading-xl/semibold',
                                children: e_.intl.string(e_.t.UvDfMz)
                            })
                        ]
                    });
                    eX.forEach((e, t) => {
                        null != ew
                            ? (e.alt = e_.intl.formatToPlainString(e_.t.sSEhHR, {
                                  index: t + 1,
                                  totalImages: eX.length,
                                  name: ew.name
                              }))
                            : (e.alt = e_.intl.string(e_.t['5UVm9/']));
                    }),
                        e.push(
                            (0, i.jsx)(v.Z, {
                                className: ef.carousel,
                                themedPagination: !0,
                                items: eX,
                                autoplayInterval: 8000,
                                paused: !eR,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eJ,
                                errorComponent: t,
                                onImageLoad: (e) => {
                                    let { src: t, loadTimeMs: n } = e;
                                    null != n &&
                                        null != ew &&
                                        H.default.track(ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: ew.id,
                                            load_time_ms: n,
                                            src: t
                                        });
                                }
                            })
                        );
                    break;
                }
                case eu.ApplicationDirectoryProfileSections.STORE:
                    to && null != m && e.push((0, i.jsx)(ea.M, { appId: m }));
                    break;
                case eu.ApplicationDirectoryProfileSections.PRIVACY:
                    ta &&
                        e.push(
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(h.Heading, {
                                        className: ef.sectionHeader,
                                        variant: 'heading-md/semibold',
                                        children: e_.intl.string(e_.t.runNFx)
                                    }),
                                    (0, i.jsx)(I.Z, {
                                        className: ef.commandList,
                                        grantedPermissions: eK,
                                        grantedPermissionsHeader: e_.intl.string(e_.t.SLgiND)
                                    })
                                ]
                            })
                        ),
                        tr &&
                            e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.QzDgMj)
                                        }),
                                        (0, i.jsx)(el.Z, { application: ew })
                                    ]
                                })
                            );
            }
            return (
                tn(t),
                0 === e.length && f !== eu.ApplicationDirectoryProfileSections.GENERAL && null != ew && eM(),
                e.map((e, t) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: ef.section,
                            children: e
                        },
                        t
                    )
                )
            );
        }, [f, eM, ew, eA, e7, e9, eX, eR, eJ, to, m, ta, tr, eK]),
        ts = a.useMemo(() => {
            let e = [
                {
                    name: eu.ApplicationDirectoryProfileSections.GENERAL,
                    text: e_.intl.string(e_.t.r4vJeX),
                    Icon: h.AppsIcon
                }
            ];
            return (
                eX.length > 0 &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.IMAGES,
                        text: e_.intl.string(e_.t.BEFwGR),
                        Icon: h.ImagesIcon
                    }),
                to &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.STORE,
                        text: e_.intl.string(e_.t.pylO39),
                        Icon: h.ShopSparkleIcon
                    }),
                (ta || tr) &&
                    e.push({
                        name: eu.ApplicationDirectoryProfileSections.PRIVACY,
                        text: e_.intl.string(e_.t.hrodJy),
                        Icon: h.PrivacyAndSafetyIcon
                    }),
                e
            );
        }, [eX.length, ta, tr, to]);
    return (
        (d =
            null == ew
                ? null == eE || eE === W.M.FETCHING
                    ? (0, i.jsx)($.Z, { loading: eE === W.M.FETCHING })
                    : (0, i.jsx)('div', {
                          className: ef.__invalid_page,
                          children: (0, i.jsxs)('div', {
                              className: ef.emptyContainer,
                              children: [
                                  (0, i.jsx)('img', {
                                      className: ef.emptyImage,
                                      src: eg,
                                      alt: ''
                                  }),
                                  (0, i.jsx)(h.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: e_.intl.string(e_.t.T48fKS)
                                  })
                              ]
                          })
                      })
                : (0, i.jsxs)($.Z, {
                      loading: eE === W.M.FETCHING,
                      children: [
                          (0, i.jsx)(ey, {
                              app: ew,
                              iconSrc: eU
                          }),
                          (0, i.jsxs)('div', {
                              className: ef.__invalid_page,
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: ef.header,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: ef.headerSidebar,
                                              children: [
                                                  (0, i.jsx)('img', {
                                                      className: ef.headerIcon,
                                                      alt: '',
                                                      'aria-hidden': !0,
                                                      src: eU,
                                                      width: eb,
                                                      height: eb
                                                  }),
                                                  (0, i.jsx)(Q.Z, {
                                                      application: ew,
                                                      mutualGuilds: eZ,
                                                      mutualGuildShownMax: 3,
                                                      compact: !0
                                                  })
                                              ]
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: ef.headerContent,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: ef.headerNameAndButtons,
                                                      children: [
                                                          (0, i.jsxs)('div', {
                                                              className: ef.headerNameAndIcon,
                                                              children: [
                                                                  (0, i.jsx)(h.Heading, {
                                                                      className: ef.name,
                                                                      variant: 'heading-xxl/semibold',
                                                                      children: ew.name
                                                                  }),
                                                                  to &&
                                                                      (0, i.jsx)(h.Tooltip, {
                                                                          tooltipClassName: ef.premiumIconTooltip,
                                                                          text: e_.intl.string(e_.t['7B10XF']),
                                                                          children: (e) =>
                                                                              (0, i.jsx)('img', {
                                                                                  ...e,
                                                                                  alt: e_.intl.string(e_.t['7B10XF']),
                                                                                  className: ef.premiumIcon,
                                                                                  src: n(744050)
                                                                              })
                                                                      }),
                                                                  e8 && (0, i.jsx)(ee.Z, { className: ef.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: ef.buttons,
                                                              children: [
                                                                  (0, i.jsx)(h.Button, {
                                                                      onClick: e3,
                                                                      color: h.Button.Colors.PRIMARY,
                                                                      children: e1 ? e_.intl.string(e_.t.wwdb3t) : e_.intl.string(e_.t.z4sP5O)
                                                                  }),
                                                                  (0, i.jsx)(h.Button, {
                                                                      color: h.Button.Colors.BRAND,
                                                                      onClick: e5,
                                                                      disabled: !eV,
                                                                      children: e_.intl.string(e_.t.NgXl3N)
                                                                  }),
                                                                  (0, i.jsx)(h.Popout, {
                                                                      renderPopout: (e) => {
                                                                          let { closePopout: t } = e;
                                                                          return e6(t);
                                                                      },
                                                                      position: 'left',
                                                                      align: 'top',
                                                                      animation: h.Popout.Animation.NONE,
                                                                      children: (e) =>
                                                                          (0, i.jsx)(h.Clickable, {
                                                                              className: ef.overflow,
                                                                              ...e,
                                                                              children: (0, i.jsx)(h.MoreHorizontalIcon, {
                                                                                  size: 'custom',
                                                                                  color: 'currentColor',
                                                                                  width: 20,
                                                                                  height: 20,
                                                                                  className: ef.iconInteractive
                                                                              })
                                                                          })
                                                                  })
                                                              ]
                                                          })
                                                      ]
                                                  }),
                                                  (0, i.jsx)(ed.Z, {
                                                      activeSection: f,
                                                      setSection: eq,
                                                      sections: ts
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: ef.contentContainer,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: ef.content,
                                              children: [
                                                  tl,
                                                  null != eP && eP.length > 0
                                                      ? (0, i.jsxs)(i.Fragment, {
                                                            children: [
                                                                tt && (0, i.jsx)('div', { className: ef.separator }),
                                                                (0, i.jsxs)('div', {
                                                                    className: ef.section,
                                                                    children: [
                                                                        (0, i.jsx)(h.Heading, {
                                                                            className: ef.relatedHeader,
                                                                            variant: 'eyebrow',
                                                                            children: e_.intl.string(e_.t.E8wCnp)
                                                                        }),
                                                                        (0, i.jsx)($.Z, {
                                                                            loading: es,
                                                                            children: (0, i.jsx)(J.Z, {
                                                                                applicationId: m,
                                                                                applications: eP,
                                                                                onViewOne: e$
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                      : null
                                              ]
                                          }),
                                          (0, i.jsx)(ec.Z, {
                                              className: ef.sidebar,
                                              application: ew,
                                              guildId: g,
                                              onViewCategory: eQ,
                                              onClickGuildWidget: eF
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })),
        (0, i.jsx)(K.Z, { children: d })
    );
}
let eN = (e) => {
        let t,
            { onToggle: n, isViewAll: a } = e;
        return (
            (t = a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              className: ef.showMoreButtonText,
                              variant: 'eyebrow',
                              children: e_.intl.string(e_.t['vtfc4+'])
                          }),
                          (0, i.jsx)(h.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ef.showMoreButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Text, {
                              className: ef.showMoreButtonText,
                              variant: 'eyebrow',
                              children: e_.intl.string(e_.t.ZDRyur)
                          }),
                          (0, i.jsx)(h.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: ef.showMoreButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(eT, {
                children: (0, i.jsx)(h.Button, {
                    look: h.Button.Looks.BLANK,
                    color: h.Button.Colors.TRANSPARENT,
                    size: h.Button.Sizes.NONE,
                    className: ef.showMoreButton,
                    innerClassName: ef.showMoreButtonInner,
                    onClick: n,
                    children: t
                })
            })
        );
    },
    eT = (e) => {
        let { className: t, contentClassName: n, children: a } = e;
        return (0, i.jsxs)('div', {
            className: o()([ef.dividerContainer, t]),
            children: [
                (0, i.jsx)('div', { className: ef.divider }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: o()(ef.contentDivider, n),
                                  children: a
                              }),
                              (0, i.jsx)('div', { className: ef.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function ey(e) {
    let { app: t, iconSrc: n } = e,
        r = (0, y.ZP)(n, f.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: o } = t,
        l = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != o) {
                let t = (0, D.aN)({
                    id: o.id,
                    banner: o.banner,
                    size: 1024,
                    canAnimate: !1
                });
                null != t && ((e['--custom-background-static'] = 'url('.concat(t)), (e.height = 'auto'));
                let n = (0, D.xR)(o.banner)
                    ? (0, D.aN)({
                          id: o.id,
                          banner: o.banner,
                          size: 1024,
                          canAnimate: !0
                      })
                    : null;
                null != n && (e['--custom-background-animated'] = 'url('.concat(n));
            }
            return e;
        }, [r, o]);
    return (0, i.jsx)('div', {
        style: l,
        className: ef.headerBanner,
        'data-has-animated': '--custom-background-animated' in l
    });
}

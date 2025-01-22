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
    l = n.n(r),
    o = n(525654),
    s = n.n(o),
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
    v = n(445986),
    b = n(9807),
    x = n(330726),
    C = n(782568),
    S = n(581364),
    N = n(970321),
    T = n(283836),
    j = n(220082),
    y = n(252618),
    P = n(299206),
    E = n(241209),
    A = n(341176),
    L = n(312097),
    R = n(422559),
    k = n(703656),
    w = n(280885),
    O = n(706454),
    B = n(314897),
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
    el = n(940064),
    eo = n(626004),
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
    ev = (0, m.Mg)(g.Z.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
    eb = 'redirect_to_support_server',
    ex = 'start_application_install',
    eC = (e) => ''.concat(location.protocol, '//').concat(location.host).concat(ep.Z5c.APPLICATION_DIRECTORY_PROFILE(e));
function eS(e) {
    var t, r, o, c;
    let d,
        {
            match: {
                params: { applicationId: m, section: f = eu.ApplicationDirectoryProfileSections.GENERAL }
            }
        } = e,
        g = (0, et.useApplicationDirectoryHistory)((e) => e.guildId),
        j = (0, Y.Z)(),
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
        { similarApplications: eT, similarLoadId: ey } = (0, _.cj)([z.Z], () => {
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
        eR = a.useCallback(
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
        ek = (0, _.e7)([Z.Z], () => Z.Z.isFocused()),
        ew = (0, _.e7)([O.default], () => O.default.locale),
        eO = a.useRef(m),
        eB = (0, _.e7)([W.Z], () => {
            let e = W.Z.getApplication(m);
            return null == e ? (e = W.Z.getApplication(eO.current)) : (eO.current = m), e;
        }),
        eZ = (0, ei.Z)({ application: eB }),
        eH = (0, _.e7)([B.default], () => B.default.getSessionId());
    (0, y.Tt)({ location: null == eB ? void 0 : eB.name });
    let eD = a.useCallback(async () => {
        try {
            var e;
            let t = null == eB ? void 0 : null === (e = eB.guild) || void 0 === e ? void 0 : e.id;
            if (null != t) {
                (null == eB ? void 0 : eB.id) != null &&
                    H.default.track(ep.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                        application_id: eB.id,
                        guild_id: g,
                        support_guild_id: t
                    });
                let e = { page: ep.ZY5.APPLICATION_DIRECTORY };
                await (0, U.Ub)(t, e, { setsHistorySnapshot: !1 });
            }
        } catch {}
    }, [eB, g]);
    a.useEffect(() => {
        if (null == eB) return;
        let e = new URL(location.href);
        if (j && null != eH && 'true' === e.searchParams.get(eb)) {
            e.searchParams.delete(eb);
            let t = e.pathname + e.search;
            (0, k.dL)(t), eD();
        }
    }, [j, eD, eH, eB]);
    let eF = a.useCallback(() => {
            var e;
            null != (null == eB ? void 0 : null === (e = eB.guild) || void 0 === e ? void 0 : e.id) && (j ? eD() : (0, X.rf)({ [eb]: 'true' }));
        }, [eB, j, eD]),
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
            if ((null == eB ? void 0 : eB.directory_entry) != null) {
                let e = eB.directory_entry,
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
        }, [eB]);
    let eU = D.ZP.getApplicationIconURL({
            id: null !== (o = null == eB ? void 0 : eB.id) && void 0 !== o ? o : '-1',
            icon: null == eB ? void 0 : eB.icon,
            size: ev
        }),
        eG = (0, P.Z)({
            id: null !== (c = null == eB ? void 0 : eB.id) && void 0 !== c ? c : '',
            label: e_.intl.string(e_.t['FfCL+/'])
        }),
        { canInstall: eV, install: eW } = (0, q.P)(eB, g),
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
            (null == eB ? void 0 : eB.id) != null &&
                H.default.track(ep.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: 'product',
                    previous_page: e,
                    application_id: eB.id,
                    guild_id: g,
                    shown_mutual_guilds_count: eZ.length,
                    profile_section: t,
                    referrer: document.referrer
                });
        }, [null == eB ? void 0 : eB.id, g, eZ]);
    let eK = a.useMemo(() => {
            var e;
            let t = null == eB ? void 0 : null === (e = eB.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != t) return R.VY.filter((e) => p.e$(p.vB(t), e));
        }, [null == eB ? void 0 : null === (r = eB.install_params) || void 0 === r ? void 0 : r.permissions]),
        eq = a.useCallback(
            (e) => {
                eR(e),
                    (null == eB ? void 0 : eB.id) != null &&
                        H.default.track(ep.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eB.id,
                            guild_id: g,
                            tab_name: e
                        });
            },
            [null == eB ? void 0 : eB.id, g, eR]
        ),
        eX = a.useMemo(() => {
            var e, t, n;
            return null !== (n = (null !== (t = null == eB ? void 0 : null === (e = eB.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(X.RF).filter(M.lm)) && void 0 !== n ? n : [];
        }, [eB]),
        eJ = a.useCallback(
            (e, t) => {
                if (e.type === ep.s9s.IMG) {
                    let t = eX.filter((e) => e.type === ep.s9s.IMG),
                        n = t.findIndex((t) => t === e);
                    if (n < 0) return;
                    let i = t.map((e) => ({
                        url: (0, v.Q)(e.src),
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
                (null == eB ? void 0 : eB.id) != null &&
                    H.default.track(ep.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        current_page: 'product',
                        category: e.name,
                        category_id: e.id,
                        application_id: eB.id,
                        guild_id: g
                    }),
                    (0, en.goToCategory)({ categoryId: e.id });
            },
            [eB, g]
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
                (null == eB ? void 0 : eB.id) != null &&
                    H.default.track(ep.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                        current_page: 'product',
                        application_id: eB.id,
                        suggested_application_id: t.id,
                        position: i,
                        load_id: ey,
                        guild_id: g,
                        shown_mutual_guilds_count: n.length
                    }),
                    (0, en.goToApplication)({ applicationId: t.id });
            },
            [null == eB ? void 0 : eB.id, ey, g]
        ),
        e0 = a.useCallback(() => {
            null != eB &&
                (0, C.Z)(
                    (0, er.G)({
                        id: eB.id,
                        name: eB.name,
                        locale: ew
                    })
                );
        }, [ew, eB]),
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
        [e1, e3] = (0, x.Z)(!1, 1000),
        e2 = a.useCallback(() => {
            if (null != eB)
                H.default.track(ep.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
                    application_id: eB.id,
                    guild_id: g
                }),
                    (0, F.JG)(eC(eB.id)),
                    e3(!0);
        }, [eB, e3, g]);
    a.useEffect(() => {
        let e = new URL(location.href);
        if (j && 'true' === e.searchParams.get(ex)) {
            e.searchParams.delete(ex);
            let t = e.pathname + e.search;
            (0, k.dL)(t), eW('product_page');
        }
    }, [j, eW]);
    let e8 = a.useCallback(() => {
            if (null != eB) {
                if ((u.tq || u.Em) && null == eB.custom_install_url) {
                    let e = (0, G.Er)({
                        applicationId: eB.id,
                        customInstallUrl: eB.custom_install_url,
                        installParams: eB.install_params,
                        integrationTypesConfig: eB.integration_types_config
                    });
                    if (null != e) {
                        window.open(e, '_blank');
                        return;
                    }
                }
                j
                    ? eW('product_page')
                    : (H.default.track(ep.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
                          application_id: m,
                          guild_id: g,
                          auth_type: null != eB.custom_install_url ? 'custom_url' : 'in_app',
                          source: 'product_page',
                          device_platform: u.tq ? 'mobile_web' : 'desktop_web'
                      }),
                      (0, X.rf)({ [ex]: 'true' }));
            }
        }, [eB, j, eW, m, g]),
        e9 = (null == eB ? void 0 : eB.id) === em.g,
        [e5, e4] = a.useState(!1),
        [e7, te] = a.useState(!1),
        [tt, tn] = a.useState(!0),
        ti = (e) => {
            null != e && e4(e.scrollHeight > e.clientHeight);
        },
        ta = null != eK && eK.length > 0,
        tr = (null == eB ? void 0 : eB.flags) != null,
        tl = (0, N.R)(null != m ? m : '');
    a.useEffect(() => {
        tl && null != m && (0, T.Z)(m);
    }, [tl, m]);
    let to = a.useMemo(() => {
            let e = [],
                t = !0;
            switch (f) {
                case eu.ApplicationDirectoryProfileSections.GENERAL: {
                    var n, a;
                    let r = null == eB ? void 0 : null === (n = eB.directory_entry) || void 0 === n ? void 0 : n.detailed_description;
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
                                          className: l()({
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
                                      (e5 || e7) &&
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
                        : (null == eB ? void 0 : null === (a = eB.directory_entry) || void 0 === a ? void 0 : a.short_description) !== void 0
                          ? e.push(
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(h.Heading, {
                                            className: ef.sectionHeader,
                                            variant: 'heading-md/semibold',
                                            children: e_.intl.string(e_.t.txraKS)
                                        }),
                                        (0, i.jsx)('span', { children: eB.directory_entry.short_description })
                                    ]
                                })
                            )
                          : (null == eB ? void 0 : eB.description) != null &&
                            e.push(
                                (0, i.jsx)(w.Z, {
                                    className: ef.description,
                                    userBio: eB.description
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
                                        (0, i.jsx)(el.Z, {
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
                        null != eB
                            ? (e.alt = e_.intl.formatToPlainString(e_.t.sSEhHR, {
                                  index: t + 1,
                                  totalImages: eX.length,
                                  name: eB.name
                              }))
                            : (e.alt = e_.intl.string(e_.t['5UVm9/']));
                    }),
                        e.push(
                            (0, i.jsx)(b.Z, {
                                className: ef.carousel,
                                themedPagination: !0,
                                items: eX,
                                autoplayInterval: 8000,
                                paused: !ek,
                                videoAutoPlay: !0,
                                onCurrentItemClick: eJ,
                                errorComponent: t,
                                onImageLoad: (e) => {
                                    let { src: t, loadTimeMs: n } = e;
                                    null != n &&
                                        null != eB &&
                                        H.default.track(ep.rMx.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eB.id,
                                            load_time_ms: n,
                                            src: t
                                        });
                                }
                            })
                        );
                    break;
                }
                case eu.ApplicationDirectoryProfileSections.STORE:
                    tl && null != m && e.push((0, i.jsx)(ea.M, { appId: m }));
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
                                        (0, i.jsx)(eo.Z, { application: eB })
                                    ]
                                })
                            );
            }
            return (
                tn(t),
                0 === e.length && f !== eu.ApplicationDirectoryProfileSections.GENERAL && null != eB && eM(),
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
        }, [f, eM, eB, eA, e7, e5, eX, ek, eJ, tl, m, ta, tr, eK]),
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
                tl &&
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
        }, [eX.length, ta, tr, tl]);
    return (
        (d =
            null == eB
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
                          (0, i.jsx)(ej, {
                              app: eB,
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
                                                      width: ev,
                                                      height: ev
                                                  }),
                                                  (0, i.jsx)(Q.Z, {
                                                      application: eB,
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
                                                                      children: eB.name
                                                                  }),
                                                                  tl &&
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
                                                                  e9 && (0, i.jsx)(ee.Z, { className: ef.partnerBadge })
                                                              ]
                                                          }),
                                                          (0, i.jsxs)('div', {
                                                              className: ef.buttons,
                                                              children: [
                                                                  (0, i.jsx)(h.Button, {
                                                                      onClick: e2,
                                                                      color: h.Button.Colors.PRIMARY,
                                                                      children: e1 ? e_.intl.string(e_.t.wwdb3t) : e_.intl.string(e_.t.z4sP5O)
                                                                  }),
                                                                  (0, i.jsx)(h.Button, {
                                                                      color: h.Button.Colors.BRAND,
                                                                      onClick: e8,
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
                                                  to,
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
                                              application: eB,
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
            className: l()([ef.dividerContainer, t]),
            children: [
                (0, i.jsx)('div', { className: ef.divider }),
                null != a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: l()(ef.contentDivider, n),
                                  children: a
                              }),
                              (0, i.jsx)('div', { className: ef.divider })
                          ]
                      })
                    : null
            ]
        });
    };
function ej(e) {
    let { app: t, iconSrc: n } = e,
        r = (0, j.ZP)(n, f.Z.unsafe_rawColors.PRIMARY_800.css),
        { bot: l } = t,
        o = a.useMemo(() => {
            let e = { backgroundColor: r };
            if (null != l) {
                let t = (0, D.aN)({
                    id: l.id,
                    banner: l.banner,
                    size: 1024,
                    canAnimate: !1
                });
                null != t && ((e['--custom-background-static'] = 'url('.concat(t)), (e.height = 'auto'));
                let n = (0, D.xR)(l.banner)
                    ? (0, D.aN)({
                          id: l.id,
                          banner: l.banner,
                          size: 1024,
                          canAnimate: !0
                      })
                    : null;
                null != n && (e['--custom-background-animated'] = 'url('.concat(n));
            }
            return e;
        }, [r, l]);
    return (0, i.jsx)('div', {
        style: o,
        className: ef.headerBanner,
        'data-has-animated': '--custom-background-animated' in o
    });
}

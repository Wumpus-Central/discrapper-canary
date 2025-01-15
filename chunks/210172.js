i.r(t), i(47120);
var s = i(200651),
    n = i(192379),
    r = i(442837),
    a = i(481060),
    l = i(367907),
    o = i(313201),
    d = i(456268),
    c = i(416162),
    u = i(434404),
    m = i(999382),
    g = i(449543),
    x = i(681518),
    h = i(627573),
    p = i(814008),
    v = i(259674),
    f = i(981631),
    N = i(128449),
    I = i(388032),
    S = i(331592),
    j = i(438825);
t.default = (e) => {
    let { transitionState: t, onClose: C } = e,
        { guild: T, guildMetadata: E } = (0, r.cj)([m.Z], () => m.Z.getProps()),
        y = (0, o.Dt)(),
        [b, _] = n.useState(!1),
        [k, F] = n.useState(0),
        [R, A] = n.useState(!1);
    if (
        (n.useEffect(() => {
            l.ZP.trackWithMetadata(f.rMx.OPEN_MODAL, { type: f.jXE.DISCOVERY_SETUP_SUCCESS_MODAL });
        }, []),
        null == T)
    )
        return null;
    let w = (0, s.jsx)(x.Z, {
            guild: T,
            headerId: y
        }),
        D = (0, s.jsx)(g.Z, {
            guild: T,
            guildMetadata: E,
            headerId: y
        }),
        Z = (0, s.jsx)(p.Z, {
            guild: T,
            guildMetadata: E,
            headerId: y
        }),
        M = (0, s.jsx)(h.Z, {
            guild: T,
            headerId: y,
            onAgreedChange: A
        }),
        P = (0, s.jsx)('img', {
            alt: '',
            src: j,
            className: S.footerImage,
            width: 240
        }),
        L = async () => {
            if (0 === k) {
                _(!0);
                try {
                    await u.Z.saveGuild(
                        T.id,
                        { description: T.description },
                        {
                            isForDiscovery: !0,
                            throwErr: !0
                        }
                    ),
                        F(k + 1),
                        (0, v.Nx)(v.tK.DESCRIPTION, v.tK.CATEGORIES, T.id);
                } catch (e) {}
            } else if (1 === k) F(k + 1), (0, v.Nx)(v.tK.CATEGORIES, v.tK.TAGS, T.id);
            else if (2 === k) {
                _(!0);
                try {
                    await (0, d.Vv)({
                        guildId: T.id,
                        primaryCategoryId: E.primaryCategoryId,
                        keywords: E.keywords,
                        emojiDiscoverabilityEnabled: E.emojiDiscoverabilityEnabled,
                        partnerActionedTimestamp: E.partnerActionedTimestamp,
                        partnerApplicationTimestamp: E.partnerApplicationTimestamp,
                        isPublished: E.isPublished,
                        reasonsToJoin: E.reasonsToJoin,
                        socialLinks: E.socialLinks,
                        about: E.about
                    }),
                        F(k + 1),
                        (0, v.Nx)(v.tK.TAGS, v.tK.AGREE_TO_RULES, T.id);
                } catch (e) {}
            }
            _(!1);
        },
        O = [
            {
                modalContent: w,
                disableNextStep: null == T.description,
                overviewTitle: I.intl.string(I.t.RHP0kJ)
            },
            {
                modalContent: D,
                disableNextStep: E.primaryCategoryId === N.o3 || null == E.primaryCategoryId,
                overviewTitle: I.intl.string(I.t.Rv9An5)
            },
            {
                modalContent: Z,
                disableNextStep: 0 === E.keywords.length,
                overviewTitle: I.intl.string(I.t['0PJZXl'])
            },
            {
                modalContent: M,
                disableNextStep: !R,
                overviewTitle: I.intl.string(I.t.Q8OFNz)
            }
        ];
    return (0, s.jsx)(c.Z, {
        stepData: O,
        title: I.intl.string(I.t.uyuIen),
        transitionState: t,
        onClose: C,
        completeButtonText: I.intl.string(I.t.wYi2lJ),
        onNextPressed: L,
        onPrevPressed: () => {
            F(k - 1);
        },
        forceStep: k,
        onComplete: () => {
            let e = T.features;
            !T.hasFeature(f.oNc.DISCOVERABLE) && e.add(f.oNc.DISCOVERABLE),
                u.Z.saveGuild(T.id, {
                    features: e,
                    description: T.description
                }),
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await i.e('263').then(i.bind(i, 477520));
                    return (t) =>
                        (0, s.jsx)(e, {
                            ...t,
                            guild: T
                        });
                });
        },
        overviewFooter: P,
        submitting: b,
        sequencerClassName: S.container
    });
};

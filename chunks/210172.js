i.d(t, { default: () => S }), i(47120);
var s = i(200651),
    a = i(192379),
    n = i(442837),
    r = i(481060),
    l = i(367907),
    c = i(313201),
    d = i(456268),
    o = i(416162),
    u = i(434404),
    m = i(999382),
    g = i(449543),
    x = i(681518),
    h = i(627573),
    p = i(814008),
    v = i(259674),
    N = i(981631),
    j = i(128449),
    b = i(388032),
    f = i(964343),
    I = i(438825);
let S = (e) => {
    let { transitionState: t, onClose: S } = e,
        { guild: C, guildMetadata: E } = (0, n.cj)([m.Z], () => m.Z.getProps()),
        _ = (0, c.Dt)(),
        [k, T] = a.useState(!1),
        [y, R] = a.useState(0),
        [w, A] = a.useState(!1);
    if (
        (a.useEffect(() => {
            l.ZP.trackWithMetadata(N.rMx.OPEN_MODAL, { type: N.jXE.DISCOVERY_SETUP_SUCCESS_MODAL });
        }, []),
        null == C)
    )
        return null;
    let D = (0, s.jsx)(x.Z, {
            guild: C,
            headerId: _
        }),
        Z = (0, s.jsx)(g.Z, {
            guild: C,
            guildMetadata: E,
            headerId: _
        }),
        L = (0, s.jsx)(p.Z, {
            guild: C,
            guildMetadata: E,
            headerId: _
        }),
        P = (0, s.jsx)(h.Z, {
            guild: C,
            headerId: _,
            onAgreedChange: A
        }),
        O = (0, s.jsx)('img', {
            alt: '',
            src: I,
            className: f.footerImage,
            width: 240
        }),
        G = async () => {
            if (0 === y) {
                T(!0);
                try {
                    await u.Z.saveGuild(
                        C.id,
                        { description: C.description },
                        {
                            isForDiscovery: !0,
                            throwErr: !0
                        }
                    ),
                        R(y + 1),
                        (0, v.Nx)(v.tK.DESCRIPTION, v.tK.CATEGORIES, C.id);
                } catch (e) {}
            } else if (1 === y) R(y + 1), (0, v.Nx)(v.tK.CATEGORIES, v.tK.TAGS, C.id);
            else if (2 === y) {
                T(!0);
                try {
                    await (0, d.Vv)({
                        guildId: C.id,
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
                        R(y + 1),
                        (0, v.Nx)(v.tK.TAGS, v.tK.AGREE_TO_RULES, C.id);
                } catch (e) {}
            }
            T(!1);
        },
        M = [
            {
                modalContent: D,
                disableNextStep: null == C.description,
                overviewTitle: b.intl.string(b.t.RHP0kJ)
            },
            {
                modalContent: Z,
                disableNextStep: E.primaryCategoryId === j.o3 || null == E.primaryCategoryId,
                overviewTitle: b.intl.string(b.t.Rv9An5)
            },
            {
                modalContent: L,
                disableNextStep: 0 === E.keywords.length,
                overviewTitle: b.intl.string(b.t['0PJZXl'])
            },
            {
                modalContent: P,
                disableNextStep: !w,
                overviewTitle: b.intl.string(b.t.Q8OFNz)
            }
        ];
    return (0, s.jsx)(o.Z, {
        stepData: M,
        title: b.intl.string(b.t.uyuIen),
        transitionState: t,
        onClose: S,
        completeButtonText: b.intl.string(b.t.wYi2lJ),
        onNextPressed: G,
        onPrevPressed: () => {
            R(y - 1);
        },
        forceStep: y,
        onComplete: () => {
            let e = C.features;
            C.hasFeature(N.oNc.DISCOVERABLE) || e.add(N.oNc.DISCOVERABLE),
                u.Z.saveGuild(C.id, {
                    features: e,
                    description: C.description
                }),
                (0, r.ZDy)(async () => {
                    let { default: e } = await i.e('263').then(i.bind(i, 477520));
                    return (t) =>
                        (0, s.jsx)(e, {
                            ...t,
                            guild: C
                        });
                });
        },
        overviewFooter: O,
        submitting: k,
        sequencerClassName: f.container
    });
};

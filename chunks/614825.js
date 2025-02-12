n.d(t, { Z: () => j }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(873546),
    d = n(442837),
    u = n(481060),
    m = n(568836),
    _ = n(100527),
    h = n(906732),
    p = n(963249),
    g = n(594174),
    f = n(78839),
    x = n(55935),
    C = n(63063),
    v = n(74538),
    E = n(276444),
    I = n(786397),
    N = n(474936),
    S = n(981631),
    T = n(388032),
    b = n(41545);
class A extends l.Component {
    renderTitle(e, t, n) {
        let { trialOffer: i } = this.props,
            l = g.default.getUser(i.user_id),
            a = null != l ? l.username : '???',
            r = g.default.getUser(i.referrer_id),
            s = null != r ? r.username : '???';
        return e && void 0 === i.redeemed_at
            ? T.intl.formatToPlainString(T.t.Mptau7, { username: a })
            : t
              ? n
                  ? T.intl.string(T.t['9SNdf3'])
                  : T.intl.formatToPlainString(T.t['H0+MxM'], { userName: s })
              : T.intl.formatToPlainString(T.t.IiWKws, {
                    senderUserName: s,
                    recipientUserName: a
                });
    }
    renderBody(e, t, n) {
        let { trialOffer: i } = this.props;
        return e && !n && void 0 === i.redeemed_at ? T.intl.format(T.t.LwCwT0, { helpdeskArticle: C.Z.getArticleURL(S.BhN.REFERRAL_PROGRAM) }) : t ? null : T.intl.string(T.t.lQLlOT);
    }
    renderActions(e, t, n) {
        let { trialOffer: l, currentUser: a, analyticsLocations: r } = this.props,
            s = {
                onClick: () => {
                    this.handleStartTrial(l, r);
                },
                color: u.zxk.Colors.BRAND
            },
            o = a.id !== l.user_id || (0, v.I5)(a) || !a.verified || (0, I.B)(l),
            c = this.renderExpirationDate(e, t, n);
        return (
            (s.disabled = o),
            (0, i.jsxs)('div', {
                className: b.buttonContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.zxk, {
                            ...s,
                            size: u.zxk.Sizes.SMALL,
                            onClick: () => {
                                (0, p.Z)({
                                    initialPlanId: null,
                                    subscriptionTier: N.Si.TIER_2,
                                    analyticsLocations: r,
                                    trialId: l.trial_id,
                                    referralTrialOfferId: l.id
                                });
                            },
                            children: T.intl.string(T.t.O0etsL)
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: b.metadata,
                        children: c
                    })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: i, trialEndsAt: l } = this.props;
        if (void 0 !== i.redeemed_at && !n && null !== l) return T.intl.formatToPlainString(T.t.nP0ivb, { date: (0, x.vc)(o()(l), 'LL') });
        if (e || void 0 === i.expires_at) return null;
        let a = o()(i.expires_at);
        if (t) return T.intl.formatToPlainString(T.t.PuSHfX, { date: (0, x.vc)(o()(a), 'LL') });
        let r = a.diff(o()(), 'h');
        if (r > 48) {
            let e = a.diff(o()(), 'd');
            return T.intl.formatToPlainString(T.t['g9s+dH'], { numDays: e });
        }
        if (r > 1) return T.intl.formatToPlainString(T.t.k9v339, { numHours: r });
        let s = a.diff(o()(), 'minutes');
        return T.intl.formatToPlainString(T.t['/d0GmZ'], { numMinutes: s });
    }
    renderMedia() {
        return (0, i.jsx)('div', { className: b.referral });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n } = this.props,
            l = (0, I.B)(e),
            a = t.id === e.referrer_id;
        return (0, i.jsxs)('div', {
            className: r()(b.tile, b.container),
            children: [
                (0, i.jsx)('div', {
                    className: b.media,
                    children: this.renderMedia()
                }),
                (0, i.jsxs)('div', {
                    className: b.description,
                    children: [
                        (0, i.jsx)(u.H, {
                            className: b.title,
                            children: this.renderTitle(n, l, a)
                        }),
                        (0, i.jsx)('div', {
                            className: b.tagline,
                            children: this.renderBody(n, l, a)
                        }),
                        (0, i.jsx)('div', {
                            className: b.actions,
                            children: this.renderActions(n, l, a)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleStartTrial'),
            (n = (e, t) => {
                (0, p.Z)({
                    initialPlanId: null,
                    subscriptionTier: N.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
function j(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: l, isResolving: a } = (0, d.cj)(
            [E.Z],
            () => ({
                trialOffer: n ? E.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && E.Z.isResolving(t)
            }),
            [n, t]
        ),
        r = g.default.getCurrentUser(),
        s = (0, d.e7)([g.default], () => null != l && (0, v.I5)(void 0 !== r && l.user_id === r.id ? r : g.default.getUser(l.user_id))),
        o = (0, d.e7)([f.ZP], () => {
            var e;
            return s ? (null === (e = f.ZP.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: u } = (0, h.ZP)(_.Z.SHARE_NITRO_EMBED);
    return a
        ? (0, i.jsx)(m.OR, { isHorizontal: !c.tq })
        : n && null != l && void 0 !== r
          ? (0, i.jsx)(A, {
                trialOffer: l,
                currentUser: r,
                recipientHasNitro: s,
                trialEndsAt: o,
                analyticsLocations: u,
                ...e
            })
          : (0, i.jsx)('div', {
                className: b.invalidWrapper,
                children: (0, i.jsx)('div', { className: b.invalid })
            });
}

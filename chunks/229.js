"use strict";
n.d(t, { A: () => F });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(492462),
    o = n(110259),
    c = n(311907),
    d = n(451988),
    u = n(397927),
    h = n(830215),
    _ = n(17841),
    p = n(965252),
    g = n(139286),
    m = n(908192),
    A = n(669629),
    f = n(854378),
    E = n(491509),
    x = n(895600),
    I = n(274303),
    N = n(942614),
    v = n(976860),
    T = n(210714),
    j = n(544395),
    C = n(961350),
    S = n(153488),
    y = n(650048),
    b = n(954571),
    R = n(203982),
    O = n(161928),
    L = n(890698),
    w = n(538796),
    k = n(652215),
    D = n(68729),
    U = n(771016),
    P = n(985018),
    B = n(731286),
    G = n(818050);
c.Ay.initialize();
class M extends s.PureComponent {
    _retryTimer = new d.Ep();
    static defaultProps = { giftCodeResolved: !1, transitionTo: v.pX };
    constructor(e) {
        super(e);
        const t = null != e.location ? (0, a.parse)(e.location.search) : {};
        this.state = { email: t.email ?? "", apiErrors: {} };
    }
    get registrationSource() {
        let { giftCode: e, guildTemplate: t, invite: n } = this.props;
        if (null != e) return "gift";
        if (null != t) return "guild_template";
        if (null != n) {
            if (null != n.guild) return "guild_invite";
            else if (null != n.channel) return "dm_invite";
            else if (null != n.inviter) return "friend_invite";
        }
        return null;
    }
    componentDidMount() {
        this.redirectIfAuthenticated();
        let { giftCodeSKU: e, invite: t } = this.props;
        b.default.track(
            k.HAw.REGISTER_VIEWED,
            {
                location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                registration_source: this.registrationSource,
                ...(null != e ? (0, E.A)(e, !1, !1) : {}),
            },
            { flush: !0 },
        ),
            null == this.props.consentRequired && h.A.getLocationMetadata(),
            (0, T.d)("register");
    }
    componentWillUnmount() {
        this._retryTimer.stop();
    }
    componentDidUpdate(e) {
        let { authenticated: t, isUnderage: n, onChangeStep: i } = this.props,
            { apiErrors: s } = this.state;
        t && !e.authenticated && ((0, N.C)(U.zY.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let r = D.ju.FULL;
        n || null != s.date_of_birth ? (r = D.ju.AGE_GATE) : this.inGuildOrChannelInviteFlow() && (r = D.ju.INVITE),
            i(r);
    }
    inGuildOrChannelInviteFlow() {
        return null != this.props.invite && (null != this.props.invite.guild || null != this.props.invite.channel);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : y.A.defaultRoute);
    }
    handleGotoLogin = (e) => {
        let t,
            { email: n } = this.state,
            {
                giftCode: i,
                guildTemplate: s,
                invite: r,
                location: l,
                onLoginStart: o,
                redirectTo: c,
                transitionTo: d,
            } = this.props,
            u = null != l ? (0, a.parse)(l.search) : {};
        null != r
            ? (t = k.BVt.INVITE_LOGIN(r.code))
            : null != i
              ? (t = k.BVt.GIFT_CODE_LOGIN(i.code))
              : null != s
                ? (t = k.BVt.GUILD_TEMPLATE_LOGIN(s.code))
                : null != c
                  ? ((t = k.BVt.LOGIN), (u.redirect_to = c))
                  : ((t = k.BVt.LOGIN), "" !== n && (u = { email: n })),
            h.A.loginReset(),
            d(t, { search: (0, a.stringify)(u), source: "register" }),
            o?.(e),
            R._.dispatch(k.jej.WAVE_EMPHASIZE);
    };
    renderFull(e, t) {
        let { authBoxClassName: n, hasLoggedInAccounts: r, giftCode: o, guildTemplate: c, invite: d } = this.props,
            h =
                null != e
                    ? (0, i.jsx)(s.Fragment, { children: e() }, "custom-header")
                    : (0, i.jsx)(f.hE, { children: P.intl.string(P.t.wC4TlR) }, "title"),
            _ = null != this.props.location ? (0, a.parse)(this.props.location.search) : {},
            p = (0, i.jsx)(m.A, {
                initialEmail: _.email ?? "",
                invite: d,
                giftCode: o,
                guildTemplate: c,
                onApiErrors: (e) => this.setState({ apiErrors: e }),
                onEmailChange: (e) => this.setState({ email: e }),
                onGotoLogin: this.handleGotoLogin,
                onRegister: this.props.onRegister,
            });
        return t
            ? (0, i.jsx)(w.A, {
                  tag: "section",
                  className: l()(n, B.Sy),
                  children: () => [
                      h,
                      (0, i.jsxs)(
                          "div",
                          {
                              className: B.Uu,
                              children: [(0, i.jsx)(f.hE, { className: B.lR, children: P.intl.string(P.t.wC4TlR) }), p],
                          },
                          "register-title",
                      ),
                  ],
              })
            : (0, i.jsxs)(f.Ay, {
                  tag: "section",
                  className: n,
                  children: [
                      r
                          ? (0, i.jsx)("div", {
                                className: B.AX,
                                children: (0, i.jsx)(u.Button, {
                                    onClick: this.handleGotoLogin,
                                    variant: "secondary",
                                    text: P.intl.string(P.t["1MrpWO"]),
                                    icon: u.n2b,
                                    iconPosition: "start",
                                }),
                            })
                          : null,
                      h,
                      p,
                  ],
              });
    }
    render() {
        let { apiErrors: e } = this.state,
            { isUnderage: t } = this.props,
            n = this.inGuildOrChannelInviteFlow();
        if (t || null != e.date_of_birth) return (0, i.jsx)(p.A, {});
        let { giftCode: s, invite: r, guildTemplate: l, authBoxClassName: a } = this.props,
            o = null != r && null == r.guild && null == r.channel && null != r.inviter;
        return null != r && n
            ? (0, i.jsx)(A.A, {
                  invite: r,
                  authBoxClassName: a,
                  onApiErrors: (e) => this.setState({ apiErrors: e }),
                  onGotoLogin: this.handleGotoLogin,
                  onRegister: this.props.onRegister,
              })
            : null != l
              ? this.renderFull(() => (0, i.jsx)(x.A, { guildTemplate: l }), !0)
              : null != s
                ? this.renderFull(() => (0, i.jsx)(O.A, { giftCode: s }))
                : null != r && o && r.state === k.elq.RESOLVED
                  ? this.renderFull(() =>
                        (0, i.jsx)("div", {
                            className: G.S3,
                            children: (0, i.jsx)(L.A, { invite: r, isRegister: !0 }),
                        }),
                    )
                  : this.renderFull();
    }
}
function F(e) {
    let t = (0, c.cf)([S.A, C.default, _.A, I.A], () => ({
            consentRequired: S.A.getAuthenticationConsentRequired(),
            authenticated: C.default.isAuthenticated(),
            isUnderage: _.A.isUnderageAnonymous(),
            hasLoggedInAccounts: I.A.getHasLoggedInAccounts(),
        })),
        n = (0, c.bG)([j.A], () => j.A.registrationUsernameSuggestion()),
        [r, l] = s.useState(D.ju.FULL);
    return (
        (0, g.A)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: o.ImpressionGroups.USER_REGISTRATION_FLOW, step: r },
            },
            {},
            [r],
        ),
        (0, i.jsx)(M, { onChangeStep: (e) => l(e), usernameSuggestion: n, ...e, ...t })
    );
}

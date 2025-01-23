n.d(t, {
    Z: function () {
        return ed;
    }
}),
    n(757143),
    n(47120),
    n(627341);
var i,
    r = n(200651),
    s = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(593473),
    c = n(278074),
    d = n(990547),
    u = n(442837),
    h = n(846519),
    g = n(481060),
    f = n(893776),
    m = n(881052),
    p = n(899370),
    x = n(224841),
    _ = n(13430),
    E = n(213609),
    I = n(882037),
    N = n(201207),
    v = n(254942),
    C = n(481230),
    b = n(388905),
    T = n(853268),
    Z = n(639946),
    A = n(616952),
    S = n(792766),
    j = n(692483),
    R = n(100159),
    P = n(473855),
    L = n(726745),
    O = n(929809),
    y = n(541692),
    D = n(986197),
    k = n(135200),
    w = n(219496),
    B = n(794099),
    M = n(807369),
    G = n(180529),
    F = n(108427),
    U = n(314897),
    z = n(480294),
    V = n(896797),
    K = n(626135),
    H = n(585483),
    W = n(70956),
    q = n(624138),
    J = n(481153),
    Y = n(588705),
    X = n(163671),
    Q = n(981631),
    $ = n(355142),
    ee = n(188785),
    et = n(701476),
    en = n(801461),
    ei = n(388032),
    er = n(240854),
    es = n(232186);
function el(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
u.ZP.initialize();
let eo = /\.$/,
    ea = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(eo, ''))
                  .join('. ')
                  .trim()
            : e;
class ec extends (i = s.PureComponent) {
    get registrationSource() {
        let { giftCode: e, guildTemplate: t, invite: n } = this.props;
        if (null != e) return 'gift';
        if (null != t) return 'guild_template';
        if (null != n) {
            if (null != n.guild) return 'guild_invite';
            if (null != n.channel) return 'dm_invite';
            else if (null != n.inviter) return 'friend_invite';
        }
        return null;
    }
    hasConsent() {
        let { consentRequired: e } = this.props,
            { consent: t } = this.state;
        return null != e && t;
    }
    componentDidMount() {
        this.redirectIfAuthenticated(), N.Z.trackExposure({ location: '0ba758_1' });
        let { giftCodeSKU: e, invite: t } = this.props;
        K.default.track(
            Q.rMx.REGISTER_VIEWED,
            {
                location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                registration_source: this.registrationSource,
                ...(null != e ? (0, R.Z)(e, !1, !1) : {})
            },
            { flush: !0 }
        ),
            null == this.props.consentRequired && f.Z.getLocationMetadata(),
            (0, F.e)('register');
    }
    componentWillUnmount() {
        this._retryTimer.stop();
    }
    static getDerivedStateFromProps(e, t) {
        let { consentRequired: n } = e,
            { consentRequiredProp: i } = t;
        return null == i && null != n
            ? {
                  consent: !n,
                  consentRequiredProp: n
              }
            : { consentRequiredProp: n };
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, isUnderage: i, invite: r, onChangeStep: s } = this.props,
            { apiErrors: l, parsedDateOfBirth: o } = this.state;
        (t.apiErrors !== l || t.parsedDateOfBirth !== o) &&
            (this.hasError('email') || this.hasError('phone')
                ? null != this.emailRef && this.emailRef.focus()
                : this.hasError('username')
                  ? null != this.usernameRef && this.usernameRef.focus()
                  : this.hasError('global_name')
                    ? null != this.globalNameRef && this.globalNameRef.focus()
                    : this.hasError('password')
                      ? null != this.passwordRef && this.passwordRef.focus()
                      : null == this.state.parsedDateOfBirth
                        ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus()
                        : this.hasError('retry_after') &&
                          'number' == typeof l.retry_after &&
                          (this.setState({ isRateLimited: !0 }),
                          this._retryTimer.start(l.retry_after * W.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, O.c)(et.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let a = $.EW.FULL;
        i || this.hasError('date_of_birth') ? (a = $.EW.AGE_GATE) : null != r && (null != r.guild || null != r.channel) && (a = $.EW.INVITE), s(a);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        if (!!e) t(null != n ? n : V.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: i, consent: r, parsedDateOfBirth: s } = this.state,
            { invite: l, guildTemplate: o, giftCode: a, onRegister: c, usernameSuggestion: d, isMobileWebInviteRegistration: u } = this.props,
            h = null != l ? l.code : null,
            g = null != a ? a.skuId : null,
            f = I.MD.getState(),
            p = (0, q.Ew)(d) ? null : t === d,
            x = ee.a ? await (0, j.K)(t) : t,
            _ = ee.a ? await (0, j.K)(n) : n;
        H.S.dispatch(Q.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {}
            });
        try {
            u || null == l
                ? await (0, C.R$)({
                      email: e,
                      username: x,
                      globalName: _,
                      consent: r,
                      password: i,
                      invite: h,
                      usedUsernameSuggestion: p,
                      guildTemplateCode: null == o ? void 0 : o.code,
                      giftCodeSKUId: g,
                      birthday: s,
                      promoEmailConsent: f.required ? f : null
                  })
                : await (0, C.ZP)({
                      consent: r,
                      invite: h,
                      giftCodeSKUId: g,
                      usedUsernameSuggestion: p,
                      globalName: _
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof m.Hx))) return;
            let e = (0, v.F)(t);
            this.setState({ apiErrors: e });
        }
    }
    hasError(e) {
        return null != this.state.apiErrors[e];
    }
    renderConsentComponents() {
        let { consent: e } = this.state,
            {
                consentRequired: t,
                registrationCopyExperimentConfig: { enableNewCopy: n, hasProminentCopy: i }
            } = this.props,
            s = null,
            l = null;
        return (
            t
                ? (l = (0, r.jsx)(T.Z, {
                      value: e,
                      onChange: (e) => this.setState({ consent: e }),
                      subText: ei.intl.format(ei.t.qMDAPz, {
                          termsURL: Q.EYA.TERMS,
                          privacyURL: Q.EYA.PRIVACY
                      })
                  }))
                : (s = (0, r.jsx)(b.i_, {
                      isProminent: !!i,
                      className: es.marginTop8,
                      children: n
                          ? ei.intl.format(ei.t.oRFxPj, {
                                buttonText: ei.intl.string(ei.t['3PatS0']),
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY
                            })
                          : ei.intl.format(ei.t['F+0zT0'], {
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY
                            })
                  })),
            {
                subText: s,
                consentText: l
            }
        );
    }
    renderInviteResolving() {
        let { authBoxClassName: e } = this.props,
            t = (e) => {
                this.setState({ globalName: e });
            },
            n = this.state.globalName;
        return (0, r.jsxs)(b.ZP, {
            className: e,
            children: [
                (0, r.jsx)(Y.R, {}),
                (0, r.jsxs)(b.gO, {
                    className: es.marginTop40,
                    children: [
                        (0, r.jsx)(g.FormTitle, { children: ei.intl.string(ei.t.TWzdWl) }),
                        (0, r.jsx)(g.Tooltip, {
                            text: ei.intl.string(ei.t['hBB85+']),
                            position: 'right',
                            color: g.Tooltip.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: i, onMouseLeave: s } = e;
                                return (0, r.jsx)(b.II, {
                                    autoFocus: !0,
                                    className: es.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: ei.intl.string(ei.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: i,
                                    onMouseLeave: s
                                });
                            }
                        }),
                        (0, r.jsx)(b.zx, {
                            className: es.marginTop20,
                            disabled: !0,
                            children: ei.intl.string(ei.t['3PatS0'])
                        }),
                        (0, r.jsx)(b.i_, {
                            disabled: !0,
                            className: es.marginTop8,
                            children: ei.intl.format(ei.t['F+0zT0'], {
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY
                            })
                        }),
                        ee.a
                            ? null
                            : (0, r.jsx)(b.zx, {
                                  look: b.zx.Looks.LINK,
                                  color: b.zx.Colors.LINK,
                                  disabled: !0,
                                  className: es.marginTop20,
                                  children: ei.intl.string(ei.t['r/jzu7'])
                              })
                    ]
                })
            ]
        });
    }
    renderInviteHeader() {
        let { invite: e } = this.props;
        return (null == e ? void 0 : e.stage_instance) != null && null != e.guild
            ? (0, r.jsx)(S.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, r.jsx)(Z.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, r.jsx)(Y.Z, { invite: e });
    }
    renderInviteButton() {
        let { invite: e, consentRequired: t } = this.props,
            { consent: n, registering: i } = this.state,
            s = b.zx.Colors.BRAND,
            l = ei.intl.string(ei.t['3PatS0']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((s = b.zx.Colors.GREEN), (l = ei.intl.string(ei.t['5UKyUl']))),
            (0, r.jsx)(g.Tooltip, {
                text: !n && t ? ei.intl.string(ei.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: es.marginTop20,
                        ...e,
                        children: (0, r.jsx)(b.zx, {
                            type: 'submit',
                            submitting: i,
                            disabled: !this.hasConsent(),
                            color: s,
                            children: l
                        })
                    })
            })
        );
    }
    renderInvite() {
        let { invite: e, authBoxClassName: t } = this.props,
            {
                apiErrors: { username: n, global_name: i },
                globalName: s
            } = this.state,
            { subText: l, consentText: o } = this.renderConsentComponents(),
            a = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null,
            c = (e) => {
                this.setState({ globalName: e });
            };
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)(b.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: 'form',
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        a ? (0, r.jsx)('div', { className: er.divider }) : null,
                        (0, r.jsxs)(b.gO, {
                            className: a ? void 0 : es.marginTop40,
                            children: [
                                (0, r.jsx)(g.FormTitle, {
                                    error: ea(null != i ? i : n),
                                    children: ei.intl.string(ei.t['9AjdkJ'])
                                }),
                                (0, r.jsx)(g.Tooltip, {
                                    text: ei.intl.string(ei.t['hBB85+']),
                                    position: 'right',
                                    color: g.Tooltip.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: l } = e;
                                        return (0, r.jsx)(b.II, {
                                            autoFocus: !0,
                                            className: es.marginBottom8,
                                            name: 'global_name',
                                            value: s,
                                            placeholder: ei.intl.string(ei.t['09Q8ys']),
                                            onChange: c,
                                            error: null != n || null != i ? '' : null,
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        });
                                    }
                                }),
                                (0, r.jsx)(g.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ei.intl.string(ei.t['330TCQ'])
                                }),
                                this.renderInviteButton(),
                                l,
                                o,
                                ee.a
                                    ? null
                                    : (0, r.jsx)(b.zx, {
                                          look: b.zx.Looks.LINK,
                                          color: b.zx.Colors.LINK,
                                          onClick: this.handleGotoLogin,
                                          className: es.marginTop20,
                                          children: ei.intl.string(ei.t['r/jzu7'])
                                      })
                            ]
                        })
                    ]
                }),
                null != e && a
                    ? (0, r.jsx)(b.ZP, {
                          className: es.marginTop20,
                          children: (0, r.jsx)(S.y, {
                              guild: e.guild,
                              onlineCount: e.approximate_presence_count
                          })
                      })
                    : null
            ]
        });
    }
    renderErrorMessage() {
        let {
            apiErrors: { message: e }
        } = this.state;
        return 'string' != typeof e
            ? null
            : (0, r.jsx)(b.i_, {
                  className: o()(es.marginTop20, er.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: i, globalName: l, password: a, consent: c, parsedDateOfBirth: d, globalNameFocused: u, emailClientError: h, usernameClientError: f, passwordClientError: m, dateOfBirthClientError: p, registering: x, apiErrors: { email: E, username: I, global_name: N, password: v, date_of_birth: C } = {} } = this.state,
            {
                consentRequired: T,
                isMobileWebInviteRegistration: Z,
                uniqueUsernameRegistrationConfig: { suggestions: S },
                authBoxClassName: j,
                hasLoggedInAccounts: R,
                registrationCopyExperimentConfig: { hasCopyAboveButton: P }
            } = this.props,
            { subText: L, consentText: O } = this.renderConsentComponents(),
            y = this.renderErrorMessage(),
            w = (0, r.jsx)(g.Tooltip, {
                text: !c && T ? ei.intl.string(ei.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: es.marginTop20,
                        ...e,
                        children: (0, r.jsx)(b.zx, {
                            type: 'submit',
                            submitting: x,
                            disabled: !this.hasConsent() || this.state.isRateLimited,
                            children: ei.intl.string(ei.t['3PatS0'])
                        })
                    })
            }),
            B = async () => {
                this.setState({ usernameFocused: !0 }), S && l.length > 0 && !k.Z.wasRegistrationSuggestionFetched(l) && (await D.Z.fetchSuggestionsRegistration(l));
            },
            M = null != e ? (0, r.jsx)(s.Fragment, { children: e() }, 'custom-header') : (0, r.jsx)(b.Dx, { children: ei.intl.string(ei.t.wC4TlZ) }, 'title'),
            F = (0, r.jsxs)(b.gO, {
                className: es.marginTop20,
                children: [
                    (0, r.jsx)(b.II, {
                        autoFocus: !0,
                        className: es.marginBottom20,
                        label: ei.intl.string(ei.t.dI4d4e),
                        name: 'email',
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                            }),
                        error: null != h ? h : ea(E),
                        type: 'email',
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(b.II, {
                        label: ei.intl.string(ei.t['9AjdkJ']),
                        className: es.marginBottom20,
                        name: 'global_name',
                        value: l,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: ea(N),
                        maxLength: en.hy,
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => this.setState({ globalNameFocused: !0 }),
                        onBlur: () => this.setState({ globalNameFocused: !1 })
                    }),
                    (0, r.jsx)(G.Z, {
                        show: u,
                        top: -12,
                        bottom: 20,
                        children: (0, r.jsx)(g.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: ei.intl.string(ei.t['330TCQ'])
                        })
                    }),
                    (0, r.jsxs)('div', {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: B,
                        tabIndex: -1,
                        children: [
                            (0, r.jsx)(b.II, {
                                label: ei.intl.string(ei.t.TWzdWl),
                                className: es.marginBottom20,
                                name: 'username',
                                value: i,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                                    });
                                },
                                error: null != f ? f : ea(I),
                                setRef: (e) => {
                                    this.usernameRef = e;
                                },
                                required: !0
                            }),
                            this.renderUsernameValidation()
                        ]
                    }),
                    (0, r.jsx)(b.II, {
                        label: ei.intl.string(ei.t['CIGa+/']),
                        name: 'password',
                        value: a,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                            }),
                        error: null != m ? m : ea(v),
                        type: 'password',
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(_.Z, {
                        label: ei.intl.string(ei.t.rhBeKS),
                        wrapperClassName: es.marginTop20,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != p ? p : ea(C),
                        value: d,
                        required: !0
                    }),
                    P && L,
                    (0, r.jsx)(A.Z, {}),
                    w,
                    y,
                    O,
                    !P && L,
                    ee.a
                        ? null
                        : (0, r.jsx)(b.zx, {
                              look: Z ? b.zx.Looks.FILLED : b.zx.Looks.LINK,
                              color: Z ? b.zx.Colors.PRIMARY : b.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: es.marginTop20,
                              children: ei.intl.string(ei.t['r/jzu7'])
                          })
                ]
            });
        return t
            ? (0, r.jsx)(X.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: o()(j, er.horizontalAuthBox),
                  children: () => [
                      M,
                      (0, r.jsxs)(
                          'div',
                          {
                              className: er.flex,
                              children: [
                                  (0, r.jsx)(b.Dx, {
                                      className: er.createAccountTemplateHeader,
                                      children: ei.intl.string(ei.t.wC4TlZ)
                                  }),
                                  F
                              ]
                          },
                          'register-title'
                      )
                  ]
              })
            : (0, r.jsxs)(b.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: j,
                  children: [
                      R && !Z
                          ? (0, r.jsx)(b.zx, {
                                onClick: this.handleGotoLogin,
                                look: b.zx.Looks.LINK,
                                color: b.zx.Colors.PRIMARY,
                                className: er.goBackButton,
                                children: (0, r.jsxs)('div', {
                                    className: er.content,
                                    children: [
                                        (0, r.jsx)(g.ChevronSmallLeftIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: er.caret
                                        }),
                                        (0, r.jsx)(g.Text, {
                                            variant: 'text-md/normal',
                                            children: ei.intl.string(ei.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      M,
                      F
                  ]
              });
    }
    render() {
        let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
        if (e || this.hasError('date_of_birth')) return (0, r.jsx)(x.Z, {});
        let { invite: n, giftCode: i, guildTemplate: s } = this.props,
            l = null != n && null == n.guild && null == n.channel && null != n.inviter;
        return null == n || l || t
            ? null != s
                ? this.renderFull(() => (0, r.jsx)(P.Z, { guildTemplate: s }), !0)
                : null != i
                  ? this.renderFull(() => (0, r.jsx)(J.Z, { giftCode: i }))
                  : null != n && l && n.state === Q.r2o.RESOLVED && !t
                    ? this.renderFull(() =>
                          (0, r.jsx)(Y.Z, {
                              invite: n,
                              isRegister: !0
                          })
                      )
                    : this.renderFull()
            : n.state === Q.r2o.RESOLVING
              ? this.renderInviteResolving()
              : this.renderInvite();
    }
    constructor(e) {
        var t;
        super(e),
            el(this, 'emailRef', void 0),
            el(this, 'usernameRef', void 0),
            el(this, 'globalNameRef', void 0),
            el(this, 'passwordRef', void 0),
            el(this, 'dateOfBirthRef', s.createRef()),
            el(this, '_retryTimer', new h.V7()),
            el(this, 'handleGotoLogin', (e) => {
                let t;
                let { email: n } = this.state,
                    { giftCode: i, guildTemplate: r, invite: s, location: l, onLoginStart: o, redirectTo: c, transitionTo: d, isMobileWebInviteRegistration: u } = this.props;
                if (u) {
                    null == o || o(e);
                    return;
                }
                let h = null != l ? (0, a.parse)(l.search) : {};
                null != s ? (t = Q.Z5c.INVITE_LOGIN(s.code)) : null != i ? (t = Q.Z5c.GIFT_CODE_LOGIN(i.code)) : null != r ? (t = Q.Z5c.GUILD_TEMPLATE_LOGIN(r.code)) : null != c ? ((t = Q.Z5c.LOGIN), (h.redirect_to = c)) : ((t = Q.Z5c.LOGIN), '' !== n && (h = { email: n })), f.Z.loginReset(), d(t, { search: (0, a.stringify)(h) }), null == o || o(e), H.S.dispatch(Q.CkL.WAVE_EMPHASIZE);
            }),
            el(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: i, parsedDateOfBirth: r } = this.state,
                    { invite: s, consentRequired: l } = this.props;
                if (null !== l) {
                    if (null == s) {
                        let e = !1;
                        if ((0 === t.length && (this.setState({ emailClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), 0 === n.length && (this.setState({ usernameClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), 0 === i.length && (this.setState({ passwordClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), null == r && (this.setState({ dateOfBirthClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), e)) return;
                    }
                    this.handleRegister();
                }
            }),
            el(this, 'handleBirthdayChange', (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            el(this, 'renderUsernameValidation', () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    {
                        usernameSuggestion: i,
                        uniqueUsernameRegistrationConfig: { livecheckEnabled: s }
                    } = this.props;
                return (0, r.jsx)(eu, {
                    username: e,
                    suggestion: i,
                    livecheckEnabled: s,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: () => {
                        null != this.usernameRef && this.usernameRef.focus(), null != i && i.length > 0 && this.setState({ username: i });
                    }
                });
            });
        let n = null != e.location ? (0, a.parse)(e.location.search) : {};
        this.state = {
            email: null !== (t = n.email) && void 0 !== t ? t : '',
            username: '',
            globalName: '',
            password: '',
            parsedDateOfBirth: null,
            emailClientError: null,
            usernameClientError: null,
            passwordClientError: null,
            dateOfBirthClientError: null,
            consent: !e.consentRequired,
            consentRequiredProp: e.consentRequired,
            isRateLimited: !1,
            globalNameFocused: !1,
            usernameFocused: !1,
            registering: !1,
            apiErrors: {}
        };
    }
}
function ed(e) {
    let t = (0, u.cj)([z.Z, U.default, p.Z, y.Z, L.Z], () => ({
            consentRequired: z.Z.getAuthenticationConsentRequired(),
            authenticated: U.default.isAuthenticated(),
            isUnderage: p.Z.isUnderageAnonymous(),
            country: y.Z.getCountryCode(),
            hasLoggedInAccounts: L.Z.getHasLoggedInAccounts()
        })),
        n = (0, B.F4)(),
        i = (0, u.e7)([k.Z], () => k.Z.registrationUsernameSuggestion()),
        [l, o] = s.useState($.EW.FULL);
    return (
        (0, E.Z)(
            {
                type: d.ImpressionTypes.VIEW,
                name: d.ImpressionNames.USER_REGISTRATION,
                properties: {
                    impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW,
                    step: l
                }
            },
            {},
            [l]
        ),
        (0, r.jsx)(ec, {
            onChangeStep: (e) => o(e),
            registrationCopyExperimentConfig: N.Z.getCurrentConfig({ location: '0ba758_2' }, { autoTrackExposure: !1 }),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: i,
            ...e,
            ...t
        })
    );
}
function eu(e) {
    let t,
        { username: n, suggestion: i, globalName: s, livecheckEnabled: l, isUsernameFocused: o, onClickSuggestion: a } = e,
        d = (0, M.a)(n, l, !0),
        u = l && n.length > 0;
    return (
        (t = u
            ? (0, c.EQ)(d)
                  .with(
                      {
                          type: w.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(g.Text, {
                              className: er.messageNegative,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .with(
                      {
                          type: w.K.AVAILABLE,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(g.Text, {
                              className: er.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, r.jsx)(g.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: ei.intl.string(ei.t.z7c4bG)
                      })
                  )
            : null != i && i.length > 0 && s.length > 0
              ? (0, r.jsx)(g.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: ei.intl.format(ei.t.nDGqqq, {
                        suggestion: i,
                        nameOnClick: a
                    })
                })
              : (0, r.jsx)(g.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: ei.intl.string(ei.t.z7c4bG)
                })),
        (0, r.jsx)(G.Z, {
            show: (u && (null == d ? void 0 : d.type) === w.K.ERROR) || o,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
el(ec, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: (e) => n.g.location.assign(e)
});

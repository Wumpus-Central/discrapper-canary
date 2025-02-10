n.d(t, { Z: () => ed }), n(757143), n(47120), n(627341);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(593473),
    c = n(278074),
    d = n(990547),
    u = n(442837),
    h = n(846519),
    _ = n(481060),
    m = n(893776),
    g = n(881052),
    p = n(899370),
    f = n(224841),
    E = n(13430),
    x = n(213609),
    I = n(882037),
    C = n(201207),
    v = n(254942),
    N = n(481230),
    S = n(388905),
    T = n(853268),
    A = n(639946),
    b = n(616952),
    R = n(792766),
    Z = n(692483),
    O = n(100159),
    j = n(473855),
    L = n(726745),
    y = n(929809),
    P = n(541692),
    D = n(986197),
    k = n(135200),
    w = n(219496),
    B = n(794099),
    U = n(807369),
    M = n(180529),
    F = n(108427),
    G = n(314897),
    z = n(480294),
    V = n(896797),
    H = n(626135),
    W = n(585483),
    K = n(70956),
    Y = n(624138),
    q = n(481153),
    J = n(588705),
    X = n(163671),
    Q = n(981631),
    $ = n(355142),
    ee = n(188785),
    et = n(701476),
    en = n(801461),
    ei = n(388032),
    er = n(676116),
    el = n(814632);
function ea(e, t, n) {
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
    es = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(eo, ''))
                  .join('. ')
                  .trim()
            : e;
class ec extends (i = l.PureComponent) {
    get registrationSource() {
        let { giftCode: e, guildTemplate: t, invite: n } = this.props;
        if (null != e) return 'gift';
        if (null != t) return 'guild_template';
        if (null != n) {
            if (null != n.guild) return 'guild_invite';
            if (null != n.channel) return 'dm_invite';
            if (null != n.inviter) return 'friend_invite';
        }
        return null;
    }
    hasConsent() {
        let { consentRequired: e } = this.props,
            { consent: t } = this.state;
        return null != e && t;
    }
    componentDidMount() {
        this.redirectIfAuthenticated(), C.Z.trackExposure({ location: '0ba758_1' });
        let { giftCodeSKU: e, invite: t } = this.props;
        H.default.track(
            Q.rMx.REGISTER_VIEWED,
            {
                location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                registration_source: this.registrationSource,
                ...(null != e ? (0, O.Z)(e, !1, !1) : {})
            },
            { flush: !0 }
        ),
            null == this.props.consentRequired && m.Z.getLocationMetadata(),
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
        let { authenticated: n, isUnderage: i, invite: r, onChangeStep: l } = this.props,
            { apiErrors: a, parsedDateOfBirth: o } = this.state;
        (t.apiErrors !== a || t.parsedDateOfBirth !== o) &&
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
                          'number' == typeof a.retry_after &&
                          (this.setState({ isRateLimited: !0 }),
                          this._retryTimer.start(a.retry_after * K.Z.Millis.SECOND, () => {
                              this.setState({ isRateLimited: !1 });
                          }))),
            n && !e.authenticated && ((0, y.c)(et.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let s = $.EW.FULL;
        i || this.hasError('date_of_birth') ? (s = $.EW.AGE_GATE) : null != r && (null != r.guild || null != r.channel) && (s = $.EW.INVITE), l(s);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : V.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: i, consent: r, parsedDateOfBirth: l } = this.state,
            { invite: a, guildTemplate: o, giftCode: s, onRegister: c, usernameSuggestion: d, isMobileWebInviteRegistration: u } = this.props,
            h = null != a ? a.code : null,
            _ = null != s ? s.skuId : null,
            m = I.MD.getState(),
            p = (0, Y.Ew)(d) ? null : t === d,
            f = ee.a ? await (0, Z.K)(t) : t,
            E = ee.a ? await (0, Z.K)(n) : n;
        W.S.dispatch(Q.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {}
            });
        try {
            u || null == a
                ? await (0, N.R$)({
                      email: e,
                      username: f,
                      globalName: E,
                      consent: r,
                      password: i,
                      invite: h,
                      usedUsernameSuggestion: p,
                      guildTemplateCode: null == o ? void 0 : o.code,
                      giftCodeSKUId: _,
                      birthday: l,
                      promoEmailConsent: m.required ? m : null
                  })
                : await (0, N.ZP)({
                      consent: r,
                      invite: h,
                      giftCodeSKUId: _,
                      usedUsernameSuggestion: p,
                      globalName: E
                  }),
                null == c || c();
        } catch (t) {
            if ((this.setState({ registering: !1 }), !(t instanceof g.Hx))) return;
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
            l = null,
            a = null;
        return (
            t
                ? (a = (0, r.jsx)(T.Z, {
                      value: e,
                      onChange: (e) => this.setState({ consent: e }),
                      subText: ei.intl.format(ei.t.qMDAPz, {
                          termsURL: Q.EYA.TERMS,
                          privacyURL: Q.EYA.PRIVACY
                      })
                  }))
                : (l = (0, r.jsx)(S.i_, {
                      isProminent: !!i,
                      className: el.marginTop8,
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
                subText: l,
                consentText: a
            }
        );
    }
    renderInviteResolving() {
        let { authBoxClassName: e } = this.props,
            t = (e) => {
                this.setState({ globalName: e });
            },
            n = this.state.globalName;
        return (0, r.jsxs)(S.ZP, {
            className: e,
            children: [
                (0, r.jsx)(J.R, {}),
                (0, r.jsxs)(S.gO, {
                    className: el.marginTop40,
                    children: [
                        (0, r.jsx)(_.vwX, { children: ei.intl.string(ei.t.TWzdWl) }),
                        (0, r.jsx)(_.ua7, {
                            text: ei.intl.string(ei.t['hBB85+']),
                            position: 'right',
                            color: _.ua7.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: i, onMouseLeave: l } = e;
                                return (0, r.jsx)(S.II, {
                                    autoFocus: !0,
                                    className: el.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: ei.intl.string(ei.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: i,
                                    onMouseLeave: l
                                });
                            }
                        }),
                        (0, r.jsx)(S.zx, {
                            className: el.marginTop20,
                            disabled: !0,
                            children: ei.intl.string(ei.t['3PatS0'])
                        }),
                        (0, r.jsx)(S.i_, {
                            disabled: !0,
                            className: el.marginTop8,
                            children: ei.intl.format(ei.t['F+0zT0'], {
                                termsURL: Q.EYA.TERMS,
                                privacyURL: Q.EYA.PRIVACY
                            })
                        }),
                        ee.a
                            ? null
                            : (0, r.jsx)(S.zx, {
                                  look: S.zx.Looks.LINK,
                                  color: S.zx.Colors.LINK,
                                  disabled: !0,
                                  className: el.marginTop20,
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
            ? (0, r.jsx)(R.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, r.jsx)(A.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, r.jsx)(J.Z, { invite: e });
    }
    renderInviteButton() {
        let { invite: e, consentRequired: t } = this.props,
            { consent: n, registering: i } = this.state,
            l = S.zx.Colors.BRAND,
            a = ei.intl.string(ei.t['3PatS0']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((l = S.zx.Colors.GREEN), (a = ei.intl.string(ei.t['5UKyUl']))),
            (0, r.jsx)(_.ua7, {
                text: !n && t ? ei.intl.string(ei.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: el.marginTop20,
                        ...e,
                        children: (0, r.jsx)(S.zx, {
                            type: 'submit',
                            submitting: i,
                            disabled: !this.hasConsent(),
                            color: l,
                            children: a
                        })
                    })
            })
        );
    }
    renderInvite() {
        let { invite: e, authBoxClassName: t } = this.props,
            {
                apiErrors: { username: n, global_name: i },
                globalName: l
            } = this.state,
            { subText: a, consentText: o } = this.renderConsentComponents(),
            s = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null,
            c = (e) => {
                this.setState({ globalName: e });
            };
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)(S.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: 'form',
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        s ? (0, r.jsx)('div', { className: er.divider }) : null,
                        (0, r.jsxs)(S.gO, {
                            className: s ? void 0 : el.marginTop40,
                            children: [
                                (0, r.jsx)(_.vwX, {
                                    error: es(null != i ? i : n),
                                    children: ei.intl.string(ei.t['9AjdkJ'])
                                }),
                                (0, r.jsx)(_.ua7, {
                                    text: ei.intl.string(ei.t['hBB85+']),
                                    position: 'right',
                                    color: _.ua7.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: a } = e;
                                        return (0, r.jsx)(S.II, {
                                            autoFocus: !0,
                                            className: el.marginBottom8,
                                            name: 'global_name',
                                            value: l,
                                            placeholder: ei.intl.string(ei.t['09Q8ys']),
                                            onChange: c,
                                            error: null != n || null != i ? '' : null,
                                            onMouseEnter: t,
                                            onMouseLeave: a
                                        });
                                    }
                                }),
                                (0, r.jsx)(_.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ei.intl.string(ei.t['330TCQ'])
                                }),
                                this.renderInviteButton(),
                                a,
                                o,
                                ee.a
                                    ? null
                                    : (0, r.jsx)(S.zx, {
                                          look: S.zx.Looks.LINK,
                                          color: S.zx.Colors.LINK,
                                          onClick: this.handleGotoLogin,
                                          className: el.marginTop20,
                                          children: ei.intl.string(ei.t['r/jzu7'])
                                      })
                            ]
                        })
                    ]
                }),
                null != e && s
                    ? (0, r.jsx)(S.ZP, {
                          className: el.marginTop20,
                          children: (0, r.jsx)(R.y, {
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
            : (0, r.jsx)(S.i_, {
                  className: o()(el.marginTop20, er.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: i, globalName: a, password: s, consent: c, parsedDateOfBirth: d, globalNameFocused: u, emailClientError: h, usernameClientError: m, passwordClientError: g, dateOfBirthClientError: p, registering: f, apiErrors: { email: x, username: I, global_name: C, password: v, date_of_birth: N } = {} } = this.state,
            {
                consentRequired: T,
                isMobileWebInviteRegistration: A,
                uniqueUsernameRegistrationConfig: { suggestions: R },
                authBoxClassName: Z,
                hasLoggedInAccounts: O,
                registrationCopyExperimentConfig: { hasCopyAboveButton: j }
            } = this.props,
            { subText: L, consentText: y } = this.renderConsentComponents(),
            P = this.renderErrorMessage(),
            w = (0, r.jsx)(_.ua7, {
                text: !c && T ? ei.intl.string(ei.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: el.marginTop20,
                        ...e,
                        children: (0, r.jsx)(S.zx, {
                            type: 'submit',
                            submitting: f,
                            disabled: !this.hasConsent() || this.state.isRateLimited,
                            children: ei.intl.string(ei.t['3PatS0'])
                        })
                    })
            }),
            B = async () => {
                this.setState({ usernameFocused: !0 }), R && a.length > 0 && !k.Z.wasRegistrationSuggestionFetched(a) && (await D.Z.fetchSuggestionsRegistration(a));
            },
            U = null != e ? (0, r.jsx)(l.Fragment, { children: e() }, 'custom-header') : (0, r.jsx)(S.Dx, { children: ei.intl.string(ei.t.wC4TlZ) }, 'title'),
            F = (0, r.jsxs)(S.gO, {
                className: el.marginTop20,
                children: [
                    (0, r.jsx)(S.II, {
                        autoFocus: !0,
                        className: el.marginBottom20,
                        label: ei.intl.string(ei.t.dI4d4e),
                        name: 'email',
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                            }),
                        error: null != h ? h : es(x),
                        type: 'email',
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(S.II, {
                        label: ei.intl.string(ei.t['9AjdkJ']),
                        className: el.marginBottom20,
                        name: 'global_name',
                        value: a,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: es(C),
                        maxLength: en.hy,
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => this.setState({ globalNameFocused: !0 }),
                        onBlur: () => this.setState({ globalNameFocused: !1 })
                    }),
                    (0, r.jsx)(M.Z, {
                        show: u,
                        top: -12,
                        bottom: 20,
                        children: (0, r.jsx)(_.Text, {
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
                            (0, r.jsx)(S.II, {
                                label: ei.intl.string(ei.t.TWzdWl),
                                className: el.marginBottom20,
                                name: 'username',
                                value: i,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                                    });
                                },
                                error: null != m ? m : es(I),
                                setRef: (e) => {
                                    this.usernameRef = e;
                                },
                                required: !0
                            }),
                            this.renderUsernameValidation()
                        ]
                    }),
                    (0, r.jsx)(S.II, {
                        label: ei.intl.string(ei.t['CIGa+/']),
                        name: 'password',
                        value: s,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? ei.intl.string(ei.t.EkokLy) : null
                            }),
                        error: null != g ? g : es(v),
                        type: 'password',
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(E.Z, {
                        label: ei.intl.string(ei.t.rhBeKS),
                        wrapperClassName: el.marginTop20,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != p ? p : es(N),
                        value: d,
                        required: !0
                    }),
                    j && L,
                    (0, r.jsx)(b.Z, {}),
                    w,
                    P,
                    y,
                    !j && L,
                    ee.a
                        ? null
                        : (0, r.jsx)(S.zx, {
                              look: A ? S.zx.Looks.FILLED : S.zx.Looks.LINK,
                              color: A ? S.zx.Colors.PRIMARY : S.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: el.marginTop20,
                              children: ei.intl.string(ei.t['r/jzu7'])
                          })
                ]
            });
        return t
            ? (0, r.jsx)(X.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: o()(Z, er.horizontalAuthBox),
                  children: () => [
                      U,
                      (0, r.jsxs)(
                          'div',
                          {
                              className: er.flex,
                              children: [
                                  (0, r.jsx)(S.Dx, {
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
            : (0, r.jsxs)(S.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: Z,
                  children: [
                      O && !A
                          ? (0, r.jsx)(S.zx, {
                                onClick: this.handleGotoLogin,
                                look: S.zx.Looks.LINK,
                                color: S.zx.Colors.PRIMARY,
                                className: er.goBackButton,
                                children: (0, r.jsxs)('div', {
                                    className: er.content,
                                    children: [
                                        (0, r.jsx)(_.V7D, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: er.caret
                                        }),
                                        (0, r.jsx)(_.Text, {
                                            variant: 'text-md/normal',
                                            children: ei.intl.string(ei.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      U,
                      F
                  ]
              });
    }
    render() {
        let { isUnderage: e, isMobileWebInviteRegistration: t } = this.props;
        if (e || this.hasError('date_of_birth')) return (0, r.jsx)(f.Z, {});
        let { invite: n, giftCode: i, guildTemplate: l } = this.props,
            a = null != n && null == n.guild && null == n.channel && null != n.inviter;
        return null == n || a || t
            ? null != l
                ? this.renderFull(() => (0, r.jsx)(j.Z, { guildTemplate: l }), !0)
                : null != i
                  ? this.renderFull(() => (0, r.jsx)(q.Z, { giftCode: i }))
                  : null != n && a && n.state === Q.r2o.RESOLVED && !t
                    ? this.renderFull(() =>
                          (0, r.jsx)(J.Z, {
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
            ea(this, 'emailRef', void 0),
            ea(this, 'usernameRef', void 0),
            ea(this, 'globalNameRef', void 0),
            ea(this, 'passwordRef', void 0),
            ea(this, 'dateOfBirthRef', l.createRef()),
            ea(this, '_retryTimer', new h.V7()),
            ea(this, 'handleGotoLogin', (e) => {
                let t;
                let { email: n } = this.state,
                    { giftCode: i, guildTemplate: r, invite: l, location: a, onLoginStart: o, redirectTo: c, transitionTo: d, isMobileWebInviteRegistration: u } = this.props;
                if (u) {
                    null == o || o(e);
                    return;
                }
                let h = null != a ? (0, s.parse)(a.search) : {};
                null != l ? (t = Q.Z5c.INVITE_LOGIN(l.code)) : null != i ? (t = Q.Z5c.GIFT_CODE_LOGIN(i.code)) : null != r ? (t = Q.Z5c.GUILD_TEMPLATE_LOGIN(r.code)) : null != c ? ((t = Q.Z5c.LOGIN), (h.redirect_to = c)) : ((t = Q.Z5c.LOGIN), '' !== n && (h = { email: n })), m.Z.loginReset(), d(t, { search: (0, s.stringify)(h) }), null == o || o(e), W.S.dispatch(Q.CkL.WAVE_EMPHASIZE);
            }),
            ea(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: i, parsedDateOfBirth: r } = this.state,
                    { invite: l, consentRequired: a } = this.props;
                if (null !== a) {
                    if (null == l) {
                        let e = !1;
                        if ((0 === t.length && (this.setState({ emailClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), 0 === n.length && (this.setState({ usernameClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), 0 === i.length && (this.setState({ passwordClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), null == r && (this.setState({ dateOfBirthClientError: ei.intl.string(ei.t.EkokLy) }), (e = !0)), e)) return;
                    }
                    this.handleRegister();
                }
            }),
            ea(this, 'handleBirthdayChange', (e) => {
                this.setState({ parsedDateOfBirth: e }), null != e && this.setState({ dateOfBirthClientError: null });
            }),
            ea(this, 'renderUsernameValidation', () => {
                let { username: e, globalName: t, usernameFocused: n } = this.state,
                    {
                        usernameSuggestion: i,
                        uniqueUsernameRegistrationConfig: { livecheckEnabled: l }
                    } = this.props;
                return (0, r.jsx)(eu, {
                    username: e,
                    suggestion: i,
                    livecheckEnabled: l,
                    globalName: t,
                    isUsernameFocused: n,
                    onClickSuggestion: () => {
                        null != this.usernameRef && this.usernameRef.focus(), null != i && i.length > 0 && this.setState({ username: i });
                    }
                });
            });
        let n = null != e.location ? (0, s.parse)(e.location.search) : {};
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
    let t = (0, u.cj)([z.Z, G.default, p.Z, P.Z, L.Z], () => ({
            consentRequired: z.Z.getAuthenticationConsentRequired(),
            authenticated: G.default.isAuthenticated(),
            isUnderage: p.Z.isUnderageAnonymous(),
            country: P.Z.getCountryCode(),
            hasLoggedInAccounts: L.Z.getHasLoggedInAccounts()
        })),
        n = (0, B.F4)(),
        i = (0, u.e7)([k.Z], () => k.Z.registrationUsernameSuggestion()),
        [a, o] = l.useState($.EW.FULL);
    return (
        (0, x.Z)(
            {
                type: d.ImpressionTypes.VIEW,
                name: d.ImpressionNames.USER_REGISTRATION,
                properties: {
                    impression_group: d.ImpressionGroups.USER_REGISTRATION_FLOW,
                    step: a
                }
            },
            {},
            [a]
        ),
        (0, r.jsx)(ec, {
            onChangeStep: (e) => o(e),
            registrationCopyExperimentConfig: C.Z.getCurrentConfig({ location: '0ba758_2' }, { autoTrackExposure: !1 }),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: i,
            ...e,
            ...t
        })
    );
}
function eu(e) {
    let t,
        { username: n, suggestion: i, globalName: l, livecheckEnabled: a, isUsernameFocused: o, onClickSuggestion: s } = e,
        d = (0, U.a)(n, a, !0),
        u = a && n.length > 0;
    return (
        (t = u
            ? (0, c.EQ)(d)
                  .with(
                      {
                          type: w.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(_.Text, {
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
                          (0, r.jsx)(_.Text, {
                              className: er.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, r.jsx)(_.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: ei.intl.string(ei.t.z7c4bG)
                      })
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, r.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: ei.intl.format(ei.t.nDGqqq, {
                        suggestion: i,
                        nameOnClick: s
                    })
                })
              : (0, r.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: ei.intl.string(ei.t.z7c4bG)
                })),
        (0, r.jsx)(M.Z, {
            show: (u && (null == d ? void 0 : d.type) === w.K.ERROR) || o,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
ea(ec, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: (e) => n.g.location.assign(e)
});

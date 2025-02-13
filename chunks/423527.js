n.d(t, { Z: () => ec }), n(757143), n(47120), n(627341);
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
    v = n(254942),
    C = n(481230),
    N = n(388905),
    S = n(853268),
    T = n(639946),
    A = n(616952),
    b = n(792766),
    R = n(692483),
    Z = n(100159),
    O = n(473855),
    j = n(726745),
    L = n(929809),
    P = n(541692),
    y = n(986197),
    D = n(135200),
    k = n(219496),
    w = n(794099),
    B = n(807369),
    U = n(180529),
    M = n(108427),
    G = n(314897),
    F = n(480294),
    z = n(896797),
    V = n(626135),
    H = n(585483),
    K = n(70956),
    W = n(624138),
    Y = n(481153),
    q = n(588705),
    J = n(163671),
    X = n(981631),
    Q = n(355142),
    $ = n(188785),
    ee = n(701476),
    et = n(801461),
    en = n(388032),
    ei = n(148116),
    er = n(483938);
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
let ea = /\.$/,
    eo = (e) =>
        Array.isArray(e)
            ? e
                  .map((e) => e.replace(ea, ''))
                  .join('. ')
                  .trim()
            : e;
class es extends (i = l.PureComponent) {
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
        this.redirectIfAuthenticated();
        let { giftCodeSKU: e, invite: t } = this.props;
        V.default.track(
            X.rMx.REGISTER_VIEWED,
            {
                location: null != t ? 'Invite Register Page' : 'Non-Invite Register Page',
                registration_source: this.registrationSource,
                ...(null != e ? (0, Z.Z)(e, !1, !1) : {})
            },
            { flush: !0 }
        ),
            null == this.props.consentRequired && m.Z.getLocationMetadata(),
            (0, M.e)('register');
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
            n && !e.authenticated && ((0, L.c)(ee.M5.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
        let s = Q.EW.FULL;
        i || this.hasError('date_of_birth') ? (s = Q.EW.AGE_GATE) : null != r && (null != r.guild || null != r.channel) && (s = Q.EW.INVITE), l(s);
    }
    redirectIfAuthenticated() {
        let { authenticated: e, transitionTo: t, redirectTo: n } = this.props;
        e && t(null != n ? n : z.Z.defaultRoute);
    }
    async handleRegister() {
        let { email: e, username: t, globalName: n, password: i, consent: r, parsedDateOfBirth: l } = this.state,
            { invite: a, guildTemplate: o, giftCode: s, onRegister: c, usernameSuggestion: d, isMobileWebInviteRegistration: u } = this.props,
            h = null != a ? a.code : null,
            _ = null != s ? s.skuId : null,
            m = I.MD.getState(),
            p = (0, W.Ew)(d) ? null : t === d,
            f = $.a ? await (0, R.K)(t) : t,
            E = $.a ? await (0, R.K)(n) : n;
        H.S.dispatch(X.CkL.WAVE_EMPHASIZE),
            this.setState({
                registering: !0,
                apiErrors: {}
            });
        try {
            u || null == a
                ? await (0, C.R$)({
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
                : await (0, C.ZP)({
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
            { consentRequired: t } = this.props,
            n = null,
            i = null;
        return (
            t
                ? (i = (0, r.jsx)(S.Z, {
                      value: e,
                      onChange: (e) => this.setState({ consent: e }),
                      subText: en.intl.format(en.t.qMDAPz, {
                          termsURL: X.EYA.TERMS,
                          privacyURL: X.EYA.PRIVACY
                      })
                  }))
                : (n = (0, r.jsx)(N.i_, {
                      className: er.marginTop8,
                      children: en.intl.format(en.t['F+0zT0'], {
                          termsURL: X.EYA.TERMS,
                          privacyURL: X.EYA.PRIVACY
                      })
                  })),
            {
                subText: n,
                consentText: i
            }
        );
    }
    renderInviteResolving() {
        let { authBoxClassName: e } = this.props,
            t = (e) => {
                this.setState({ globalName: e });
            },
            n = this.state.globalName;
        return (0, r.jsxs)(N.ZP, {
            className: e,
            children: [
                (0, r.jsx)(q.R, {}),
                (0, r.jsxs)(N.gO, {
                    className: er.marginTop40,
                    children: [
                        (0, r.jsx)(_.vwX, { children: en.intl.string(en.t.TWzdWl) }),
                        (0, r.jsx)(_.ua7, {
                            text: en.intl.string(en.t['hBB85+']),
                            position: 'right',
                            color: _.ua7.Colors.BRAND,
                            children: (e) => {
                                let { onMouseEnter: i, onMouseLeave: l } = e;
                                return (0, r.jsx)(N.II, {
                                    autoFocus: !0,
                                    className: er.marginBottom8,
                                    name: 'username',
                                    value: n,
                                    placeholder: en.intl.string(en.t['09Q8ys']),
                                    onChange: t,
                                    onMouseEnter: i,
                                    onMouseLeave: l
                                });
                            }
                        }),
                        (0, r.jsx)(N.zx, {
                            className: er.marginTop20,
                            disabled: !0,
                            children: en.intl.string(en.t['3PatS0'])
                        }),
                        (0, r.jsx)(N.i_, {
                            disabled: !0,
                            className: er.marginTop8,
                            children: en.intl.format(en.t['F+0zT0'], {
                                termsURL: X.EYA.TERMS,
                                privacyURL: X.EYA.PRIVACY
                            })
                        }),
                        $.a
                            ? null
                            : (0, r.jsx)(N.zx, {
                                  look: N.zx.Looks.LINK,
                                  color: N.zx.Colors.LINK,
                                  disabled: !0,
                                  className: er.marginTop20,
                                  children: en.intl.string(en.t['r/jzu7'])
                              })
                    ]
                })
            ]
        });
    }
    renderInviteHeader() {
        let { invite: e } = this.props;
        return (null == e ? void 0 : e.stage_instance) != null && null != e.guild
            ? (0, r.jsx)(b.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : (null == e ? void 0 : e.guild_scheduled_event) != null
              ? (0, r.jsx)(T.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, r.jsx)(q.Z, { invite: e });
    }
    renderInviteButton() {
        let { invite: e, consentRequired: t } = this.props,
            { consent: n, registering: i } = this.state,
            l = N.zx.Colors.BRAND,
            a = en.intl.string(en.t['3PatS0']);
        return (
            (null == e ? void 0 : e.stage_instance) != null && ((l = N.zx.Colors.GREEN), (a = en.intl.string(en.t['5UKyUl']))),
            (0, r.jsx)(_.ua7, {
                text: !n && t ? en.intl.string(en.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: er.marginTop20,
                        ...e,
                        children: (0, r.jsx)(N.zx, {
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
                (0, r.jsxs)(N.ZP, {
                    onSubmit: this.handleSubmit,
                    tag: 'form',
                    className: t,
                    children: [
                        this.renderInviteHeader(),
                        s ? (0, r.jsx)('div', { className: ei.divider }) : null,
                        (0, r.jsxs)(N.gO, {
                            className: s ? void 0 : er.marginTop40,
                            children: [
                                (0, r.jsx)(_.vwX, {
                                    error: eo(null != i ? i : n),
                                    children: en.intl.string(en.t['9AjdkJ'])
                                }),
                                (0, r.jsx)(_.ua7, {
                                    text: en.intl.string(en.t['hBB85+']),
                                    position: 'right',
                                    color: _.ua7.Colors.BRAND,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: a } = e;
                                        return (0, r.jsx)(N.II, {
                                            autoFocus: !0,
                                            className: er.marginBottom8,
                                            name: 'global_name',
                                            value: l,
                                            placeholder: en.intl.string(en.t['09Q8ys']),
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
                                    children: en.intl.string(en.t['330TCQ'])
                                }),
                                this.renderInviteButton(),
                                a,
                                o,
                                $.a
                                    ? null
                                    : (0, r.jsx)(N.zx, {
                                          look: N.zx.Looks.LINK,
                                          color: N.zx.Colors.LINK,
                                          onClick: this.handleGotoLogin,
                                          className: er.marginTop20,
                                          children: en.intl.string(en.t['r/jzu7'])
                                      })
                            ]
                        })
                    ]
                }),
                null != e && s
                    ? (0, r.jsx)(N.ZP, {
                          className: er.marginTop20,
                          children: (0, r.jsx)(b.y, {
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
            : (0, r.jsx)(N.i_, {
                  className: o()(er.marginTop20, ei.errorMessage),
                  children: e
              });
    }
    renderFull(e, t) {
        let { email: n, username: i, globalName: a, password: s, consent: c, parsedDateOfBirth: d, globalNameFocused: u, emailClientError: h, usernameClientError: m, passwordClientError: g, dateOfBirthClientError: p, registering: f, apiErrors: { email: x, username: I, global_name: v, password: C, date_of_birth: S } = {} } = this.state,
            {
                consentRequired: T,
                isMobileWebInviteRegistration: b,
                uniqueUsernameRegistrationConfig: { suggestions: R },
                authBoxClassName: Z,
                hasLoggedInAccounts: O
            } = this.props,
            { subText: j, consentText: L } = this.renderConsentComponents(),
            P = this.renderErrorMessage(),
            k = (0, r.jsx)(_.ua7, {
                text: !c && T ? en.intl.string(en.t.AY4IVF) : null,
                children: (e) =>
                    (0, r.jsx)('div', {
                        className: er.marginTop20,
                        ...e,
                        children: (0, r.jsx)(N.zx, {
                            type: 'submit',
                            submitting: f,
                            disabled: !this.hasConsent() || this.state.isRateLimited,
                            children: en.intl.string(en.t['3PatS0'])
                        })
                    })
            }),
            w = async () => {
                this.setState({ usernameFocused: !0 }), R && a.length > 0 && !D.Z.wasRegistrationSuggestionFetched(a) && (await y.Z.fetchSuggestionsRegistration(a));
            },
            B = null != e ? (0, r.jsx)(l.Fragment, { children: e() }, 'custom-header') : (0, r.jsx)(N.Dx, { children: en.intl.string(en.t.wC4TlZ) }, 'title'),
            M = (0, r.jsxs)(N.gO, {
                className: er.marginTop20,
                children: [
                    (0, r.jsx)(N.II, {
                        autoFocus: !0,
                        className: er.marginBottom20,
                        label: en.intl.string(en.t.dI4d4e),
                        name: 'email',
                        value: n,
                        onChange: (e) =>
                            this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
                            }),
                        error: null != h ? h : eo(x),
                        type: 'email',
                        setRef: (e) => {
                            this.emailRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(N.II, {
                        label: en.intl.string(en.t['9AjdkJ']),
                        className: er.marginBottom20,
                        name: 'global_name',
                        value: a,
                        onChange: (e) => this.setState({ globalName: e }),
                        error: eo(v),
                        maxLength: et.hy,
                        setRef: (e) => {
                            this.globalNameRef = e;
                        },
                        onFocus: () => this.setState({ globalNameFocused: !0 }),
                        onBlur: () => this.setState({ globalNameFocused: !1 })
                    }),
                    (0, r.jsx)(U.Z, {
                        show: u,
                        top: -12,
                        bottom: 20,
                        children: (0, r.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: en.intl.string(en.t['330TCQ'])
                        })
                    }),
                    (0, r.jsxs)('div', {
                        onBlur: () => this.setState({ usernameFocused: !1 }),
                        onFocus: w,
                        tabIndex: -1,
                        children: [
                            (0, r.jsx)(N.II, {
                                label: en.intl.string(en.t.TWzdWl),
                                className: er.marginBottom20,
                                name: 'username',
                                value: i,
                                onChange: (e) => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
                                    });
                                },
                                error: null != m ? m : eo(I),
                                setRef: (e) => {
                                    this.usernameRef = e;
                                },
                                required: !0
                            }),
                            this.renderUsernameValidation()
                        ]
                    }),
                    (0, r.jsx)(N.II, {
                        label: en.intl.string(en.t['CIGa+/']),
                        name: 'password',
                        value: s,
                        onChange: (e) =>
                            this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? en.intl.string(en.t.EkokLy) : null
                            }),
                        error: null != g ? g : eo(C),
                        type: 'password',
                        setRef: (e) => {
                            this.passwordRef = e;
                        },
                        required: !0
                    }),
                    (0, r.jsx)(E.Z, {
                        label: en.intl.string(en.t.rhBeKS),
                        wrapperClassName: er.marginTop20,
                        name: 'date_of_birth',
                        onChange: this.handleBirthdayChange,
                        ref: this.dateOfBirthRef,
                        error: null != p ? p : eo(S),
                        value: d,
                        required: !0
                    }),
                    (0, r.jsx)(A.Z, {}),
                    k,
                    P,
                    L,
                    j,
                    $.a
                        ? null
                        : (0, r.jsx)(N.zx, {
                              look: b ? N.zx.Looks.FILLED : N.zx.Looks.LINK,
                              color: b ? N.zx.Colors.PRIMARY : N.zx.Colors.LINK,
                              onClick: this.handleGotoLogin,
                              className: er.marginTop20,
                              children: en.intl.string(en.t['r/jzu7'])
                          })
                ]
            });
        return t
            ? (0, r.jsx)(J.Z, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: o()(Z, ei.horizontalAuthBox),
                  children: () => [
                      B,
                      (0, r.jsxs)(
                          'div',
                          {
                              className: ei.flex,
                              children: [
                                  (0, r.jsx)(N.Dx, {
                                      className: ei.createAccountTemplateHeader,
                                      children: en.intl.string(en.t.wC4TlZ)
                                  }),
                                  M
                              ]
                          },
                          'register-title'
                      )
                  ]
              })
            : (0, r.jsxs)(N.ZP, {
                  onSubmit: this.handleSubmit,
                  tag: 'form',
                  className: Z,
                  children: [
                      O && !b
                          ? (0, r.jsx)(N.zx, {
                                onClick: this.handleGotoLogin,
                                look: N.zx.Looks.LINK,
                                color: N.zx.Colors.PRIMARY,
                                className: ei.goBackButton,
                                children: (0, r.jsxs)('div', {
                                    className: ei.content,
                                    children: [
                                        (0, r.jsx)(_.V7D, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: ei.caret
                                        }),
                                        (0, r.jsx)(_.Text, {
                                            variant: 'text-md/normal',
                                            children: en.intl.string(en.t['1MrpWF'])
                                        })
                                    ]
                                })
                            })
                          : null,
                      B,
                      M
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
                ? this.renderFull(() => (0, r.jsx)(O.Z, { guildTemplate: l }), !0)
                : null != i
                  ? this.renderFull(() => (0, r.jsx)(Y.Z, { giftCode: i }))
                  : null != n && a && n.state === X.r2o.RESOLVED && !t
                    ? this.renderFull(() =>
                          (0, r.jsx)(q.Z, {
                              invite: n,
                              isRegister: !0
                          })
                      )
                    : this.renderFull()
            : n.state === X.r2o.RESOLVING
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
            el(this, 'dateOfBirthRef', l.createRef()),
            el(this, '_retryTimer', new h.V7()),
            el(this, 'handleGotoLogin', (e) => {
                let t;
                let { email: n } = this.state,
                    { giftCode: i, guildTemplate: r, invite: l, location: a, onLoginStart: o, redirectTo: c, transitionTo: d, isMobileWebInviteRegistration: u } = this.props;
                if (u) {
                    null == o || o(e);
                    return;
                }
                let h = null != a ? (0, s.parse)(a.search) : {};
                null != l ? (t = X.Z5c.INVITE_LOGIN(l.code)) : null != i ? (t = X.Z5c.GIFT_CODE_LOGIN(i.code)) : null != r ? (t = X.Z5c.GUILD_TEMPLATE_LOGIN(r.code)) : null != c ? ((t = X.Z5c.LOGIN), (h.redirect_to = c)) : ((t = X.Z5c.LOGIN), '' !== n && (h = { email: n })), m.Z.loginReset(), d(t, { search: (0, s.stringify)(h) }), null == o || o(e), H.S.dispatch(X.CkL.WAVE_EMPHASIZE);
            }),
            el(this, 'handleSubmit', (e) => {
                null == e || e.preventDefault();
                let { email: t, username: n, password: i, parsedDateOfBirth: r } = this.state,
                    { invite: l, consentRequired: a } = this.props;
                if (null !== a) {
                    if (null == l) {
                        let e = !1;
                        if ((0 === t.length && (this.setState({ emailClientError: en.intl.string(en.t.EkokLy) }), (e = !0)), 0 === n.length && (this.setState({ usernameClientError: en.intl.string(en.t.EkokLy) }), (e = !0)), 0 === i.length && (this.setState({ passwordClientError: en.intl.string(en.t.EkokLy) }), (e = !0)), null == r && (this.setState({ dateOfBirthClientError: en.intl.string(en.t.EkokLy) }), (e = !0)), e)) return;
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
                        uniqueUsernameRegistrationConfig: { livecheckEnabled: l }
                    } = this.props;
                return (0, r.jsx)(ed, {
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
function ec(e) {
    let t = (0, u.cj)([F.Z, G.default, p.Z, P.Z, j.Z], () => ({
            consentRequired: F.Z.getAuthenticationConsentRequired(),
            authenticated: G.default.isAuthenticated(),
            isUnderage: p.Z.isUnderageAnonymous(),
            country: P.Z.getCountryCode(),
            hasLoggedInAccounts: j.Z.getHasLoggedInAccounts()
        })),
        n = (0, w.F4)(),
        i = (0, u.e7)([D.Z], () => D.Z.registrationUsernameSuggestion()),
        [a, o] = l.useState(Q.EW.FULL);
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
        (0, r.jsx)(es, {
            onChangeStep: (e) => o(e),
            uniqueUsernameRegistrationConfig: n,
            usernameSuggestion: i,
            ...e,
            ...t
        })
    );
}
function ed(e) {
    let t,
        { username: n, suggestion: i, globalName: l, livecheckEnabled: a, isUsernameFocused: o, onClickSuggestion: s } = e,
        d = (0, B.a)(n, a, !0),
        u = a && n.length > 0;
    return (
        (t = u
            ? (0, c.EQ)(d)
                  .with(
                      {
                          type: k.K.ERROR,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(_.Text, {
                              className: ei.messageNegative,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .with(
                      {
                          type: k.K.AVAILABLE,
                          message: c.P.select()
                      },
                      (e) =>
                          (0, r.jsx)(_.Text, {
                              className: ei.messagePositive,
                              variant: 'text-sm/normal',
                              children: e
                          })
                  )
                  .otherwise(() =>
                      (0, r.jsx)(_.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-normal',
                          children: en.intl.string(en.t.z7c4bG)
                      })
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, r.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: en.intl.format(en.t.nDGqqq, {
                        suggestion: i,
                        nameOnClick: s
                    })
                })
              : (0, r.jsx)(_.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    children: en.intl.string(en.t.z7c4bG)
                })),
        (0, r.jsx)(U.Z, {
            show: (u && (null == d ? void 0 : d.type) === k.K.ERROR) || o,
            top: -12,
            bottom: 20,
            children: t
        })
    );
}
el(es, 'defaultProps', {
    giftCodeResolved: !1,
    transitionTo: (e) => n.g.location.assign(e)
});

n.d(t, {
    R$: () => f,
    ZP: () => m
});
var r = n(913527),
    i = n.n(r),
    l = n(990547),
    s = n(570140),
    a = n(479531),
    o = n(771308),
    c = n(314897),
    u = n(626135),
    d = n(573261),
    h = n(959776),
    p = n(981631),
    g = n(723359);
function m(e) {
    var t,
        n,
        { invite: r = null, giftCodeSKUId: i = null } = e;
    return f(
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        ((r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r));
                    }));
            }
            return e;
        })(
            {},
            (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['invite', 'giftCodeSKUId'])
        )),
        (n = n =
            {
                invite: r,
                giftCodeSKUId: i
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
function f(e) {
    let { email: t, phoneToken: n, username: r, globalName: m, consent: f, password: _, guildTemplateCode: x, birthday: b, invite: E = null, giftCodeSKUId: v = null, promoEmailConsent: I = null, usedUsernameSuggestion: j = null } = e;
    if ((s.Z.dispatch({ type: 'REGISTER' }), null != b)) {
        ((0, h.Z)(b, p.jXE.REGISTER),
            u.default.track(p.rMx.AGE_GATE_ACTION, {
                source: g.L0.REGISTER,
                action: g.Al.AGE_GATE_SUBMITTED
            }));
        let e = i()().diff(b, 'years');
        e < 13 || u.default.track(p.rMx.USER_AGE_SUBMITTED, { age_bucket: e >= 13 && e <= 17 ? '13-17' : e >= 18 && e <= 22 ? '18-22' : '23+' });
    }
    return d.Z.post({
        url: p.ANM.REGISTER,
        body: {
            fingerprint: c.default.getFingerprint(),
            email: t,
            username: r,
            global_name: m,
            password: _,
            invite: E,
            consent: f,
            phone_token: n,
            date_of_birth: null == b ? void 0 : b.format('YYYY-MM-DD'),
            gift_code_sku_id: v,
            guild_template_code: x,
            promotional_email_opt_in: null == I ? void 0 : I.checked
        },
        trackedActionData: {
            event: l.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: E,
                used_username_suggestion: j,
                promotional_email_opt_in: null == I ? void 0 : I.checked,
                promotional_email_pre_checked: null == I ? void 0 : I.preChecked,
                was_unique_username: !0
            }
        },
        rejectWithError: !1
    }).then(
        (e) => {
            (s.Z.dispatch({
                type: 'REGISTER_SUCCESS',
                token: e.body.token
            }),
                u.default.track(p.rMx.AGE_GATE_ACTION, {
                    source: g.L0.REGISTER,
                    action: g.Al.AGE_GATE_SUCCESS
                }));
        },
        (e) => {
            let t = new a.Z(e);
            throw (
                null != t.getFieldErrors('date_of_birth') && o.wE(g.L0.REGISTER),
                u.default.track(p.rMx.REGISTER_SUBMIT_ERRORED, {
                    is_unique_username_registration: !0,
                    email_error_reason: t.getFirstFieldErrorMessage('email'),
                    phone_error_reason: t.getFirstFieldErrorMessage('phone_token'),
                    password_error_reason: t.getFirstFieldErrorMessage('password'),
                    username_error_reason: t.getFirstFieldErrorMessage('username'),
                    global_name_error_reason: t.getFirstFieldErrorMessage('global_name'),
                    date_of_birth_error_reason: t.getFirstFieldErrorMessage('date_of_birth'),
                    promotional_email_opt_in_error_reason: t.getFirstFieldErrorMessage('promotional_email_opt_in'),
                    fingerprint_error_reason: t.getFirstFieldErrorMessage('fingerprint'),
                    invite_error_reason: t.getFirstFieldErrorMessage('invite'),
                    gift_code_sku_id_error_reason: t.getFirstFieldErrorMessage('gift_code_sku_id'),
                    guild_template_code_error_reason: t.getFirstFieldErrorMessage('guild_template_code'),
                    consent_error_reason: t.getFirstFieldErrorMessage('consent'),
                    generic_error_reason: t.getAnyErrorMessage()
                }),
                t
            );
        }
    );
}

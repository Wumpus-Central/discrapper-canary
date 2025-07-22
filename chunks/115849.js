(n.d(t, { Z: () => T }), n(388685), n(781311), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(755721),
    u = n(481060),
    d = n(194359),
    p = n(313201),
    h = n(657682),
    f = n(981631),
    g = n(420212),
    m = n(388032),
    b = n(28898),
    _ = n(20493);
function E(e) {
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
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = n(349181),
    I = {
        canSend: !1,
        hint: null,
        success: null,
        error: null
    },
    v = (0, p.hQ)(),
    C = ''.concat(v, '-decription'),
    S = ''.concat(v, '-error');
function N(e, t) {
    switch (t.type) {
        case 'RESET':
            return I;
        case 'SUCCESS':
            return O(E({}, I), { success: t.text });
        case 'HINT':
            return O(E({}, I), {
                canSend: !0,
                hint: t.text
            });
        case 'ERROR':
            return O(E({}, e), {
                canSend: !0,
                error: t.text
            });
    }
}
function T(e) {
    let { placeholder: t = m.intl.string(m.t['Rn/sLi']) } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        [o, p] = i.useReducer(N, I),
        { canSend: E, hint: O, success: T, error: P } = o;
    return (
        i.useEffect(() => {
            null != T && (s()(null != n.current, 'Input is submitting when not mounted'), (n.current.value = ''), n.current.focus());
        }, [T, n]),
        (0, r.jsxs)('form', {
            onSubmit: (e) => {
                (e.preventDefault(), s()(null != n.current, 'Input is submitted when not mounted'));
                let t = n.current.value.trim();
                !t.includes('#') && t.startsWith('@') && (t = t.substring(1));
                let r = (0, h.Zy)(t);
                if (null != r)
                    return void p({
                        type: 'ERROR',
                        text: r
                    });
                d.Z.sendRequest({
                    discordTag: t,
                    context: { location: 'Add Friend' }
                }).then(
                    () =>
                        p({
                            type: 'SUCCESS',
                            text: m.intl.format(m.t.Rtl1Eh, { discordTag: t })
                        }),
                    (e) => {
                        var n;
                        return p({
                            type: 'ERROR',
                            text: (0, h.NF)(null == (n = e.body) ? void 0 : n.code, t)
                        });
                    }
                );
            },
            autoComplete: 'off',
            children: [
                (0, r.jsxs)('div', {
                    className: b.addFriendWumpusWrapper,
                    children: [
                        (0, r.jsx)(u.R94, {
                            id: C,
                            type: u.R94.Types.DESCRIPTION,
                            children: (0, r.jsx)(u.Text, {
                                tag: 'div',
                                variant: 'heading-md/normal',
                                children: m.intl.string(m.t['Rn/sLi'])
                            })
                        }),
                        (0, r.jsx)('img', {
                            src: y,
                            alt: 'Wumpus Waving'
                        })
                    ]
                }),
                (0, r.jsx)(u.tEY, {
                    focusTarget: n,
                    ringTarget: l,
                    ringClassName: b.ring,
                    children: (0, r.jsxs)('div', {
                        ref: l,
                        className: a()(b.addFriendInputWrapper, {
                            [b.success]: T,
                            [b.error]: P
                        }),
                        children: [
                            (0, r.jsx)(c.Is, {
                                id: v,
                                inputRef: n,
                                className: b.addFriendInput,
                                inputClassName: b.input,
                                onKeyPress: (e) => {
                                    let t = e.currentTarget.value;
                                    if (e.key !== g.mR.Enter && t.includes('#')) {
                                        s()(null != n.current, 'Input is handling keypress when not mounted');
                                        let r = t.indexOf('#'),
                                            i = n.current.selectionStart,
                                            l = e.key === g.mR.Backspace || e.key === g.mR.ArrowRight || e.key === g.mR.ArrowLeft,
                                            a = e.which >= 48 && e.which <= 57;
                                        null != i && i > r && /^(.+?#\d{4})$/.test(t) && !l ? e.preventDefault() : null == i || !(i > r) || a || l || e.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) return void p({ type: 'RESET' });
                                    let t = '',
                                        [, n] = e.split('#');
                                    (null != n && (t = e + f.LYt.slice(null != n ? n.length + 1 : 0)),
                                        p({
                                            type: 'HINT',
                                            text: t
                                        }));
                                },
                                maxLength: 37,
                                autoFocus: !0,
                                autoComplete: 'off',
                                name: 'add-friend',
                                'data-form-type': 'other',
                                'data-lpignore': !0,
                                'data-1p-ignore': !0,
                                placeholder: t,
                                'aria-label': t,
                                'aria-invalid': null != P || void 0,
                                'aria-describedby': null != P ? S : C
                            }),
                            null != O &&
                                (0, r.jsx)('div', {
                                    className: b.addFriendHint,
                                    'aria-hidden': !0,
                                    children: O
                                }),
                            (0, r.jsx)(u.zxk, {
                                variant: 'primary',
                                size: 'sm',
                                text: m.intl.string(m.t['PMsq/f']),
                                disabled: !E,
                                type: 'submit'
                            })
                        ]
                    })
                }),
                null != P &&
                    (0, r.jsx)(u.R94, {
                        role: 'alert',
                        id: S,
                        type: u.R94.Types.ERROR,
                        className: _.marginTop8,
                        children: P
                    }),
                null != T &&
                    (0, r.jsx)(u.R94, {
                        role: 'status',
                        type: u.R94.Types.SUCCESS,
                        className: _.marginTop8,
                        children: T
                    })
            ]
        })
    );
}

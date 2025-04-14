n.d(t, { Z: () => T }), n(388685), n(781311), n(35282);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(481060),
    u = n(194359),
    d = n(313201),
    p = n(540059),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
let N = n(349181),
    y = {
        canSend: !1,
        hint: null,
        success: null,
        error: null
    },
    I = (0, d.hQ)(),
    v = ''.concat(I, '-decription'),
    C = ''.concat(I, '-error');
function S(e, t) {
    switch (t.type) {
        case 'RESET':
            return y;
        case 'SUCCESS':
            return O(E({}, y), { success: t.text });
        case 'HINT':
            return O(E({}, y), {
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
    let { placeholder: t = m.NW.string(m.t['Rn/sLi']) } = e,
        n = i.createRef(),
        l = i.createRef(),
        [o, d] = i.useReducer(S, y),
        { canSend: E, hint: O, success: T, error: P } = o,
        j = (0, p.Q3)('AddFriendInput');
    return (
        i.useEffect(() => {
            null != T && (s()(null != n.current, 'Input is submitting when not mounted'), (n.current.value = ''), n.current.focus());
        }, [T, n]),
        (0, r.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(), s()(null != n.current, 'Input is submitted when not mounted');
                let t = n.current.value.trim();
                !t.includes('#') && t.startsWith('@') && (t = t.substring(1));
                let r = (0, h.Zy)(t);
                if (null != r)
                    return void d({
                        type: 'ERROR',
                        text: r
                    });
                u.Z.sendRequest({
                    discordTag: t,
                    context: { location: 'Add Friend' }
                }).then(
                    () =>
                        d({
                            type: 'SUCCESS',
                            text: m.NW.format(m.t.Rtl1Eh, { discordTag: t })
                        }),
                    (e) => {
                        var n;
                        return d({
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
                        (0, r.jsx)(c.R94, {
                            id: v,
                            type: c.R94.Types.DESCRIPTION,
                            children: (0, r.jsx)(c.Text, {
                                tag: 'div',
                                variant: 'heading-md/normal',
                                children: m.NW.string(m.t['Rn/sLi'])
                            })
                        }),
                        j
                            ? (0, r.jsx)('img', {
                                  src: N,
                                  alt: 'Wumpus Waving'
                              })
                            : null
                    ]
                }),
                (0, r.jsx)(c.tEY, {
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
                            (0, r.jsx)(c.oil, {
                                id: I,
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
                                    if (e.length <= 0) return void d({ type: 'RESET' });
                                    let t = '',
                                        [, n] = e.split('#');
                                    null != n && (t = e + f.LYt.slice(null != n ? n.length + 1 : 0)),
                                        d({
                                            type: 'HINT',
                                            text: t
                                        });
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
                                'aria-describedby': null != P ? C : v
                            }),
                            null != O &&
                                (0, r.jsx)('div', {
                                    className: b.addFriendHint,
                                    'aria-hidden': !0,
                                    children: O
                                }),
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                disabled: !E,
                                type: 'submit',
                                children: m.NW.string(m.t['PMsq/f'])
                            })
                        ]
                    })
                }),
                null != P &&
                    (0, r.jsx)(c.R94, {
                        role: 'alert',
                        id: C,
                        type: c.R94.Types.ERROR,
                        className: _.marginTop8,
                        children: P
                    }),
                null != T &&
                    (0, r.jsx)(c.R94, {
                        role: 'status',
                        type: c.R94.Types.SUCCESS,
                        className: _.marginTop8,
                        children: T
                    })
            ]
        })
    );
}

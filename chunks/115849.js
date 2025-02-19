n.d(t, { Z: () => T }), n(47120), n(566702), n(301563);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(481060),
    u = n(194359),
    d = n(313201),
    p = n(540059),
    h = n(657682),
    g = n(981631),
    f = n(420212),
    m = n(388032),
    b = n(775585),
    _ = n(455812);
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
    v = {
        canSend: !1,
        hint: null,
        success: null,
        error: null
    },
    y = (0, d.hQ)(),
    I = ''.concat(y, '-decription'),
    C = ''.concat(y, '-error');
function S(e, t) {
    switch (t.type) {
        case 'RESET':
            return v;
        case 'SUCCESS':
            return O(E({}, v), { success: t.text });
        case 'HINT':
            return O(E({}, v), {
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
function T() {
    let e = i.createRef(),
        t = i.createRef(),
        [n, l] = i.useReducer(S, v),
        { canSend: a, hint: d, success: E, error: O } = n,
        T = (0, p.Q3)('AddFriendInput');
    return (
        i.useEffect(() => {
            null != E && (s()(null != e.current, 'Input is submitting when not mounted'), (e.current.value = ''), e.current.focus());
        }, [E, e]),
        (0, r.jsxs)('form', {
            onSubmit: (t) => {
                t.preventDefault(), s()(null != e.current, 'Input is submitted when not mounted');
                let n = e.current.value.trim();
                !n.includes('#') && n.startsWith('@') && (n = n.substring(1));
                let r = (0, h.Zy)(n);
                if (null != r) {
                    l({
                        type: 'ERROR',
                        text: r
                    });
                    return;
                }
                u.Z.sendRequest({
                    discordTag: n,
                    context: { location: 'Add Friend' }
                }).then(
                    () =>
                        l({
                            type: 'SUCCESS',
                            text: m.NW.format(m.t.Rtl1Eh, { discordTag: n })
                        }),
                    (e) => {
                        var t;
                        return l({
                            type: 'ERROR',
                            text: (0, h.NF)(null === (t = e.body) || void 0 === t ? void 0 : t.code, n)
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
                            id: I,
                            type: c.R94.Types.DESCRIPTION,
                            children: (0, r.jsx)(c.Text, {
                                tag: 'div',
                                variant: 'heading-md/normal',
                                children: m.NW.string(m.t['Rn/sLi'])
                            })
                        }),
                        T
                            ? (0, r.jsx)('img', {
                                  src: N,
                                  alt: 'Wumpus Waving'
                              })
                            : null
                    ]
                }),
                (0, r.jsx)(c.tEY, {
                    focusTarget: e,
                    ringTarget: t,
                    ringClassName: b.ring,
                    children: (0, r.jsxs)('div', {
                        ref: t,
                        className: o()(b.addFriendInputWrapper, {
                            [b.success]: E,
                            [b.error]: O
                        }),
                        children: [
                            (0, r.jsx)(c.oil, {
                                id: y,
                                inputRef: e,
                                className: b.addFriendInput,
                                inputClassName: b.input,
                                onKeyPress: (t) => {
                                    let n = t.currentTarget.value;
                                    if (t.key !== f.mR.Enter && n.includes('#')) {
                                        s()(null != e.current, 'Input is handling keypress when not mounted');
                                        let r = n.indexOf('#'),
                                            i = e.current.selectionStart,
                                            l = t.key === f.mR.Backspace || t.key === f.mR.ArrowRight || t.key === f.mR.ArrowLeft,
                                            o = t.which >= 48 && t.which <= 57;
                                        null != i && i > r && /^(.+?#\d{4})$/.test(n) && !l ? t.preventDefault() : null == i || !(i > r) || o || l || t.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) {
                                        l({ type: 'RESET' });
                                        return;
                                    }
                                    let t = '',
                                        [, n] = e.split('#');
                                    null != n && (t = e + g.LYt.slice(null != n ? n.length + 1 : 0)),
                                        l({
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
                                placeholder: m.NW.string(m.t['Rn/sLi']),
                                'aria-label': m.NW.string(m.t['Rn/sLi']),
                                'aria-invalid': null != O || void 0,
                                'aria-describedby': null != O ? C : I
                            }),
                            null != d &&
                                (0, r.jsx)('div', {
                                    className: b.addFriendHint,
                                    'aria-hidden': !0,
                                    children: d
                                }),
                            (0, r.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                disabled: !a,
                                type: 'submit',
                                children: m.NW.string(m.t['PMsq/f'])
                            })
                        ]
                    })
                }),
                null != O &&
                    (0, r.jsx)(c.R94, {
                        role: 'alert',
                        id: C,
                        type: c.R94.Types.ERROR,
                        className: _.marginTop8,
                        children: O
                    }),
                null != E &&
                    (0, r.jsx)(c.R94, {
                        role: 'status',
                        type: c.R94.Types.SUCCESS,
                        className: _.marginTop8,
                        children: E
                    })
            ]
        })
    );
}

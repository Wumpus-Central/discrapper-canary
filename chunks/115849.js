n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(481060),
    d = n(194359),
    u = n(313201),
    h = n(657682),
    m = n(981631),
    p = n(420212),
    g = n(388032),
    f = n(333483),
    _ = n(232186);
let E = {
        canSend: !1,
        hint: null,
        success: null,
        error: null
    },
    I = (0, u.hQ)(),
    C = ''.concat(I, '-decription'),
    v = ''.concat(I, '-error');
function N(e, t) {
    switch (t.type) {
        case 'RESET':
            return E;
        case 'SUCCESS':
            return {
                ...E,
                success: t.text
            };
        case 'HINT':
            return {
                ...E,
                canSend: !0,
                hint: t.text
            };
        case 'ERROR':
            return {
                ...e,
                canSend: !0,
                error: t.text
            };
    }
}
function S() {
    let e = r.createRef(),
        t = r.createRef(),
        [n, l] = r.useReducer(N, E),
        { canSend: s, hint: u, success: S, error: T } = n;
    return (
        r.useEffect(() => {
            null != S && (o()(null != e.current, 'Input is submitting when not mounted'), (e.current.value = ''), e.current.focus());
        }, [S, e]),
        (0, i.jsxs)('form', {
            onSubmit: (t) => {
                t.preventDefault(), o()(null != e.current, 'Input is submitted when not mounted');
                let n = e.current.value.trim();
                !n.includes('#') && n.startsWith('@') && (n = n.substring(1));
                let i = (0, h.Zy)(n);
                if (null != i) {
                    l({
                        type: 'ERROR',
                        text: i
                    });
                    return;
                }
                d.Z.sendRequest({
                    discordTag: n,
                    context: { location: 'Add Friend' }
                }).then(
                    () =>
                        l({
                            type: 'SUCCESS',
                            text: g.intl.format(g.t.Rtl1Eh, { discordTag: n })
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
                (0, i.jsx)(c.FormText, {
                    id: C,
                    type: c.FormText.Types.DESCRIPTION,
                    children: g.intl.string(g.t['Rn/sLi'])
                }),
                (0, i.jsx)(c.FocusRing, {
                    focusTarget: e,
                    ringTarget: t,
                    ringClassName: f.ring,
                    children: (0, i.jsxs)('div', {
                        ref: t,
                        className: a()(f.addFriendInputWrapper, {
                            [f.success]: S,
                            [f.error]: T
                        }),
                        children: [
                            (0, i.jsx)(c.TextInput, {
                                id: I,
                                inputRef: e,
                                className: f.addFriendInput,
                                inputClassName: f.input,
                                onKeyPress: (t) => {
                                    let n = t.currentTarget.value;
                                    if (t.key !== p.mR.Enter) {
                                        if (n.includes('#')) {
                                            o()(null != e.current, 'Input is handling keypress when not mounted');
                                            let i = n.indexOf('#'),
                                                r = e.current.selectionStart,
                                                l = t.key === p.mR.Backspace || t.key === p.mR.ArrowRight || t.key === p.mR.ArrowLeft,
                                                a = t.which >= 48 && t.which <= 57;
                                            null != r && r > i && /^(.+?#\d{4})$/.test(n) && !l ? t.preventDefault() : null != r && r > i && !a && !l && t.preventDefault();
                                        }
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) {
                                        l({ type: 'RESET' });
                                        return;
                                    }
                                    let t = '',
                                        [, n] = e.split('#');
                                    null != n && (t = e + m.LYt.slice(null != n ? n.length + 1 : 0)),
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
                                placeholder: g.intl.string(g.t['Rn/sLi']),
                                'aria-label': g.intl.string(g.t['Rn/sLi']),
                                'aria-invalid': null != T || void 0,
                                'aria-describedby': null != T ? v : C
                            }),
                            null != u &&
                                (0, i.jsx)('div', {
                                    className: f.addFriendHint,
                                    'aria-hidden': !0,
                                    children: u
                                }),
                            (0, i.jsx)(c.Button, {
                                size: c.Button.Sizes.SMALL,
                                disabled: !s,
                                type: 'submit',
                                children: g.intl.string(g.t['PMsq/f'])
                            })
                        ]
                    })
                }),
                null != T &&
                    (0, i.jsx)(c.FormText, {
                        role: 'alert',
                        id: v,
                        type: c.FormText.Types.ERROR,
                        className: _.marginTop8,
                        children: T
                    }),
                null != S &&
                    (0, i.jsx)(c.FormText, {
                        role: 'status',
                        type: c.FormText.Types.SUCCESS,
                        className: _.marginTop8,
                        children: S
                    })
            ]
        })
    );
}

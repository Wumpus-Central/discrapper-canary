n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(481060),
    d = n(194359),
    u = n(313201),
    h = n(540059),
    m = n(657682),
    p = n(981631),
    g = n(420212),
    _ = n(388032),
    f = n(118653),
    E = n(814632);
let I = n(349181),
    C = {
        canSend: !1,
        hint: null,
        success: null,
        error: null
    },
    v = (0, u.hQ)(),
    N = ''.concat(v, '-decription'),
    T = ''.concat(v, '-error');
function S(e, t) {
    switch (t.type) {
        case 'RESET':
            return C;
        case 'SUCCESS':
            return {
                ...C,
                success: t.text
            };
        case 'HINT':
            return {
                ...C,
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
function Z() {
    let e = l.createRef(),
        t = l.createRef(),
        [n, r] = l.useReducer(S, C),
        { canSend: s, hint: u, success: Z, error: A } = n,
        b = (0, h.Q3)('AddFriendInput');
    return (
        l.useEffect(() => {
            null != Z && (o()(null != e.current, 'Input is submitting when not mounted'), (e.current.value = ''), e.current.focus());
        }, [Z, e]),
        (0, i.jsxs)('form', {
            onSubmit: (t) => {
                t.preventDefault(), o()(null != e.current, 'Input is submitted when not mounted');
                let n = e.current.value.trim();
                !n.includes('#') && n.startsWith('@') && (n = n.substring(1));
                let i = (0, m.Zy)(n);
                if (null != i) {
                    r({
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
                        r({
                            type: 'SUCCESS',
                            text: _.intl.format(_.t.Rtl1Eh, { discordTag: n })
                        }),
                    (e) => {
                        var t;
                        return r({
                            type: 'ERROR',
                            text: (0, m.NF)(null === (t = e.body) || void 0 === t ? void 0 : t.code, n)
                        });
                    }
                );
            },
            autoComplete: 'off',
            children: [
                (0, i.jsxs)('div', {
                    className: f.addFriendWumpusWrapper,
                    children: [
                        (0, i.jsx)(c.R94, {
                            id: N,
                            type: c.R94.Types.DESCRIPTION,
                            children: (0, i.jsx)(c.Text, {
                                tag: 'div',
                                variant: 'heading-md/normal',
                                children: _.intl.string(_.t['Rn/sLi'])
                            })
                        }),
                        b
                            ? (0, i.jsx)('img', {
                                  src: I,
                                  alt: 'Wumpus Waving'
                              })
                            : null
                    ]
                }),
                (0, i.jsx)(c.tEY, {
                    focusTarget: e,
                    ringTarget: t,
                    ringClassName: f.ring,
                    children: (0, i.jsxs)('div', {
                        ref: t,
                        className: a()(f.addFriendInputWrapper, {
                            [f.success]: Z,
                            [f.error]: A
                        }),
                        children: [
                            (0, i.jsx)(c.oil, {
                                id: v,
                                inputRef: e,
                                className: f.addFriendInput,
                                inputClassName: f.input,
                                onKeyPress: (t) => {
                                    let n = t.currentTarget.value;
                                    if (t.key !== g.mR.Enter && n.includes('#')) {
                                        o()(null != e.current, 'Input is handling keypress when not mounted');
                                        let i = n.indexOf('#'),
                                            l = e.current.selectionStart,
                                            r = t.key === g.mR.Backspace || t.key === g.mR.ArrowRight || t.key === g.mR.ArrowLeft,
                                            a = t.which >= 48 && t.which <= 57;
                                        null != l && l > i && /^(.+?#\d{4})$/.test(n) && !r ? t.preventDefault() : null == l || !(l > i) || a || r || t.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) {
                                        r({ type: 'RESET' });
                                        return;
                                    }
                                    let t = '',
                                        [, n] = e.split('#');
                                    null != n && (t = e + p.LYt.slice(null != n ? n.length + 1 : 0)),
                                        r({
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
                                placeholder: _.intl.string(_.t['Rn/sLi']),
                                'aria-label': _.intl.string(_.t['Rn/sLi']),
                                'aria-invalid': null != A || void 0,
                                'aria-describedby': null != A ? T : N
                            }),
                            null != u &&
                                (0, i.jsx)('div', {
                                    className: f.addFriendHint,
                                    'aria-hidden': !0,
                                    children: u
                                }),
                            (0, i.jsx)(c.zxk, {
                                size: c.zxk.Sizes.SMALL,
                                disabled: !s,
                                type: 'submit',
                                children: _.intl.string(_.t['PMsq/f'])
                            })
                        ]
                    })
                }),
                null != A &&
                    (0, i.jsx)(c.R94, {
                        role: 'alert',
                        id: T,
                        type: c.R94.Types.ERROR,
                        className: E.marginTop8,
                        children: A
                    }),
                null != Z &&
                    (0, i.jsx)(c.R94, {
                        role: 'status',
                        type: c.R94.Types.SUCCESS,
                        className: E.marginTop8,
                        children: Z
                    })
            ]
        })
    );
}

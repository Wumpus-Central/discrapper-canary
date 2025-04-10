n.d(t, {
    A7: () => S,
    dE: () => N
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(410030),
    c = n(541716),
    u = n(752305),
    d = n(893718),
    f = n(318766),
    _ = n(931651),
    p = n(131704),
    h = n(142550),
    m = n(981631),
    g = n(388032),
    E = n(304222);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (0, p.kt)({
    id: '1',
    type: m.d4z.DM
});
function S(e) {
    let { placeholder: t, onEnter: n, setEditorRef: o, showEmojiButton: s = !1, renderAttachButton: l, autoFocus: f = !0, onFocus: _, channel: p, className: m } = e,
        [g, b] = i.useState(''),
        [v, S] = i.useState((0, u.JM)('')),
        T = () => {
            b(''), S((0, u.JM)(''));
        },
        N = c.Ie.ATOMIC_REACTOR_REPLY_INPUT,
        A = i.useRef(null),
        C = () => {
            if (null == A.current) return 'top';
            let e = A.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? 'bottom' : 'top';
        };
    return (0, r.jsx)(d.Z, {
        ref: A,
        placeholder: t,
        editorClassName: m,
        className: a()(E.replyInput, m),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: h.z,
        channel: null != p ? p : I,
        onChange: (e, t, n) => {
            b(t), S(n);
        },
        type: s ? O(y({}, N), { emojis: { button: !0 } }) : N,
        textValue: g,
        richValue: v,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > h.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (n(t),
                  T(),
                  Promise.resolve({
                      shouldClear: !0,
                      shouldRefocus: !1
                  }));
        },
        setEditorRef: o,
        focused: f,
        onFocus: _,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: C(),
        renderAttachButton: l
    });
}
let T = (e, t) => {
        i.useEffect(() => {
            let n = (t) => {
                    'Escape' === t.key && e();
                },
                r = (n) => {
                    var r;
                    null != n.target && ((null == t || null == (r = t.current) ? void 0 : r.contains(null == n ? void 0 : n.target)) || e());
                };
            return (
                document.addEventListener('keydown', n),
                document.addEventListener('mousedown', r),
                () => {
                    document.removeEventListener('keydown', n), document.removeEventListener('mousedown', r);
                }
            );
        }, [e, t]);
    },
    N = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            o = (0, l.ZP)(),
            [a, c] = i.useState(!1),
            u = i.useRef(null),
            d = i.useRef(null);
        return (
            T(() => c(!1), u),
            (0, r.jsx)(s.yRy, {
                targetElementRef: d,
                align: 'right',
                position: 'top',
                shouldShow: a,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, r.jsx)(s.f6W, {
                        theme: o,
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: e,
                                ref: u,
                                children: (0, r.jsx)(_.$, {
                                    messageId: m.lds,
                                    channel: I,
                                    closePopout: () => {
                                        c(!1);
                                    },
                                    onSelectEmoji: (e, n, r) => {
                                        null != e && (t(e, n, r), c(!1));
                                    }
                                })
                            })
                    }),
                children: () =>
                    (0, r.jsx)(s.ua7, {
                        text: g.NW.string(g.t.lfIHs7),
                        children: (e) =>
                            (0, r.jsx)(
                                'div',
                                O(y({ ref: d }, e), {
                                    className: E.reaction,
                                    children: (0, r.jsx)(f.Z, {
                                        active: !1,
                                        tabIndex: 0,
                                        onClick: () => {
                                            null == n || n(), c(!0);
                                        }
                                    })
                                })
                            )
                    })
            })
        );
    };

n.d(t, {
    A7: () => O,
    dE: () => C
}),
    n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(481060),
    s = n(410030),
    c = n(541716),
    u = n(752305),
    d = n(893718),
    m = n(318766),
    p = n(931651),
    h = n(131704),
    f = n(142550),
    g = n(981631),
    x = n(388032),
    v = n(884504);
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
function j(e, t) {
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
let P = (0, h.kt)({
    id: '1',
    type: g.d4z.DM
});
function O(e) {
    let { placeholder: t, onEnter: n, setEditorRef: a, showEmojiButton: o = !1, renderAttachButton: s, autoFocus: m = !0, onFocus: p, channel: h, className: g } = e,
        [x, O] = l.useState(''),
        [b, C] = l.useState((0, u.JM)('')),
        N = () => {
            O(''), C((0, u.JM)(''));
        },
        I = c.Ie.ATOMIC_REACTOR_REPLY_INPUT,
        w = l.useRef(null);
    return (0, r.jsx)(d.Z, {
        ref: w,
        placeholder: t,
        editorClassName: g,
        className: i()(v.replyInput, g),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: f.z,
        channel: null != h ? h : P,
        onChange: (e, t, n) => {
            O(t), C(n);
        },
        type: o ? j(y({}, I), { emojis: { button: !0 } }) : I,
        textValue: x,
        richValue: b,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > f.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (n(t),
                  N(),
                  Promise.resolve({
                      shouldClear: !0,
                      shouldRefocus: !1
                  }));
        },
        setEditorRef: a,
        focused: m,
        onFocus: p,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == w.current) return 'top';
            let e = w.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: s
    });
}
let b = (e, t) => {
        l.useEffect(() => {
            let n = (t) => {
                    'Escape' === t.key && e();
                },
                r = (n) => {
                    var r;
                    null == n.target || (null == t ? void 0 : null === (r = t.current) || void 0 === r ? void 0 : r.contains(null == n ? void 0 : n.target)) || e();
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
    C = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            a = (0, s.ZP)(),
            [i, c] = l.useState(!1),
            u = l.useRef(null);
        return (
            b(() => c(!1), u),
            (0, r.jsx)(o.yRy, {
                align: 'right',
                position: 'top',
                shouldShow: i,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, r.jsx)(o.f6W, {
                        theme: a,
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: e,
                                ref: u,
                                children: (0, r.jsx)(p.$, {
                                    messageId: g.lds,
                                    channel: P,
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
                    (0, r.jsx)(o.ua7, {
                        text: x.NW.string(x.t.lfIHs7),
                        children: (e) =>
                            (0, r.jsx)(
                                'div',
                                j(y({}, e), {
                                    className: v.reaction,
                                    children: (0, r.jsx)(m.Z, {
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

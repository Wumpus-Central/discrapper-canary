n.d(t, {
    A7: () => E,
    ZP: () => x,
    dE: () => S
}),
    n(47120);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    s = n(410030),
    c = n(541716),
    u = n(752305),
    d = n(893718),
    p = n(318766),
    f = n(931651),
    O = n(131704),
    y = n(142550),
    b = n(981631),
    m = n(388032),
    g = n(884504);
function v(e) {
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
function h(e, t) {
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
let P = (0, O.kt)({
        id: '1',
        type: b.d4z.DM
    }),
    j = l.forwardRef(function (e, t) {
        let { placeholder: n, headerText: l, onEnter: o, showPopout: c, children: u, body: d, hide: p } = e,
            f = (0, s.ZP)();
        return (0, r.jsx)(a.yRy, {
            align: 'right',
            position: 'bottom',
            shouldShow: c,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, r.jsx)(a.f6W, {
                    theme: f,
                    children: (e) =>
                        (0, r.jsx)('div', {
                            className: i()([g.reply, e]),
                            ref: t,
                            children: (0, r.jsx)(a.EqS, {
                                containerRef: t,
                                children: (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-xs/bold',
                                            className: g.replyHeader,
                                            children: null != l ? l : m.NW.string(m.t['/VQax8'])
                                        }),
                                        d,
                                        (0, r.jsx)(E, {
                                            onEnter: (e) => {
                                                o(e), p();
                                            },
                                            placeholder: null != n ? n : m.NW.string(m.t['/VQax8'])
                                        })
                                    ]
                                })
                            })
                        })
                }),
            children: () => u
        });
    });
function E(e) {
    let { placeholder: t, onEnter: n, setEditorRef: o, showEmojiButton: a = !1, renderAttachButton: s, autoFocus: p = !0, onFocus: f, channel: O, className: b } = e,
        [m, j] = l.useState(''),
        [E, w] = l.useState((0, u.JM)('')),
        S = () => {
            j(''), w((0, u.JM)(''));
        },
        x = c.Ie.ATOMIC_REACTOR_REPLY_INPUT,
        C = l.useRef(null);
    return (0, r.jsx)(d.Z, {
        ref: C,
        placeholder: t,
        editorClassName: b,
        className: i()(g.replyInput, b),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: y.z,
        channel: null != O ? O : P,
        onChange: (e, t, n) => {
            j(t), w(n);
        },
        type: a ? h(v({}, x), { emojis: { button: !0 } }) : x,
        textValue: m,
        richValue: E,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > y.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (n(t),
                  S(),
                  Promise.resolve({
                      shouldClear: !0,
                      shouldRefocus: !1
                  }));
        },
        setEditorRef: o,
        focused: p,
        onFocus: f,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == C.current) return 'top';
            let e = C.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: s
    });
}
let w = (e, t) => {
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
    S = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            o = (0, s.ZP)(),
            [i, c] = l.useState(!1),
            u = l.useRef(null);
        return (
            w(() => c(!1), u),
            (0, r.jsx)(a.yRy, {
                align: 'right',
                position: 'top',
                shouldShow: i,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, r.jsx)(a.f6W, {
                        theme: o,
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: e,
                                ref: u,
                                children: (0, r.jsx)(f.$, {
                                    messageId: b.lds,
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
                    (0, r.jsx)(a.ua7, {
                        text: m.NW.string(m.t.lfIHs7),
                        children: (e) =>
                            (0, r.jsx)(
                                'div',
                                h(v({}, e), {
                                    className: g.reaction,
                                    children: (0, r.jsx)(p.Z, {
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
    },
    x = (e) => {
        let { onInteraction: t, showReact: n = !0, showReply: o = !0, popoutProps: s = {} } = e,
            { replyHeaderText: c, replyPlaceholder: u, popoutBody: d } = s,
            [p, f] = l.useState(!1),
            O = l.useRef(null);
        return (
            w(() => f(!1), O),
            (0, r.jsxs)('div', {
                className: g.reactions,
                children: [
                    n &&
                        (0, r.jsx)(S, {
                            onSelectEmoji: (e) => {
                                null != e &&
                                    t({
                                        interactionType: y.L.ReactSubmit,
                                        emoji: e,
                                        reply: null
                                    });
                            },
                            onClick: () => {
                                t({
                                    interactionType: y.L.ReactBegin,
                                    emoji: null,
                                    reply: null
                                }),
                                    f(!1);
                            }
                        }),
                    o &&
                        (0, r.jsx)(j, {
                            hide: () => f(!1),
                            ref: O,
                            headerText: c,
                            placeholder: u,
                            showPopout: p,
                            body: d,
                            onEnter: (e) => {
                                t({
                                    interactionType: y.L.ReplySubmit,
                                    emoji: null,
                                    reply: e
                                });
                            },
                            children: (0, r.jsx)(a.ua7, {
                                text: m.NW.string(m.t['5IEsGx']),
                                children: (e) =>
                                    (0, r.jsx)(
                                        'button',
                                        h(v({}, e), {
                                            className: i()(g.reaction, g.emojiButton),
                                            onClick: () => {
                                                t({
                                                    interactionType: y.L.ReplyBegin,
                                                    emoji: null,
                                                    reply: null
                                                }),
                                                    f(!0);
                                            },
                                            children: (0, r.jsx)(a.n$P, {})
                                        })
                                    )
                            })
                        })
                ]
            })
        );
    };

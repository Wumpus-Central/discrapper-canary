t.d(n, {
    A7: function () {
        return E;
    },
    dE: function () {
        return C;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    o = t.n(r),
    a = t(481060),
    u = t(410030),
    s = t(541716),
    d = t(752305),
    c = t(893718),
    p = t(318766),
    f = t(931651),
    v = t(131704),
    m = t(142550),
    h = t(981631),
    g = t(388032),
    Z = t(26858);
let x = (0, v.kt)({
        id: '1',
        type: h.d4z.DM
    }),
    P = i.forwardRef(function (e, n) {
        let { placeholder: t, headerText: i, onEnter: r, showPopout: s, children: d, body: c, hide: p } = e,
            f = (0, u.ZP)();
        return (0, l.jsx)(a.Popout, {
            align: 'right',
            position: 'bottom',
            shouldShow: s,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(a.ThemeProvider, {
                    theme: f,
                    children: (e) =>
                        (0, l.jsx)('div', {
                            className: o()([Z.reply, e]),
                            ref: n,
                            children: (0, l.jsx)(a.FocusLock, {
                                containerRef: n,
                                children: (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(a.Text, {
                                            variant: 'text-xs/bold',
                                            className: Z.replyHeader,
                                            children: null != i ? i : g.intl.string(g.t['/VQax8'])
                                        }),
                                        c,
                                        (0, l.jsx)(E, {
                                            onEnter: (e) => {
                                                r(e), p();
                                            },
                                            placeholder: null != t ? t : g.intl.string(g.t['/VQax8'])
                                        })
                                    ]
                                })
                            })
                        })
                }),
            children: () => d
        });
    });
function E(e) {
    let { placeholder: n, onEnter: t, setEditorRef: r, showEmojiButton: a = !1, renderAttachButton: u, autoFocus: p = !0, onFocus: f, channel: v, className: h } = e,
        [g, P] = i.useState(''),
        [E, I] = i.useState((0, d.JM)('')),
        C = () => {
            P(''), I((0, d.JM)(''));
        },
        S = s.Ie.ATOMIC_REACTOR_REPLY_INPUT,
        b = i.useRef(null);
    return (0, l.jsx)(c.Z, {
        ref: b,
        placeholder: n,
        editorClassName: h,
        className: o()(Z.replyInput, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: m.z,
        channel: null != v ? v : x,
        onChange: (e, n, t) => {
            P(n), I(t);
        },
        type: a
            ? {
                  ...S,
                  emojis: { button: !0 }
              }
            : S,
        textValue: g,
        richValue: E,
        onSubmit: (e) => {
            let { value: n } = e;
            return n.length > m.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (t(n),
                  C(),
                  Promise.resolve({
                      shouldClear: !0,
                      shouldRefocus: !1
                  }));
        },
        setEditorRef: r,
        focused: p,
        onFocus: f,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == b.current) return 'top';
            let e = b.current.getBoundingClientRect(),
                n = window.innerHeight;
            return e.top < n / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: u
    });
}
let I = (e, n) => {
        i.useEffect(() => {
            let t = (n) => {
                    'Escape' === n.key && e();
                },
                l = (t) => {
                    var l;
                    null != t.target && !(null == n ? void 0 : null === (l = n.current) || void 0 === l ? void 0 : l.contains(null == t ? void 0 : t.target)) && e();
                };
            return (
                document.addEventListener('keydown', t),
                document.addEventListener('mousedown', l),
                () => {
                    document.removeEventListener('keydown', t), document.removeEventListener('mousedown', l);
                }
            );
        }, [e, n]);
    },
    C = (e) => {
        let { onSelectEmoji: n, onClick: t } = e,
            r = (0, u.ZP)(),
            [o, s] = i.useState(!1),
            d = i.useRef(null);
        return (
            I(() => s(!1), d),
            (0, l.jsx)(a.Popout, {
                align: 'right',
                position: 'top',
                shouldShow: o,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, l.jsx)(a.ThemeProvider, {
                        theme: r,
                        children: (e) =>
                            (0, l.jsx)('div', {
                                className: e,
                                ref: d,
                                children: (0, l.jsx)(f.$, {
                                    messageId: h.lds,
                                    channel: x,
                                    closePopout: () => {
                                        s(!1);
                                    },
                                    onSelectEmoji: (e, t, l) => {
                                        null != e && (n(e, t, l), s(!1));
                                    }
                                })
                            })
                    }),
                children: () =>
                    (0, l.jsx)(a.Tooltip, {
                        text: g.intl.string(g.t.lfIHs7),
                        children: (e) =>
                            (0, l.jsx)('div', {
                                ...e,
                                className: Z.reaction,
                                children: (0, l.jsx)(p.Z, {
                                    active: !1,
                                    tabIndex: 0,
                                    onClick: () => {
                                        null == t || t(), s(!0);
                                    }
                                })
                            })
                    })
            })
        );
    };
n.ZP = (e) => {
    let { onInteraction: n, showReact: t = !0, showReply: r = !0, popoutProps: u = {} } = e,
        { replyHeaderText: s, replyPlaceholder: d, popoutBody: c } = u,
        [p, f] = i.useState(!1),
        v = i.useRef(null);
    return (
        I(() => f(!1), v),
        (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)('div', {
                className: Z.reactions,
                children: [
                    t &&
                        (0, l.jsx)(C, {
                            onSelectEmoji: (e) => {
                                null != e &&
                                    n({
                                        interactionType: m.L.ReactSubmit,
                                        emoji: e,
                                        reply: null
                                    });
                            },
                            onClick: () => {
                                n({
                                    interactionType: m.L.ReactBegin,
                                    emoji: null,
                                    reply: null
                                }),
                                    f(!1);
                            }
                        }),
                    r &&
                        (0, l.jsx)(P, {
                            hide: () => f(!1),
                            ref: v,
                            headerText: s,
                            placeholder: d,
                            showPopout: p,
                            body: c,
                            onEnter: (e) => {
                                n({
                                    interactionType: m.L.ReplySubmit,
                                    emoji: null,
                                    reply: e
                                });
                            },
                            children: (0, l.jsx)(a.Tooltip, {
                                text: g.intl.string(g.t['5IEsGx']),
                                children: (e) =>
                                    (0, l.jsx)('button', {
                                        ...e,
                                        className: o()(Z.reaction, Z.emojiButton),
                                        onClick: () => {
                                            n({
                                                interactionType: m.L.ReplyBegin,
                                                emoji: null,
                                                reply: null
                                            }),
                                                f(!0);
                                        },
                                        children: (0, l.jsx)(a.ArrowAngleLeftUpIcon, {})
                                    })
                            })
                        })
                ]
            })
        })
    );
};

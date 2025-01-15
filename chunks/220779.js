t.d(n, {
    A7: function () {
        return I;
    },
    dE: function () {
        return S;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
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
    Z = t(257641);
let x = (0, v.kt)({
        id: '1',
        type: h.d4z.DM
    }),
    P = l.forwardRef(function (e, n) {
        let { placeholder: t, headerText: l, onEnter: r, showPopout: s, children: d, body: c, hide: p } = e,
            f = (0, u.ZP)();
        return (0, i.jsx)(a.Popout, {
            align: 'right',
            position: 'bottom',
            shouldShow: s,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, i.jsx)(a.ThemeProvider, {
                    theme: f,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            className: o()([Z.reply, e]),
                            ref: n,
                            children: (0, i.jsx)(a.FocusLock, {
                                containerRef: n,
                                children: (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-xs/bold',
                                            className: Z.replyHeader,
                                            children: null != l ? l : g.intl.string(g.t['/VQax8'])
                                        }),
                                        c,
                                        (0, i.jsx)(I, {
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
function I(e) {
    let { placeholder: n, onEnter: t, setEditorRef: r, showEmojiButton: a = !1, renderAttachButton: u, autoFocus: p = !0, onFocus: f, channel: v, className: h } = e,
        [g, P] = l.useState(''),
        [I, E] = l.useState((0, d.JM)('')),
        S = () => {
            P(''), E((0, d.JM)(''));
        },
        C = s.Ie.ATOMIC_REACTOR_REPLY_INPUT,
        b = l.useRef(null);
    return (0, i.jsx)(c.Z, {
        ref: b,
        placeholder: n,
        editorClassName: h,
        className: o()(Z.replyInput, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: m.z,
        channel: null != v ? v : x,
        onChange: (e, n, t) => {
            P(n), E(t);
        },
        type: a
            ? {
                  ...C,
                  emojis: { button: !0 }
              }
            : C,
        textValue: g,
        richValue: I,
        onSubmit: (e) => {
            let { value: n } = e;
            return n.length > m.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (t(n),
                  S(),
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
let E = (e, n) => {
        l.useEffect(() => {
            let t = (n) => {
                    'Escape' === n.key && e();
                },
                i = (t) => {
                    var i;
                    null != t.target && !(null == n ? void 0 : null === (i = n.current) || void 0 === i ? void 0 : i.contains(null == t ? void 0 : t.target)) && e();
                };
            return (
                document.addEventListener('keydown', t),
                document.addEventListener('mousedown', i),
                () => {
                    document.removeEventListener('keydown', t), document.removeEventListener('mousedown', i);
                }
            );
        }, [e, n]);
    },
    S = (e) => {
        let { onSelectEmoji: n, onClick: t } = e,
            r = (0, u.ZP)(),
            [o, s] = l.useState(!1),
            d = l.useRef(null);
        return (
            E(() => s(!1), d),
            (0, i.jsx)(a.Popout, {
                align: 'right',
                position: 'top',
                shouldShow: o,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, i.jsx)(a.ThemeProvider, {
                        theme: r,
                        children: (e) =>
                            (0, i.jsx)('div', {
                                className: e,
                                ref: d,
                                children: (0, i.jsx)(f.$, {
                                    messageId: h.lds,
                                    channel: x,
                                    closePopout: () => {
                                        s(!1);
                                    },
                                    onSelectEmoji: (e, t, i) => {
                                        null != e && (n(e, t, i), s(!1));
                                    }
                                })
                            })
                    }),
                children: () =>
                    (0, i.jsx)(a.Tooltip, {
                        text: g.intl.string(g.t.lfIHs7),
                        children: (e) =>
                            (0, i.jsx)('div', {
                                ...e,
                                className: Z.reaction,
                                children: (0, i.jsx)(p.Z, {
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
        [p, f] = l.useState(!1),
        v = l.useRef(null);
    return (
        E(() => f(!1), v),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: Z.reactions,
                children: [
                    t &&
                        (0, i.jsx)(S, {
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
                        (0, i.jsx)(P, {
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
                            children: (0, i.jsx)(a.Tooltip, {
                                text: g.intl.string(g.t['5IEsGx']),
                                children: (e) =>
                                    (0, i.jsx)('button', {
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
                                        children: (0, i.jsx)(a.ArrowAngleLeftUpIcon, {})
                                    })
                            })
                        })
                ]
            })
        })
    );
};

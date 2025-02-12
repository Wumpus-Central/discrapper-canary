n.d(t, {
    A7: () => x,
    ZP: () => A,
    dE: () => y
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(410030),
    d = n(541716),
    c = n(752305),
    u = n(893718),
    p = n(318766),
    f = n(931651),
    m = n(131704),
    h = n(142550),
    v = n(981631),
    g = n(388032),
    E = n(244601);
let C = (0, m.kt)({
        id: '1',
        type: v.d4z.DM
    }),
    P = i.forwardRef(function (e, t) {
        let { placeholder: n, headerText: i, onEnter: r, showPopout: d, children: c, body: u, hide: p } = e,
            f = (0, s.ZP)();
        return (0, l.jsx)(o.yRy, {
            align: 'right',
            position: 'bottom',
            shouldShow: d,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(o.f6W, {
                    theme: f,
                    children: (e) =>
                        (0, l.jsx)('div', {
                            className: a()([E.reply, e]),
                            ref: t,
                            children: (0, l.jsx)(o.EqS, {
                                containerRef: t,
                                children: (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(o.Text, {
                                            variant: 'text-xs/bold',
                                            className: E.replyHeader,
                                            children: null != i ? i : g.intl.string(g.t['/VQax8'])
                                        }),
                                        u,
                                        (0, l.jsx)(x, {
                                            onEnter: (e) => {
                                                r(e), p();
                                            },
                                            placeholder: null != n ? n : g.intl.string(g.t['/VQax8'])
                                        })
                                    ]
                                })
                            })
                        })
                }),
            children: () => c
        });
    });
function x(e) {
    let { placeholder: t, onEnter: n, setEditorRef: r, showEmojiButton: o = !1, renderAttachButton: s, autoFocus: p = !0, onFocus: f, channel: m, className: v } = e,
        [g, P] = i.useState(''),
        [x, Z] = i.useState((0, c.JM)('')),
        y = () => {
            P(''), Z((0, c.JM)(''));
        },
        A = d.Ie.ATOMIC_REACTOR_REPLY_INPUT,
        S = i.useRef(null);
    return (0, l.jsx)(u.Z, {
        ref: S,
        placeholder: t,
        editorClassName: v,
        className: a()(E.replyInput, v),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: h.z,
        channel: null != m ? m : C,
        onChange: (e, t, n) => {
            P(t), Z(n);
        },
        type: o
            ? {
                  ...A,
                  emojis: { button: !0 }
              }
            : A,
        textValue: g,
        richValue: x,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > h.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (n(t),
                  y(),
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
            if (null == S.current) return 'top';
            let e = S.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: s
    });
}
let Z = (e, t) => {
        i.useEffect(() => {
            let n = (t) => {
                    'Escape' === t.key && e();
                },
                l = (n) => {
                    var l;
                    null == n.target || (null == t ? void 0 : null === (l = t.current) || void 0 === l ? void 0 : l.contains(null == n ? void 0 : n.target)) || e();
                };
            return (
                document.addEventListener('keydown', n),
                document.addEventListener('mousedown', l),
                () => {
                    document.removeEventListener('keydown', n), document.removeEventListener('mousedown', l);
                }
            );
        }, [e, t]);
    },
    y = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            r = (0, s.ZP)(),
            [a, d] = i.useState(!1),
            c = i.useRef(null);
        return (
            Z(() => d(!1), c),
            (0, l.jsx)(o.yRy, {
                align: 'right',
                position: 'top',
                shouldShow: a,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, l.jsx)(o.f6W, {
                        theme: r,
                        children: (e) =>
                            (0, l.jsx)('div', {
                                className: e,
                                ref: c,
                                children: (0, l.jsx)(f.$, {
                                    messageId: v.lds,
                                    channel: C,
                                    closePopout: () => {
                                        d(!1);
                                    },
                                    onSelectEmoji: (e, n, l) => {
                                        null != e && (t(e, n, l), d(!1));
                                    }
                                })
                            })
                    }),
                children: () =>
                    (0, l.jsx)(o.ua7, {
                        text: g.intl.string(g.t.lfIHs7),
                        children: (e) =>
                            (0, l.jsx)('div', {
                                ...e,
                                className: E.reaction,
                                children: (0, l.jsx)(p.Z, {
                                    active: !1,
                                    tabIndex: 0,
                                    onClick: () => {
                                        null == n || n(), d(!0);
                                    }
                                })
                            })
                    })
            })
        );
    },
    A = (e) => {
        let { onInteraction: t, showReact: n = !0, showReply: r = !0, popoutProps: s = {} } = e,
            { replyHeaderText: d, replyPlaceholder: c, popoutBody: u } = s,
            [p, f] = i.useState(!1),
            m = i.useRef(null);
        return (
            Z(() => f(!1), m),
            (0, l.jsx)(l.Fragment, {
                children: (0, l.jsxs)('div', {
                    className: E.reactions,
                    children: [
                        n &&
                            (0, l.jsx)(y, {
                                onSelectEmoji: (e) => {
                                    null != e &&
                                        t({
                                            interactionType: h.L.ReactSubmit,
                                            emoji: e,
                                            reply: null
                                        });
                                },
                                onClick: () => {
                                    t({
                                        interactionType: h.L.ReactBegin,
                                        emoji: null,
                                        reply: null
                                    }),
                                        f(!1);
                                }
                            }),
                        r &&
                            (0, l.jsx)(P, {
                                hide: () => f(!1),
                                ref: m,
                                headerText: d,
                                placeholder: c,
                                showPopout: p,
                                body: u,
                                onEnter: (e) => {
                                    t({
                                        interactionType: h.L.ReplySubmit,
                                        emoji: null,
                                        reply: e
                                    });
                                },
                                children: (0, l.jsx)(o.ua7, {
                                    text: g.intl.string(g.t['5IEsGx']),
                                    children: (e) =>
                                        (0, l.jsx)('button', {
                                            ...e,
                                            className: a()(E.reaction, E.emojiButton),
                                            onClick: () => {
                                                t({
                                                    interactionType: h.L.ReplyBegin,
                                                    emoji: null,
                                                    reply: null
                                                }),
                                                    f(!0);
                                            },
                                            children: (0, l.jsx)(o.n$P, {})
                                        })
                                })
                            })
                    ]
                })
            })
        );
    };

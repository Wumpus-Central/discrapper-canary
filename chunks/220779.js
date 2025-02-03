n.d(t, {
    A7: () => C,
    ZP: () => w,
    dE: () => j
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(410030),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    m = n(318766),
    f = n(931651),
    p = n(131704),
    h = n(142550),
    v = n(981631),
    g = n(388032),
    x = n(26858);
let E = (0, p.kt)({
        id: '1',
        type: v.d4z.DM
    }),
    P = i.forwardRef(function (e, t) {
        let { placeholder: n, headerText: i, onEnter: r, showPopout: u, children: c, body: d, hide: m } = e,
            f = (0, s.ZP)();
        return (0, l.jsx)(o.yRy, {
            align: 'right',
            position: 'bottom',
            shouldShow: u,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(o.f6W, {
                    theme: f,
                    children: (e) =>
                        (0, l.jsx)('div', {
                            className: a()([x.reply, e]),
                            ref: t,
                            children: (0, l.jsx)(o.EqS, {
                                containerRef: t,
                                children: (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(o.Text, {
                                            variant: 'text-xs/bold',
                                            className: x.replyHeader,
                                            children: null != i ? i : g.intl.string(g.t['/VQax8'])
                                        }),
                                        d,
                                        (0, l.jsx)(C, {
                                            onEnter: (e) => {
                                                r(e), m();
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
function C(e) {
    let { placeholder: t, onEnter: n, setEditorRef: r, showEmojiButton: o = !1, renderAttachButton: s, autoFocus: m = !0, onFocus: f, channel: p, className: v } = e,
        [g, P] = i.useState(''),
        [C, Z] = i.useState((0, c.JM)('')),
        j = () => {
            P(''), Z((0, c.JM)(''));
        },
        w = u.Ie.ATOMIC_REACTOR_REPLY_INPUT,
        b = i.useRef(null);
    return (0, l.jsx)(d.Z, {
        ref: b,
        placeholder: t,
        editorClassName: v,
        className: a()(x.replyInput, v),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: h.z,
        channel: null != p ? p : E,
        onChange: (e, t, n) => {
            P(t), Z(n);
        },
        type: o
            ? {
                  ...w,
                  emojis: { button: !0 }
              }
            : w,
        textValue: g,
        richValue: C,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > h.z
                ? Promise.resolve({
                      shouldClear: !1,
                      shouldRefocus: !0
                  })
                : (n(t),
                  j(),
                  Promise.resolve({
                      shouldClear: !0,
                      shouldRefocus: !1
                  }));
        },
        setEditorRef: r,
        focused: m,
        onFocus: f,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == b.current) return 'top';
            let e = b.current.getBoundingClientRect(),
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
    j = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            r = (0, s.ZP)(),
            [a, u] = i.useState(!1),
            c = i.useRef(null);
        return (
            Z(() => u(!1), c),
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
                                    channel: E,
                                    closePopout: () => {
                                        u(!1);
                                    },
                                    onSelectEmoji: (e, n, l) => {
                                        null != e && (t(e, n, l), u(!1));
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
                                className: x.reaction,
                                children: (0, l.jsx)(m.Z, {
                                    active: !1,
                                    tabIndex: 0,
                                    onClick: () => {
                                        null == n || n(), u(!0);
                                    }
                                })
                            })
                    })
            })
        );
    },
    w = (e) => {
        let { onInteraction: t, showReact: n = !0, showReply: r = !0, popoutProps: s = {} } = e,
            { replyHeaderText: u, replyPlaceholder: c, popoutBody: d } = s,
            [m, f] = i.useState(!1),
            p = i.useRef(null);
        return (
            Z(() => f(!1), p),
            (0, l.jsx)(l.Fragment, {
                children: (0, l.jsxs)('div', {
                    className: x.reactions,
                    children: [
                        n &&
                            (0, l.jsx)(j, {
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
                                ref: p,
                                headerText: u,
                                placeholder: c,
                                showPopout: m,
                                body: d,
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
                                            className: a()(x.reaction, x.emojiButton),
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

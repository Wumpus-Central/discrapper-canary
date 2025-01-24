n.d(t, {
    A7: function () {
        return C;
    },
    dE: function () {
        return w;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    u = n(410030),
    s = n(541716),
    c = n(752305),
    d = n(893718),
    f = n(318766),
    p = n(931651),
    m = n(131704),
    h = n(142550),
    v = n(981631),
    g = n(388032),
    x = n(26858);
let P = (0, m.kt)({
        id: '1',
        type: v.d4z.DM
    }),
    E = i.forwardRef(function (e, t) {
        let { placeholder: n, headerText: i, onEnter: l, showPopout: s, children: c, body: d, hide: f } = e,
            p = (0, u.ZP)();
        return (0, r.jsx)(a.Popout, {
            align: 'right',
            position: 'bottom',
            shouldShow: s,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, r.jsx)(a.ThemeProvider, {
                    theme: p,
                    children: (e) =>
                        (0, r.jsx)('div', {
                            className: o()([x.reply, e]),
                            ref: t,
                            children: (0, r.jsx)(a.FocusLock, {
                                containerRef: t,
                                children: (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-xs/bold',
                                            className: x.replyHeader,
                                            children: null != i ? i : g.intl.string(g.t['/VQax8'])
                                        }),
                                        d,
                                        (0, r.jsx)(C, {
                                            onEnter: (e) => {
                                                l(e), f();
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
    let { placeholder: t, onEnter: n, setEditorRef: l, showEmojiButton: a = !1, renderAttachButton: u, autoFocus: f = !0, onFocus: p, channel: m, className: v } = e,
        [g, E] = i.useState(''),
        [C, Z] = i.useState((0, c.JM)('')),
        w = () => {
            E(''), Z((0, c.JM)(''));
        },
        j = s.Ie.ATOMIC_REACTOR_REPLY_INPUT,
        b = i.useRef(null);
    return (0, r.jsx)(d.Z, {
        ref: b,
        placeholder: t,
        editorClassName: v,
        className: o()(x.replyInput, v),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: h.z,
        channel: null != m ? m : P,
        onChange: (e, t, n) => {
            E(t), Z(n);
        },
        type: a
            ? {
                  ...j,
                  emojis: { button: !0 }
              }
            : j,
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
                  w(),
                  Promise.resolve({
                      shouldClear: !0,
                      shouldRefocus: !1
                  }));
        },
        setEditorRef: l,
        focused: f,
        onFocus: p,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (() => {
            if (null == b.current) return 'top';
            let e = b.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? 'bottom' : 'top';
        })(),
        renderAttachButton: u
    });
}
let Z = (e, t) => {
        i.useEffect(() => {
            let n = (t) => {
                    'Escape' === t.key && e();
                },
                r = (n) => {
                    var r;
                    null != n.target && !(null == t ? void 0 : null === (r = t.current) || void 0 === r ? void 0 : r.contains(null == n ? void 0 : n.target)) && e();
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
    w = (e) => {
        let { onSelectEmoji: t, onClick: n } = e,
            l = (0, u.ZP)(),
            [o, s] = i.useState(!1),
            c = i.useRef(null);
        return (
            Z(() => s(!1), c),
            (0, r.jsx)(a.Popout, {
                align: 'right',
                position: 'top',
                shouldShow: o,
                disablePointerEvents: !1,
                renderPopout: () =>
                    (0, r.jsx)(a.ThemeProvider, {
                        theme: l,
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: e,
                                ref: c,
                                children: (0, r.jsx)(p.$, {
                                    messageId: v.lds,
                                    channel: P,
                                    closePopout: () => {
                                        s(!1);
                                    },
                                    onSelectEmoji: (e, n, r) => {
                                        null != e && (t(e, n, r), s(!1));
                                    }
                                })
                            })
                    }),
                children: () =>
                    (0, r.jsx)(a.Tooltip, {
                        text: g.intl.string(g.t.lfIHs7),
                        children: (e) =>
                            (0, r.jsx)('div', {
                                ...e,
                                className: x.reaction,
                                children: (0, r.jsx)(f.Z, {
                                    active: !1,
                                    tabIndex: 0,
                                    onClick: () => {
                                        null == n || n(), s(!0);
                                    }
                                })
                            })
                    })
            })
        );
    };
t.ZP = (e) => {
    let { onInteraction: t, showReact: n = !0, showReply: l = !0, popoutProps: u = {} } = e,
        { replyHeaderText: s, replyPlaceholder: c, popoutBody: d } = u,
        [f, p] = i.useState(!1),
        m = i.useRef(null);
    return (
        Z(() => p(!1), m),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)('div', {
                className: x.reactions,
                children: [
                    n &&
                        (0, r.jsx)(w, {
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
                                    p(!1);
                            }
                        }),
                    l &&
                        (0, r.jsx)(E, {
                            hide: () => p(!1),
                            ref: m,
                            headerText: s,
                            placeholder: c,
                            showPopout: f,
                            body: d,
                            onEnter: (e) => {
                                t({
                                    interactionType: h.L.ReplySubmit,
                                    emoji: null,
                                    reply: e
                                });
                            },
                            children: (0, r.jsx)(a.Tooltip, {
                                text: g.intl.string(g.t['5IEsGx']),
                                children: (e) =>
                                    (0, r.jsx)('button', {
                                        ...e,
                                        className: o()(x.reaction, x.emojiButton),
                                        onClick: () => {
                                            t({
                                                interactionType: h.L.ReplyBegin,
                                                emoji: null,
                                                reply: null
                                            }),
                                                p(!0);
                                        },
                                        children: (0, r.jsx)(a.ArrowAngleLeftUpIcon, {})
                                    })
                            })
                        })
                ]
            })
        })
    );
};

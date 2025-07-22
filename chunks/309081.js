(n.d(t, { Z: () => k }), n(388685));
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(596454),
    d = n(313201),
    f = n(907040),
    m = n(906411),
    p = n(592125),
    b = n(358085),
    g = n(79390),
    h = n(35463),
    j = n(489887),
    v = n(185923),
    w = n(957825),
    x = n(388032),
    O = n(687852);
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    }
    return a;
}
let P = {
    offset: {
        top: -4,
        bottom: -4,
        left: 0,
        right: -8
    }
};
function C(e) {
    let { hasUpload: t, mediaUrl: n, mediaFilename: a, imageClassName: l, emoji: i, emojiClassName: o, fallback: s } = e;
    return t
        ? (0, r.jsx)('img', {
              src: n,
              alt: a,
              className: l
          })
        : null != i
          ? (0, r.jsx)(u.Z, {
                className: o,
                emojiId: i.id,
                emojiName: i.type === m.B.UNICODE ? i.optionallyDiverseSequence : i.name,
                animated: i.animated
            })
          : s;
}
function _(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: a, closePopout: l } = e;
    return (0, r.jsx)('div', {
        className: O.menuContainer,
        children: (0, r.jsx)(c.v2r, {
            navId: 'poll-media-edit-menu',
            onClose: l,
            'aria-label': x.intl.string(x.t['cV+h7O']),
            onSelect: t,
            children: (0, r.jsxs)(c.kSQ, {
                children: [
                    (0, r.jsx)(c.sNh, {
                        id: 'poll-media-replace',
                        label: x.intl.string(x.t.CZeRhY),
                        action: n
                    }),
                    (0, r.jsx)(c.sNh, {
                        id: 'poll-media-delete',
                        label: x.intl.string(x.t.IhMxgo),
                        action: a,
                        color: 'danger'
                    })
                ]
            })
        })
    });
}
function R(e) {
    let { channelId: t, localCreationAnswerId: n, buttonImage: l, onEmojiSelect: s, onEmojiRemove: u, answerIndex: d, shouldShowEmojiPicker: m, toggleEmojiPicker: b, containerRef: j } = e,
        P = a.useRef(null),
        R = (0, o.e7)([p.Z], () => p.Z.getChannel(t)),
        {
            emoji: E,
            isLoadingMedia: k,
            hasUpload: A,
            mediaUrl: D,
            mediaFilename: S
        } = (0, h.Z)({
            channelId: t,
            localCreationAnswerId: n,
            image: l
        }),
        I = A || null != E,
        N = a.useCallback(() => {
            u(d);
        }, [u, d]),
        T = a.useMemo(
            () =>
                A
                    ? x.intl.formatToPlainString(x.t.vcC7Qk, {
                          imageName: (0, g.fw)(S),
                          answerNumber: d + 1
                      })
                    : null != E
                      ? x.intl.formatToPlainString(x.t.ncOAhY, {
                            emojiName: E.name,
                            answerNumber: d + 1
                        })
                      : x.intl.formatToPlainString(x.t.emdpNj, { answerNumber: d + 1 }),
            [A, E, d, S]
        ),
        L = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)('div', {
                    className: O.emojiPicker,
                    children: (0, r.jsx)(f.Z, {
                        channel: R,
                        pickerIntention: v.Hz.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r } = e;
                            (null != n && s(n, d), r && t());
                        }
                    })
                });
            },
            [R, s, d]
        ),
        B = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(_, {
                    onSelect: t,
                    onEditMedia: b,
                    onDeleteMedia: N,
                    closePopout: t
                });
            },
            [N, b]
        ),
        U = k
            ? (0, r.jsx)(c.$jN, { className: O.spinnerWrapperDefault })
            : (0, r.jsx)(C, {
                  hasUpload: A,
                  mediaUrl: D,
                  mediaFilename: S,
                  imageClassName: i()(O.media, O.gifDefault),
                  emoji: E,
                  emojiClassName: i()(O.media, O.emojiDefault),
                  fallback: (0, r.jsx)(c.EO4, {
                      size: 'md',
                      color: 'currentColor',
                      className: O.expressionPickerIconDefault
                  })
              }),
        Z = i()(w.CT, O.expressionPickerButtonDefault, { [O.canEditMedia]: I });
    return (0, r.jsx)(c.yRy, {
        targetElementRef: j,
        renderPopout: L,
        shouldShow: m,
        onRequestClose: b,
        animation: c.yRy.Animation.NONE,
        position: 'bottom',
        spacing: 2,
        children: (e) => {
            var { 'aria-controls': t, 'aria-expanded': n } = e;
            return (
                y(e, ['aria-controls', 'aria-expanded']),
                (0, r.jsx)(c.yRy, {
                    targetElementRef: P,
                    animation: c.yRy.Animation.NONE,
                    position: 'bottom',
                    renderPopout: B,
                    children: (e) => {
                        var a,
                            l,
                            { onClick: i, 'aria-controls': o, 'aria-expanded': s } = e,
                            u = y(e, ['onClick', 'aria-controls', 'aria-expanded']);
                        return (0, r.jsxs)(
                            c.P3F,
                            ((a = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({ innerRef: P }, u)),
                            (l = l =
                                {
                                    className: Z,
                                    onClick: I && !m ? i : b,
                                    'aria-label': T,
                                    'aria-controls': null != t ? t : o,
                                    'aria-expanded': n || s,
                                    children: [
                                        U,
                                        I &&
                                            (0, r.jsx)(c.vdY, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: O.editIcon,
                                                'aria-hidden': !0
                                            })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            a)
                        );
                    }
                })
            );
        }
    });
}
function E(e) {
    var t;
    let { value: n, id: a } = e,
        l = (() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.length) ? e : 0;
            return j.WA - t;
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: O.characterCount,
                'aria-hidden': 'true',
                children: [null != (t = null == n ? void 0 : n.length) ? t : 0, ' / ', j.WA]
            }),
            (0, r.jsxs)(c.nn4, {
                id: a,
                children: [x.intl.format(x.t.fR1coa, { remainingCharacters: l }), ' ', x.intl.format(x.t['+DFxLS'], { maxLength: j.WA })]
            })
        ]
    });
}
let k = a.forwardRef(function (e, t) {
    let { channelId: n, answer: l, index: o, isLastAnswer: u, onAnswerTextChange: f, onEmojiSelect: m, onEmojiRemove: p, canRemoveAnswer: h, onRemoveAnswer: v, addAnswer: w, submitPoll: y, answerTextInputRefs: C, error: _, inputRef: k, deleteButtonRef: A } = e,
        D = a.useRef(null),
        S = (0, d.Dt)(),
        I = (0, d.Dt)(),
        N = null != _ && _.length > 0,
        [T, L] = a.useState(!1),
        B = a.useCallback(() => {
            L((e) => !e);
        }, []),
        U = a.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case 'enter':
                        var r;
                        (u && (e.preventDefault(), ((0, g.cS)(l) || 'macos' !== (0, b.getOS)() ? t : n) ? (e.stopPropagation(), y()) : w()), null == (r = C.current[o + 1]) || r.focus());
                        break;
                    case 'e':
                        ('macos' === (0, b.getOS)() ? n : t) && (e.preventDefault(), e.stopPropagation(), B());
                }
            },
            [w, l, C, o, u, y, B]
        ),
        Z = (0, r.jsx)(R, {
            containerRef: D,
            channelId: n,
            buttonImage: l.image,
            onEmojiSelect: m,
            onEmojiRemove: p,
            localCreationAnswerId: l.localCreationAnswerId,
            answerIndex: o,
            shouldShowEmojiPicker: T,
            toggleEmojiPicker: B
        });
    return (0, r.jsxs)('div', {
        ref: D,
        className: i()(O.answerRow, { [O.hasDeleteButton]: h }),
        children: [
            (0, r.jsxs)('div', {
                className: i()(O.defaultTextInputWrapper, { [O.hasError]: N }),
                ref: t,
                children: [
                    Z,
                    (0, r.jsx)(s.Is, {
                        'aria-label': x.intl.formatToPlainString(x.t['3+V8Gx'], { answerNumber: o + 1 }),
                        placeholder: x.intl.string(x.t.NNHVlp),
                        value: l.text,
                        className: O.defaultTextInput,
                        inputClassName: O.defaultTextInput,
                        onChange: (e) =>
                            f({
                                text: e,
                                index: o,
                                localCreationAnswerId: l.localCreationAnswerId
                            }),
                        onKeyDown: U,
                        maxLength: j.WA,
                        'aria-invalid': N,
                        'aria-describedby': N ? S : I,
                        focusProps: P,
                        inputRef: k
                    }),
                    (0, r.jsx)(E, {
                        value: l.text,
                        id: I
                    })
                ]
            }),
            h &&
                (0, r.jsx)(c.P3F, {
                    onClick: () => v(o),
                    className: O.removeAnswerButtonDefault,
                    'aria-label': x.intl.formatToPlainString(x.t['22fjER'], { answerNumber: o + 1 }),
                    ref: A,
                    children: (0, r.jsx)(c.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: O.trashIcon,
                        'aria-hidden': !0
                    })
                }),
            N &&
                (0, r.jsx)(c.Text, {
                    id: S,
                    variant: 'text-xs/medium',
                    color: 'text-danger',
                    className: O.__invalid_errorText,
                    children: _
                })
        ]
    });
});

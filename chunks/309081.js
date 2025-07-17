(n.d(t, { Z: () => E }), n(388685));
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(596454),
    u = n(313201),
    d = n(907040),
    f = n(906411),
    m = n(592125),
    p = n(358085),
    b = n(79390),
    g = n(35463),
    h = n(489887),
    j = n(185923),
    v = n(957825),
    w = n(388032),
    x = n(687852);
function O(e, t) {
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
let y = {
    offset: {
        top: -4,
        bottom: -4,
        left: 0,
        right: -8
    }
};
function P(e) {
    let { hasUpload: t, mediaUrl: n, mediaFilename: a, imageClassName: l, emoji: i, emojiClassName: o, fallback: s } = e;
    return t
        ? (0, r.jsx)('img', {
              src: n,
              alt: a,
              className: l
          })
        : null != i
          ? (0, r.jsx)(c.Z, {
                className: o,
                emojiId: i.id,
                emojiName: i.type === f.B.UNICODE ? i.optionallyDiverseSequence : i.name,
                animated: i.animated
            })
          : s;
}
function C(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: a, closePopout: l } = e;
    return (0, r.jsx)('div', {
        className: x.menuContainer,
        children: (0, r.jsx)(s.v2r, {
            navId: 'poll-media-edit-menu',
            onClose: l,
            'aria-label': w.intl.string(w.t['cV+h7O']),
            onSelect: t,
            children: (0, r.jsxs)(s.kSQ, {
                children: [
                    (0, r.jsx)(s.sNh, {
                        id: 'poll-media-replace',
                        label: w.intl.string(w.t.CZeRhY),
                        action: n
                    }),
                    (0, r.jsx)(s.sNh, {
                        id: 'poll-media-delete',
                        label: w.intl.string(w.t.IhMxgo),
                        action: a,
                        color: 'danger'
                    })
                ]
            })
        })
    });
}
function _(e) {
    let { channelId: t, localCreationAnswerId: n, buttonImage: l, onEmojiSelect: c, onEmojiRemove: u, answerIndex: f, shouldShowEmojiPicker: p, toggleEmojiPicker: h, containerRef: y } = e,
        _ = a.useRef(null),
        R = (0, o.e7)([m.Z], () => m.Z.getChannel(t)),
        {
            emoji: E,
            isLoadingMedia: k,
            hasUpload: A,
            mediaUrl: D,
            mediaFilename: S
        } = (0, g.Z)({
            channelId: t,
            localCreationAnswerId: n,
            image: l
        }),
        I = A || null != E,
        N = a.useCallback(() => {
            u(f);
        }, [u, f]),
        T = a.useMemo(
            () =>
                A
                    ? w.intl.formatToPlainString(w.t.vcC7Qk, {
                          imageName: (0, b.fw)(S),
                          answerNumber: f + 1
                      })
                    : null != E
                      ? w.intl.formatToPlainString(w.t.ncOAhY, {
                            emojiName: E.name,
                            answerNumber: f + 1
                        })
                      : w.intl.formatToPlainString(w.t.emdpNj, { answerNumber: f + 1 }),
            [A, E, f, S]
        ),
        L = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)('div', {
                    className: x.emojiPicker,
                    children: (0, r.jsx)(d.Z, {
                        channel: R,
                        pickerIntention: j.Hz.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r } = e;
                            (null != n && c(n, f), r && t());
                        }
                    })
                });
            },
            [R, c, f]
        ),
        B = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(C, {
                    onSelect: t,
                    onEditMedia: h,
                    onDeleteMedia: N,
                    closePopout: t
                });
            },
            [N, h]
        ),
        U = k
            ? (0, r.jsx)(s.$jN, { className: x.spinnerWrapperDefault })
            : (0, r.jsx)(P, {
                  hasUpload: A,
                  mediaUrl: D,
                  mediaFilename: S,
                  imageClassName: i()(x.media, x.gifDefault),
                  emoji: E,
                  emojiClassName: i()(x.media, x.emojiDefault),
                  fallback: (0, r.jsx)(s.EO4, {
                      size: 'md',
                      color: 'currentColor',
                      className: x.expressionPickerIconDefault
                  })
              }),
        Z = i()(v.CT, x.expressionPickerButtonDefault, { [x.canEditMedia]: I });
    return (0, r.jsx)(s.yRy, {
        targetElementRef: y,
        renderPopout: L,
        shouldShow: p,
        onRequestClose: h,
        animation: s.yRy.Animation.NONE,
        position: 'bottom',
        spacing: 2,
        children: (e) => {
            var { 'aria-controls': t, 'aria-expanded': n } = e;
            return (
                O(e, ['aria-controls', 'aria-expanded']),
                (0, r.jsx)(s.yRy, {
                    targetElementRef: _,
                    animation: s.yRy.Animation.NONE,
                    position: 'bottom',
                    renderPopout: B,
                    children: (e) => {
                        var a,
                            l,
                            { onClick: i, 'aria-controls': o, 'aria-expanded': c } = e,
                            u = O(e, ['onClick', 'aria-controls', 'aria-expanded']);
                        return (0, r.jsxs)(
                            s.P3F,
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
                            })({ innerRef: _ }, u)),
                            (l = l =
                                {
                                    className: Z,
                                    onClick: I && !p ? i : h,
                                    'aria-label': T,
                                    'aria-controls': null != t ? t : o,
                                    'aria-expanded': n || c,
                                    children: [
                                        U,
                                        I &&
                                            (0, r.jsx)(s.vdY, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: x.editIcon,
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
function R(e) {
    var t;
    let { value: n, id: a } = e,
        l = (() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.length) ? e : 0;
            return h.WA - t;
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: x.characterCount,
                'aria-hidden': 'true',
                children: [null != (t = null == n ? void 0 : n.length) ? t : 0, ' / ', h.WA]
            }),
            (0, r.jsxs)(s.nn4, {
                id: a,
                children: [w.intl.format(w.t.fR1coa, { remainingCharacters: l }), ' ', w.intl.format(w.t['+DFxLS'], { maxLength: h.WA })]
            })
        ]
    });
}
let E = a.forwardRef(function (e, t) {
    let { channelId: n, answer: l, index: o, isLastAnswer: c, onAnswerTextChange: d, onEmojiSelect: f, onEmojiRemove: m, canRemoveAnswer: g, onRemoveAnswer: j, addAnswer: v, submitPoll: O, answerTextInputRefs: P, error: C, inputRef: E, deleteButtonRef: k } = e,
        A = a.useRef(null),
        D = (0, u.Dt)(),
        S = (0, u.Dt)(),
        I = null != C && C.length > 0,
        [N, T] = a.useState(!1),
        L = a.useCallback(() => {
            T((e) => !e);
        }, []),
        B = a.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case 'enter':
                        var r;
                        (c && (e.preventDefault(), ((0, b.cS)(l) || 'macos' !== (0, p.getOS)() ? t : n) ? (e.stopPropagation(), O()) : v()), null == (r = P.current[o + 1]) || r.focus());
                        break;
                    case 'e':
                        ('macos' === (0, p.getOS)() ? n : t) && (e.preventDefault(), e.stopPropagation(), L());
                }
            },
            [v, l, P, o, c, O, L]
        ),
        U = (0, r.jsx)(_, {
            containerRef: A,
            channelId: n,
            buttonImage: l.image,
            onEmojiSelect: f,
            onEmojiRemove: m,
            localCreationAnswerId: l.localCreationAnswerId,
            answerIndex: o,
            shouldShowEmojiPicker: N,
            toggleEmojiPicker: L
        });
    return (0, r.jsxs)('div', {
        ref: A,
        className: i()(x.answerRow, { [x.hasDeleteButton]: g }),
        children: [
            (0, r.jsxs)('div', {
                className: i()(x.defaultTextInputWrapper, { [x.hasError]: I }),
                ref: t,
                children: [
                    U,
                    (0, r.jsx)(s.oil, {
                        'aria-label': w.intl.formatToPlainString(w.t['3+V8Gx'], { answerNumber: o + 1 }),
                        placeholder: w.intl.string(w.t.NNHVlp),
                        value: l.text,
                        className: x.defaultTextInput,
                        inputClassName: x.defaultTextInput,
                        onChange: (e) =>
                            d({
                                text: e,
                                index: o,
                                localCreationAnswerId: l.localCreationAnswerId
                            }),
                        onKeyDown: B,
                        maxLength: h.WA,
                        'aria-invalid': I,
                        'aria-describedby': I ? D : S,
                        focusProps: y,
                        inputRef: E
                    }),
                    (0, r.jsx)(R, {
                        value: l.text,
                        id: S
                    })
                ]
            }),
            g &&
                (0, r.jsx)(s.P3F, {
                    onClick: () => j(o),
                    className: x.removeAnswerButtonDefault,
                    'aria-label': w.intl.formatToPlainString(w.t['22fjER'], { answerNumber: o + 1 }),
                    ref: k,
                    children: (0, r.jsx)(s.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: x.trashIcon,
                        'aria-hidden': !0
                    })
                }),
            I &&
                (0, r.jsx)(s.Text, {
                    id: D,
                    variant: 'text-xs/medium',
                    color: 'text-danger',
                    className: x.__invalid_errorText,
                    children: C
                })
        ]
    });
});

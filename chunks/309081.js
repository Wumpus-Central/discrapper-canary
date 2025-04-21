n.d(t, {
    I: () => S,
    Z: () => T
}),
    n(388685),
    n(953529);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    i = n(263568),
    s = n(442837),
    c = n(481060),
    u = n(166459),
    d = n(596454),
    f = n(273031),
    m = n(313201),
    p = n(907040),
    b = n(906411),
    g = n(592125),
    h = n(703558),
    O = n(117530),
    j = n(358085),
    y = n(79390),
    x = n(885001),
    w = n(35463),
    v = n(489887),
    _ = n(185923),
    P = n(957825),
    C = n(388032),
    E = n(687852);
function A(e) {
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
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
let I = {
    offset: {
        top: -4,
        bottom: -4,
        left: 0,
        right: -8
    }
};
function S(e) {
    let { hasUpload: t, mediaUrl: n, mediaFilename: a, imageClassName: l, emoji: o, emojiClassName: i, fallback: s } = e;
    return t
        ? (0, r.jsx)('img', {
              src: n,
              alt: a,
              className: l
          })
        : null != o
          ? (0, r.jsx)(d.Z, {
                className: i,
                emojiId: o.id,
                emojiName: o.type === b.B.UNICODE ? o.optionallyDiverseSequence : o.name,
                animated: o.animated
            })
          : s;
}
function D(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: a, closePopout: l } = e;
    return (0, r.jsx)('div', {
        className: E.menuContainer,
        children: (0, r.jsx)(c.v2r, {
            navId: 'poll-media-edit-menu',
            onClose: l,
            'aria-label': C.intl.string(C.t['cV+h7O']),
            onSelect: t,
            children: (0, r.jsxs)(c.kSQ, {
                children: [
                    (0, r.jsx)(c.sNh, {
                        id: 'poll-media-replace',
                        label: C.intl.string(C.t.CZeRhY),
                        action: n
                    }),
                    (0, r.jsx)(c.sNh, {
                        id: 'poll-media-delete',
                        label: C.intl.string(C.t.IhMxgo),
                        action: a,
                        color: 'danger'
                    })
                ]
            })
        })
    });
}
function N(e) {
    let { channelId: t, localCreationAnswerId: n, buttonImage: l, layout: u, onEmojiSelect: d, onEmojiRemove: f, answerIndex: m, shouldShowEmojiPicker: b, toggleEmojiPicker: h, containerRef: O } = e,
        j = a.useRef(null),
        x = (0, s.e7)([g.Z], () => g.Z.getChannel(t)),
        {
            emoji: v,
            isLoadingMedia: I,
            hasUpload: N,
            mediaUrl: R,
            mediaFilename: T
        } = (0, w.Z)({
            channelId: t,
            localCreationAnswerId: n,
            image: l
        }),
        L = u === i.C.DEFAULT,
        B = N || null != v,
        Z = a.useCallback(() => {
            f(m);
        }, [f, m]),
        U = a.useMemo(
            () =>
                N
                    ? C.intl.formatToPlainString(C.t.vcC7Qk, {
                          imageName: (0, y.fw)(T),
                          answerNumber: m + 1
                      })
                    : null != v
                      ? C.intl.formatToPlainString(C.t.ncOAhY, {
                            emojiName: v.name,
                            answerNumber: m + 1
                        })
                      : C.intl.formatToPlainString(C.t.emdpNj, { answerNumber: m + 1 }),
            [N, v, m, T]
        ),
        M = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)('div', {
                    className: E.emojiPicker,
                    children: (0, r.jsx)(p.Z, {
                        channel: x,
                        pickerIntention: _.Hz.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e, n) => {
                            null != e && d(e, m), n && t();
                        }
                    })
                });
            },
            [x, d, m]
        ),
        z = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(D, {
                    onSelect: t,
                    onEditMedia: h,
                    onDeleteMedia: Z,
                    closePopout: t
                });
            },
            [Z, h]
        ),
        W = I
            ? (0, r.jsx)(c.$jN, { className: L ? E.spinnerWrapperDefault : E.spinnerWrapperImageOnly })
            : (0, r.jsx)(S, {
                  hasUpload: N,
                  mediaUrl: R,
                  mediaFilename: T,
                  imageClassName: o()(E.media, L ? E.gifDefault : E.gifJumbo),
                  emoji: v,
                  emojiClassName: o()(E.media, L ? E.emojiDefault : E.emojiJumbo),
                  fallback: (0, r.jsx)(c.EO4, {
                      size: 'md',
                      color: 'currentColor',
                      className: L ? E.expressionPickerIconDefault : E.expressionPickerIconImageOnly
                  })
              }),
        H = o()(P.CT, u === i.C.IMAGE_ONLY_ANSWERS ? E.expressionPickerButtonImageOnly : E.expressionPickerButtonDefault, { [E.canEditMedia]: B });
    return (0, r.jsx)(c.yRy, {
        targetElementRef: O,
        renderPopout: M,
        shouldShow: b,
        onRequestClose: h,
        animation: c.yRy.Animation.NONE,
        position: 'bottom',
        spacing: 2,
        children: (e) => {
            var { 'aria-controls': t, 'aria-expanded': n } = e;
            return (
                k(e, ['aria-controls', 'aria-expanded']),
                (0, r.jsx)(c.yRy, {
                    animation: c.yRy.Animation.NONE,
                    position: 'bottom',
                    renderPopout: z,
                    children: (e) => {
                        var a,
                            l,
                            { onClick: o, 'aria-controls': i, 'aria-expanded': s } = e,
                            u = k(e, ['onClick', 'aria-controls', 'aria-expanded']);
                        return (0, r.jsxs)(
                            c.P3F,
                            ((a = A({ ref: j }, u)),
                            (l = l =
                                {
                                    className: H,
                                    onClick: B && !b ? o : h,
                                    'aria-label': U,
                                    'aria-controls': null != t ? t : i,
                                    'aria-expanded': n || s,
                                    children: [
                                        W,
                                        B &&
                                            (0, r.jsx)(c.vdY, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: E.editIcon,
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
            return v.WA - t;
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: E.characterCount,
                'aria-hidden': 'true',
                children: [null != (t = null == n ? void 0 : n.length) ? t : 0, ' / ', v.WA]
            }),
            (0, r.jsxs)(c.nn4, {
                id: a,
                children: [C.intl.format(C.t.fR1coa, { remainingCharacters: l }), ' ', C.intl.format(C.t['+DFxLS'], { maxLength: v.WA })]
            })
        ]
    });
}
let T = a.forwardRef(function (e, t) {
    let { channelId: l, answer: d, index: p, layout: b, isLastAnswer: g, onAnswerTextChange: w, onEmojiSelect: _, onEmojiRemove: P, canRemoveAnswer: k, onRemoveAnswer: S, addAnswer: D, submitPoll: T, answerTextInputRefs: L, error: B, inputRef: Z, deleteButtonRef: U } = e,
        M = a.useRef(null),
        z = (0, m.Dt)(),
        W = (0, m.Dt)(),
        H = null != B && B.length > 0,
        Y = (0, s.e7)([O.Z], () => O.Z.getUpload(l, d.localCreationAnswerId, h.d.Poll)),
        [K, F] = a.useState(!1),
        q = () => {
            function e(e) {
                u.Z.update(l, d.localCreationAnswerId, h.d.Poll, { description: e });
            }
            (0, c.ZDy)(async () => {
                let { default: t } = await n.e('2538').then(n.bind(n, 89619));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        A(
                            {
                                channelId: l,
                                answer: d,
                                onSave: e
                            },
                            n
                        )
                    );
            });
        },
        X = a.useCallback(() => {
            F((e) => !e);
        }, []),
        J = a.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case 'enter':
                        var r;
                        g && (e.preventDefault(), ((0, y.cS)(d, b) || 'macos' !== (0, j.getOS)() ? t : n) ? (e.stopPropagation(), T()) : D()), null == (r = L.current[p + 1]) || r.focus();
                        break;
                    case 'e':
                        ('macos' === (0, j.getOS)() ? n : t) && (e.preventDefault(), e.stopPropagation(), X());
                }
            },
            [D, d, L, p, g, b, T, X]
        ),
        G = (0, r.jsx)(N, {
            containerRef: M,
            channelId: l,
            buttonImage: d.image,
            layout: b,
            onEmojiSelect: _,
            onEmojiRemove: P,
            localCreationAnswerId: d.localCreationAnswerId,
            answerIndex: p,
            shouldShowEmojiPicker: K,
            toggleEmojiPicker: X
        }),
        Q = null != Y && null != Y.description && Y.description.length > 0;
    return b === i.C.DEFAULT
        ? (0, r.jsxs)('div', {
              ref: M,
              className: o()(E.answerRow, { [E.hasDeleteButton]: k }),
              children: [
                  (0, r.jsxs)('div', {
                      className: o()(E.defaultTextInputWrapper, { [E.hasError]: H }),
                      ref: t,
                      children: [
                          G,
                          (0, r.jsx)(c.oil, {
                              'aria-label': C.intl.formatToPlainString(C.t['3+V8Gx'], { answerNumber: p + 1 }),
                              placeholder: C.intl.string(C.t.NNHVlp),
                              value: d.text,
                              className: E.defaultTextInput,
                              inputClassName: E.defaultTextInput,
                              onChange: (e) =>
                                  w({
                                      text: e,
                                      index: p,
                                      localCreationAnswerId: d.localCreationAnswerId
                                  }),
                              onKeyDown: J,
                              maxLength: v.WA,
                              'aria-invalid': H,
                              'aria-describedby': H ? z : W,
                              focusProps: I,
                              inputRef: Z
                          }),
                          (0, r.jsx)(R, {
                              value: d.text,
                              id: W
                          })
                      ]
                  }),
                  k &&
                      (0, r.jsx)(c.P3F, {
                          onClick: () => S(p),
                          className: E.removeAnswerButtonDefault,
                          'aria-label': C.intl.formatToPlainString(C.t['22fjER'], { answerNumber: p + 1 }),
                          ref: U,
                          children: (0, r.jsx)(c.XHJ, {
                              size: 'md',
                              color: 'currentColor',
                              className: E.trashIcon,
                              'aria-hidden': !0
                          })
                      }),
                  H &&
                      (0, r.jsx)(c.Text, {
                          id: z,
                          variant: 'text-xs/medium',
                          color: 'text-danger',
                          className: E.__invalid_errorText,
                          children: B
                      })
              ]
          })
        : (0, r.jsxs)('div', {
              className: E.imageOnlyContainer,
              ref: t,
              children: [
                  (0, r.jsxs)('div', {
                      className: E.imagePreviewContainer,
                      children: [
                          G,
                          Q &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: E.altBadge,
                                          'aria-hidden': !0,
                                          children: C.intl.string(C.t.QEW819)
                                      }),
                                      (0, r.jsxs)('div', {
                                          onClick: q,
                                          children: [
                                              (0, r.jsx)(c.nn4, { children: C.intl.string(C.t.piH89v) }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-xxs/medium',
                                                  className: E.altTextPreview,
                                                  children: Y.description
                                              })
                                          ]
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: E.imageOnlyAnswerActionBar,
                      children: [
                          null != Y
                              ? (0, r.jsx)(f.Z, {
                                    tooltip: C.intl.string(C.t.QbhHBQ),
                                    'aria-label': Q ? C.intl.formatToPlainString(C.t.d04UhI, { answerNumber: p + 1 }) : C.intl.formatToPlainString(C.t.mULZgY, { answerNumber: p + 1 }),
                                    onClick: q,
                                    children: (0, r.jsx)(x.N, { 'aria-hidden': !0 })
                                })
                              : null,
                          (0, r.jsx)(f.Z, {
                              tooltip: C.intl.string(C.t.x7DOr6),
                              'aria-label': C.intl.formatToPlainString(C.t['22fjER'], { answerNumber: p + 1 }),
                              onClick: () => S(p),
                              dangerous: !0,
                              children: (0, r.jsx)(c.XHJ, {
                                  size: 'md',
                                  color: 'currentColor',
                                  'aria-hidden': !0
                              })
                          })
                      ]
                  })
              ]
          });
});

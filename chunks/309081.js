n.d(t, {
    I: () => I,
    Z: () => W
}),
    n(388685),
    n(953529);
var r = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
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
    N = n(687852);
function E(e) {
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
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
let k = {
    offset: {
        top: -4,
        bottom: -4,
        left: 0,
        right: -8
    }
};
function I(e) {
    let { hasUpload: t, mediaUrl: n, mediaFilename: a, imageClassName: o, emoji: l, emojiClassName: i, fallback: s } = e;
    return t
        ? (0, r.jsx)('img', {
              src: n,
              alt: a,
              className: o
          })
        : null != l
          ? (0, r.jsx)(d.Z, {
                className: i,
                emojiId: l.id,
                emojiName: l.type === b.B.UNICODE ? l.optionallyDiverseSequence : l.name,
                animated: l.animated
            })
          : s;
}
function S(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: a, closePopout: o } = e;
    return (0, r.jsx)('div', {
        className: N.menuContainer,
        children: (0, r.jsx)(c.v2r, {
            navId: 'poll-media-edit-menu',
            onClose: o,
            'aria-label': C.NW.string(C.t['cV+h7O']),
            onSelect: t,
            children: (0, r.jsxs)(c.kSQ, {
                children: [
                    (0, r.jsx)(c.sNh, {
                        id: 'poll-media-replace',
                        label: C.NW.string(C.t.CZeRhY),
                        action: n
                    }),
                    (0, r.jsx)(c.sNh, {
                        id: 'poll-media-delete',
                        label: C.NW.string(C.t.IhMxgo),
                        action: a,
                        color: 'danger'
                    })
                ]
            })
        })
    });
}
function D(e) {
    let { channelId: t, localCreationAnswerId: n, buttonImage: o, layout: u, onEmojiSelect: d, onEmojiRemove: f, answerIndex: m, shouldShowEmojiPicker: b, toggleEmojiPicker: h, containerRef: O } = e,
        j = a.useRef(null),
        x = (0, s.e7)([g.Z], () => g.Z.getChannel(t)),
        {
            emoji: v,
            isLoadingMedia: k,
            hasUpload: D,
            mediaUrl: R,
            mediaFilename: W
        } = (0, w.Z)({
            channelId: t,
            localCreationAnswerId: n,
            image: o
        }),
        T = u === i.C.DEFAULT,
        L = D || null != v,
        B = a.useCallback(() => {
            f(m);
        }, [f, m]),
        Z = a.useMemo(
            () =>
                D
                    ? C.NW.formatToPlainString(C.t.vcC7Qk, {
                          imageName: (0, y.fw)(W),
                          answerNumber: m + 1
                      })
                    : null != v
                      ? C.NW.formatToPlainString(C.t.ncOAhY, {
                            emojiName: v.name,
                            answerNumber: m + 1
                        })
                      : C.NW.formatToPlainString(C.t.emdpNj, { answerNumber: m + 1 }),
            [D, v, m, W]
        ),
        U = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)('div', {
                    className: N.emojiPicker,
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
        M = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(S, {
                    onSelect: t,
                    onEditMedia: h,
                    onDeleteMedia: B,
                    closePopout: t
                });
            },
            [B, h]
        ),
        z = k
            ? (0, r.jsx)(c.$jN, { className: T ? N.spinnerWrapperDefault : N.spinnerWrapperImageOnly })
            : (0, r.jsx)(I, {
                  hasUpload: D,
                  mediaUrl: R,
                  mediaFilename: W,
                  imageClassName: l()(N.media, T ? N.gifDefault : N.gifJumbo),
                  emoji: v,
                  emojiClassName: l()(N.media, T ? N.emojiDefault : N.emojiJumbo),
                  fallback: (0, r.jsx)(c.EO4, {
                      size: 'md',
                      color: 'currentColor',
                      className: T ? N.expressionPickerIconDefault : N.expressionPickerIconImageOnly
                  })
              }),
        H = l()(P.CT, u === i.C.IMAGE_ONLY_ANSWERS ? N.expressionPickerButtonImageOnly : N.expressionPickerButtonDefault, { [N.canEditMedia]: L });
    return (0, r.jsx)(c.yRy, {
        targetElementRef: O,
        renderPopout: U,
        shouldShow: b,
        onRequestClose: h,
        animation: c.yRy.Animation.NONE,
        position: 'bottom',
        spacing: 2,
        children: (e) => {
            var { 'aria-controls': t, 'aria-expanded': n } = e;
            return (
                A(e, ['aria-controls', 'aria-expanded']),
                (0, r.jsx)(c.yRy, {
                    animation: c.yRy.Animation.NONE,
                    position: 'bottom',
                    renderPopout: M,
                    children: (e) => {
                        var a,
                            o,
                            { onClick: l, 'aria-controls': i, 'aria-expanded': s } = e,
                            u = A(e, ['onClick', 'aria-controls', 'aria-expanded']);
                        return (0, r.jsxs)(
                            c.P3F,
                            ((a = E({ ref: j }, u)),
                            (o = o =
                                {
                                    className: H,
                                    onClick: L && !b ? l : h,
                                    'aria-label': Z,
                                    'aria-controls': null != t ? t : i,
                                    'aria-expanded': n || s,
                                    children: [
                                        z,
                                        L &&
                                            (0, r.jsx)(c.vdY, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: N.editIcon,
                                                'aria-hidden': !0
                                            })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
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
        o = (() => {
            var e;
            let t = null != (e = null == n ? void 0 : n.length) ? e : 0;
            return v.WA - t;
        })();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: N.characterCount,
                'aria-hidden': 'true',
                children: [null != (t = null == n ? void 0 : n.length) ? t : 0, ' / ', v.WA]
            }),
            (0, r.jsxs)(c.nn4, {
                id: a,
                children: [C.NW.format(C.t.fR1coa, { remainingCharacters: o }), ' ', C.NW.format(C.t['+DFxLS'], { maxLength: v.WA })]
            })
        ]
    });
}
let W = a.forwardRef(function (e, t) {
    let { channelId: o, answer: d, index: p, layout: b, isLastAnswer: g, onAnswerTextChange: w, onEmojiSelect: _, onEmojiRemove: P, canRemoveAnswer: A, onRemoveAnswer: I, addAnswer: S, submitPoll: W, answerTextInputRefs: T, error: L, inputRef: B, deleteButtonRef: Z } = e,
        U = a.useRef(null),
        M = (0, m.Dt)(),
        z = (0, m.Dt)(),
        H = null != L && L.length > 0,
        Y = (0, s.e7)([O.Z], () => O.Z.getUpload(o, d.localCreationAnswerId, h.d.Poll)),
        [K, F] = a.useState(!1),
        q = () => {
            function e(e) {
                u.Z.update(o, d.localCreationAnswerId, h.d.Poll, { description: e });
            }
            (0, c.ZDy)(async () => {
                let { default: t } = await n.e('2538').then(n.bind(n, 89619));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        E(
                            {
                                channelId: o,
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
                        g && (e.preventDefault(), ((0, y.cS)(d, b) || 'macos' !== (0, j.getOS)() ? t : n) ? (e.stopPropagation(), W()) : S()), null == (r = T.current[p + 1]) || r.focus();
                        break;
                    case 'e':
                        ('macos' === (0, j.getOS)() ? n : t) && (e.preventDefault(), e.stopPropagation(), X());
                }
            },
            [S, d, T, p, g, b, W, X]
        ),
        G = (0, r.jsx)(D, {
            containerRef: U,
            channelId: o,
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
              ref: U,
              className: l()(N.answerRow, { [N.hasDeleteButton]: A }),
              children: [
                  (0, r.jsxs)('div', {
                      className: l()(N.defaultTextInputWrapper, { [N.hasError]: H }),
                      ref: t,
                      children: [
                          G,
                          (0, r.jsx)(c.oil, {
                              'aria-label': C.NW.formatToPlainString(C.t['3+V8Gx'], { answerNumber: p + 1 }),
                              placeholder: C.NW.string(C.t.NNHVlp),
                              value: d.text,
                              className: N.defaultTextInput,
                              inputClassName: N.defaultTextInput,
                              onChange: (e) =>
                                  w({
                                      text: e,
                                      index: p,
                                      localCreationAnswerId: d.localCreationAnswerId
                                  }),
                              onKeyDown: J,
                              maxLength: v.WA,
                              'aria-invalid': H,
                              'aria-describedby': H ? M : z,
                              focusProps: k,
                              inputRef: B
                          }),
                          (0, r.jsx)(R, {
                              value: d.text,
                              id: z
                          })
                      ]
                  }),
                  A &&
                      (0, r.jsx)(c.P3F, {
                          onClick: () => I(p),
                          className: N.removeAnswerButtonDefault,
                          'aria-label': C.NW.formatToPlainString(C.t['22fjER'], { answerNumber: p + 1 }),
                          ref: Z,
                          children: (0, r.jsx)(c.XHJ, {
                              size: 'md',
                              color: 'currentColor',
                              className: N.trashIcon,
                              'aria-hidden': !0
                          })
                      }),
                  H &&
                      (0, r.jsx)(c.Text, {
                          id: M,
                          variant: 'text-xs/medium',
                          color: 'text-danger',
                          className: N.__invalid_errorText,
                          children: L
                      })
              ]
          })
        : (0, r.jsxs)('div', {
              className: N.imageOnlyContainer,
              ref: t,
              children: [
                  (0, r.jsxs)('div', {
                      className: N.imagePreviewContainer,
                      children: [
                          G,
                          Q &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          variant: 'text-xs/semibold',
                                          className: N.altBadge,
                                          'aria-hidden': !0,
                                          children: C.NW.string(C.t.QEW819)
                                      }),
                                      (0, r.jsxs)('div', {
                                          onClick: q,
                                          children: [
                                              (0, r.jsx)(c.nn4, { children: C.NW.string(C.t.piH89v) }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-xxs/medium',
                                                  className: N.altTextPreview,
                                                  children: Y.description
                                              })
                                          ]
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: N.imageOnlyAnswerActionBar,
                      children: [
                          null != Y
                              ? (0, r.jsx)(f.Z, {
                                    tooltip: C.NW.string(C.t.QbhHBQ),
                                    'aria-label': Q ? C.NW.formatToPlainString(C.t.d04UhI, { answerNumber: p + 1 }) : C.NW.formatToPlainString(C.t.mULZgY, { answerNumber: p + 1 }),
                                    onClick: q,
                                    children: (0, r.jsx)(x.N, { 'aria-hidden': !0 })
                                })
                              : null,
                          (0, r.jsx)(f.Z, {
                              tooltip: C.NW.string(C.t.x7DOr6),
                              'aria-label': C.NW.formatToPlainString(C.t['22fjER'], { answerNumber: p + 1 }),
                              onClick: () => I(p),
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

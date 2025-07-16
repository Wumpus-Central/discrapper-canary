(n.d(t, {
    I: () => S,
    Z: () => L
}),
    n(388685),
    n(953529));
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
    o = n(263568),
    c = n(442837),
    s = n(481060),
    u = n(166459),
    d = n(596454),
    f = n(273031),
    m = n(313201),
    p = n(907040),
    b = n(906411),
    g = n(592125),
    O = n(703558),
    h = n(117530),
    j = n(358085),
    y = n(79390),
    w = n(885001),
    x = n(35463),
    v = n(489887),
    P = n(185923),
    C = n(957825),
    _ = n(388032),
    A = n(687852);
function E(e) {
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
}
function I(e, t) {
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
let k = {
    offset: {
        top: -4,
        bottom: -4,
        left: 0,
        right: -8
    }
};
function S(e) {
    let { hasUpload: t, mediaUrl: n, mediaFilename: a, imageClassName: l, emoji: i, emojiClassName: o, fallback: c } = e;
    return t
        ? (0, r.jsx)('img', {
              src: n,
              alt: a,
              className: l
          })
        : null != i
          ? (0, r.jsx)(d.Z, {
                className: o,
                emojiId: i.id,
                emojiName: i.type === b.B.UNICODE ? i.optionallyDiverseSequence : i.name,
                animated: i.animated
            })
          : c;
}
function R(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: a, closePopout: l } = e;
    return (0, r.jsx)('div', {
        className: A.menuContainer,
        children: (0, r.jsx)(s.v2r, {
            navId: 'poll-media-edit-menu',
            onClose: l,
            'aria-label': _.intl.string(_.t['cV+h7O']),
            onSelect: t,
            children: (0, r.jsxs)(s.kSQ, {
                children: [
                    (0, r.jsx)(s.sNh, {
                        id: 'poll-media-replace',
                        label: _.intl.string(_.t.CZeRhY),
                        action: n
                    }),
                    (0, r.jsx)(s.sNh, {
                        id: 'poll-media-delete',
                        label: _.intl.string(_.t.IhMxgo),
                        action: a,
                        color: 'danger'
                    })
                ]
            })
        })
    });
}
function D(e) {
    let { channelId: t, localCreationAnswerId: n, buttonImage: l, layout: u, onEmojiSelect: d, onEmojiRemove: f, answerIndex: m, shouldShowEmojiPicker: b, toggleEmojiPicker: O, containerRef: h } = e,
        j = a.useRef(null),
        w = (0, c.e7)([g.Z], () => g.Z.getChannel(t)),
        {
            emoji: v,
            isLoadingMedia: k,
            hasUpload: D,
            mediaUrl: N,
            mediaFilename: L
        } = (0, x.Z)({
            channelId: t,
            localCreationAnswerId: n,
            image: l
        }),
        T = u === o.C.DEFAULT,
        B = D || null != v,
        Z = a.useCallback(() => {
            f(m);
        }, [f, m]),
        U = a.useMemo(
            () =>
                D
                    ? _.intl.formatToPlainString(_.t.vcC7Qk, {
                          imageName: (0, y.fw)(L),
                          answerNumber: m + 1
                      })
                    : null != v
                      ? _.intl.formatToPlainString(_.t.ncOAhY, {
                            emojiName: v.name,
                            answerNumber: m + 1
                        })
                      : _.intl.formatToPlainString(_.t.emdpNj, { answerNumber: m + 1 }),
            [D, v, m, L]
        ),
        W = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)('div', {
                    className: A.emojiPicker,
                    children: (0, r.jsx)(p.Z, {
                        channel: w,
                        pickerIntention: P.Hz.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e) => {
                            let { emoji: n, willClose: r } = e;
                            (null != n && d(n, m), r && t());
                        }
                    })
                });
            },
            [w, d, m]
        ),
        H = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(R, {
                    onSelect: t,
                    onEditMedia: O,
                    onDeleteMedia: Z,
                    closePopout: t
                });
            },
            [Z, O]
        ),
        M = k
            ? (0, r.jsx)(s.$jN, { className: T ? A.spinnerWrapperDefault : A.spinnerWrapperImageOnly })
            : (0, r.jsx)(S, {
                  hasUpload: D,
                  mediaUrl: N,
                  mediaFilename: L,
                  imageClassName: i()(A.media, T ? A.gifDefault : A.gifJumbo),
                  emoji: v,
                  emojiClassName: i()(A.media, T ? A.emojiDefault : A.emojiJumbo),
                  fallback: (0, r.jsx)(s.EO4, {
                      size: 'md',
                      color: 'currentColor',
                      className: T ? A.expressionPickerIconDefault : A.expressionPickerIconImageOnly
                  })
              }),
        Y = i()(C.CT, u === o.C.IMAGE_ONLY_ANSWERS ? A.expressionPickerButtonImageOnly : A.expressionPickerButtonDefault, { [A.canEditMedia]: B });
    return (0, r.jsx)(s.yRy, {
        targetElementRef: h,
        renderPopout: W,
        shouldShow: b,
        onRequestClose: O,
        animation: s.yRy.Animation.NONE,
        position: 'bottom',
        spacing: 2,
        children: (e) => {
            var { 'aria-controls': t, 'aria-expanded': n } = e;
            return (
                I(e, ['aria-controls', 'aria-expanded']),
                (0, r.jsx)(s.yRy, {
                    targetElementRef: j,
                    animation: s.yRy.Animation.NONE,
                    position: 'bottom',
                    renderPopout: H,
                    children: (e) => {
                        var a,
                            l,
                            { onClick: i, 'aria-controls': o, 'aria-expanded': c } = e,
                            u = I(e, ['onClick', 'aria-controls', 'aria-expanded']);
                        return (0, r.jsxs)(
                            s.P3F,
                            ((a = E({ innerRef: j }, u)),
                            (l = l =
                                {
                                    className: Y,
                                    onClick: B && !b ? i : O,
                                    'aria-label': U,
                                    'aria-controls': null != t ? t : o,
                                    'aria-expanded': n || c,
                                    children: [
                                        M,
                                        B &&
                                            (0, r.jsx)(s.vdY, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: A.editIcon,
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
function N(e) {
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
                className: A.characterCount,
                'aria-hidden': 'true',
                children: [null != (t = null == n ? void 0 : n.length) ? t : 0, ' / ', v.WA]
            }),
            (0, r.jsxs)(s.nn4, {
                id: a,
                children: [_.intl.format(_.t.fR1coa, { remainingCharacters: l }), ' ', _.intl.format(_.t['+DFxLS'], { maxLength: v.WA })]
            })
        ]
    });
}
let L = a.forwardRef(function (e, t) {
    let { channelId: l, answer: d, index: p, layout: b, isLastAnswer: g, onAnswerTextChange: x, onEmojiSelect: P, onEmojiRemove: C, canRemoveAnswer: I, onRemoveAnswer: S, addAnswer: R, submitPoll: L, answerTextInputRefs: T, error: B, inputRef: Z, deleteButtonRef: U } = e,
        W = a.useRef(null),
        H = (0, m.Dt)(),
        M = (0, m.Dt)(),
        Y = null != B && B.length > 0,
        F = (0, c.e7)([h.Z], () => h.Z.getUpload(l, d.localCreationAnswerId, O.d.Poll)),
        [K, z] = a.useState(!1),
        q = () => {
            function e(e) {
                u.Z.update(l, d.localCreationAnswerId, O.d.Poll, { description: e });
            }
            (0, s.ZDy)(async () => {
                let { default: t } = await n.e('2538').then(n.bind(n, 89619));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        E(
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
        G = a.useCallback(() => {
            z((e) => !e);
        }, []),
        J = a.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case 'enter':
                        var r;
                        (g && (e.preventDefault(), ((0, y.cS)(d, b) || 'macos' !== (0, j.getOS)() ? t : n) ? (e.stopPropagation(), L()) : R()), null == (r = T.current[p + 1]) || r.focus());
                        break;
                    case 'e':
                        ('macos' === (0, j.getOS)() ? n : t) && (e.preventDefault(), e.stopPropagation(), G());
                }
            },
            [R, d, T, p, g, b, L, G]
        ),
        X = (0, r.jsx)(D, {
            containerRef: W,
            channelId: l,
            buttonImage: d.image,
            layout: b,
            onEmojiSelect: P,
            onEmojiRemove: C,
            localCreationAnswerId: d.localCreationAnswerId,
            answerIndex: p,
            shouldShowEmojiPicker: K,
            toggleEmojiPicker: G
        }),
        V = null != F && null != F.description && F.description.length > 0;
    return b === o.C.DEFAULT
        ? (0, r.jsxs)('div', {
              ref: W,
              className: i()(A.answerRow, { [A.hasDeleteButton]: I }),
              children: [
                  (0, r.jsxs)('div', {
                      className: i()(A.defaultTextInputWrapper, { [A.hasError]: Y }),
                      ref: t,
                      children: [
                          X,
                          (0, r.jsx)(s.oil, {
                              'aria-label': _.intl.formatToPlainString(_.t['3+V8Gx'], { answerNumber: p + 1 }),
                              placeholder: _.intl.string(_.t.NNHVlp),
                              value: d.text,
                              className: A.defaultTextInput,
                              inputClassName: A.defaultTextInput,
                              onChange: (e) =>
                                  x({
                                      text: e,
                                      index: p,
                                      localCreationAnswerId: d.localCreationAnswerId
                                  }),
                              onKeyDown: J,
                              maxLength: v.WA,
                              'aria-invalid': Y,
                              'aria-describedby': Y ? H : M,
                              focusProps: k,
                              inputRef: Z
                          }),
                          (0, r.jsx)(N, {
                              value: d.text,
                              id: M
                          })
                      ]
                  }),
                  I &&
                      (0, r.jsx)(s.P3F, {
                          onClick: () => S(p),
                          className: A.removeAnswerButtonDefault,
                          'aria-label': _.intl.formatToPlainString(_.t['22fjER'], { answerNumber: p + 1 }),
                          ref: U,
                          children: (0, r.jsx)(s.XHJ, {
                              size: 'md',
                              color: 'currentColor',
                              className: A.trashIcon,
                              'aria-hidden': !0
                          })
                      }),
                  Y &&
                      (0, r.jsx)(s.Text, {
                          id: H,
                          variant: 'text-xs/medium',
                          color: 'text-danger',
                          className: A.__invalid_errorText,
                          children: B
                      })
              ]
          })
        : (0, r.jsxs)('div', {
              className: A.imageOnlyContainer,
              ref: t,
              children: [
                  (0, r.jsxs)('div', {
                      className: A.imagePreviewContainer,
                      children: [
                          X,
                          V &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xs/semibold',
                                          className: A.altBadge,
                                          'aria-hidden': !0,
                                          children: _.intl.string(_.t.QEW819)
                                      }),
                                      (0, r.jsxs)('div', {
                                          onClick: q,
                                          children: [
                                              (0, r.jsx)(s.nn4, { children: _.intl.string(_.t.piH89v) }),
                                              (0, r.jsx)(s.Text, {
                                                  variant: 'text-xxs/medium',
                                                  className: A.altTextPreview,
                                                  children: F.description
                                              })
                                          ]
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsxs)('div', {
                      className: A.imageOnlyAnswerActionBar,
                      children: [
                          null != F
                              ? (0, r.jsx)(f.Z, {
                                    tooltip: _.intl.string(_.t.QbhHBQ),
                                    'aria-label': V ? _.intl.formatToPlainString(_.t.d04UhI, { answerNumber: p + 1 }) : _.intl.formatToPlainString(_.t.mULZgY, { answerNumber: p + 1 }),
                                    onClick: q,
                                    children: (0, r.jsx)(w.N, { 'aria-hidden': !0 })
                                })
                              : null,
                          (0, r.jsx)(f.Z, {
                              tooltip: _.intl.string(_.t.x7DOr6),
                              'aria-label': _.intl.formatToPlainString(_.t['22fjER'], { answerNumber: p + 1 }),
                              onClick: () => S(p),
                              dangerous: !0,
                              children: (0, r.jsx)(s.XHJ, {
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

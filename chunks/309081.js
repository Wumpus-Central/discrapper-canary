n.d(t, {
    I: () => k,
    Z: () => S
}),
    n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(263568),
    s = n(442837),
    c = n(481060),
    u = n(166459),
    d = n(596454),
    m = n(273031),
    f = n(313201),
    h = n(907040),
    x = n(906411),
    g = n(592125),
    p = n(703558),
    _ = n(117530),
    C = n(358085),
    b = n(79390),
    v = n(885001),
    j = n(35463),
    w = n(489887),
    A = n(185923),
    I = n(957825),
    N = n(388032),
    E = n(946545);
let R = {
    offset: {
        top: -4,
        bottom: -4,
        left: 0,
        right: -8
    }
};
function k(e) {
    let { hasUpload: t, mediaUrl: n, mediaFilename: l, imageClassName: r, emoji: i, emojiClassName: o, fallback: s } = e;
    return t
        ? (0, a.jsx)('img', {
              src: n,
              alt: l,
              className: r
          })
        : null != i
          ? (0, a.jsx)(d.Z, {
                className: o,
                emojiId: i.id,
                emojiName: i.type === x.B.UNICODE ? i.optionallyDiverseSequence : i.name,
                animated: i.animated
            })
          : (0, a.jsx)(a.Fragment, { children: s });
}
function P(e) {
    let { onSelect: t, onEditMedia: n, onDeleteMedia: l, closePopout: r } = e;
    return (0, a.jsx)('div', {
        className: E.menuContainer,
        children: (0, a.jsx)(c.v2r, {
            navId: 'poll-media-edit-menu',
            onClose: r,
            'aria-label': N.intl.string(N.t['cV+h7O']),
            onSelect: t,
            children: (0, a.jsxs)(c.kSQ, {
                children: [
                    (0, a.jsx)(c.sNh, {
                        id: 'poll-media-replace',
                        label: N.intl.string(N.t.CZeRhY),
                        action: n
                    }),
                    (0, a.jsx)(c.sNh, {
                        id: 'poll-media-delete',
                        label: N.intl.string(N.t.IhMxgo),
                        action: l,
                        color: 'danger'
                    })
                ]
            })
        })
    });
}
function y(e) {
    let { channelId: t, localCreationAnswerId: n, buttonImage: r, layout: u, onEmojiSelect: d, onEmojiRemove: m, answerIndex: f, shouldShowEmojiPicker: x, toggleEmojiPicker: p } = e,
        _ = (0, s.e7)([g.Z], () => g.Z.getChannel(t)),
        {
            emoji: C,
            isLoadingMedia: v,
            hasUpload: w,
            mediaUrl: R,
            mediaFilename: y
        } = (0, j.Z)({
            channelId: t,
            localCreationAnswerId: n,
            image: r
        }),
        D = u === o.C.DEFAULT,
        S = w || null != C,
        O = l.useCallback(() => {
            m(f);
        }, [m, f]),
        T = l.useMemo(
            () =>
                w
                    ? N.intl.formatToPlainString(N.t.vcC7Qk, {
                          imageName: (0, b.fw)(y),
                          answerNumber: f + 1
                      })
                    : null != C
                      ? N.intl.formatToPlainString(N.t.ncOAhY, {
                            emojiName: C.name,
                            answerNumber: f + 1
                        })
                      : N.intl.formatToPlainString(N.t.emdpNj, { answerNumber: f + 1 }),
            [w, C, f, y]
        ),
        L = l.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)('div', {
                    className: E.emojiPicker,
                    children: (0, a.jsx)(h.Z, {
                        channel: _,
                        pickerIntention: A.Hz.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e, n) => {
                            null != e && d(e, f), n && t();
                        }
                    })
                });
            },
            [_, d, f]
        ),
        B = l.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)(P, {
                    onSelect: t,
                    onEditMedia: p,
                    onDeleteMedia: O,
                    closePopout: t
                });
            },
            [O, p]
        ),
        Z = v
            ? (0, a.jsx)(c.$jN, { className: D ? E.spinnerWrapperDefault : E.spinnerWrapperImageOnly })
            : (0, a.jsx)(k, {
                  hasUpload: w,
                  mediaUrl: R,
                  mediaFilename: y,
                  imageClassName: i()(E.media, D ? E.gifDefault : E.gifJumbo),
                  emoji: C,
                  emojiClassName: i()(E.media, D ? E.emojiDefault : E.emojiJumbo),
                  fallback: (0, a.jsx)(c.EO4, {
                      size: 'md',
                      color: 'currentColor',
                      className: D ? E.expressionPickerIconDefault : E.expressionPickerIconImageOnly
                  })
              }),
        U = i()(I.CT, u === o.C.IMAGE_ONLY_ANSWERS ? E.expressionPickerButtonImageOnly : E.expressionPickerButtonDefault, { [E.canEditMedia]: S });
    return (0, a.jsx)(c.yRy, {
        renderPopout: L,
        shouldShow: x,
        onRequestClose: p,
        animation: c.yRy.Animation.NONE,
        position: 'bottom',
        spacing: 2,
        children: (e) => {
            let { 'aria-controls': t, 'aria-expanded': n, ...l } = e;
            return (0, a.jsx)(c.yRy, {
                animation: c.yRy.Animation.NONE,
                position: 'bottom',
                renderPopout: B,
                children: (e) => {
                    let { onClick: l, 'aria-controls': r, 'aria-expanded': i, ...o } = e;
                    return (0, a.jsxs)(c.P3F, {
                        ...o,
                        className: U,
                        onClick: S && !x ? l : p,
                        'aria-label': T,
                        'aria-controls': null != t ? t : r,
                        'aria-expanded': n || i,
                        children: [
                            Z,
                            S &&
                                (0, a.jsx)(c.vdY, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: E.editIcon,
                                    'aria-hidden': !0
                                })
                        ]
                    });
                }
            });
        }
    });
}
function D(e) {
    var t;
    let { value: n, id: l } = e,
        r = (() => {
            var e;
            let t = null !== (e = null == n ? void 0 : n.length) && void 0 !== e ? e : 0;
            return w.WA - t;
        })();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: i()(E.characterCount),
                'aria-hidden': 'true',
                children: [null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0, ' / ', w.WA]
            }),
            (0, a.jsxs)(c.nn4, {
                id: l,
                children: [N.intl.format(N.t.fR1coa, { remainingCharacters: r }), ' ', N.intl.format(N.t['+DFxLS'], { maxLength: w.WA })]
            })
        ]
    });
}
let S = l.forwardRef(function (e, t) {
    let { channelId: r, answer: d, index: h, layout: x, isLastAnswer: g, onAnswerTextChange: j, onEmojiSelect: A, onEmojiRemove: I, canRemoveAnswer: k, onRemoveAnswer: P, addAnswer: S, submitPoll: O, answerTextInputRefs: T, error: L, inputRef: B, deleteButtonRef: Z } = e,
        U = (0, f.Dt)(),
        M = (0, f.Dt)(),
        z = null != L && L.length > 0,
        W = (0, s.e7)([_.Z], () => _.Z.getUpload(r, d.localCreationAnswerId, p.d.Poll)),
        [H, F] = l.useState(!1),
        Y = () => {
            function e(e) {
                u.Z.update(r, d.localCreationAnswerId, p.d.Poll, { description: e });
            }
            (0, c.ZDy)(async () => {
                let { default: t } = await n.e('2538').then(n.bind(n, 92254));
                return (n) =>
                    (0, a.jsx)(t, {
                        channelId: r,
                        answer: d,
                        onSave: e,
                        ...n
                    });
            });
        },
        K = l.useCallback(() => {
            F((e) => !e);
        }, []),
        q = l.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case 'enter':
                        var a;
                        g && (e.preventDefault(), ((0, b.cS)(d, x) || 'macos' !== (0, C.getOS)() ? t : n) ? (e.stopPropagation(), O()) : S()), null === (a = T.current[h + 1]) || void 0 === a || a.focus();
                        break;
                    case 'e':
                        ('macos' === (0, C.getOS)() ? n : t) && (e.preventDefault(), e.stopPropagation(), K());
                }
            },
            [S, d, T, h, g, x, O, K]
        ),
        X = (0, a.jsx)(y, {
            channelId: r,
            buttonImage: d.image,
            layout: x,
            onEmojiSelect: A,
            onEmojiRemove: I,
            localCreationAnswerId: d.localCreationAnswerId,
            answerIndex: h,
            shouldShowEmojiPicker: H,
            toggleEmojiPicker: K
        }),
        J = null != W && null != W.description && W.description.length > 0;
    return (0, a.jsx)(a.Fragment, {
        children:
            x === o.C.DEFAULT
                ? (0, a.jsxs)('div', {
                      className: i()(E.answerRow, { [E.hasDeleteButton]: k }),
                      children: [
                          (0, a.jsxs)('div', {
                              className: i()(E.defaultTextInputWrapper, { [E.hasError]: z }),
                              ref: t,
                              children: [
                                  X,
                                  (0, a.jsx)(c.oil, {
                                      'aria-label': N.intl.formatToPlainString(N.t['3+V8Gx'], { answerNumber: h + 1 }),
                                      placeholder: N.intl.string(N.t.NNHVlp),
                                      value: d.text,
                                      className: E.defaultTextInput,
                                      inputClassName: E.defaultTextInput,
                                      onChange: (e) =>
                                          j({
                                              text: e,
                                              index: h,
                                              localCreationAnswerId: d.localCreationAnswerId
                                          }),
                                      onKeyDown: q,
                                      maxLength: w.WA,
                                      'aria-invalid': z,
                                      'aria-describedby': z ? U : M,
                                      focusProps: R,
                                      inputRef: B
                                  }),
                                  (0, a.jsx)(D, {
                                      value: d.text,
                                      id: M
                                  })
                              ]
                          }),
                          k &&
                              (0, a.jsx)(c.P3F, {
                                  onClick: () => P(h),
                                  className: E.removeAnswerButtonDefault,
                                  'aria-label': N.intl.formatToPlainString(N.t['22fjER'], { answerNumber: h + 1 }),
                                  ref: Z,
                                  children: (0, a.jsx)(c.XHJ, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: E.trashIcon,
                                      'aria-hidden': !0
                                  })
                              }),
                          z &&
                              (0, a.jsx)(c.Text, {
                                  id: U,
                                  variant: 'text-xs/medium',
                                  color: 'text-danger',
                                  className: E.__invalid_errorText,
                                  children: L
                              })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: E.imageOnlyContainer,
                      ref: t,
                      children: [
                          (0, a.jsxs)('div', {
                              className: E.imagePreviewContainer,
                              children: [
                                  X,
                                  J &&
                                      (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(c.Text, {
                                                  variant: 'text-xs/semibold',
                                                  className: E.altBadge,
                                                  'aria-hidden': !0,
                                                  children: N.intl.string(N.t.QEW819)
                                              }),
                                              (0, a.jsxs)('div', {
                                                  onClick: Y,
                                                  children: [
                                                      (0, a.jsx)(c.nn4, { children: N.intl.string(N.t.piH89v) }),
                                                      (0, a.jsx)(c.Text, {
                                                          variant: 'text-xxs/medium',
                                                          className: E.altTextPreview,
                                                          children: W.description
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                              ]
                          }),
                          (0, a.jsxs)('div', {
                              className: E.imageOnlyAnswerActionBar,
                              children: [
                                  null != W
                                      ? (0, a.jsx)(m.Z, {
                                            tooltip: N.intl.string(N.t.QbhHBQ),
                                            'aria-label': J ? N.intl.formatToPlainString(N.t.d04UhI, { answerNumber: h + 1 }) : N.intl.formatToPlainString(N.t.mULZgY, { answerNumber: h + 1 }),
                                            onClick: Y,
                                            children: (0, a.jsx)(v.N, { 'aria-hidden': !0 })
                                        })
                                      : null,
                                  (0, a.jsx)(m.Z, {
                                      tooltip: N.intl.string(N.t.x7DOr6),
                                      'aria-label': N.intl.formatToPlainString(N.t['22fjER'], { answerNumber: h + 1 }),
                                      onClick: () => P(h),
                                      dangerous: !0,
                                      children: (0, a.jsx)(c.XHJ, {
                                          size: 'md',
                                          color: 'currentColor',
                                          'aria-hidden': !0
                                      })
                                  })
                              ]
                          })
                      ]
                  })
    });
});

n.d(t, {
    I: function () {
        return R;
    }
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
    C = n(117530),
    v = n(358085),
    j = n(79390),
    I = n(885001),
    w = n(35463),
    _ = n(489887),
    b = n(185923),
    A = n(957825),
    k = n(388032),
    N = n(946545);
let E = {
    offset: {
        top: -4,
        bottom: -4,
        left: 0,
        right: -8
    }
};
function R(e) {
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
        className: N.menuContainer,
        children: (0, a.jsx)(c.Menu, {
            navId: 'poll-media-edit-menu',
            onClose: r,
            'aria-label': k.intl.string(k.t['cV+h7O']),
            onSelect: t,
            children: (0, a.jsxs)(c.MenuGroup, {
                children: [
                    (0, a.jsx)(c.MenuItem, {
                        id: 'poll-media-replace',
                        label: k.intl.string(k.t.CZeRhY),
                        action: n
                    }),
                    (0, a.jsx)(c.MenuItem, {
                        id: 'poll-media-delete',
                        label: k.intl.string(k.t.IhMxgo),
                        action: l,
                        color: 'danger'
                    })
                ]
            })
        })
    });
}
function S(e) {
    let { channelId: t, localCreationAnswerId: n, buttonImage: r, layout: u, onEmojiSelect: d, onEmojiRemove: m, answerIndex: f, shouldShowEmojiPicker: x, toggleEmojiPicker: p } = e,
        C = (0, s.e7)([g.Z], () => g.Z.getChannel(t)),
        {
            emoji: v,
            isLoadingMedia: I,
            hasUpload: _,
            mediaUrl: E,
            mediaFilename: S
        } = (0, w.Z)({
            channelId: t,
            localCreationAnswerId: n,
            image: r
        }),
        T = u === o.C.DEFAULT,
        y = _ || null != v,
        D = l.useCallback(() => {
            m(f);
        }, [m, f]),
        O = l.useMemo(
            () =>
                _
                    ? k.intl.formatToPlainString(k.t.vcC7Qk, {
                          imageName: (0, j.fw)(S),
                          answerNumber: f + 1
                      })
                    : null != v
                      ? k.intl.formatToPlainString(k.t.ncOAhY, {
                            emojiName: v.name,
                            answerNumber: f + 1
                        })
                      : k.intl.formatToPlainString(k.t.emdpNj, { answerNumber: f + 1 }),
            [_, v, f, S]
        ),
        L = l.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)('div', {
                    className: N.emojiPicker,
                    children: (0, a.jsx)(h.Z, {
                        channel: C,
                        pickerIntention: b.Hz.POLLS,
                        closePopout: t,
                        onNavigateAway: t,
                        onSelectEmoji: (e, n) => {
                            null != e && d(e, f), n && t();
                        }
                    })
                });
            },
            [C, d, f]
        ),
        B = l.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, a.jsx)(P, {
                    onSelect: t,
                    onEditMedia: p,
                    onDeleteMedia: D,
                    closePopout: t
                });
            },
            [D, p]
        ),
        M = I
            ? (0, a.jsx)(c.Spinner, { className: T ? N.spinnerWrapperDefault : N.spinnerWrapperImageOnly })
            : (0, a.jsx)(R, {
                  hasUpload: _,
                  mediaUrl: E,
                  mediaFilename: S,
                  imageClassName: i()(N.media, T ? N.gifDefault : N.gifJumbo),
                  emoji: v,
                  emojiClassName: i()(N.media, T ? N.emojiDefault : N.emojiJumbo),
                  fallback: (0, a.jsx)(c.ReactionIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: T ? N.expressionPickerIconDefault : N.expressionPickerIconImageOnly
                  })
              }),
        Z = i()(A.CT, u === o.C.IMAGE_ONLY_ANSWERS ? N.expressionPickerButtonImageOnly : N.expressionPickerButtonDefault, { [N.canEditMedia]: y });
    return (0, a.jsx)(c.Popout, {
        renderPopout: L,
        shouldShow: x,
        onRequestClose: p,
        animation: c.Popout.Animation.NONE,
        position: 'bottom',
        spacing: 2,
        children: (e) => {
            let { 'aria-controls': t, 'aria-expanded': n, ...l } = e;
            return (0, a.jsx)(c.Popout, {
                animation: c.Popout.Animation.NONE,
                position: 'bottom',
                renderPopout: B,
                children: (e) => {
                    let { onClick: l, 'aria-controls': r, 'aria-expanded': i, ...o } = e;
                    return (0, a.jsxs)(c.Clickable, {
                        ...o,
                        className: Z,
                        onClick: y && !x ? l : p,
                        'aria-label': O,
                        'aria-controls': null != t ? t : r,
                        'aria-expanded': n || i,
                        children: [
                            M,
                            y &&
                                (0, a.jsx)(c.PencilIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: N.editIcon,
                                    'aria-hidden': !0
                                })
                        ]
                    });
                }
            });
        }
    });
}
function T(e) {
    var t;
    let { value: n, id: l } = e,
        r = (() => {
            var e;
            let t = null !== (e = null == n ? void 0 : n.length) && void 0 !== e ? e : 0;
            return _.WA - t;
        })();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                className: i()(N.characterCount),
                'aria-hidden': 'true',
                children: [null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0, ' / ', _.WA]
            }),
            (0, a.jsxs)(c.HiddenVisually, {
                id: l,
                children: [k.intl.format(k.t.fR1coa, { remainingCharacters: r }), ' ', k.intl.format(k.t['+DFxLS'], { maxLength: _.WA })]
            })
        ]
    });
}
t.Z = l.forwardRef(function (e, t) {
    let { channelId: r, answer: d, index: h, layout: x, isLastAnswer: g, onAnswerTextChange: w, onEmojiSelect: b, onEmojiRemove: A, canRemoveAnswer: R, onRemoveAnswer: P, addAnswer: y, submitPoll: D, answerTextInputRefs: O, error: L, inputRef: B, deleteButtonRef: M } = e,
        Z = (0, f.Dt)(),
        U = (0, f.Dt)(),
        H = null != L && L.length > 0,
        F = (0, s.e7)([C.Z], () => C.Z.getUpload(r, d.localCreationAnswerId, p.d.Poll)),
        [z, W] = l.useState(!1),
        K = () => {
            function e(e) {
                u.Z.update(r, d.localCreationAnswerId, p.d.Poll, { description: e });
            }
            (0, c.openModalLazy)(async () => {
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
        Y = l.useCallback(() => {
            W((e) => !e);
        }, []),
        G = l.useCallback(
            (e) => {
                let t = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
                    n = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey);
                switch (e.key.toLowerCase()) {
                    case 'enter':
                        var a;
                        g && (e.preventDefault(), ((0, j.cS)(d, x) || 'macos' !== (0, v.getOS)() ? t : n) ? (e.stopPropagation(), D()) : y()), null === (a = O.current[h + 1]) || void 0 === a || a.focus();
                        break;
                    case 'e':
                        ('macos' === (0, v.getOS)() ? n : t) && (e.preventDefault(), e.stopPropagation(), Y());
                }
            },
            [y, d, O, h, g, x, D, Y]
        ),
        q = (0, a.jsx)(S, {
            channelId: r,
            buttonImage: d.image,
            layout: x,
            onEmojiSelect: b,
            onEmojiRemove: A,
            localCreationAnswerId: d.localCreationAnswerId,
            answerIndex: h,
            shouldShowEmojiPicker: z,
            toggleEmojiPicker: Y
        }),
        V = null != F && null != F.description && F.description.length > 0;
    return (0, a.jsx)(a.Fragment, {
        children:
            x === o.C.DEFAULT
                ? (0, a.jsxs)('div', {
                      className: i()(N.answerRow, { [N.hasDeleteButton]: R }),
                      children: [
                          (0, a.jsxs)('div', {
                              className: i()(N.defaultTextInputWrapper, { [N.hasError]: H }),
                              ref: t,
                              children: [
                                  q,
                                  (0, a.jsx)(c.TextInput, {
                                      'aria-label': k.intl.formatToPlainString(k.t['3+V8Gx'], { answerNumber: h + 1 }),
                                      placeholder: k.intl.string(k.t.NNHVlp),
                                      value: d.text,
                                      className: N.defaultTextInput,
                                      inputClassName: N.defaultTextInput,
                                      onChange: (e) =>
                                          w({
                                              text: e,
                                              index: h,
                                              localCreationAnswerId: d.localCreationAnswerId
                                          }),
                                      onKeyDown: G,
                                      maxLength: _.WA,
                                      'aria-invalid': H,
                                      'aria-describedby': H ? Z : U,
                                      focusProps: E,
                                      inputRef: B
                                  }),
                                  (0, a.jsx)(T, {
                                      value: d.text,
                                      id: U
                                  })
                              ]
                          }),
                          R &&
                              (0, a.jsx)(c.Clickable, {
                                  onClick: () => P(h),
                                  className: N.removeAnswerButtonDefault,
                                  'aria-label': k.intl.formatToPlainString(k.t['22fjER'], { answerNumber: h + 1 }),
                                  ref: M,
                                  children: (0, a.jsx)(c.TrashIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: N.trashIcon,
                                      'aria-hidden': !0
                                  })
                              }),
                          H &&
                              (0, a.jsx)(c.Text, {
                                  id: Z,
                                  variant: 'text-xs/medium',
                                  color: 'text-danger',
                                  className: N.__invalid_errorText,
                                  children: L
                              })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: N.imageOnlyContainer,
                      ref: t,
                      children: [
                          (0, a.jsxs)('div', {
                              className: N.imagePreviewContainer,
                              children: [
                                  q,
                                  V &&
                                      (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(c.Text, {
                                                  variant: 'text-xs/semibold',
                                                  className: N.altBadge,
                                                  'aria-hidden': !0,
                                                  children: k.intl.string(k.t.QEW819)
                                              }),
                                              (0, a.jsxs)('div', {
                                                  onClick: K,
                                                  children: [
                                                      (0, a.jsx)(c.HiddenVisually, { children: k.intl.string(k.t.piH89v) }),
                                                      (0, a.jsx)(c.Text, {
                                                          variant: 'text-xxs/medium',
                                                          className: N.altTextPreview,
                                                          children: F.description
                                                      })
                                                  ]
                                              })
                                          ]
                                      })
                              ]
                          }),
                          (0, a.jsxs)('div', {
                              className: N.imageOnlyAnswerActionBar,
                              children: [
                                  null != F
                                      ? (0, a.jsx)(m.Z, {
                                            tooltip: k.intl.string(k.t.QbhHBQ),
                                            'aria-label': V ? k.intl.formatToPlainString(k.t.d04UhI, { answerNumber: h + 1 }) : k.intl.formatToPlainString(k.t.mULZgY, { answerNumber: h + 1 }),
                                            onClick: K,
                                            children: (0, a.jsx)(I.N, { 'aria-hidden': !0 })
                                        })
                                      : null,
                                  (0, a.jsx)(m.Z, {
                                      tooltip: k.intl.string(k.t.x7DOr6),
                                      'aria-label': k.intl.formatToPlainString(k.t['22fjER'], { answerNumber: h + 1 }),
                                      onClick: () => P(h),
                                      dangerous: !0,
                                      children: (0, a.jsx)(c.TrashIcon, {
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

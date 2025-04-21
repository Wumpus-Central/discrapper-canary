n.d(t, { Z: () => ea }), n(388685), n(781311), n(290780);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(359959),
    d = n(924826),
    u = n(91192),
    m = n(536895),
    h = n(442837),
    g = n(481060),
    f = n(430742),
    p = n(166459),
    x = n(541716),
    b = n(67158),
    j = n(893718),
    v = n(472243),
    C = n(436660),
    _ = n(284182),
    y = n(795639),
    O = n(957730),
    w = n(25015),
    S = n(252032),
    P = n(913663),
    N = n(268350),
    T = n(456077),
    I = n(488131),
    E = n(602034),
    k = n(23750),
    R = n(703558),
    Z = n(496675),
    M = n(300429),
    A = n(117530),
    L = n(594174),
    F = n(459273),
    D = n(838440),
    z = n(127654),
    B = n(681154),
    H = n(883429),
    U = n(945141),
    V = n(456269),
    G = n(228392),
    q = n(259637),
    X = n(76451),
    W = n(470623),
    K = n(479099),
    J = n(399894),
    Y = n(81490),
    Q = n(710352),
    $ = n(981631),
    ee = n(176505),
    et = n(388032),
    en = n(860128);
function er(e) {
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
function ei(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let el = x.Ie.CREATE_FORUM_POST;
function ea(e) {
    let { parentChannel: t, isSearchLoading: n, onChange: l, canCreatePost: s, inputRef: o } = e,
        {
            textAreaState: d,
            formOpen: u,
            previewing: m
        } = (0, W.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: r } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: r
            };
        }, c.X),
        [f, p] = i.useState(null),
        x = i.useContext(F.oo),
        b = i.useCallback(() => {
            x.bumpDispatchPriority();
        }, [x]),
        j = (0, h.e7)([Z.Z], () => Z.Z.can($.Plq.ATTACH_FILES, t)),
        v = (0, h.Wu)([A.Z], () => A.Z.getUploads(t.id, R.d.FirstThreadMessage)),
        C = u && j && s,
        w = (null == t ? void 0 : t.isMediaChannel()) === !0,
        S = (function (e, t) {
            let n = (0, W.AF)(),
                r = (0, V.ql)(e);
            return i.useCallback(() => {
                let { formOpen: i, setFormOpenFromUserAction: l, name: a, textAreaState: s, hasClickedForm: o } = n.getState();
                !i &&
                    (setTimeout(() => {
                        if (t.current instanceof g.lcI) {
                            var e, n, r, i;
                            null == (n = t.current) || null == (e = n._textArea) || e.setSelectionRange(a.length, a.length), null == (i = t.current) || null == (r = i._textArea) || r.focus();
                        }
                    }, 0),
                    ((o && a.length > 0) || (s.textValue.trim().length > 0 && s.textValue.trim() !== r) || A.Z.getUploads(e.id, R.d.FirstThreadMessage).length > 0) && l());
            }, [n, e.id, r, t]);
        })(t, o),
        T = (function (e) {
            let { formOpen: t } = (0, W.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.X),
                n = (0, W.AF)(),
                r = (0, E.r)({ parentChannel: e });
            i.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let l = i.useCallback(
                (t, r, i) => {
                    let { name: l, textAreaState: a } = n.getState();
                    null == t && (t = a.textValue), (t = t.trim());
                    let { content: s } = O.ZP.parse(e, t);
                    if (((t = s), null == r || 0 === r.length)) {
                        var o;
                        r = null == (o = P.Z.getStickerPreview(e.id, el.drafts.type)) ? void 0 : o.map((e) => e.id);
                    }
                    if (((null == i || 0 === i.length) && (i = A.Z.getUploads(e.id, R.d.FirstThreadMessage)), null != i && i.length > 0 && e.isMediaChannel())) {
                        let e = i.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = i[e];
                            i.splice(e, 1), i.unshift(t);
                        }
                    }
                    let c = 0 === l.length,
                        d = (null == t || 0 === t.length) && (null == r || 0 === r.length) && 0 === i.length;
                    return {
                        content: t,
                        stickers: r,
                        uploads: i,
                        hasNameError: c,
                        hasMessageError: d
                    };
                },
                [e, n]
            );
            return i.useCallback(
                async (t, i, a) => {
                    let { setNameError: s, setMessageError: o, setSubmitting: c, resetFormState: d, formOpen: u, setFormOpen: m, setPreviewing: h, setFormOpenFromUserAction: g, setGuidelinesOpen: f } = n.getState(),
                        p = U.Z.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, G.P_)({
                                guildId: e.guild_id,
                                channelId: e.id
                            }),
                            p || n.getState().setGuidelinesOpen(!0),
                            g(),
                            {
                                shouldClear: !1,
                                shouldRefocus: !1
                            }
                        );
                    let { content: x, stickers: b, uploads: j, hasNameError: v, hasMessageError: C } = l(t, i, a);
                    if ((s(v ? (0, B.V_)() : null), o(C ? (0, B.T4)() : null), v || C))
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                    try {
                        c(!0);
                        let { valid: t } = await (0, D.v)({
                            content: x,
                            stickers: b,
                            uploads: j,
                            type: el,
                            channel: e
                        });
                        if (!t)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                        let n = await r(x, b, j);
                        return (
                            (0, I.ok)(n),
                            H.Z.resort(e.id),
                            (0, N.qB)(e.id, el.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            U.Z.markAsSeen(e.id),
                            f(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch (t) {
                        var _, y;
                        return (
                            (null == (_ = t.body) ? void 0 : _.code) === $.evJ.AUTOMOD_TITLE_BLOCKED ? s((0, B.Gx)(t.body, e)) : (null == (y = t.body) ? void 0 : y.code) === $.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, B.Gx)(t.body, e)),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    } finally {
                        c(!1);
                    }
                },
                [r, l, e, n]
            );
        })(t);
    return (
        i.useLayoutEffect(l, [u, d, v, l]),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)('div', {
                'aria-label': s ? et.intl.string(et.t.dq7mAQ) : et.intl.string(et.t['5h0QOD']),
                className: a()(en.container, { [en.collapsed]: !u }),
                onClick: !u && s ? S : void 0,
                children: (0, r.jsxs)('form', {
                    onMouseDown: b,
                    onFocus: b,
                    onSubmit: (e) => {
                        e.preventDefault(), s && T();
                    },
                    children: [
                        (0, r.jsxs)('div', {
                            className: en.formContainer,
                            children: [
                                (0, r.jsx)(es, {
                                    parentChannel: t,
                                    isSearchLoading: n,
                                    inputRef: o
                                }),
                                (0, r.jsxs)('div', {
                                    className: m ? en.previewForm : en.form,
                                    children: [
                                        (0, r.jsx)(eo, {
                                            editorRef: f,
                                            parentChannel: t,
                                            isSearchLoading: n,
                                            inputRef: o,
                                            canCreatePost: s
                                        }),
                                        u &&
                                            (0, r.jsx)(eu, {
                                                editorRef: f,
                                                setEditorRef: p,
                                                parentChannel: t,
                                                submit: T,
                                                disabled: !s
                                            }),
                                        m && (0, r.jsx)(em, {})
                                    ]
                                }),
                                C && (w ? (0, r.jsx)(y._, { parentChannel: t }) : (0, r.jsx)(X.Z, { channelId: t.id }))
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: en.form,
                            children: [
                                C && w && (0, r.jsx)(_.Z, { parentChannel: t }),
                                u &&
                                    (0, r.jsx)(eg, {
                                        className: en.horizontalPadding,
                                        parentChannel: t,
                                        canCreatePost: s
                                    })
                            ]
                        })
                    ]
                })
            })
        })
    );
}
let es = i.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: l } = e,
            {
                formOpen: a,
                name: s,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u
            } = (0, W.xH)((e) => {
                let { formOpen: t, nameError: n, name: r, previewing: i, textAreaState: l, hasClickedForm: a, submitting: s } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: r,
                    textAreaState: l,
                    previewing: i,
                    hasClickedForm: a,
                    submitting: s
                };
            }, c.X),
            m = (0, W.AF)(),
            h = (0, V.ql)(t),
            x = i.useCallback(() => {
                var e;
                m.getState().resetFormState(),
                    f.Z.clearDraft(t.id, R.d.ThreadSettings),
                    f.Z.clearDraft(t.id, R.d.FirstThreadMessage),
                    p.Z.clearAll(t.id, R.d.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    null == (e = l.current) || e.blur(),
                    (0, G.Oq)({
                        guildId: t.guild_id,
                        channelId: t.id
                    });
            }, [m, t.id, t.guild_id, l]),
            b = i.useMemo(
                () =>
                    n && !a
                        ? (0, r.jsx)(eb, {})
                        : n || a || (0 !== o.textValue.trim().length && o.textValue.trim() !== h)
                          ? !a && (s.trim().length > 0 || (o.textValue.trim().length > 0 && o.textValue.trim() !== h) || A.Z.getUploads(t.id, R.d.FirstThreadMessage).length > 0) && d
                              ? (0, r.jsx)(g.vdY, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: en.pencilIcon
                                })
                              : u
                                ? (0, r.jsx)(g.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: en.closeIconDisabled
                                  })
                                : (0, r.jsx)(g.ua7, {
                                      text: et.intl.string(et.t['98EPQE']),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              g.P3F,
                                              ei(er({}, e), {
                                                  onClick: x,
                                                  children: (0, r.jsx)(g.k$p, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: en.closeIcon
                                                  })
                                              })
                                          )
                                  })
                          : (0, r.jsx)(g._Ve, {
                                size: 'md',
                                color: 'currentColor',
                                className: en.searchIcon
                            }),
                [n, a, d, s, o.textValue, x, t.id, h, u]
            );
        return (0, r.jsx)('div', {
            className: en.prefixElement,
            children: b
        });
    }),
    eo = i.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: a } = e,
            {
                formOpen: s,
                nameError: d,
                name: u,
                textAreaState: m,
                previewing: f
            } = (0, W.xH)((e) => {
                let { formOpen: t, nameError: n, name: r, previewing: i, textAreaState: l, hasClickedForm: a, submitting: s } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: r,
                    textAreaState: l,
                    previewing: i,
                    hasClickedForm: a,
                    submitting: s
                };
            }, c.X),
            p = (0, W.AF)(),
            x = null != t.topic && 0 !== t.topic.length,
            b = U.Z.hasSeen(t.id),
            j = (0, V.ql)(t),
            v = (0, h.e7)([L.default], () => L.default.getCurrentUser());
        o()(null != v, 'current user cannot be null'),
            (0, F.yp)({
                event: $.CkL.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    var e;
                    let t = n.current instanceof g.lcI ? (null == (e = n.current) ? void 0 : e._textArea) : n.current;
                    null == t || t.focus(), p.getState().setTitleFocused(!0), p.getState().setFormOpen(!0), p.getState().setHasClickedForm(!0);
                }
            });
        let C = i.useCallback(
                (e) => {
                    let n = e.clipboardData.files[0];
                    null != n && n.type.startsWith('image/') && (e.preventDefault(), (0, z.d)([n], t, R.d.FirstThreadMessage), p.getState().setFormOpenFromUserAction());
                },
                [t, p]
            ),
            _ = (0, B.Op)(d, { content: u });
        return (0, r.jsxs)('div', {
            className: en.titleContainer,
            onPaste: C,
            children: [
                s && f
                    ? (0, r.jsx)(g.X6q, {
                          variant: 'heading-md/semibold',
                          className: en.title,
                          children: u
                      })
                    : (0, r.jsx)(g.Kx8, {
                          value: u,
                          placeholder: l ? (s || (m.textValue.length > 0 && m.textValue.trim() !== j) ? et.intl.string(et.t.lU4dDQ) : et.intl.string(et.t.CjmivL)) : et.intl.string(et.t['5h0QOD']),
                          flex: !0,
                          autosize: s,
                          rows: 1,
                          showCharacterCount: !1,
                          showRemainingCharacterCount: !1,
                          maxLength: $.HN8,
                          onChange: (e) => {
                              let n = (0, T.Z)(e, !1);
                              p.getState().setName(n);
                              let r = 0 === n.trim().length,
                                  i = 0 === m.textValue.trim().length,
                                  l = m.textValue.trim() === j;
                              r && (i || l) && p.getState().setHasClickedForm(!1), s || H.Z.updateForumSearchQuery(t.id, n);
                          },
                          onFocus: () => {
                              p.getState().setTitleFocused(!0), p.getState().setBodyFocused(!1);
                          },
                          onBlur: () => {
                              p.getState().setTitleFocused(!1);
                              let e = (0, T.Z)(u, !0);
                              e !== u && (p.getState().setName(e), s || H.Z.updateForumSearchQuery(t.id, e));
                          },
                          onKeyDown: (e) => {
                              var r, i;
                              'Enter' === e.key &&
                                  (e.preventDefault(),
                                  e.stopPropagation(),
                                  s && u.length > 0
                                      ? null == a || a.focus()
                                      : l &&
                                        e.shiftKey &&
                                        ((0, G.nH)({
                                            guildId: t.guild_id,
                                            channelId: t.id
                                        }),
                                        x && !b && p.getState().setGuidelinesOpen(!0),
                                        p.getState().setFormOpenFromUserAction(),
                                        u.trim().length > 0 && (p.getState().setBodyFocused(!0), null == a || a.focus())));
                              let o = n.current instanceof g.lcI ? (null == (r = n.current) ? void 0 : r._textArea) : n.current;
                              if ('Home' === e.key || 'End' === e.key) {
                                  if (null == o) return;
                                  if ((e.preventDefault(), e.stopPropagation(), 'Home' === e.key)) o.setSelectionRange(0, 0);
                                  else {
                                      let e = u.length;
                                      o.setSelectionRange(e, e);
                                  }
                              }
                              'Escape' !== e.key || p.getState().submitting || (null == (i = n.current) || i.blur(), p.getState().setFormOpen(!1), p.getState().setTitleFocused(!1), p.getState().setBodyFocused(!1), p.getState().setPreviewing(!1));
                          },
                          error: _,
                          className: en.title,
                          inputRef: n
                      }),
                s
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(ec, { parentChannel: t }),
                              (0, r.jsx)(ef, {
                                  parentChannel: t,
                                  canCreatePost: l
                              })
                          ]
                      })
            ]
        });
    });
function ec(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, W.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.X),
        i = (0, W.AF)(),
        l = null != t.topic && 0 !== t.topic.length,
        s = () => {
            i.getState().setGuidelinesOpen(!n);
        };
    return l
        ? (0, r.jsx)(g.ua7, {
              text: et.intl.string(et.t['4d4T4u']),
              children: (e) =>
                  (0, r.jsx)(
                      g.P3F,
                      ei(er({}, e), {
                          onClick: s,
                          className: a()(en.forumPostFormButton, { [en.forumPostFormButtonActive]: n }),
                          children: (0, r.jsx)(
                              g.snC,
                              er(
                                  {
                                      size: 'md',
                                      color: 'currentColor'
                                  },
                                  e
                              )
                          )
                      })
                  )
          })
        : null;
}
let ed = i.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            i = new k.ZP({
                channelId: t.id,
                content: n
            }),
            { content: l } = (0, w.Z)(i, {
                hideSimpleEmbedContent: !0,
                isInteracting: !1,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0
            }),
            s = (0, S.Z)(
                {
                    message: i,
                    channel: t
                },
                l,
                !1
            );
        return (0, r.jsx)('div', {
            className: a()(en.channelTextAreaInner, en.previewTextArea),
            children: s
        });
    }),
    eu = i.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: s, setEditorRef: d } = e,
            u = (0, h.e7)([L.default], () => L.default.getCurrentUser());
        o()(null != u, 'current user cannot be null');
        let {
                messageError: m,
                previewing: f,
                textAreaState: p,
                bodyFocused: x,
                formOpen: b
            } = (0, W.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: r, bodyFocused: i, formOpen: l } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: r,
                    bodyFocused: i,
                    formOpen: l
                };
            }, c.X),
            v = (0, W.AF)();
        i.useEffect(
            () => () =>
                (0, G.Vn)({
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            [t.guild_id, t.id]
        );
        let _ = i.useCallback(() => {
                v.getState().setBodyFocused(!0);
            }, [v]),
            y = i.useCallback(() => {
                v.getState().setBodyFocused(!1);
            }, [v]),
            O = i.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: r } = v.getState();
                    r({
                        textValue: t,
                        richValue: n
                    });
                },
                [v]
            ),
            w = i.useCallback(
                (e) => {
                    let { value: t, uploads: r, stickers: i } = e;
                    return n(t, i, r);
                },
                [n]
            );
        (0, F.yp)({
            event: $.CkL.TEXTAREA_FOCUS,
            handler: _
        }),
            (0, F.yp)({
                event: $.CkL.TEXTAREA_BLUR,
                handler: y
            });
        let S = (0, B.Op)(m, { content: p.textValue });
        return (0, r.jsx)('div', {
            className: en.bodyContainer,
            children: (0, r.jsxs)('div', {
                className: en.contentContainer,
                children: [
                    f
                        ? (0, r.jsx)(ed, {
                              parentChannel: t,
                              textValue: p.textValue
                          })
                        : (0, r.jsx)('div', {
                              onClick: _,
                              children: (0, r.jsx)(j.Z, {
                                  type: el,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: et.intl.string(et.t['8IPnv7']),
                                  textValue: p.textValue,
                                  richValue: p.richValue,
                                  focused: x,
                                  className: en.channelTextArea,
                                  innerClassName: a()(en.channelTextAreaInner, { [en.channelTextAreaInnerError]: null != S }),
                                  onChange: O,
                                  onSubmit: w,
                                  promptToUpload: z.d,
                                  disabled: l,
                                  onKeyDown: (e) => {
                                      if ((('ArrowUp' === e.key || 'ArrowDown' === e.key) && e.stopPropagation(), 'Home' === e.key || 'End' === e.key)) {
                                          if (null == s) return;
                                          e.preventDefault(), e.stopPropagation();
                                          let t = s.getSlateEditor();
                                          if (null == t) return;
                                          'Home' === e.key ? C.Q.resetSelectionToStart(t) : C.Q.resetSelectionToEnd(t);
                                      }
                                      b && 'Escape' === e.key && !v.getState().submitting && (null == s || s.blur(), v.getState().setFormOpen(!1), v.getState().setTitleFocused(!1), v.getState().setBodyFocused(!1), v.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: 'bottom'
                              })
                          }),
                    (0, r.jsx)(g.pdY, { error: S })
                ]
            })
        });
    });
function em() {
    return (0, r.jsx)('div', {
        className: en.previewModeIndicator,
        children: (0, r.jsx)(g.Text, {
            variant: 'text-sm/normal',
            color: 'interactive-normal',
            children: et.intl.string(et.t['WE/cYm'])
        })
    });
}
function eh() {
    let { previewing: e } = (0, W.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.X),
        t = (0, W.AF)(),
        n = i.useCallback(() => {
            t.getState().setPreviewing(!e), (0, G.nE)();
        }, [e, t]);
    return (0, r.jsx)(g.ua7, {
        text: e ? et.intl.string(et.t.ojM1xM) : et.intl.string(et.t.SKNnqq),
        children: (t) =>
            (0, r.jsx)(
                g.P3F,
                ei(er({}, t), {
                    onClick: n,
                    className: a()(en.forumPostFormButton, { [en.forumPostFormButtonActive]: e }),
                    children: e
                        ? (0, r.jsx)(
                              g.kZF,
                              er(
                                  {
                                      size: 'md',
                                      color: 'currentColor'
                                  },
                                  t
                              )
                          )
                        : (0, r.jsx)(
                              g.tEF,
                              er(
                                  {
                                      size: 'md',
                                      color: 'currentColor'
                                  },
                                  t
                              )
                          )
                })
            )
    });
}
let eg = i.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        {
            textAreaState: a,
            appliedTags: s,
            name: o
        } = (0, W.xH)((e) => {
            let { textAreaState: t, appliedTags: n, name: r } = e;
            return {
                textAreaState: t,
                appliedTags: n,
                name: r
            };
        }, c.X),
        { rateLimitPerUser: d } = t,
        u = d > 0,
        m = (0, h.e7)([M.Z], () => M.Z.getSlowmodeCooldownGuess(t.id, M.S.CreateThread)),
        f = (0, h.e7)([Z.Z], () => Z.Z.can($.Plq.MANAGE_THREADS, t) || Z.Z.can($.Plq.MANAGE_CHANNELS, t)),
        p = t.hasFlag(ee.zZ.REQUIRE_TAG) && 0 === s.size && o.length > 0 && a.textValue.length > 0,
        x = (0, W.AF)(),
        j = i.useCallback(() => {
            x.getState().setBodyFocused(!1);
        }, [x]),
        C = i.useMemo(() => '' !== o.trim() && '' !== a.textValue.trim(), [o, a.textValue]);
    return (
        i.useEffect(() => {
            C || x.getState().setPreviewing(!1);
        }, [C, x]),
        (0, r.jsxs)('div', {
            className: l,
            children: [
                (0, r.jsx)(ex, { parentChannel: t }),
                (0, r.jsx)('div', { className: en.tagsDivider }),
                (0, r.jsxs)('div', {
                    className: en.controlsContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: en.controls,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: en.wrappedControls,
                                    children: [
                                        (0, r.jsx)(v.Z, {
                                            type: el,
                                            textValue: a.textValue,
                                            className: en.characterCount
                                        }),
                                        u &&
                                            (0, r.jsx)(J.Z, {
                                                rateLimitPerUser: d,
                                                slowmodeCooldownGuess: m,
                                                isBypassSlowmode: f,
                                                leadingIcon: !0
                                            })
                                    ]
                                }),
                                (0, r.jsx)(ec, { parentChannel: t }),
                                C && (0, r.jsx)(eh, {}),
                                (0, r.jsx)(ef, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: u && !f && m > 0
                                })
                            ]
                        }),
                        (0, r.jsx)(
                            b.Z,
                            {
                                type: el,
                                className: en.expressionPicker,
                                onClick: j
                            },
                            'expression'
                        )
                    ]
                }),
                p &&
                    (0, r.jsx)(g.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-danger',
                        className: en.requiredError,
                        children: et.intl.string(et.t.xPfNQk)
                    })
            ]
        })
    );
});
function ef(e) {
    let { parentChannel: t, canCreatePost: n, disabled: i, disableIfInvalid: l = !1 } = e,
        {
            submitting: a,
            textAreaState: s,
            name: o,
            appliedTags: d,
            formOpen: u
        } = (0, W.xH)((e) => {
            let { submitting: t, textAreaState: n, name: r, appliedTags: i, formOpen: l } = e;
            return {
                submitting: t,
                textAreaState: n,
                name: r,
                appliedTags: i,
                formOpen: l
            };
        }, c.X),
        m = t.hasFlag(ee.zZ.REQUIRE_TAG) && 0 === d.size && o.length > 0 && s.textValue.length > 0,
        f = (0, h.Wu)([A.Z], () => A.Z.getUploads(t.id, R.d.FirstThreadMessage)),
        p = s.textValue.trim().length > 0 || f.length > 0,
        x = !m && p && o.trim().length > 0;
    if (__OVERLAY__) return null;
    let b = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.jsxs)(
            g.zxk,
            ei(er({}, e), {
                size: g.zxk.Sizes.SMALL,
                className: en.submitButton,
                innerClassName: en.submitButtonInner,
                type: 'submit',
                submitting: a,
                disabled: (l && !x) || i || !n,
                children: [
                    (0, r.jsx)(g.kBi, {
                        size: 'xs',
                        color: 'currentColor',
                        className: en.submitIcon
                    }),
                    (0, r.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        color: 'none',
                        children: u ? et.intl.string(et.t.pIuQIy) : et.intl.string(et.t.TyAuoa)
                    })
                ]
            })
        );
    };
    return n
        ? b()
        : (0, r.jsx)(g.ua7, {
              text: et.intl.string(et.t.iyzwnJ),
              children: (e) => b(e)
          });
}
function ep() {
    return Promise.resolve();
}
function ex(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: l,
            setPopoutOpen: s
        } = (0, W.xH)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: r } = e;
            return {
                appliedTags: t,
                toggleAppliedTag: n,
                setPopoutOpen: r
            };
        }, c.X),
        o = n.size >= Q.Cn,
        h = (0, d.ZP)({
            id: ''.concat(t.id, '-post-form-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: ep,
            scrollToEnd: ep,
            orientation: m.hy.HORIZONTAL
        }),
        { containerRef: f, containerWidth: p } = (0, Y.Z)(),
        x = i.useRef(null),
        [b, j] = i.useState(!0),
        v = (0, V.Vm)(t),
        [C, _] = i.useState(0);
    return (i.useLayoutEffect(() => {
        var e;
        let t = x.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0],
            r = null == t || null == n || n.clientHeight > t.clientHeight;
        if ((r !== b && j(r), r && null != f.current && null != n && null != n.children)) {
            let { left: e, top: t } = f.current.getBoundingClientRect(),
                r = 0;
            for (let i of n.children) {
                let { right: n, top: l, height: a } = i.getBoundingClientRect();
                if (l - t > a) break;
                n - e > r && (r = n - e);
            }
            _(r);
        }
    }, [v, b, f, p]),
    0 === v.length)
        ? null
        : (0, r.jsxs)('div', {
              className: en.tagsContainer,
              ref: f,
              children: [
                  (0, r.jsx)(g.lO_, {
                      size: 'xs',
                      color: 'currentColor',
                      className: en.tagsIcon
                  }),
                  (0, r.jsx)('div', {
                      className: en.tagList,
                      ref: x,
                      children: (0, r.jsx)(u.bG, {
                          navigator: h,
                          children: (0, r.jsx)(u.SJ, {
                              children: (e) => {
                                  var { ref: t } = e,
                                      i = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              i = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      r,
                                                      i = {},
                                                      l = Object.keys(e);
                                                  for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                  return i;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                          }
                                          return i;
                                      })(e, ['ref']);
                                  return (0, r.jsx)(
                                      'div',
                                      ei(
                                          er(
                                              {
                                                  className: en.tagListInner,
                                                  ref: t
                                              },
                                              i
                                          ),
                                          {
                                              children: v.map((e) =>
                                                  (0, r.jsx)(
                                                      K.Z,
                                                      {
                                                          ariaLabel: et.intl.formatToPlainString(et.t.FSZVIS, { tagName: e.name }),
                                                          tag: e,
                                                          onClick: o && !n.has(e.id) ? void 0 : () => l(e.id),
                                                          disabled: !n.has(e.id) && n.size >= Q.Cn,
                                                          selected: n.has(e.id),
                                                          size: K.Z.Sizes.SMALL
                                                      },
                                                      e.id
                                                  )
                                              )
                                          }
                                      )
                                  );
                              }
                          })
                      })
                  }),
                  b &&
                      (0, r.jsx)(g.yRy, {
                          onRequestOpen: () => s(!0),
                          onRequestClose: () => s(!1),
                          renderPopout: (e) => {
                              let { closePopout: i } = e;
                              return (0, r.jsx)(q.Z, {
                                  parentChannel: t,
                                  appliedTags: n,
                                  maxTagsApplied: o,
                                  onSelectTag: l,
                                  onClose: i
                              });
                          },
                          position: 'bottom',
                          align: 'center',
                          children: (e) =>
                              (0, r.jsxs)(
                                  g.zxk,
                                  ei(er({}, e), {
                                      size: g.zxk.Sizes.TINY,
                                      className: en.tagsButton,
                                      innerClassName: en.tagsButtonInner,
                                      style: { left: C },
                                      look: g.zxk.Looks.LINK,
                                      'aria-label': et.intl.string(et.t.N5vP9P),
                                      children: [
                                          et.intl.string(et.t.IkpM1d),
                                          (0, r.jsx)(g.CJ0, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 16
                                          })
                                      ]
                                  })
                              )
                      }),
                  (0, r.jsxs)(g.zxk, {
                      size: g.zxk.Sizes.TINY,
                      className: a()(en.tagsButton, en.tagsButtonPlaceholder),
                      innerClassName: en.tagsButtonInner,
                      look: g.zxk.Looks.LINK,
                      'aria-label': et.intl.string(et.t.N5vP9P),
                      children: [
                          et.intl.string(et.t.IkpM1d),
                          (0, r.jsx)(g.CJ0, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 16
                          })
                      ]
                  })
              ]
          });
}
function eb(e) {
    let { style: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: n,
        style: t,
        children: (0, r.jsx)('div', { className: en.loader })
    });
}

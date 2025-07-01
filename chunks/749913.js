(n.d(t, { Z: () => el }), n(388685), n(781311), n(290780));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(94171),
    d = n(924826),
    u = n(91192),
    m = n(536895),
    h = n(442837),
    g = n(481060),
    f = n(430742),
    x = n(166459),
    p = n(541716),
    b = n(67158),
    j = n(893718),
    v = n(472243),
    _ = n(284182),
    C = n(795639),
    y = n(957730),
    O = n(25015),
    w = n(252032),
    N = n(216572),
    T = n(913663),
    S = n(268350),
    P = n(456077),
    I = n(488131),
    E = n(602034),
    R = n(23750),
    k = n(703558),
    M = n(496675),
    Z = n(300429),
    A = n(117530),
    L = n(594174),
    F = n(459273),
    D = n(838440),
    z = n(127654),
    B = n(681154),
    H = n(883429),
    U = n(945141),
    G = n(456269),
    V = n(228392),
    q = n(259637),
    W = n(76451),
    X = n(470623),
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
let ea = p.Ie.CREATE_FORUM_POST;
function el(e) {
    let { parentChannel: t, isSearchLoading: n, numResults: a, onChange: s, canCreatePost: o, inputRef: d } = e,
        u = !(0, N.HL)(t) && o,
        {
            textAreaState: m,
            formOpen: f,
            previewing: x
        } = (0, X.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: r } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: r
            };
        }, c.X),
        [p, b] = i.useState(null),
        j = i.useContext(F.oo),
        v = i.useCallback(() => {
            j.bumpDispatchPriority();
        }, [j]),
        O = (0, h.e7)([M.Z], () => M.Z.can($.Plq.ATTACH_FILES, t)),
        w = (0, h.Wu)([A.Z], () => A.Z.getUploads(t.id, k.d.FirstThreadMessage)),
        P = f && O && u,
        R = (null == t ? void 0 : t.isMediaChannel()) === !0,
        Z = (function (e, t) {
            let n = (0, X.AF)(),
                r = (0, G.ql)(e);
            return i.useCallback(() => {
                let { formOpen: i, setFormOpenFromUserAction: a, name: l, textAreaState: s, hasClickedForm: o } = n.getState();
                !i &&
                    (setTimeout(() => {
                        if (t.current instanceof g.lcI) {
                            var e, n, r, i;
                            (null == (n = t.current) || null == (e = n._textArea) || e.setSelectionRange(l.length, l.length), null == (i = t.current) || null == (r = i._textArea) || r.focus());
                        }
                    }, 0),
                    ((o && l.length > 0) || (s.textValue.trim().length > 0 && s.textValue.trim() !== r) || A.Z.getUploads(e.id, k.d.FirstThreadMessage).length > 0) && a());
            }, [n, e.id, r, t]);
        })(t, d),
        L = (function (e) {
            let { formOpen: t } = (0, X.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.X),
                n = (0, X.AF)(),
                r = (0, E.r)({ parentChannel: e });
            i.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                (e(null), t(null));
            }, [t, n]);
            let a = i.useCallback(
                (t, r, i) => {
                    let { name: a, textAreaState: l } = n.getState();
                    (null == t && (t = l.textValue), (t = t.trim()));
                    let { content: s } = y.ZP.parse(e, t);
                    if (((t = s), null == r || 0 === r.length)) {
                        var o;
                        r = null == (o = T.Z.getStickerPreview(e.id, ea.drafts.type)) ? void 0 : o.map((e) => e.id);
                    }
                    if (((null == i || 0 === i.length) && (i = A.Z.getUploads(e.id, k.d.FirstThreadMessage)), null != i && i.length > 0 && e.isMediaChannel())) {
                        let e = i.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = i[e];
                            (i.splice(e, 1), i.unshift(t));
                        }
                    }
                    let c = 0 === a.length,
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
                async (t, i, l) => {
                    let { setNameError: s, setMessageError: o, setSubmitting: c, resetFormState: d, formOpen: u, setFormOpen: m, setPreviewing: h, setFormOpenFromUserAction: g, setGuidelinesOpen: f } = n.getState(),
                        x = U.Z.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, V.P_)({
                                guildId: e.guild_id,
                                channelId: e.id
                            }),
                            x || n.getState().setGuidelinesOpen(!0),
                            g(),
                            {
                                shouldClear: !1,
                                shouldRefocus: !1
                            }
                        );
                    let { content: p, stickers: b, uploads: j, hasNameError: v, hasMessageError: _ } = a(t, i, l);
                    if ((s(v ? (0, B.V_)() : null), o(_ ? (0, B.T4)() : null), v || _))
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                    try {
                        c(!0);
                        let { valid: t } = await (0, D.v)({
                            content: p,
                            stickers: b,
                            uploads: j,
                            type: ea,
                            channel: e
                        });
                        if (!t)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                        let n = await r(p, b, j);
                        return (
                            (0, I.ok)(n),
                            H.Z.resort(e.id),
                            (0, S.qB)(e.id, ea.drafts.type),
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
                        var C, y;
                        return (
                            (null == (C = t.body) ? void 0 : C.code) === $.evJ.AUTOMOD_TITLE_BLOCKED ? s((0, B.Gx)(t.body, e)) : (null == (y = t.body) ? void 0 : y.code) === $.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, B.Gx)(t.body, e)),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    } finally {
                        c(!1);
                    }
                },
                [r, a, e, n]
            );
        })(t);
    return (
        i.useLayoutEffect(s, [f, m, w, s]),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)('div', {
                'aria-label': u ? et.intl.string(et.t.dq7mAQ) : et.intl.string(et.t['5h0QOD']),
                className: l()(en.container, { [en.collapsed]: !f }),
                onClick: !f && u ? Z : void 0,
                children: (0, r.jsxs)('form', {
                    onMouseDown: v,
                    onFocus: v,
                    onSubmit: (e) => {
                        (e.preventDefault(), u && L());
                    },
                    children: [
                        (0, r.jsxs)('div', {
                            className: en.formContainer,
                            children: [
                                (0, r.jsx)(es, {
                                    parentChannel: t,
                                    isSearchLoading: n,
                                    inputRef: d
                                }),
                                (0, r.jsxs)('div', {
                                    className: x ? en.previewForm : en.form,
                                    children: [
                                        (0, r.jsx)(eo, {
                                            editorRef: p,
                                            parentChannel: t,
                                            isSearchLoading: n,
                                            numResults: a,
                                            inputRef: d,
                                            canCreatePost: u
                                        }),
                                        f &&
                                            (0, r.jsx)(eu, {
                                                editorRef: p,
                                                setEditorRef: b,
                                                parentChannel: t,
                                                submit: L,
                                                disabled: !u
                                            }),
                                        x && (0, r.jsx)(em, {})
                                    ]
                                }),
                                P && (R ? (0, r.jsx)(C._, { parentChannel: t }) : (0, r.jsx)(W.Z, { channelId: t.id }))
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: en.form,
                            children: [
                                P && R && (0, r.jsx)(_.Z, { parentChannel: t }),
                                f &&
                                    (0, r.jsx)(ex, {
                                        className: en.horizontalPadding,
                                        parentChannel: t,
                                        canCreatePost: u
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
        let { parentChannel: t, isSearchLoading: n, inputRef: a } = e,
            {
                formOpen: l,
                name: s,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u
            } = (0, X.xH)((e) => {
                let { formOpen: t, nameError: n, name: r, previewing: i, textAreaState: a, hasClickedForm: l, submitting: s } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: r,
                    textAreaState: a,
                    previewing: i,
                    hasClickedForm: l,
                    submitting: s
                };
            }, c.X),
            m = (0, X.AF)(),
            h = (0, G.ql)(t),
            p = i.useCallback(() => {
                var e;
                (m.getState().resetFormState(),
                    f.Z.clearDraft(t.id, k.d.ThreadSettings),
                    f.Z.clearDraft(t.id, k.d.FirstThreadMessage),
                    x.Z.clearAll(t.id, k.d.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    null == (e = a.current) || e.blur(),
                    (0, V.Oq)({
                        guildId: t.guild_id,
                        channelId: t.id
                    }));
            }, [m, t.id, t.guild_id, a]),
            b = i.useMemo(
                () =>
                    n && !l
                        ? (0, r.jsx)(ev, {})
                        : n || l || (0 !== o.textValue.trim().length && o.textValue.trim() !== h)
                          ? !l && (s.trim().length > 0 || (o.textValue.trim().length > 0 && o.textValue.trim() !== h) || A.Z.getUploads(t.id, k.d.FirstThreadMessage).length > 0) && d
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
                                                  onClick: p,
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
                [n, l, d, s, o.textValue, p, t.id, h, u]
            );
        return (0, r.jsx)('div', {
            className: en.prefixElement,
            children: b
        });
    }),
    eo = i.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: a, editorRef: l, isSearchLoading: s, numResults: d } = e,
            {
                formOpen: u,
                nameError: m,
                name: f,
                textAreaState: x,
                previewing: p
            } = (0, X.xH)((e) => {
                let { formOpen: t, nameError: n, name: r, previewing: i, textAreaState: a, hasClickedForm: l, submitting: s } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: r,
                    textAreaState: a,
                    previewing: i,
                    hasClickedForm: l,
                    submitting: s
                };
            }, c.X),
            b = (0, X.AF)(),
            j = null != t.topic && 0 !== t.topic.length,
            v = U.Z.hasSeen(t.id),
            _ = (0, G.ql)(t),
            C = (0, h.e7)([L.default], () => L.default.getCurrentUser());
        (o()(null != C, 'current user cannot be null'),
            (0, F.yp)({
                event: $.CkL.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    var e;
                    let t = n.current instanceof g.lcI ? (null == (e = n.current) ? void 0 : e._textArea) : n.current;
                    (null == t || t.focus(), b.getState().setTitleFocused(!0), b.getState().setFormOpen(!0), b.getState().setHasClickedForm(!0));
                }
            }));
        let y = i.useCallback(
                (e) => {
                    let n = e.clipboardData.files[0];
                    null != n && n.type.startsWith('image/') && (e.preventDefault(), (0, z.d)([n], t, k.d.FirstThreadMessage), b.getState().setFormOpenFromUserAction());
                },
                [t, b]
            ),
            O = (0, B.Op)(m, { content: f });
        return (0, r.jsxs)('div', {
            className: en.titleContainer,
            onPaste: y,
            children: [
                u && p
                    ? (0, r.jsx)(g.X6q, {
                          variant: 'heading-md/semibold',
                          className: en.title,
                          children: f
                      })
                    : (0, r.jsx)(g.Kx8, {
                          value: f,
                          placeholder: a ? (u || (x.textValue.length > 0 && x.textValue.trim() !== _) ? et.intl.string(et.t.lU4dDQ) : et.intl.string(et.t.CjmivL)) : et.intl.string(et.t['5h0QOD']),
                          flex: !0,
                          autosize: u,
                          rows: 1,
                          showCharacterCount: !1,
                          showRemainingCharacterCount: !1,
                          maxLength: $.HN8,
                          onChange: (e) => {
                              let n = (0, P.Z)(e, !1);
                              b.getState().setName(n);
                              let r = 0 === n.trim().length,
                                  i = 0 === x.textValue.trim().length,
                                  a = x.textValue.trim() === _;
                              (r && (i || a) && b.getState().setHasClickedForm(!1), u || H.Z.updateForumSearchQuery(t.id, n));
                          },
                          onFocus: () => {
                              (b.getState().setTitleFocused(!0), b.getState().setBodyFocused(!1));
                          },
                          onBlur: () => {
                              b.getState().setTitleFocused(!1);
                              let e = (0, P.Z)(f, !0);
                              e !== f && (b.getState().setName(e), u || H.Z.updateForumSearchQuery(t.id, e));
                          },
                          onKeyDown: (e) => {
                              var r, i;
                              'Enter' === e.key &&
                                  (e.preventDefault(),
                                  e.stopPropagation(),
                                  u && f.length > 0
                                      ? null == l || l.focus()
                                      : a && e.shiftKey
                                        ? ((0, V.nH)({
                                              guildId: t.guild_id,
                                              channelId: t.id
                                          }),
                                          j && !v && b.getState().setGuidelinesOpen(!0),
                                          b.getState().setFormOpenFromUserAction(),
                                          f.trim().length > 0 && (b.getState().setBodyFocused(!0), null == l || l.focus()))
                                        : u || !(f.length > 0) || null != d || s || H.Z.updateForumSearchQuery(t.id, f));
                              let o = n.current instanceof g.lcI ? (null == (r = n.current) ? void 0 : r._textArea) : n.current;
                              if ('Home' === e.key || 'End' === e.key) {
                                  if (null == o) return;
                                  if ((e.preventDefault(), e.stopPropagation(), 'Home' === e.key)) {
                                      let t = e.shiftKey ? Math.max(o.selectionStart, o.selectionEnd) : 0;
                                      o.setSelectionRange(0, t, 'backward');
                                  } else {
                                      let t = e.shiftKey ? Math.min(o.selectionStart, o.selectionEnd) : f.length,
                                          n = f.length;
                                      o.setSelectionRange(t, n, 'forward');
                                  }
                              }
                              'Escape' !== e.key || b.getState().submitting || (null == (i = n.current) || i.blur(), b.getState().setFormOpen(!1), b.getState().setTitleFocused(!1), b.getState().setBodyFocused(!1), b.getState().setPreviewing(!1));
                          },
                          error: O,
                          className: en.title,
                          inputRef: n
                      }),
                u
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(ec, { parentChannel: t }),
                              (0, r.jsx)(ep, {
                                  parentChannel: t,
                                  canCreatePost: a
                              })
                          ]
                      })
            ]
        });
    });
function ec(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, X.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.X),
        i = (0, X.AF)(),
        a = null != t.topic && 0 !== t.topic.length,
        s = () => {
            i.getState().setGuidelinesOpen(!n);
        };
    return a
        ? (0, r.jsx)(g.ua7, {
              text: et.intl.string(et.t['4d4T4u']),
              children: (e) =>
                  (0, r.jsx)(
                      g.P3F,
                      ei(er({}, e), {
                          onClick: s,
                          className: l()(en.forumPostFormButton, { [en.forumPostFormButtonActive]: n }),
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
            i = new R.ZP({
                channelId: t.id,
                content: n
            }),
            { content: a } = (0, O.Z)(i, {
                hideSimpleEmbedContent: !0,
                isInteracting: !1,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0
            }),
            s = (0, w.Z)(
                {
                    message: i,
                    channel: t,
                    compact: !1
                },
                a,
                !1
            );
        return (0, r.jsx)('div', {
            className: l()(en.channelTextAreaInner, en.previewTextArea),
            children: s
        });
    }),
    eu = i.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: a = !1, editorRef: s, setEditorRef: d } = e,
            u = (0, h.e7)([L.default], () => L.default.getCurrentUser());
        o()(null != u, 'current user cannot be null');
        let {
                messageError: m,
                previewing: f,
                textAreaState: x,
                bodyFocused: p,
                formOpen: b
            } = (0, X.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: r, bodyFocused: i, formOpen: a } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: r,
                    bodyFocused: i,
                    formOpen: a
                };
            }, c.X),
            v = (0, X.AF)();
        i.useEffect(
            () => () =>
                (0, V.Vn)({
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            [t.guild_id, t.id]
        );
        let _ = i.useCallback(() => {
                v.getState().setBodyFocused(!0);
            }, [v]),
            C = i.useCallback(() => {
                v.getState().setBodyFocused(!1);
            }, [v]),
            y = i.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: r } = v.getState();
                    r({
                        textValue: t,
                        richValue: n
                    });
                },
                [v]
            ),
            O = i.useCallback(
                (e) => {
                    let { value: t, uploads: r, stickers: i } = e;
                    return n(t, i, r);
                },
                [n]
            );
        ((0, F.yp)({
            event: $.CkL.TEXTAREA_FOCUS,
            handler: _
        }),
            (0, F.yp)({
                event: $.CkL.TEXTAREA_BLUR,
                handler: C
            }));
        let w = (0, B.Op)(m, { content: x.textValue });
        return (0, r.jsx)('div', {
            className: en.bodyContainer,
            children: (0, r.jsxs)('div', {
                className: en.contentContainer,
                children: [
                    f
                        ? (0, r.jsx)(ed, {
                              parentChannel: t,
                              textValue: x.textValue
                          })
                        : (0, r.jsx)('div', {
                              onClick: _,
                              children: (0, r.jsx)(j.Z, {
                                  type: ea,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: et.intl.string(et.t['8IPnv7']),
                                  textValue: x.textValue,
                                  richValue: x.richValue,
                                  focused: p,
                                  className: en.channelTextArea,
                                  innerClassName: l()(en.channelTextAreaInner, { [en.channelTextAreaInnerError]: null != w }),
                                  onChange: y,
                                  onSubmit: O,
                                  promptToUpload: z.d,
                                  disabled: a,
                                  onKeyDown: (e) => {
                                      (('ArrowUp' === e.key || 'ArrowDown' === e.key) && e.stopPropagation(), b && 'Escape' === e.key && !v.getState().submitting && (null == s || s.blur(), v.getState().setFormOpen(!1), v.getState().setTitleFocused(!1), v.getState().setBodyFocused(!1), v.getState().setPreviewing(!1)));
                                  },
                                  autoCompletePosition: 'bottom'
                              })
                          }),
                    (0, r.jsx)(g.pdY, { error: w })
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
function eh(e) {
    let { textAreaState: t } = (0, X.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        n = (0, h.Wu)([A.Z], () => A.Z.getUploads(e.id, k.d.FirstThreadMessage));
    return i.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function eg(e) {
    let t = eh(e),
        { appliedTags: n, name: r } = (0, X.xH)((e) => {
            let { appliedTags: t, name: n } = e;
            return {
                appliedTags: t,
                name: n
            };
        }, c.X);
    return i.useMemo(() => e.hasFlag(ee.zZ.REQUIRE_TAG) && 0 === n.size && r.length > 0 && t, [n, r, e, t]);
}
function ef() {
    let { previewing: e } = (0, X.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.X),
        t = (0, X.AF)(),
        n = i.useCallback(() => {
            (t.getState().setPreviewing(!e), (0, V.nE)());
        }, [e, t]);
    return (0, r.jsx)(g.ua7, {
        text: e ? et.intl.string(et.t.ojM1xM) : et.intl.string(et.t.SKNnqq),
        children: (t) =>
            (0, r.jsx)(
                g.P3F,
                ei(er({}, t), {
                    onClick: n,
                    className: l()(en.forumPostFormButton, { [en.forumPostFormButtonActive]: e }),
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
let ex = i.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: a } = e,
        { textAreaState: l, name: s } = (0, X.xH)((e) => {
            let { textAreaState: t, name: n } = e;
            return {
                textAreaState: t,
                name: n
            };
        }, c.X),
        { rateLimitPerUser: o } = t,
        d = o > 0,
        u = (0, h.e7)([Z.Z], () => Z.Z.getSlowmodeCooldownGuess(t.id, Z.S.CreateThread)),
        m = (0, h.e7)([M.Z], () => M.Z.can($.Plq.MANAGE_THREADS, t) || M.Z.can($.Plq.MANAGE_CHANNELS, t)),
        f = eg(t),
        x = (0, X.AF)(),
        p = i.useCallback(() => {
            x.getState().setBodyFocused(!1);
        }, [x]),
        j = i.useMemo(() => '' !== s.trim() && '' !== l.textValue.trim(), [s, l.textValue]);
    return (
        i.useEffect(() => {
            j || x.getState().setPreviewing(!1);
        }, [j, x]),
        (0, r.jsxs)('div', {
            className: a,
            children: [
                (0, r.jsx)(ej, { parentChannel: t }),
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
                                            type: ea,
                                            textValue: l.textValue,
                                            className: en.characterCount
                                        }),
                                        d &&
                                            (0, r.jsx)(J.Z, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0
                                            })
                                    ]
                                }),
                                (0, r.jsx)(ec, { parentChannel: t }),
                                j && (0, r.jsx)(ef, {}),
                                (0, r.jsx)(ep, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: d && !m && u > 0
                                })
                            ]
                        }),
                        (0, r.jsx)(
                            b.Z,
                            {
                                type: ea,
                                className: en.expressionPicker,
                                onClick: p
                            },
                            'expression'
                        )
                    ]
                }),
                f &&
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
function ep(e) {
    let { parentChannel: t, canCreatePost: n, disabled: i, disableIfInvalid: a = !1 } = e,
        l = (0, N.HL)(t),
        {
            submitting: s,
            name: o,
            formOpen: d
        } = (0, X.xH)((e) => {
            let { submitting: t, name: n, formOpen: r } = e;
            return {
                submitting: t,
                name: n,
                formOpen: r
            };
        }, c.X),
        u = eh(t),
        m = !eg(t) && u && o.trim().length > 0;
    if (__OVERLAY__ || l) return null;
    let h = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.jsxs)(
            g.zxk,
            ei(er({}, e), {
                size: g.zxk.Sizes.SMALL,
                className: en.submitButton,
                innerClassName: en.submitButtonInner,
                type: 'submit',
                submitting: s,
                disabled: (a && !m) || i || !n,
                children: [
                    (0, r.jsx)(g.kBi, {
                        size: 'xs',
                        color: 'currentColor',
                        className: en.submitIcon
                    }),
                    (0, r.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        color: 'none',
                        children: d ? et.intl.string(et.t.pIuQIy) : et.intl.string(et.t.TyAuoa)
                    })
                ]
            })
        );
    };
    return n
        ? h()
        : (0, r.jsx)(g.ua7, {
              text: et.intl.string(et.t.iyzwnJ),
              children: (e) => h(e)
          });
}
function eb() {
    return Promise.resolve();
}
function ej(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: a,
            setPopoutOpen: s
        } = (0, X.xH)((e) => {
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
            scrollToStart: eb,
            scrollToEnd: eb,
            orientation: m.hy.HORIZONTAL
        }),
        { containerRef: f, containerWidth: x } = (0, Y.Z)(),
        p = i.useRef(null),
        b = i.useRef(null),
        [j, v] = i.useState(!0),
        _ = (0, G.Vm)(t),
        [C, y] = i.useState(0);
    return (i.useLayoutEffect(() => {
        var e;
        let t = p.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0],
            r = null == t || null == n || n.clientHeight > t.clientHeight;
        if ((r !== j && v(r), r && null != f.current && null != n && null != n.children)) {
            let { left: e, top: t } = f.current.getBoundingClientRect(),
                r = 0;
            for (let i of n.children) {
                let { right: n, top: a, height: l } = i.getBoundingClientRect();
                if (a - t > l) break;
                n - e > r && (r = n - e);
            }
            y(r);
        }
    }, [_, j, f, x]),
    0 === _.length)
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
                      ref: p,
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
                                                      a = Object.keys(e);
                                                  for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                                  return i;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
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
                                              children: _.map((e) =>
                                                  (0, r.jsx)(
                                                      K.Z,
                                                      {
                                                          ariaLabel: et.intl.formatToPlainString(et.t.FSZVIS, { tagName: e.name }),
                                                          tag: e,
                                                          onClick: o && !n.has(e.id) ? void 0 : () => a(e.id),
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
                  j &&
                      (0, r.jsx)(g.yRy, {
                          targetElementRef: b,
                          onRequestOpen: () => s(!0),
                          onRequestClose: () => s(!1),
                          renderPopout: (e) => {
                              let { closePopout: i } = e;
                              return (0, r.jsx)(q.Z, {
                                  parentChannel: t,
                                  appliedTags: n,
                                  maxTagsApplied: o,
                                  onSelectTag: a,
                                  onClose: i
                              });
                          },
                          position: 'bottom',
                          align: 'center',
                          children: (e) =>
                              (0, r.jsxs)(
                                  g.zxk,
                                  ei(er({}, e), {
                                      buttonRef: b,
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
                      className: l()(en.tagsButton, en.tagsButtonPlaceholder),
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
function ev(e) {
    let { style: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: n,
        style: t,
        children: (0, r.jsx)('div', { className: en.loader })
    });
}

n.d(t, { Z: () => es }), n(388685), n(781311), n(290780);
var r = n(255367),
    a = n(73800),
    l = n(120356),
    i = n.n(l),
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
    C = n(436660),
    _ = n(284182),
    y = n(795639),
    O = n(957730),
    w = n(25015),
    S = n(252032),
    N = n(216572),
    P = n(913663),
    T = n(268350),
    I = n(456077),
    E = n(488131),
    R = n(602034),
    k = n(23750),
    M = n(703558),
    Z = n(496675),
    A = n(300429),
    L = n(117530),
    F = n(594174),
    D = n(459273),
    z = n(838440),
    B = n(127654),
    H = n(681154),
    U = n(883429),
    V = n(945141),
    G = n(456269),
    q = n(228392),
    W = n(259637),
    X = n(76451),
    K = n(470623),
    J = n(479099),
    Y = n(399894),
    Q = n(81490),
    $ = n(710352),
    ee = n(981631),
    et = n(176505),
    en = n(388032),
    er = n(860128);
function ea(e) {
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
function el(e, t) {
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
let ei = p.Ie.CREATE_FORUM_POST;
function es(e) {
    let { parentChannel: t, isSearchLoading: n, numResults: l, onChange: s, canCreatePost: o, inputRef: d } = e,
        u = !(0, N.HL)(t) && o,
        {
            textAreaState: m,
            formOpen: f,
            previewing: x
        } = (0, K.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: r } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: r
            };
        }, c.X),
        [p, b] = a.useState(null),
        j = a.useContext(D.oo),
        v = a.useCallback(() => {
            j.bumpDispatchPriority();
        }, [j]),
        C = (0, h.e7)([Z.Z], () => Z.Z.can(ee.Plq.ATTACH_FILES, t)),
        w = (0, h.Wu)([L.Z], () => L.Z.getUploads(t.id, M.d.FirstThreadMessage)),
        S = f && C && u,
        I = (null == t ? void 0 : t.isMediaChannel()) === !0,
        k = (function (e, t) {
            let n = (0, K.AF)(),
                r = (0, G.ql)(e);
            return a.useCallback(() => {
                let { formOpen: a, setFormOpenFromUserAction: l, name: i, textAreaState: s, hasClickedForm: o } = n.getState();
                !a &&
                    (setTimeout(() => {
                        if (t.current instanceof g.lcI) {
                            var e, n, r, a;
                            null == (n = t.current) || null == (e = n._textArea) || e.setSelectionRange(i.length, i.length), null == (a = t.current) || null == (r = a._textArea) || r.focus();
                        }
                    }, 0),
                    ((o && i.length > 0) || (s.textValue.trim().length > 0 && s.textValue.trim() !== r) || L.Z.getUploads(e.id, M.d.FirstThreadMessage).length > 0) && l());
            }, [n, e.id, r, t]);
        })(t, d),
        A = (function (e) {
            let { formOpen: t } = (0, K.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.X),
                n = (0, K.AF)(),
                r = (0, R.r)({ parentChannel: e });
            a.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let l = a.useCallback(
                (t, r, a) => {
                    let { name: l, textAreaState: i } = n.getState();
                    null == t && (t = i.textValue), (t = t.trim());
                    let { content: s } = O.ZP.parse(e, t);
                    if (((t = s), null == r || 0 === r.length)) {
                        var o;
                        r = null == (o = P.Z.getStickerPreview(e.id, ei.drafts.type)) ? void 0 : o.map((e) => e.id);
                    }
                    if (((null == a || 0 === a.length) && (a = L.Z.getUploads(e.id, M.d.FirstThreadMessage)), null != a && a.length > 0 && e.isMediaChannel())) {
                        let e = a.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = a[e];
                            a.splice(e, 1), a.unshift(t);
                        }
                    }
                    let c = 0 === l.length,
                        d = (null == t || 0 === t.length) && (null == r || 0 === r.length) && 0 === a.length;
                    return {
                        content: t,
                        stickers: r,
                        uploads: a,
                        hasNameError: c,
                        hasMessageError: d
                    };
                },
                [e, n]
            );
            return a.useCallback(
                async (t, a, i) => {
                    let { setNameError: s, setMessageError: o, setSubmitting: c, resetFormState: d, formOpen: u, setFormOpen: m, setPreviewing: h, setFormOpenFromUserAction: g, setGuidelinesOpen: f } = n.getState(),
                        x = V.Z.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, q.P_)({
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
                    let { content: p, stickers: b, uploads: j, hasNameError: v, hasMessageError: C } = l(t, a, i);
                    if ((s(v ? (0, H.V_)() : null), o(C ? (0, H.T4)() : null), v || C))
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                    try {
                        c(!0);
                        let { valid: t } = await (0, z.v)({
                            content: p,
                            stickers: b,
                            uploads: j,
                            type: ei,
                            channel: e
                        });
                        if (!t)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                        let n = await r(p, b, j);
                        return (
                            (0, E.ok)(n),
                            U.Z.resort(e.id),
                            (0, T.qB)(e.id, ei.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            V.Z.markAsSeen(e.id),
                            f(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch (t) {
                        var _, y;
                        return (
                            (null == (_ = t.body) ? void 0 : _.code) === ee.evJ.AUTOMOD_TITLE_BLOCKED ? s((0, H.Gx)(t.body, e)) : (null == (y = t.body) ? void 0 : y.code) === ee.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, H.Gx)(t.body, e)),
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
        a.useLayoutEffect(s, [f, m, w, s]),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)('div', {
                'aria-label': u ? en.intl.string(en.t.dq7mAQ) : en.intl.string(en.t['5h0QOD']),
                className: i()(er.container, { [er.collapsed]: !f }),
                onClick: !f && u ? k : void 0,
                children: (0, r.jsxs)('form', {
                    onMouseDown: v,
                    onFocus: v,
                    onSubmit: (e) => {
                        e.preventDefault(), u && A();
                    },
                    children: [
                        (0, r.jsxs)('div', {
                            className: er.formContainer,
                            children: [
                                (0, r.jsx)(eo, {
                                    parentChannel: t,
                                    isSearchLoading: n,
                                    inputRef: d
                                }),
                                (0, r.jsxs)('div', {
                                    className: x ? er.previewForm : er.form,
                                    children: [
                                        (0, r.jsx)(ec, {
                                            editorRef: p,
                                            parentChannel: t,
                                            isSearchLoading: n,
                                            numResults: l,
                                            inputRef: d,
                                            canCreatePost: u
                                        }),
                                        f &&
                                            (0, r.jsx)(em, {
                                                editorRef: p,
                                                setEditorRef: b,
                                                parentChannel: t,
                                                submit: A,
                                                disabled: !u
                                            }),
                                        x && (0, r.jsx)(eh, {})
                                    ]
                                }),
                                S && (I ? (0, r.jsx)(y._, { parentChannel: t }) : (0, r.jsx)(X.Z, { channelId: t.id }))
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: er.form,
                            children: [
                                S && I && (0, r.jsx)(_.Z, { parentChannel: t }),
                                f &&
                                    (0, r.jsx)(ef, {
                                        className: er.horizontalPadding,
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
let eo = a.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: l } = e,
            {
                formOpen: i,
                name: s,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u
            } = (0, K.xH)((e) => {
                let { formOpen: t, nameError: n, name: r, previewing: a, textAreaState: l, hasClickedForm: i, submitting: s } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: r,
                    textAreaState: l,
                    previewing: a,
                    hasClickedForm: i,
                    submitting: s
                };
            }, c.X),
            m = (0, K.AF)(),
            h = (0, G.ql)(t),
            p = a.useCallback(() => {
                var e;
                m.getState().resetFormState(),
                    f.Z.clearDraft(t.id, M.d.ThreadSettings),
                    f.Z.clearDraft(t.id, M.d.FirstThreadMessage),
                    x.Z.clearAll(t.id, M.d.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    null == (e = l.current) || e.blur(),
                    (0, q.Oq)({
                        guildId: t.guild_id,
                        channelId: t.id
                    });
            }, [m, t.id, t.guild_id, l]),
            b = a.useMemo(
                () =>
                    n && !i
                        ? (0, r.jsx)(ej, {})
                        : n || i || (0 !== o.textValue.trim().length && o.textValue.trim() !== h)
                          ? !i && (s.trim().length > 0 || (o.textValue.trim().length > 0 && o.textValue.trim() !== h) || L.Z.getUploads(t.id, M.d.FirstThreadMessage).length > 0) && d
                              ? (0, r.jsx)(g.vdY, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: er.pencilIcon
                                })
                              : u
                                ? (0, r.jsx)(g.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: er.closeIconDisabled
                                  })
                                : (0, r.jsx)(g.ua7, {
                                      text: en.intl.string(en.t['98EPQE']),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              g.P3F,
                                              el(ea({}, e), {
                                                  onClick: p,
                                                  children: (0, r.jsx)(g.k$p, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: er.closeIcon
                                                  })
                                              })
                                          )
                                  })
                          : (0, r.jsx)(g._Ve, {
                                size: 'md',
                                color: 'currentColor',
                                className: er.searchIcon
                            }),
                [n, i, d, s, o.textValue, p, t.id, h, u]
            );
        return (0, r.jsx)('div', {
            className: er.prefixElement,
            children: b
        });
    }),
    ec = a.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: i, isSearchLoading: s, numResults: d } = e,
            {
                formOpen: u,
                nameError: m,
                name: f,
                textAreaState: x,
                previewing: p
            } = (0, K.xH)((e) => {
                let { formOpen: t, nameError: n, name: r, previewing: a, textAreaState: l, hasClickedForm: i, submitting: s } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: r,
                    textAreaState: l,
                    previewing: a,
                    hasClickedForm: i,
                    submitting: s
                };
            }, c.X),
            b = (0, K.AF)(),
            j = null != t.topic && 0 !== t.topic.length,
            v = V.Z.hasSeen(t.id),
            C = (0, G.ql)(t),
            _ = (0, h.e7)([F.default], () => F.default.getCurrentUser());
        o()(null != _, 'current user cannot be null'),
            (0, D.yp)({
                event: ee.CkL.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    var e;
                    let t = n.current instanceof g.lcI ? (null == (e = n.current) ? void 0 : e._textArea) : n.current;
                    null == t || t.focus(), b.getState().setTitleFocused(!0), b.getState().setFormOpen(!0), b.getState().setHasClickedForm(!0);
                }
            });
        let y = a.useCallback(
                (e) => {
                    let n = e.clipboardData.files[0];
                    null != n && n.type.startsWith('image/') && (e.preventDefault(), (0, B.d)([n], t, M.d.FirstThreadMessage), b.getState().setFormOpenFromUserAction());
                },
                [t, b]
            ),
            O = (0, H.Op)(m, { content: f });
        return (0, r.jsxs)('div', {
            className: er.titleContainer,
            onPaste: y,
            children: [
                u && p
                    ? (0, r.jsx)(g.X6q, {
                          variant: 'heading-md/semibold',
                          className: er.title,
                          children: f
                      })
                    : (0, r.jsx)(g.Kx8, {
                          value: f,
                          placeholder: l ? (u || (x.textValue.length > 0 && x.textValue.trim() !== C) ? en.intl.string(en.t.lU4dDQ) : en.intl.string(en.t.CjmivL)) : en.intl.string(en.t['5h0QOD']),
                          flex: !0,
                          autosize: u,
                          rows: 1,
                          showCharacterCount: !1,
                          showRemainingCharacterCount: !1,
                          maxLength: ee.HN8,
                          onChange: (e) => {
                              let n = (0, I.Z)(e, !1);
                              b.getState().setName(n);
                              let r = 0 === n.trim().length,
                                  a = 0 === x.textValue.trim().length,
                                  l = x.textValue.trim() === C;
                              r && (a || l) && b.getState().setHasClickedForm(!1), u || U.Z.updateForumSearchQuery(t.id, n);
                          },
                          onFocus: () => {
                              b.getState().setTitleFocused(!0), b.getState().setBodyFocused(!1);
                          },
                          onBlur: () => {
                              b.getState().setTitleFocused(!1);
                              let e = (0, I.Z)(f, !0);
                              e !== f && (b.getState().setName(e), u || U.Z.updateForumSearchQuery(t.id, e));
                          },
                          onKeyDown: (e) => {
                              var r, a;
                              'Enter' === e.key &&
                                  (e.preventDefault(),
                                  e.stopPropagation(),
                                  u && f.length > 0
                                      ? null == i || i.focus()
                                      : l && e.shiftKey
                                        ? ((0, q.nH)({
                                              guildId: t.guild_id,
                                              channelId: t.id
                                          }),
                                          j && !v && b.getState().setGuidelinesOpen(!0),
                                          b.getState().setFormOpenFromUserAction(),
                                          f.trim().length > 0 && (b.getState().setBodyFocused(!0), null == i || i.focus()))
                                        : u || !(f.length > 0) || null != d || s || U.Z.updateForumSearchQuery(t.id, f));
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
                              'Escape' !== e.key || b.getState().submitting || (null == (a = n.current) || a.blur(), b.getState().setFormOpen(!1), b.getState().setTitleFocused(!1), b.getState().setBodyFocused(!1), b.getState().setPreviewing(!1));
                          },
                          error: O,
                          className: er.title,
                          inputRef: n
                      }),
                u
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(ed, { parentChannel: t }),
                              (0, r.jsx)(ex, {
                                  parentChannel: t,
                                  canCreatePost: l
                              })
                          ]
                      })
            ]
        });
    });
function ed(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, K.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.X),
        a = (0, K.AF)(),
        l = null != t.topic && 0 !== t.topic.length,
        s = () => {
            a.getState().setGuidelinesOpen(!n);
        };
    return l
        ? (0, r.jsx)(g.ua7, {
              text: en.intl.string(en.t['4d4T4u']),
              children: (e) =>
                  (0, r.jsx)(
                      g.P3F,
                      el(ea({}, e), {
                          onClick: s,
                          className: i()(er.forumPostFormButton, { [er.forumPostFormButtonActive]: n }),
                          children: (0, r.jsx)(
                              g.snC,
                              ea(
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
let eu = a.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            a = new k.ZP({
                channelId: t.id,
                content: n
            }),
            { content: l } = (0, w.Z)(a, {
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
                    message: a,
                    channel: t,
                    compact: !1
                },
                l,
                !1
            );
        return (0, r.jsx)('div', {
            className: i()(er.channelTextAreaInner, er.previewTextArea),
            children: s
        });
    }),
    em = a.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: s, setEditorRef: d } = e,
            u = (0, h.e7)([F.default], () => F.default.getCurrentUser());
        o()(null != u, 'current user cannot be null');
        let {
                messageError: m,
                previewing: f,
                textAreaState: x,
                bodyFocused: p,
                formOpen: b
            } = (0, K.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: r, bodyFocused: a, formOpen: l } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: r,
                    bodyFocused: a,
                    formOpen: l
                };
            }, c.X),
            v = (0, K.AF)();
        a.useEffect(
            () => () =>
                (0, q.Vn)({
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            [t.guild_id, t.id]
        );
        let _ = a.useCallback(() => {
                v.getState().setBodyFocused(!0);
            }, [v]),
            y = a.useCallback(() => {
                v.getState().setBodyFocused(!1);
            }, [v]),
            O = a.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: r } = v.getState();
                    r({
                        textValue: t,
                        richValue: n
                    });
                },
                [v]
            ),
            w = a.useCallback(
                (e) => {
                    let { value: t, uploads: r, stickers: a } = e;
                    return n(t, a, r);
                },
                [n]
            );
        (0, D.yp)({
            event: ee.CkL.TEXTAREA_FOCUS,
            handler: _
        }),
            (0, D.yp)({
                event: ee.CkL.TEXTAREA_BLUR,
                handler: y
            });
        let S = (0, H.Op)(m, { content: x.textValue });
        return (0, r.jsx)('div', {
            className: er.bodyContainer,
            children: (0, r.jsxs)('div', {
                className: er.contentContainer,
                children: [
                    f
                        ? (0, r.jsx)(eu, {
                              parentChannel: t,
                              textValue: x.textValue
                          })
                        : (0, r.jsx)('div', {
                              onClick: _,
                              children: (0, r.jsx)(j.Z, {
                                  type: ei,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: en.intl.string(en.t['8IPnv7']),
                                  textValue: x.textValue,
                                  richValue: x.richValue,
                                  focused: p,
                                  className: er.channelTextArea,
                                  innerClassName: i()(er.channelTextAreaInner, { [er.channelTextAreaInnerError]: null != S }),
                                  onChange: O,
                                  onSubmit: w,
                                  promptToUpload: B.d,
                                  disabled: l,
                                  onKeyDown: (e) => {
                                      if ((('ArrowUp' === e.key || 'ArrowDown' === e.key) && e.stopPropagation(), 'Home' === e.key || 'End' === e.key)) {
                                          if (null == s) return;
                                          e.preventDefault(), e.stopPropagation();
                                          let t = s.getSlateEditor();
                                          if (null == t) return;
                                          'Home' === e.key ? C.Q.updateSelectionForHomeKey(t, e) : C.Q.updateSelectionForEndKey(t, e);
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
function eh() {
    return (0, r.jsx)('div', {
        className: er.previewModeIndicator,
        children: (0, r.jsx)(g.Text, {
            variant: 'text-sm/normal',
            color: 'interactive-normal',
            children: en.intl.string(en.t['WE/cYm'])
        })
    });
}
function eg() {
    let { previewing: e } = (0, K.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.X),
        t = (0, K.AF)(),
        n = a.useCallback(() => {
            t.getState().setPreviewing(!e), (0, q.nE)();
        }, [e, t]);
    return (0, r.jsx)(g.ua7, {
        text: e ? en.intl.string(en.t.ojM1xM) : en.intl.string(en.t.SKNnqq),
        children: (t) =>
            (0, r.jsx)(
                g.P3F,
                el(ea({}, t), {
                    onClick: n,
                    className: i()(er.forumPostFormButton, { [er.forumPostFormButtonActive]: e }),
                    children: e
                        ? (0, r.jsx)(
                              g.kZF,
                              ea(
                                  {
                                      size: 'md',
                                      color: 'currentColor'
                                  },
                                  t
                              )
                          )
                        : (0, r.jsx)(
                              g.tEF,
                              ea(
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
let ef = a.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        {
            textAreaState: i,
            appliedTags: s,
            name: o
        } = (0, K.xH)((e) => {
            let { textAreaState: t, appliedTags: n, name: r } = e;
            return {
                textAreaState: t,
                appliedTags: n,
                name: r
            };
        }, c.X),
        { rateLimitPerUser: d } = t,
        u = d > 0,
        m = (0, h.e7)([A.Z], () => A.Z.getSlowmodeCooldownGuess(t.id, A.S.CreateThread)),
        f = (0, h.e7)([Z.Z], () => Z.Z.can(ee.Plq.MANAGE_THREADS, t) || Z.Z.can(ee.Plq.MANAGE_CHANNELS, t)),
        x = t.hasFlag(et.zZ.REQUIRE_TAG) && 0 === s.size && o.length > 0 && i.textValue.length > 0,
        p = (0, K.AF)(),
        j = a.useCallback(() => {
            p.getState().setBodyFocused(!1);
        }, [p]),
        C = a.useMemo(() => '' !== o.trim() && '' !== i.textValue.trim(), [o, i.textValue]);
    return (
        a.useEffect(() => {
            C || p.getState().setPreviewing(!1);
        }, [C, p]),
        (0, r.jsxs)('div', {
            className: l,
            children: [
                (0, r.jsx)(eb, { parentChannel: t }),
                (0, r.jsx)('div', { className: er.tagsDivider }),
                (0, r.jsxs)('div', {
                    className: er.controlsContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: er.controls,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: er.wrappedControls,
                                    children: [
                                        (0, r.jsx)(v.Z, {
                                            type: ei,
                                            textValue: i.textValue,
                                            className: er.characterCount
                                        }),
                                        u &&
                                            (0, r.jsx)(Y.Z, {
                                                rateLimitPerUser: d,
                                                slowmodeCooldownGuess: m,
                                                isBypassSlowmode: f,
                                                leadingIcon: !0
                                            })
                                    ]
                                }),
                                (0, r.jsx)(ed, { parentChannel: t }),
                                C && (0, r.jsx)(eg, {}),
                                (0, r.jsx)(ex, {
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
                                type: ei,
                                className: er.expressionPicker,
                                onClick: j
                            },
                            'expression'
                        )
                    ]
                }),
                x &&
                    (0, r.jsx)(g.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-danger',
                        className: er.requiredError,
                        children: en.intl.string(en.t.xPfNQk)
                    })
            ]
        })
    );
});
function ex(e) {
    let { parentChannel: t, canCreatePost: n, disabled: a, disableIfInvalid: l = !1 } = e,
        i = (0, N.HL)(t),
        {
            submitting: s,
            textAreaState: o,
            name: d,
            appliedTags: u,
            formOpen: m
        } = (0, K.xH)((e) => {
            let { submitting: t, textAreaState: n, name: r, appliedTags: a, formOpen: l } = e;
            return {
                submitting: t,
                textAreaState: n,
                name: r,
                appliedTags: a,
                formOpen: l
            };
        }, c.X),
        f = t.hasFlag(et.zZ.REQUIRE_TAG) && 0 === u.size && d.length > 0 && o.textValue.length > 0,
        x = (0, h.Wu)([L.Z], () => L.Z.getUploads(t.id, M.d.FirstThreadMessage)),
        p = o.textValue.trim().length > 0 || x.length > 0,
        b = !f && p && d.trim().length > 0;
    if (__OVERLAY__ || i) return null;
    let j = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.jsxs)(
            g.zxk,
            el(ea({}, e), {
                size: g.zxk.Sizes.SMALL,
                className: er.submitButton,
                innerClassName: er.submitButtonInner,
                type: 'submit',
                submitting: s,
                disabled: (l && !b) || a || !n,
                children: [
                    (0, r.jsx)(g.kBi, {
                        size: 'xs',
                        color: 'currentColor',
                        className: er.submitIcon
                    }),
                    (0, r.jsx)(g.Text, {
                        variant: 'text-md/semibold',
                        color: 'none',
                        children: m ? en.intl.string(en.t.pIuQIy) : en.intl.string(en.t.TyAuoa)
                    })
                ]
            })
        );
    };
    return n
        ? j()
        : (0, r.jsx)(g.ua7, {
              text: en.intl.string(en.t.iyzwnJ),
              children: (e) => j(e)
          });
}
function ep() {
    return Promise.resolve();
}
function eb(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: l,
            setPopoutOpen: s
        } = (0, K.xH)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: r } = e;
            return {
                appliedTags: t,
                toggleAppliedTag: n,
                setPopoutOpen: r
            };
        }, c.X),
        o = n.size >= $.Cn,
        h = (0, d.ZP)({
            id: ''.concat(t.id, '-post-form-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: ep,
            scrollToEnd: ep,
            orientation: m.hy.HORIZONTAL
        }),
        { containerRef: f, containerWidth: x } = (0, Q.Z)(),
        p = a.useRef(null),
        b = a.useRef(null),
        [j, v] = a.useState(!0),
        C = (0, G.Vm)(t),
        [_, y] = a.useState(0);
    return (a.useLayoutEffect(() => {
        var e;
        let t = p.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0],
            r = null == t || null == n || n.clientHeight > t.clientHeight;
        if ((r !== j && v(r), r && null != f.current && null != n && null != n.children)) {
            let { left: e, top: t } = f.current.getBoundingClientRect(),
                r = 0;
            for (let a of n.children) {
                let { right: n, top: l, height: i } = a.getBoundingClientRect();
                if (l - t > i) break;
                n - e > r && (r = n - e);
            }
            y(r);
        }
    }, [C, j, f, x]),
    0 === C.length)
        ? null
        : (0, r.jsxs)('div', {
              className: er.tagsContainer,
              ref: f,
              children: [
                  (0, r.jsx)(g.lO_, {
                      size: 'xs',
                      color: 'currentColor',
                      className: er.tagsIcon
                  }),
                  (0, r.jsx)('div', {
                      className: er.tagList,
                      ref: p,
                      children: (0, r.jsx)(u.bG, {
                          navigator: h,
                          children: (0, r.jsx)(u.SJ, {
                              children: (e) => {
                                  var { ref: t } = e,
                                      a = (function (e, t) {
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
                                      })(e, ['ref']);
                                  return (0, r.jsx)(
                                      'div',
                                      el(
                                          ea(
                                              {
                                                  className: er.tagListInner,
                                                  ref: t
                                              },
                                              a
                                          ),
                                          {
                                              children: C.map((e) =>
                                                  (0, r.jsx)(
                                                      J.Z,
                                                      {
                                                          ariaLabel: en.intl.formatToPlainString(en.t.FSZVIS, { tagName: e.name }),
                                                          tag: e,
                                                          onClick: o && !n.has(e.id) ? void 0 : () => l(e.id),
                                                          disabled: !n.has(e.id) && n.size >= $.Cn,
                                                          selected: n.has(e.id),
                                                          size: J.Z.Sizes.SMALL
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
                              let { closePopout: a } = e;
                              return (0, r.jsx)(W.Z, {
                                  parentChannel: t,
                                  appliedTags: n,
                                  maxTagsApplied: o,
                                  onSelectTag: l,
                                  onClose: a
                              });
                          },
                          position: 'bottom',
                          align: 'center',
                          children: (e) =>
                              (0, r.jsxs)(
                                  g.zxk,
                                  el(ea({}, e), {
                                      buttonRef: b,
                                      size: g.zxk.Sizes.TINY,
                                      className: er.tagsButton,
                                      innerClassName: er.tagsButtonInner,
                                      style: { left: _ },
                                      look: g.zxk.Looks.LINK,
                                      'aria-label': en.intl.string(en.t.N5vP9P),
                                      children: [
                                          en.intl.string(en.t.IkpM1d),
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
                      className: i()(er.tagsButton, er.tagsButtonPlaceholder),
                      innerClassName: er.tagsButtonInner,
                      look: g.zxk.Looks.LINK,
                      'aria-label': en.intl.string(en.t.N5vP9P),
                      children: [
                          en.intl.string(en.t.IkpM1d),
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
function ej(e) {
    let { style: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: n,
        style: t,
        children: (0, r.jsx)('div', { className: er.loader })
    });
}

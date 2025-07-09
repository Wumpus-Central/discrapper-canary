(n.d(t, { Z: () => es }), n(388685), n(781311), n(290780));
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
    g = n(755721),
    f = n(481060),
    x = n(430742),
    p = n(166459),
    b = n(541716),
    j = n(67158),
    v = n(893718),
    _ = n(472243),
    C = n(284182),
    y = n(795639),
    O = n(957730),
    w = n(25015),
    N = n(252032),
    T = n(216572),
    S = n(913663),
    P = n(268350),
    I = n(456077),
    E = n(488131),
    R = n(602034),
    M = n(23750),
    Z = n(703558),
    k = n(496675),
    A = n(300429),
    L = n(117530),
    F = n(594174),
    D = n(459273),
    z = n(838440),
    B = n(127654),
    H = n(681154),
    U = n(883429),
    G = n(945141),
    V = n(456269),
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
function ei(e) {
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
function ea(e, t) {
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
let el = b.Ie.CREATE_FORUM_POST;
function es(e) {
    let { parentChannel: t, isSearchLoading: n, numResults: a, onChange: s, canCreatePost: o, inputRef: d } = e,
        u = !(0, T.HL)(t) && o,
        {
            textAreaState: m,
            formOpen: g,
            previewing: x
        } = (0, K.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: r } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: r
            };
        }, c.X),
        [p, b] = i.useState(null),
        j = i.useContext(D.oo),
        v = i.useCallback(() => {
            j.bumpDispatchPriority();
        }, [j]),
        _ = (0, h.e7)([k.Z], () => k.Z.can(ee.Plq.ATTACH_FILES, t)),
        w = (0, h.Wu)([L.Z], () => L.Z.getUploads(t.id, Z.d.FirstThreadMessage)),
        N = g && _ && u,
        I = (null == t ? void 0 : t.isMediaChannel()) === !0,
        M = (function (e, t) {
            let n = (0, K.AF)(),
                r = (0, V.ql)(e);
            return i.useCallback(() => {
                let { formOpen: i, setFormOpenFromUserAction: a, name: l, textAreaState: s, hasClickedForm: o } = n.getState();
                !i &&
                    (setTimeout(() => {
                        if (t.current instanceof f.lcI) {
                            var e, n, r, i;
                            (null == (n = t.current) || null == (e = n._textArea) || e.setSelectionRange(l.length, l.length), null == (i = t.current) || null == (r = i._textArea) || r.focus());
                        }
                    }, 0),
                    ((o && l.length > 0) || (s.textValue.trim().length > 0 && s.textValue.trim() !== r) || L.Z.getUploads(e.id, Z.d.FirstThreadMessage).length > 0) && a());
            }, [n, e.id, r, t]);
        })(t, d),
        A = (function (e) {
            let { formOpen: t } = (0, K.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.X),
                n = (0, K.AF)(),
                r = (0, R.r)({ parentChannel: e });
            i.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                (e(null), t(null));
            }, [t, n]);
            let a = i.useCallback(
                (t, r, i) => {
                    let { name: a, textAreaState: l } = n.getState();
                    (null == t && (t = l.textValue), (t = t.trim()));
                    let { content: s } = O.ZP.parse(e, t);
                    if (((t = s), null == r || 0 === r.length)) {
                        var o;
                        r = null == (o = S.Z.getStickerPreview(e.id, el.drafts.type)) ? void 0 : o.map((e) => e.id);
                    }
                    if (((null == i || 0 === i.length) && (i = L.Z.getUploads(e.id, Z.d.FirstThreadMessage)), null != i && i.length > 0 && e.isMediaChannel())) {
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
                        x = G.Z.hasSeen(e.id);
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
                    let { content: p, stickers: b, uploads: j, hasNameError: v, hasMessageError: _ } = a(t, i, l);
                    if ((s(v ? (0, H.V_)() : null), o(_ ? (0, H.T4)() : null), v || _))
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
                            type: el,
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
                            (0, P.qB)(e.id, el.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            G.Z.markAsSeen(e.id),
                            f(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch (t) {
                        var C, y;
                        return (
                            (null == (C = t.body) ? void 0 : C.code) === ee.evJ.AUTOMOD_TITLE_BLOCKED ? s((0, H.Gx)(t.body, e)) : (null == (y = t.body) ? void 0 : y.code) === ee.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, H.Gx)(t.body, e)),
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
        i.useLayoutEffect(s, [g, m, w, s]),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)('div', {
                'aria-label': u ? en.intl.string(en.t.dq7mAQ) : en.intl.string(en.t['5h0QOD']),
                className: l()(er.container, { [er.collapsed]: !g }),
                onClick: !g && u ? M : void 0,
                children: (0, r.jsxs)('form', {
                    onMouseDown: v,
                    onFocus: v,
                    onSubmit: (e) => {
                        (e.preventDefault(), u && A());
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
                                            numResults: a,
                                            inputRef: d,
                                            canCreatePost: u
                                        }),
                                        g &&
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
                                N && (I ? (0, r.jsx)(y._, { parentChannel: t }) : (0, r.jsx)(X.Z, { channelId: t.id }))
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: er.form,
                            children: [
                                N && I && (0, r.jsx)(C.Z, { parentChannel: t }),
                                g &&
                                    (0, r.jsx)(ep, {
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
let eo = i.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: a } = e,
            {
                formOpen: l,
                name: s,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u
            } = (0, K.xH)((e) => {
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
            m = (0, K.AF)(),
            h = (0, V.ql)(t),
            g = i.useCallback(() => {
                var e;
                (m.getState().resetFormState(),
                    x.Z.clearDraft(t.id, Z.d.ThreadSettings),
                    x.Z.clearDraft(t.id, Z.d.FirstThreadMessage),
                    p.Z.clearAll(t.id, Z.d.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    null == (e = a.current) || e.blur(),
                    (0, q.Oq)({
                        guildId: t.guild_id,
                        channelId: t.id
                    }));
            }, [m, t.id, t.guild_id, a]),
            b = i.useMemo(
                () =>
                    n && !l
                        ? (0, r.jsx)(e_, {})
                        : n || l || (0 !== o.textValue.trim().length && o.textValue.trim() !== h)
                          ? !l && (s.trim().length > 0 || (o.textValue.trim().length > 0 && o.textValue.trim() !== h) || L.Z.getUploads(t.id, Z.d.FirstThreadMessage).length > 0) && d
                              ? (0, r.jsx)(f.vdY, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: er.pencilIcon
                                })
                              : u
                                ? (0, r.jsx)(f.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: er.closeIconDisabled
                                  })
                                : (0, r.jsx)(f.ua7, {
                                      text: en.intl.string(en.t['98EPQE']),
                                      children: (e) =>
                                          (0, r.jsx)(
                                              f.P3F,
                                              ea(ei({}, e), {
                                                  onClick: g,
                                                  children: (0, r.jsx)(f.k$p, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: er.closeIcon
                                                  })
                                              })
                                          )
                                  })
                          : (0, r.jsx)(f._Ve, {
                                size: 'md',
                                color: 'currentColor',
                                className: er.searchIcon
                            }),
                [n, l, d, s, o.textValue, g, t.id, h, u]
            );
        return (0, r.jsx)('div', {
            className: er.prefixElement,
            children: b
        });
    }),
    ec = i.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: a, editorRef: l, isSearchLoading: s, numResults: d } = e,
            {
                formOpen: u,
                nameError: m,
                name: g,
                textAreaState: x,
                previewing: p
            } = (0, K.xH)((e) => {
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
            b = (0, K.AF)(),
            j = null != t.topic && 0 !== t.topic.length,
            v = G.Z.hasSeen(t.id),
            _ = (0, V.ql)(t),
            C = (0, h.e7)([F.default], () => F.default.getCurrentUser());
        (o()(null != C, 'current user cannot be null'),
            (0, D.yp)({
                event: ee.CkL.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    var e;
                    let t = n.current instanceof f.lcI ? (null == (e = n.current) ? void 0 : e._textArea) : n.current;
                    (null == t || t.focus(), b.getState().setTitleFocused(!0), b.getState().setFormOpen(!0), b.getState().setHasClickedForm(!0));
                }
            }));
        let y = i.useCallback(
                (e) => {
                    let n = e.clipboardData.files[0];
                    null != n && n.type.startsWith('image/') && (e.preventDefault(), (0, B.d)([n], t, Z.d.FirstThreadMessage), b.getState().setFormOpenFromUserAction());
                },
                [t, b]
            ),
            O = (0, H.Op)(m, { content: g });
        return (0, r.jsxs)('div', {
            className: er.titleContainer,
            onPaste: y,
            children: [
                u && p
                    ? (0, r.jsx)(f.X6q, {
                          variant: 'heading-md/semibold',
                          className: er.title,
                          children: g
                      })
                    : (0, r.jsx)(f.Kx8, {
                          value: g,
                          placeholder: a ? (u || (x.textValue.length > 0 && x.textValue.trim() !== _) ? en.intl.string(en.t.lU4dDQ) : en.intl.string(en.t.CjmivL)) : en.intl.string(en.t['5h0QOD']),
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
                                  i = 0 === x.textValue.trim().length,
                                  a = x.textValue.trim() === _;
                              (r && (i || a) && b.getState().setHasClickedForm(!1), u || U.Z.updateForumSearchQuery(t.id, n));
                          },
                          onFocus: () => {
                              (b.getState().setTitleFocused(!0), b.getState().setBodyFocused(!1));
                          },
                          onBlur: () => {
                              b.getState().setTitleFocused(!1);
                              let e = (0, I.Z)(g, !0);
                              e !== g && (b.getState().setName(e), u || U.Z.updateForumSearchQuery(t.id, e));
                          },
                          onKeyDown: (e) => {
                              var r, i;
                              'Enter' === e.key &&
                                  (e.preventDefault(),
                                  e.stopPropagation(),
                                  u && g.length > 0
                                      ? null == l || l.focus()
                                      : a && e.shiftKey
                                        ? ((0, q.nH)({
                                              guildId: t.guild_id,
                                              channelId: t.id
                                          }),
                                          j && !v && b.getState().setGuidelinesOpen(!0),
                                          b.getState().setFormOpenFromUserAction(),
                                          g.trim().length > 0 && (b.getState().setBodyFocused(!0), null == l || l.focus()))
                                        : u || !(g.length > 0) || null != d || s || U.Z.updateForumSearchQuery(t.id, g));
                              let o = n.current instanceof f.lcI ? (null == (r = n.current) ? void 0 : r._textArea) : n.current;
                              if ('Home' === e.key || 'End' === e.key) {
                                  if (null == o) return;
                                  if ((e.preventDefault(), e.stopPropagation(), 'Home' === e.key)) {
                                      let t = e.shiftKey ? Math.max(o.selectionStart, o.selectionEnd) : 0;
                                      o.setSelectionRange(0, t, 'backward');
                                  } else {
                                      let t = e.shiftKey ? Math.min(o.selectionStart, o.selectionEnd) : g.length,
                                          n = g.length;
                                      o.setSelectionRange(t, n, 'forward');
                                  }
                              }
                              'Escape' !== e.key || b.getState().submitting || (null == (i = n.current) || i.blur(), b.getState().setFormOpen(!1), b.getState().setTitleFocused(!1), b.getState().setBodyFocused(!1), b.getState().setPreviewing(!1));
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
                              (0, r.jsx)(eb, {
                                  parentChannel: t,
                                  canCreatePost: a
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
        i = (0, K.AF)(),
        a = null != t.topic && 0 !== t.topic.length,
        s = () => {
            i.getState().setGuidelinesOpen(!n);
        };
    return a
        ? (0, r.jsx)(f.ua7, {
              text: en.intl.string(en.t['4d4T4u']),
              children: (e) =>
                  (0, r.jsx)(
                      f.P3F,
                      ea(ei({}, e), {
                          onClick: s,
                          className: l()(er.forumPostFormButton, { [er.forumPostFormButtonActive]: n }),
                          children: (0, r.jsx)(
                              f.snC,
                              ei(
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
let eu = i.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            i = new M.ZP({
                channelId: t.id,
                content: n
            }),
            { content: a } = (0, w.Z)(i, {
                hideSimpleEmbedContent: !0,
                isInteracting: !1,
                formatInline: !1,
                allowList: !0,
                allowHeading: !0,
                previewLinkTarget: !0,
                allowLinks: !0
            }),
            s = (0, N.Z)(
                {
                    message: i,
                    channel: t,
                    compact: !1
                },
                a,
                !1
            );
        return (0, r.jsx)('div', {
            className: l()(er.channelTextAreaInner, er.previewTextArea),
            children: s
        });
    }),
    em = i.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: a = !1, editorRef: s, setEditorRef: d } = e,
            u = (0, h.e7)([F.default], () => F.default.getCurrentUser());
        o()(null != u, 'current user cannot be null');
        let {
                messageError: m,
                previewing: g,
                textAreaState: x,
                bodyFocused: p,
                formOpen: b
            } = (0, K.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: r, bodyFocused: i, formOpen: a } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: r,
                    bodyFocused: i,
                    formOpen: a
                };
            }, c.X),
            j = (0, K.AF)();
        i.useEffect(
            () => () =>
                (0, q.Vn)({
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            [t.guild_id, t.id]
        );
        let _ = i.useCallback(() => {
                j.getState().setBodyFocused(!0);
            }, [j]),
            C = i.useCallback(() => {
                j.getState().setBodyFocused(!1);
            }, [j]),
            y = i.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: r } = j.getState();
                    r({
                        textValue: t,
                        richValue: n
                    });
                },
                [j]
            ),
            O = i.useCallback(
                (e) => {
                    let { value: t, uploads: r, stickers: i } = e;
                    return n(t, i, r);
                },
                [n]
            );
        ((0, D.yp)({
            event: ee.CkL.TEXTAREA_FOCUS,
            handler: _
        }),
            (0, D.yp)({
                event: ee.CkL.TEXTAREA_BLUR,
                handler: C
            }));
        let w = (0, H.Op)(m, { content: x.textValue });
        return (0, r.jsx)('div', {
            className: er.bodyContainer,
            children: (0, r.jsxs)('div', {
                className: er.contentContainer,
                children: [
                    g
                        ? (0, r.jsx)(eu, {
                              parentChannel: t,
                              textValue: x.textValue
                          })
                        : (0, r.jsx)('div', {
                              onClick: _,
                              children: (0, r.jsx)(v.Z, {
                                  type: el,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: en.intl.string(en.t['8IPnv7']),
                                  textValue: x.textValue,
                                  richValue: x.richValue,
                                  focused: p,
                                  className: er.channelTextArea,
                                  innerClassName: l()(er.channelTextAreaInner, { [er.channelTextAreaInnerError]: null != w }),
                                  onChange: y,
                                  onSubmit: O,
                                  promptToUpload: B.d,
                                  disabled: a,
                                  onKeyDown: (e) => {
                                      (('ArrowUp' === e.key || 'ArrowDown' === e.key) && e.stopPropagation(), b && 'Escape' === e.key && !j.getState().submitting && (null == s || s.blur(), j.getState().setFormOpen(!1), j.getState().setTitleFocused(!1), j.getState().setBodyFocused(!1), j.getState().setPreviewing(!1)));
                                  },
                                  autoCompletePosition: 'bottom'
                              })
                          }),
                    (0, r.jsx)(f.pdY, { error: w })
                ]
            })
        });
    });
function eh() {
    return (0, r.jsx)('div', {
        className: er.previewModeIndicator,
        children: (0, r.jsx)(f.Text, {
            variant: 'text-sm/normal',
            color: 'interactive-normal',
            children: en.intl.string(en.t['WE/cYm'])
        })
    });
}
function eg(e) {
    let { textAreaState: t } = (0, K.xH)((e) => {
            let { textAreaState: t } = e;
            return { textAreaState: t };
        }, c.X),
        n = (0, h.Wu)([L.Z], () => L.Z.getUploads(e.id, Z.d.FirstThreadMessage));
    return i.useMemo(() => t.textValue.trim().length > 0 || n.length > 0, [t.textValue, n]);
}
function ef(e) {
    let t = eg(e),
        { appliedTags: n, name: r } = (0, K.xH)((e) => {
            let { appliedTags: t, name: n } = e;
            return {
                appliedTags: t,
                name: n
            };
        }, c.X);
    return i.useMemo(() => e.hasFlag(et.zZ.REQUIRE_TAG) && 0 === n.size && r.length > 0 && t, [n, r, e, t]);
}
function ex() {
    let { previewing: e } = (0, K.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.X),
        t = (0, K.AF)(),
        n = i.useCallback(() => {
            (t.getState().setPreviewing(!e), (0, q.nE)());
        }, [e, t]);
    return (0, r.jsx)(f.ua7, {
        text: e ? en.intl.string(en.t.ojM1xM) : en.intl.string(en.t.SKNnqq),
        children: (t) =>
            (0, r.jsx)(
                f.P3F,
                ea(ei({}, t), {
                    onClick: n,
                    className: l()(er.forumPostFormButton, { [er.forumPostFormButtonActive]: e }),
                    children: e
                        ? (0, r.jsx)(
                              f.kZF,
                              ei(
                                  {
                                      size: 'md',
                                      color: 'currentColor'
                                  },
                                  t
                              )
                          )
                        : (0, r.jsx)(
                              f.tEF,
                              ei(
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
let ep = i.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: a } = e,
        { textAreaState: l, name: s } = (0, K.xH)((e) => {
            let { textAreaState: t, name: n } = e;
            return {
                textAreaState: t,
                name: n
            };
        }, c.X),
        { rateLimitPerUser: o } = t,
        d = o > 0,
        u = (0, h.e7)([A.Z], () => A.Z.getSlowmodeCooldownGuess(t.id, A.S.CreateThread)),
        m = (0, h.e7)([k.Z], () => k.Z.can(ee.Plq.MANAGE_THREADS, t) || k.Z.can(ee.Plq.MANAGE_CHANNELS, t)),
        g = ef(t),
        x = (0, K.AF)(),
        p = i.useCallback(() => {
            x.getState().setBodyFocused(!1);
        }, [x]),
        b = i.useMemo(() => '' !== s.trim() && '' !== l.textValue.trim(), [s, l.textValue]);
    return (
        i.useEffect(() => {
            b || x.getState().setPreviewing(!1);
        }, [b, x]),
        (0, r.jsxs)('div', {
            className: a,
            children: [
                (0, r.jsx)(ev, { parentChannel: t }),
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
                                        (0, r.jsx)(_.Z, {
                                            type: el,
                                            textValue: l.textValue,
                                            className: er.characterCount
                                        }),
                                        d &&
                                            (0, r.jsx)(Y.Z, {
                                                rateLimitPerUser: o,
                                                slowmodeCooldownGuess: u,
                                                isBypassSlowmode: m,
                                                leadingIcon: !0
                                            })
                                    ]
                                }),
                                (0, r.jsx)(ed, { parentChannel: t }),
                                b && (0, r.jsx)(ex, {}),
                                (0, r.jsx)(eb, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: d && !m && u > 0
                                })
                            ]
                        }),
                        (0, r.jsx)(
                            j.Z,
                            {
                                type: el,
                                className: er.expressionPicker,
                                onClick: p
                            },
                            'expression'
                        )
                    ]
                }),
                g &&
                    (0, r.jsx)(f.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-danger',
                        className: er.requiredError,
                        children: en.intl.string(en.t.xPfNQk)
                    })
            ]
        })
    );
});
function eb(e) {
    let { parentChannel: t, canCreatePost: n, disabled: i, disableIfInvalid: a = !1 } = e,
        l = (0, T.HL)(t),
        {
            submitting: s,
            name: o,
            formOpen: d
        } = (0, K.xH)((e) => {
            let { submitting: t, name: n, formOpen: r } = e;
            return {
                submitting: t,
                name: n,
                formOpen: r
            };
        }, c.X),
        u = eg(t),
        m = !ef(t) && u && o.trim().length > 0;
    if (__OVERLAY__ || l) return null;
    let h = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.jsxs)(
            g.zx,
            ea(ei({}, e), {
                size: g.zx.Sizes.SMALL,
                className: er.submitButton,
                innerClassName: er.submitButtonInner,
                type: 'submit',
                submitting: s,
                disabled: (a && !m) || i || !n,
                children: [
                    (0, r.jsx)(f.kBi, {
                        size: 'xs',
                        color: 'currentColor',
                        className: er.submitIcon
                    }),
                    (0, r.jsx)(f.Text, {
                        variant: 'text-md/semibold',
                        color: 'none',
                        children: d ? en.intl.string(en.t.pIuQIy) : en.intl.string(en.t.TyAuoa)
                    })
                ]
            })
        );
    };
    return n
        ? h()
        : (0, r.jsx)(f.ua7, {
              text: en.intl.string(en.t.iyzwnJ),
              children: (e) => h(e)
          });
}
function ej() {
    return Promise.resolve();
}
function ev(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: a,
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
            scrollToStart: ej,
            scrollToEnd: ej,
            orientation: m.hy.HORIZONTAL
        }),
        { containerRef: x, containerWidth: p } = (0, Q.Z)(),
        b = i.useRef(null),
        j = i.useRef(null),
        [v, _] = i.useState(!0),
        C = (0, V.Vm)(t),
        [y, O] = i.useState(0);
    return (i.useLayoutEffect(() => {
        var e;
        let t = b.current,
            n = null == t || null == (e = t.children) ? void 0 : e[0],
            r = null == t || null == n || n.clientHeight > t.clientHeight;
        if ((r !== v && _(r), r && null != x.current && null != n && null != n.children)) {
            let { left: e, top: t } = x.current.getBoundingClientRect(),
                r = 0;
            for (let i of n.children) {
                let { right: n, top: a, height: l } = i.getBoundingClientRect();
                if (a - t > l) break;
                n - e > r && (r = n - e);
            }
            O(r);
        }
    }, [C, v, x, p]),
    0 === C.length)
        ? null
        : (0, r.jsxs)('div', {
              className: er.tagsContainer,
              ref: x,
              children: [
                  (0, r.jsx)(f.lO_, {
                      size: 'xs',
                      color: 'currentColor',
                      className: er.tagsIcon
                  }),
                  (0, r.jsx)('div', {
                      className: er.tagList,
                      ref: b,
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
                                      ea(
                                          ei(
                                              {
                                                  className: er.tagListInner,
                                                  ref: t
                                              },
                                              i
                                          ),
                                          {
                                              children: C.map((e) =>
                                                  (0, r.jsx)(
                                                      J.Z,
                                                      {
                                                          ariaLabel: en.intl.formatToPlainString(en.t.FSZVIS, { tagName: e.name }),
                                                          tag: e,
                                                          onClick: o && !n.has(e.id) ? void 0 : () => a(e.id),
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
                  v &&
                      (0, r.jsx)(f.yRy, {
                          targetElementRef: j,
                          onRequestOpen: () => s(!0),
                          onRequestClose: () => s(!1),
                          renderPopout: (e) => {
                              let { closePopout: i } = e;
                              return (0, r.jsx)(W.Z, {
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
                                  g.zx,
                                  ea(ei({}, e), {
                                      buttonRef: j,
                                      size: g.zx.Sizes.TINY,
                                      className: er.tagsButton,
                                      innerClassName: er.tagsButtonInner,
                                      style: { left: y },
                                      look: g.zx.Looks.LINK,
                                      'aria-label': en.intl.string(en.t.N5vP9P),
                                      children: [
                                          en.intl.string(en.t.IkpM1d),
                                          (0, r.jsx)(f.CJ0, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 16
                                          })
                                      ]
                                  })
                              )
                      }),
                  (0, r.jsxs)(g.zx, {
                      size: g.zx.Sizes.TINY,
                      className: l()(er.tagsButton, er.tagsButtonPlaceholder),
                      innerClassName: er.tagsButtonInner,
                      look: g.zx.Looks.LINK,
                      'aria-label': en.intl.string(en.t.N5vP9P),
                      children: [
                          en.intl.string(en.t.IkpM1d),
                          (0, r.jsx)(f.CJ0, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 16
                          })
                      ]
                  })
              ]
          });
}
function e_(e) {
    let { style: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: n,
        style: t,
        children: (0, r.jsx)('div', { className: er.loader })
    });
}

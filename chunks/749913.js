n.d(t, { Z: () => es }), n(388685), n(781311), n(290780);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(760907),
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
    P = n(216572),
    N = n(913663),
    T = n(268350),
    I = n(456077),
    E = n(488131),
    k = n(602034),
    R = n(23750),
    Z = n(703558),
    M = n(496675),
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
    X = n(259637),
    W = n(76451),
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
let ea = x.Ie.CREATE_FORUM_POST;
function es(e) {
    let { parentChannel: t, isSearchLoading: n, onChange: l, canCreatePost: s, inputRef: o } = e,
        d = !(0, P.wL)(t) && s,
        {
            textAreaState: u,
            formOpen: m,
            previewing: f
        } = (0, K.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: r } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: r
            };
        }, c.X),
        [p, x] = i.useState(null),
        b = i.useContext(D.oo),
        j = i.useCallback(() => {
            b.bumpDispatchPriority();
        }, [b]),
        v = (0, h.e7)([M.Z], () => M.Z.can(ee.Plq.ATTACH_FILES, t)),
        C = (0, h.Wu)([L.Z], () => L.Z.getUploads(t.id, Z.d.FirstThreadMessage)),
        w = m && v && d,
        S = (null == t ? void 0 : t.isMediaChannel()) === !0,
        I = (function (e, t) {
            let n = (0, K.AF)(),
                r = (0, G.ql)(e);
            return i.useCallback(() => {
                let { formOpen: i, setFormOpenFromUserAction: l, name: a, textAreaState: s, hasClickedForm: o } = n.getState();
                !i &&
                    (setTimeout(() => {
                        if (t.current instanceof g.lcI) {
                            var e, n, r, i;
                            null == (n = t.current) || null == (e = n._textArea) || e.setSelectionRange(a.length, a.length), null == (i = t.current) || null == (r = i._textArea) || r.focus();
                        }
                    }, 0),
                    ((o && a.length > 0) || (s.textValue.trim().length > 0 && s.textValue.trim() !== r) || L.Z.getUploads(e.id, Z.d.FirstThreadMessage).length > 0) && l());
            }, [n, e.id, r, t]);
        })(t, o),
        R = (function (e) {
            let { formOpen: t } = (0, K.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.X),
                n = (0, K.AF)(),
                r = (0, k.r)({ parentChannel: e });
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
                        r = null == (o = N.Z.getStickerPreview(e.id, ea.drafts.type)) ? void 0 : o.map((e) => e.id);
                    }
                    if (((null == i || 0 === i.length) && (i = L.Z.getUploads(e.id, Z.d.FirstThreadMessage)), null != i && i.length > 0 && e.isMediaChannel())) {
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
                        p = V.Z.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, q.P_)({
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
                    if ((s(v ? (0, H.V_)() : null), o(C ? (0, H.T4)() : null), v || C))
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                    try {
                        c(!0);
                        let { valid: t } = await (0, z.v)({
                            content: x,
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
                        let n = await r(x, b, j);
                        return (
                            (0, E.ok)(n),
                            U.Z.resort(e.id),
                            (0, T.qB)(e.id, ea.drafts.type),
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
        i.useLayoutEffect(l, [m, u, C, l]),
        (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)('div', {
                'aria-label': d ? en.intl.string(en.t.dq7mAQ) : en.intl.string(en.t['5h0QOD']),
                className: a()(er.container, { [er.collapsed]: !m }),
                onClick: !m && d ? I : void 0,
                children: (0, r.jsxs)('form', {
                    onMouseDown: j,
                    onFocus: j,
                    onSubmit: (e) => {
                        e.preventDefault(), d && R();
                    },
                    children: [
                        (0, r.jsxs)('div', {
                            className: er.formContainer,
                            children: [
                                (0, r.jsx)(eo, {
                                    parentChannel: t,
                                    isSearchLoading: n,
                                    inputRef: o
                                }),
                                (0, r.jsxs)('div', {
                                    className: f ? er.previewForm : er.form,
                                    children: [
                                        (0, r.jsx)(ec, {
                                            editorRef: p,
                                            parentChannel: t,
                                            isSearchLoading: n,
                                            inputRef: o,
                                            canCreatePost: d
                                        }),
                                        m &&
                                            (0, r.jsx)(em, {
                                                editorRef: p,
                                                setEditorRef: x,
                                                parentChannel: t,
                                                submit: R,
                                                disabled: !d
                                            }),
                                        f && (0, r.jsx)(eh, {})
                                    ]
                                }),
                                w && (S ? (0, r.jsx)(y._, { parentChannel: t }) : (0, r.jsx)(W.Z, { channelId: t.id }))
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: er.form,
                            children: [
                                w && S && (0, r.jsx)(_.Z, { parentChannel: t }),
                                m &&
                                    (0, r.jsx)(ef, {
                                        className: er.horizontalPadding,
                                        parentChannel: t,
                                        canCreatePost: d
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
        let { parentChannel: t, isSearchLoading: n, inputRef: l } = e,
            {
                formOpen: a,
                name: s,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u
            } = (0, K.xH)((e) => {
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
            m = (0, K.AF)(),
            h = (0, G.ql)(t),
            x = i.useCallback(() => {
                var e;
                m.getState().resetFormState(),
                    f.Z.clearDraft(t.id, Z.d.ThreadSettings),
                    f.Z.clearDraft(t.id, Z.d.FirstThreadMessage),
                    p.Z.clearAll(t.id, Z.d.FirstThreadMessage),
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
            b = i.useMemo(
                () =>
                    n && !a
                        ? (0, r.jsx)(ej, {})
                        : n || a || (0 !== o.textValue.trim().length && o.textValue.trim() !== h)
                          ? !a && (s.trim().length > 0 || (o.textValue.trim().length > 0 && o.textValue.trim() !== h) || L.Z.getUploads(t.id, Z.d.FirstThreadMessage).length > 0) && d
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
                                              el(ei({}, e), {
                                                  onClick: x,
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
                [n, a, d, s, o.textValue, x, t.id, h, u]
            );
        return (0, r.jsx)('div', {
            className: er.prefixElement,
            children: b
        });
    }),
    ec = i.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: a } = e,
            {
                formOpen: s,
                nameError: d,
                name: u,
                textAreaState: m,
                previewing: f
            } = (0, K.xH)((e) => {
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
            p = (0, K.AF)(),
            x = null != t.topic && 0 !== t.topic.length,
            b = V.Z.hasSeen(t.id),
            j = (0, G.ql)(t),
            v = (0, h.e7)([F.default], () => F.default.getCurrentUser());
        o()(null != v, 'current user cannot be null'),
            (0, D.yp)({
                event: ee.CkL.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    var e;
                    let t = n.current instanceof g.lcI ? (null == (e = n.current) ? void 0 : e._textArea) : n.current;
                    null == t || t.focus(), p.getState().setTitleFocused(!0), p.getState().setFormOpen(!0), p.getState().setHasClickedForm(!0);
                }
            });
        let C = i.useCallback(
                (e) => {
                    let n = e.clipboardData.files[0];
                    null != n && n.type.startsWith('image/') && (e.preventDefault(), (0, B.d)([n], t, Z.d.FirstThreadMessage), p.getState().setFormOpenFromUserAction());
                },
                [t, p]
            ),
            _ = (0, H.Op)(d, { content: u });
        return (0, r.jsxs)('div', {
            className: er.titleContainer,
            onPaste: C,
            children: [
                s && f
                    ? (0, r.jsx)(g.X6q, {
                          variant: 'heading-md/semibold',
                          className: er.title,
                          children: u
                      })
                    : (0, r.jsx)(g.Kx8, {
                          value: u,
                          placeholder: l ? (s || (m.textValue.length > 0 && m.textValue.trim() !== j) ? en.intl.string(en.t.lU4dDQ) : en.intl.string(en.t.CjmivL)) : en.intl.string(en.t['5h0QOD']),
                          flex: !0,
                          autosize: s,
                          rows: 1,
                          showCharacterCount: !1,
                          showRemainingCharacterCount: !1,
                          maxLength: ee.HN8,
                          onChange: (e) => {
                              let n = (0, I.Z)(e, !1);
                              p.getState().setName(n);
                              let r = 0 === n.trim().length,
                                  i = 0 === m.textValue.trim().length,
                                  l = m.textValue.trim() === j;
                              r && (i || l) && p.getState().setHasClickedForm(!1), s || U.Z.updateForumSearchQuery(t.id, n);
                          },
                          onFocus: () => {
                              p.getState().setTitleFocused(!0), p.getState().setBodyFocused(!1);
                          },
                          onBlur: () => {
                              p.getState().setTitleFocused(!1);
                              let e = (0, I.Z)(u, !0);
                              e !== u && (p.getState().setName(e), s || U.Z.updateForumSearchQuery(t.id, e));
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
                                        ((0, q.nH)({
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
                          className: er.title,
                          inputRef: n
                      }),
                s
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(ed, { parentChannel: t }),
                              (0, r.jsx)(ep, {
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
        i = (0, K.AF)(),
        l = null != t.topic && 0 !== t.topic.length,
        s = () => {
            i.getState().setGuidelinesOpen(!n);
        };
    return l
        ? (0, r.jsx)(g.ua7, {
              text: en.intl.string(en.t['4d4T4u']),
              children: (e) =>
                  (0, r.jsx)(
                      g.P3F,
                      el(ei({}, e), {
                          onClick: s,
                          className: a()(er.forumPostFormButton, { [er.forumPostFormButtonActive]: n }),
                          children: (0, r.jsx)(
                              g.snC,
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
            i = new R.ZP({
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
            className: a()(er.channelTextAreaInner, er.previewTextArea),
            children: s
        });
    }),
    em = i.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: s, setEditorRef: d } = e,
            u = (0, h.e7)([F.default], () => F.default.getCurrentUser());
        o()(null != u, 'current user cannot be null');
        let {
                messageError: m,
                previewing: f,
                textAreaState: p,
                bodyFocused: x,
                formOpen: b
            } = (0, K.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: r, bodyFocused: i, formOpen: l } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: r,
                    bodyFocused: i,
                    formOpen: l
                };
            }, c.X),
            v = (0, K.AF)();
        i.useEffect(
            () => () =>
                (0, q.Vn)({
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
        (0, D.yp)({
            event: ee.CkL.TEXTAREA_FOCUS,
            handler: _
        }),
            (0, D.yp)({
                event: ee.CkL.TEXTAREA_BLUR,
                handler: y
            });
        let S = (0, H.Op)(m, { content: p.textValue });
        return (0, r.jsx)('div', {
            className: er.bodyContainer,
            children: (0, r.jsxs)('div', {
                className: er.contentContainer,
                children: [
                    f
                        ? (0, r.jsx)(eu, {
                              parentChannel: t,
                              textValue: p.textValue
                          })
                        : (0, r.jsx)('div', {
                              onClick: _,
                              children: (0, r.jsx)(j.Z, {
                                  type: ea,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: en.intl.string(en.t['8IPnv7']),
                                  textValue: p.textValue,
                                  richValue: p.richValue,
                                  focused: x,
                                  className: er.channelTextArea,
                                  innerClassName: a()(er.channelTextAreaInner, { [er.channelTextAreaInnerError]: null != S }),
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
        n = i.useCallback(() => {
            t.getState().setPreviewing(!e), (0, q.nE)();
        }, [e, t]);
    return (0, r.jsx)(g.ua7, {
        text: e ? en.intl.string(en.t.ojM1xM) : en.intl.string(en.t.SKNnqq),
        children: (t) =>
            (0, r.jsx)(
                g.P3F,
                el(ei({}, t), {
                    onClick: n,
                    className: a()(er.forumPostFormButton, { [er.forumPostFormButtonActive]: e }),
                    children: e
                        ? (0, r.jsx)(
                              g.kZF,
                              ei(
                                  {
                                      size: 'md',
                                      color: 'currentColor'
                                  },
                                  t
                              )
                          )
                        : (0, r.jsx)(
                              g.tEF,
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
let ef = i.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        {
            textAreaState: a,
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
        f = (0, h.e7)([M.Z], () => M.Z.can(ee.Plq.MANAGE_THREADS, t) || M.Z.can(ee.Plq.MANAGE_CHANNELS, t)),
        p = t.hasFlag(et.zZ.REQUIRE_TAG) && 0 === s.size && o.length > 0 && a.textValue.length > 0,
        x = (0, K.AF)(),
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
                                            type: ea,
                                            textValue: a.textValue,
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
                                (0, r.jsx)(ep, {
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
                                type: ea,
                                className: er.expressionPicker,
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
                        className: er.requiredError,
                        children: en.intl.string(en.t.xPfNQk)
                    })
            ]
        })
    );
});
function ep(e) {
    let { parentChannel: t, canCreatePost: n, disabled: i, disableIfInvalid: l = !1 } = e,
        a = (0, P.wL)(t),
        {
            submitting: s,
            textAreaState: o,
            name: d,
            appliedTags: u,
            formOpen: m
        } = (0, K.xH)((e) => {
            let { submitting: t, textAreaState: n, name: r, appliedTags: i, formOpen: l } = e;
            return {
                submitting: t,
                textAreaState: n,
                name: r,
                appliedTags: i,
                formOpen: l
            };
        }, c.X),
        f = t.hasFlag(et.zZ.REQUIRE_TAG) && 0 === u.size && d.length > 0 && o.textValue.length > 0,
        p = (0, h.Wu)([L.Z], () => L.Z.getUploads(t.id, Z.d.FirstThreadMessage)),
        x = o.textValue.trim().length > 0 || p.length > 0,
        b = !f && x && d.trim().length > 0;
    if (__OVERLAY__ || a) return null;
    let j = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.jsxs)(
            g.zxk,
            el(ei({}, e), {
                size: g.zxk.Sizes.SMALL,
                className: er.submitButton,
                innerClassName: er.submitButtonInner,
                type: 'submit',
                submitting: s,
                disabled: (l && !b) || i || !n,
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
function ex() {
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
            scrollToStart: ex,
            scrollToEnd: ex,
            orientation: m.hy.HORIZONTAL
        }),
        { containerRef: f, containerWidth: p } = (0, Q.Z)(),
        x = i.useRef(null),
        [b, j] = i.useState(!0),
        v = (0, G.Vm)(t),
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
                                      el(
                                          ei(
                                              {
                                                  className: er.tagListInner,
                                                  ref: t
                                              },
                                              i
                                          ),
                                          {
                                              children: v.map((e) =>
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
                  b &&
                      (0, r.jsx)(g.yRy, {
                          onRequestOpen: () => s(!0),
                          onRequestClose: () => s(!1),
                          renderPopout: (e) => {
                              let { closePopout: i } = e;
                              return (0, r.jsx)(X.Z, {
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
                                  el(ei({}, e), {
                                      size: g.zxk.Sizes.TINY,
                                      className: er.tagsButton,
                                      innerClassName: er.tagsButtonInner,
                                      style: { left: C },
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
                      className: a()(er.tagsButton, er.tagsButtonPlaceholder),
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

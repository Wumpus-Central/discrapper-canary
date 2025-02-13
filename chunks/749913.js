n.d(t, { Z: () => er }), n(47120), n(733860);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(232713),
    d = n(924826),
    u = n(91192),
    m = n(536895),
    h = n(442837),
    g = n(481060),
    x = n(430742),
    f = n(166459),
    p = n(541716),
    v = n(67158),
    C = n(893718),
    _ = n(472243),
    b = n(436660),
    j = n(284182),
    N = n(795639),
    T = n(957730),
    I = n(25015),
    S = n(252032),
    w = n(913663),
    y = n(268350),
    E = n(456077),
    R = n(488131),
    P = n(602034),
    k = n(23750),
    Z = n(703558),
    M = n(496675),
    A = n(300429),
    L = n(117530),
    F = n(594174),
    O = n(459273),
    z = n(838440),
    D = n(127654),
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
    en = n(523247);
let ei = p.Ie.CREATE_FORUM_POST;
function er(e) {
    let { parentChannel: t, isSearchLoading: n, onChange: l, canCreatePost: s, inputRef: o } = e,
        {
            textAreaState: d,
            formOpen: u,
            previewing: m
        } = (0, W.xH)((e) => {
            let { textAreaState: t, formOpen: n, previewing: i } = e;
            return {
                textAreaState: t,
                formOpen: n,
                previewing: i
            };
        }, c.X),
        [x, f] = r.useState(null),
        p = r.useContext(O.oo),
        v = r.useCallback(() => {
            p.bumpDispatchPriority();
        }, [p]),
        C = (0, h.e7)([M.Z], () => M.Z.can($.Plq.ATTACH_FILES, t)),
        _ = (0, h.Wu)([L.Z], () => L.Z.getUploads(t.id, Z.d.FirstThreadMessage)),
        b = u && C && s,
        I = (null == t ? void 0 : t.isMediaChannel()) === !0,
        S = (function (e, t) {
            let n = (0, W.AF)(),
                i = (0, V.ql)(e);
            return r.useCallback(() => {
                let { formOpen: r, setFormOpenFromUserAction: l, name: a, textAreaState: s, hasClickedForm: o } = n.getState();
                !r &&
                    (setTimeout(() => {
                        if (t.current instanceof g.lcI) {
                            var e, n, i, r;
                            null === (n = t.current) || void 0 === n || null === (e = n._textArea) || void 0 === e || e.setSelectionRange(a.length, a.length), null === (r = t.current) || void 0 === r || null === (i = r._textArea) || void 0 === i || i.focus();
                        }
                    }, 0),
                    ((o && a.length > 0) || (s.textValue.trim().length > 0 && s.textValue.trim() !== i) || L.Z.getUploads(e.id, Z.d.FirstThreadMessage).length > 0) && l());
            }, [n, e.id, i, t]);
        })(t, o),
        E = (function (e) {
            let { formOpen: t } = (0, W.xH)((e) => {
                    let { formOpen: t } = e;
                    return { formOpen: t };
                }, c.X),
                n = (0, W.AF)(),
                i = (0, P.r)({ parentChannel: e });
            r.useEffect(() => {
                let { setNameError: e, setMessageError: t } = n.getState();
                e(null), t(null);
            }, [t, n]);
            let l = r.useCallback(
                (t, i, r) => {
                    let { name: l, textAreaState: a } = n.getState();
                    null == t && (t = a.textValue), (t = t.trim());
                    let { content: s } = T.ZP.parse(e, t);
                    if (((t = s), null == i || 0 === i.length)) {
                        var o;
                        i = null === (o = w.Z.getStickerPreview(e.id, ei.drafts.type)) || void 0 === o ? void 0 : o.map((e) => e.id);
                    }
                    if (((null == r || 0 === r.length) && (r = L.Z.getUploads(e.id, Z.d.FirstThreadMessage)), null != r && r.length > 0 && e.isMediaChannel())) {
                        let e = r.findIndex((e) => !0 === e.isThumbnail);
                        if (e > -1) {
                            let t = r[e];
                            r.splice(e, 1), r.unshift(t);
                        }
                    }
                    let c = 0 === l.length,
                        d = (null == t || 0 === t.length) && (null == i || 0 === i.length) && 0 === r.length;
                    return {
                        content: t,
                        stickers: i,
                        uploads: r,
                        hasNameError: c,
                        hasMessageError: d
                    };
                },
                [e, n]
            );
            return r.useCallback(
                async (t, r, a) => {
                    let { setNameError: s, setMessageError: o, setSubmitting: c, resetFormState: d, formOpen: u, setFormOpen: m, setPreviewing: h, setFormOpenFromUserAction: g, setGuidelinesOpen: x } = n.getState(),
                        f = U.Z.hasSeen(e.id);
                    if (!u)
                        return (
                            (0, G.P_)({
                                guildId: e.guild_id,
                                channelId: e.id
                            }),
                            f || n.getState().setGuidelinesOpen(!0),
                            g(),
                            {
                                shouldClear: !1,
                                shouldRefocus: !1
                            }
                        );
                    let { content: p, stickers: v, uploads: C, hasNameError: _, hasMessageError: b } = l(t, r, a);
                    if ((s(_ ? (0, B.V_)() : null), o(b ? (0, B.T4)() : null), _ || b))
                        return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                    try {
                        c(!0);
                        let { valid: t } = await (0, z.v)({
                            content: p,
                            stickers: v,
                            uploads: C,
                            type: ei,
                            channel: e
                        });
                        if (!t)
                            return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                        let n = await i(p, v, C);
                        return (
                            (0, R.ok)(n),
                            H.Z.resort(e.id),
                            (0, y.qB)(e.id, ei.drafts.type),
                            d(),
                            m(!1),
                            h(!1),
                            U.Z.markAsSeen(e.id),
                            x(!1),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch (t) {
                        var j, N;
                        return (
                            (null === (j = t.body) || void 0 === j ? void 0 : j.code) === $.evJ.AUTOMOD_TITLE_BLOCKED ? s((0, B.Gx)(t.body, e)) : (null === (N = t.body) || void 0 === N ? void 0 : N.code) === $.evJ.AUTOMOD_MESSAGE_BLOCKED && o((0, B.Gx)(t.body, e)),
                            {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        );
                    } finally {
                        c(!1);
                    }
                },
                [i, l, e, n]
            );
        })(t);
    return (
        r.useLayoutEffect(l, [u, d, _, l]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)('div', {
                'aria-label': s ? et.intl.string(et.t.dq7mAQ) : et.intl.string(et.t['5h0QOD']),
                className: a()(en.container, { [en.collapsed]: !u }),
                onClick: !u && s ? S : void 0,
                children: (0, i.jsxs)('form', {
                    onMouseDown: v,
                    onFocus: v,
                    onSubmit: (e) => {
                        e.preventDefault(), s && E();
                    },
                    children: [
                        (0, i.jsxs)('div', {
                            className: en.formContainer,
                            children: [
                                (0, i.jsx)(el, {
                                    parentChannel: t,
                                    isSearchLoading: n,
                                    inputRef: o
                                }),
                                (0, i.jsxs)('div', {
                                    className: m ? en.previewForm : en.form,
                                    children: [
                                        (0, i.jsx)(ea, {
                                            editorRef: x,
                                            parentChannel: t,
                                            isSearchLoading: n,
                                            inputRef: o,
                                            canCreatePost: s
                                        }),
                                        u &&
                                            (0, i.jsx)(ec, {
                                                editorRef: x,
                                                setEditorRef: f,
                                                parentChannel: t,
                                                submit: E,
                                                disabled: !s
                                            }),
                                        m && (0, i.jsx)(ed, {})
                                    ]
                                }),
                                b && (I ? (0, i.jsx)(N._, { parentChannel: t }) : (0, i.jsx)(X.Z, { channelId: t.id }))
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: en.form,
                            children: [
                                b && I && (0, i.jsx)(j.Z, { parentChannel: t }),
                                u &&
                                    (0, i.jsx)(em, {
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
let el = r.memo(function (e) {
        let { parentChannel: t, isSearchLoading: n, inputRef: l } = e,
            {
                formOpen: a,
                name: s,
                textAreaState: o,
                hasClickedForm: d,
                submitting: u
            } = (0, W.xH)((e) => {
                let { formOpen: t, nameError: n, name: i, previewing: r, textAreaState: l, hasClickedForm: a, submitting: s } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: i,
                    textAreaState: l,
                    previewing: r,
                    hasClickedForm: a,
                    submitting: s
                };
            }, c.X),
            m = (0, W.AF)(),
            h = (0, V.ql)(t),
            p = r.useCallback(() => {
                var e;
                m.getState().resetFormState(),
                    x.Z.clearDraft(t.id, Z.d.ThreadSettings),
                    x.Z.clearDraft(t.id, Z.d.FirstThreadMessage),
                    f.Z.clearAll(t.id, Z.d.FirstThreadMessage),
                    m.getState().setFormOpen(!1),
                    m.getState().setBodyFocused(!1),
                    m.getState().setTitleFocused(!1),
                    m.getState().setHasClickedForm(!1),
                    m.getState().setPreviewing(!1),
                    null === (e = l.current) || void 0 === e || e.blur(),
                    (0, G.Oq)({
                        guildId: t.guild_id,
                        channelId: t.id
                    });
            }, [m, t.id, t.guild_id, l]),
            v = r.useMemo(
                () =>
                    n && !a
                        ? (0, i.jsx)(ef, {})
                        : n || a || (0 !== o.textValue.trim().length && o.textValue.trim() !== h)
                          ? !a && (s.trim().length > 0 || (o.textValue.trim().length > 0 && o.textValue.trim() !== h) || L.Z.getUploads(t.id, Z.d.FirstThreadMessage).length > 0) && d
                              ? (0, i.jsx)(g.vdY, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: en.pencilIcon
                                })
                              : u
                                ? (0, i.jsx)(g.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: en.closeIconDisabled
                                  })
                                : (0, i.jsx)(g.ua7, {
                                      text: et.intl.string(et.t['98EPQE']),
                                      children: (e) =>
                                          (0, i.jsx)(g.P3F, {
                                              ...e,
                                              onClick: p,
                                              children: (0, i.jsx)(g.k$p, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: en.closeIcon
                                              })
                                          })
                                  })
                          : (0, i.jsx)(g._Ve, {
                                size: 'md',
                                color: 'currentColor',
                                className: en.searchIcon
                            }),
                [n, a, d, s, o.textValue, p, t.id, h, u]
            );
        return (0, i.jsx)('div', {
            className: en.prefixElement,
            children: v
        });
    }),
    ea = r.memo(function (e) {
        let { parentChannel: t, inputRef: n, canCreatePost: l, editorRef: a } = e,
            {
                formOpen: s,
                nameError: d,
                name: u,
                textAreaState: m,
                previewing: x
            } = (0, W.xH)((e) => {
                let { formOpen: t, nameError: n, name: i, previewing: r, textAreaState: l, hasClickedForm: a, submitting: s } = e;
                return {
                    formOpen: t,
                    nameError: n,
                    name: i,
                    textAreaState: l,
                    previewing: r,
                    hasClickedForm: a,
                    submitting: s
                };
            }, c.X),
            f = (0, W.AF)(),
            p = null != t.topic && 0 !== t.topic.length,
            v = U.Z.hasSeen(t.id),
            C = (0, V.ql)(t),
            _ = (0, h.e7)([F.default], () => F.default.getCurrentUser());
        o()(null != _, 'current user cannot be null'),
            (0, O.yp)({
                event: $.CkL.FOCUS_COMPOSER_TITLE,
                handler: () => {
                    var e;
                    let t = n.current instanceof g.lcI ? (null === (e = n.current) || void 0 === e ? void 0 : e._textArea) : n.current;
                    null == t || t.focus(), f.getState().setTitleFocused(!0), f.getState().setFormOpen(!0), f.getState().setHasClickedForm(!0);
                }
            });
        let b = r.useCallback(
                (e) => {
                    let n = e.clipboardData.files[0];
                    null != n && n.type.startsWith('image/') && (e.preventDefault(), (0, D.d)([n], t, Z.d.FirstThreadMessage), f.getState().setFormOpenFromUserAction());
                },
                [t, f]
            ),
            j = (0, B.Op)(d, { content: u });
        return (0, i.jsxs)('div', {
            className: en.titleContainer,
            onPaste: b,
            children: [
                s && x
                    ? (0, i.jsx)(g.X6q, {
                          variant: 'heading-md/semibold',
                          className: en.title,
                          children: u
                      })
                    : (0, i.jsx)(g.Kx8, {
                          value: u,
                          placeholder: l ? (s || (m.textValue.length > 0 && m.textValue.trim() !== C) ? et.intl.string(et.t.lU4dDQ) : et.intl.string(et.t.CjmivL)) : et.intl.string(et.t['5h0QOD']),
                          flex: !0,
                          autosize: s,
                          rows: 1,
                          showCharacterCount: !1,
                          showRemainingCharacterCount: !1,
                          maxLength: $.HN8,
                          onChange: (e) => {
                              let n = (0, E.Z)(e, !1);
                              f.getState().setName(n);
                              let i = 0 === n.trim().length,
                                  r = 0 === m.textValue.trim().length,
                                  l = m.textValue.trim() === C;
                              i && (r || l) && f.getState().setHasClickedForm(!1), s || H.Z.updateForumSearchQuery(t.id, n);
                          },
                          onFocus: () => {
                              f.getState().setTitleFocused(!0), f.getState().setBodyFocused(!1);
                          },
                          onBlur: () => {
                              f.getState().setTitleFocused(!1);
                              let e = (0, E.Z)(u, !0);
                              e === u || (f.getState().setName(e), s || H.Z.updateForumSearchQuery(t.id, e));
                          },
                          onKeyDown: (e) => {
                              var i, r;
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
                                        p && !v && f.getState().setGuidelinesOpen(!0),
                                        f.getState().setFormOpenFromUserAction(),
                                        u.trim().length > 0 && (f.getState().setBodyFocused(!0), null == a || a.focus())));
                              let o = n.current instanceof g.lcI ? (null === (i = n.current) || void 0 === i ? void 0 : i._textArea) : n.current;
                              if ('Home' === e.key || 'End' === e.key) {
                                  if (null == o) return;
                                  if ((e.preventDefault(), e.stopPropagation(), 'Home' === e.key)) o.setSelectionRange(0, 0);
                                  else {
                                      let e = u.length;
                                      o.setSelectionRange(e, e);
                                  }
                              }
                              'Escape' !== e.key || f.getState().submitting || (null === (r = n.current) || void 0 === r || r.blur(), f.getState().setFormOpen(!1), f.getState().setTitleFocused(!1), f.getState().setBodyFocused(!1), f.getState().setPreviewing(!1));
                          },
                          error: j,
                          className: en.title,
                          inputRef: n
                      }),
                s
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(es, { parentChannel: t }),
                              (0, i.jsx)(eh, {
                                  parentChannel: t,
                                  canCreatePost: l
                              })
                          ]
                      })
            ]
        });
    });
function es(e) {
    let { parentChannel: t } = e,
        { guidelinesOpen: n } = (0, W.xH)((e) => {
            let { guidelinesOpen: t } = e;
            return { guidelinesOpen: t };
        }, c.X),
        r = (0, W.AF)(),
        l = null != t.topic && 0 !== t.topic.length,
        s = () => {
            r.getState().setGuidelinesOpen(!n);
        };
    return l
        ? (0, i.jsx)(g.ua7, {
              text: et.intl.string(et.t['4d4T4u']),
              children: (e) =>
                  (0, i.jsx)(g.P3F, {
                      ...e,
                      onClick: s,
                      className: a()(en.forumPostFormButton, { [en.forumPostFormButtonActive]: n }),
                      children: (0, i.jsx)(g.snC, {
                          size: 'md',
                          color: 'currentColor',
                          ...e
                      })
                  })
          })
        : null;
}
let eo = r.memo(function (e) {
        let { parentChannel: t, textValue: n } = e,
            r = new k.ZP({
                channelId: t.id,
                content: n
            }),
            { content: l } = (0, I.Z)(r, {
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
                    message: r,
                    channel: t
                },
                l,
                !1
            );
        return (0, i.jsx)('div', {
            className: a()(en.channelTextAreaInner, en.previewTextArea),
            children: s
        });
    }),
    ec = r.memo(function (e) {
        let { parentChannel: t, submit: n, disabled: l = !1, editorRef: s, setEditorRef: d } = e,
            u = (0, h.e7)([F.default], () => F.default.getCurrentUser());
        o()(null != u, 'current user cannot be null');
        let {
                messageError: m,
                previewing: x,
                textAreaState: f,
                bodyFocused: p,
                formOpen: v
            } = (0, W.xH)((e) => {
                let { messageError: t, textAreaState: n, previewing: i, bodyFocused: r, formOpen: l } = e;
                return {
                    messageError: t,
                    textAreaState: n,
                    previewing: i,
                    bodyFocused: r,
                    formOpen: l
                };
            }, c.X),
            _ = (0, W.AF)();
        r.useEffect(
            () => () =>
                (0, G.Vn)({
                    guildId: t.guild_id,
                    channelId: t.id
                }),
            [t.guild_id, t.id]
        );
        let j = r.useCallback(() => {
                _.getState().setBodyFocused(!0);
            }, [_]),
            N = r.useCallback(() => {
                _.getState().setBodyFocused(!1);
            }, [_]),
            T = r.useCallback(
                (e, t, n) => {
                    let { setTextAreaState: i } = _.getState();
                    i({
                        textValue: t,
                        richValue: n
                    });
                },
                [_]
            ),
            I = r.useCallback(
                (e) => {
                    let { value: t, uploads: i, stickers: r } = e;
                    return n(t, r, i);
                },
                [n]
            );
        (0, O.yp)({
            event: $.CkL.TEXTAREA_FOCUS,
            handler: j
        }),
            (0, O.yp)({
                event: $.CkL.TEXTAREA_BLUR,
                handler: N
            });
        let S = (0, B.Op)(m, { content: f.textValue });
        return (0, i.jsx)('div', {
            className: en.bodyContainer,
            children: (0, i.jsxs)('div', {
                className: en.contentContainer,
                children: [
                    x
                        ? (0, i.jsx)(eo, {
                              parentChannel: t,
                              textValue: f.textValue
                          })
                        : (0, i.jsx)('div', {
                              onClick: j,
                              children: (0, i.jsx)(C.Z, {
                                  type: ei,
                                  setEditorRef: d,
                                  channel: t,
                                  placeholder: et.intl.string(et.t['8IPnv7']),
                                  textValue: f.textValue,
                                  richValue: f.richValue,
                                  focused: p,
                                  className: en.channelTextArea,
                                  innerClassName: a()(en.channelTextAreaInner, { [en.channelTextAreaInnerError]: null != S }),
                                  onChange: T,
                                  onSubmit: I,
                                  promptToUpload: D.d,
                                  disabled: l,
                                  onKeyDown: (e) => {
                                      if ((('ArrowUp' === e.key || 'ArrowDown' === e.key) && e.stopPropagation(), 'Home' === e.key || 'End' === e.key)) {
                                          if (null == s) return;
                                          e.preventDefault(), e.stopPropagation();
                                          let t = s.getSlateEditor();
                                          if (null == t) return;
                                          'Home' === e.key ? b.Q.resetSelectionToStart(t) : b.Q.resetSelectionToEnd(t);
                                      }
                                      v && 'Escape' === e.key && !_.getState().submitting && (null == s || s.blur(), _.getState().setFormOpen(!1), _.getState().setTitleFocused(!1), _.getState().setBodyFocused(!1), _.getState().setPreviewing(!1));
                                  },
                                  autoCompletePosition: 'bottom'
                              })
                          }),
                    (0, i.jsx)(g.pdY, { error: S })
                ]
            })
        });
    });
function ed() {
    return (0, i.jsx)('div', {
        className: en.previewModeIndicator,
        children: (0, i.jsx)(g.Text, {
            variant: 'text-sm/normal',
            color: 'interactive-normal',
            children: et.intl.string(et.t['WE/cYm'])
        })
    });
}
function eu() {
    let { previewing: e } = (0, W.xH)((e) => {
            let { previewing: t } = e;
            return { previewing: t };
        }, c.X),
        t = (0, W.AF)(),
        n = r.useCallback(() => {
            t.getState().setPreviewing(!e), (0, G.nE)();
        }, [e, t]);
    return (0, i.jsx)(g.ua7, {
        text: e ? et.intl.string(et.t.ojM1xM) : et.intl.string(et.t.SKNnqq),
        children: (t) =>
            (0, i.jsx)(g.P3F, {
                ...t,
                onClick: n,
                className: a()(en.forumPostFormButton, { [en.forumPostFormButtonActive]: e }),
                children: e
                    ? (0, i.jsx)(g.kZF, {
                          size: 'md',
                          color: 'currentColor',
                          ...t
                      })
                    : (0, i.jsx)(g.tEF, {
                          size: 'md',
                          color: 'currentColor',
                          ...t
                      })
            })
    });
}
let em = r.memo(function (e) {
    let { parentChannel: t, canCreatePost: n, className: l } = e,
        {
            textAreaState: a,
            appliedTags: s,
            name: o
        } = (0, W.xH)((e) => {
            let { textAreaState: t, appliedTags: n, name: i } = e;
            return {
                textAreaState: t,
                appliedTags: n,
                name: i
            };
        }, c.X),
        { rateLimitPerUser: d } = t,
        u = d > 0,
        m = (0, h.e7)([A.Z], () => A.Z.getSlowmodeCooldownGuess(t.id, A.S.CreateThread)),
        x = (0, h.e7)([M.Z], () => M.Z.can($.Plq.MANAGE_THREADS, t) || M.Z.can($.Plq.MANAGE_CHANNELS, t)),
        f = t.hasFlag(ee.zZ.REQUIRE_TAG) && 0 === s.size && o.length > 0 && a.textValue.length > 0,
        p = (0, W.AF)(),
        C = r.useCallback(() => {
            p.getState().setBodyFocused(!1);
        }, [p]),
        b = r.useMemo(() => '' !== o.trim() && '' !== a.textValue.trim(), [o, a.textValue]);
    return (
        r.useEffect(() => {
            b || p.getState().setPreviewing(!1);
        }, [b, p]),
        (0, i.jsxs)('div', {
            className: l,
            children: [
                (0, i.jsx)(ex, { parentChannel: t }),
                (0, i.jsx)('div', { className: en.tagsDivider }),
                (0, i.jsxs)('div', {
                    className: en.controlsContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: en.controls,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: en.wrappedControls,
                                    children: [
                                        (0, i.jsx)(_.Z, {
                                            type: ei,
                                            textValue: a.textValue,
                                            className: en.characterCount
                                        }),
                                        u &&
                                            (0, i.jsx)(J.Z, {
                                                rateLimitPerUser: d,
                                                slowmodeCooldownGuess: m,
                                                isBypassSlowmode: x,
                                                leadingIcon: !0
                                            })
                                    ]
                                }),
                                (0, i.jsx)(es, { parentChannel: t }),
                                b && (0, i.jsx)(eu, {}),
                                (0, i.jsx)(eh, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: u && !x && m > 0
                                })
                            ]
                        }),
                        (0, i.jsx)(
                            v.Z,
                            {
                                type: ei,
                                className: en.expressionPicker,
                                onClick: C
                            },
                            'expression'
                        )
                    ]
                }),
                f &&
                    (0, i.jsx)(g.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-danger',
                        className: en.requiredError,
                        children: et.intl.string(et.t.xPfNQk)
                    })
            ]
        })
    );
});
function eh(e) {
    let { parentChannel: t, canCreatePost: n, disabled: r, disableIfInvalid: l = !1 } = e,
        {
            submitting: a,
            textAreaState: s,
            name: o,
            appliedTags: d,
            formOpen: u
        } = (0, W.xH)((e) => {
            let { submitting: t, textAreaState: n, name: i, appliedTags: r, formOpen: l } = e;
            return {
                submitting: t,
                textAreaState: n,
                name: i,
                appliedTags: r,
                formOpen: l
            };
        }, c.X),
        m = t.hasFlag(ee.zZ.REQUIRE_TAG) && 0 === d.size && o.length > 0 && s.textValue.length > 0,
        x = (0, h.Wu)([L.Z], () => L.Z.getUploads(t.id, Z.d.FirstThreadMessage)),
        f = s.textValue.trim().length > 0 || x.length > 0,
        p = !m && f && o.trim().length > 0;
    if (__OVERLAY__) return null;
    let v = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, i.jsxs)(g.zxk, {
            ...e,
            size: g.zxk.Sizes.SMALL,
            className: en.submitButton,
            innerClassName: en.submitButtonInner,
            type: 'submit',
            submitting: a,
            disabled: (l && !p) || r || !n,
            children: [
                (0, i.jsx)(g.kBi, {
                    size: 'xs',
                    color: 'currentColor',
                    className: en.submitIcon
                }),
                (0, i.jsx)(g.Text, {
                    variant: 'text-md/semibold',
                    color: 'none',
                    children: u ? et.intl.string(et.t.pIuQIy) : et.intl.string(et.t.TyAuoa)
                })
            ]
        });
    };
    return n
        ? v()
        : (0, i.jsx)(g.ua7, {
              text: et.intl.string(et.t.iyzwnJ),
              children: (e) => v(e)
          });
}
function eg() {
    return Promise.resolve();
}
function ex(e) {
    let { parentChannel: t } = e,
        {
            appliedTags: n,
            toggleAppliedTag: l,
            setPopoutOpen: s
        } = (0, W.xH)((e) => {
            let { appliedTags: t, toggleAppliedTag: n, setPopoutOpen: i } = e;
            return {
                appliedTags: t,
                toggleAppliedTag: n,
                setPopoutOpen: i
            };
        }, c.X),
        o = n.size >= Q.Cn,
        h = (0, d.ZP)({
            id: ''.concat(t.id, '-post-form-tags-navigator'),
            isEnabled: !0,
            wrap: !0,
            scrollToStart: eg,
            scrollToEnd: eg,
            orientation: m.hy.HORIZONTAL
        }),
        { containerRef: x, containerWidth: f } = (0, Y.Z)(),
        p = r.useRef(null),
        [v, C] = r.useState(!0),
        _ = (0, V.Vm)(t),
        [b, j] = r.useState(0);
    return (r.useLayoutEffect(() => {
        var e;
        let t = p.current,
            n = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
            i = null == t || null == n || n.clientHeight > t.clientHeight;
        if ((i !== v && C(i), i && null != x.current && null != n && null != n.children)) {
            let { left: e, top: t } = x.current.getBoundingClientRect(),
                i = 0;
            for (let r of n.children) {
                let { right: n, top: l, height: a } = r.getBoundingClientRect();
                if (l - t > a) break;
                n - e > i && (i = n - e);
            }
            j(i);
        }
    }, [_, v, x, f]),
    0 === _.length)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)('div', {
                  className: en.tagsContainer,
                  ref: x,
                  children: [
                      (0, i.jsx)(g.lO_, {
                          size: 'xs',
                          color: 'currentColor',
                          className: en.tagsIcon
                      }),
                      (0, i.jsx)('div', {
                          className: en.tagList,
                          ref: p,
                          children: (0, i.jsx)(u.bG, {
                              navigator: h,
                              children: (0, i.jsx)(u.SJ, {
                                  children: (e) => {
                                      let { ref: t, ...r } = e;
                                      return (0, i.jsx)('div', {
                                          className: en.tagListInner,
                                          ref: t,
                                          ...r,
                                          children: _.map((e) =>
                                              (0, i.jsx)(
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
                                      });
                                  }
                              })
                          })
                      }),
                      v &&
                          (0, i.jsx)(g.yRy, {
                              onRequestOpen: () => s(!0),
                              onRequestClose: () => s(!1),
                              renderPopout: (e) => {
                                  let { closePopout: r } = e;
                                  return (0, i.jsx)(q.Z, {
                                      parentChannel: t,
                                      appliedTags: n,
                                      maxTagsApplied: o,
                                      onSelectTag: l,
                                      onClose: r
                                  });
                              },
                              position: 'bottom',
                              align: 'center',
                              children: (e) =>
                                  (0, i.jsxs)(g.zxk, {
                                      ...e,
                                      size: g.zxk.Sizes.TINY,
                                      className: en.tagsButton,
                                      innerClassName: en.tagsButtonInner,
                                      style: { left: b },
                                      look: g.zxk.Looks.LINK,
                                      'aria-label': et.intl.string(et.t.N5vP9P),
                                      children: [
                                          et.intl.string(et.t.IkpM1d),
                                          (0, i.jsx)(g.CJ0, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 16
                                          })
                                      ]
                                  })
                          }),
                      (0, i.jsxs)(g.zxk, {
                          size: g.zxk.Sizes.TINY,
                          className: a()(en.tagsButton, en.tagsButtonPlaceholder),
                          innerClassName: en.tagsButtonInner,
                          look: g.zxk.Looks.LINK,
                          'aria-label': et.intl.string(et.t.N5vP9P),
                          children: [
                              et.intl.string(et.t.IkpM1d),
                              (0, i.jsx)(g.CJ0, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 16
                              })
                          ]
                      })
                  ]
              })
          });
}
function ef(e) {
    let { style: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: n,
        style: t,
        children: (0, i.jsx)('div', { className: en.loader })
    });
}
